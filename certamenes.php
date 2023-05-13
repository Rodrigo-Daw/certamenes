<?php

$server = "mysql:dbname=certamenes";
$user = 'root';
$pw = '';
$conexion = new PDO($server,$user,$pw,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\''));

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

class Certamenes{}

function listarCertamenes($connection){

    $listado = array();
    $sql = "SELECT * FROM certamenesmusica ORDER BY fecha";
    $query = $connection->prepare($sql);
	$query->execute();

    while ($row = $query->fetch(PDO::FETCH_NAMED)){
		$certamen = new Certamenes();
		$certamen->id = $row['id'];
		$certamen->nombre_certamen = $row['nombre_certamen'];
		$certamen->fecha = $row['fecha'];
		$certamen->lugar = $row['lugar'];

		$listado[] = $certamen;
	}

    return $listado;
}

class CertamenesCelebrados{}

function certamenesCelebrados($connection){

    $listado = array();
    $sql = "SELECT * FROM certamenes_celebrados ORDER BY fecha DESC";
    $query = $connection->prepare($sql);
	$query->execute();

    while ($row = $query->fetch(PDO::FETCH_NAMED)){
		$certamen = new CertamenesCelebrados();
		$certamen->id = $row['id'];
		$certamen->nombre_certamen = $row['nombre_certamen'];
		$certamen->fecha = $row['fecha'];
		$certamen->lugar = $row['lugar'];

		$listado[] = $certamen;
	}

    return $listado;
}


class SoloBandas{}

function listarSoloBandas($connection){

    $listado = array();
    $sql = "SELECT * FROM bandasdemusica";
    $query = $connection->prepare($sql);
	$query->execute();

    while ($row = $query->fetch(PDO::FETCH_NAMED)){
		$soloBandas = new SoloBandas();
		$soloBandas->id = $row['id'];
		$soloBandas->nombre_banda = $row['nombre_banda'];
		$soloBandas->nombre_director = $row['nombre_director'];
		$soloBandas->numero_musicos = $row['numero_musicos'];
        $soloBandas->localidad = $row['localidad'];
        $soloBandas->provincia = $row['provincia'];
        $soloBandas->codigo_postal= $row['codigo_postal'];
        $soloBandas->telefono = $row['telefono'];
        $soloBandas->correo_electronico = $row['correo_electronico'];
        $soloBandas->clave = $row['clave'];

		$listado[] = $soloBandas;
	}

    return $listado;
}

class Bandas{}

function listarBandas($connection){

    $listado = array();
    $sql = "SELECT * FROM bandasdemusica INNER JOIN banda_certamen ON bandasdemusica.id=banda_certamen.banda_id
                INNER JOIN certamenesmusica ON banda_certamen.certamen_id=certamenesmusica.id ORDER BY nombre_certamen";
    $query = $connection->prepare($sql);
	$query->execute();

    while ($row = $query->fetch(PDO::FETCH_NAMED)){
		$certamen = new Bandas();
		$certamen->id = $row['id'];
		$certamen->nombre_banda = $row['nombre_banda'];
		$certamen->nombre_director = $row['nombre_director'];
		$certamen->numero_musicos = $row['numero_musicos'];
        $certamen->localidad = $row['localidad'];
        $certamen->provincia = $row['provincia'];
        $certamen->codigo_postal = $row['codigo_postal'];
        $certamen->telefono = $row['telefono'];
        $certamen->correo_electronico = $row['correo_electronico'];
        $certamen->clave = $row['clave'];
        $certamen->nombre_certamen = $row['nombre_certamen'];

		$listado[] = $certamen;
	}

    return $listado;
}

function insertarBanda($connection, $jsonBanda){

    $hash=password_hash($jsonBanda->clave, PASSWORD_DEFAULT);

    $sql = "INSERT INTO bandasdemusica (nombre_banda, nombre_director, numero_musicos, localidad, provincia, codigo_postal, telefono, correo_electronico, clave) VALUES (?,?,?,?,?,?,?,?,?)";
    $sentencia = $connection->prepare($sql);
    $resultado = $sentencia->execute([$jsonBanda->nombre_banda, $jsonBanda->nombre_director, $jsonBanda->numero_musicos, $jsonBanda->localidad, $jsonBanda->provincia, $jsonBanda->codigo_postal, $jsonBanda->telefono, $jsonBanda->correo_electronico, $hash]);
    
    echo json_encode([
        "resultado" => $resultado,
    ]);
}

function insertarCertamen($connection, $jsonCertamen){

    $sql = "INSERT INTO certamenesmusica (nombre_certamen, fecha, lugar) VALUES (?,?,?)";
    $sentencia = $connection->prepare($sql);
    $resultado = $sentencia->execute([$jsonCertamen->nombre_certamen, $jsonCertamen->fecha, $jsonCertamen->lugar]);
    
    echo json_encode([
        "resultado" => $resultado,
    ]);
}


function inscripcion($connection, $banda_id, $certamen_id){

    $sql = "INSERT INTO banda_certamen (banda_id, certamen_id, fecha, hora) VALUES (?,?,CURRENT_DATE(), CURTIME())";
    $sentencia = $connection->prepare($sql);
    $resultado = $sentencia->execute([$banda_id, $certamen_id]);

    echo json_encode([
        "resultado" => $resultado,
    ]);
}

class Login{}

function accesoBanda($connection, $jsonAcceso){

    $sql = "SELECT * FROM bandasdemusica";
    $query = $connection->prepare($sql);
	$query->execute();

    while($row = $query->fetch(PDO::FETCH_NAMED)){

		$login = new Login();
        $login->id = $row['id'];
        $login->correo_electronico = $row['correo_electronico'];
        $login->clave = $row['clave'];

        if($jsonAcceso->correo_electronico == $login->correo_electronico && password_verify($jsonAcceso->clave, $login->clave)){
            $usuario =  $login->id;
            return $usuario;
        }
    }
}

class Juez{}

function accesoJuez($connection, $jsonJuez){

    $sql = "SELECT * FROM jueces";
    $query = $connection->prepare($sql);
	$query->execute();

    while($row = $query->fetch(PDO::FETCH_NAMED)){

		$login = new Juez();
        $login->id = $row['id'];
        $login->correo_electronico = $row['correo_electronico'];
        $login->clave = $row['clave'];

        if($jsonJuez->correo_electronico == $login->correo_electronico && $jsonJuez->clave == $login->clave){
            $usuario =  $login->id;
            return $usuario;
        }
    }
}

class Banda{}

function getBanda($connection, $id){
    $sql = "SELECT * FROM bandasdemusica WHERE id = ?";
    $stmt = $connection->prepare($sql);
    $stmt->bindParam(1, $id, PDO::PARAM_INT);
    $stmt->execute();
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    if ($row) {
        $banda = new Banda();
        $banda->id = $row['id'];
        $banda->nombre_banda = $row['nombre_banda'];
        $banda->nombre_director = $row['nombre_director'];
        $banda->numero_musicos = $row['numero_musicos'];
        $banda->localidad = $row['localidad'];
        $banda->provincia = $row['provincia'];
        $banda->codigo_postal = $row['codigo_postal'];
        $banda->telefono = $row['telefono'];
        $banda->correo_electronico = $row['correo_electronico'];
        return $banda;
    } else {
        return null;
    }
}

class Nota{}

function getNota($connection, $id){

    $listado = array();
    $sql = "SELECT * FROM bandasdemusica INNER JOIN banda_cert_celebrado ON bandasdemusica.id=banda_cert_celebrado.banda_id 
        INNER JOIN certamenes_celebrados ON banda_cert_celebrado.certamen_id=certamenes_celebrados.id 
        WHERE certamenes_celebrados.id = ? ORDER BY nota";
    $stmt = $connection->prepare($sql);
    $stmt->bindParam(1, $id, PDO::PARAM_INT);
    $stmt->execute();
    while ($row = $stmt->fetch(PDO::FETCH_NAMED)){
            $certamen = new Nota();
            $certamen->id_ambos = $row['id_ambos'];
            $certamen->nombre_banda = $row['nombre_banda'];
            $certamen->nombre_certamen = $row['nombre_certamen'];
            $certamen->nota = $row['nota'];
            
            $listado[] = $certamen;
    }
  
    return $listado;
}


function editarBanda($connection, $id, $bandaeditada){

    $sql = "UPDATE bandasdemusica SET nombre_banda=?, nombre_director=?, numero_musicos=?, localidad=?, provincia=?, codigo_postal=?, telefono=?, correo_electronico=? WHERE id=?";
    $stmt = $connection->prepare($sql);
    
    
    $stmt->bindParam(9,$id, PDO::PARAM_INT);

    $stmt->bindParam(1, $bandaeditada->nombre_banda, PDO::PARAM_STR);
    $stmt->bindParam(2, $bandaeditada->nombre_director, PDO::PARAM_STR);
    $stmt->bindParam(3, $bandaeditada->numero_musicos, PDO::PARAM_STR);
    $stmt->bindParam(4, $bandaeditada->localidad, PDO::PARAM_STR);
    $stmt->bindParam(5, $bandaeditada->provincia, PDO::PARAM_STR);
    $stmt->bindParam(6, $bandaeditada->codigo_postal, PDO::PARAM_STR);
    $stmt->bindParam(7, $bandaeditada->telefono, PDO::PARAM_STR);
    $stmt->bindParam(8, $bandaeditada->correo_electronico, PDO::PARAM_STR);
    
    $resultado = $stmt->execute();

    echo json_encode([
        "resultado" => $resultado,
    ]);
}

function puntuarBanda($connection, $id, $nota){

    $sql = "UPDATE banda_cert_celebrado SET nota=? WHERE id=?";
    $stmt = $connection->prepare($sql);

    $stmt->bindParam(2,$id, PDO::PARAM_INT);
    $stmt->bindParam(1, $nota, PDO::PARAM_STR);

    $resultado = $stmt->execute();

    echo json_encode([
        "resultado" => $resultado,
    ]);
}

function eliminarBanda($connection, $id){
    
    $sentencia = "DELETE FROM bandasdemusica WHERE id = ?";
    $stmt = $connection->prepare($sentencia);
    $stmt->bindParam(1,$id, PDO::PARAM_INT);
    $resultado = $stmt->execute();

    echo json_encode([
        "resultado" => $resultado,
    ]);
}



if(isset($_GET['opcion'])){
    if($_GET['opcion'] == 'proximosCertamenes'){
        echo json_encode( listarCertamenes($conexion), JSON_UNESCAPED_UNICODE );
    }
    else if($_GET['opcion'] == 'certamenesCelebrados'){
        echo json_encode( certamenesCelebrados($conexion), JSON_UNESCAPED_UNICODE );
    }
    else if($_GET['opcion'] == 'soloBandas'){
        echo json_encode( listarSoloBandas($conexion), JSON_UNESCAPED_UNICODE );
    }
    else if($_GET['opcion'] == 'bandas'){
        echo json_encode( listarBandas($conexion), JSON_UNESCAPED_UNICODE );
    }
    else if($_GET['opcion'] == 'registrar'){

        $jsonBanda = json_decode(file_get_contents("php://input"));

        echo json_encode( insertarBanda($conexion, $jsonBanda), JSON_UNESCAPED_UNICODE );
    }
    else if($_GET['opcion'] == 'acceso'){
        
        $jsonAcceso = json_decode(file_get_contents("php://input"));

        echo json_encode( accesoBanda($conexion, $jsonAcceso), JSON_UNESCAPED_UNICODE );

    }
    else if($_GET['opcion'] == 'juez'){

        $jsonJuez = json_decode(file_get_contents("php://input"));

        echo json_encode( accesoJuez($conexion, $jsonJuez), JSON_UNESCAPED_UNICODE );
    }
    else if($_GET['opcion'] == 'crud' & isset($_GET['id'])){

        $id = $_GET['id'];

        echo json_encode( getBanda($conexion, $id), JSON_UNESCAPED_UNICODE );
    } 
    else if($_GET['opcion'] == 'editar' && isset($_GET['id'])){

        $id = $_GET['id'];

        $bandaeditada = json_decode(file_get_contents("php://input"));
        echo json_encode( editarBanda($conexion, $id, $bandaeditada), JSON_UNESCAPED_UNICODE );
    }
    else if($_GET['opcion'] == 'eliminar' && isset($_GET['id'])){

        $id = $_GET['id'];
        
        echo json_encode( eliminarBanda($conexion, $id), JSON_UNESCAPED_UNICODE );
    } 
    else if($_GET['opcion'] == 'listarPorCertamen' && isset($_GET['id'])){

        $id = $_GET['id'];
        $nota = json_decode(file_get_contents("php://input"));

        echo json_encode( puntuarBanda($conexion, $id, $nota), JSON_UNESCAPED_UNICODE );
    }
    else if($_GET['opcion'] == 'inscribirse' && isset($_GET['id'])){

        $banda_id = $_GET['id'];

        $certamen_id = json_decode(file_get_contents("php://input"));

        echo json_encode( inscripcion($conexion, $banda_id, $certamen_id), JSON_UNESCAPED_UNICODE );
    } 
    else if($_GET['opcion'] == 'nuevoCertamen'){

        $jsonCertamen = json_decode(file_get_contents("php://input"));

        echo json_encode( insertarCertamen($conexion, $jsonCertamen), JSON_UNESCAPED_UNICODE );
    }
    else if($_GET['opcion'] == 'puntuacion' & isset($_GET['id'])){

        $id = $_GET['id'];

        echo json_encode( getNota($conexion, $id), JSON_UNESCAPED_UNICODE );
    } 
    else{
        echo "Hay errores";
    }
}else{
    echo "Hay algún error";
}
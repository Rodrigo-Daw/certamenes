<?php

$server = "mysql:dbname=certamenes";
$user = 'root';
$pw = '';
$conexion = new PDO($server,$user,$pw,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\''));

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header('Access-Control-Allow-Methods: GET, POST');

class Certamenes{}

function listarCertamenes($connection){

    $listado = array();
    $sql = "SELECT * FROM certamenesMusica ORDER BY fecha";
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

class Banda{}

function getBanda($connection, $id){

    $listado = array();
    $sql = "SELECT * FROM bandasdemusica WHERE id = ?";
    $query = $connection->prepare($sql);
	$query->execute();

    while($row = $query->fetch(PDO::FETCH_NAMED)){

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

        $listado[] = $banda;
    }

    return $listado;
}



if(isset($_GET['opcion'])){
    if($_GET['opcion'] == 'proximosCertamenes'){
        echo json_encode( listarCertamenes($conexion), JSON_UNESCAPED_UNICODE );
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
    else if($_GET['opcion'] == 'crud' & $_GET['id']){

        if(isset($_GET['id']) & !empty($_GET['id'])){
            $id = $_GET['id'];
        }else{
            echo 'No hay id';
            var_dump('No hay id');
        }

        echo json_encode( getBanda($conexion, $id), JSON_UNESCAPED_UNICODE );
    } 
    else{
        echo "Hay errores";
    }
}else{
    echo "Hay algún error";
}
<?php

namespace App\Entity;

use App\Repository\BandasDeMusicaRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=BandasDeMusicaRepository::class)
 */
class BandasDeMusica
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nombre;

    /**
     * @ORM\Column(type="integer")
     */
    private $numero_de_musicos;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nombre_del_director;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $pueblo;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $provincia;

    /**
     * @ORM\Column(type="integer")
     */
    private $codigo_postal;

    /**
     * @ORM\Column(type="integer")
     */
    private $telefono;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $correo_electronico;

    /**
     * @ORM\ManyToOne(targetEntity=Certamenes::class, inversedBy="bandasDeMusicas")
     */
    private $certamen;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNombre(): ?string
    {
        return $this->nombre;
    }

    public function setNombre(string $nombre): self
    {
        $this->nombre = $nombre;

        return $this;
    }

    public function getNumeroDeMusicos(): ?int
    {
        return $this->numero_de_musicos;
    }

    public function setNumeroDeMusicos(int $numero_de_musicos): self
    {
        $this->numero_de_musicos = $numero_de_musicos;

        return $this;
    }

    public function getNombreDelDirector(): ?string
    {
        return $this->nombre_del_director;
    }

    public function setNombreDelDirector(string $nombre_del_director): self
    {
        $this->nombre_del_director = $nombre_del_director;

        return $this;
    }

    public function getPueblo(): ?string
    {
        return $this->pueblo;
    }

    public function setPueblo(string $pueblo): self
    {
        $this->pueblo = $pueblo;

        return $this;
    }

    public function getProvincia(): ?string
    {
        return $this->provincia;
    }

    public function setProvincia(string $provincia): self
    {
        $this->provincia = $provincia;

        return $this;
    }

    public function getCodigoPostal(): ?int
    {
        return $this->codigo_postal;
    }

    public function setCodigoPostal(int $codigo_postal): self
    {
        $this->codigo_postal = $codigo_postal;

        return $this;
    }

    public function getTelefono(): ?int
    {
        return $this->telefono;
    }

    public function setTelefono(int $telefono): self
    {
        $this->telefono = $telefono;

        return $this;
    }

    public function getCorreoElectronico(): ?string
    {
        return $this->correo_electronico;
    }

    public function setCorreoElectronico(string $correo_electronico): self
    {
        $this->correo_electronico = $correo_electronico;

        return $this;
    }

    public function getCertamen(): ?Certamenes
    {
        return $this->certamen;
    }

    public function setCertamen(?Certamenes $certamen): self
    {
        $this->certamen = $certamen;

        return $this;
    }
}

<?php
namespace App\Controller;

use App\Entity\Prueba;
use App\Form\PruebaType;
use App\Repository\PruebaRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class TestController extends AbstractController
{
    /**
     * @Route("/private/test", name="private_test")
     */
    public function privada(): Response
    {
       return $this->render('test/privada.html.twig', ["msg"=>"Zona Privada"]);
    }
    
    /**
     * @Route("/public/test", name="public_test")
     */
    public function publica(): Response
    {
       return $this->render('test/publica.html.twig', ["msg"=>"Zona Publica"]);
    }
}
<?php

namespace App\Controller;

use App\Entity\BandasDeMusica;
use App\Form\BandasDeMusicaType;
use App\Repository\BandasDeMusicaRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/bandas/de/musica")
 */
class BandasDeMusicaController extends AbstractController
{
    /**
     * @Route("/", name="app_bandas_de_musica_index", methods={"GET"})
     */
    public function index(BandasDeMusicaRepository $bandasDeMusicaRepository): Response
    {
        return $this->render('bandas_de_musica/index.html.twig', [
            'bandas_de_musicas' => $bandasDeMusicaRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="app_bandas_de_musica_new", methods={"GET", "POST"})
     */
    public function new(Request $request, BandasDeMusicaRepository $bandasDeMusicaRepository): Response
    {
        $bandasDeMusica = new BandasDeMusica();
        $form = $this->createForm(BandasDeMusicaType::class, $bandasDeMusica);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $bandasDeMusicaRepository->add($bandasDeMusica, true);

            return $this->redirectToRoute('app_bandas_de_musica_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('bandas_de_musica/new.html.twig', [
            'bandas_de_musica' => $bandasDeMusica,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="app_bandas_de_musica_show", methods={"GET"})
     */
    public function show(BandasDeMusica $bandasDeMusica): Response
    {
        return $this->render('bandas_de_musica/show.html.twig', [
            'bandas_de_musica' => $bandasDeMusica,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="app_bandas_de_musica_edit", methods={"GET", "POST"})
     */
    public function edit(Request $request, BandasDeMusica $bandasDeMusica, BandasDeMusicaRepository $bandasDeMusicaRepository): Response
    {
        $form = $this->createForm(BandasDeMusicaType::class, $bandasDeMusica);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $bandasDeMusicaRepository->add($bandasDeMusica, true);

            return $this->redirectToRoute('app_bandas_de_musica_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('bandas_de_musica/edit.html.twig', [
            'bandas_de_musica' => $bandasDeMusica,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="app_bandas_de_musica_delete", methods={"POST"})
     */
    public function delete(Request $request, BandasDeMusica $bandasDeMusica, BandasDeMusicaRepository $bandasDeMusicaRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$bandasDeMusica->getId(), $request->request->get('_token'))) {
            $bandasDeMusicaRepository->remove($bandasDeMusica, true);
        }

        return $this->redirectToRoute('app_bandas_de_musica_index', [], Response::HTTP_SEE_OTHER);
    }
}

<?php

namespace App\Form;

use App\Entity\BandasDeMusica;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class BandasDeMusicaType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nombre')
            ->add('numero_de_musicos')
            ->add('nombre_del_director')
            ->add('pueblo')
            ->add('provincia')
            ->add('codigo_postal')
            ->add('telefono')
            ->add('correo_electronico')
            ->add('certamen')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => BandasDeMusica::class,
        ]);
    }
}

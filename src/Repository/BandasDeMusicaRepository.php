<?php

namespace App\Repository;

use App\Entity\BandasDeMusica;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<BandasDeMusica>
 *
 * @method BandasDeMusica|null find($id, $lockMode = null, $lockVersion = null)
 * @method BandasDeMusica|null findOneBy(array $criteria, array $orderBy = null)
 * @method BandasDeMusica[]    findAll()
 * @method BandasDeMusica[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BandasDeMusicaRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, BandasDeMusica::class);
    }

    public function add(BandasDeMusica $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(BandasDeMusica $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return BandasDeMusica[] Returns an array of BandasDeMusica objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('b')
//            ->andWhere('b.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('b.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?BandasDeMusica
//    {
//        return $this->createQueryBuilder('b')
//            ->andWhere('b.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}

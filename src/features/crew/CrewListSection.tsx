'use client';

import { CrewProject } from '@/entities/crew/type';
import { useSearchParams, useRouter } from 'next/navigation';
import { useMemo } from 'react';
import CreateCrewBanner from './ui/CreateCrewBanner';
import CrewCardList from './ui/CrewCardList';
import CrewPagination from './ui/CrewPagination';

interface Props {
  crew: CrewProject[];
}

const ITEMS_PER_PAGE = 8;

export default function CrewListSection({ crew }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get('page') ?? '1');
  const totalPages = Math.ceil(crew.length / ITEMS_PER_PAGE);

  const paginatedCrew = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return crew.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage, crew]);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', String(page));
    router.push(`?${params.toString()}`);
  };

  return (
    <>
      <CreateCrewBanner />
      <CrewCardList crew={paginatedCrew} />
      <CrewPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
}

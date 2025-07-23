interface Props {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function CrewPagination({ totalPages, currentPage, onPageChange }: Props) {
  return (
    <section className='mb-20 flex justify-center'>
      <div className='flex gap-2'>
        {Array.from({ length: totalPages }).map((_, idx) => {
          const pageNum = idx + 1;
          return (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`h-9 w-9 rounded-md text-sm ${
                currentPage === pageNum ? 'text-mainRed font-bold' : 'text-mainBlack'
              }`}
            >
              {pageNum}
            </button>
          );
        })}
      </div>
    </section>
  );
}

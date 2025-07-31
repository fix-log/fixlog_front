'use client';

import { navItems } from '@/widgets/search/SearchNav';
import Link from 'next/link';

import { ChevronRight } from 'lucide-react';

export default function SearchLayout({
  title,
  children,
  searchId,
}: {
  title: string;
  children: React.ReactNode;
  searchId: string;
}) {
  const matchedNavItem = navItems.find((item) => item.name === title);

  return (
    <section className='mx-auto mt-[40px] mb-8 w-[92%] rounded-[5px] bg-white shadow'>
      <h3 className='border-gray5 border-b pt-[20px] pb-[20px] pl-[40px] text-[18px] font-extrabold'>
        {title}
      </h3>
      {children}

      {matchedNavItem && (
        <Link
          href={matchedNavItem.href.replace('id', searchId)}
          className='border-gray5 flex items-center justify-center border-t py-[18px]'
        >
          <p className='text-gray3 text-[14px]'>더보기</p>
          <ChevronRight size={16} className='text-gray3' />
        </Link>
      )}
    </section>
  );
}

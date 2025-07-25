import { navItems } from '@/widgets/search/SearchNav';
import Link from 'next/link';

import { ChevronRight } from 'lucide-react';

export default function SectionLayout({
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
    <section className='mb-8 rounded-[12px] bg-white p-6 shadow'>
      <h2>{title}</h2>
      {children}

      {matchedNavItem && (
        <Link href={matchedNavItem.href.replace('id', searchId)}>
          더보기 <ChevronRight size={20} className='text-gray5' />
        </Link>
      )}
    </section>
  );
}

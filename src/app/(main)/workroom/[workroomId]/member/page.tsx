import MemberList from '@/widgets/workrome/MemberList';

export default async function Page() {
  return (
    <section className='flex w-full flex-col items-center gap-26 py-10 md:py-22'>
      <MemberList />
    </section>
  );
}

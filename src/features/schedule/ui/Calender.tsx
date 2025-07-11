import CalenderContent from './CalenderContent';
import CalenderHeader from './CalenderHeader';

export default async function Calender() {
  return (
    <section className='px-3 py-[6px]'>
      <CalenderHeader />
      <CalenderContent />
    </section>
  );
}

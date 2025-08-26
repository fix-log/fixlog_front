import CalenderContent from './CalenderContent';
import CalenderHeader from './CalenderHeader';

interface CalenderProps {
  workroomId: string;
  selectedDate: Date;
}

export default async function Calender({ workroomId, selectedDate }: CalenderProps) {
  return (
    <section className='px-3 py-[6px]'>
      <CalenderHeader workroomId={workroomId} selectedDate={selectedDate} />
      <CalenderContent workroomId={workroomId} selectedDate={selectedDate} />
    </section>
  );
}

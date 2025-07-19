import { CrewProject } from '@/shared/types/crew';
import CrewCard from './CrewCard';

interface Props {
  crew: CrewProject[];
}

export default function CrewCardList({ crew }: Props) {
  return (
    <section className='mx-auto mt-8 mb-8 flex w-full max-w-[1440px] flex-col gap-[22px]'>
      {crew.map((project) => (
        <CrewCard key={`${project.id}-${project.title}`} project={project} />
      ))}
    </section>
  );
}

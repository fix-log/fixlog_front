import MemberCard from '@/shared/workroom/ui/MemberCard';
import { dummyMembers, dummyMembersItems } from '@/entities/workroom/dummyMember';

export default function MemberList() {
  const groupedByJob = dummyMembers.reduce(
    (acc, member) => {
      const job = member.job.trim(); // 혹시 띄어쓰기 방지용
      if (!acc[job]) {
        acc[job] = [];
      }
      acc[job].push(member);
      return acc;
    },
    {} as Record<string, dummyMembersItems[]>,
  );

  const data = groupedByJob;
  return (
    <div>
      {/* Object.entries() 객체를 배열로 바꿔줌 */}
      {Object.entries(data).map(([job, members]) => (
        <div key={job} className='border-gray5 mb-[70px] border-b pb-[60px] last:border-b-0'>
          <h2 className='text-h3 mt-[20px] font-bold'>{job}</h2>
          <div className='flex flex-wrap gap-4'>
            {members.map((member) => (
              <MemberCard key={member.id} data={member} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

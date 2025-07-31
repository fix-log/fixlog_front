import { dummyMembers } from '@/entities/workroom/dummyAdmin';

export default function MemberList() {
  return (
    <table className='mt-6 w-full table-fixed border-collapse border-spacing-y-3 p-[20px]'>
      <thead>
        <tr className='text-gray2 border-gray4 border-t border-b text-left text-sm'>
          <th className='w-[25%] px-[20px] py-[15px]'>사용자</th>
          <th className='w-[25%] px-[20px] py-[15px]'>포지션</th>
          <th className='w-[15%] px-[20px] py-[15px]'>역할</th>
          <th className='w-[25%] px-[20px] py-[15px]'>권한</th>
          <th className='w-[10%] px-[20px] py-[15px]' />
        </tr>
      </thead>
      <tbody>
        {dummyMembers.map((member) => (
          <tr
            key={member.id}
            className='border-gray4 rounded-[5px] border-b bg-white px-4 py-3 text-sm'
          >
            {/* 사용자 */}
            <td className='flex items-center gap-3 px-[20px] py-[15px]'>
              <img
                src={member.profileImage}
                alt={`${member.name}의 프로필 이미지`}
                className='size-10 rounded-full object-cover'
              />
              <div className='flex flex-col'>
                <span className='font-semibold'>{member.name}</span>
                <span className='text-gray3 text-xs'>{member.email}</span>
              </div>
            </td>

            {/* 포지션 */}
            <td className='px-[20px] py-[15px]'>
              {member.position.length > 0 ? (
                <div className='flex flex-wrap gap-2'>
                  {member.position.map((pos) => (
                    <span
                      key={pos}
                      className='text-mainRed border-mainRed rounded-full border px-2 py-[2px] text-xs font-medium'
                    >
                      {pos}
                    </span>
                  ))}
                </div>
              ) : (
                <span className='text-gray3 text-sm'>포지션을 선택해주세요</span>
              )}
            </td>

            {/* 역할 */}
            <td className='px-[20px] py-[15px]'>
              <span
                className={
                  member.role === '관리자'
                    ? 'text-pointDarkYellow font-semibold'
                    : member.role === '부관리자'
                      ? 'text-pointDarkYellow font-semibold'
                      : 'text-gray2'
                }
              >
                {member.role}
              </span>
            </td>

            {/* 권한 */}
            <td className='text-gray2 px-[20px] py-[15px]'>{member.permission}</td>

            {/* 편집 */}
            <td className='px-[20px] py-[15px]'>
              <button className='border-gray4 text-gray2 rounded-md border px-3 py-1 text-sm'>
                편집
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

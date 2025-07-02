export default async function Page() {
  // TODO: 프로젝트 일정 데이터 가져오기 (선택된 일자가 포함된 월)

  return (
    // 데이터를 통째로 밑에 컴포넌트에 전달해서 하이드레이션 (오늘 일정 포함, 캘린더 전체 컴포넌트는 클라이언트 컴포넌트로)
    <section className='flex w-full gap-2'>
      {/* 선택된 날짜를 상태로 관리하고 캘린더와 오늘 일정 컴포넌트에 각각 내려서 사용 */}
      <div className='w-2/3 border'>캘린더</div>
      <div className='w-1/3 border'>해당 날짜 상세 컴포넌트</div>
    </section>
  );
}

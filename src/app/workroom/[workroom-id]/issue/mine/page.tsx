export default async function Page() {
  // TODO: 내 이슈 데이터 가져오기

  return (
    <section>
      {/* 내 이슈 페이지 */}
      {/* 목업 */}
      <div>
        <h2 className='text-2xl font-bold'>(아이콘) 여운 (총 갯수)</h2>
        <ul className='flex gap-2'>
          <li>
            <h3>시작 전</h3>
            <div className='h-24 w-48 border'>이슈 카드1</div>
            <div className='h-24 w-48 border'>이슈 카드2</div>
          </li>

          <li>
            <h3>진행 중</h3>
            <div className='h-24 w-48 border'>이슈 카드1</div>
            <div className='h-24 w-48 border'>이슈 카드2</div>
            <div className='h-24 w-48 border'>이슈 카드3</div>
          </li>

          <li>
            <h3>완료</h3>
            <div className='h-24 w-48 border'>이슈 카드1</div>
            <div className='h-24 w-48 border'>이슈 카드2</div>
            <div className='h-24 w-48 border'>이슈 카드3</div>
            <div className='h-24 w-48 border'>이슈 카드4</div>
            <div className='h-24 w-48 border'>이슈 카드5</div>
          </li>
        </ul>
      </div>
    </section>
  );
}

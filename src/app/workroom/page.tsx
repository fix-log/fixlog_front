import Link from 'next/link';

export default function Workroom() {
  return (
    <>
      {/* 워크룸 홈 (로그인 가드 필요) */}
      <div>+ 버튼</div>

      <section>
        <Link href='/workroom/mine'>
          <h2 className='text-2xl font-bold'>내 워크룸 {'>'}</h2>
        </Link>
        <ul className='flex gap-4'>
          <li className='h-56 w-96 border'>
            <Link href='/workroom/1' className='h-full w-full'>
              <div className='h-full w-full'>내 워크룸 카드1</div>
            </Link>
          </li>
          <li className='h-56 w-96 border'>
            <Link href='/workroom/2' className='h-full w-full'>
              <div className='h-full w-full'>내 워크룸 카드2</div>
            </Link>
          </li>
          <li className='h-56 w-96 border'>
            <Link href='/workroom/3' className='h-full w-full'>
              <div className='h-full w-full'>내 워크룸 카드3</div>
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 className='text-2xl font-bold'>참여한 워크룸</h2>
        <ul className='flex flex-wrap gap-4'>
          <li className='h-28 w-60 border'>
            <Link href='/workroom/1' className='h-full w-full'>
              <div className='h-full w-full'>참여한 워크룸 카드1</div>
            </Link>
          </li>
          <li className='h-28 w-60 border'>
            <Link href='/workroom/2' className='h-full w-full'>
              <div className='h-full w-full'>참여한 워크룸 카드2</div>
            </Link>
          </li>
          <li className='h-28 w-60 border'>
            <Link href='/workroom/3' className='h-full w-full'>
              <div className='h-full w-full'>참여한 워크룸 카드3</div>
            </Link>
          </li>
          <li className='h-28 w-60 border'>
            <Link href='/workroom/3' className='h-full w-full'>
              <div className='h-full w-full'>참여한 워크룸 카드4</div>
            </Link>
          </li>
          <li className='h-28 w-60 border'>
            <Link href='/workroom/1' className='h-full w-full'>
              <div className='h-full w-full'>참여한 워크룸 카드5</div>
            </Link>
          </li>
          <li className='h-28 w-60 border'>
            <Link href='/workroom/2' className='h-full w-full'>
              <div className='h-full w-full'>참여한 워크룸 카드6</div>
            </Link>
          </li>
          <li className='h-28 w-60 border'>
            <Link href='/workroom/3' className='h-full w-full'>
              <div className='h-full w-full'>참여한 워크룸 카드7</div>
            </Link>
          </li>
          <li className='h-28 w-60 border'>
            <Link href='/workroom/3' className='h-full w-full'>
              <div className='h-full w-full'>참여한 워크룸 카드8</div>
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}

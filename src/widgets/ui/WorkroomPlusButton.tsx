'use client';

export default function WorkroomPlusButton() {
  const handleClick = () => {
    // TODO: 모달? 드롭다운? 오픈
    console.log('clicked');
  };

  return (
    <button
      onClick={handleClick}
      className='bg-mainRed fixed right-35 bottom-35 flex h-20 w-20 items-center justify-center rounded-full hover:cursor-pointer'
    >
      <span className='text-5xl text-white'>+</span>
    </button>
  );
}

// TODO: 반응형으로 고정 위치 조정

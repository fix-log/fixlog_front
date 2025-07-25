import UserInfo from '@/widgets/userInfo/UserInfo';

export default function UserInfoPage() {
  // 유저 프로필 조회 (cookie 내 userid 토대로 본인 조회 / 타인 조회) : 상단 프로필, 기본정보 카테고리
  // 유저 팔로워/팔로잉 조회 (토탈값) : 상단 팔로워 표시, 팔로워/팔로잉 모달

  return (
    <div className='border-gray4 mt-[47px] mb-[62px] h-[1053px] w-[865px] overflow-hidden rounded-[5px] border'>
      <UserInfo />
    </div>
  );
}

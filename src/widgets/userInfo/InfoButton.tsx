import { userInfoStore } from '@/entities/userInfo/UserInfoStore';
import EditProfileButton from '@/features/userInfo/EditProfileButton';
import FollowButton from '@/features/userInfo/FollowButton';
import ProfileShareButton from '@/features/userInfo/ProfileShareButton';

interface InfoButtonProps {
  followingIds: number[];
}

export default function InfoButton({ followingIds }:InfoButtonProps) {
  const isMe = userInfoStore((s) => s.userInfo.isMe);
  const profileActionButton = isMe ? <EditProfileButton /> : <FollowButton followingIds={followingIds} />;

  return (
    <div className='text-body-m mt-7 flex h-[50px] gap-4 text-center font-bold'>
      {profileActionButton}
      <ProfileShareButton />
    </div>
  );
}

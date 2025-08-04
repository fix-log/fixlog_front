import { userInfoStore } from '@/entities/profile/UserInfoStore';
import EditProfileButton from '@/features/profile/EditProfileButton';
import FollowButton from '@/features/profile/FollowButton';
import ProfileShareButton from '@/features/profile/ProfileShareButton';

interface InfoButtonProps {
  followingIds: number[];
}

export default function InfoButton({ followingIds }: InfoButtonProps) {
  const isMe = userInfoStore((s) => s.userInfo.isMe);
  const profileActionButton = isMe ? (
    <EditProfileButton />
  ) : (
    <FollowButton followingIds={followingIds} />
  );

  return (
    <div className='text-body-m mt-7 flex h-[50px] gap-4 text-center font-bold'>
      {profileActionButton}
      <ProfileShareButton />
    </div>
  );
}

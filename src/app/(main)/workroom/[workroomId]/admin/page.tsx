import MemberManage from '@/widgets/workroom/admin/ui/MemberManage';
import ModifyInfo from '@/widgets/workroom/admin/ui/ModifyInfo';
import ProjectProgress from '@/widgets/workroom/admin/ui/ProjectProgress';

export default async function Page() {
  return (
    <div className='flex w-full flex-col gap-[30px] p-[40px]'>
      <ProjectProgress />
      <ModifyInfo />
      <MemberManage />
    </div>
  );
}

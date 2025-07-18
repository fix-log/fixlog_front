import ChatEmpty from '@/widgets/fixletter/ChatEmpty';
import ChatSidebar from '@/widgets/fixletter/ChatSidebar';
import ChatDetail from '@/widgets/fixletter/ChatDetail';

const hasChat = false;

export default function Fixletter() {
  if (!hasChat) {
    return <ChatEmpty />;
  }
  return (
    <div className='mx-auto flex h-[90vh] max-w-5xl overflow-hidden rounded-xl bg-white shadow'>
      <ChatSidebar />
      <ChatDetail />
    </div>
  );
}

// components/chat/ChatLayout.tsx
import ChatSidebar from './ChatSidebar';
import ChatDetail from './ChatDetail';
import ChatEmpty from './ChatEmpty';

const hasChat = false;

export default function ChatLayout() {
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

const messages = [
  {
    id: 1,
    fromMe: false,
    text: `안녕하세요, 여운님. 협업 제안 해주셔서 감사합니다! 혹시 어떤 프로젝트인지 알려주실 수 있나요?`,
    date: '2025.06.08',
  },
  {
    id: 2,
    fromMe: true,
    text: `안녕하세요, 다고운님
UXUI 디자이너 다고운이라고 합니다!
여운님의 이력을 보며 함께 협업하고 싶은 프로젝트가 있어 제안을 드리고 싶어서 연락드립니다
보시면 답장 부탁드립니다~`,
    date: '2025.06.08',
  },
];

export default function ChatMessages() {
  return (
    <div className='flex flex-1 flex-col gap-2 overflow-y-auto px-8 py-4'>
      {/* 날짜 */}
      <div className='mx-auto my-3 text-xs text-gray-400'>{messages[0].date}</div>
      {/* 메시지 리스트 */}
      {messages.map((msg) => (
        <div key={msg.id} className={`flex ${msg.fromMe ? 'justify-end' : 'justify-start'}`}>
          <div
            className={`max-w-xs rounded-lg px-4 py-2 text-sm whitespace-pre-line ${
              msg.fromMe ? 'border border-gray-300 bg-white' : 'border border-gray-200 bg-gray-50'
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}
    </div>
  );
}

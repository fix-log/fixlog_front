export const messages1: Message[] = [
  {
    id: 1,
    fromMe: false,
    text: `안녕하세요, 여운님. 협업 제안 해주셔서 감사합니다! 혹시 어떤 프로젝트인지 알려주실 수 있나요?`,
    date: '2025.07.19',
    time: '3:45',
  },
  {
    id: 2,
    fromMe: true,
    text: `안녕하세요, 다고운님
          저희 프로젝트는 아시다시피 악덕 고용주가 있습니다
          지는 안하면서 맨날 남들만 괴롭힌다구요
          그래도 하실거예여? `,
    date: '2025.07.19',
    time: '3:50',
  },
  {
    id: 3,
    fromMe: false,
    text: `오! 늦게 봐서 죄송합니다! 넹 할래용`,
    date: '2025.07.19',
    time: '5:14',
  },
  {
    id: 4,
    fromMe: true,
    text: `들어오는 건 자유지만 나가는 건 안 됩니다 그래도 하시겠어요?`,
    date: '2025.07.19',
    time: '5:15',
  },
  {
    id: 5,
    fromMe: false,
    text: `넹`,
    date: '2025.07.19',
    time: '5:15',
  },

  {
    id: 6,
    fromMe: false,
    text: `안녕하세요, 여운님. 협업 제안 해주셔서 감사합니다! 혹시 어떤 프로젝트인지 알려주실 수 있나요?`,
    date: '2025.07.20',
    time: '3:45',
  },
  {
    id: 7,
    fromMe: true,
    text: `안녕하세요, 다고운님
          저희 프로젝트는 아시다시피 악덕 고용주가 있습니다
          지는 안하면서 맨날 남들만 괴롭힌다구요
          그래도 하실거예여? `,
    date: '2025.07.20',
    time: '3:50',
  },
  {
    id: 8,
    fromMe: false,
    text: `오! 늦게 봐서 죄송합니다! 넹 할래용`,
    date: '2025.07.20',
    time: '5:14',
  },
  {
    id: 9,
    fromMe: true,
    text: `들어오는 건 자유지만 나가는 건 안 됩니다 그래도 하시겠어요?`,
    date: '2025.07.20',
    time: '5:15',
  },
  {
    id: 10,
    fromMe: false,
    text: `넹`,
    date: '2025.07.20',
    time: '5:15',
  },
];

export interface Message {
  id: number;
  fromMe: boolean;
  text: string;
  date: string;
  time: string;
}

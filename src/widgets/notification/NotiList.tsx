import { notiCardDummy } from '@/entities/notification/notiDummyData';
import NotiCard from './NotiCard';

export default function NotiList() {
  return (
    <div className='mx-auto w-full max-w-[1400px] gap-10'>
      {notiCardDummy.map((item) => {
        return <NotiCard key={item.id} data={item} />;
      })}
    </div>
  );
}

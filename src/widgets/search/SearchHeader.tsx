import SearchHistory from '@/shared/search/ui/SearchHistory';
import SearchInput from '@/shared/search/ui/SearchInput';

export default function SearchHeader() {
  return (
    <div className='mt-20'>
      <SearchInput />
      <SearchHistory />
    </div>
  );
}

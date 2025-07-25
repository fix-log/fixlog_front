'use client';

import { dummySearchHistory } from '@/entities/search/dummySearchHistoy';
import HistoryItem from './HistoryItem';
import { useState } from 'react';
import Modal from '@/shared/ui/Modal';

const hasSearch = true;

export default function SearchHistory() {
  const [tags, setTags] = useState(dummySearchHistory);
  const [autoCompleteOn, setAutoCompleteOn] = useState(true);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAutoModalOpen, setIsAutoModalOpen] = useState(false);

  const HendlrDeleteTag = (id: number) => {
    setTags((prev) => prev.filter((item) => item.id !== id));
  };

  const HendlrDeleteTagAll = () => setTags([]);

  const handleToggleAutoComplete = () => setAutoCompleteOn(false);

  return (
    <>
      {hasSearch ? (
        <div className='border-gray5 mt-[20px] w-full rounded-[5px] border p-[20px]'>
          <div className='mb-[10px] flex justify-between'>
            <p className='text-[20px] font-extrabold'> 최근 검색</p>
            <div className='flex'>
              <button className='text-gray4 text-[16px]' onClick={() => setIsDeleteModalOpen(true)}>
                전체 삭제
              </button>
              {isDeleteModalOpen && (
                <Modal setIsOpen={setIsDeleteModalOpen}>
                  <div className='flex flex-col items-center justify-center px-20 py-13 text-xl'>
                    <h2 className='mb-[10px] text-center text-[26px] font-extrabold'>
                      최근 검색 내역을 <br />
                      모두 삭제하시겠습니까?
                    </h2>
                    <p className='text-gray3 pb-[14px] text-[16px]'>
                      삭제하시면 다시 복구할 수 없습니다
                    </p>
                    <div className='mt-[10px] flex justify-center gap-3'>
                      <button
                        onClick={() => {
                          HendlrDeleteTagAll();
                          setIsDeleteModalOpen(false);
                        }}
                        className='text-mainWhite bg-mainRed rounded-[5px] px-[50px] py-[10px] text-[16px]'
                      >
                        삭제
                      </button>
                      <button
                        onClick={() => setIsDeleteModalOpen(false)}
                        className='text-mainWhite bg-mainBlack rounded-[5px] px-[50px] py-[10px] text-[16px]'
                      >
                        취소
                      </button>
                    </div>
                  </div>
                </Modal>
              )}
              <p className='text-gray4 mr-[10px] ml-[10px] text-[22px]'>|</p>
              <button className='text-gray4 text-[16px]' onClick={() => setIsAutoModalOpen(true)}>
                {autoCompleteOn ? '검색어 저장 끄기' : '검색어 저장 켜기'}
              </button>
              {isAutoModalOpen && (
                <Modal setIsOpen={setIsAutoModalOpen}>
                  <div className='flex flex-col items-center justify-center px-20 py-13 text-xl'>
                    <h2 className='mb-[10px] text-center text-[26px] font-extrabold'>
                      검색어 저장을 <br />
                      중지하시겠습니까?
                    </h2>
                    <p className='text-gray3 pb-[14px] text-[16px]'>
                      중지하시면 최근 검색어를 확인할 수 없습니다
                    </p>
                    <div className='mt-[10px] flex justify-center gap-3'>
                      <button
                        onClick={() => {
                          handleToggleAutoComplete();
                          setIsAutoModalOpen(false);
                        }}
                        className='text-mainWhite bg-mainRed rounded-[5px] px-[50px] py-[10px] text-[16px]'
                      >
                        중지하기
                      </button>
                      <button
                        onClick={() => setIsOpen(false)}
                        className='text-mainWhite bg-mainBlack rounded-[5px] px-[50px] py-[10px] text-[16px]'
                      >
                        취소
                      </button>
                    </div>
                  </div>
                </Modal>
              )}
            </div>
          </div>
          {autoCompleteOn ? (
            tags.length === 0 ? (
              <div className='py-10 text-center text-gray-300'>최근 검색어가 없습니다</div>
            ) : (
              <HistoryItem tags={tags} onRemove={HendlrDeleteTag} />
            )
          ) : (
            <div className='py-10 text-center text-gray-300'>
              최근 검색어 저장 기능이 꺼져있습니다
            </div>
          )}
        </div>
      ) : (
        <div className='mb0[10px] mt-[10px]'></div>
      )}
    </>
  );
}

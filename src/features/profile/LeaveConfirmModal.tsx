import Modal from '@/shared/ui/Modal';

export default function LeaveConfirmModal({ setOpen }) {
  return <Modal setIsOpen={setOpen}>
    <div className="p-4">
      <h2 className="text-lg font-semibold">변경 사항이 저장되지 않습니다.</h2>
      <p className="mt-2">정말로 페이지를 떠나시겠습니까?</p>
      <div className="mt-4 flex justify-end space-x-2">
        <button
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => setOpen(false)}
        >
          취소
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => {
            setOpen(false);
            window.history.back();
          }}
        >
          떠나기
        </button>
      </div>
    </div>
  </Modal>;
}

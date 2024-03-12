interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  children: React.ReactNode;
}

export default function Modal({
  modalOpen,
  setModalOpen,
  children,
}: ModalProps) {
  return (
    <div>
      <dialog className={`modal ${modalOpen ? 'modal-open' : ''} `}>
        <div className='modal-box relative'>
          <button
            onClick={() => setModalOpen(false)}
            className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
          >
            ✕
          </button>
          {children}
        </div>
      </dialog>
    </div>
  );
}

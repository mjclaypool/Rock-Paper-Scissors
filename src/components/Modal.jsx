import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({children, open, onClose}) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open])

  return createPortal(
    <dialog ref={dialog} onClose={onClose} className="w-screen h-screen lg:w-[25%] lg:h-[35%] px-8 py-20 lg:py-8 rounded-md">
      {children}
    </dialog>,
    document.getElementById('modal')
  );
}
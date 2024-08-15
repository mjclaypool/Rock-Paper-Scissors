import { useState } from "react";
import Modal from "./Modal";
import rules from "../assets/image-rules.svg";
import closeIcon from "../assets/icon-close.svg";

export default function Rules() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <button
        id="rules-button"
        type='button'
        onClick={() => setModalOpen(true)}
        className="lg:self-end font-barlow font-bold px-8 lg:px-12 py-2 lg:my-4 mb-12 text-stone-300 border-2 border-stone-300 rounded-md tracking-wider"
      >
        RULES
      </button>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <div className="h-[100%] flex flex-col items-center justify-between">
          <div className="flex justify-between lg:w-full items-center">
            <h2 className="font-barlow font-bold text-3xl">
              RULES
            </h2>
            <img
              src={closeIcon}
              onClick={() => setModalOpen(false)}
              className="hidden lg:inline p-4 cursor-pointer"
            />
          </div>
          <img
            src={rules}
            className="lg:pb-4"
          />
          <img
            src={closeIcon}
            onClick={() => setModalOpen(false)}
            className="lg:hidden p-4 cursor-pointer"
          />
        </div>
      </Modal>
    </>
  )
}
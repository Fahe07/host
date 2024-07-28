import React from "react";
import FaqCardTwo from "../faqCards/FaqCardTwo";

export default function Modal({ closeModal, selectedCard }) {
  return (
    <>
      <div
        onClick={closeModal}
        className=" overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-[600px] my-6 mx-auto max-w-3xl text-start  "
        >
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">{selectedCard?.title}</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={closeModal}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              {selectedCard.id == 2 ? (
                <FaqCardTwo />
              ) : (
                <p
                  className="my-4 text-blueGray-500 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: selectedCard?.subtitleComplete,
                  }}
                ></p>
              )}
            </div>
            {/*footer*/}
            <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="bg-[#d7d6d6] hover:bg-[#0071bc] hover:text-white  font-bold uppercase text-sm px-6 py-3  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border-solid border-2 border-black"
                type="button"
                onClick={closeModal}
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

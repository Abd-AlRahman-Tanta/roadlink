import { Dispatch, SetStateAction } from 'react';

const PopUp = ({ setShow, popUp }: { popUp: { message: string, ok: string }, setShow: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm w-[90%] text-center">
        <h2 className="text-green-600 text-xl font-semibold mb-2">Success!</h2>
        <p className="text-gray-600 mb-4">{popUp.message}</p>
        <button
          onClick={() => setShow(false)}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          {popUp.ok}
        </button>
      </div>
    </div>
  );
}

export default PopUp

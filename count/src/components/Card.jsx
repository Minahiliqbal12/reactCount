import { useState } from "react";

const Card = () => {
  const [num, setNum] = useState(0);

  function increased() {
    setNum(num + 1);
  }

  function decreased() {
    setNum(num - 1);
  }
  function restart() {
    setNum(0);
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-pink-200 p-8 rounded-xl shadow-lg w-fit-content text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-7">{num}</h1>

        <div className="flex justify-between ">
          <button
            onClick={decreased}
            className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
          >
            Decrease
          </button>

          <button
            onClick={increased}
            className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
          >
            Increase
          </button>
          <button
            onClick={restart}
            className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

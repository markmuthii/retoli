import { useState } from "react";

const State = () => {
  const [count, setCount] = useState(7);

  const handleButtonClick = () => {
    console.log("Button is clicked");

    setCount(count + 1);
  };

  return (
    <>
      <button
        onClick={handleButtonClick}
        className="bg-green-950 text-white py-3 px-5 cursor-pointer"
      >
        State Counter: {count}
      </button>
    </>
  );
};

export { State };

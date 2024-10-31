import { useState } from 'react';

const TextCarousal = ({ history }) => {
  const [currentIndexValue, setCurrentIndexValue] = useState(0);

  const goToPrevious = () => {
    setCurrentIndexValue((prevIndex) => (prevIndex === 0 ? history.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndexValue((prevIndex) => (prevIndex === history.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="text-center p-10 bg-white text-gray-600 rounded-md">
      <h1 className="text-center text-xl font-semibold mb-5">Our Story</h1>
      <div className="flex w-full">
        <button onClick={goToPrevious} className="w-[5%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="icon icon-tabler icons-tabler-filled icon-tabler-arrow-badge-left"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M17 6h-6a1 1 0 0 0 -.78 .375l-4 5a1 1 0 0 0 0 1.25l4 5a1 1 0 0 0 .78 .375h6l.112 -.006a1 1 0 0 0 .669 -1.619l-3.501 -4.375l3.5 -4.375a1 1 0 0 0 -.78 -1.625z" />
          </svg>
        </button>
        <div className="w-[90%] font-semibold">
          {history[currentIndexValue].year} - {history[currentIndexValue].title}
        </div>
        <button onClick={goToNext} className="float-right w-[5%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="icon icon-tabler icons-tabler-filled icon-tabler-arrow-badge-right"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5 4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z" />
          </svg>
        </button>
      </div>

      <div className="pt-5  text-left min-h-48">{history[currentIndexValue].description}</div>
    </div>
  );
};

export default TextCarousal;

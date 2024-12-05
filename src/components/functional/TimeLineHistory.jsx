import { useEffect, useState } from 'react';

const TimeLineHistory = ({ history }) => {
  const [openTab, setOpenTab] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [boxWidth, setBoxWidth] = useState(180);
  const documentWidth = window.innerWidth;

  const prevSlide = () => {
    showSlide(currentIndex - 1);
  };
  const nextSlide = () => {
    showSlide(currentIndex + 1);
  };

  const showSlide = (index) => {
    let totalSlides = history.length / 10;

    if (documentWidth < 400) {
      totalSlides = history.length;
      setBoxWidth(300);
    } else if (documentWidth >= 400 && documentWidth < 768) {
      totalSlides = history.length / 3;
      setBoxWidth(160);
    } else if (documentWidth >= 768 && documentWidth < 1000) {
      totalSlides = history.length / 4;
      setBoxWidth(170);
    } else if (documentWidth >= 1000 && documentWidth < 1200) {
      totalSlides = history.length / 6;
      setBoxWidth(150);
    }

    if (index >= totalSlides) {
      setCurrentIndex(0);
    } else if (index < 0) {
      setCurrentIndex(totalSlides - 1);
    } else {
      setCurrentIndex(index);
    }

    setTranslateX(currentIndex * 100);
  };

  const getWidth = () => {
    if (documentWidth < 400) {
      setBoxWidth(300);
    } else if (documentWidth >= 400 && documentWidth < 768) {
      setBoxWidth(160);
    } else if (documentWidth >= 768 && documentWidth < 1000) {
      setBoxWidth(170);
    } else if (documentWidth >= 1000 && documentWidth < 1200) {
      setBoxWidth(150);
    }
  };

  useEffect(() => {
    getWidth();
  }, [documentWidth]);

  return (
    <div className="">
      <div className="min-h-44">
        <h1 className="font-bold">Our Story</h1>
        {history &&
          history.map((data) => (
            <div key={data.id}>
              {openTab === data.id && (
                <div className="transition-all duration-300 bg-white p-4 px-0">
                  <div className="md:flex mb-10">
                    <div className="max-w-sm md:w-1/2  bg-third-900 text-white p-10">
                      <span className="py-5 text-3xl font-bold">{data.year}</span>
                      <p className="mt-10">{data.title}</p>
                    </div>
                    <div className="md:w-1/2 pl-0 md:pl-10 min-h-32 md:min-h-0">
                      <h1 className="font-bold mt-5 md:mt-0">{data.title}</h1>
                      <p className="py-5 text-sm text-gray-500">{data.description}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>

      <div>
        <div className="w-full relative mb-10">
          <div className="w-full relative overflow-hidden m-auto">
            <div
              className="flex"
              style={{
                transform: `translateX(-${translateX}%)`,
                transition: 'transform 0.5s ease-in-out',
              }}
            >
              {history &&
                history.map((data) => (
                  <div style={{ width: `${boxWidth}px` }} key={data.id} className="history-slide">
                    <span
                      onClick={() => setOpenTab(data.id)}
                      style={{ width: `${boxWidth}px` }}
                      className={`py-2 cursor-pointer font-bold text-gray-400 hover:text-third-500 text-center hover:font-bold block ${
                        openTab === data.id ? 'text-third-900' : 'bg-white'
                      }`}
                    >
                      {data.year}
                    </span>

                    <div className="text-center relative" style={{ width: `${boxWidth}px` }}>
                      <hr
                        className="z-0 border-2 border-third-900 absolute top-1/2 w-full"
                        style={{ width: `${boxWidth}px` }}
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        onClick={() => setOpenTab(data.id)}
                        className="icon icon-tabler icons-tabler-filled icon-tabler-circle inline text-third-900 cursor-pointer"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z" />
                      </svg>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <button
            className="translate-y-2/4 shadow bg-gray-400 hover:text-gray-200 text-white text-xl border-0 cursor-pointer rounded-sm "
            onClick={prevSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icons-tabler-filled icon-tabler-square-arrow-left"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-6.293 5.293a1 1 0 0 0 -1.414 0l-4 4l-.083 .094l-.064 .092l-.052 .098l-.044 .11l-.03 .112l-.017 .126l-.003 .075l.004 .09l.007 .058l.025 .118l.035 .105l.054 .113l.071 .111c.03 .04 .061 .077 .097 .112l4 4l.094 .083a1 1 0 0 0 1.32 -.083l.083 -.094a1 1 0 0 0 -.083 -1.32l-2.292 -2.293h5.585l.117 -.007a1 1 0 0 0 -.117 -1.993h-5.585l2.292 -2.293l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
            </svg>
          </button>
          <button
            className="translate-y-2/4 shadow bg-gray-400 hover:text-gray-200 text-white text-xl border-0 cursor-pointer rounded-sm float-right "
            onClick={nextSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icons-tabler-filled icon-tabler-square-arrow-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-6.387 5.21a1 1 0 0 0 -1.32 .083l-.083 .094a1 1 0 0 0 .083 1.32l2.292 2.293h-5.585l-.117 .007a1 1 0 0 0 .117 1.993h5.585l-2.292 2.293l-.083 .094a1 1 0 0 0 1.497 1.32l4 -4l.073 -.082l.074 -.104l.052 -.098l.044 -.11l.03 -.112l.017 -.126l.003 -.075l-.007 -.118l-.029 -.148l-.035 -.105l-.054 -.113l-.071 -.111a1.008 1.008 0 0 0 -.097 -.112l-4 -4z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeLineHistory;

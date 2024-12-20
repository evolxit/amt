import { useState } from 'react';

const ImageCarousal = ({ brands }) => {
  const [translateX, setTranslateX] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(1);
  const docWidth = window.innerWidth;

  const prevSlide = () => {
    showSlide(currentIndex - 1);
  };
  const nextSlide = () => {
    showSlide(currentIndex + 1);
  };

  const showSlide = (index) => {
    let noOfSlide = 3;
    if (docWidth > 768) {
      noOfSlide = 4;
    }
    const totalSlides = document.querySelectorAll('.aslide').length / noOfSlide;

    if (index >= totalSlides) {
      setCurrentIndex(0);
    } else if (index < 0) {
      setCurrentIndex(totalSlides - 1);
    } else {
      setCurrentIndex(index);
    }

    setTranslateX(currentIndex * 100);
  };

  return (
    <div className="w-full relative">
      <div className="w-full relative overflow-hidden m-auto">
        <div
          className="flex"
          style={{
            transform: `translateX(-${translateX}%)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          {brands &&
            brands.map((brand) => (
              <a
                href={`/products?brand=${brand.id}`}
                className="hover:border-blue-600 aslide min-w-[32%] md:min-w-[24%] mr-[0.5%] ml-[0.5%] border border-gray-300 rounded-sm flex"
                key={brand.id}
              >
                <img src={brand.image} alt="" className="m-auto object-contain rounded-sm self-center" />
              </a>
            ))}
        </div>
        <button
          className="translate-y-2/4 shadow bg-gray-400 hover:text-gray-200 text-white text-xl border-0 cursor-pointer top-[30%] xl:top-[40%] rounded-sm absolute left-0"
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
          className="translate-y-2/4 shadow bg-gray-400 hover:text-gray-200 text-white text-xl border-0 cursor-pointer top-[30%] xl:top-[40%] rounded-sm absolute right-0"
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
  );
};

export default ImageCarousal;

import { useState } from 'react';

const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div className="pb-10">
      <div className="w-full">
        <div className="mb-4 grid grid-cols-2 gap-4 md:grid-cols-4 p-2 bg-white shadow-box">
          <button
            onClick={() => setOpenTab(1)}
            className={`py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 hover:bg-third-900 hover:text-white ${
              openTab === 1 ? 'bg-third-900 text-white' : ''
            }`}
          >
            Correction & Adhesion
          </button>
          <button
            onClick={() => setOpenTab(2)}
            className={`py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 hover:bg-third-900 hover:text-white ${
              openTab === 2 ? 'bg-third-900 text-white' : ''
            }`}
          >
            Office Supplies
          </button>
          <button
            onClick={() => setOpenTab(3)}
            className={`py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 hover:bg-third-900 hover:text-white ${
              openTab === 3 ? 'bg-third-900 text-white' : ''
            }`}
          >
            Shearing & Cutting
          </button>
          <button
            onClick={() => setOpenTab(4)}
            className={`py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 hover:bg-third-900 hover:text-white ${
              openTab === 4 ? 'bg-third-900 text-white' : ''
            }`}
          >
            Stapling & Punching
          </button>
        </div>

        {/* Tab Contents */}
        {openTab === 1 && (
          <div className="transition-all duration-300 bg-white p-4 px-0">
            <div className="md:flex">
              <div className="max-w-sm md:w-1/4">
                <img
                  src="https://placehold.jp/300x300.png"
                  alt="Correction & Adhesion"
                  className="w-full object-contain rounded"
                />
              </div>
              <div className="md:w-3/4 pl-0 md:pl-10">
                <h1 className="font-bold">2024 Catalog Correction & Adhesion</h1>
                <p className="py-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                <a
                  href="#"
                  className="px-4 py-3 bg-third-900 text-white hover:bg-third-600 font-bold rounded-md text-sm inline-block"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        )}

        {openTab === 2 && (
          <div className="transition-all duration-300 bg-white p-4 px-0">
            <div className="md:flex">
              <div className="max-w-sm md:w-1/4">
                <img
                  src="https://placehold.jp/300x300.png"
                  alt="Correction & Adhesion"
                  className="w-full object-contain rounded"
                />
              </div>
              <div className="md:w-3/4 pl-0 md:pl-10">
                <h1 className="font-bold">2024 Catalog Office Supplies</h1>
                <p className="py-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                <a
                  href="#"
                  className="px-4 py-3 bg-third-900 text-white hover:bg-third-600 font-bold rounded-md text-sm inline-block"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        )}

        {openTab === 3 && (
          <div className="transition-all duration-300 bg-white p-4 px-0">
            <div className="md:flex">
              <div className="max-w-sm md:w-1/4">
                <img
                  src="https://placehold.jp/300x300.png"
                  alt="Correction & Adhesion"
                  className="w-full object-contain rounded"
                />
              </div>
              <div className="md:w-3/4 pl-0 md:pl-10">
                <h1 className="font-bold">2024 Catalog Shearing</h1>
                <p className="py-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                <a
                  href="#"
                  className="px-4 py-3 bg-third-900 text-white hover:bg-third-600 font-bold rounded-md text-sm inline-block"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        )}

        {openTab === 4 && (
          <div className="transition-all duration-300 bg-white p-4 px-0">
            <div className="md:flex">
              <div className="max-w-sm md:w-1/4">
                <img
                  src="https://placehold.jp/300x300.png"
                  alt="Correction & Adhesion"
                  className="w-full object-contain rounded"
                />
              </div>
              <div className="md:w-3/4 pl-0 md:pl-10 mt-3 md:mt-0">
                <h1 className="font-bold">2024 Catalog Stapling</h1>
                <p className="py-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                <a
                  href="#"
                  className="px-4 py-3 bg-third-900 text-white hover:bg-third-600 font-bold rounded-md text-sm inline-block"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;

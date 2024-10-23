import { useState } from 'react';
import defaultImg from '~/assets/images/defaultImage.png';

const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div className="pb-10">
      <div className="w-full">
        <div className="mb-4 flex space-x-4 p-2 bg-white shadow-box">
          <button
            onClick={() => setOpenTab(1)}
            className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 hover:bg-third-900 hover:text-white ${
              openTab === 1 ? 'bg-third-900 text-white' : ''
            }`}
          >
            Correction & Adhesion
          </button>
          <button
            onClick={() => setOpenTab(2)}
            className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 hover:bg-third-900 hover:text-white ${
              openTab === 2 ? 'bg-third-900 text-white' : ''
            }`}
          >
            Office Supplies
          </button>
          <button
            onClick={() => setOpenTab(3)}
            className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 hover:bg-third-900 hover:text-white ${
              openTab === 3 ? 'bg-third-900 text-white' : ''
            }`}
          >
            Shearing & Cutting
          </button>
          <button
            onClick={() => setOpenTab(4)}
            className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 hover:bg-third-900 hover:text-white ${
              openTab === 4 ? 'bg-third-900 text-white' : ''
            }`}
          >
            Stapling & Punching
          </button>
        </div>

        {/* Tab Contents */}
        {openTab === 1 && (
          <div className="transition-all duration-300 bg-white p-4 px-0">
            <div className="flex">
              <div className="w-1/4">
                <img src={defaultImg.src} alt="Correction & Adhesion" className="w-full object-contain rounded" />
              </div>
              <div className="w-3/4 pl-0 md:pl-10">
                <h1 className="font-bold">2024 Catalog</h1>
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
            <div className="flex">
              <div className="w-1/4">
                <img src={defaultImg.src} alt="Office Supplies" className="w-full object-contain rounded" />
              </div>
              <div className="w-3/4 pl-0 md:pl-10">
                <h1 className="font-bold">2024 Catalog for Office Supplies</h1>
                <p className="py-5">Reiciendis minus saepe distinctio earum hic amet cupiditate...</p>
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
            <div className="flex">
              <div className="w-1/4">
                <img src={defaultImg.src} alt="Shearing & Cutting" className="w-full object-contain rounded" />
              </div>
              <div className="w-3/4 pl-0 md:pl-10">
                <h1 className="font-bold">2024 Catalog for Shearing</h1>
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
            <div className="flex">
              <div className="w-1/4">
                <img src={defaultImg.src} alt="Stapling & Punching" className="w-full object-contain rounded" />
              </div>
              <div className="w-3/4 pl-0 md:pl-10">
                <h1 className="font-bold">2024 Catalog for Stapling</h1>
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

import { useState } from 'react';

const TimeLineHistory = ({ history }) => {
  const [openTab, setOpenTab] = useState(1);
  console.log('his', history);
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
        <div className="flex mb-10 w-full">
          {history &&
            history.map((data) => (
              <div className="">
                {/* <div key={data.id} className="origin-center transform -rotate-90 z-10"> */}
                <div key={data.id} className="origin-center transform -rotate-90 z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="icon icon-tabler icons-tabler-filled icon-tabler-circle inline text-third-900"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z" />
                  </svg>

                  <span
                    onClick={() => setOpenTab(data.id)}
                    className={` pl-3 py-2  sm:mr-8 cursor-pointer hover:text-third-500 hover:font-bold ${
                      openTab === data.id ? 'text-third-900 font-bold' : 'bg-white'
                    }`}
                  >
                    {data.year}
                  </span>
                </div>
                <hr className="z-0 border-2 border-third-900 mt-2 sm:mt-6" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TimeLineHistory;

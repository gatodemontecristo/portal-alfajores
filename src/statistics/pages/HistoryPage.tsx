import Carousel from './Carousel';

export const HistoryPage = () => {
  return (
    <>
      <Carousel>
        <div className="w-full md:w-1/3 relative h-full flex flex-col items-center justify-center p-10">
          <p className="ms-10 font-extrabold text-[35px] text-[#ffb400] absolute top-0 left-0">
            Sprints pasados
          </p>
          <div className="flex flex-col items-center justify-start    overflow-y-scroll custom-scrollbar gap-3 w-full">
            <div className="flex flex-row justify-between bg-slate-600 text-white p-3 rounded-md w-full">
              <p>Spring Q4 SP5 | 27 Nov - 1111 Dec</p>
              <i className="bi bi-caret-right-fill"></i>
            </div>
            <div className="flex flex-row justify-between bg-slate-600 text-white p-3 rounded-md w-full">
              <p>Spring Q4 SP5 | 27 Nov - 22222 Dec</p>
              <i className="bi bi-caret-right-fill"></i>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex flex-col relative items-center justify-start gap-5"></div>
        <div className="w-full md:w-1/3  p-3 h-full"></div>
      </Carousel>
    </>
  );
};

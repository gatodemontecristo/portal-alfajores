import Carousel from '../../statistics/pages/Carousel';

export const PaymentsPage = () => {
  return (
    <>
      <Carousel>
        <div className="w-full md:w-1/3 relative h-full"></div>

        <div className="w-full md:w-1/3 flex flex-col relative items-center justify-start gap-5"></div>
        <div className="w-full md:w-1/3  p-3 h-full"></div>
      </Carousel>
    </>
  );
};

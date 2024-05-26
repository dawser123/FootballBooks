import FootballBooksInfo from "../components/FootballBooksInfo";
import FootballBooksStaffInfo from "../components/FootballBooksStaffInfo";
const Aboutus = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center px-3 sm:px-8">
      <h2 className="mb-5 py-10 text-center text-2xl text-primary-text-color">
        About FootballBooks
      </h2>
      <div className="mx-auto flex flex-col items-center justify-center gap-10 pb-28 text-primary-text-color md:px-8 lg:max-w-[70%]">
        <FootballBooksInfo />
        <div className="flex flex-col items-center justify-center gap-10 rounded-xl bg-primary-color p-10">
          <h2 className="font-boold text-xl uppercase underline underline-offset-8 ">
            our team
          </h2>
          <div className="flex flex-col items-start justify-center gap-3 ">
            <FootballBooksStaffInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;

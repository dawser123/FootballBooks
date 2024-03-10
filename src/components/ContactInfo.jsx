const ContactInfo = () => {
  return (
    <address className=" flex w-full  max-w-[90%] flex-col items-center rounded-xl bg-secondary-color p-5   sm:max-w-[70%]">
      <div className="flex flex-col gap-3 text-white">
        <p className="font-bold  ">
          Name:<span className="ml-1 font-normal">FootballBooks</span>
        </p>
        <p className="font-bold  ">
          Address:
          <span className="ml-1 font-normal">Football Street, Football</span>
        </p>
        <p className="font-bold  ">
          Phone:<span className="ml-1 font-normal">123 123 123</span>
        </p>
      </div>
    </address>
  );
};
export default ContactInfo;

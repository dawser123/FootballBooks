import staff from "../utils/staff";
const FootballBooksStaffInfo = () => {
  return (
    <>
      {staff.map(({ img, name,role,text }) => (
        <div
          key={name}
          className="flex flex-col items-center justify-center rounded-xl bg-primary-color "
        >
          <div className="flex items-center justify-center gap-5">
            <div className="relative h-[100px] min-w-[100px] max-w-[100px] rounded-full md:h-[160px] md:min-w-[160px] md:max-w-[160px]">
              <img
                className=" h-full w-full rounded-full object-cover "
                src={img}
                alt={`photo of${name}`}
              />
              <div className="absolute left-0 top-0 h-full w-full rounded-full bg-black/25"></div>
            </div>
            <div>
              <span className="font-bold tracking-wider">{role}</span>
              <p className="py-4">
               {text}
              </p>
            </div>
          </div>
    
    
    

     
        </div>
      ))}
    </>
  );
};

export default FootballBooksStaffInfo;

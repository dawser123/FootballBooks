import Bob from "../assets/Bob.jpg";
import Oliver from "../assets/Oliver.jpg";
import James from "../assets/James.jpg";
import Emma from "../assets/Emma.jpg";
import Olivia from "../assets/Olivia.jpg";
const Aboutus = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center px-3 sm:px-8">
      <h2 className="mb-5 py-10 text-center text-2xl text-primary-text-color">
        About FootballBooks
      </h2>
      <div className="mx-auto flex flex-col items-center justify-center gap-10 pb-28 text-primary-text-color md:px-8 lg:max-w-[70%]">
        <div className="flex flex-col gap-10">
          <div>
            <h3 className="my-2 font-bold">
              Explore exclusive football content
            </h3>
            <p>
              We are passionate football enthusiasts who have built this
              platform to provide fans of football books access to the best
              titles related to their favorite sport.
            </p>
          </div>
          <div>
            <h3 className="my-2 font-bold">Get involved with FootballBooks</h3>
            <p>
              Join our community and enjoy access to exclusive content,
              interviews with football stars, and unique stories related to the
              sport.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 rounded-xl bg-primary-color p-10">
          <h2 className="font-boold underline underline-offset-8 uppercase text-xl ">our team </h2>
          <div className="flex items-center justify-center gap-5">
            <div className="relative h-[100px] min-w-[100px] max-w-[100px] rounded-full md:h-[160px] md:min-w-[160px] md:max-w-[160px]">
              <img
                className=" h-full w-full rounded-full object-cover "
                src={Bob}
                alt=""
              />
              <div className="absolute left-0 top-0 h-full w-full rounded-full bg-black/25"></div>
            </div>

            <div>
              <span className="font-bold tracking-wider">CEO</span>
              <p className="py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, repellendus!
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-5">
            <div className="relative h-[100px] min-w-[100px] max-w-[100px] rounded-full bg-red-500 md:h-[160px] md:min-w-[160px] md:max-w-[160px]">
              <img
                className=" h-full w-full rounded-full object-cover "
                src={Oliver}
                alt=""
              />
              <div className="absolute left-0 top-0 h-full w-full rounded-full bg-black/25"></div>
            </div>

            <div>
              <span className="font-bold tracking-wider">CEO</span>
              <p className="py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, repellendus!
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-5">
            <div className="relative h-[100px] min-w-[100px] max-w-[100px] rounded-full bg-red-500 md:h-[160px] md:min-w-[160px] md:max-w-[160px]">
              <img
                className=" h-full w-full rounded-full object-cover "
                src={Emma}
                alt=""
              />
              <div className="absolute left-0 top-0 h-full w-full rounded-full bg-black/25"></div>
            </div>

            <div>
              <span className="font-bold tracking-wider">CEO</span>
              <p className="py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, repellendus!
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-5">
            <div className="relative h-[100px] min-w-[100px] max-w-[100px] rounded-full bg-red-500 md:h-[160px] md:min-w-[160px] md:max-w-[160px]">
              <img
                className=" h-full w-full rounded-full object-cover "
                src={Olivia}
                alt=""
              />
              <div className="absolute left-0 top-0 h-full w-full rounded-full bg-black/25"></div>
            </div>

            <div>
              <span className="font-bold tracking-wider">CEO</span>
              <p className="py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, repellendus!
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-5">
            <div className="relative h-[100px] min-w-[100px] max-w-[100px] rounded-full bg-red-500 md:h-[160px] md:min-w-[160px] md:max-w-[160px]">
              <img
                className=" h-full w-full rounded-full object-cover "
                src={James}
                alt=""
              />
              <div className="absolute left-0 top-0 h-full w-full rounded-full bg-black/25"></div>
            </div>

            <div>
              <span className="font-bold tracking-wider">CEO</span>
              <p className="py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, repellendus!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;

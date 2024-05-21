const Aboutus = () => {
  return (
    <div className="px-3 sm:px-8">
      <h2 className="mb-5 py-10 text-center text-2xl text-primary-text-color">
        About FootballBooks
      </h2>
      <div className="mx-auto flex flex-col items-start justify-center gap-10 pb-28 text-primary-text-color md:px-8 md:max-w-[70%]">
        <div>
          <h3 className="font-bold my-2">Explore exclusive football content</h3>
          <p>
          We are passionate football enthusiasts who have built this platform to provide fans of football books access to the best titles related to their favorite sport.
          </p>
        </div>
        <div>
          <h3 className="font-bold my-2">Get involved with FootballBooks</h3>
          <p>
          Join our community and enjoy access to exclusive content, interviews with football stars, and unique stories related to the sport.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;

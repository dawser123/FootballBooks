const Hero = () => {
  return (
    <div className="bg-heroImg relative h-72 w-full bg-center">
      <div className="absolute h-full w-full bg-primary-color/80  "></div>
      <div className="absolute top-[25%] flex flex-col items-start justify-center gap-10 px-5 text-primary-text-color ">
        <h1 className="text-2xl font-bold">
          Welcome to our football books library!
        </h1>
        <p className="text-lg">
          Check out our collection of the latest books about your favorite
          football clubs
        </p>
      </div>
    </div>
  );
};
export default Hero;

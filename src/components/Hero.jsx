import MarginLeftContainer from "./UI/MarginLeftContainer";

const Hero = () => {
  return (
    <div className="relative h-72 w-full bg-heroImg bg-center ">
      <div className="absolute h-full w-full bg-primary-color/80  "></div>
      <MarginLeftContainer>
        <div className="absolute top-[25%] flex flex-col items-start justify-center gap-10 py-3 text-primary-text-color ">
          <h1 className="text-2xl font-bold">
            Welcome to our football books library!
          </h1>
          <p className="text-lg">
            Check out our collection of the latest books about your favorite
            football clubs
          </p>
        </div>
      </MarginLeftContainer>
    </div>
  );
};
export default Hero;

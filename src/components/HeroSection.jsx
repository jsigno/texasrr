import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        TEXAS PREMIER ROOFING
        <div className="text-lg sm:text-xl lg:text-2xl bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
          {" "}
          Providing a Premier Experience
        </div>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Family owned and operated out of Dallas, TX. Focusing on quality over
        quantity, we aim to truly give each project the attention it needs and
        deserves. Our dedicated team comes with several years, and hundreds of
        completed projects, of experience. Trust in us to deliver a premier
        experience and show you just how simple the roofing process can be.
      </p>
      <div className="flex justify-center my-10 text-white">
        <a
          href="#"
          className="bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 mx-3 rounded-md"
        >
          Residental
        </a>
        <a
          href="#"
          className="bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 mx-3 rounded-md"
        >
          Commercial
        </a>
      </div>
      <div className="flex mt-10 justify-center px-4">
        <video autoPlay loop muted className="rounded-lg w-1/2 mx-2 my-4">
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;

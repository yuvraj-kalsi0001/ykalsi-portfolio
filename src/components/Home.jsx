import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import MUN from "../assets/MunTransparentlogoRGB.png";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
              <div className="relative">
<img
  src={MUN}
  alt="MUN Logo"
  className="w-40 mx-auto translate-x-80 translate-y-20 hidden lg:block"
/>


</div>
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Yuvraj Kalsi
        </h1>

        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Software Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I hold a Bachelor of Science (Honours) degree from Memorial University of Newfoundland, with a major in Computer Science and a minor in Mathematics.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>

        
      </div>
    </div>
  );
};

export default Home;

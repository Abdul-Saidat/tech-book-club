import "./App.css";
import logo from "./assets/icons/logo.svg";
import heroImage from "./assets/images/heroImage.svg";
import { ArrowDown } from "lucide-react";
import member1 from "./assets/images/member1.svg";
import member2 from "./assets/images/member2.svg";
import member3 from "./assets/images/member3.svg";
import read from "./assets/images/read.svg";
import { CheckSquare2Icon } from "lucide-react";

function App() {
  return (
    <>
      {/* the entire section after the body, i.e. it is directly inside the body, immediately next to the body */}
      <section className="w-full">
        <section className="w-full px-3 lg:px-24 md:px-4 py-5 shadow-xl bg-[#FAF5F3] bg-linear-to-br rgba(250, 245, 243, 1) 20.5% rgba(156, 201, 218, 1) 100%)">
          {/* hero section */}
          <div class="absolute inset-0 "></div>
          <header className="flex items-center gap-2">
            <img src={logo} alt="book club logo" />
            <p className="text-xl text-[#062630] font-['FiraCode'] tracking-tighter">
              Tech book club
            </p>
          </header>
          <div className="mt-15 flex flex-col lg:flex-row lg:items-center-safe lg:justify-between">
            <div className="w-82.5 md:w-175 lg:w-lg">
              <h1 className="text-[36px] md:text-[60px] font-['MartianMono'] flex flex-col leading-10 md:leading-18 lg:tracking-tighter bg-gradient-to-r from-[#FEA36F] to-[#062630] bg-clip-text text-transparent">
                <span>Join the</span>
                <span>ultimate tech</span>
                <span>book club</span>
              </h1>
              <p className="text-xl text-[#385159] mt-5 font-['Inter']">
                Turn your reading time into learning time with fellow tech
                enthusiasts. Get curated recommendations, join vibrant
                discussions, and level up your skills one chapter at a time.
              </p>
              <button className="flex gap-2 text-[14px] md:text-[18px] font-['MartianMono2']  cursor-pointer border-2 border-[#062630] p-3 md:p-4 rounded-md mt-5">
                REVIEW MEMBERSHIP OPTIONS
                <ArrowDown />
              </button>
              <div className="flex mt-8">
                <img src={member1} alt="" />
                <img src={member2} alt="" />
                <img src={member3} alt="" />
                <div className="">
                  <img src="/stars.svg" alt="" />
                  <p className="text-[10px] md:text-[14px] text-[#385159] font-['MartianMono3'] tracking-tighter">
                    200+ developers joined already
                  </p>
                </div>
              </div>
            </div>
            <div className="md:flex md:items-center md:justify-center">
              <img
                src={heroImage}
                alt="Hero section image"
                className="h-auto mt-10 md:mt-10 lg:mt-0 lg:h-150 md:w-175 lg:w-125"
              />
            </div>
          </div>
        </section>
        {/* read and grow */}
        <section className="w-full px-3 lg:px-24 md:px-4 py-5 md:mt-10 ">
          <div className="flex flex-col-reverse lg:flex-row lg:items-center md:gap-18">
            <div className="md:flex md:items-center md:justify-center">
              <img
                src={read}
                alt="people reading together"
                className="mt-13 md:mt-0 md:w-175 lg:w-140 "
              />
            </div>
            <div className="md:w-150 lg:w-132">
              <h1 className="text-[#062630] text-[34px] md:text-[48px] font-['MartianMono'] leading-8 md:leading-15">
                Read together, <br /> grow together
              </h1>

              <div className="w-[80%] md:w-full mt-4 md:mt-10">
                <ul className="text-[#385159] text-xl space-y-3 md:space-y-5 font-['Inter']">
                  <div className="flex items-center gap-2">
                    <CheckSquare2Icon className="text-[#385159]" />
                    <li>
                      Monthly curated tech reads selected by industry experts
                    </li>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckSquare2Icon className="text-[#385159]" />
                    <li>
                      Virtual and in-person meetups for deep-dive discussions
                    </li>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <CheckSquare2Icon className="text-[#385159]" />
                    <li>Early access to new tech book releases</li>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckSquare2Icon className="text-[#385159]" />
                    <li>Author Q&A sessions with tech thought leaders</li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          {/* not your average */}
          <div></div>
          {/* tech reading journey */}
          <div></div>
        </section>
        <section>
          {/* membership options */}
          <div></div>
          {/* testimonials */}
          <div></div>
        </section>
        {/* footer section */}
        <div></div>
      </section>
    </>
  );
}

export default App;

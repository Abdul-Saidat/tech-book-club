import "./App.css";
import logo from "./assets/icons/logo.svg";
import heroImage from "./assets/images/heroImage.svg";
import { ArrowDown } from "lucide-react";
import member1 from "./assets/images/member1.svg";
import member2 from "./assets/images/member2.svg";
import member3 from "./assets/images/member3.svg";
import read from "./assets/images/read.svg";

function App() {
  return (
    <>
      {/* the entire section after the body, i.e. it is directly inside the body, immediately next to the body */}
      <section className="w-full">
        <section className="w-full px-3 lg:px-24 md:px-4 py-5 bg-[#FAF5F3] bg-linear-to-br rgba(10, 13, 22, 0.01) 20.5% rgba(10, 13, 22, 0.04) 100%)">
          {/* hero section */}
          <header className="flex items-center gap-2">
            <img src={logo} alt="book club logo" />
            <p className="text-xl text-[#062630] font-semibold">
              Tech book club
            </p>
          </header>
          <div className="mt-15 flex flex-col lg:flex-row lg:items-center-safe lg:justify-between">
            <div className="w-82.5 md:w-175 lg:w-lg">
              <h1 className="text-[38px] md:text-[62px] flex flex-col leading-10 md:leading-15 ">
                <span>Join the</span>
                <span>ultimate tech</span>
                <span>book club</span>
              </h1>
              <p className="text-xl text-[#385159] mt-5">
                Turn your reading time into learning time with fellow tech
                enthusiasts. Get curated recommendations, join vibrant
                discussions, and level up your skills one chapter at a time.
              </p>
              <button className="flex gap-2 md:text-[18px] font-semibold  cursor-pointer border-2 border-[#062630] p-3 md:p-4 rounded-md mt-5">
                REVIEW MEMBERSHIP OPTIONS
                <ArrowDown />
              </button>
              <div className="flex">
                <img src={member1} alt="" />
                <img src={member2} alt="" />
                <img src={member3} alt="" />
                <div>
                  <img src="/stars.svg" alt="" />
                  <p className="text-[14px] text-[#385159]">
                    200+ developers joined already
                  </p>
                </div>
              </div>
            </div>
            <div className="md:flex md:items-center md:justify-center">
              <img
                src={heroImage}
                alt="Hero section image"
                className="h-150 md:w-125 lg:w-125"
              />
            </div>
          </div>
        </section>
        <section className="w-full h-screen px-3 lg:px-24 md:px-4 py-5 border-2 border-red-500">
          {/* read and grow */}
          <div className="flex flex-col lg:flex-row items-center">
            <div>
              <img src={read} alt="" />
            </div>
            <div className="md:w-[530px] border-2">
              <h1 className="text-[#062630] font-semibold text-4xl md:text-5xl">
                Read together, grow together
              </h1>

              <ul className="list-disc">
                <li>Monthly curated tech reads selected by industry experts</li>
                <li>Virtual and in-person meetups for deep-dive discussions</li>
                <li>Early access to new tech book releases</li>
                <li>Author Q&A sessions with tech thought leaders</li>
              </ul>
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

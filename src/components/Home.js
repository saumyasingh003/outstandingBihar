import React from "react";
import Cards from "./Cards";

const Home = () => {
  return (
    <div className=" ">
      <div className="">
        <span
          className="overlay absolute top-72 z-10 left-2 mb-3 right-0 text-4xl text-[#79476e] font-semibold"
          style={{ fontFamily: "Young Serif" }}
        >
          Bihar: <br /> Where Heritage, Culture, and <br />
          the Ganges Flow into a Bright Future!
        </span>
        <img
          data-aos="fade-up"
          src={require("../assets/bodh-gaya.jpg")}
          alt=""
          className="w-full sm:h-[70vh] mb-4"
        />
      </div>
      <h1
        style={{ fontFamily: "Young Serif" }}
        className="text-center 
      text-5xl relative top-6 mb-10 font-extrabold text-[#bd1816] font-sans"
      >
        Glimse of Bihar
      </h1>
      <div>
        <Cards />
      </div>

      <div className="relative top-20 bg-[#151414cb]">
        <div className="flex md:flex-row flex-col">
          <img
            data-aos="fade-up"
            src={require("../assets/logo.jpg")}
            alt=""
            className="md:h-72 md:w-72 h-40 w-40"
          />
          <div className="relative  lg:left-20 md:left-10 left-2 top-6">
            <h1
              style={{ fontFamily: "Young Serif" }}
              className="text-center 
      lg:text-5xl md:text-4xl text-3xl  mb-10 font-extrabold text-[#ffff] font-sans"
            >
              Let's see some stats related to Bihar
            </h1>
            <div className="flex md:flex-row flex-col space-x-60">
              <div className="flex flex-col space-y-3">
                <span
                  className="text-red-700 lg:text-8xl md:text-6xl text-4xl font-semibold relative left-8"
                  style={{ fontFamily: "Young Serif" }}
                >
                  69%
                </span>
                <span
                  className="text-gray-200 md:text-2xl text-md relative left-10"
                  style={{ fontFamily: "Young Serif" }}
                >
                  Literacy rate
                </span>
              </div>
              <div className="flex flex-col space-y-3">
                <span
                  className="text-red-700 lg:text-8xl md:text-6xl text-4xl font-semibold relative left-8"
                  style={{ fontFamily: "Young Serif" }}
                >
                  126.7
                </span>
                <span
                  className="text-gray-200  md:text-2xl text-md relative left-10"
                  style={{ fontFamily: "Young Serif" }}
                >
                  crore Population
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex md:flex-row flex-col relative top-20  mb-10">
        <div className="relative top-20">
          <div className="flex md:flex-row flex-col">
            <div className="relative   mx-4 mb-10 top-6">
              <h1
                style={{ fontFamily: "Young Serif" }}
                className="text-center 
      lg:text-5xl md:text-4xl text-4xl  mb-10 font-extrabold text-[#bd1816] font-sans"
              >
                About Bihar
              </h1>
              <p className=" text-center" style={{ fontFamily: "Young Serif" }}>
                Bihar, a state in eastern India, has a profound historical
                significance that extends beyond its association with Buddhism.
                It was a prominent seat of power for various ancient kingdoms,
                notably Magadh, which played a pivotal role in shaping the
                political landscape of ancient India. The region was ruled by
                dynasties such as the Mauryas and Guptas, with the Mauryan
                emperor Ashoka being instrumental in the spread of Buddhism,
                leaving an indelible mark on Indian culture and philosophy.
              </p>
              <p className=" text-center" style={{ fontFamily: "Young Serif" }}>
                Bihar also holds a special place in the Indian independence
                movement, as it was the birthplace of the legendary freedom
                fighter Jayaprakash Narayan. His unwavering commitment to
                independence and social justice inspired many, and his
                contributions are remembered with great reverence. Furthermore,
                Bihar's dedication to education is exemplified by institutions
                like the Bihar School of Yoga and the establishment of the
                Indian Institute of Technology (IIT) in Patna, which have
                significantly contributed to intellectual growth and innovation
                in the state.
              </p>
              <p className=" text-center" style={{ fontFamily: "Young Serif" }}>
                Despite facing developmental challenges, Bihar is witnessing
                progress with a renewed focus on infrastructure, connectivity,
                and economic development. The resilience and determination of
                its people, combined with its extraordinary heritage, make Bihar
                a state of immense significance in India's cultural and
                historical mosaic, representing a blend of ancient wisdom and a
                promising future.
              </p>
              <p className=" text-center" style={{ fontFamily: "Young Serif" }}>
                Despite facing developmental challenges, Bihar is witnessing
                progress with a renewed focus on infrastructure, connectivity,
                and economic development. The resilience and determination of
                its people, combined with its extraordinary heritage, make Bihar
                a state of immense significance in India's cultural and
                historical mosaic, representing a blend of ancient wisdom and a
                promising future.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" relative top-40">
        <h1
          style={{ fontFamily: "Young Serif" }}
          className="text-center 
      lg:text-5xl md:text-4xl text-4xl  mb-10 font-extrabold text-[#bd1816] font-sans"
        >
          Prominant leaders of Bihar
        </h1>
        <div>
          <div className="relative  container flex flex-col justify-center p-4 mx-auto ">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2 h-[50vh]">
              <a>
                <img
                  style={{ boxShadow: "2px 2px 15px black" }}
                  className=" object-cover h-[40vh] w-full cursor-pointer  hover:animate-pulse transition-all ease-in-out duration-400 hover:h-[43vh] hover:w-[44vw] rounded-xl"
                  src={require("../assets/p1.jpg")}
                  alt=""
                />
                <h1
                  className=" font-bold relative bottom-7 rounded-b-xl bg-[#1d1c1c94]
             hover:bg-[#131314da]
             text-white text-xl text-center datatitle"
                >
                  Nitish Kumar
                </h1>
              </a>

              <a>
                <img
                  style={{ boxShadow: "2px 2px 15px black" }}
                  className=" object-cover h-[40vh] w-full cursor-pointer  hover:animate-pulse transition-all ease-in-out duration-400 hover:h-[43vh] hover:w-[44vw] rounded-xl"
                  src={require("../assets/p2.jpg")}
                  alt=""
                />
                <h1 className=" font-bold relative bottom-7 rounded-b-xl bg-[#1d1c1c94] hover:bg-[#131314da] text-white text-xl text-center datatitle">
                  Lalu Prasad Yadav
                </h1>
              </a>

              <a>
                <img
                  style={{ boxShadow: "2px 2px 15px black" }}
                  className=" object-cover h-[40vh] w-full cursor-pointer  hover:animate-pulse transition-all ease-in-out duration-400 hover:h-[43vh] hover:w-[44vw] rounded-xl"
                  src={require("../assets/p3.jpg")}
                  alt=""
                />
                <h1 className=" font-bold relative bottom-7 rounded-b-xl bg-[#1d1c1c94] hover:bg-[#131314da] text-white text-xl text-center datatitle">
                  Sushil Kumar Modi
                </h1>
              </a>
            </div>
            <p className=" text-justify" style={{ fontFamily: "Young Serif" }}>
              Bihar's political landscape is characterized by a unique blend of
              caste-based politics, the influence of regional parties, and a
              history of shifting electoral alliances. Caste identity and
              mobilization play a significant role in the state's politics, with
              various political parties often relying on the support of specific
              caste groups to secure votes. Prominent regional parties like the
              Rashtriya Janata Dal (RJD), led by Lalu Prasad Yadav, and the
              Janata Dal (United) (JD(U)), led by Nitish Kumar, have been
              central to the political narrative of the state. The political
              dynamics have often seen these regional parties forming alliances
              with national parties like the Bharatiya Janata Party (BJP) or the
              Indian National Congress (INC), depending on the prevailing
              political environment and electoral calculations. Leaders like
              Lalu Prasad Yadav, known for his charismatic leadership and
              commitment to social justice, have shaped the course of Bihar
              politics for decades. His party, the RJD, has traditionally
              represented the interests of the Yadav community and other
              backward classes. In contrast, Nitish Kumar, a pragmatic leader,
              has focused on governance and development issues during his tenure
              as Chief Minister, emphasizing law and order, education, and rural
              development.
            </p>
            <div>
              <div className="relative top-16 mb-16 h-72 ">
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <img
                      className="h-56 w-76 rounded-lg hover:h-60 hover:w-80 hover:animate-pulse transition-all ease-in-out duration-400"
                      src={require("../assets/b1.jpg")}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-56 w-76 rounded-lg hover:h-60  hover:animate-pulse transition-all ease-in-out duration-400"
                      src={require("../assets/b2.jpg")}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-56 w-76 rounded-lg hover:h-60 hover:w-80 hover:animate-pulse transition-all ease-in-out duration-400"
                      src={require("../assets/b3.jpg")}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-56 w-76 rounded-lg hover:h-60 hover:w-80 hover:animate-pulse transition-all ease-in-out duration-400"
                      src={require("../assets/b4.jpg")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

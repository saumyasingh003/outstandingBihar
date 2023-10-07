// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay } from "swiper/modules";

export default function Cards() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={20}
      slidesPerView={4}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },

        639: {
          slidesPerView: 2,
        },
        865: {
          slidesPerView: 3,
        },
        1000: {
          slidesPerView: 4,
        },
      }}
      navigation
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div>
          <div className="relative top-5 mb-10 left-3 ">
            <div className="flex flex-col max-w-md p-6 space-y-2 overflow-hidden rounded-lg shadow-md bg-gray-900text-gray-100">
              <div className="flex space-x-4"></div>
              <div>
                <img
                  src={require("../assets/hanuman mandir.jpg")}
                  alt=""
                  className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div>
          <div className="relative top-5 mb-10 left-3 ">
            <div className="flex flex-col max-w-md p-6 space-y-2  overflow-hidden rounded-lg shadow-md bg-gray-900text-gray-100">
              <div className="flex space-x-4"></div>
              <div>
                <img
                  src={require("../assets/sher-shah.jpg")}
                  alt=""
                  className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div>
          <div className="relative top-5 mb-10 left-3 ">
            <div className="flex flex-col max-w-md p-6 space-y-2  overflow-hidden rounded-lg shadow-md bg-gray-900text-gray-100">
              <div className="flex space-x-4"></div>
              <div>
                <img
                  src={require("../assets/liti.jpg")}
                  alt=""
                  className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div>
          <div className="relative top-5 mb-10 left-3 ">
            <div className="flex flex-col max-w-md p-6 space-y-2  overflow-hidden rounded-lg shadow-md bg-gray-900text-gray-100">
              <div className="flex space-x-4"></div>
              <div>
                <img
                  src={require("../assets/Chhath-Puja.jpg")}
                  alt=""
                  className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div>
          <div className="relative top-5 mb-10 left-3 ">
            <div className="flex flex-col max-w-md p-6 space-y-2  overflow-hidden rounded-lg shadow-md bg-gray-900text-gray-100">
              <div className="flex space-x-4"></div>
              <div>
                <img
                  src={require("../assets/madhubani.jpg")}
                  alt=""
                  className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div>
          <div className="relative top-5 mb-10 left-3 ">
            <div className="flex flex-col max-w-md p-6 space-y-2  overflow-hidden rounded-lg shadow-md bg-gray-900text-gray-100">
              <div className="flex space-x-4"></div>
              <div>
                <img
                  src={require("../assets/glass bridge.jpg")}
                  alt=""
                  className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div>
          <div className="relative top-5 mb-10 left-3 ">
            <div className="flex flex-col max-w-md p-6 space-y-2  overflow-hidden rounded-lg shadow-md bg-gray-900text-gray-100">
              <div className="flex space-x-4"></div>
              <div>
                <img
                  src={require("../assets/nalanda.jpg")}
                  alt=""
                  className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div>
          <div className="relative top-5 mb-10 left-3 ">
            <div className="flex flex-col max-w-md p-6 space-y-2  overflow-hidden rounded-lg shadow-md bg-gray-900text-gray-100">
              <div className="flex space-x-4"></div>
              <div>
                <img
                  src={require("../assets/Viswaasanti.jpg")}
                  alt=""
                  className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

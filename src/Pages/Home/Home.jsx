// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
  import { useTranslation } from "react-i18next";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Home.css";

import img1 from "../Home/imges/img1.png";
import img2 from "../Home/imges/img2.png";
import img3 from "../Home/imges/img3.png";
import img4 from "../Home/imges/img4.png";
import img5 from "../Home/imges/img5.png";
import img6 from "../Home/imges/img6.png";
import img7 from "../Home/imges/img7.png";
import img8 from "../Home/imges/img8.png";
import img9 from "../Home/imges/img9.jpg";
import img10 from "../Home/imges/img10.png";
import img11 from "../Home/imges/img11.png";
import img12 from "../Home/imges/img12.png";
import img13 from "../Home/imges/img13.png";
import img14 from "../Home/imges/img14.png";
import img15 from "../Home/imges/img15.png";
import img16 from "../Home/imges/img16.png";

import Скрол from "../Home/imges/Скрол.png";

import Card from "./components/Card";

// import required modules
import { Pagination } from "swiper/modules";
import { useState } from "react";
import Card2 from "./components/Card2";

const Home = () => {
  const [t, i18n] = useTranslation();

  const changeLanguage = (Language) => {
    i18n.changeLanguage(Language);
  };
  let [lng, setLng] = useState("en");
  return (
    <div className="bg-white">
      <div className="w-full h-[600px] bg-[#3BB96D]">
        <Swiper
          style={{
            borderColor: "transparent",
            width: "90%",
            height: "90%",
            margin: "auto",
          }}
          pagination={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide style={{ backgroundColor: "transparent" }}>
            <div className="w-[50%] h-[90%]  flex flex-col justify-center items-start text-start">
              <h1 className="font-bold text-white text-[45px] w-[90%] ">
                {t("home.sec1.text1")}
              </h1>
              <p className=" text-white ">{t("home.sec1.text2")}</p>
              <button className=" text-[#3BB96D] bg-white w-[200px] h-[30px] rounded-2xl mt-6 ">
                {t("home.sec1.btn")}
              </button>
            </div>
            <div className="w-[50%] h-[90%] ">
              <img src={img1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundColor: "transparent" }}>
            <div className="w-[50%] h-[90%]  flex flex-col justify-center items-start text-start">
              <h1 className="font-bold text-white text-[45px] w-[90%] ">
                {t("home.sec1.text1")}
              </h1>
              <p className=" text-white ">{t("home.sec1.text2")}</p>
              <button className=" text-[#3BB96D] bg-white w-[200px] h-[30px] rounded-2xl mt-6 ">
                {t("home.sec1.btn")}
              </button>
            </div>
            <div className="w-[50%] h-[90%] ">
              <img src={img1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundColor: "transparent" }}>
            <div className="w-[50%] h-[90%]  flex flex-col justify-center items-start text-start">
              <h1 className="font-bold text-white text-[45px] w-[90%] ">
                {t("home.sec1.text1")}
              </h1>
              <p className=" text-white ">{t("home.sec1.text2")}</p>
              <button className=" text-[#3BB96D] bg-white w-[200px] h-[30px] rounded-2xl mt-6 ">
                {t("home.sec1.btn")}
              </button>
            </div>
            <div className="w-[50%] h-[90%] ">
              <img src={img1} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <section className="w-[90%] m-auto h-[550px] flex items-center justify-center  ">
        <div className="w-[50%] h-[80%] flex flex-col justify-center">
          <h1 className="font-bold text-[40px] ">{t("home.sec2.text1")}</h1>
          <p>{t("home.sec2.text2")}</p>
          <p className="mt-5"> {t("home.sec2.text2")}</p>
        </div>
        <div className="w-[45%] h-[70%]">
          <img className="w-full h-full" src={img2} alt="" />
        </div>
      </section>
      <section className="w-[90%] h-[550px] m-auto ">
        <div className="w-full flex justify-between items-center ">
          <h1 className="text-[40px]">{t("home.sec3.text1")}</h1>
          <button className="bg-[#3BB96D] text-white w-[220px] h-[40px] rounded-full">
            {t("home.sec3.btn")}
          </button>
        </div>
        <div className="w-full flex justify-between mt-10">
          <Card img={img3} p1={t("home.sec3.p1")} p2={t("home.sec3.text2")} />
          <Card img={img4} p1={t("home.sec3.p2")} p2={t("home.sec3.text2")} />
          <Card img={img5} p1={t("home.sec3.p3")} p2={t("home.sec3.text2")} />
          <Card img={img6} p1={t("home.sec3.p4")} p2={t("home.sec3.text2")} />
        </div>
      </section>
      <section className="w-full h-[900px] bg-[#F1F5F8] flex flex-col ">
        <div className="w-[90%] h-[100px] m-auto flex justify-between items-center ">
          <h1 className="text-[40px]">{t("home.sec4.text1")}</h1>
          <img src={Скрол} alt="" />
        </div>
        <div className="w-[90%] h-[430px] m-auto flex justify-between">
          <div className="w-[300px] h-[400px] flex flex-col justify-between">
            <div className="w-full h-[270px] ">
              <img className="w-full h-full" src={img7} alt="" />
            </div>
            <h1 className="font-bold text-[17px]">{t("home.sec4.p1")}</h1>
            <h1 className="text-[gray]">{t("home.sec4.p2")}</h1>
            <button className="w-[220px] h-[40px] bg-[#3BB96D] text-white rounded-3xl">
              {t("home.sec4.btn")}
            </button>
          </div>
          <div className="w-[300px] h-[400px] flex flex-col justify-between">
            <div className="w-full h-[270px] ">
              <img className="w-full h-full" src={img7} alt="" />
            </div>
            <h1 className="font-bold text-[17px]">{t("home.sec4.p1")}</h1>
            <h1 className="text-[gray]">{t("home.sec4.p2")}</h1>
            <button className="w-[220px] h-[40px] bg-[#3BB96D] text-white rounded-3xl">
              {t("home.sec4.btn")}
            </button>
          </div>
          <div className="w-[300px] h-[400px] flex flex-col justify-between">
            <div className="w-full h-[270px] ">
              <img className="w-full h-full" src={img7} alt="" />
            </div>
            <h1 className="font-bold text-[17px]">{t("home.sec4.p1")}</h1>
            <h1 className="text-[gray]">{t("home.sec4.p2")}</h1>
            <button className="w-[220px] h-[40px] bg-[#3BB96D] text-white rounded-3xl">
              {t("home.sec4.btn")}
            </button>
          </div>
          <div className="w-[300px] h-[400px] flex flex-col justify-between">
            <div className="w-full h-[270px] ">
              <img className="w-full h-full" src={img7} alt="" />
            </div>
            <h1 className="font-bold text-[17px]">{t("home.sec4.p1")}</h1>
            <h1 className="text-[gray]">{t("home.sec4.p2")}</h1>
            <button className="w-[220px] h-[40px] bg-[#3BB96D] text-white rounded-3xl">
              {t("home.sec4.btn")}
            </button>
          </div>
        </div>
        <div className="w-[90%] h-[50px] m-auto text-center">
          <button className="w-[200px] h-[40px] rounded-full border-[1px] border-[#3BB96D] text-[#3BB96D] ">
            {t("home.sec4.btn2")}
          </button>
        </div>
      </section>
      <section className=" w-full h-[600px] ">
        <div className="w-[90%] m-auto flex justify-between">
          <h1 className="text-[35px]">{t("home.sec5.text1")}</h1>
          <div className=""></div>
        </div>
        <div className="w-[90%] m-auto flex justify-between">
          <div className="w-[45%] h-[70%]">
            <Card2
              bg={"#3BB96D"}
              // w={"90%"}
              h={"70%"}
              p1={t("home.sec5.text2")}
              p2={t("home.sec5.text3")}
              p3={t("home.sec5.text4")}
              p4={"22.03.2023"}
              img={img8}
            />
          </div>
          <div className="w-[49%] h-[90%] flex flex-wrap gap-2">
            <div className="w-[300px] h-[200px] border bg-[#6567F2] text-white rounded-lg  ">
              <h1 className="w-[90%] m-auto">{t("home.sec5.text2")}</h1>
              <p className="w-[90%] m-auto">{t("home.sec5.text4")}</p>
              <p className="w-[90%] m-auto">22.03.2023</p>
              <div className="w-[95%] m-auto flex justify-between">
                <div className=""></div>
                <img className="w-[100px]" src={img8} alt="" />
              </div>
              <div className="w-[90%] m-auto">
                <button className="text-[#3BB96D] bg-white w-[100px] h-[30px] rounded-2xl ">
                  {t("home.sec5.btn")}
                </button>
              </div>
            </div>
            <div className="w-[300px] h-[200px] border bg-[#F57676] text-white rounded-lg ">
              <h1 className="w-[90%] m-auto">{t("home.sec5.text2")}</h1>
              <p className="w-[90%] m-auto">{t("home.sec5.text4")}</p>
              <p className="w-[90%] m-auto">22.03.2023</p>
              <div className="w-[95%] m-auto flex justify-between">
                <div className=""></div>
                <img className="w-[100px]" src={img8} alt="" />
              </div>
              <div className="w-[90%] m-auto">
                <button className="text-[#3BB96D] bg-white w-[100px] h-[30px] rounded-2xl ">
                  {t("home.sec5.btn")}
                </button>
              </div>
            </div>
            <div className="w-[300px] h-[200px] border bg-[#FFDB5C] text-white rounded-lg ">
              <h1 className="w-[90%] m-auto">{t("home.sec5.text2")}</h1>
              <p className="w-[90%] m-auto">{t("home.sec5.text4")}</p>
              <p className="w-[90%] m-auto">22.03.2023</p>
              <div className="w-[95%] m-auto flex justify-between">
                <div className=""></div>
                <img className="w-[100px]" src={img8} alt="" />
              </div>
              <div className="w-[90%] m-auto">
                <button className="text-[#3BB96D] bg-white w-[100px] h-[30px] rounded-2xl ">
                  {t("home.sec5.btn")}
                </button>
              </div>
            </div>
            <div className="w-[300px] h-[200px] border bg-[#27C8DA] text-white rounded-lg ">
              <h1 className="w-[90%] m-auto">{t("home.sec5.text2")}</h1>
              <p className="w-[90%] m-auto">{t("home.sec5.text4")}</p>
              <p className="w-[90%] m-auto">22.03.2023</p>
              <div className="w-[95%] m-auto flex justify-between">
                <div className=""></div>
                <img className="w-[100px]" src={img8} alt="" />
              </div>
              <div className="w-[90%] m-auto">
                <button className="text-[#3BB96D] bg-white w-[100px] h-[30px] rounded-2xl ">
                  {t("home.sec5.btn")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-[900px] bg-[#F1F5F8] flex items-center justify-center">
        <div className="w-[90%] h-[80%] ">
          <div className="w-[100%] flex m-auto justify-between ">
            <h1 className="text-[35px]">{t("home.sec6.text1")}</h1>
            <div className=""></div>
          </div>
          <div className="w-full flex justify-between">
            <div className="w-[400px] h-[100px] border bg-[#27C8DA] flex items-center justify-center rounded">
              <img className="h-[90%]" src={img9} alt="" />
              <p className="text-white">{t("home.sec6.text2")}</p>
            </div>
            <div className="w-[400px] h-[100px] border bg-[#27C8DA] flex items-center justify-center rounded">
              <img className="h-[90%]" src={img9} alt="" />
              <p className="text-white">{t("home.sec6.text3")}</p>
            </div>
            <div className="w-[400px] h-[100px] border bg-[#27C8DA] flex items-center justify-center rounded">
              <img className="h-[90%]" src={img9} alt="" />
              <p className="text-white">{t("home.sec6.text4")}</p>
            </div>
          </div>
          <div className="w-[100%] m-auto h-[500px]  mt-10 flex  justify-between">
            <div className="w-[50%] h-[60%] flex flex-col text-[gray] justify-between ">
              <p>{t("home.sec6.text5")}</p>
              <p>{t("home.sec6.text6")}</p>
              <button className="w-[220px] h-[40px] bg-[#3BB96D] text-white rounded-3xl ">
                {t("home.sec6.btn")}
              </button>
            </div>
            <div className="w-[50%] h-[100%]">
              <img className="" src={img10} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-[900px] flex justify-center items-center  ">
        <div className="w-[90%] h-[80%]  ">
          <div className="">
            <h1 className="font-bold text-[35px]">{t("home.sec7.text1")}</h1>
            <h1></h1>
          </div>
          <div className="w-full flex justify-between mt-5 ">
            <div className="w-[360px]  h-[480px] bg-[#F4F6FA] rounded-2xl   ">
              <img className="w-[70%] m-auto" src={img8} alt="" />
              <div className="w-full h-[200px]  flex flex-col justify-between">
                <p className="font-bold text-[17px] w-[90%] m-auto">
                  {t("home.sec7.text2")}
                </p>
                <p className="w-[90%] m-auto">{t("home.sec7.text3")}</p>
                <p className="w-[90%] m-auto">{t("home.sec7.text4")}</p>
                <p className="w-[90%] m-auto">{t("home.sec7.text5")}</p>
                <p className="w-[90%] m-auto">{t("home.sec7.text6")}</p>
                <p className="w-[90%] m-auto">{t("home.sec7.text7")}</p>
              </div>
            </div>
            <div className="w-[360px]  h-[480px] bg-[#F4F6FA] rounded-2xl  ">
              <img className="w-[70%] m-auto" src={img11} alt="" />
              <div className="w-full h-[200px]  flex flex-col justify-between">
                <p className="font-bold text-[17px] w-[90%] m-auto">
                  {t("home.sec7.p2")}
                </p>
                <p className="w-[90%] m-auto">{t("home.sec7.text3")}</p>
                <p className="w-[90%] m-auto">{t("home.sec7.text4")}</p>
                <p className="w-[90%] m-auto">{t("home.sec7.text5")}</p>
                <p className="w-[90%] m-auto">{t("home.sec7.text6")}</p>
                <p className="w-[90%] m-auto">{t("home.sec7.text7")}</p>
              </div>
            </div>
            <div className="w-[360px]  h-[480px] bg-[#F4F6FA] rounded-2xl  ">
              <img className="w-[70%] m-auto" src={img12} alt="" />
              <div className="w-full h-[200px]  flex flex-col justify-between">
                <p className="font-bold text-[17px] w-[90%] m-auto">
                  {t("home.sec7.p3")}
                </p>
                <p className="w-[90%] m-auto">{t("home.sec7.text3")}</p>
                <p className="w-[90%] m-auto">{t("home.sec7.text4")}</p>
                <p className="w-[90%] m-auto">{t("home.sec7.text5")}</p>
                <p className="w-[90%] m-auto">{t("home.sec7.text6")}</p>
                <p className="w-[90%] m-auto">{t("home.sec7.text7")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-[900px] flex items-center justify-center">
        <div className="w-[90%] h-[80%] ">
          <h1 className="font-bold text-[35px]">{t("home.sec8.text1")}</h1>
          <div className="w-[100%] h-[500px]  rounded-lg bg-[#F4F6FA] flex items-center justify-center ">
            <div className="w-[48%] h-[90%]">
              <p className="h-[50px]  text-[#3BB96D]  bg-white flex items-center">
                {" "}
                <span className="font-bold text-[18px] text-[#3BB96D] mr-2 ">
                  01
                </span>
                {t("home.sec8.text2")}
              </p>
              <p className="h-[50px] text-[gray] ">
                {" "}
                <span className="font-bold text-[18px] text-black mr-2 ">
                  02
                </span>
                {t("home.sec8.text3")}
              </p>
              <p className="h-[50px] text-[gray] ">
                {" "}
                <span className="font-bold text-[18px] text-black mr-2 ">
                  03
                </span>
                {t("home.sec8.text4")}
              </p>
              <p className="h-[50px] text-[gray] ">
                {" "}
                <span className="font-bold text-[18px] text-black mr-2 ">
                  04
                </span>
                {t("home.sec8.text5")}
              </p>
              <p className="h-[50px] text-[gray] ">
                {" "}
                <span className="font-bold text-[18px] text-black mr-2 ">
                  05
                </span>
                {t("home.sec8.text6")}
              </p>
              <p className="h-[50px] text-[gray] ">
                {" "}
                <span className="font-bold text-[18px] text-black mr-2 ">
                  06
                </span>
                {t("home.sec8.text7")}
              </p>
              <p className="h-[50px] text-[gray] ">
                {" "}
                <span className="font-bold text-[18px] text-black mr-2 ">
                  07
                </span>
                {t("home.sec8.text8")}
              </p>
              <p className="h-[50px] text-[gray] ">
                {" "}
                <span className="font-bold text-[18px] text-black mr-2 ">
                  08
                </span>
                {t("home.sec8.text9")}
              </p>
              <p className="h-[50px] text-[gray] ">
                {" "}
                <span className="font-bold text-[18px] text-black mr-2 ">
                  09
                </span>
                {t("home.sec8.text10")}
              </p>
            </div>
            <div className="w-[48%] h-[90%] bg-white rounded-lg">
              <h1 className="text-[30px] font-bold w-[90%] m-auto ">
                {t("home.sec8.text2")}
              </h1>
              <p className="w-[90%] m-auto text-[gray]">
                {t("home.sec8.text11")}
              </p>
              <div className="w-[90%] m-auto flex items-center justify-between ">
                <div className="">
                  <h1 className="text-[#3BB96D] font-bold text-[30px] ">
                    +2 800
                  </h1>
                  <p className="text-[gray] font-bold  ">
                    {t("home.sec8.text12")}
                  </p>
                  <h1 className="text-[#3BB96D] font-bold text-[30px] ">
                    +2 800
                  </h1>
                  <p className="text-[gray] font-bold  ">
                    {t("home.sec8.text12")}
                  </p>
                  <h1 className="text-[#3BB96D] font-bold text-[30px] ">
                    +2 800
                  </h1>
                  <p className="text-[gray] font-bold  ">
                    {t("home.sec8.text12")}
                  </p>
                </div>
                <div className="w-[50%]">
                  <img className="w-full" src={img13} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[100%] h-[500px] flex items-center justify-center">
        <div className="w-[90%] h-[90%]">
          <h1 className="text-[35px]">{t("home.sec9.text1")}</h1>
          <div className="w-[100%] flex justify-between">
            <img src={img14} alt="" />
            <img src={img14} alt="" />
            <img src={img14} alt="" />
            <img src={img14} alt="" />
            <img src={img14} alt="" />
            <img src={img14} alt="" />
          </div>
          <div className="w-[100%] flex justify-between">
            <img src={img14} alt="" />
            <img src={img14} alt="" />
            <img src={img14} alt="" />
            <img src={img14} alt="" />
            <img src={img14} alt="" />
            <img src={img14} alt="" />
          </div>
        </div>
      </section>
      <section className="bg-[#F1F5F8] h-[800px] flex justify-center items-center">
        <div className="w-[90%] h-[80%] ">
          <h1 className="text-[35px]">{t("home.sec10.text1")}</h1>
          <div className="flex justify-between flex-wrap mt-10">
            <img src={img15} alt="" />
            <img src={img15} alt="" />
            <img src={img15} alt="" />
            <img src={img15} alt="" />
          </div>
        </div>
      </section>
      <section className="h-[600px] flex">
        <div className="w-[40%] bg-black flex items-center justify-center">
          <div className="w-[70%] h-[70%]  text-white">
            <h1 className="text-[35px]">{t("home.sec11.text1")}</h1>
            <h1 className="text-[13px]">{t("home.sec11.text2")}</h1>
            <h1 className="text-[20px]">{t("home.sec11.p")}</h1>
            <h1 className="text-[13px] mt-5">{t("home.sec11.text3")}</h1>
            <h1 className="text-[17px]">{t("home.sec11.text4")}</h1>
            <h1 className="text-[13px] mt-5">{t("home.sec11.text5")}</h1>
            <h1 className="text-[17px]">{t("home.sec11.text6")}</h1>
            <button className="w-[230px] mt-3 h-[40px] bg-[#3BB96D] rounded-3xl">
              {t("home.sec11.btn")}
            </button>
          </div>
        </div>
        <div className="w-[60%]">
          <img className="w-full h-full" src={img16} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Home;

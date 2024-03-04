import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";

const Vrachi = () => {
  const [t, i18n] = useTranslation();

  const changeLanguage = (Language) => {
    i18n.changeLanguage(Language);
  };
  let [lng, setLng] = useState("en");
  return (
    <div className="bg-white dark:text-white dark:bg-slate-900">
      <div className="w-[90%] m-auto">
        <Link
          to={"/"}
          style={{
            display: "flex",
            width: "110px",
            justifyContent: "space-between",
          }}
        >
          Главная <p>{t("vrachi.sec1.text1")}</p>
        </Link>
        <h1 className="font-bold text-[30px]">{t("vrachi.sec1.text1")}</h1>
      </div>
      <div className="w-[90%] m-auto flex flex-wrap justify-between">
        <div className="w-[400px] h-[450px] rounded-lg border">
          <img className="w-full h-[270px] " src={img1} alt="" />
          <div className="flex flex-col justify-between h-[170px]">
            <h1 className="font-bold text-[20px]">{t("vrachi.sec2.text1")}</h1>
            <h1 className="text-[gray] ">{t("vrachi.sec2.text2")}</h1>
            <button className="w-[230px] h-[40px] bg-[#3BB96D] rounded-3xl text-white">
              {t("vrachi.sec2.btn1")}
            </button>
            <button className="w-[230px] h-[40px] border-[1px] text-[#3BB96D] border-[#3BB96D] rounded-3xl">
              {t("vrachi.sec2.btn2")}
            </button>
          </div>
        </div>
        <div className="w-[400px] h-[450px] rounded-lg border">
          <img className="w-full h-[270px] " src={img1} alt="" />
          <div className="flex flex-col justify-between h-[170px]">
            <h1 className="font-bold text-[20px]">{t("vrachi.sec2.text1")}</h1>
            <h1 className="text-[gray] ">{t("vrachi.sec2.text2")}</h1>
            <button className="w-[230px] h-[40px] bg-[#3BB96D] rounded-3xl text-white">
              {t("vrachi.sec2.btn1")}
            </button>
            <button className="w-[230px] h-[40px] border-[1px] text-[#3BB96D] border-[#3BB96D] rounded-3xl">
              {t("vrachi.sec2.btn2")}
            </button>
          </div>
        </div>
        <div className="w-[400px] h-[450px] rounded-lg border">
          <img className="w-full h-[270px] " src={img1} alt="" />
          <div className="flex flex-col justify-between h-[170px]">
            <h1 className="font-bold text-[20px]">{t("vrachi.sec2.text1")}</h1>
            <h1 className="text-[gray] ">{t("vrachi.sec2.text2")}</h1>
            <button className="w-[230px] h-[40px] bg-[#3BB96D] rounded-3xl text-white">
              {t("vrachi.sec2.btn1")}
            </button>
            <button className="w-[230px] h-[40px] border-[1px] text-[#3BB96D] border-[#3BB96D] rounded-3xl">
              {t("vrachi.sec2.btn2")}
            </button>
          </div>
        </div>
        <div className="w-[400px] h-[450px] rounded-lg border">
          <img className="w-full h-[270px] " src={img1} alt="" />
          <div className="flex flex-col justify-between h-[170px]">
            <h1 className="font-bold text-[20px]">{t("vrachi.sec2.text1")}</h1>
            <h1 className="text-[gray] ">{t("vrachi.sec2.text2")}</h1>
            <button className="w-[230px] h-[40px] bg-[#3BB96D] rounded-3xl text-white">
              {t("vrachi.sec2.btn1")}
            </button>
            <button className="w-[230px] h-[40px] border-[1px] text-[#3BB96D] border-[#3BB96D] rounded-3xl">
              {t("vrachi.sec2.btn2")}
            </button>
          </div>
        </div>
        <div className="w-[400px] h-[450px] rounded-lg border">
          <img className="w-full h-[270px] " src={img1} alt="" />
          <div className="flex flex-col justify-between h-[170px]">
            <h1 className="font-bold text-[20px]">{t("vrachi.sec2.text1")}</h1>
            <h1 className="text-[gray] ">{t("vrachi.sec2.text2")}</h1>
            <button className="w-[230px] h-[40px] bg-[#3BB96D] rounded-3xl text-white">
              {t("vrachi.sec2.btn1")}
            </button>
            <button className="w-[230px] h-[40px] border-[1px] text-[#3BB96D] border-[#3BB96D] rounded-3xl">
              {t("vrachi.sec2.btn2")}
            </button>
          </div>
        </div>
        <div className="w-[400px] h-[450px] rounded-lg border">
          <img className="w-full h-[270px] " src={img1} alt="" />
          <div className="flex flex-col justify-between h-[170px]">
            <h1 className="font-bold text-[20px]">{t("vrachi.sec2.text1")}</h1>
            <h1 className="text-[gray] ">{t("vrachi.sec2.text2")}</h1>
            <button className="w-[230px] h-[40px] bg-[#3BB96D] rounded-3xl text-white">
              {t("vrachi.sec2.btn1")}
            </button>
            <button className="w-[230px] h-[40px] border-[1px] text-[#3BB96D] border-[#3BB96D] rounded-3xl">
              {t("vrachi.sec2.btn2")}
            </button>
          </div>
        </div>
        <div className="w-[400px] h-[450px] rounded-lg border">
          <img className="w-full h-[270px] " src={img1} alt="" />
          <div className="flex flex-col justify-between h-[170px]">
            <h1 className="font-bold text-[20px]">{t("vrachi.sec2.text1")}</h1>
            <h1 className="text-[gray] ">{t("vrachi.sec2.text2")}</h1>
            <button className="w-[230px] h-[40px] bg-[#3BB96D] rounded-3xl text-white">
              {t("vrachi.sec2.btn1")}
            </button>
            <button className="w-[230px] h-[40px] border-[1px] text-[#3BB96D] border-[#3BB96D] rounded-3xl">
              {t("vrachi.sec2.btn2")}
            </button>
          </div>
        </div>
        <div className="w-[400px] h-[450px] rounded-lg border">
          <img className="w-full h-[270px] " src={img1} alt="" />
          <div className="flex flex-col justify-between h-[170px]">
            <h1 className="font-bold text-[20px]">{t("vrachi.sec2.text1")}</h1>
            <h1 className="text-[gray] ">{t("vrachi.sec2.text2")}</h1>
            <button className="w-[230px] h-[40px] bg-[#3BB96D] rounded-3xl text-white">
              {t("vrachi.sec2.btn1")}
            </button>
            <button className="w-[230px] h-[40px] border-[1px] text-[#3BB96D] border-[#3BB96D] rounded-3xl">
              {t("vrachi.sec2.btn2")}
            </button>
          </div>
        </div>
        <div className="w-[400px] h-[450px] rounded-lg border">
          <img className="w-full h-[270px] " src={img1} alt="" />
          <div className="flex flex-col justify-between h-[170px]">
            <h1 className="font-bold text-[20px]">{t("vrachi.sec2.text1")}</h1>
            <h1 className="text-[gray] ">{t("vrachi.sec2.text2")}</h1>
            <button className="w-[230px] h-[40px] bg-[#3BB96D] rounded-3xl text-white">
              {t("vrachi.sec2.btn1")}
            </button>
            <button className="w-[230px] h-[40px] border-[1px] text-[#3BB96D] border-[#3BB96D] rounded-3xl">
              {t("vrachi.sec2.btn2")}
            </button>
          </div>
        </div>
        <div className="w-[400px] h-[450px] rounded-lg border">
          <img className="w-full h-[270px] " src={img1} alt="" />
          <div className="flex flex-col justify-between h-[170px]">
            <h1 className="font-bold text-[20px]">{t("vrachi.sec2.text1")}</h1>
            <h1 className="text-[gray] ">{t("vrachi.sec2.text2")}</h1>
            <button className="w-[230px] h-[40px] bg-[#3BB96D] rounded-3xl text-white">
              {t("vrachi.sec2.btn1")}
            </button>
            <button className="w-[230px] h-[40px] border-[1px] text-[#3BB96D] border-[#3BB96D] rounded-3xl">
              {t("vrachi.sec2.btn2")}
            </button>
          </div>
        </div>
        <div className="w-[400px] h-[450px] rounded-lg border">
          <img className="w-full h-[270px] " src={img1} alt="" />
          <div className="flex flex-col justify-between h-[170px]">
            <h1 className="font-bold text-[20px]">{t("vrachi.sec2.text1")}</h1>
            <h1 className="text-[gray] ">{t("vrachi.sec2.text2")}</h1>
            <button className="w-[230px] h-[40px] bg-[#3BB96D] rounded-3xl text-white">
              {t("vrachi.sec2.btn1")}
            </button>
            <button className="w-[230px] h-[40px] border-[1px] text-[#3BB96D] border-[#3BB96D] rounded-3xl">
              {t("vrachi.sec2.btn2")}
            </button>
          </div>
        </div>
        <div className="w-[400px] h-[450px] rounded-lg border">
          <img className="w-full h-[270px] " src={img1} alt="" />
          <div className="flex flex-col justify-between h-[170px]">
            <h1 className="font-bold text-[20px]">{t("vrachi.sec2.text1")}</h1>
            <h1 className="text-[gray] ">{t("vrachi.sec2.text2")}</h1>
            <button className="w-[230px] h-[40px] bg-[#3BB96D] rounded-3xl text-white">
              {t("vrachi.sec2.btn1")}
            </button>
            <button className="w-[230px] h-[40px] border-[1px] text-[#3BB96D] border-[#3BB96D] rounded-3xl">
              {t("vrachi.sec2.btn2")}
            </button>
          </div>
        </div>
      </div>
      <div className="w-[80%] m-auto h-[150px] flex flex-col justify-center items-center  ">
        <img className="w-[240px] m-auto " src={img2} alt="" />
        <button className="w-[230px] h-[40px] bg-[#3BB96D] text-white rounded-3xl m-auto">
          {t("vrachi.sec2.btn3")}
        </button>
      </div>
      <section className="w-[100%] m-auto h-[600px] flex items-center justify-center ">
        <div className="w-[80%] h-[60%] bg-[#272727] rounded-3xl flex items-center justify-between">
          <div className="w-[53%] text-white">
            <h1 className="text-[35px] w-[90%] m-auto">
              {t("vrachi.sec3.text1")}
            </h1>
            <h1 className="w-[90%] m-auto ">{t("vrachi.sec3.text2")}</h1>
            <div className="w-[90%] m-auto flex justify-between mt-5">
              <div className="">
                <p>{t("vrachi.sec3.text3")}</p>
                <input
                  className="w-[280px] h-[40px] rounded-3xl"
                  placeholder={t("vrachi.sec3.text5")}
                  type="text"
                />
              </div>
              <div className="">
                <p>{t("vrachi.sec3.text4")}</p>
                <input
                  className="w-[280px] h-[40px] rounded-3xl"
                  placeholder="+7 (___) ___-__-__"
                  type="text"
                />
              </div>
            </div>
            <div className="w-[90%] m-auto mt-5">
              <button className="w-[280px] h-[40px] rounded-3xl text-white bg-[#3BB96D]">
                {t("vrachi.sec3.btn")}
              </button>
            </div>
            <p className="w-[90%] m-auto mt-5">{t("vrachi.sec3.text6")}</p>
          </div>
          <div className="w-[45%]">
            <img src={img3} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vrachi;

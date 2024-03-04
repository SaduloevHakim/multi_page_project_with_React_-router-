import { useState } from "react";
import { useTranslation } from "react-i18next";
import Card2 from "../Home/components/Card2";
import img from "./images/img.png";
import img2 from "./images/img2.png";

import img1 from "./images/img1.png";

const Aksi = () => {
  const [t, i18n] = useTranslation();

  const changeLanguage = (Language) => {
    i18n.changeLanguage(Language);
  };
  let [lng, setLng] = useState("en");
  return (
    <div className="bg-white dark:text-white dark:bg-slate-900">
      <h1 className="text-[35px] w-[90%] m-auto h-[70px]">Наши акции</h1>
      <section className="flex w-[90%] m-auto justify-between h-[500px]">
        <div className="w-[45%] h-[115%]">
          <Card2
            bg={"#3BB96D"}
            // w={"90%"}
            h={"70%"}
            p1={t("home.sec5.text2")}
            p2={t("home.sec5.text3")}
            p3={t("home.sec5.text4")}
            p4={"22.03.2023"}
            img={img1}
          />
        </div>
        <div className="w-[45%] h-[115%]">
          <Card2
            bg={"#27C8DA"}
            // w={"90%"}
            h={"70%"}
            p1={t("home.sec5.text2")}
            p2={t("home.sec5.text3")}
            p3={t("home.sec5.text4")}
            p4={"22.03.2023"}
            img={img1}
          />
        </div>
      </section>
      <section className="w-[90%] m-auto h-[400px]">
        <div className="w-[100%] h-[90%] flex justify-between">
          <div className="w-[300px] h-[200px] border bg-[#6567F2] text-white rounded-lg  ">
            <h1 className="w-[90%] m-auto">{t("home.sec5.text2")}</h1>
            <p className="w-[90%] m-auto">{t("home.sec5.text4")}</p>
            <p className="w-[90%] m-auto">22.03.2023</p>
            <div className="w-[95%] m-auto flex justify-between">
              <div className=""></div>
              <img className="w-[100px]" src={img1} alt="" />
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
              <img className="w-[100px]" src={img1} alt="" />
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
              <img className="w-[100px]" src={img1} alt="" />
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
              <img className="w-[100px]" src={img1} alt="" />
            </div>
            <div className="w-[90%] m-auto">
              <button className="text-[#3BB96D] bg-white w-[100px] h-[30px] rounded-2xl ">
                {t("home.sec5.btn")}
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className=" w-full h-[600px] ">
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
              img={img1}
            />
          </div>
          <div className="w-[49%] h-[90%] flex flex-wrap gap-2">
            <div className="w-[300px] h-[200px] border bg-[#6567F2] text-white rounded-lg  ">
              <h1 className="w-[90%] m-auto">{t("home.sec5.text2")}</h1>
              <p className="w-[90%] m-auto">{t("home.sec5.text4")}</p>
              <p className="w-[90%] m-auto">22.03.2023</p>
              <div className="w-[95%] m-auto flex justify-between">
                <div className=""></div>
                <img className="w-[100px]" src={img1} alt="" />
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
                <img className="w-[100px]" src={img1} alt="" />
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
                <img className="w-[100px]" src={img1} alt="" />
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
                <img className="w-[100px]" src={img1} alt="" />
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
      <section className="flex w-[90%] m-auto justify-between h-[500px]">
        <div className="w-[45%] h-[115%]">
          <Card2
            bg={"#27C8DA"}
            // w={"90%"}
            h={"70%"}
            p1={t("home.sec5.text2")}
            p2={t("home.sec5.text3")}
            p3={t("home.sec5.text4")}
            p4={"22.03.2023"}
            img={img1}
          />
        </div>
        <div className="w-[45%] h-[115%]">
          <Card2
            bg={"#3BB96D"}
            // w={"90%"}
            h={"70%"}
            p1={t("home.sec5.text2")}
            p2={t("home.sec5.text3")}
            p3={t("home.sec5.text4")}
            p4={"22.03.2023"}
            img={img1}
          />
        </div>
      </section>
      <section className="bg-[#F1F5F8] dark:text-white dark:bg-slate-900 h-[800px] flex justify-center items-center">
        <div className="w-[90%] h-[80%] ">
          <h1 className="text-[35px]">{t("home.sec10.text1")}</h1>
          <div className="flex justify-between flex-wrap mt-10">
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
          </div>
        </div>
      </section>
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
            <img src={img2} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aksi;

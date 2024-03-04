import { useTranslation } from "react-i18next";
import Card2 from "../Home/components/Card2";
import img1 from "./images/img1.png";
import { useState } from "react";

import img from "./images/img.jpg";

import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";
import img6 from "./images/img6.png";
import img7 from "./images/img7.png";
import img8 from "./images/img8.png";
import img9 from "./images/img9.png";

const Analizi = () => {
  const [t, i18n] = useTranslation();

  const changeLanguage = (Language) => {
    i18n.changeLanguage(Language);
  };
  let [lng, setLng] = useState("en");
  return (
    <div className="bg-white">
      <section className="flex w-[90%] m-auto justify-between h-[600px]">
        <div className="w-[45%] h-[100%]">
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
        <div className="w-[45%] h-[100%]">
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
      <section className="w-[100%] h-[500px] flex items-center justify-center ">
        <div className="w-[90%] h-[90%]">
          <h1 className="text-[35px] m-auto">Как получить лечение?</h1>
          <div className="flex justify-between mt-5 ">
            <div className="w-[400px] h-[200px] border rounded-lg ">
              <div className="w-[90%] h-[100px] m-auto mt-5">
                <img src={img2} alt="" />
              </div>
              <p className="w-[90%] m-auto text-[gray]">
                Узнайте, входит ли интересующее вас лечение в программу для
                вашего региона
              </p>
            </div>
            <div className="w-[400px] h-[200px] border rounded-lg ">
              <div className="w-[90%] h-[100px] m-auto mt-5">
                <img src={img3} alt="" />
              </div>
              <p className="w-[90%] m-auto text-[gray]">
                Подготовьте необходимые документы и отправьте заявку на лечение
              </p>
            </div>
            <div className="w-[400px] h-[200px] border rounded-lg ">
              <div className="w-[90%] h-[100px] m-auto mt-5">
                <img src={img4} alt="" />
              </div>
              <p className="w-[90%] m-auto text-[gray]">
                В течение 3-х рабочих дней специалист отдела ОМС свяжется с вами
                по указанному вами номеру телефона
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[100%] h-[500px] flex items-center justify-center ">
        <div className="w-[90%] h-[90%]">
          <h1 className="text-[35px] m-auto">Популярные анализы</h1>
          <div className="flex justify-between mt-5 ">
            <div className="w-[260px] h-[280px] border rounded-lg ">
              <div className="w-[90%] h-[100px] m-auto mt-5">
                <img src={img5} alt="" />
              </div>
              <p className="w-[90%] m-auto text-[#3BB96D] text-[20px] font-bold">
                Онкология
              </p>
              <p className="w-[90%] m-auto text-[gray] mt-2">Гистология</p>
              <p className="w-[90%] m-auto text-[gray] mt-2">Онкомаркёры</p>
              <p className="w-[90%] m-auto text-[gray] mt-2">Цитология</p>
            </div>
            <div className="w-[260px] h-[280px] border rounded-lg ">
              <div className="w-[90%] h-[100px] m-auto mt-5">
                <img src={img6} alt="" />
              </div>
              <p className="w-[90%] m-auto text-[#3BB96D] text-[20px] font-bold">
                Исследования крови
              </p>
              <p className="w-[90%] m-auto text-[gray] mt-2">
                Клинические исследования
              </p>
              <p className="w-[90%] m-auto text-[gray] mt-2">Биохимия</p>
              <p className="w-[90%] m-auto text-[gray] mt-2">Цитология</p>
            </div>
            <div className="w-[260px] h-[280px] border rounded-lg ">
              <div className="w-[90%] h-[100px] m-auto mt-5">
                <img src={img7} alt="" />
              </div>
              <p className="w-[90%] m-auto text-[#3BB96D] text-[20px] font-bold">
                Исследования мочи
              </p>
              <p className="w-[90%] m-auto text-[gray] mt-2">
                Биохимический анализ мочи
              </p>
              <p className="w-[90%] m-auto text-[gray] mt-2">
                Общий анализ мочи
              </p>
              <p className="w-[90%] m-auto text-[gray] mt-2">Гормоны</p>
            </div>
            <div className="w-[260px] h-[280px] border rounded-lg ">
              <div className="w-[90%] h-[100px] m-auto mt-5">
                <img src={img8} alt="" />
              </div>
              <p className="w-[90%] m-auto text-[#3BB96D] text-[20px] font-bold">
                Аллергии
              </p>
              <p className="w-[90%] m-auto text-[gray] mt-2">
                Аллергокомпоненты
              </p>
              <p className="w-[90%] m-auto text-[gray] mt-2">
                Индивидуальные аллергены
              </p>
              <p className="w-[90%] m-auto text-[gray] mt-2">
                Аллергия на лекарства
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F1F5F8] h-[800px] flex justify-center items-center">
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
            <img src={img9} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Analizi;

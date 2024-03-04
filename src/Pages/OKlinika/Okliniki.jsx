import { useState } from "react";
import { useTranslation } from "react-i18next";

import i2022 from "./images/i2022.jpg";
import i2021 from "./images/i2021.jpg";
import i2020 from "./images/i2020.jpg";
import i2019 from "./images/i2019.jpg";
import Скрол from "./images/Скрол.jpg";
import zvezda from "./images/zvezda.jpg";
import img from "./images/img.jpg";
import img1 from "./images/img1.png";

const Okliniki = () => {
  const [t, i18n] = useTranslation();

  const changeLanguage = (Language) => {
    i18n.changeLanguage(Language);
  };
  let [lng, setLng] = useState("en");
  return (
    <div className="bg-white">
      <section className="w-[100%] h-[500px] bg-[#F1F5F8] flex items-center justify-center">
        <div className="w-[80%] h-[80%] flex flex-col justify-center">
          <h1 className="text-[30px] font-bold">О клинике</h1>
          <p className="text-[gray] w-[90%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus vitae
            aenean amet nibh lacus, habitasse fermentum, donec id. Nisl, mollis
            dolor nec id volutpat quis. Tempus suspendisse ipsum vitae rhoncus
            scelerisque sed. Et lacinia eget eros duis purus, tortor id senectus
            tristique. Eu, rhoncus pretium diam hendrerit porta tincidunt at
            volutpat. Et vestibulum, ultrices risus vel tellus, magna. In eu sit
            lacus, turpis. Sed a commodo mauris amet. Malesuada adipiscing a sit
            non proin. Et, augue sed proin urna pretium mattis nisi. In sit ut
            praesent libero neque adipiscing. Diam eget pulvinar neque morbi
            quis sed vulputate tellus. Et vel aliquet gravida sed. Malesuada id
            nisl amet, vitae dictum tempor turpis. Sit purus orci a non
            pellentesque lorem pulvinar id arcu. Habitant tempus nisi commodo
            elementum ac amet, ante platea. Neque eu ac feugiat eu aliquam dui
            cursus donec.{" "}
          </p>
        </div>
      </section>
      <section className="w-[100%] h-[700px] ">
        <div className="flex items-center w-[80%] m-auto">
          <img src={i2022} alt="" />
          <p className="text-[gray] w-[60%] ml-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
            adipiscing amet habitant laoreet dui at at. Felis et duis erat
            proin. Arcu faucibus accumsan diam neque, egestas nibh dolor id
            vulputate. In odio nisi facilisis erat leo.
          </p>
        </div>
        <div className="flex items-center w-[80%] m-auto h-[100px]">
          <img src={i2021} alt="" />
          <p className="text-[gray] w-[60%] ml-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
            adipiscing amet habitant laoreet dui at at. Felis et duis erat
            proin. Arcu faucibus accumsan diam neque, egestas nibh dolor id
            vulputate. In odio nisi facilisis erat leo.
          </p>
        </div>
        <div className="flex items-center w-[80%] m-auto h-[100px]">
          <img src={i2020} alt="" />
          <p className="text-[gray] w-[60%] ml-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
            adipiscing amet habitant laoreet dui at at. Felis et duis erat
            proin. Arcu faucibus accumsan diam neque, egestas nibh dolor id
            vulputate. In odio nisi facilisis erat leo.
          </p>
        </div>
        <div className="flex items-center w-[80%] m-auto h-[100px]">
          <img src={i2019} alt="" />
          <p className="text-[gray] w-[60%] ml-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
            adipiscing amet habitant laoreet dui at at. Felis et duis erat
            proin. Arcu faucibus accumsan diam neque, egestas nibh dolor id
            vulputate. In odio nisi facilisis erat leo.
          </p>
        </div>
        <div className="flex items-center w-[80%] h-[100px] m-auto">
          <img src={i2020} alt="" />
          <p className="text-[gray] w-[60%] ml-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
            adipiscing amet habitant laoreet dui at at. Felis et duis erat
            proin. Arcu faucibus accumsan diam neque, egestas nibh dolor id
            vulputate. In odio nisi facilisis erat leo.
          </p>
        </div>
        <div className="flex items-center w-[80%] m-auto">
          <img src={i2022} alt="" />
          <p className="text-[gray] w-[60%] ml-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
            adipiscing amet habitant laoreet dui at at. Felis et duis erat
            proin. Arcu faucibus accumsan diam neque, egestas nibh dolor id
            vulputate. In odio nisi facilisis erat leo.
          </p>
        </div>
      </section>
      <section className="w-[100%] h-[700px] flex items-center justify-center">
        <div className="w-[90%] h-[80%]">
          <div className="flex justify-between items-center">
            <h1 className="text-[35px]">Отзывы наших пациентов</h1>
            <img src={Скрол} alt="" />
          </div>
          <div className="w-[100] mt-5 flex justify-between">
            <div className="w-[550px] h-[400px] border flex flex-col justify-between rounded-lg">
              <div className="flex items-center justify-between w-[90%] m-auto h-[50px]">
                <h1>Анна Петрова, 37 лет</h1>
                <img src={zvezda} alt="" />
              </div>
              <p className="text-[gray] w-[90%] m-auto ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                tortor phasellus feugiat rhoncus id. Feugiat a, est urna laoreet
                aenean arcu tellus mauris sagittis. Morbi praesent nunc tortor
                risus aliquam lorem quam mauris. Enim, vitae, mi a sapien lectus
                dictum posuere. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. lorem quam mauris. Enim, vitae, mi a sapien
                lectus dictum posuere. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
              <p className="text-[#3BB96D] w-[90%] m-auto">Читать полностью</p>
              <div className="w-[90%] m-auto flex justify-between">
                <p>09.08.2021</p>
                <p>Врач: Петров Иван Иванович</p>
              </div>
            </div>
            <div className="w-[550px] h-[400px] border flex flex-col justify-between rounded-lg">
              <div className="flex items-center justify-between w-[90%] m-auto h-[50px]">
                <h1>Анна Петрова, 37 лет</h1>
                <img src={zvezda} alt="" />
              </div>
              <p className="text-[gray] w-[90%] m-auto ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                tortor phasellus feugiat rhoncus id. Feugiat a, est urna laoreet
                aenean arcu tellus mauris sagittis. Morbi praesent nunc tortor
                risus aliquam lorem quam mauris. Enim, vitae, mi a sapien lectus
                dictum posuere. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. lorem quam mauris. Enim, vitae, mi a sapien
                lectus dictum posuere. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
              <p className="text-[#3BB96D] w-[90%] m-auto">Читать полностью</p>
              <div className="w-[90%] m-auto flex justify-between">
                <p>09.08.2021</p>
                <p>Врач: Петров Иван Иванович</p>
              </div>
            </div>
          </div>
          <div className="w-[90%] h-[100px] m-auto flex items-center justify-center">
            <button className="w-[220px] h-[40px] border-[#3BB96D] border-[1px]  text-[#3BB96D] rounded-3xl">
              Все отзывы
            </button>
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
            <img src={img1} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Okliniki;

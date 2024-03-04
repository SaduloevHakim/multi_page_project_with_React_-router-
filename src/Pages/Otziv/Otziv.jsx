import { useTranslation } from "react-i18next";
import zvezda from "./images/zvezda.jpg";
import { useState } from "react";
import img1 from "./images/img1.png";

const Otziv = () => {
  const [t, i18n] = useTranslation();

  const changeLanguage = (Language) => {
    i18n.changeLanguage(Language);
  };
  let [lng, setLng] = useState("en");
  return (
    <div className="bg-white dark:text-white dark:bg-slate-900">
      <section className="w-[100%] h-[2100px] flex items-center justify-center">
        <div className="w-[90%] h-[80%]">
          <div className="flex w-[87%] m-auto justify-between items-center">
            <h1 className="text-[35px]">Отзывы наших пациентов</h1>
            <img src="" alt="" />
          </div>
          <div className="w-[100] mt-5 flex justify-evenly flex-wrap h-[1700px]">
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

export default Otziv;

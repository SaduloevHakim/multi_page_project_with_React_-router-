import { useState } from "react";
import { useTranslation } from "react-i18next";

import img1 from "./images/img1.png";

const Aksi = () => {
  const [t, i18n] = useTranslation();

  const changeLanguage = (Language) => {
    i18n.changeLanguage(Language);
  };
  let [lng, setLng] = useState("en");
  return (
    <div className="bg-white">
      <h1 className="text-[35px] w-[90%] m-auto h-[70px]">Наши акции</h1>
      <section className="w-[90%] h-[500px] m-auto flex justify-between items-center text-white">
        <div className="w-[48%] h-[90%] bg-[#3BB96D] rounded-lg">
          <h1 className="w-[90%] text-[35px] m-auto">{t("home.sec5.text2")}</h1>
          <p className="w-[60%] ml-8">{t("home.sec5.text3")}</p>
          <p className="w-[90%] m-auto mt-8">{t("home.sec5.text4")}</p>
          <p className="w-[90%] m-auto">22.03.2023</p>
          <div className="w-[95%] m-auto flex justify-between">
            <div className=""></div>
            <img className="w-[200px]" src={img1} alt="" />
          </div>
          <div className="w-[90%] m-auto">
            <button className="text-[#3BB96D] bg-white w-[100px] h-[30px] rounded-2xl ">
              {t("home.sec5.btn")}
            </button>
          </div>
        </div>
        <div className="w-[48%] h-[90%] bg-[#27C8DA] rounded-lg">
          <h1 className="w-[90%] m-auto">{t("home.sec5.text2")}</h1>
          <p className="w-[90%] m-auto">{t("home.sec5.text3")}</p>
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
      </section>
    </div>
  );
};

export default Aksi;

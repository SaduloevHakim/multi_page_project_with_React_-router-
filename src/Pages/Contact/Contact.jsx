import { useTranslation } from "react-i18next";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.png";
import { useState } from "react";

const Contact = () => {
    const [t, i18n] = useTranslation();

    const changeLanguage = (Language) => {
      i18n.changeLanguage(Language);
    };
    let [lng, setLng] = useState("en");
  return (
    <>
      <section className="h-[600px] flex">
        <div className="w-[40%] bg-black flex items-center justify-center text-white">
          <div className="w-[80%] h-[80%]">
            <h1 className="text-[35px]">Наши контакты</h1>
            <p>
              ООО «МЕДСЕРВИС», ИНН: 7017429626, КПП: 701701001, ОГРН:
              1177031079180, дата регистрации: 03.08.2017
            </p>
            <p className="mt-3">Главный врач: Храмов Павел Александрович</p>
            <p className="mt-3">
              Прием граждан по вопросам качества оказания медицинских услуг –
              каждый четверг по предварительной записи по телефону : (3822)
              50-00-49
            </p>
            <p className="mt-3">Адрес</p>
            <p>г. Томск, ул. 79 Гвардейской дивизии, 6</p>
            <p className="mt-3">Телефон</p>
            <p>8 (3822) 50-00-49</p>
            <p className="mt-3">Почта</p>
            <p>Poshta@gmail.com</p>
            <p className="mt-3">График работы</p>
            <p>Понедельник — пятница: 8.00 — 20.00</p>
            <p>Суббота: 9.00 — 17.00</p>
            <p>Воскресенье: 10.00 — 16.00</p>
          </div>
        </div>
        <div className="w-[60%] h-full">
          <img className="w-full h-full" src={img1} alt="" />
        </div>
      </section>
      <section className="h-[100px] flex items-end  bg-[#F1F5F8]">
        <h1 className="text-[35px] w-[90%] h-[0] m-auto">Наши специалисты</h1>
      </section>
      <section className="bg-[#F1F5F8] h-[1400px] flex items-center justify-center">
        <div className="w-[90%] h-[90%] flex justify-between flex-wrap">
          <div className="w-[300px] h-[400px] border flex flex-col justify-between">
            <img className="w-full h-[280px]" src={img2} alt="" />
            <h1 className="text-[20px] font-bold">Иванов Иван Иванович</h1>
            <h1 className="text-[gray]">Врач-урологВрач-уролог</h1>
            <button className="text-white w-[220px] h-[40px] rounded-[30px] bg-[#3BB96D]">
              Запись на прием
            </button>
          </div>
          <div className="w-[300px] h-[400px] border flex flex-col justify-between">
            <img className="w-full h-[280px]" src={img2} alt="" />
            <h1 className="text-[20px] font-bold">Иванов Иван Иванович</h1>
            <h1 className="text-[gray]">Врач-урологВрач-уролог</h1>
            <button className="text-white w-[220px] h-[40px] rounded-[30px] bg-[#3BB96D]">
              Запись на прием
            </button>
          </div>
          <div className="w-[300px] h-[400px] border flex flex-col justify-between">
            <img className="w-full h-[280px]" src={img2} alt="" />
            <h1 className="text-[20px] font-bold">Иванов Иван Иванович</h1>
            <h1 className="text-[gray]">Врач-урологВрач-уролог</h1>
            <button className="text-white w-[220px] h-[40px] rounded-[30px] bg-[#3BB96D]">
              Запись на прием
            </button>
          </div>
          <div className="w-[300px] h-[400px] border flex flex-col justify-between">
            <img className="w-full h-[280px]" src={img2} alt="" />
            <h1 className="text-[20px] font-bold">Иванов Иван Иванович</h1>
            <h1 className="text-[gray]">Врач-урологВрач-уролог</h1>
            <button className="text-white w-[220px] h-[40px] rounded-[30px] bg-[#3BB96D]">
              Запись на прием
            </button>
          </div>
          <div className="w-[300px] h-[400px] border flex flex-col justify-between">
            <img className="w-full h-[280px]" src={img2} alt="" />
            <h1 className="text-[20px] font-bold">Иванов Иван Иванович</h1>
            <h1 className="text-[gray]">Врач-урологВрач-уролог</h1>
            <button className="text-white w-[220px] h-[40px] rounded-[30px] bg-[#3BB96D]">
              Запись на прием
            </button>
          </div>
          <div className="w-[300px] h-[400px] border flex flex-col justify-between">
            <img className="w-full h-[280px]" src={img2} alt="" />
            <h1 className="text-[20px] font-bold">Иванов Иван Иванович</h1>
            <h1 className="text-[gray]">Врач-урологВрач-уролог</h1>
            <button className="text-white w-[220px] h-[40px] rounded-[30px] bg-[#3BB96D]">
              Запись на прием
            </button>
          </div>
          <div className="w-[300px] h-[400px] border flex flex-col justify-between">
            <img className="w-full h-[280px]" src={img2} alt="" />
            <h1 className="text-[20px] font-bold">Иванов Иван Иванович</h1>
            <h1 className="text-[gray]">Врач-урологВрач-уролог</h1>
            <button className="text-white w-[220px] h-[40px] rounded-[30px] bg-[#3BB96D]">
              Запись на прием
            </button>
          </div>
          <div className="w-[300px] h-[400px] border flex flex-col justify-between">
            <img className="w-full h-[280px]" src={img2} alt="" />
            <h1 className="text-[20px] font-bold">Иванов Иван Иванович</h1>
            <h1 className="text-[gray]">Врач-урологВрач-уролог</h1>
            <button className="text-white w-[220px] h-[40px] rounded-[30px] bg-[#3BB96D]">
              Запись на прием
            </button>
          </div>
          <div className="w-[300px] h-[400px] border flex flex-col justify-between">
            <img className="w-full h-[280px]" src={img2} alt="" />
            <h1 className="text-[20px] font-bold">Иванов Иван Иванович</h1>
            <h1 className="text-[gray]">Врач-урологВрач-уролог</h1>
            <button className="text-white w-[220px] h-[40px] rounded-[30px] bg-[#3BB96D]">
              Запись на прием
            </button>
          </div>
          <div className="w-[300px] h-[400px] border flex flex-col justify-between">
            <img className="w-full h-[280px]" src={img2} alt="" />
            <h1 className="text-[20px] font-bold">Иванов Иван Иванович</h1>
            <h1 className="text-[gray]">Врач-урологВрач-уролог</h1>
            <button className="text-white w-[220px] h-[40px] rounded-[30px] bg-[#3BB96D]">
              Запись на прием
            </button>
          </div>
          <div className="w-[300px] h-[400px] border flex flex-col justify-between">
            <img className="w-full h-[280px]" src={img2} alt="" />
            <h1 className="text-[20px] font-bold">Иванов Иван Иванович</h1>
            <h1 className="text-[gray]">Врач-урологВрач-уролог</h1>
            <button className="text-white w-[220px] h-[40px] rounded-[30px] bg-[#3BB96D]">
              Запись на прием
            </button>
          </div>
          <div className="w-[300px] h-[400px] border flex flex-col justify-between">
            <img className="w-full h-[280px]" src={img2} alt="" />
            <h1 className="text-[20px] font-bold">Иванов Иван Иванович</h1>
            <h1 className="text-[gray]">Врач-урологВрач-уролог</h1>
            <button className="text-white w-[220px] h-[40px] rounded-[30px] bg-[#3BB96D]">
              Запись на прием
            </button>
          </div>
        </div>
      </section>
      <section className="w-[100%] bg-white m-auto h-[600px] flex items-center justify-center ">
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
    </>
  );
};

export default Contact;

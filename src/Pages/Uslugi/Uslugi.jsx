import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";

const Uslugi = () => {
  return (
    <div className="bg-white">
      <h1 className="w-[90%] m-auto text-[35px]">Направления нашей работы</h1>
      <section className="w-[90%] m-auto flex justify-between flex-wrap gap-7 mt-10 ">
        <div className="w-[270px] h-[300px] border">
          <img className="w-full h-[200px]" src={img1} alt="" />
          <h1 className="text-[20px] w-[90%] m-auto mt-3 font-bold">
            Отоларингология
          </h1>
          <h1 className="text-[#3BB96D] w-[90%] m-auto mt-3 ">Подробнее</h1>
        </div>
        <div className="w-[270px] h-[300px] border">
          <img className="w-full h-[200px]" src={img2} alt="" />
          <h1 className="text-[20px] w-[90%] m-auto mt-3 font-bold">
            Сурдология
          </h1>
          <h1 className="text-[#3BB96D] w-[90%] m-auto mt-3 ">Подробнее</h1>
        </div>
        <div className="w-[270px] h-[300px] border">
          <img className="w-full h-[200px]" src={img3} alt="" />
          <h1 className="text-[20px] w-[90%] m-auto mt-3 font-bold">
            Педиатрия
          </h1>
          <h1 className="text-[#3BB96D] w-[90%] m-auto mt-3 ">Подробнее</h1>
        </div>
        <div className="w-[270px] h-[300px] border">
          <img className="w-full h-[200px]" src={img4} alt="" />
          <h1 className="text-[20px] w-[90%] m-auto mt-3 font-bold">
            Неврология
          </h1>
          <h1 className="text-[#3BB96D] w-[90%] m-auto mt-3 ">Подробнее</h1>
        </div>
        <div className="w-[270px] h-[300px] border">
          <img className="w-full h-[200px]" src={img5} alt="" />
          <h1 className="text-[20px] w-[90%] m-auto mt-3 font-bold">Терапия</h1>
          <h1 className="text-[#3BB96D] w-[90%] m-auto mt-3 ">Подробнее</h1>
        </div>
        <div className="w-[270px] h-[300px] border">
          <img className="w-full h-[200px]" src={img6} alt="" />
          <h1 className="text-[20px] w-[90%] m-auto mt-3 font-bold">
            Ревматология
          </h1>
          <h1 className="text-[#3BB96D] w-[90%] m-auto mt-3 ">Подробнее</h1>
        </div>
        <div className="w-[270px] h-[300px] border">
          <img className="w-full h-[200px]" src={img1} alt="" />
          <h1 className="text-[20px] w-[90%] m-auto mt-3 font-bold">
            Гастроэнтерология
          </h1>
          <h1 className="text-[#3BB96D] w-[90%] m-auto mt-3 ">Подробнее</h1>
        </div>
        <div className="w-[270px] h-[300px] border">
          <img className="w-full h-[200px]" src={img3} alt="" />
          <h1 className="text-[20px] w-[90%] m-auto mt-3 font-bold">
            УЗИ- диагностика
          </h1>
          <h1 className="text-[#3BB96D] w-[90%] m-auto mt-3 ">Подробнее</h1>
        </div>
        <div className="w-[270px] h-[300px] border">
          <img className="w-full h-[200px]" src={img6} alt="" />
          <h1 className="text-[20px] w-[90%] m-auto mt-3 font-bold">
            Кардиология
          </h1>
          <h1 className="text-[#3BB96D] w-[90%] m-auto mt-3 ">Подробнее</h1>
        </div>
        <div className="w-[270px] h-[300px] border">
          <img className="w-full h-[200px]" src={img4} alt="" />
          <h1 className="text-[20px] w-[90%] m-auto mt-3 font-bold">
            Эндокринология
          </h1>
          <h1 className="text-[#3BB96D] w-[90%] m-auto mt-3 ">Подробнее</h1>
        </div>
        <div className="w-[270px] h-[300px] border">
          <img className="w-full h-[200px]" src={img5} alt="" />
          <h1 className="text-[20px] w-[90%] m-auto mt-3 font-bold">
            Общая хирургия
          </h1>
          <h1 className="text-[#3BB96D] w-[90%] m-auto mt-3 ">Подробнее</h1>
        </div>
        <div className="w-[270px] h-[300px] border">
          <img className="w-full h-[200px]" src={img3} alt="" />
          <h1 className="text-[20px] w-[90%] m-auto mt-3 font-bold">
            Урология
          </h1>
          <h1 className="text-[#3BB96D] w-[90%] m-auto mt-3 ">Подробнее</h1>
        </div>
      </section>
      <section className="h-[500px] flex items-center justify-center">
        <div className="w-[90%] h-[50%] ">
          <h1 className="text-[35px] font-bold">Запись на приём</h1>
          <div className="flex items-end justify-between">
            <div className="">
              <h1>Ваше ФИО</h1>
              <input
                placeholder="Иванов Иван Иванович"
                className="bg-[#F1F5F8] w-[270px] h-[40px] rounded-[50px]"
                type="text"
              />
            </div>
            <div className="">
              <h1>Номер телефона</h1>
              <input
                placeholder="+7 (___) ___-__-__"
                className="bg-[#F1F5F8] w-[270px] h-[40px] rounded-[50px]"
                type="text"
              />
            </div>
            <div className="">
              <h1>Выберите направление</h1>
              <input
                placeholder="Эндокринология"
                className="bg-[#F1F5F8] w-[270px] h-[40px] rounded-[50px]"
                type="text"
              />
            </div>
            <button className="bg-[#3BB96D] w-[270px] h-[40px] rounded-[30px] text-white">
              Записаться на приём
            </button>
          </div>
          <p className="mt-5"> 
            Нажимая на кнопку Записаться на приём вы соглашаетесь с политикой
            конфиденциальности
          </p>
        </div>
      </section>
    </div>
  );
};

export default Uslugi;

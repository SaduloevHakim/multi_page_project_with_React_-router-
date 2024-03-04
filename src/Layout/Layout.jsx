import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  const [t, i18n] = useTranslation();

  const changeLanguage = (Language) => {
    i18n.changeLanguage(Language);
  };
  let [lng, setLng] = useState("en");
  return (
    <>
      <header className="w-full h-[130px] border bg-white ">
        <div className=" w-[90%] h-[50px] m-auto flex items-center justify-between ">
          <p className="text-[#686868]">{t("nav1.text1")}</p>
          <p className="text-[#686868]">{t("nav1.text2")}</p>
          <div className="w-[310px] flex justify-between">
            <button className="bg-[#3BB96D] w-[200px] h-[30px] rounded-2xl text-white">
              {t("nav1.btn")}
            </button>
            <select
              className="border w-[70px] rounded text-center "
              value={lng}
              onChange={(ev) => {
                changeLanguage(ev.target.value), setLng(ev.target.value);
              }}
            >
              <option value="ru">En</option>
              <option value="en">Ru</option>
            </select>
          </div>
        </div>
        <nav className="w-[90%] m-auto h-[70px]  flex items-center justify-between ">
          <Link to={"/"}>
            <img src="src/assets/logo.png" alt="" />
          </Link>
          <ul>
            <li>
              <NavLink to={"/Vrachi"}>{t("nav2.vrachi")}</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to={"/Uslugi"}>{t("nav2.uslugi")}</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to={"/Diagnostika"}>{t("nav2.diagn")}</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to={"/Analizi"}>{t("nav2.analis")}</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to={"/Aksi"}>{t("nav2.aksi")}</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to={"/Pasient"}> {t("nav2.pasient")}</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to={"/Oklinika"}>{t("nav2.oklini")}</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to={"/Otziv"}>{t("nav2.otziv")}</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to={"/Contact"}>{t("nav2.contact")}</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet></Outlet>
      <footer className="w-full h-[350px] bg-[#279A59] flex items-center justify-center ">
        <div className=" w-[90%] m-auto h-[60%]  flex justify-between text-white ">
          <div className="w-[260px] h-full   ">
            <img src="src/assets/logo.png" alt="" />
            <p>{t("footer.box1.text1")}</p>
            <h1>{t("footer.box1.text2")}</h1>
            <p>{t("footer.box1.text3")}</p>
            <h1>{t("footer.box1.text4")}</h1>
            <p>{t("footer.box1.text5")}</p>
            <h1>{t("footer.box1.text6")}</h1>
          </div>
          <div className="w-[260px] h-full ">
            <h1>{t("footer.box2.text1")}</h1>
            <p>{t("footer.box2.text2")}</p>
            <p>{t("footer.box2.text2")}</p>
            <p>{t("footer.box2.text2")}</p>
            <p>{t("footer.box2.text2")}</p>
            <p>{t("footer.box2.text2")}</p>
            <p>{t("footer.box2.text2")}</p>
          </div>
          <div className="w-[260px] h-full ">
            <h1>{t("footer.box3.text1")}</h1>
            <p>{t("footer.box3.text2")}</p>
            <p>{t("footer.box3.text2")}</p>
            <p>{t("footer.box3.text2")}</p>
            <p>{t("footer.box3.text2")}</p>
            <p>{t("footer.box3.text2")}</p>
            <p>{t("footer.box3.text2")}</p>
          </div>
          <div className="w-[260px] h-full ">
            <h1>{t("footer.box4.text1")}</h1>
            <p>{t("footer.box2.text2")}</p>
            <p>{t("footer.box2.text2")}</p>
            <p>{t("footer.box2.text2")}</p>
            <p>{t("footer.box2.text2")}</p>
            <p>{t("footer.box2.text2")}</p>
            <p>{t("footer.box2.text2")}</p>
          </div>
          <div className="w-[260px] h-full ">
            <h1>{t("footer.box5.text1")}</h1>
            <p>{t("footer.box2.text2")}</p>
            <p>{t("footer.box2.text2")}</p>
            <p>{t("footer.box2.text2")}</p>
            <p>{t("footer.box2.text2")}</p>
            <p>{t("footer.box2.text2")}</p>
            <p>{t("footer.box2.text2")}</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;

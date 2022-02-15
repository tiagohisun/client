import React from "react";
import { useLocation } from "react-router-dom";

import i18n from "../../i18n";
import brazilflag from "../../static/images/upperhead/brazilflag.png";
import ukflag from "../../static/images/upperhead/ukflag.png";
import "./styles.css";
import { useTranslation } from "react-i18next";

const changeLanguage = (ln) => {
  return () => {
    i18n.changeLanguage(ln);
    console.log(`language changed to ${ln}`);
  };
};
const Uheader = (props) => {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();
  return pathname.startsWith("/posts") ? null : (
    <>
      <header
        className="col pt-1"
        style={{ height: "30px", color: "white", backgroundColor: "#001f24" }}
      >
        <span className="pl-3"> {t("N&M")} </span>
        <span className="pr-3" style={{ float: "right" }}>
          <span className="pr-5 "> contato@dental04.com </span>
          <span className="mobile-upperHead" style={{ paddingRight: "190px" }}>
            {" "}
            {t("MS")}: 09h-18h
          </span>
          <button
            className="pr-3 mobile-upperHead"
            onClick={changeLanguage("en")}
          >
            {" "}
            <img className="ukf" src={ukflag} alt="pt" />
            EN
          </button>
          <button
            className="pr-5 mobile-upperHead"
            onClick={changeLanguage("pt")}
          >
            {" "}
            <img className="bf" src={brazilflag} alt="pt" />
            PT
          </button>
        </span>
      </header>
    </>
  );
};

export default Uheader;

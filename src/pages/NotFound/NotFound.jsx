import React from "react";
import roadSign from "../../assets/ducks_ahead.png";
import "./NotFound.css";
import { NavLink } from "react-router";
import NavBar from "../../components/NavBar";
import { useLanguage } from "../../assets/setLanguage";

function NotFound(props) {
  const [language, setLanguage] = useLanguage();

  return (
    <>
      <NavBar />

      <div className="margin-wrapper">
        <div className="content">
          <div className="center">
            <h1>
              {language === "RU"
                ? "СТРАНИЦА ЕЩЁ НЕ ЗАКОНЧЕНА."
                : "THIS PAGE IS NOT FINISHED YET."}
            </h1>
            <NavLink to="/">
              <button>
                {language === "RU"
                  ? "Вернуться на главную"
                  : "Return to home page"}
              </button>
            </NavLink>
            <img src={roadSign} width="260" />
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;

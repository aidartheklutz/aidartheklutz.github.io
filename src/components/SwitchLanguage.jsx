import { LANG } from "./LangNavBar";
import { useLanguage } from "../assets/setLanguage";

function SwitchLanguage({ align }) {
  const [language, setLanguage] = useLanguage();
  const lang = LANG[language];

  function handleSwitchLanguage() {
    setLanguage(language === "EN" ? "RU" : "EN");
    window.location.reload();
  }

  return (
    <div
      className="switch-language-button"
      style={align === "left" ? { justifyContent: "flex-start" } : {}}
    >
      <button onClick={handleSwitchLanguage}>
        <i className="bi bi-translate"></i> {lang.switchLang}
      </button>
    </div>
  );
}

export default SwitchLanguage;

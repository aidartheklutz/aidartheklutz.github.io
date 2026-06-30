import { NavLink } from "react-router";

export const LANG = {
  EN: {
    greeting: "Hi, I'm Aidar!",
    description: (
      <p className="blue-link">
        I am a school student from Kyrgyzstan and I aspire to become an
        engineer. Here you can learn a little{" "}
        <NavLink to="/aboutme">about me</NavLink>, read my{" "}
        <NavLink to="/blog">blog</NavLink>, check out some of the{" "}
        <NavLink to="/projects">projects</NavLink> of mine, or find my{" "}
        <NavLink to="/links">socials</NavLink>.
      </p>
    ),
    aboutMe: "About me",
    switchLang: "Переключиться на русский язык",
  },
  RU: {
    greeting: "Привет, я Айдар!",
    description: (
      <p className="blue-link">
        Я студент колледжа из Кыргызстана и я мечтаю стать инженером. Здесь вы
        можете узнать немного <NavLink to="/aboutme">обо мне</NavLink>, следить
        за моим <NavLink to="/blog">блогом</NavLink>, взглянуть на мои некоторые{" "}
        <NavLink to="/projects">проекты</NavLink> или найти мои{" "}
        <NavLink to="/links">соцсети</NavLink>.
      </p>
    ),
    aboutMe: "Обо мне",
    switchLang: "Switch to English",
  },
};

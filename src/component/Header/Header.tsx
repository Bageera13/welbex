import React from "react";
import { LinkComponent } from "../LinkComponent/LinkComponent";
import { NavLink } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-wrapper">
          <div className="__logo-block">
            <NavLink to={"/"}>
              <img
                className="__logo"
                src="images/logo-welbex.svg"
                alt="Логотип"
              />
            </NavLink>
            <span className="__dscr">
              крупный интегратор CRM в Росcии и ещё 8 странах
            </span>
          </div>
          <nav className="__header-nav">
            <NavLink className="__nav-link" to={"/services"}>
              <LinkComponent
                fontWeightProps={{ fontWeight: "500" }}
                titleLink={"Услуги"}
              />
            </NavLink>
            <NavLink className="__nav-link" to={"/widgets"}>
              <LinkComponent
                fontWeightProps={{ fontWeight: "500" }}
                titleLink={"Виджеты"}
              />
            </NavLink>
            <NavLink className="__nav-link" to={"/integrations"}>
              <LinkComponent
                fontWeightProps={{ fontWeight: "500" }}
                titleLink={"Интеграции"}
              />
            </NavLink>
            <NavLink className="__nav-link" to={"/cases"}>
              <LinkComponent
                fontWeightProps={{ fontWeight: "500" }}
                titleLink={"Кейсы"}
              />
            </NavLink>
            <NavLink className="__nav-link --display-none" to={"/certificates"}>
              <LinkComponent
                fontWeightProps={{ fontWeight: "500" }}
                titleLink={"Сертификаты"}
              />
            </NavLink>
          </nav>
          <div className="__header-contacts">
            <div className="__tel-link">
              <LinkComponent
                fontWeightProps={{ fontWeight: "500" }}
                titleLink={"+7 555 555-55-55"}
              />
            </div>
            <div className="__social-network">
              <a className="__social-item" href="https://github.com/">
                <img
                  src="images/telegram-icon.svg"
                  alt="Ссылка на наш Telegram"
                />
              </a>
              <a className="__social-item" href="https://github.com/">
                <img src="images/viber-icon.svg" alt="Ссылка на наш Viber" />
              </a>
              <a className="__social-item" href="https://github.com/">
                <img
                  src="images/whats-app-icon.svg"
                  alt="Ссылка на наш Whats app"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

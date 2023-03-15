import React from "react";
import { LinkComponent } from "../LinkComponent/LinkComponent";
import "./footer.css"

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="__footer-up">
          <div className="__about --foot-sect">
            <h2 className="__title-section">О КОМПАНИИ</h2>
            <div className="__left-wrapper">
              <LinkComponent
                fontWeightProps={{ fontWeight: "400" }}
                titleLink={"Партнёрская программа"}
              />
              <LinkComponent
                fontWeightProps={{ fontWeight: "400" }}
                titleLink={"Вакансии"}
              />
            </div>
          </div>
          <div className="__menu --foot-sect">
            <h2 className="__title-section">МЕНЮ</h2>
            <div className="__menu-wrapper">
              <div className="__menu-left __left-wrapper">
                <LinkComponent
                  fontWeightProps={{ fontWeight: "400" }}
                  titleLink={"Расчёт стоимости"}
                />
                <LinkComponent
                  fontWeightProps={{ fontWeight: "400" }}
                  titleLink={"Услуги"}
                />
                <LinkComponent
                  fontWeightProps={{ fontWeight: "400" }}
                  titleLink={"Виджеты"}
                />
                <LinkComponent
                  fontWeightProps={{ fontWeight: "400" }}
                  titleLink={"Интеграции"}
                />
                <LinkComponent
                  fontWeightProps={{ fontWeight: "400" }}
                  titleLink={"Наши клиенты"}
                />
              </div>
              <div className="__menu-right __left-wrapper">
                <LinkComponent
                  fontWeightProps={{ fontWeight: "400" }}
                  titleLink={"Кейсы"}
                />
                <LinkComponent
                  fontWeightProps={{ fontWeight: "400" }}
                  titleLink={"Благодарственные письма"}
                />
                <LinkComponent
                  fontWeightProps={{ fontWeight: "400" }}
                  titleLink={"Сертификаты"}
                />
                <LinkComponent
                  fontWeightProps={{ fontWeight: "400" }}
                  titleLink={"Блог на Youtube"}
                />
                <LinkComponent
                  fontWeightProps={{ fontWeight: "400" }}
                  titleLink={"Вопрос / Ответ"}
                />
              </div>
            </div>
          </div>
          <div className="__contacts --foot-sect">
            <h2 className="__title-section">КОНТАКТЫ</h2>
            <div className="__contacts-wrapper">
              <a href="tel:+75555555555">+7 555 555-55-55</a>
              <div className="__right-wrapper">
                <a className="__contact-icon" href="https://github.com/">
                  <img
                    src="images/telegram-icon.svg"
                    alt="Ссылка на наш Telegram"
                  />
                </a>
                <a className="__contact-icon" href="https://github.com/">
                  <img 
                    src="images/viber-icon.svg" 
                    alt="Ссылка на наш Viber" />
                </a>
                <a className="__contact-icon" href="https://github.com/">
                  <img
                    src="images/whats-app-icon.svg"
                    alt="Ссылка на наш Whats app"
                  />
                </a>
              </div>
              <a href="https://github.com/">Москва, Путевой проезд 3с1, к 902</a>
            </div>
          </div>
        </div>
        <div className="__footer-down">
          <span>©WELBEX 2022. Все права защищены.</span>
          <a className="__politic" href="https://github.com/">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
};

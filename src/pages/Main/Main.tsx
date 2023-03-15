import React from "react";
import "./main.css"

export const Main = () => {
  return (
    <div className="container --main-bgr">
      <div className="main-wrapper">
        <div className="__main-left">
          <span className="__left-discr1">Зарабатывайте больше </span>
          <span className="__left-discr2 --discr-gardient">с WELBEX</span>
          <span className="__left-discr3">Развиваем и контролируем продажи за вас</span>
        </div>
        <div className="__main-right">
          <div className="__main-discr">
            <span className="__discr-item">Вместе с </span>
            <span className="__discr-item --uppercase --discr-gardient">бесплатной консультацией</span>
            <span className="__discr-item"> мы дарим:</span>
          </div>
          <div className="__adaptiv-services">
            <div className="__adaptiv-service">Skype аудит</div>
            <div className="__adaptiv-service">30 виджетов</div>
            <div className="__adaptiv-service">Dashboard</div>
            <div className="__adaptiv-service">Месяц аmoCRM</div>
          </div>
          <div className="__list-services">
            <div className="__service-item">
              <div className="__service-title">Виджеты</div>
              <div className="__title-discr">30 готовых решений</div>
            </div>
            <div className="__service-item">
              <div className="__service-title">Dashboard</div>
              <div className="__title-discr">с показателями вашего бизнеса</div>
            </div>
            <div className="__service-item">
              <div className="__service-title">Skype Аудит</div>
              <div className="__title-discr">отдела продажи CRM системы</div>
            </div>
            <div className="__service-item">
              <div className="__service-title">35 дней</div>
              <div className="__title-discr">использования CRM</div>
            </div>
          </div>
          <button className="__btn-main">Получить консультацию</button>
        </div>
      </div>
    </div>
  );
};

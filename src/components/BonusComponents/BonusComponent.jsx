import React from "react";
import person from "../../assets/img/bonusPerson.svg"
import "./BonusNews.scss";
function BonusComponent() {
  return (
    <div className="bonusComponent">
      <div className="news-bonus-text-part">
        <div className="news-header-bonus">
          <h1>Bonusların istifadəsi</h1>
        </div>

        <div className="news-text-bonus">
          <p>
            Nam consectetur interdum arcu, et varius orci suscipit vel. Maecenas
            ultrices ligula ornare laoreet euismod. Nullam viverra, sem a semper
            varius, neque nunc blandit tortor, id lobortis odio tortor ac urna.
            Phasellus consectetur ante nec tellus ornare commodoç.</p><p> Curabitur
            viverra finibus dolor. Integer elementum arcu euismod ullamcorper
            feugiat. Suspendisse ultricies nulla vel lobortis pellentesque.
            Nulla fermentum euismod mauris, quis bibendum nisl malesuada sit
            amet. Aliquam urna augue, maximus a placerat vel, molestie ut lacus.
            Vivamus vel ipsum dignissim nunc interdum ultrices. In tristique
            neque a dictum fringilla. Aenean venenatis convallis quam vitae
            vulputate.
          </p>
        </div>
      </div>

    
      <div className="news-img">
        <img src={person}></img>
      </div>

    </div>
  );
}

export default BonusComponent;

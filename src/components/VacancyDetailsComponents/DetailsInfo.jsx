import React from "react";
import dateIcon from "../../assets/img/dateIcon.svg";
import "./VacancyDetails.scss";

function DetailsInfo() {
  return (
    <div className="detailsInfo">
      <div className="heading">
        <h1>
          Şəmkir rayon filialına Xidmət bölməsində Müştərilərlə iş üzrə kiçik
          mütəxəssis
        </h1>
      </div>

      <div className="date">
        <div className="date-icon">
          <img src={dateIcon}></img>
        </div>
        <div className="date-text">
          <p>Son müraciət tarixi: 8.11.2022</p>
        </div>
      </div>

      <div className="vacancyInfos">
        <div className="vacancyInfo">
          <h1>Vəzifə :</h1>
          <p>Müştəri xidmətləri</p>
        </div>
        <div className="vacancyInfo">
          <h1>İş rejimi :</h1> <p>Full time</p>
        </div>
      </div>

      <div className="generalInfo">
        <div className="generalInfo-header">
          <h1>Ümumi məlumat</h1>
        </div>
        <div className="generalInfo-info">
          <p>Bultrices, diam nec maximus finibus.Roin efficitur varius mattis.</p>
        </div>
      </div>
    </div>
  );
}

export default DetailsInfo;

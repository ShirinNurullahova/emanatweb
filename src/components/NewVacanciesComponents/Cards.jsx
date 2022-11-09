import React from "react";
import { Link } from 'react-router-dom'
import AllVacanciesPath from "./AllVacanciesPath";
import Card from "./Card";
import "./NewVacancies.scss";

function Cards() {
  return (
    <div className="cards-vc">
      <div className="cards-row-vc">
        <div className="single-cards-vc">
          <Card
            city="Bakı"
            filial="Mərkəz Filialı"
            lastDate="8.11.2022"
            info="Şəmkir rayon filialına Xidmət bölməsində Müştərilərlə iş üzrə kiçik mütəxəssis"
          />
        </div>

        <div className="single-cards-vc">
          <Card
            city="Bakı"
            filial="Mərkəz Filialı"
            lastDate="8.11.2022"
            info="Şəmkir rayon filialına Xidmət bölməsində Müştərilərlə iş üzrə kiçik mütəxəssis"
          />
        </div>

        <div className="single-cards-vc">
          <Card
            city="Bakı"
            filial="Mərkəz Filialı"
            lastDate="8.11.2022"
            info="Şəmkir rayon filialına Xidmət bölməsində Müştərilərlə iş üzrə kiçik mütəxəssis"
          />
        </div>
      </div>

      <div className="cards-row-vc">
        <div className="single-cards-vc">
          <Card
            city="Bakı"
            filial="Mərkəz Filialı"
            lastDate="8.11.2022"
            info="Şəmkir rayon filialına Xidmət bölməsində Müştərilərlə iş üzrə kiçik mütəxəssis"
          />
        </div>

        <div className="single-cards-vc">
          <Card
            city="Bakı"
            filial="Mərkəz Filialı"
            lastDate="8.11.2022"
            info="Şəmkir rayon filialına Xidmət bölməsində Müştərilərlə iş üzrə kiçik mütəxəssis"
          />
        </div>

        <div className="single-cards-vc">
            {/* <Link to="/all-vacancies" style={{textDecoration:"none"}}>
            <AllVacanciesPath/>
            </Link> */}
             <Card
            city="Bakı"
            filial="Mərkəz Filialı"
            lastDate="8.11.2022"
            info="Şəmkir rayon filialına Xidmət bölməsində Müştərilərlə iş üzrə kiçik mütəxəssis"
          />
        </div>
      </div>

      
    </div>
  );
}

export default Cards;

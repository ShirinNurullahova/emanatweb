import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import BreadCrumbVac from "../components/VacancyDetailsComponents/BreadCrumbVac";
import DetailsInfo from "../components/VacancyDetailsComponents/DetailsInfo";
import Ohdelikler from "../components/VacancyDetailsComponents/Ohdelikler";
import Telebler from "../components/VacancyDetailsComponents/Telebler";
import VacancyDetailButton from "../components/VacancyDetailsComponents/VacancyDetailButton";
import Tag from "../components/LayoutComponents/Tag/Tag";
function VacancyDetail() {
  useEffect(() => {
    document.getElementsByTagName("header")[0].style.background = '#0867b5'
  }, [])
  return (
    <div>
      <BreadCrumbVac />
      <DetailsInfo />
      <Ohdelikler />
      <Telebler />
      
      <VacancyDetailButton
      link="../"
      text="Müraciət et"/>
      
      <Tag tags={['#emanat,#fintech,#terminal,#odenisterminali,#terminal']}/>

    </div>
  );
}

export default VacancyDetail;

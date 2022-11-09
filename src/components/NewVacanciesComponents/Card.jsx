import React,{useRef,useState} from "react";
import location from "../../assets/img/locationIcon.svg";
import date from "../../assets/img/dateIcon.svg";
import blueLoc from "../../assets/img/locationIconBlue.svg"
import blueDate from "../../assets/img/blueDate.svg"
import "./NewVacancies.scss";

function Card(props) {
    const LocTextRefVC=useRef()
    const ApplyTextRef=useRef()
    const infoRefVC=useRef()
    const cardRefVC=useRef()
    const dateRefVC=useRef()
    const locationRefVC=useRef()
    const [icons,setIcons]=useState(false)

    const hoverOn=()=>{
        LocTextRefVC.current.style.color="#0A66B5"
        ApplyTextRef.current.style.color="#0A66B5"
        infoRefVC.current.style.color="#0A66B5"
        cardRefVC.current.style.background="rgba(10, 102, 181, 0.06)"
        dateRefVC.current.style.fill="#0A66B5"
        locationRefVC.current.style.fill="#0A66B5"
        setIcons(true)

    }

    const hoverOff=()=>{
        LocTextRefVC.current.style.color="#5e5e5e"
        ApplyTextRef.current.style.color="#5e5e5e"
        infoRefVC.current.style.color="#070814"
        cardRefVC.current.style.background="#ffffff"
        dateRefVC.current.fill="none"
        locationRefVC.current.fill="none"
        setIcons(false)
        
    }
  return (
    <div className="vacancy-card" ref={cardRefVC}onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
      <div className="location">
        <div className="location-icon-vc">
          <img src={!icons?location:blueLoc} ref={locationRefVC}></img>{" "}
        </div>
        <div className="location-info-vc">
          <p ref={LocTextRefVC}>
            {props.city}/{props.filial}
          </p>
        </div>
      </div>

      <div className="lastApply">
        <div className="lastApply-icon-vc">
          <img src={!icons?date:blueDate} ref={dateRefVC}></img>
        </div>
        <div className="lastApply-info-vc">
          <p ref={ApplyTextRef}>Son müraciət tarixi: {props.lastDate}</p>
        </div>
      </div>

      <div className="info-vc">
        <div className="info-text-vc">
          <p ref={infoRefVC}>{props.info}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

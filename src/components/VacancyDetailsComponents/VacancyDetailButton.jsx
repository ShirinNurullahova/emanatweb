import React from "react";
import "./VacancyDetails.scss";
import {Link,useNavigate} from "react-router-dom"

function VacancyDetailButton(props) {
    const navigate = useNavigate();

    // const ClickMuraciet=()=>{
    //     console.log("sala")
    //     navigate('../', { replace: true })

    // }
   
  return (
        <div className="VacanciesButton" >
            <Link to={props.link} style={{textDecoration:"none"}}>
          <button><p>{props.text}</p></button>
            </Link>
          
        </div>

  );
}

export default VacancyDetailButton;

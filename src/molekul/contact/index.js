/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from "react";
import axios from 'axios';
import Div_Contact from "../../atom/div_contact";
export default function Contact(){
  const [features, setFeatures]= useState([])
  useEffect(()=>{
    axios.get("http://localhost:3004/contact").then(res=>setFeatures(res.data))
  }, [])
    return(
      <section id="contact" className="tm-section-contact">
      <div className="row tm-contact-section">
        <div className="col-md-6 px-0">
          <div className="tm-bg-white-alpha tm-contact-left">
          {
      features.map(item=>{
        return(
          <div className={`${item.collum1}`}>
              <a href={`${item.href1}`} className={`${item.collum2}`}>
                <span className={`${item.collum3}`}>
                  <span className={`${item.collum4}`}>
                    <i className={`${item.collum5}`} />
                  </span>
                </span>
                <span className={`${item.collum6}`}>{`${item.fill}`}</span>
              </a>
          </div>
      )
      })
    }
        </div>
        </div>
        <Div_Contact/>
      </div>
</section>
    )
}


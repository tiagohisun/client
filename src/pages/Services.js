import React, { useEffect, useState } from "react";
import { GrCloudlinux } from 'react-icons/gr'
import {AiOutlineBulb} from 'react-icons/ai'
import {MdLaptopChromebook} from 'react-icons/md'
import {RiBuilding2Line} from 'react-icons/ri'
import { useSelector } from "react-redux";
import { getRelated } from "../functions/product";
import ProductCard from "../components/cards/ProductCard";
import sales from "../static/images/solutions/sales.png"; // with import
import leadership from "../static/images/solutions/leadership.png"
import support from "../static/images/solutions/support.png"
import news from "../static/images/solutions/news.png"
import classifieds from "../static/images/solutions/classifieds.jpg" 
import diagnostic from "../static/images/solutions/diagnostic.jpg"
import pan from "../static/images/solutions/pan.jpg"
import repair from"../static/images/solutions/repair.jpg"
import {useTranslation} from 'react-i18next'
//const logo = require('./logo.jpeg); // with require

const Service = () => {
    const {t, i18n} = useTranslation();
    return (
        <>
        <div className="container-fluid">
        <div className="row mt-5 mb-5">
            <div className="col-12">
                <div
                    style={{
                        position: "relative",
                        color: 'white'
                    }}>
                  
                   
                </div>
            </div>
            <div className="col-12 mt-5 text-center">
                    <div style={{padding:'0px 25%'}}>
                        <h1 style={{fontSize:'40px',fontWeight:'bold',marginBottom:'20px'}}>{t("SERVIÇO COMPLETO")}</h1>
                        <p>{t("WP")}
                        {t("WA")}</p>
                    </div>
            </div>
            <div className="col-12 mt-5">
                <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="ml-4">
                        <img className="ml-5" width="40%" src={support} alt="Card image" />
                        </div>
                        <div className="text-center mr-3">
                            <h3 style={{marginTop: "42.5px"}}>{t("TS")}</h3>
                            <p> {t("WeP")}
                            </p>
                        </div>
                    </div>
                    <div className="col">
                    <div className="ml-4">
                    <img className="ml-5" width="40%" src={sales} alt="Card image" />
                        </div>
                        <div className="text-center mr-3">
                            <h3 style={{marginTop: "62.5px"}}>{t("SA")}</h3>
                            <p>{t("AS")}
                            </p>
                        </div>
                    </div>
                    <div className="col">
                    <div className="ml-4">
                    <img className="ml-5" width="40%" src={leadership} alt="Card image" />
                        </div>
                        <div className="mr-3 text-center">
                            <h3 style={{marginTop: "40px"}}> {t("GUI")}</h3>
                            <p>{t("WePA")}
                            </p>
                        </div>
                    </div>
                    <div className="col">
                    <div className="ml-4">
                    <img className="ml-5" width="40%" src={news} alt="Card image" />
                        </div>
                        <div className="text-center mr-3">
                            <h3 style={{marginTop: "40px"}}> {t("NE")}</h3>
                            <p>{t("TL")}
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="col-12 mt-5">
                <div className="container bg-light">
                     <div className="row mt-3">
                        <div className="col m-3">
                            <h3 className="text-center">{t("OPA")}</h3> <br/>
                            <p className="text-center">{t("TC")}
                            </p>
                        </div>
                    </div>
                    <h3 className="text-center h2">{t("DI")}</h3> <br/>
                    <div className="row m-1">
                        <div className="col-md-3">
                            <img style={{minWidth:"250px", maxWidth: "250px", minHeight:"190px",  maxHeight:"190px"}} src={classifieds} alt="classifieds" />
                            <p style={{marginTop:"10px"}}>{t("DO")}</p>
                        </div>
                        <div className="col-md-3">
                            <img style={{minWidth:"250px", maxWidth: "250px", minHeight:"190px",  maxHeight:"190px"}} src={diagnostic} alt="diagnnostic" />
                            <p style={{marginTop:"10px"}}>{t("CB")}</p>
                        </div>
                        <div className="col-md-3">
                            <img style={{minWidth:"250px", maxWidth: "250px", minHeight:"190px",  maxHeight:"190px"}} src={pan} alt="pan" />
                            <p style={{marginTop:"10px"}}>{t("D2")} - {t("QA")}</p>
                        </div>
                        <div className="col-md-3 ">
                            <img style={{minWidth:"250px", maxWidth: "250px", minHeight:"190px",  maxHeight:"190px"}} src={repair} alt="repair" />
                            <p style={{marginTop:"10px"}}>{t("DU")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-12 bg-dark">
                <div className="container text-white">
                    <div className="row">
                        <div className="col mt-5 mb-5 text-center">
                            <div className="mt-5">
                                <h1 className="text-white">{t("WL")}</h1>
                                <a href="/contact">
                                <button
                                style={{padding:'10px 40px',
                                backgroundColor:'transparent',
                                border:"1px solid white",
                                color:'white',
                                borderRadius:'3px',
                                marginTop:'10px'
                            }}
                                >{t("CTL")}</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Service;
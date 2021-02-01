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

//const logo = require('./logo.jpeg); // with require

const Service = () => {
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
                        <h1 style={{fontSize:'40px',fontWeight:'bold',marginBottom:'20px'}}>COMPREHENSIVE SERVICE</h1>
                        <p>We put our efforts to customers solutions and requests delivering an answer at the fastest
                            span of time with exeptional quality.
                        We also provide guidance and search for units sales enabling you to make a deal with discreet and
                        value.</p>
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
                            <h3 style={{marginTop: "42.5px"}}>Technical Support</h3>
                            <p>We provide remote service for 
                                dental units. Check it out.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                    <div className="ml-4">
                    <img className="ml-5" width="40%" src={sales} alt="Card image" />
                        </div>
                        <div className="text-center mr-3">
                            <h3 style={{marginTop: "62.5px"}}>Sales</h3>
                            <p>Always searching for customers
                                to buy your dental office used product.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                    <div className="ml-4">
                    <img className="ml-5" width="40%" src={leadership} alt="Card image" />
                        </div>
                        <div className="mr-3 text-center">
                            <h3 style={{marginTop: "40px"}}> Guidance</h3>
                            <p>We provide advice on units sale and support.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                    <div className="ml-4">
                    <img className="ml-5" width="40%" src={news} alt="Card image" />
                        </div>
                        <div className="text-center mr-3">
                            <h3 style={{marginTop: "40px"}}> News - SOON!</h3>
                            <p>Take a look at our blog section to know the trending
                                world dental news.
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
                            <h3 className="text-center">Our Practice Areas</h3> <br/>
                            <p className="text-center">Take a consultation at one of our expertises below to find what
                                best suits for you.
                            </p>
                        </div>
                    </div>
                    <h3 className="text-center h2">Dental Imaging</h3> <br/>
                    <div className="row m-1">
                        <div className="col-md-3">
                            <img style={{minWidth:"250px", maxWidth: "250px", minHeight:"190px",  maxHeight:"190px"}} src={classifieds} alt="classifieds" />
                            <p style={{marginTop:"10px"}}>Dental Office Used Items</p>
                        </div>
                        <div className="col-md-3">
                            <img style={{minWidth:"250px", maxWidth: "250px", minHeight:"190px",  maxHeight:"190px"}} src={diagnostic} alt="diagnnostic" />
                            <p style={{marginTop:"10px"}}>CBCT Software Instructions (Ondemand3D)</p>
                        </div>
                        <div className="col-md-3">
                            <img style={{minWidth:"250px", maxWidth: "250px", minHeight:"190px",  maxHeight:"190px"}} src={pan} alt="pan" />
                            <p style={{marginTop:"10px"}}>Dental 2D Imaging and Software <br/> Q & A</p>
                        </div>
                        <div className="col-md-3 ">
                            <img style={{minWidth:"250px", maxWidth: "250px", minHeight:"190px",  maxHeight:"190px"}} src={repair} alt="repair" />
                            <p style={{marginTop:"10px"}}>Dental Units Repair</p>
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
                                <h1 className="text-white">WE'D LOVE TO HEAR FROM YOU</h1>
                                <a href="/contact">
                                <button
                                style={{padding:'10px 40px',
                                backgroundColor:'transparent',
                                border:"1px solid white",
                                color:'white',
                                borderRadius:'3px',
                                marginTop:'10px'
                            }}
                                >CONTACT US</button>
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
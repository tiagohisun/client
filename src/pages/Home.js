import React from "react";
import Jumbotron from "../components/cards/Jumbotron";
import NewArrivals from "../components/home/NewArrivals";
import BestSellers from "../components/home/BestSellers";
import CategoryList from "../components/category/CategoryList";
import SubList from "../components/sub/SubList";
import Banner from "../components/banner/Banner"
import Boxes from "../components/boxes/Boxes"
import TableGrid from "../components/tablegrid/Tablegrid"
import {useTranslation} from 'react-i18next'

const Home = () => {
  const {t, i18n} = useTranslation();
  return (
    <>
      <Banner/>
      <h4 className="text-center p-3" style={{transform:"translateY(-80px)"}}>
      <div className="text-danger h2 font-weight-bold text-center">
        <Jumbotron text={t("NA")} />
      </div>
      </h4>
      <NewArrivals />
      <Boxes/>
      <TableGrid/>
    
      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        {t("CAT")}
      </h4>
      
      <CategoryList />
  
      <br />
    </>
  );
};

export default Home;

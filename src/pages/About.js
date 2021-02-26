import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import location from '../static/images/location/location.png';
import { HashLink as Link } from 'react-router-hash-link';
import {useTranslation} from 'react-i18next'

const About = () => {
	const {t, i18n} = useTranslation();
	return (
		<div className="container mt-4">
			<div className="row">
				<div className="col-sm-12 col-md-2 col-lg-2">
					<div className="card-sm-3">
						<div className="card-body">
							<Link to="/about#aboutUs">
								<h5 className="mb-3">{t("AB")}</h5>
							</Link>
							<Link to="/about#welcome">
								<p>{t("WT")}</p>
							</Link>
							<Link to="/about#ourVision">
								<p>{t("OV")}</p>
							</Link>
							<Link to="/about#ourQuality">
								<p>{t("OQ")}</p>
							</Link>
							<Link to="/about#aboutDental">
								<p>{t("AB")} DENTAL04</p>
							</Link>
							<Link to="/about#ourMission">
								<p>{t("OM")}</p>
							</Link>
							<Link to="/about#privacy">
								<p>{t("PP")}</p>
							</Link>
							<Link to="/about#cookies">
								<p>Cookies</p>
							</Link>
							<Link to="/about#delivery">
								<p>{t("DP")}</p>
							</Link>
							<Link to="/about#guidance">
								<p>{t("GR")}</p>
							</Link>
							<Link to="/about#warranty">
								<p>{t("WaP")}</p>
							</Link>
							<Link to="/about#security">
								<p>{t("ScR")}</p>
							</Link>
						</div>
					</div>
				</div>

        <div className="col-sm-12 col-md-8 col-lg-8">
        <div >
					<h2 className="pb-3">{t("AB")}</h2>
					<h5 id="welcome">{t("WT")} DENTAL04!</h5>
					<p>
						{t("TCo")}
					</p>
					<br />
					<h5 id="">{t("WW")}</h5>
					<p>
						{t("DIs")}
					</p>
					<br />
					<h5 id="ourVision">{t("OV")}</h5>
					<p>
						{t("TwS")}
						<br />
						{t("WpF")}
						<br />
						{t("AoT")}
					</p>
					<br />
					<h5 id="ourQuality">{t("OQ")}</h5>
					<p>{t("WpI")}</p>
					<br />
					<h5 id="ourMission"> {t("OM")} </h5>
					{t("OmI")}
					<br />
					<br />
					<br />
					<h5 id="privacy"> {t("PP")} </h5>
					{t("WpT")}
					<br />
					<br />
					{t("LF")}
					<br />
					{t("CdI")}
					<br />
					<br />
					{t("TiL")} <strong>{t("FmI")}</strong>
					<br />
					<br />
					<h5 id="cookies"> {t("CaW")}</h5>
					{t("LaO")}
					<br />
					{t("TaU")}
					<br />
					<br />
					{t("Pl")}
					<br />
					{t("DTP")}
					<br />
					{t("WdN")}
					<br />
					<br />
					{t("TpD")}
					<br />
					<br />
					<h5 id="delivery"> {t("DTPo")} </h5>
					{t("RtI")}
					<br />
					<br />
					{t("FtR")}
					<br />
					<br />
					{t("RRS")}
					<br />
					<br />
					{t("Car")}
					<br />
					<br />
					{t("Pay")}
					<br />
					{t("Tra")}
					<br />
					<br />
					{t("OS")}
					<br />
					{t("DdN")}
					<br />
					<br />
					<h5 id="guidance"> {t("GR")}</h5>
					{t("RoS")}
					<br />
					{t("DMA")}
					{t("AMO")}
					<br />
					<br />
					{t("EPR")}
					<br />
					{t("ISM")}
					<br />
					<br />
					{t("RA")}
					<br />
					{t("TMM")}
					<br />
					<br />
					<h5 id="warranty"> {t("WPo")} </h5>
					<br />
					{t("DdNP")}
					<br />
					{t("HiB")}{' '}
					<strong>{t("CP")}</strong>
					&nbsp;, {t("TMO")}
					<br />
					<br />
					<h5 id="security"> {t("SP")}</h5>
					{t("ADA")}
					<br />
					<br />
					{t("1")}
					<br />
					<br />
					{t("2")}
					<br />
					<br />
					{t("3")}
					<br />
					<br />
					{t("4")}
					<br />
					<br />
					{t("5")}
					<br />
					<br />
					{t("6")}
					<br />
					<br />
					{t("7")}
					<br />
					<br />
					{t("8")}
				</div>
        </div>
				
				<div className="col-sm-12 col-md-2 col-lg-2 pt-4" >
					<div className="card ml-2 mt-5" >
						<img style={{width:"100%"}} className="card-img-top" src={location} alt="Card image cap" />
					</div>
				</div>
			</div>
		</div>
	);
};
export default About;

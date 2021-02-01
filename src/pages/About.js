import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import location from "../static/images/location/location.png";
import { HashLink as Link } from "react-router-hash-link";

const About = () => {
  return (
    <div className="container-fluid mt-4" style={{ width: "1200px" }}>
      <div className="row" style={{ width: "1200px" }}>
        <div
          className="card-sm-3"
          style={{
            left: "110px",
            top: "100px",
            position: "sticky",
            height: "480px",
          }}
        >
          <div className="card-body">
            <Link to="/about#aboutUs">
              <h5 className="mb-3">About Us</h5>
            </Link>
            <Link to="/about#welcome">
              <p>Welcome to DENTAL04!</p>
            </Link>
            <Link to="/about#ourVision">
              <p>Our Vision</p>
            </Link>
            <Link to="/about#ourQuality">
              <p>Our Quality</p>
            </Link>
            <Link to="/about#aboutDental">
              <p>About DENTAL04</p>
            </Link>
            <Link to="/about#ourMission">
              <p>Our Mission</p>
            </Link>
            <Link to="/about#privacy">
              <p>Privacy Policy</p>
            </Link>
            <Link to="/about#cookies">
              <p>Cookies</p>
            </Link>
            <Link to="/about#delivery">
              <p>Delivery Policy</p>
            </Link>
            <Link to="/about#guidance">
              <p>Guides and Restrictions</p>
            </Link>
            <Link to="/about#warranty">
              <p>Warranty Policy</p>
            </Link>
            <Link to="/about#security">
              <p>Security</p>
            </Link>
          </div>
        </div>

        <div className="col-sm-6 ml-2 pt-4" style={{ left: "110px" }}>
          <h2 className="pb-3">About Us</h2>
          <h5 id="welcome">Welcome to DENTAL04!</h5>
          <p>
            Welcome to DENTAL04!
            The company was founded in September 2018 with the aim of providing
            a fast and reliable technical support for dental units as well as 
            running sales negotiations by intermediating customers who has used
            dental offices items or devices.
          </p>
           <br />
          <h5 id="">Who are we</h5>
          <p>
            DENTAL04 is a company that provides technical assistance services,
            advertisements for used x-ray machines and dental programs - from dental imaging
            centers and offices. We also support some CBCT Imaging softwares such as ONDEMAND3D
            for CT scans used worldwide.
          </p>
           <br />
          <h5 id="ourVision">Our Vision</h5>
          <p>
            Today we serve several radiology dental imaging centers throughout Brazilian.
            and some other countries in Latin America. 
             <br />
            
            We provide fast, quality assistance and help you sell your used x-ray machines. 

             <br />
            
            All of that giving you satisfaction and confidence in our services.
          </p>
           <br />
          <h5 id="ourQuality">Our Quality</h5>
          <p>We provide integrity and quality services. Try it!</p>
           <br />
      
          <h5 id="ourMission"> Our Mission </h5>
          Our mission is to provide a more efficient and quick support for our customers as well as
          helping them to sell their used dental items.
          <br />
          <br />
           <br />
          <h5 id="privacy"> Privacy Policy </h5>
          We prioritize the privacy of our visitors to this site so we 
          provide below the types of information that are collected 
          and handled. 
          <br />
          <br />
          Log Files DENTAL04 follows the standard procedure of using log files. 
          These files log visitors while they visit the site.
          <br />
          Companies do it for it´s part of the analytical service of servers. 
          The information collected includes IP addresses, ISP page type, date, 
          referral / exit pages and possibly the number of clicks. 
          <br />
          <br />
          This information log is not linked to any personally identifiable 
          information. Its purpose is only to analyze trends, managing the site, 
          tracking users' movements within this website.

          For more information, contact us at <strong>contato@dental04.com</strong>
          <br />
          <br />
          <h5 id="cookies"> Cookies and Web Beacons </h5>
          
          Like any other website, DENTAL04 uses 'cookies'. 
           <br />
          They are used to store information that includes, user preferences
          visitors and the pages they visit. They are used to optimize
          user experience based on that information. 
          
          <br />
          <br />
          Policy
          <br />
          DENTAL04 Third Party Privacy Policy does not apply to other advertisers or
          third party sites. Therefore, we advise you to consult their respective privacy policies.
          You can disable the cookies function in the options on your page.
          <br />
          We do not collect any information from individuals under the age of 18. If you
          find any mistake in any registration, please inform us to
          remove such information from our records as soon as possible. This
          Privacy Policy applies only to our online activities and is valid for visitors to our 
          website regarding the information they share or collect from DENTAL04. 
          <br />
          <br />
          This policy does not applies to any information collected offline or by other means to
          this site. Using this website, you declare to be aware of our Privacy Policy and agree to its 
          Terms and Conditions.
          <br />
          <br />
          <h5 id="delivery"> Delivery, Terms and Price Policies </h5>
          Regarding Transport: In the sales negotiations for x-rays units, 
          DENTAL04 does not provide transport in any case.
          <br />
          <br />
          For this reason, prices and transportation terms are due to the
          carriers chosen by one of the parties (buyer or seller).
          <br />
          <br />
          Regarding Remote Support and Sales: The values ​​and terms
          of remote support or any other service can be informed through <strong>contato@dental04.com</strong>. 
          
          <br />
          <br />
          Carriers: The price for carrier companies to transport the units after sold, are in charge
          of the buyer or seller. 
          <br />
          <br />
          Payment:
          <br />
         
          Transport: DENTAL04 does NOT receive any DIRECT payment related to
          transportation of the negotiated machines. 
          
          It should be treated directly with the carrier. 
          <br />
          <br />
          
          On-site Assistance or Remote:
           <br />
          DENTAL04 does not receive advance payment for its remote support or any other servic.
          The buyer of the service (customer) transfer the payment ONLY AFTER the service is completed
          successfully or the problem diagnosed.
          <br />
          <br />
          <h5 id="guidance"> Guidance and Restrictions </h5>
          Regarding On-site or Remote Assistance:
           <br />
          DENTAL04 meets all regions including abroad in Portuguese, English and Spanish languages. 
          
          About the Means of Transport or Access:
          <br />
          <br />
          Exchange Policy and Returns In Case Transport: 
          <br />
          In sales made or intermediated by DENTAL04,
          it is the responsibility of the device owner (seller) to decide upon
          contract the term or policy for returning the device if it´s
          defective. Such policy is informed to the buyer before the act
          (closing) of the sale. 
          <br />
          <br />
                     
          Remote Access: 
          <br />
          The main means used for access is the Teamviewer or Anydesk access program. 
          For necessary reasons, other access softwares, can be used ALWAYS with the client's prior consent.
          <br />
          <br />
          <h5 id="warranty"> Warranty Policy </h5>
          <br />
          DENTAL04 does not provide a guarantee because it only intermediate the sale.
          So the products-sold warranty responsibility of the dea(ls) are for the seller (product owner) 
          <br />
          However, in Brazil, it´s a federal law according to the <strong>Consumer Protection - Law 8,078 / 90</strong> 
          &nbsp;, the minimum of 3 months in any sale shall be made against device defects, such defect originating from
          of the machine, not caused by third party failures.
          <br />
          <br />
          <h5 id="security"> Security Policy </h5>
          Although DENTAL04 applies certain safety filters in the treatment of
          sales of the machines in which it is involved, it is still recommended
          to observe standard and additional precautions when selling machines
          carried out customer-to-customer for more security of parts of the business
          treated, such as: 
          <br />
          <br />
          1. Get to know the buyer as much as possible, even if he/she has a physical workplace (clinic, office, etc.),
          characteristic of a potential buyer of x-ray devices. 
          <br />
          <br />
          2. DON´T provide any personal data from documents without finding out who the
          possible buyer / seller. 
          <br />
          <br />
          3. DON´T buy or sell if you make a contract without registering your signatures in
          notary´s office. 
          <br />
          <br />
          4. DON´T base your purchase or sale solely on texts or application messages, 
          if both parties do not know each other. Also notice if you suspect any subtle plots. 
          <br />
          <br />
          5. NEVER meet personally without being aware of the buyer or seller previously. 
          <br />
          <br />
          6. Watch out for possible misleading messages from request for payments, 
          or personal data mainly anticipated. 
          <br />
          <br />
          7. Record all messages and calls or video calls of the talks in the negotiations. 
          <br />
          <br />
          8. Obtain the serial number of the device or product and track it.
        </div>
        <div className="col-sm-3 pt-4" style={{ width: "150px" }}>
          <div className="card ml-2 mt-5" style={{ left: "110px", width: "250px" }}>
            <img className="card-img-top" src={location} alt="Card image cap" />
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

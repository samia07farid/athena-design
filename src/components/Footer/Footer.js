import { Grid } from "@material-ui/core";
import React from "react";
import Group86 from "../../Illustration/Group 86.png";
import "./Footer.css";
import facebook from "../../Illustration/facebook-logo-in-circular-shape@2x.png";
import dribbel from "../../Illustration/dribbble (1)@2x.png";
import linkedin from "../../Illustration/linkedin (2)@2x.png";
import twitter from "../../Illustration/twitter (4)@2x.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerTop">
        <h3>Get your design right, right now</h3>
        <p>Be the first know our latest offers and update</p>
        <form>
          <input type="text" placeholder="Enter Your Email Address" />
          <input type="submit" value="Get Started" />
        </form>
      </div>
      <div className="footerBottom">
        <div>
          <img src={Group86} alt="" />
          <div className="social__Icon">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={dribbel} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <p>Features</p>
            <p>Enterprise</p>
            <p>Pricing</p>
          </Grid>
          <Grid item xs={12} sm={4}>
            <p>Blog</p>
            <p>Help Center</p>
            <p>Contact Us</p>
            <p>Status</p>
          </Grid>
          <Grid item xs={12} sm={4}>
            <p>About Us</p>
            <p>Terms of Services</p>
            <p>Security</p>
            <p>Login</p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;

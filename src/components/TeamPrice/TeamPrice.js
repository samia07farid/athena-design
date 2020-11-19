import { Button, Card, Grid } from "@material-ui/core";
import React from "react";
import "./TeamPrice.css";
const TeamPrice = () => {
  return (
    <div className="teamPrice">
      <h3>Choose Your Dedicated Team</h3>
      <Grid container>
        <Grid item xs={12} sm={12} md={4}>
          <Card>
            <h2>$199</h2>
            <p>For Basic</p>
            <p>Homepage</p>
            <p>No Inner Page</p>
            <p>Asset File</p>
            <p>Source File</p>
            <p>Free Stock Photos</p>
            <p>10 Days Free Support</p>
            <p>24/7 Support</p>
            <Button>Order Now</Button>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Card>
            <h2>$399</h2>
            <p>For Preferred</p>
            <p>Homepage</p>
            <p>No Inner Page</p>
            <p>Asset File</p>
            <p>Source File</p>
            <p>Free Stock Photos</p>
            <p>20 Days Free Support</p>
            <p>24/7 Support</p>
            <Button>Order Now</Button>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Card>
            <h2>$599</h2>
            <p>For Elite</p>
            <p>Homepage</p>
            <p>No Inner Page</p>
            <p>Asset File</p>
            <p>Source File</p>
            <p>Free Stock Photos</p>
            <p>30 Days Free Support</p>
            <p>24/7 Support</p>
            <Button>Order Now</Button>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default TeamPrice;

import React from "react";
import { Container } from "react-bootstrap";
import { Grid, Divider } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
import useStyles from "../styles";

function contact() {
  return (
    <container>
      <UpperLogoContainer />
      <ContactBottomGridSegment />
    </container>
  );
}

function UpperLogoContainer() {
  const classes = useStyles();
  return (
    <div id="logoTextOnContactPage">
      <Typography variant="h3">
        Sa<strong className={classes.title}>nt</strong>ao{" "}
      </Typography>
      <Typography variant="body2">SOFT CONSULTING</Typography>
    </div>
  );
}

function ContactBottomGridSegment() {
  const classes = useStyles();
  return (
    <div className="contactPageBottomContent">
      <Grid container direction="row" justify="space-between" spacing="1">
        <Grid item lg={7} md={7}>
          <Grid container alignItems="center">
            <Grid item>
              <Typography variant="h5">Contact Us</Typography>
              <div className={classes.contactUsParagraph}>
                <Typography variant="h7">
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Aenean ultricies mi vitae
                  est. Mauris placerat eleifend leo.
                </Typography>

                <Typography className={classes.inputFieldTitle}>
                  <strong>Name :</strong>
                </Typography>

                <input className={classes.contactInputField}></input>

                <Typography className={classes.inputFieldTitle}>
                  <strong>E-Mail :</strong>
                </Typography>
                <input className={classes.contactInputField}></input>
                <Typography className={classes.inputFieldTitle}>
                  <strong>Message :</strong>
                </Typography>
                <textarea className={classes.contactInputField}></textarea>
                <div>
                  <button className={classes.contactUsSubmitButton}>
                    Submit
                  </button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={4} md={4}>
          <Typography variant="h5">Sales Inquiries</Typography>
          <div className={classes.contactUsSalesInquiriesPara}>
            <Typography variant="h7">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
            </Typography>
            <Typography className={classes.contactUsSalesInquiriesParaEmail}>
              <strong>sales@yourdomainname.com</strong>
            </Typography>
          </div>
          <Typography variant="h5">Technical Support</Typography>
          <div className={classes.contactUsSalesInquiriesPara}>
            <Typography variant="h7">
              Current customers contact our technical support team.
            </Typography>
            <Typography className={classes.contactUsSalesInquiriesParaEmail}>
              <strong>support@yourdomainname.com</strong>
            </Typography>
          </div>
          <Typography variant="h5">Biz Development</Typography>
          <div className={classes.contactUsSalesInquiriesPara}>
            <Typography variant="h7">
              Contact our business development team today!
            </Typography>
            <Typography className={classes.contactUsSalesInquiriesParaEmail}>
              <strong>business@yourdomainname.com</strong>
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Divider className={classes.divider}></Divider>

      <Grid container direction="row" justify="space-between" spacing="3">
        <p className={classes.footerText}>
          Copyright &copy; 2009 Evardo Web Consulting. Designed by Rashid Wassan{" "}
        </p>
        <p className={classes.footerText}>
          Terms & Condition | Privacy Policy | Sitemap
        </p>
      </Grid>
    </div>
  );
}

export default contact;

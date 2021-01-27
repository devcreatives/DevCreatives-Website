import { makeStyles } from "@material-ui/core/styles";
import box from "./components/messageBox.jpg";

const UseStyles = makeStyles((theme) => ({
  root: {
    background: "white",
  },
  header: {
    fontSize: 14,
    fontWeight: "30px",

    borderRadius: "20px",
    border: 10,
    boxShadow: "0 3px 3px",
    background: "transparent",
  },
  appbar: {
    border: "0",
  },
  homeContent: {
    border: 5,
  },
  brand: {
    color: "white",
  },
  detailsPart: {
    topMargin: "10px",
    padding: "auto",
    width: "100%",
    height: "auto",
  },

  title: {
    color: "green",
  },
  webName: {
    marginLeft: theme.spacing(10),
    marginTop: theme.spacing(10),
    fontSize: "50px",
  },
  imageBox: {
    marginTop: theme.spacing(5),
    blockSize: "fit-content",
  },
  image: {
    marginTop: theme.spacing(5),
    height: "auto",
    width: "100%",
  },
  imageDetails: {
    maxWidth: "fit-content",
    blockSize: "fit-content",
    height: "50px",
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(5),
  },
  gridItem: {
    maxWidth: "fit-content",
    blockSize: "fit-content",
  },
  siteDesc: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),

    width: "100%",
    height: "auto",
  },
  news: {
    marginTop: theme.spacing(2),
  },
  credits: {
    display: "flex",
    flexDirection: "column",
  },
  creditsImage: {
    marginTop: theme.spacing(4),
    width: "40%",
    height: "40%",
  },
  creditsItem: {
    display: "flex",
  },

  contactUsParagraph: {
    marginTop: theme.spacing(2),
  },

  contactUsSalesInquiriesPara: {
    marginTop: theme.spacing(1),
  },

  contactUsSalesInquiriesParaEmail: {
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(4),
  },

  inputFieldTitle: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },

  contactUsSubmitButton: {
    backgroundColor: "black",
    padding: "4px 12px",

    marginTop: theme.spacing(2),
    color: "white",
    border: "none",
    fontWeight: "bold",
  },
  divider: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(2),
  },
  contactInputField: {
    width: "300",
  },

  footerText: {
    fontSize: 11,
    fontWeight: "bold",
    marginTop: theme.spacing(2),
    display: "inLine",
  },
}));

export default UseStyles;

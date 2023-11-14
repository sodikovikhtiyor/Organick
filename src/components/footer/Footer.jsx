import React from "react";
import "./Footer.scss";
import Logo from "../../assets/Logo.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
function Footer() {
  const contacts = [
    {
      id: 1,
      type: "Email",
      text: "needhelp@Organia.com",
    },
    {
      id: 2,
      type: "Phone",
      text: "666 888 888",
    },
    {
      id: 3,
      type: "Address",
      text: "88 road, borklyn street, USA",
    },
  ];
  const pages = [
    {
      id: 1,
      text: "Style Guide",
    },
    {
      id: 2,
      text: "404 Not Found",
    },
    {
      id: 3,
      text: "Pasword Protected",
    },
    {
      id: 4,
      text: "Licience",
    },
    {
      id: 5,
      text: "Changelog",
    },
  ];
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="third third-one">
          <h2>Contact Us</h2>

          {contacts.map((contact) => {
            return (
              <div key={contact.id}>
                <h4>{contact.type}</h4>
                <p>{contact.text}</p>
              </div>
            );
          })}
        </div>
        <div className="third third-two">
          <div className="logo">
            <img src={Logo} alt="logo" />
            <h1>Organick</h1>
          </div>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing
          </p>
          <InstagramIcon className="icon" />
          <FacebookIcon className="icon" />
          <TwitterIcon className="icon" />
          <PinterestIcon className="icon" />
        </div>
        <div className="third third-three">
          <h2>Contact Us</h2>

          {pages.map((page) => {
            return <p key={page.id}>{page.text}</p>;
          })}
        </div>
      </div>
      <hr />
      <p className="copyright">
        Copyright © <b> Organick</b>
      </p>
    </div>
  );
}

export default Footer;

import React from "react";

function Footer() {
  const footerStyle = {
    backgroundColor: "#010101",
    padding: "2%",
    width: "100%",
    textAlign: "center",
    bottom: "0",
    color: "grey",
  };

  return (
    <React.Fragment>
      <div style={footerStyle}>Copyright Bla bla bla</div>
    </React.Fragment>
  );
}

export default Footer;

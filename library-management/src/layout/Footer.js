import React from "react";


function Footer() {

    const footerStyle = {
        backgroundColor: 'grey',
        padding: '2%',
        width: '100%',
        textAlign: 'center',
        bottom: '0',
        position: 'absolute'
    }

    return (
        <React.Fragment>
            <div style={footerStyle}>Copyright Bla bla bla</div>
        </React.Fragment>
    )

}

export default Footer;
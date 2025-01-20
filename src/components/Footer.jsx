import React from "react";
function Footer(params) {
    const footerStyle ={
       "marginLeft": "65rem"
    };
    return(
        <footer className="text-gray-400 fixed bottom-0 left-0" >
            <small style={footerStyle} >&copy; 2025 Patricia TCHINGUE. All right reserved.</small>
        </footer>

    );
    
}
export default Footer;
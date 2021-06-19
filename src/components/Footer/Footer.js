import React from "react";
//Footer assets
import FooterLogo from "../../assets/Home/7-Footer/FooterLogo.png";
import FooterBg from "../../assets/Home/7-Footer/Bg.png";

function Footer() {
    return (
        <>
                <img src={FooterBg} className="footer__bg" alt="FooterBg"/>

                <p className="footer__Heading">Hydro Fresh Box</p>
                
                <a href="/"><img src={FooterLogo} className="footer__logo" alt="Logo"/></a>
                <span className="footer__NavigatePart">
                    <ul>
                    <li className="footer__NavigatePart--Heading">Navigate</li>
                        <li className="footer__NavigatePart--links"><a href="#" className="footer__NavigatePart--aboutUs">About Us</a></li>
                        <li className="footer__NavigatePart--links"><a href="#" className="footer__NavigatePart--shop">Shop</a></li>
                        <li className="footer__NavigatePart--links"><a href="#" className="footer__NavigatePart--viewPods">View Pods</a></li>
                        <li className="footer__NavigatePart--links"><a href="#" className="footer__NavigatePart--contactUs">Contact Us</a></li>
                    </ul>
                </span>
                <span className="footer__NeedHelpPart">
                    <ul>
                    <li className="footer__NeedHelpPart--Heading">Need Help?</li>
                        <li className="footer__NeedHelpPart--links"><a href="#" className="footer__NeedHelpPart--customerService">Customer Service</a></li>
                        <li className="footer__NeedHelpPart--links"><a href="#" className="footer__NeedHelpPart--locations">Locations</a></li>
                        <li className="footer__NeedHelpPart--links"><a href="#" className="footer__NeedHelpPart--news">News</a></li>
                        <li className="footer__NeedHelpPart--links"><a href="#" className="footer__NeedHelpPart--emailUs">Email Us</a></li>
                    </ul>
                </span>
                <span className="footer__FollowUsPart">
                    <ul>
                    <li className="footer__FollowUsPart--Heading">Follow us</li>
                        <li className="footer__FollowUsPart--links"><a href="#" className="footer__FollowUsPart--fb">Facebook</a></li>
                        <li className="footer__FollowUsPart--links"><a href="#" className="footer__FollowUsPart--insta">Instagram</a></li>
                    </ul>
                </span>
                <hr className="footer__horizontalLine"></hr>
                <a href="#"><p className="footer__termsAndConditions">Terms & Conditions</p></a>
                <p className="footer__rightsReserved">All rights reserved — 2021 © Hydro Fresh Box</p>
                <a href="#"><p className="footer__privacyPolicy">Privacy Policy</p></a>
            </>
    )
}

export default Footer;
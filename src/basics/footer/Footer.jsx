import "./Footer.scss";

function Footer () {

    return (

        <footer>
            <div className="container footer">
                <div>
                    <div className="upper-footer">
                        <img src="/images/ve-icon-nobg.svg" height="80" width="80" alt=""/>
                        <div className="row justify-content-start">
                            <div className="col-md-2 col-sm-4">
                                <p>Let’s cooperate</p>
                                <a href="#">VE Business</a><br/>
                                <a href="#">VE Partners</a>
                            </div>
                            <div className="col-md-2 col-sm-4">
                                <p>Helpful links</p>
                                <a href="#">About Us</a><br/>
                                <a href="#">FAQ</a><br/>
                                <a href="#">Contact Us</a><br/>
                                <a href="#">Security</a>
                            </div>
                            <div className="col-md-2 col-sm-4">
                                <p>Follow us</p>
                                <a href="#">Facebook</a><br/>
                                <a href="#">Twitter</a><br/>
                                <a href="#">Instagram</a><br/>
                            </div>
                            <div className="col-md-2 col-sm-4"></div>
                            <div className="col-md-2 col-sm-4"></div>
                            <div className="col-md-2 col-sm-4">
                                <a href="https://play.google.com/store/games?hl=uk&gl=US">
                                    <img src="/images/google-play-badge-en.svg" width="180"
                                         className="get-on-img google-get-img"
                                         alt="Google Play and the Google Play logo are trademarks of Google LLC." height="53"/>
                                </a><br/>
                                <a href="https://www.apple.com/ua/app-store/">
                                    <img src="/images/apple-badge-en.svg" width="180"
                                         className="get-on-img"
                                         alt="Apple Store and the Apple Store are trademarks of Apple Inc." height="60"/>
                                </a><br/>
                                <div className="dropdown dropup">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                        Language
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">English</a></li>
                                        <li><a className="dropdown-item" href="#">Українська</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row under-footer">
                        <div className="col-md-2">
                            <p>© Visit everywhere, 2023</p>
                        </div>
                        <div className="col-2"></div>
                        <div className="col-md-2">
                            <a href="#">
                                <p>
                                    Terms & Conditions
                                </p>
                            </a>
                        </div>
                        <div className="col-md-2">
                            <a href="#">
                                <p>
                                    Privacy Policy
                                </p>
                            </a>
                        </div>
                        <div className="col-md-2">
                            <a href="#">
                                <p>
                                    Cookies Policy
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>);
}

export default Footer;

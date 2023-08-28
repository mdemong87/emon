import Image from "next/image";
import { ImLocation } from "react-icons/im";
import logo from "../../public/logo.png";

export default function Footer() {
  return (
    <div id="contact" className='footer'>
      <div className="container">
        <div className="footerWrp">
          <div className="footer-logoWrp">
            <Image className="footer-logo" src={logo} alt="footer-logo" />
          </div>
          <div className="reachme-out-Wrp">
            <h2>Reach Me Out</h2>
            <p>Discuss A Project or Just Want To Say Hi ? My DM's are always OPEN</p>
            <div className="footerlocatonWrp">
              <ImLocation className="locationIcons" />
              <span>Gazipur,<br />Dhaka,Bangladesh</span>
            </div>
            <div>
              all contact icons here
            </div>
          </div>
        </div>
        <div className="copyRightErp">
          <p>&copy; 2023 || All Right Reserve Md Emon Hossen </p>
        </div>
      </div>
    </div>
  )
}

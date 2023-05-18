import { AiFillStar, AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { IoMdQuote } from "react-icons/io";

export default function Reviews() {
    return (
        <div className="projctsWrp">
            <span className="into">What Client Say</span>
            <h2 className="heading">Reviews</h2>
            <div className="reviewsCardWrp">
                <div className="reviewProfile">
                    <div className="reviewProfilePhoto">
                        <FaUserAlt className="reviewProfileIcon" />
                    </div>
                    <div className="profileinfo">
                        <h2>Md Emon Hossen</h2>
                        <p>CEO, DevEmon.com</p>
                    </div>
                </div>
                <div className="reciewDitailse">
                    <div className="reviewController">
                        <div className="cutaep">
                            <IoMdQuote className="quoteIcon" />
                        </div>
                        <div className="arrowbtns">
                            <div>
                                <AiOutlineArrowLeft className="rightAndLedtWArrowIcons" />
                            </div>
                            <div>
                                <AiOutlineArrowRight className="rightAndLedtWArrowIcons" />
                            </div>
                        </div>
                    </div>
                    <div className="reviewditaiseinfo">
                        <div className="reviewdetailseInfoheading">
                            <div>
                                <h2>Lorem ipsum dolor,dolor, sit amet consectetur adipisicing elit.</h2>
                                <p>via <b>fiver</b></p>
                            </div>
                            <div>
                                <AiFillStar className="starIcon" />
                                <AiFillStar className="starIcon" />
                                <AiFillStar className="starIcon" />
                                <AiFillStar className="starIcon" />
                                <AiFillStar className="starIcon" />
                            </div>
                        </div>
                        <div className="reviewdetailseInfoditailse">
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil odio, sint corrupti voluptatem dolores perferendis rerum nulla quae nesciunt provident!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

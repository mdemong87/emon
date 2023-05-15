import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { IoMdQuote } from "react-icons/io";

export default function Reviews() {
    return (
        <div className="projctsWrp">
            <span className="into">What Client Say</span>
            <h2 className="heading">Reviews</h2>
            <div className="reviewsCardWrp">
                <div className="reviewProfile">dgfds</div>
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
                    <div className="reviewditaiseinfo">1</div>
                </div>
            </div>
        </div >
    )
}

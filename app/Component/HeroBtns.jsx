import Link from "next/link";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsBootstrapFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export default function HeroBtns() {
    return (
        <div className="hersbtnsWrp">
            <div className="leftBtnWrp">
                <p>FIND ME</p>
                <div className="leftBtns">
                    <Link href={'/'} className="leftAndRightLink">
                        <AiFillFacebook className="leftIcons" />
                    </Link>
                    <Link href={'/'} className="leftAndRightLink">
                        <AiFillGithub className="leftIcons" />
                    </Link>
                    <Link href={'/'} className="leftAndRightLink">
                        <AiFillLinkedin className="leftIcons" />
                    </Link>
                </div>
            </div>
            <div className="leftBtnWrp">
                <p>BEST SKILL ON</p>
                <div className="leftBtns">
                    <Link href={'/'} className="leftAndRightLink">
                        <BsBootstrapFill className="rightIcons" />
                    </Link>
                    <Link href={'/'} className="leftAndRightLink">
                        <FaReact className="rightIcons" />
                    </Link>
                    <Link href={'/'} className="leftAndRightLink">
                        <SiNextdotjs className="rightIcons" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

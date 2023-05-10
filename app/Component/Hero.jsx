import Image from "next/image";
import img from "../../public/hero.jpg";
import HeroBtns from "./HeroBtns";

export default function Hero() {
    return (
        <div className='herowrp'>
            <div className="text">

                <span className="into">I will turn your ideas into reality</span>

                <div className="info">
                    <h4>Hi,</h4>
                    <h1>I'm Md Emon Hossen</h1>
                    <h2>Front-End Engineer</h2>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quaerat doloribus deleniti dicta, ducimus cum tempore? deleniti dicta, ducimus cum tempore?</p>
                </div>



                <HeroBtns />

            </div>
            <div className="image">
                <div className="heroImageWrper">
                    <div className="secheroImageWrp">
                        <Image className="img" src={img} />
                    </div>
                </div>
            </div>
        </div>

    )
}

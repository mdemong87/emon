import Image from "next/image";
import img from "../../public/IMG_20230331_055847.jpeg";
import HeroBtns from "./HeroBtns";

export default function Hero() {
    return (
        <div id="home" className='herowrp'>
            <div className="text">

                <span className="into">I will turn your ideas into reality</span>

                <div className="info">
                    <h3>Hi,</h3>
                    <h1>I'm Md Emon Hossen</h1>
                    <h2>Front-End Engineer</h2>

                    <p>I am a Full Stack Software Developer, I provides Web & Mobile App Development services and complete technical solutions for businesses of any size and nature, My services has helped startups, companies and individuals all around the globe.</p>
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

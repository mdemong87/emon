import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { TbLiveView } from "react-icons/tb";


export default function SingleProject() {
    return (
        <div className="SingleProjectWrp">
            <div>
                gdfs
            </div>
            <div className="singleprojectDetailseWrper">
                <h1>This is heading</h1>
                <div className="singleprojectbtnwrp">
                    <Link className="singleprojectbtn" href={'#'}>
                        <AiFillGithub className="singleprojecticons" />
                    </Link>
                    <Link className="singleprojectbtn" href={'#'}>
                        <TbLiveView className="singleprojecticons" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
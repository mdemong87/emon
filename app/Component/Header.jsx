import Image from "next/image";
import logo from "../../public/logo.png";

export default function Header() {
  return (
    <div className='headerWrper'>
      <div>
        <Image className="logo" src={logo} />
      </div>
      <div>gfgsdf</div>
    </div>
  )
}

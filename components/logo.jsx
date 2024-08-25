import Link from "next/link"
import logo from "../public/logo.png";
import Image from "next/image";''


const Logo = () => {
    return (
        <Link href="/" className="py-3">
            <Image
                src={logo}
                className="w-20 h-15"
                alt=""
                priority={true}
            />
        </Link>
    )
}

export default Logo;
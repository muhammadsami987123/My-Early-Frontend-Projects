import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <div className="bg-[#044E83] flex justify-between items-center px-10 h-20">
            <Image
                src={"/logogiaic.png"}
                alt="logo"
                width={85}
                height={80}
                className="relative mt-20"
            />
            <h3 className="text-white text-2xl font-bold">
                Tuition Free Education Program on Latest Technologies
            </h3>
            <nav className="text-white flex gap-10 sticky top-0">
                <div>
                    <Link href={"/"}>Home</Link>
                </div>
                <div>
                    <Link href={"/about"}>About</Link>
                </div>  
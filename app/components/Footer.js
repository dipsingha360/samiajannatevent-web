import Link from "next/link";

function Footer() {
  return (
    <div className="px-40 py-10 flex flex-col items-center border-t border-yellow-50/10 ">
      <p className="text-yellow-50 text-xl font-thin">
        &copy; {new Date().getFullYear()}
        <Link
          href="/"
          className="text-xl text-yellow-500 px-2 font-normal cursor-pointer hover:border-b hover:border-yellow-300"
        >
          SamiaJannatEvent
        </Link>
        All right reserved
      </p>
    </div>
  );
}

export default Footer;

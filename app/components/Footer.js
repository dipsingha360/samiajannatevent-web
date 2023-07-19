function Footer() {
  return (
    <div className="px-40 py-10 flex flex-col items-center border-t border-yellow-50/10 ">
      <p className="text-yellow-50 text-xl font-thin">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-2xl text-yellow-500 px-2 font-medium cursor-pointer hover:underline duration-300">
          SamiaJannatEvent
        </span>{" "}
        All right reserved.
      </p>
    </div>
  );
}

export default Footer;

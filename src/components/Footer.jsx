function Footer() {
  return (
    <div
      className="max-w-5xl md:flex md:justify-between mx-auto
      border-t-2 border-t-black  px-2 py-3 rounded-xl "
    >
      <div className="px-4 w-full flex justify-center md:justify-start">
        <span className="text-center font-bold">&CopyRight</span>
      </div>
      <div className="flex justify-center gap-2">
        <div>
          <span
            className="text-base font-bold
          
          "
          >
            Realize
          </span>
        </div>
        <div>
          <span className="text-balance font-bold">HomeTex</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;

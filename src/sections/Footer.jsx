const Footer = () => {
  const handleSocialClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <footer
      className={
        " c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5"
      }
    >
      <div className={"text-white-500 flex gap-2"}>
        <p> Terms and Conditions</p>
        <p> |</p>
        <p> Privacy Policy</p>
      </div>
      <div className={"flex gap-3 cursor-pointer"}>
        <div className={"social-icon"}  onClick={() => handleSocialClick("https://github.com/vinayak-00017")}>
          <img
            src={"/assets/github.svg"}
            alt={"github"}
            className={"w-1/2 h-1/2"}
          />
        </div>
        <div className={"social-icon"}  onClick={() => handleSocialClick("https://x.com/Vinayak00017")}>
          <img
            src={"/assets/twitter.svg"}
            alt={"twitter"}
            className={"w-1/2 h-1/2"}
          />
        </div>
        {/* <div className={"social-icon"}>
          <img
            src={"/assets/instagram.svg"}
            alt={"instagram"}
            className={"w-1/2 h-1/2"}
          />
        </div> */}
      </div>
      <p className={"text-white-500"}>© 2024 Vinayak. All rights reserved</p>
    </footer>
  );
};
export default Footer;

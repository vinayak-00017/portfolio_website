import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import { useState } from "react";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("vinayak00017@gmail.com");

    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 3000);
  };

  return (
    <section className={"c-space my-20"} id={"about"}>
      <div
        className={
          "grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 gap-5 h-full"
        }
      >
        <div className={"col-span-1 xl: row-span-3"}>
          <div className={"grid-container"}>
            <img
              src={"/assets/vin-t.webp"}
              alt={"grid-1"}
              className={"w-full sm:h-[276px] h-fit object-contain"}
            />
            <div>
              <p className={"grid-headtext"}>Hi, I'm Vinayak</p>
              <p className={"grid-subtext"}>
                With 4 years of experience across various development fields.
              </p>
            </div>
          </div>
        </div>
        <div className={"col-span-1 xl:row-span-3"}>
          <div className={"grid-container"}>
            <img
              src={"/assets/grid2.png"}
              alt={"gird-2"}
              className={"w-full sm:h-[276px] h-fit object-contain "}
            />
            <div>
              <p className={"grid-headtext"}>Tech Stack</p>
              <p className={"grid-subtext"}>
                I specialize in Javascritpt/Typescript with a focus on React and
                Next.js ecosystems
              </p>
            </div>
          </div>
        </div>
        <div className={"col-span-1 xl:row-span-4"}>
          <div className={"grid-container"}>
            <div
              className={
                "rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center"
              }
            >
              <Globe
                height={326}
                width={326}
                backgroundColor={"rgba(0,0,0,0)"}
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="/textures/earth-night.jpg"
                // backgroundImageUrl={"/textures/night-sky.png"}
                arcsData={arcsData}
                arcColor={"color"}
                arcDashLength={() => Math.random()}
                arcDashGap={() => Math.random()}
                arcDashAnimateTime={() => Math.random() * 4000 + 500}
              />
            </div>
            <div>
              <p className={"grid-headtext"}>
                I work remotely across most timezones.
              </p>
              <p className={"grid-subtext"}>
                I am based in India, with remote work available.
              </p>
              <Button
                name={"Contact me"}
                isBeam
                containerClass={"w-full mt-10"}
              ></Button>
            </div>
          </div>
        </div>
        <div className={"xl: col-span-2 xl:row-span-3"}>
          <div className={"grid-container"}>
            <img
              src={"/assets/grid3.png"}
              alt={"gird-3"}
              className={"w-full sm:h-[266px] h-fit object-contain"}
            />
            <div>
              <p className={"grid-headtext"}> My passion for development</p>
              <p className={"grid-subtext"}>
                {" "}
                I love building products that solve problems and are cool!{" "}
              </p>
            </div>
          </div>
        </div>
        <div className={"xl:col-span-1 xl:row-span-2"}>
          <div className={"grid-container"}>
            <img
              src={"/assets/grid4.png"}
              alt={"grid4"}
              className={
                "w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
              }
            />
            <div className={"space-y-2"}>
              <p className={"grid-subtext text-center"}>Contact me</p>
              <div className={"copy-container"} onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt={"copy"}
                />
                <p
                  className={
                    "lg:text-2xl md:text-xl font-medium text-gray_gradient text-white"
                  }
                >
                  vinayak00017@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Gen random data
const N = 20;
const arcsData = [...Array(N).keys()].map(() => ({
  startLat: (Math.random() - 0.5) * 180,
  startLng: (Math.random() - 0.5) * 360,
  endLat: (Math.random() - 0.5) * 180,
  endLng: (Math.random() - 0.5) * 360,
  color: [
    ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
    ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
  ],
}));

export default About;

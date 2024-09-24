import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
// import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {
  // const x = useControls("HackerRoom", {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationX: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   scale: {
  //     value: 1,
  //     min: 0.1,
  //     max: 10,
  //   },
  // });
  const isMobile = useMediaQuery({ maxWidth: 900 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isSmall = useMediaQuery({ maxWidth: 600 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className={"relative flex min-h-screen w-full flex-col "}>
      <div
        className={"c-space mx-auto mt-20 flex w-full flex-col gap-3 sm:mt-36"}
      >
        <p
          className={
            "text-center font-generalsans text-2xl font-medium text-white sm:text-3xl"
          }
        >
          Hi, I am Vinayak! <span className={"waving-hand"}>👋</span>
        </p>
        <p className={"hero_tag text-gray_gradient"}>Building cool stuff!</p>
      </div>
      <div className={"absolute inset-0 size-full"}>
        {/*<Leva />*/}
        <Canvas className={"size-full"}>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera
              makeDefault
              position={[0, 0, 20]}
            ></PerspectiveCamera>
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                // position={[x.positionX, x.positionY, x.positionZ]}
                // rotation={[0, 280, 0]}
                // position={isMobile ? [1.5, -2, -1.5] : [2.5, -10, 5]}
                // rotation={[-9, -6, -3.2]}
                rotation={[0.3, -Math.PI, 0]}
                position={sizes.deskPosition}
                scale={sizes.deskScale}
              />
            </HeroCamera>
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition}></ReactLogo>
              <Cube position={sizes.cubePosition}></Cube>
              <Rings position={sizes.ringPosition}></Rings>
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
      <div className={"absolute bottom-7 left-0 right-0 w-full z-10 c-space"}>
        <a href={"#contact"} className="w-fit">
          <Button
            name="let's work together"
            isBeam
            containerClass={"sm:w-fit w-full sm:min-w-96"}
          ></Button>
        </a>
      </div>
    </section>
  );
};
export default Hero;

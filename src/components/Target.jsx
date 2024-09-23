import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Target = (props) => {
  const targetRef = useRef();
  const scene = useGLTF("/models/target.gltf");

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <mesh
      {...props}
      ref={targetRef}
      rotation={[0, Math.PI / 5, 0]}
      position={[0, 0.079, 0.181]}
    >
      <primitive object={scene}></primitive>
    </mesh>
  );
};
export default Target;

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Target = (props) => {
  const targetRef = useRef();
  const { nodes, materials } = useGLTF("/models/target.gltf");

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <group {...props} ref={targetRef}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={1.5}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016.geometry}
          material={materials["Red.025"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016_1.geometry}
          material={materials["White.025"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016_2.geometry}
          material={materials["BrownDark.018"]}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/target.gltf");
export default Target;

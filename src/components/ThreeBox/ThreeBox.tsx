import * as THREE from "three";
import { Canvas, ThreeElements, useFrame } from "@react-three/fiber";
import { useRef } from "react";

type BoxTypes = ThreeElements["mesh"] & {
  checked: boolean;
  isEvenBox: boolean;
};

const Box = (props: BoxTypes) => {
  const ref = useRef<THREE.Mesh>(null!);
  const colorOfBox = (checked: boolean, isEvenBox: boolean): string => {
    if (isEvenBox && checked) {
      return "red";
    }
    if (isEvenBox && !checked) {
      return "orange";
    }

    if (!isEvenBox && checked) {
      return "grey";
    }

    if (!isEvenBox && !checked) {
      return "purple";
    }

    return "white";
  };

  const color = colorOfBox(props.checked, props.isEvenBox);
  useFrame((_, delta) => {
    if (props.isEvenBox) ref.current.rotation.x += delta;
    if (!props.isEvenBox) ref.current.rotation.y -= delta;
  });
  return (
    <mesh {...props} ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export const ThreeBox = ({
  checked,
  isEvenBox,
}: {
  checked: boolean;
  isEvenBox: boolean;
}) => {
  return (
    <Canvas style={{ height: "70px", width: "50px" }}>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box position={[0, 0, 3]} checked={checked} isEvenBox={isEvenBox} />
    </Canvas>
  );
};

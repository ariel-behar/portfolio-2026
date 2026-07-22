import { Suspense } from "react";

import { Environment, Float, PresentationControls, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { Avatar, type ActionName } from "./Avatar";

interface AvatarExperienceProps {
  isInView: boolean;
  animationName: ActionName | "";
}

export function AvatarExperience({ isInView, animationName }: AvatarExperienceProps) {
  useFrame((state) => {
    state.camera.lookAt(0, 0, 0);

    if (state.camera.position.z > 3) {
      state.camera.position.z -= 0.02;
    }

    if (state.camera.position.x > 1) {
      state.camera.position.x -= 0.02;
    }
  });

  return (
    <>
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[0, 0]}
        azimuth={[-1, 0.75]}
        snap={false}
      >
        <Suspense fallback={null}>
          <group position={[0.5, -1, -0.6]}>
            <Avatar isInView={isInView} animationName={animationName} />
          </group>
        </Suspense>
      </PresentationControls>

      <Float rotationIntensity={0.5}>
        <Text
          font="/fonts/bangers-v20-latin-regular.woff"
          fontSize={0.5}
          lineHeight={1.1}
          position={[-0.8, 0.45, -1.5]}
          rotation-y={1.1}
          maxWidth={1.5}
          textAlign="center"
        >
          I ♥ THREE JS
        </Text>
      </Float>

      <Environment preset="warehouse" />
    </>
  );
}

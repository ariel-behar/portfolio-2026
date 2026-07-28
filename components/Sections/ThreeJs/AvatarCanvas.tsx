import { Canvas } from "@react-three/fiber";

import type { ActionName } from "./Avatar";
import { AvatarExperience } from "./AvatarExperience";

interface AvatarCanvasProps {
  animationName: ActionName | "";
  isInView: boolean;
}

export function AvatarCanvas({ animationName, isInView }: AvatarCanvasProps) {
  return (
    <Canvas camera={{ fov: 35, near: 0.1, far: 1000, position: [4, 0.5, 7] }}>
      <AvatarExperience isInView={isInView} animationName={animationName} />
    </Canvas>
  );
}

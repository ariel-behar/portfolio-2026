import * as THREE from "three";
import { useEffect, useMemo, useRef } from "react";
import { useGraph, type ThreeElements } from "@react-three/fiber";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { GLTF, SkeletonUtils } from "three-stdlib";

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

type GLTFResult = GLTF & {
  nodes: {
    Wolf3D_Hair: THREE.SkinnedMesh;
    Wolf3D_Outfit_Top: THREE.SkinnedMesh;
    Wolf3D_Outfit_Bottom: THREE.SkinnedMesh;
    Wolf3D_Outfit_Footwear: THREE.SkinnedMesh;
    Wolf3D_Body: THREE.SkinnedMesh;
    EyeLeft: THREE.SkinnedMesh;
    EyeRight: THREE.SkinnedMesh;
    Wolf3D_Head: THREE.SkinnedMesh;
    Wolf3D_Teeth: THREE.SkinnedMesh;
    Hips: THREE.Bone;
  };
  materials: {
    Wolf3D_Hair: THREE.MeshStandardMaterial;
    Wolf3D_Outfit_Top: THREE.MeshStandardMaterial;
    Wolf3D_Outfit_Bottom: THREE.MeshStandardMaterial;
    Wolf3D_Outfit_Footwear: THREE.MeshStandardMaterial;
    Wolf3D_Body: THREE.MeshStandardMaterial;
    Wolf3D_Eye: THREE.MeshStandardMaterial;
    Wolf3D_Skin: THREE.MeshStandardMaterial;
    Wolf3D_Teeth: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

export type ActionName = "Crouch" | "Idle" | "Wave" | "Salute" | "Dance";

export const animationsNames: ActionName[] = ["Crouch", "Idle", "Wave", "Salute", "Dance"];

interface AvatarProps {
  isInView: boolean;
  animationName?: ActionName | "";
}

export function Avatar({
  isInView,
  animationName = "Idle",
  ...props
}: AvatarProps & ThreeElements["group"]) {
  const { scene } = useGLTF("/models/avatar/avatar.glb");
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone) as unknown as GLTFResult;

  const avatarGroupRef = useRef<THREE.Group>(null);

  const { animations: waving } = useFBX("/animations/avatar/waving.fbx");
  const { animations: idle } = useFBX("/animations/avatar/breathing-idle.fbx");
  const { animations: crouchToStand } = useFBX("/animations/avatar/crouch-to-stand.fbx");
  const { animations: salute } = useFBX("/animations/avatar/salute.fbx");
  const { animations: dance } = useFBX("/animations/avatar/wave-hip-hop-dance.fbx");

  // Clone before renaming — mutating a clip returned directly from useFBX isn't safe
  // (the loader caches/shares that array across mounts).
  const clips = useMemo(() => {
    const named = (clip: THREE.AnimationClip, name: ActionName) => {
      const cloned = clip.clone();
      cloned.name = name;
      return cloned;
    };

    return {
      wave: named(waving[0], "Wave"),
      idle: named(idle[0], "Idle"),
      crouch: named(crouchToStand[0], "Crouch"),
      salute: named(salute[0], "Salute"),
      dance: named(dance[0], "Dance"),
    };
  }, [waving, idle, crouchToStand, salute, dance]);

  const { actions } = useAnimations(
    [clips.crouch, clips.salute, clips.idle, clips.wave, clips.dance],
    avatarGroupRef,
  );

  // isInView gates the very first play — without it the intro sequence would fire
  // the instant the page loads (this project mounts every section immediately,
  // unlike the old site's scroll-triggered lazy-mount cascade that used to provide
  // this gating for free; see Phase 7 plan notes).
  useEffect(() => {
    if (!isInView) return;

    if (!animationName) {
      const crouch = actions["Crouch"]!;
      const salute = actions["Salute"]!;
      const idle = actions["Idle"]!;

      crouch.play();

      const toSalute = setTimeout(() => {
        salute.crossFadeFrom(crouch, 0.5, true).play();
      }, crouch.getClip().duration * 1000 - 500);

      const toIdle = setTimeout(
        () => {
          idle.crossFadeFrom(salute, 0.5, true).play();
        },
        crouch.getClip().duration * 1000 - 500 + (salute.getClip().duration * 1000 - 500),
      );

      return () => {
        clearTimeout(toSalute);
        clearTimeout(toIdle);
      };
    }

    const action = actions[animationName]!;
    const idle = actions["Idle"]!;

    action.reset().fadeIn(0.5).play();

    const toIdle = setTimeout(() => {
      idle.crossFadeFrom(action, 0.5, true).play();
    }, action.getClip().duration * 1000);

    return () => {
      clearTimeout(toIdle);
      action.fadeOut(0.5);
    };
  }, [isInView, animationName, actions]);

  return (
    <group {...props} dispose={null} ref={avatarGroupRef}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
    </group>
  );
}

useGLTF.preload("/models/avatar/avatar.glb");

"use client";

import React, { useRef, useLayoutEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, ContactShadows, PerspectiveCamera, Center, Float } from "@react-three/drei";
import * as THREE from "three";

export function WarehouseScene() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/pallets.glb");
  const { pointer, viewport } = useThree();

  useLayoutEffect(() => {
    // Setup model materials for crisp, natural wood rendering
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          const mat = mesh.material as THREE.MeshStandardMaterial;
          mat.roughness = 0.65;
          mat.metalness = 0.05;
          mat.envMapIntensity = 1.0;
        }
      }
    });
  }, [scene]);

  // Responsive scale: large, prominent and clearly visible in the Hero right column
  const isMobile = viewport.width < 5;
  const baseScale = isMobile ? 0.35 : 0.65;

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Read scroll directly inside animation frame (ZERO React re-renders!)
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const p = totalHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / totalHeight)) : 0;

    // Smooth lerp factor
    const lerpFactor = Math.min(1, delta * 4.0);

    // Target transforms based on scroll phases:
    // Centered in the right column of the Hero (x: 1.35, y: 0.05)
    let targetX = isMobile ? 0 : 1.35;
    let targetY = isMobile ? -0.1 : 0.05;
    let targetZ = 0;
    let rotX = 0.45; // isometric tilt to show top planks and pallet structure clearly
    let rotY = -Math.PI / 4 - 0.2;
    let rotZ = 0;

    if (p < 0.2) {
      // Hero: Prominent in the right column
      const localP = p / 0.2;
      targetX = isMobile ? 0 : 1.35 - localP * 0.2;
      targetY = isMobile ? -0.1 : 0.05;
      rotY = -0.7 + localP * 0.4;
      rotX = 0.45 - localP * 0.05;
    } else if (p < 0.45) {
      // Products: Slides to left
      const localP = (p - 0.2) / 0.25;
      targetX = isMobile ? 0 : 1.15 - localP * 2.5;
      targetY = 0.0;
      rotY = -0.3 + localP * 1.2;
      rotX = 0.4;
    } else if (p < 0.75) {
      // Services: Moves back to right side
      const localP = (p - 0.45) / 0.3;
      targetX = isMobile ? 0 : -1.35 + localP * 2.7;
      targetY = -0.05 + localP * 0.1;
      rotY = 0.8 - localP * 1.5;
      rotX = 0.45;
    } else {
      // About & Contact: Frontal view
      const localP = (p - 0.75) / 0.25;
      targetX = isMobile ? 0 : 1.35 - localP * 0.3;
      targetY = 0.0;
      rotY = -0.6 + localP * 0.4;
      rotX = 0.4;
    }

    // Interactive mouse parallax
    const mouseX = (pointer.x * viewport.width) * 0.05;
    const mouseY = (pointer.y * viewport.height) * 0.03;

    // Apply smooth interpolation
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX + mouseX, lerpFactor);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY + mouseY, lerpFactor);
    groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, targetZ, lerpFactor);

    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, rotX - pointer.y * 0.06, lerpFactor);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, rotY + pointer.x * 0.12, lerpFactor);
    groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, rotZ, lerpFactor);
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 4.0]} fov={40} />

      {/* Industrial Lighting */}
      <ambientLight intensity={2.0} color="#FFFFFF" />

      {/* Key Light */}
      <directionalLight position={[5, 6, 4]} intensity={3.2} color="#FFFFFF" />

      {/* Cobalt branding rim light */}
      <directionalLight position={[-5, 4, -2]} intensity={2.2} color="#38BDF8" />

      {/* Warm Fill Light */}
      <pointLight position={[1, -1, 3]} intensity={1.8} color="#F59E0B" distance={7} />

      {/* Main Pallets Group */}
      <group ref={groupRef} position={[1.35, 0.0, 0]}>
        <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.3}>
          <group scale={baseScale} rotation={[-Math.PI / 2, 0, 0]}>
            <Center>
              <primitive object={scene} />
            </Center>
          </group>
        </Float>

        {/* Soft Contact Shadow beneath the pallets */}
        <ContactShadows
          frames={1}
          position={[0, -0.65, 0]}
          opacity={0.65}
          scale={5.5}
          blur={1.8}
          far={3.0}
          color="#020817"
        />
      </group>
    </>
  );
}

useGLTF.preload("/models/pallets.glb");


import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, PerspectiveCamera, Text, Float } from '@react-three/drei';
import { Vector3, Euler } from 'three';

// 3D cube component
const Cube = ({
  position = [0, 0, 0] as [number, number, number],
  rotation = [0, 0, 0] as [number, number, number],
  size = 1,
  color = "#4285F4",
  wireframe = false,
  hoverColor = "#5C9CFF",
  animate = true,
}) => {
  const meshRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current && animate) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial 
        color={hovered ? hoverColor : color} 
        wireframe={wireframe}
        roughness={0.3}
        metalness={0.5}
      />
    </mesh>
  );
};

// 3D floating text
const FloatingText = ({ text, position = [0, 0, 0] as [number, number, number], color = "white", size = 1 }) => {
  return (
    <Float
      speed={2}
      rotationIntensity={0.2}
      floatIntensity={0.5}
      position={position}
    >
      <Text
        color={color}
        fontSize={size}
        maxWidth={10}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        font="/fonts/Inter-Bold.woff"
      >
        {text}
      </Text>
    </Float>
  );
};

// Main 3D Model Scene
export const Model = ({ position = [0, 0, 0] as [number, number, number], autoRotate = true }) => {
  const groupRef = useRef(null);

  // Create cubes with different sizes and positions
  const cubes = [
    { position: [0, 0, 0] as [number, number, number], size: 1.2, color: "#4285F4", wireframe: false },
    { position: [2, 1, -1] as [number, number, number], size: 0.8, color: "#FBBC05", wireframe: false },
    { position: [-2, -0.5, 1] as [number, number, number], size: 0.6, color: "#34A853", wireframe: false },
    { position: [1, -2, 0.5] as [number, number, number], size: 0.9, color: "#EA4335", wireframe: false },
    { position: [-1.5, 1.5, -0.5] as [number, number, number], size: 0.7, color: "#5F6368", wireframe: true },
  ];

  useFrame((state, delta) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {cubes.map((cube, index) => (
        <Cube
          key={index}
          position={cube.position}
          size={cube.size}
          color={cube.color}
          wireframe={cube.wireframe}
        />
      ))}
    </group>
  );
};

interface ThreeSceneProps {
  className?: string;
  modelType?: "cubes" | "text" | "mixed";
  autoRotate?: boolean;
  showControls?: boolean;
  minimalScene?: boolean;
  interactive?: boolean;
  cameraPosition?: [number, number, number];
}

// Main ThreeScene component
const ThreeScene: React.FC<ThreeSceneProps> = ({
  className = "",
  modelType = "cubes",
  autoRotate = true,
  showControls = true,
  minimalScene = false,
  interactive = true,
  cameraPosition = [0, 0, 5],
}) => {
  return (
    <div className={`${className} w-full h-full min-h-[300px]`}>
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={cameraPosition} fov={50} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        {modelType === "cubes" && <Model autoRotate={autoRotate} />}
        {modelType === "text" && <FloatingText text="Developer" position={[0, 0, 0]} size={1} />}
        {modelType === "mixed" && (
          <>
            <Model position={[0, -1, 0]} autoRotate={autoRotate} />
            <FloatingText text="< Developer />" position={[0, 1.5, 0]} size={0.6} />
          </>
        )}

        {!minimalScene && <Environment preset="city" />}
        {interactive && showControls && <OrbitControls enableZoom={interactive} />}
      </Canvas>
    </div>
  );
};

export default ThreeScene;

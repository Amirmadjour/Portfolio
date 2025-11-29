"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";

function ScrollingCylinderText({ text = "HELLO WORLD • " }) {
  const group = useRef();
  const radius = 15;
  const rotationSpeed = 0.15;
  const fontSize = 7;
  
  // Split text into individual characters
  const characters = Array.from(text);
  const totalChars = characters.length;

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y -= delta * rotationSpeed; // rotation speed
    }
  });

  return (
    <group ref={group}>
      {characters.map((char, i) => {
        // Calculate angle for each character to wrap around the cylinder
        const angle = (i / totalChars) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        return (
          <Text
            key={i}
            fontSize={fontSize}
            color="black"
            fontWeight="bold"
            fontFamily="poppins"
            position={[x, 0, z]}
            rotation={[0, -angle - Math.PI / 2, 0]}
            anchorX="center"
            anchorY="middle"
          >
            {char === " " ? "\u00A0" : char}
          </Text>
        );
      })}
    </group>
  );
}

export default function TextCylinder({ text = "MADJOUR AMIR" }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center">
        <h1 className="text-[14.6vw] md:text-[10vw] lg:text-[8vw] font-bold text-black">
          {text}
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <ScrollingCylinderText text={text + "•"} />
      </Canvas>
    </div>
  );
}

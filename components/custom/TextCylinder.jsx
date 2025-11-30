"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import { useScroll, useMotionValueEvent, useMotionValue, useSpring } from "framer-motion";

function ScrollingCylinderText({ text = "HELLO WORLD • ", scrollVelocity }) {
  const group = useRef();
  const radius = 15;
  const baseRotationSpeed = 0.15;
  const fontSize = 7;
  
  // Split text into individual characters
  const characters = Array.from(text);
  const totalChars = characters.length;

  useFrame((state, delta) => {
    if (group.current) {
      // Get current scroll velocity value
      const velocity = scrollVelocity ? scrollVelocity.get() : 0;
      // Calculate rotation speed: base speed + scroll velocity
      // Negative velocity (scroll up) reverses direction, positive (scroll down) speeds up
      const rotationSpeed = baseRotationSpeed + velocity;
      group.current.rotation.y -= delta * rotationSpeed;
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
  const { scrollY } = useScroll();
  const scrollVelocity = useMotionValue(0);
  const smoothedVelocity = useSpring(scrollVelocity, { 
    stiffness: 300, 
    damping: 30 
  });
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const delta = latest - lastScrollY.current;
    
    // Update scroll velocity (positive = scroll down, negative = scroll up)
    scrollVelocity.set(delta * 0.1); // Scale the velocity
    lastScrollY.current = latest;

    // Reset velocity to 0 after scroll stops
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    scrollTimeout.current = setTimeout(() => {
      scrollVelocity.set(0);
    }, 150);
  });

  useEffect(() => {
    return () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
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
        <ScrollingCylinderText text={text + "•"} scrollVelocity={smoothedVelocity} />
      </Canvas>
    </div>
  );
}

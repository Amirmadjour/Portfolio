"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import { useScroll, useMotionValueEvent, useMotionValue, useSpring } from "framer-motion";
import { useViewport } from "@/hooks/useViewport";

function ScrollingCylinderText({ text = "HELLO WORLD", scrollVelocity }) {
  const group = useRef();
  const { width } = useViewport();
  const radius = width > 768 ? 15 : 0.15;
  const baseRotationSpeed = 0.15;
  const fontSize = width > 768 ? 2.9 : 0.01;
  
  const characters = Array.from(text);
  const totalChars = characters.length;

  useFrame((state, delta) => {
    if (group.current) {
      const velocity = scrollVelocity ? scrollVelocity.get() : 0;
      const rotationSpeed = baseRotationSpeed + velocity;
      group.current.rotation.y -= delta * rotationSpeed;
    }
  });

  return (
    <group ref={group}>
      {characters.map((char, i) => {
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

export default function TextCylinder({ text = "MVP · WEB & APP DEVELOPMENT · FULL STACK DEVELOPER · " }) {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const scrollVelocity = useMotionValue(0);
  const smoothedVelocity = useSpring(scrollVelocity, { 
    stiffness: 100, 
    damping: 10 
  });
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);
  const { width } = useViewport();
  const position = width > 768 ? [0, 0, 15] : [0, 0, 0];

  useEffect(() => {
    setMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const delta = latest - lastScrollY.current;
    
    scrollVelocity.set(delta * 0.1);
    lastScrollY.current = latest;

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
      <Canvas camera={{ position, fov: 50 }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <ScrollingCylinderText text={text} scrollVelocity={smoothedVelocity} />
      </Canvas>
    </div>
  );
}

"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { SparklesIcon } from "@heroicons/react/24/solid";

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: { x: number; y: number; radius: number; speedX: number; speedY: number }[] =
      [];
    const numParticles = 100;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles.length = 0; // Clear existing particles
      for (let i = 0; i < numParticles; i++) {
        const radius = Math.random() * 2 + 1;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = (Math.random() - 0.5) * 0.5;
        const speedY = (Math.random() - 0.5) * 0.5;
        particles.push({ x, y, radius, speedX, speedY });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Reposition particles if they go off screen
        if (particle.x < 0 || particle.x > canvas.width) particle.x = Math.random() * canvas.width;
        if (particle.y < 0 || particle.y > canvas.height) particle.y = Math.random() * canvas.height;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen bg-[#1E152A] flex flex-col lg:flex-row items-center justify-center px-6 sm:px-16 max-lg:pt-40 max-md:pt-12 max-sm:pt-10"
    >
      {/* Canvas for Stars */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-[0] pointer-events-none"
      ></canvas>

      {/* Contenu du texte */}
      <div className="max-w-xl space-y-6 text-center lg:text-left lg:mr-12">
        <div className="inline-flex items-center px-6 py-3 bg-purple-900/50 text-white rounded-full shadow-lg">
          <SparklesIcon className="h-5 w-5 text-purple-300 mr-3" />
          <p className="font-semibold text-lg leading-none">
            Daveena Seeneevassen <span className="max-sm:hidden">- </span><span className="sm:hidden"><br /></span>Frontend Developer
          </p>
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight fade-in">
          Providing <span className="text-gradient">the best</span> project experience
        </h1>

        <a
          href="#projects"
          className="mt-4 inline-block px-8 py-3 bg-purple-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-purple-700 transition"
        >
          See My Work
        </a>
      </div>

      {/* Image à droite */}
      <div className="mt-6 lg:mt-0 lg:ml-12">
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={600}
          width={600}
          priority
          className="mx-auto w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px]"
        />
      </div>
    </section>
  );
};

export default Hero;

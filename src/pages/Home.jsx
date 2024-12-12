import { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import { introduction } from '../assets/data';

const Home = () => {
  const typeTarget = useRef(null);

  useEffect(() => {
    if (!typeTarget.current) return;

    const typewriter = new Typewriter(typeTarget.current, {
      loop: true,
      delay: 50,
      deleteSpeed: 5
    });

    typewriter
      .typeString('full-stack developer and AI enthusiast')
      .pauseFor(1000)
      .deleteAll()
      .pauseFor(500)
      .typeString('passionate about LLMs and Data-Driven Solutions')
      .pauseFor(1000)
      .deleteAll()
      .pauseFor(500)
      .typeString('send me a message and lets connect!')
      .pauseFor(1000)
      .deleteAll()
      .pauseFor(500)
      .typeString('thanks for visiting!')
      .pauseFor(1000)
      .deleteAll()
      .start();

    return () => {
      typewriter.stop();
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-4 md:px-24">
      <div className="text-center md:text-left">
        <h1 className="text-5xl md:text-7xl lg:text-8xl mb-5">
          <span className="text-lightGrey">hi, I&apos;m </span>
          <span className="text-cyan">Arij Ashar</span>
        </h1>
        <p ref={typeTarget} className="text-lightGrey text-lg md:text-xl lg:text-2xl h-8"></p>
        <div className="text-left text-darkGrey mt-12 max-w-3xl text-lg md:text-xl space-y-5">
          <p>{introduction.part1}</p>
          <p>{introduction.part2}</p>
        </div>
      </div>
    </section>
  );
};

export default Home;

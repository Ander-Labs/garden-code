import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/home/hero"));
const About = dynamic(() => import("@/components/home/about"));

export default function Home() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}

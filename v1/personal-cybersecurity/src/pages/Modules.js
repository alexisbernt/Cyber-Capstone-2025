import Hero from "../components/layout/home/Hero";
import Features from "../components/layout/home/Features";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      {/* <Header /> */}
      <main>
        <Hero />
        <Features />
      </main>
    </div>
  );
}
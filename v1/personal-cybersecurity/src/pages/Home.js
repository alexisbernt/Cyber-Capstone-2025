import Header from "../components/Header";

import Hero from "../components/layout/home/Hero";
// import Features from "./components/home/Features";
import ProductShowcase from "../components/layout/home/ProductShowcase";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main>
        <Hero />
        {/* <Features /> */}
        <ProductShowcase />
      </main>
    </div>
  );
}
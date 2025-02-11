import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import ProductShowcase from "@/components/home/ProductShowcase";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <ProductShowcase />
      </main>
    </div>
  );
}
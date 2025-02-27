
import Hero from "../components/layout/home/Hero";
import Features from "../components/layout/home/Features";
import ProductShowcase from "../components/layout/home/ProductShowcase";
import SignUpPage from "./Pricing";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      {/* <Header /> */}
      <main>
        <Hero />
        <Features />
        <ProductShowcase />
        <SignUpPage />
      </main>
    </div>
  );
}
import Hero from "../../components/layout/home/Hero";
import Features from "../../components/layout/home/Features";

export default function Module1() {
  return (
    <div className="bg-black min-h-screen">
      {/* <Header /> */}
      <main>
        {/* Banner Image */}
      <div className="w-full">
        <img 
          src="/module1_banner.png" 
          alt="Banner"  
          style={{ width: "100%", height: "345px", objectFit: "cover" }} 
        />
        <Hero />
        <Features />
      </div>
      </main>
      </div>
  );
}
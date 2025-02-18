// import Header from "../components/Header";
import Hero from "../components/layout/home/Hero";
import Features from "../components/layout/home/Features";
import ProductShowcase from "../components/layout/home/ProductShowcase";
import '../App.css';
import { useState } from "react";


export default function Home() {
  const [name, setName] = useState('');

  fetch("http://localhost:3001/").then((results) => {
    results.json().then((j) => {
      setName(j.name);
    });
  });

  return (
    <div className="bg-black min-h-screen">
      {name}
      {/* <Header /> */}

      {/* Banner Image */}
      <div className="w-full">
      <img src="/banner_lcc.png" alt="Banner"  
      style={{ width: "100%", height: "300px", objectFit: "cover" }} />
      </div>

      <main>
        <Hero />
        <Features />
        <ProductShowcase />
      </main>
    </div>
  );
}

import React from "react";
import headerImage from "./blog-photos/header-image.png";
import auntTana from "./blog-photos/aunt-tana.png";
import auntTanaQ from "./blog-photos/aunt-tana-question.png";

const BlogPage1 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-6">Why Trunks?</h1>
      
      {/* Header Image */}
      <div className="w-full flex justify-center mb-6">
        <img 
          src={headerImage} 
          alt="Elephant Header" 
          className="w-3/4 h-60 object-cover rounded-lg shadow-md"
        />
      </div>
      
      <p className="text-lg text-gray-700 mb-6">
        <strong>Cybersecurity is important for businesses and electronic devices, but how does cyber security play a role in our personal lives? That's what the website is all about: This site is helping us improve our personal cybersecurity skills and protecting us from potential threats online.</strong>
        <br />
        …
        <br />
        This is Aunt Tana:
      </p>
      
      {/* Blog Content Images */}
      <div className="w-full flex justify-center mb-6">
        <img 
          src={auntTana} 
          alt="Aunt Tana" 
          className="w-3/4 h-60 object-cover rounded-lg shadow-md"
        />
      </div>
      
      <p className="text-lg text-gray-700 mb-6">
        …
        <br />
        Let’s start by defining elephants:
      </p>
      
      <div className="w-full flex justify-center mb-6">
        <img 
          src={auntTanaQ} 
          alt="Aunt Tana Questioning" 
          className="w-3/4 h-60 object-cover rounded-lg shadow-md"
        />
      </div>
      
      <p className="text-lg text-gray-700">
        Elephants are the great mammal.
      </p>
    </div>
  );
};

export default BlogPage1;

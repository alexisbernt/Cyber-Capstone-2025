import React from "react";
import auntTana from "./blog-photos/aunt-tana.png";
import auntTanaQ from "./blog-photos/aunt-tana-question.png"

const BlogPage1 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-4">Why Learn Cybersecurity?</h1>
      <div className="w-full h-64 bg-gray-300 flex items-center justify-center mb-4">
        <span className="text-gray-600">Image Placeholder</span>
      </div>
      <p className="text-lg text-gray-700 mb-4">
        <strong>Cybersecurity is important for businesses and electronic devices, but how does cyber security play a role in our personal lives? That's what the website is all about: This site is helping us improve our personal cybersecurity skills and protecting us from potential threats online.</strong>
        <br />
        … 
        <br />
        This is Aunt Tana:

      <img 
        src= {auntTana} // Adjust path based on your project structure
        alt="Aunt Tana" 
        className="w-full h-auto rounded-lg shadow-md mb-4"
      />
      …
      Let’s start by defining cybersecurity for Aunt Tana: 
      Cybersecurity is what secures our digital components, networks, data, and computer systems from unauthorized access. 
      Okay, that definition isn’t super helpful for Aunt Tana. 
      
      <img 
        src= {auntTanaQ} // Adjust path based on your project structure
        alt="Aunt Tana Questioning" 
        className="w-full h-auto rounded-lg shadow-md mb-4"
      />
      
      She doesn’t know what digital components are. So let’s break-down that definition a little bit. 
      Basically, cybersecurity is making sure the bad guys don’t get access to the digital information they should not have access to. These “bad guys” can scrape a ton of our personal data from online, or, through our devices. This information the bad guys tend to try and get include things like our credit card numbers, account passwords, and even social security numbers. The scary thing is that our personal information is not only vulnerable when we’re taking a picture of our social security card to be sent (bad by the way) or entering a credit card number into our computer in a public coffee shop (also a bad move), our personal information is vulnerable when we connect to a WiFi network or even when we save a private picture into a folder in our email inbox. 

      I’m learning along the way too so all of the learning sources I use will be linked. Please join the email list to get a once a month (seriously only once a month) email about some “personal cyber security hacks.” If learning some about cybersecurity alone isn’t enough of a benefit, some reasons you should join the cybersecurity club include:
      (1) Having personal cybersecurity skills saves you. When you protect yourself from cyber threats, you save yourself from the risk of a massive headache and/or stolen money. 
      (2) You get a cyber comic once a month. These lessons are meant to be fun and short. Yes, they are informational and will equip you with the skills you need to personally succeed when it comes to your cybersecurity, but they also include pictures and the possibility for cybersecurity club conversations. 
      (3) It’s free. All you need is an email address and a username. That is how you get notified that a new cybersecurity club hack has been posted. 

      </p>
    </div>
  );
};

export default BlogPage1;

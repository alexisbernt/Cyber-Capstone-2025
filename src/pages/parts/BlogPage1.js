import React from "react";
import headerImage from "./blog-photos/header-image.png";
import auntTana from "./blog-photos/aunt-tana.png";
import auntTanaQ from "./blog-photos/aunt-tana-question.png";

const BlogPage1 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-6">Why Learn Cybersecurity?</h1>
      
      {/* Header Image */}
      <div className="w-full flex justify-center mb-6">
        <img 
          src={headerImage} 
          alt="Blog 1 Header" 
          className="w-3/4 h-60 object-cover rounded-lg shadow-md"
        />
      </div>
      
      <p className="text-lg text-gray-700 mb-6">
        <strong>Cybersecurity is important for businesses and electronic devices, but how does cyber security play a role in our personal lives? </strong>
        <br />
        <br />
        <strong>That's what the website is all about: This site is helping us improve our personal cybersecurity skills and protecting us from potential threats online.</strong>
        <br />
        <strong> ... </strong>
        <br />
        <br />
        <strong> This is Aunt Tana: </strong>
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
        <strong>...</strong>
        <br />
        <strong>Let's start by defining cybersecurity for Aunt Tana: </strong>
        <br />
        <br />
        <strong>Cybersecurity is what secures our digital components, networks, data, and computer systems from unauthorized access. </strong>
        <br />
        <br/> 
        <strong> ... </strong>
        <strong>Okay, that definition isn’t super helpful for Aunt Tana. She doesn’t know what digital components are. So let’s break-down that definition a little bit. </strong>
      </p>
      
      <div className="w-full flex justify-center mb-6">
        <img 
          src={auntTanaQ} 
          alt="Aunt Tana Questioning" 
          className="w-3/4 h-60 object-cover rounded-lg shadow-md"
        />
      </div>
      
      <p className="text-lg text-gray-700">
        <strong>Basically, cybersecurity is put in place to make sure the "bad guys" don’t get access to the digital information they should NOT have access to. </strong>
        <br /> 
        <strong> These “digital bad guys” can scrape a ton of our personal data from online, or, through our devices. </strong>
        <br />
        <strong> This information the "digital bad guys" tend to try and get include things like our credit card numbers, account passwords, and even social security numbers. </strong>
        <br />
        <strong> The scary thing is that our personal information is not only vulnerable when we’re taking a picture of our social security card to be sent (*bad idea by the way*), or entering our credit card number into our computer while in a public coffee shop (*also a bad move*), our personal information is vulnerable when we connect to a WiFi network or even when we save a private picture to a folder linked to our email. </strong>
        <br />
        <strong>I’m learning along the way too so all of the learning sources I use will be linked. </strong>
        <br />
        <strong> Please join the email list to get a once a month (seriously *only* once a month) email about some “personal cyber security hacks.” </strong>
        <br />
        <strong> If learning about personal cybersecurity doesn't automatically jump out to you, some reasons you should join the cybersecurity club include:</strong>
        <br />
        <strong>(1) Having personal cybersecurity skills saves you. When you protect yourself from cyber threats, you save yourself from the risk of a massive headache and/or stolen money. </strong>
        <br />
        <strong> (2) You get a cyber comic once a month. These lessons are meant to be fun and short. Yes, they are informational and will equip you with the skills you need to personally succeed when it comes to your cybersecurity, but they also include pictures and the possibility for cybersecurity club conversations. </strong>
        <br />
        <strong> (3) It’s free. All you need is an email address and a username. That is how you get notified that a new cybersecurity club hack has been posted. </strong>
      </p>
    </div>
  );
};

export default BlogPage1;

import React from "react";
import headerImage from "./blog-photos/image5.png";
import LinkedInImage from "./blog-photos/linkedin-phishing.png";
import PhishingImage from "./blog-photos/phishing-img.png";
import PhishingComic from "./blog-photos/phishing-comic.png";

const BlogPage2 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-6">Phishing In The Dark (Web)</h1>
      
      {/* Header Image */}
      <div className="w-full flex justify-center mb-6">
        <img 
          src={headerImage} 
          alt="Blog 1 Header" 
          className="w-3/4 h-60 object-cover rounded-lg shadow-md"
        />
      </div>
      
      <p className="text-lg text-gray-700 mb-6">
        <strong>The other day I posted on my LinkedIn profile that I had accepted a new job. Super exciting!  </strong>
        <br />
        <br />
        <strong>Exactly 17 hours 27 minutes and 14 seconds later I got an email:
LinkedIn Security: “Alexis your password was successfully reset.” 
</strong>
        <br />
        <strong> ... </strong>
        <br />
        <br />
        <strong> Here is the image: </strong>
        <br />
      </p>
      
      {/* Blog Content Images */}
      <div className="w-full flex justify-center mb-6">
        <img 
          src={LinkedInImage} 
          alt="LinkedIn Email" 
          className="w-3/4 h-60 object-cover rounded-lg shadow-md"
        />
      </div>
      
      <p className="text-lg text-gray-700 mb-6">
        <strong>...</strong>
        <br />
        <strong>Thing is - I wasn’t the one to change my password. The only thing I had done on my LinkedIn profile was create a post. I worried that, after creating the post, someone had hacked into my account.</strong>
        <br />
        <br />
        <strong>I automatically clicked “change your password” in an attempt to prevent any further damage. </strong>
        <br />
        <br/> 
        <strong> ... </strong>
        <strong>That’s when I came to the bright screen of doom: </strong>
      </p>
      
      <div className="w-full flex justify-center mb-6">
        <img 
          src={PhishingImage} 
          alt="Phishing Online Image" 
          className="w-3/4 h-60 object-cover rounded-lg shadow-md"
        />
      </div>
      
      <p className="text-lg text-gray-700">
        <strong>I’d fallen victim to not just a phishing scam, but a TESTING phishing scam. Although embarrassing, I thanked the cyber gods for my luck in not becoming a victim to an ACTUAL phishing scam. </strong>
        <br /> 
        <strong> According to StationX, 3.4 billion emails are sent by cybercriminals every day. My fake phishing scam incident led me to investigate cyber attacks.  </strong>
        <br />
        <strong> There are different cyber attacks. To understand cybersecurity, one must understand cyberattacks.  </strong>
        <br />
        <strong> You might be thinking: ‘Learning about cyberattacks sounds time consuming and boring.’ 
Well, don’t worry, I take care of the research and provide the things you need to know (just the essentials) about cyberattacks. 
 </strong>
        <br />
        <strong>Some examples of cyberattacks include malware attacks, phishing attacks, man-in-the-middle attacks, and password attacks. Today we focus on phishing attacks.  </strong>
        <br />
        <strong> A phishing attack is very different from fishing. Phishing with a “ph” happens online. Fishing with a big “F” happens outside. In this case, we like fishing with a big “F” more. When attackers go phishing with a “ph” they send emails or text messages. So it all starts with an online outreach. </strong>
        <br />
        <strong> Def Phishing = Where attackers (who tend to be cyber criminals) send emails, text messages, or an alternative form of digital correspondence that contain links to dangerous websites which seek to exploit people. </strong>
        <br />
        <strong>These “dangerous websites” have malware which can hurt people or organizations. This malware can put a person’s identity at risk. </strong>
        <br />
        <strong> Def Malware = A program or file that's intentionally harmful or exploiting a computer, network, or server. </strong>
        <br />
        <strong> Phishing comes in various forms. Sometimes a phishing attack comes through a mass email chain that gets sent to millions of inboxes. Sometimes phishing emails are customized to a certain individual because the attacker hopes to gain specific information. When an attacker hopes to gain specific information it is called Spear Phishing.  </strong>
      </p>
      {/* Blog Content Images */}
      <div className="w-full flex justify-center mb-6">
        <img 
          src={PhishingComic} 
          alt="Phishing Comic" 
          className="w-3/4 h-60 object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default BlogPage2;

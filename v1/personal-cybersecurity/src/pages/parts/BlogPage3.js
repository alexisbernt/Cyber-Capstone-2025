import React from "react";
import headerImage from "./blog-photos/image5.png";
import LinkedInImage from "./blog-photos/linkedin-phishing.png";
import PhishingImage from "./blog-photos/phishing-img.png";
import PhishingComic from "./blog-photos/phishing-comic.png";

const BlogPage3 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-6">Phishing In The Dark (Web)</h1>
      
      {/* Header Image */}
      <div className="w-full flex justify-center mb-6">
        <img 
          src={headerImage} 
          alt="Blog 3 Header" 
          className="w-3/4 h-60 object-cover rounded-lg shadow-md"
        />
      </div>
      
      <p className="text-lg text-gray-700 mb-6">
        <strong>Recently a little brochure from Wells Fargo came in the mail. Most of these brochures probably get thrown out. This one is important though.</strong>
        <br />
        <br />
        <br />
        <strong> ... </strong>
        <br />
        <br />
        <strong> Here is the important content about protecting your banking information from cyber threats: </strong>
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
        <strong>Staying on top of your account security. By Wells Fargo. A summary.</strong>
        <br />
        <br />
        <strong>Spot the red flags of a scam. If contact is unexpected, asking for unusual payment, using threatening language, or making everything seem urgent, a "scam" red flag should pop up in your mind. </strong>
        <br />
        <br/> 
        <strong> ... </strong>
        <strong>If a message is asking for payment via giftcard, with prepaid card, using cryptocurrency, or using wire transfer / a payment app, be EXTRA CAUTIOUS. </strong>
      </p>
      
      <div className="w-full flex justify-center mb-6">
        <img 
          src={PhishingImage} 
          alt="Phishing Online Image" 
          className="w-3/4 h-60 object-cover rounded-lg shadow-md"
        />
      </div>
      
      <p className="text-lg text-gray-700">
        <strong>Some Common Scams To Look For: </strong>
        <br /> 
        <strong> The check scam: Someone asking you to cash a check and send back a portion of the deposit. </strong>
        <br />
        <strong> The Family Member Scam: When a fraudster identifies themself as your friend, family member, or partner. Now fraudsters can use AI to help them do this.  </strong>
        <br />
        <strong> Imposter Scam: When a scammer acts like they are your bank, the IRS, or another reputable organization to try and derive your personal information.
 </strong>
        <br />
        <strong>How To Stay Safe From A Scam:  </strong>
        <br />
        <strong> Guard your information: Use Two-Factor Authentication. Don't share your password or PINs. Also don't trust Caller ID. Be cautious before spending your money. Make sure that the request / transaction is accurate.</strong>
        <br />
        <strong> MORE Ways To Guard Your Information: Never allow remote access to your computer. Don't let someone trick you into offering you a "refund" or to "help remove a virus." Don't engage with links, downloads, or information that is unexpected. If you have a doubt, reach out to your bank or organization to see if something is legit.</strong>
        <br />
        <strong>Taking Action: Research [Organization Name] + "Security Center" to check on security status and to see what measure you can take to protect your account(s).</strong>
        <br />
        <strong>With banks and finances, watch for any changes to your credit report. A reccommendation is to enroll in Credit Close-Up. </strong>
        <br />
        
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

export default BlogPage3;
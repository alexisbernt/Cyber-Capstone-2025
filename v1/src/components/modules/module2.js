import Hero from "../../components/layout/home/Hero";
import Features from "../../components/layout/home/Features";
import DragDropGame from "../ui/DragDrop";
import GridPattern from "../patterns";
import { useNavigate } from "react-router-dom";
import Divider from "../ui/divider-pattern";
import Booklet2 from "../ui/BookletMod2";
import MultipleChoiceGame from "../ui/MultipleChoice";
import RevealCard from "../../reveal";
import SeparatorCard from "../../separatorCard";
import ThinCard from "../../ThinCard";

// Banner Component
const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <img 
        src="/module-2.png" 
        alt="Banner"  
        style={{ width: "100%", height: "705px", objectFit: "cover", cursor: "pointer" }} 
        onClick={() => navigate("/blog/why-cybersecurity")}
      />
    </div>
  );
};
export default function Module2() {
  return (
    // The Header Section
    <div className="bg-black min-h-screen">
      <main>
        {/* Banner Image */}
        <div className="w-full">
          <img 
            src="/module2_banner.png" 
            alt="Banner"  
            style={{ width: "100%", height: "405px", objectFit: "cover" }} 
          />
      </div>

    {/* Divider of Text Section */}
    <div style={{ width: '100%' }}>
      <SeparatorCard
        imageUrl="/enforce.png"
        imageAlt="Wide Graphic"
        titleText="Welcome to Cybersecurity Personal Learning Module #2!"
        paragraphText="There are many things that leave you susceptible to attacks via technology. You are always a liability when you use technology. In this module we make sure your risk is reduced through using strong passwords."
      />
    </div>

    {/* <GridPattern /> */}

    <div className="card-row">
      {/* Left-side Card */}
      <div className="card-wrapper2">
        <RevealCard
          imageUrl="/rocks.png"
          imageAlt="Encryption Image"
          titleText="Weak passwords"
          revealInfo="A weak password is one that is easy for others to guess or crack, often because it’s short, uses common words or patterns, or lacks a mix of letters, numbers, and symbols. 
          Instead, you want to create unique passwords that are 12 to 18 characters in length."
        />
      </div>

      {/* Middle-side Card */}
      <div className="card-wrapper2">
        <RevealCard
          imageUrl="/field.png"
          imageAlt="Middle Image"
          titleText="No back-up system"
          revealInfo="A backup system is a method of copying and storing important files, passwords, or system data in a separate location to protect against data loss. 
          It makes sure that information can be recovered in case of hardware failure, accidental deletion, or cyberattacks."
        />
      </div>

      {/* Right-side Card */}
      <div className="card-wrapper2">
        <RevealCard
          imageUrl="/flowers.png"
          imageAlt="Encryption Image"
          titleText="Left On Open"
          revealInfo="Leaving your computer, laptop, device on open (unattended) when you leave a room is dangerous.
           Someone could easily access your files, steal personal information, or install malicious software without your knowledge."
        />
      </div>
    </div>

    {/* Divider of Text Section */}
    <div className="flex items-center justify-center py-6">
              <h1 className="text-6xl font-extrabold font-[Poppins] text-center text-white">
                <br/> <br/>
                Some answers to the password puzzle: 
                <br/> 
              </h1>
            </div>
    
            <Divider/>

      {/* Flex Container for Left Image & Right Content Section */}
      <div className="split-container">
        {/* Left-side Image */}
        <div className="split-left">
          <img 
            src="/bitwarden-computer.png"  
            alt="Left-side Image"  
            className="split-image"
          />
        </div>

        {/* Right-side Hero Section */}
        <div className="split-right">
        <p>
        <h2>Passwords are #hashed.</h2> <br />
          To understand why having a "good" password matters let's understand some of the tech-y stuff.
          <br/><br/> Let's start with - What does hashed mean? <br/>Having hashed passwords means that we use a cryptographic algorithm.
          This basically means the original password is turned into a random-looking string (the hash) using a special math formula. 
          <br/> <br/> This process only goes one way, so no one can easily retrieve the password (turn the hash back into the real password)
          from the hash.
          Then, when a user logs in, the system hashes the entered password and
          checks if it matches the stored hash.
          The more characters in a password, the more possible combinations
          exist, making it harder to crack.
        </p>
        </div>
      </div>

      {/* Flex Container for Left Image & Right Content Section */}
      <div className="split-container">
        {/* Left-side Content */}
        <div className="split-left">
        <p>
        <h2>Selecting a Good Password.</h2> <br />
        The more characters in a password, the more possibility of combinations. <br/>
        You want to create passwords that are 12 to 18 characters in length. That's a lot of characters per password, and you don't want to use the same password for each login.
        <br/> <br/> This means that for better password protection and management, 
        it is recommended to use a password manager. 
        <br/> <br/> A common password manager is Bitwarden. 
        Bitwarden is suitable on phones and computers (basically any device that you want to use).
        </p>
        </div>

        {/* Right-side Image Section */}
        <div className="split-right">
        <img 
            src="/bitwarden-phone.png"  
            alt="Left-side Image"  
            className="split-image"
          />
        </div>
      </div>

      <div style={{ width: '100%' }}>
        <ThinCard
          titleText="Using Bitwarden to protect passwords: "
          />
      </div>

      {/* Flex Container for Left Video Text Descriptor & Right Video*/}
      <div className="split-container">
        {/* Left-side Image/Text */}
        <div className="split-left">
          <p>
          <h2>Securing your stuff.</h2> <br />
          <br/> For better password protection and management, it is recommended to use a password manager. A common password manager is Bitwarden. Bitwarden is suitable on phones and computers (basically any device that you want to use).<br/>
          <br/>I was experiencing rejection and thought, “Well, it’d be nice to reject something in return.” So, I started rejecting hackers—with Bitwarden.
          </p>
        </div>
        {/* Right-side Video (Booklet) Section */}
        <div className="split-right2">
          <Booklet2/>
        </div>
      </div>
      
      <div style={{ width: '100%' }}>
        <SeparatorCard
          imageUrl="/bitwarden-infographic.png"
          imageAlt="Bitwarden Graphic"
          titleText="The Bitwarden Roadmap"
          paragraphText="Here’s how you can incorporate Bitwarden into your daily life.
1. Create your account: https://vault.bitwarden.com/#/signup 
2. Login: https://vault.bitwarden.com/#/login 
3. Get familiar with “The Vault”
The Vault is essentially your home screen / dashboard.
4. The blue column on the left side of your screen is what you can think of as the “Overhead Navigation.” Your Overhead Navigation takes you to the general things that Bitwarden can do. 
On Overhead Navigation: Vaults, Send, Tools, Reports, Settings, and additional Premium Features.
Vaults allows you to safely store data which can be passwords, secret notes, credit cards, and more.
5. Go to “Login” 
Login is the main component I recommend to use to safely store your passwords.
6. Click the Blue “+ New” Button in the top right corner
7. Select “New Login”
8. Create The Item
“Item Name” will be what you want to label the saved information as
Enter Username
Enter Password
Create an Authenticator Key (if you would like). An Authenticator Key is an extra layer of security (a pin) that you would enter to confirm you would like to see or enter the password.
Link the item to a website (if you would like).
Add any additional notes (if you would like).
9. Require your Master Password to be entered before accessing the information. This is an extra layer of security (if you would like). 
10. Save
Reload the page and you should see your saved password information!
Repeat for each password you want to remember and protect. "
        />
      </div>

        <GridPattern />
        <MultipleChoiceGame/>
        {/* Final Banner Image */}
        <div className="w-full">
          <img 
            src="/bottom-banner.png" 
            alt="Cybersecurity"  
            style={{ width: "100%", height: "320px", objectFit: "cover" }} 
          />
        </div>

      </main>
    </div>
  );
}

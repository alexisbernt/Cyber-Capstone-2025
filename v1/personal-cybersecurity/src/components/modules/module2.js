import Hero from "../../components/layout/home/Hero";
import Features from "../../components/layout/home/Features";
import Booklet from "../ui/BookletMod1";
import DragDropGame from "../ui/DragDrop";
import GridPattern from "../patterns";
import { useNavigate } from "react-router-dom";

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
    <div className="bg-black min-h-screen">
      <main>

      <div className="w-full">
      <img 
        src="/password-title.png" 
        style={{ width: "80%", height: "100%", objectFit: "cover", cursor: "pointer" }} 
      />
      </div>

      <div>
    <p style={{ width: '80%', margin: '0 auto' }}>
    There are many things that leave you susceptible to attacks via technology. <br/> Here are three of them: <br/> <br/>
      1. Weak passwords<br/>
      2. Having no backup system<br/>
      3. Leaving your computer, laptop, device on open when you leave a room<br/> <br/>
      You are always a liability when you use technology. In this module we make sure your risk is reduced through using strong passwords.
      </p>
      </div>


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
          <br/> Let's start with - What does hashed mean? <br/>Having hashed passwords means that we use a cryptographic algorithm.
          This basically means the original password is turned into a random-looking string (the hash) using a special math formula. 
          This process only goes one way, so no one can easily retrieve the password (turn the hash back into the real password)
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
        The more characters in a password, the more possibility of combinations. 
        You want to create passwords that are 12 to 18 characters in length. This means that for better password protection and management, 
        it is recommended to use a password manager. 
        A common password manager is Bitwarden. 
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

      <div className="w-full">
      <img 
        src="/password-title.png" 
        style={{ width: "80%", height: "100%", objectFit: "cover", cursor: "pointer" }} 
      />
      </div>

    <div>
    <p style={{ width: '80%', margin: '0 auto' }}>
      <bold>Secure Your Stuff: </bold>For better password protection and management, it is recommended to use a password manager. A common password manager is Bitwarden. Bitwarden is suitable on phones and computers (basically any device that you want to use).<br/>
<br/>I was experiencing rejection and thought, “Well, it’d be nice to reject something in return.” So, I started rejecting hackers—with Bitwarden.
<br/>Here’s how you can incorporate Bitwarden into your daily life.<br/>
<br/>1. Create your account: https://vault.bitwarden.com/#/signup 
<br/>2. Login: https://vault.bitwarden.com/#/login 
<br/>3. Get familiar with “The Vault”
<br/> The Vault is essentially your home screen / dashboard.
<br/>4. The blue column on the left side of your screen is what you can think of as the “Overhead Navigation.” Your Overhead Navigation takes you to the general things that Bitwarden can do. 
<br/> On Overhead Navigation: Vaults, Send, Tools, Reports, Settings, and additional Premium Features.
<br/> Vaults allows you to safely store data which can be passwords, secret notes, credit cards, and more.
<br/>5. Go to “Login” 
<br/>Login is the main component I recommend to use to safely store your passwords.
<br/>6. Click the Blue “+ New” Button in the top right corner
<br/>7. Select “New Login”
<br/>8. Create The Item
<br/>“Item Name” will be what you want to label the saved information as
<br/>Enter Username
<br/>Enter Password
<br/>Create an Authenticator Key (if you would like). An Authenticator Key is an extra layer of security (a pin) that you would enter to confirm you would like to see or enter the password.
<br/>Link the item to a website (if you would like).
<br/>Add any additional notes (if you would like).
<br/>9. Require your Master Password to be entered before accessing the information. This is an extra layer of security (if you would like). 
<br/>10. Save
<br/>Reload the page and you should see your saved password information!<br/>
<br/>Repeat for each password you want to remember and protect. 

        </p>
      </div>

      <div className="w-full">
      <img 
        src="/bitwarden-infographic.png" 
        style={{ width: "80%", height: "100%", objectFit: "cover", cursor: "pointer" }} 
      />
      </div>

        {/* Additional Sections */}
        <GridPattern />
        <Booklet />
        <GridPattern />
        <DragDropGame />
        <Banner />
        <Hero />
        <Features />

      </main>
    </div>
  );
}

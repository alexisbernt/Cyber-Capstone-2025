// import Hero from "../../components/layout/home/Hero";
// import Features from "../../components/layout/home/Features";
// import Booklet from "../ui/BookletMod1";
// import DragDropGame from "../ui/DragDrop";
// import GridPattern from "../patterns";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import RevealCard from "../../reveal"; // this is the component
import SeparatorCard from "../../separatorCard";

export default function Module3() {
  const cardContainerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // You can still use this for non-React elements if needed
    // But now we're handling the custom card via JSX directly
  }, []);

  const [shiftInput, setShiftInput] = useState('');
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState('');

  const checkDecryption = () => {
    if (parseInt(shiftInput) !== 3) {
      setResult('Hint: The correct shift is 3. Try again!');
      return;
    }
    if (userInput.trim().toLowerCase() === 'hello world') {
      setResult('Success!');
    } else {
      setResult('Hmm, double-check your decoding and try again.');
    }
  };


  return (
    <div className="bg-black min-h-screen">
      <main>
        {/* Banner Image */}
        <div className="w-full">
          <img
            src="/module3_banner.png"
            alt="Banner"
            style={{ width: "100%", height: "405px", objectFit: "cover" }}
          />
        </div>

        <div className="card-row">
          {/* Left-side Card */}
          <div className="card-wrapper">
            <RevealCard
              imageUrl="/enforce.png"
              imageAlt="Encryption Image"
              titleText="Encryption & Cryptography"
              revealInfo="Cryptography is the study of how to protect information.
              Encryption is the way of turning information into a secret code for the right people."
            />
          </div>

          {/* Middle-side Card */}
          <div className="card-wrapper">
            <RevealCard
              imageUrl="/enforce.png"
              imageAlt="Middle Image"
              titleText="Cryptography (Kinda)"
              revealInfo=" Where information is hidden, coded, and/or protected so that only the person a message was intended for can read it."
            />
          </div>

          {/* Right-side Card */}
          <div className="card-wrapper">
            <RevealCard
              imageUrl="/enforce.png"
              imageAlt="Encryption Image"
              titleText="Encryption (Kinda)"
              revealInfo="Encryption is the process of protecting data by turning it into a coded form that only authorized users can read."
            />
          </div>
        </div>

        <div style={{ width: '100%' }}>
            <SeparatorCard
              imageUrl="/banner-wide.png"
              imageAlt="Wide Graphic"
              titleText="Cryptography and Encryption are how to protect sensitive information"
              paragraphText="Using cryptography and encryption we can prevent our data from being stolen, changed, or seen by unauthorized people. This helps keep data private and secure."
            />
          </div>

        {/* Separator Card */}
        <div style={{ width: '100%' }} className="card-wrapper">
          <SeparatorCard
            imageUrl="/enforce.png"
            imageAlt="Encryption Image"
            titleText="Encryption (Kinda)"
            paragraphText="Learn how encryption is used in messaging, security protocols, and everyday apps."
          />
        </div>

        {/* Crypto Game: Guided Caesar Cipher Decryption */}
        <div style={{ width: '100%', marginTop: '2rem' }} className="card-wrapper">
          <div className="p-6 rounded-2xl shadow-lg bg-white flex flex-col gap-4 items-center">
            <h2 className="text-2xl font-bold">🛡️ Step-by-Step Decryption!</h2>
            <p className="text-center text-gray-600">
              This message is encrypted with a Caesar cipher (shift of 3). Follow the steps to decrypt it!
            </p>

            {/* Step 1: Display Encrypted Message */}
            <div className="bg-gray-100 p-4 rounded w-full text-center font-mono text-lg">
              "Khoor Zruog!"
            </div>

            {/* Step 2: Prompt for Shift */}
            <div className="w-full">
              <label className="block mb-2 font-semibold">Step 1: What is the shift value?</label>
              <input
                type="number"
                placeholder="Enter the shift (e.g., 3)"
                value={shiftInput}
                onChange={(e) => setShiftInput(e.target.value)}
                className="border rounded p-2 w-full"
              />
            </div>

            {/* Step 3: Prompt for Decryption */}
            <div className="w-full">
              <label className="block mb-2 font-semibold mt-4">Step 2: Now, decrypt the message! Use the alphabet and your shift value.<br/></label>
              <input
                type="text"
                placeholder="Enter the decrypted text..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="border rounded p-2 w-full"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={checkDecryption}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Submit
            </button>

            {/* Result */}
            {result && (
              <div className={`mt-4 font-semibold ${result === 'Success!' ? 'text-green-600' : 'text-red-600'}`}>
                {result}
              </div>
            )}
          </div>
        </div>

          <div style={{ width: '100%' }} className="card-wrapper2">
            <SeparatorCard
              imageUrl="/enforce.png"
              imageAlt="Encryption Image"
              titleText="Encryption (Kinda)"
              paragraphText="Learn how encryption is used in messaging, security protocols, and everyday apps."
            />
          </div>

        {/* Reveal Card insert w/ Separator Card following */}
        {/* <div ref={cardContainerRef}></div> */}
      </main>
    </div>
  );
}

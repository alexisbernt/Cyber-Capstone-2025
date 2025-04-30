// import Hero from "../../components/layout/home/Hero";
// import Features from "../../components/layout/home/Features";
// import Booklet from "../ui/BookletMod1";
import Divider from "../ui/divider-pattern";
import GridPattern from "../patterns";
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import RevealCard from "../../reveal";
import SeparatorCard from "../../separatorCard";

export default function Module3() {
  const cardContainerRef = useRef(null);
  const navigate = useNavigate();

  const [shiftInput, setShiftInput] = useState('');
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState('');
  const [encryptedMessage, setEncryptedMessage] = useState('');

  useEffect(() => {
    // Reserved for side effects
  }, []);

  // Caesar Cipher Encryption Function
  const caesarEncrypt = (text, shift) => {
    const normalizedShift = ((parseInt(shift) % 26) + 26) % 26;
    return text
      .split('')
      .map((char) => {
        if (/[a-z]/.test(char)) {
          return String.fromCharCode(((char.charCodeAt(0) - 97 + normalizedShift) % 26) + 97);
        } else if (/[A-Z]/.test(char)) {
          return String.fromCharCode(((char.charCodeAt(0) - 65 + normalizedShift) % 26) + 65);
        }
        return char;
      })
      .join('');
  };

  const checkEncryption = () => {
    const shift = parseInt(shiftInput);

    if (isNaN(shift)) {
      setEncryptedMessage('⚠️ Please enter a valid shift number.');
      return;
    }

    if (userInput.trim() === '') {
      setEncryptedMessage('⚠️ Please enter a message to encrypt.');
      return;
    }

    const encrypted = caesarEncrypt(userInput, shift);
    setEncryptedMessage(encrypted);
  };

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
        {/* Banner */}
        <div className="w-full">
          <img src="/module3_banner.png" alt="Banner" style={{ width: "100%", height: "405px", objectFit: "cover" }} />
        </div>

        {/* 3 Reveal Cards */}
        <div className="card-row">
          <div className="card-wrapper">
            <RevealCard
              imageUrl="/encrypt-crypt-image.png"
              imageAlt="Encryption Image"
              titleText="Encryption & Cryptography"
              revealInfo="Cryptography is the study of how to protect information.
              Encryption is the way of turning information into a secret code for the right people."
            />
          </div>
          <div className="card-wrapper">
            <RevealCard
              imageUrl="/cryptography-image.png"
              imageAlt="Middle Image"
              titleText="Cryptography (Kinda)"
              revealInfo=" Where information is hidden, coded, and/or protected so that only the person a message was intended for can read it."
            />
          </div>
          <div className="card-wrapper">
            <RevealCard
              imageUrl="/encrypt-image.png"
              imageAlt="Encryption Image"
              titleText="Encryption (Kinda)"
              revealInfo="Encryption is the process of protecting data by turning it into a coded form that only authorized users can read."
            />
          </div>
        </div>

        {/* Separator */}
        <SeparatorCard
          imageUrl="/encryption-graphic.png"
          imageAlt="Wide Graphic"
          titleText="Cryptography and Encryption"
          paragraphText="Using cryptography and encryption we can prevent our data from being stolen, 
          changed, or seen by unauthorized people. This helps keep data private and secure."
        /> <br/>

        <GridPattern />

        {/* Step-by-Step Encryption UI */}
        <div style={{ width: '100%', marginTop: '2rem' }} className="card-wrapper">
          <div className="p-6 rounded-2xl shadow-lg bg-white flex flex-col gap-4 items-center">
            <h2 className="text-2xl font-bold">🛡️ Step-by-Step Encryption!</h2>
            <p className="text-center text-gray-600">Encrypt a message using the Caesar cipher!</p>

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

            <div className="w-full">
              <label className="block mb-2 font-semibold mt-4">Step 2: Enter your message to encrypt:</label>
              <input
                type="text"
                placeholder="Enter plaintext message..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="border rounded p-2 w-full"
              />
            </div>

            <button
              onClick={checkEncryption}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4"
            >
              Encrypt Message
            </button>

            <div className="w-full mt-4 text-center">
              <p className="font-semibold mb-1">Step 3: Your encrypted message:</p>
              <div className="bg-gray-100 p-4 rounded font-mono text-lg">{encryptedMessage}</div>
            </div>
          </div>
        </div>

        {/* Decryption UI */}
        <div style={{ width: '100%', marginTop: '2rem' }} className="card-wrapper">
          <div className="p-6 rounded-2xl shadow-lg bg-white flex flex-col gap-4 items-center">
            <h2 className="text-2xl font-bold">🛡️ Step-by-Step Decryption!</h2>
            <p className="text-center text-gray-600">This message is encrypted with a Caesar cipher (shift of 3).</p>

            <div className="bg-gray-100 p-4 rounded w-full text-center font-mono text-lg">"Khoor Zruog!"</div>

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

            <div className="w-full">
              <label className="block mb-2 font-semibold mt-4">Step 2: Now, decrypt the message!</label>
              <input
                type="text"
                placeholder="Enter the decrypted text..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="border rounded p-2 w-full"
              />
            </div>

            <button
              onClick={checkDecryption}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Submit
            </button>

            {result && (
              <div className={`mt-4 font-semibold ${result === 'Success!' ? 'text-green-600' : 'text-red-600'}`}>
                {result}
              </div>
            )}
          </div>
        </div>

        {/* Final Separator Card */}
        <div style={{ width: '100%' }} className="card-wrapper2">
          <SeparatorCard
            imageUrl="/enforce.png"
            imageAlt="Encryption Image"
            titleText="Encryption (Kinda)"
            paragraphText="Learn how encryption is used in messaging, security protocols, and everyday apps."
          />
        </div>
      </main>
    </div>
  );
}


// import Hero from "../../components/layout/home/Hero";
// import Features from "../../components/layout/home/Features";
// import Booklet from "../ui/BookletMod1";
import Divider from "../ui/divider-pattern";
import GridPattern from "../patterns";
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import RevealCard from "../../reveal";
import SeparatorCard from "../../separatorCard";
import ThinCard from "../../ThinCard";

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
        </div> <br/> <br/>

        {/* Separator */}
        <SeparatorCard
          imageUrl="/encryption-graphic.png"
          imageAlt="Wide Graphic"
          titleText="Cryptography and Encryption"
          paragraphText="Using cryptography and encryption we can prevent our data from being stolen, 
          changed, or seen by unauthorized people. This helps keep data private and secure."
        /> <br/> <br/>

        <div style={{ width: '100%' }}>
          <ThinCard
            titleText={
              <>
                "Cryptography is secret codes. It's making and breaking codes."
                <br />
                 – Max Levchin, Founder of PayPal.
              </>
            }
            />
        </div> <br/> <br/>

        <GridPattern />

        {/* Another Separator Card */}
        <div className="container">
          {/* Left Half (can be anything else, or left empty) */}
          <div className="left-pane">
            {/* Optional content for left side */}
          </div>

          {/* Right Half: Separator Card */}
          <div className="right-pane">
            <div className="card-wrapper2">
              <SeparatorCard
                imageUrl="/enforce.png"
                imageAlt="Encryption Image"
                titleText="Cracking the Code"
                paragraphText="Cryptography creates the code to protect information. 
                Cryptanalysis, a part of cryptography, is the practice of trying to break or 'crack' encrypted messages to find hidden information without knowing the key."
              />
            </div>
          </div>
        </div>

        <div className="container">
          {/* Left Half */}
          <div className="left-pane">
            <div className="card">
              <h2>🛡️ Step-by-Step Encryption!</h2>
              <p>Encrypt a message using the Caesar cipher!</p>

              <div className="form-group">
                <label>Step 1: What is the shift value?</label>
                <input
                  type="number"
                  placeholder="Enter the shift (e.g., 3)"
                  value={shiftInput}
                  onChange={(e) => setShiftInput(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Step 2: Enter your message to encrypt:</label>
                <input
                  type="text"
                  placeholder="Enter plaintext message..."
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                />
              </div>

              <button onClick={checkEncryption}>Encrypt Message</button>

              <div className="output">
                <p>Step 3: Your encrypted message:</p>
                <div className="encrypted-box">{encryptedMessage}</div>
              </div>
            </div>
          </div>

          {/* Right Half */}
          <div className="right-pane">
            <div className="card">
              <SeparatorCard
                imageUrl="/ceasar-cipher.png"
                imageAlt="Encryption Image"
                titleText="Caesar Cipher"
                paragraphText="A encryption method. Using this method, each letter in the message is shifted a certain number of places down or up the alphabet."
              />
            </div>
          </div>
        </div>

          <div className="container">
        {/* Left Half: Separator Card */}
        <div className="left-pane">
          <div className="card">
            <SeparatorCard
              imageUrl="/ceasar-cipher.png"
              imageAlt="Decryption Image"
              titleText="Reverse the Cipher"
              paragraphText="Learn how Caesar decryption works and try it yourself."
            />
          </div>
        </div>

        {/* Right Half: Decryption UI */}
        <div className="right-pane">
          <div className="card">
            <h2>🛡️ Step-by-Step Decryption!</h2>
            <p>This message is encrypted with a Caesar cipher (shift of 3).</p>

            <div className="encrypted-box">"Khoor Zruog!"</div>

            <div className="form-group">
              <label>Step 1: What is the shift value?</label>
              <input
                type="number"
                placeholder="Enter the shift (e.g., 3)"
                value={shiftInput}
                onChange={(e) => setShiftInput(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Step 2: Now, decrypt the message!</label>
              <input
                type="text"
                placeholder="Enter the decrypted text..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
            </div>

            <button onClick={checkDecryption}>Submit</button>

            {result && (
              <div className={`result ${result === "Success!" ? "success" : "fail"}`}>
                {result}
              </div>
            )}
          </div>
        </div>
      </div>
      </main>
    </div>
  );
}
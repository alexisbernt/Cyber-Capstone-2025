import React, { useState } from 'react';

function DefinitionsPage() {
  const [page, setPage] = useState(1);

  const definitions = [
    { term: 'Cybersecurity', definition: 'The methods taken to protect technology (systems, networks, and programs) from digital attacks.' },
    { term: 'Cyberattack', definition: 'When cybercriminals (hackers) attempt to damage, steal, or destroy a computer system or network.' },
    { term: 'Network (in tech terms)', definition: 'A system that connects many computers to share resources and information (data).' },
    { term: 'Malware', definition: "A program or file that's intentionally harmful or exploiting a computer, network, or server." },
    { term: 'Firewall', definition: 'A system that protects networks by controlling the incoming and outgoing traffic over that network.' },
    { term: 'Encryption', definition: 'The process of hiding data to prevent unauthorized access.' },
    { term: 'Authentication', definition: "Process of verifying a user's identity." },
    { term: 'Digital Footprint', definition: "The actions you take on a device/online." }
  ];

  const definitionsPerPage = 4;
  const startIndex = (page - 1) * definitionsPerPage;
  const currentDefinitions = definitions.slice(startIndex, startIndex + definitionsPerPage);
  const totalPages = Math.ceil(definitions.length / definitionsPerPage);

  return (
    <div style={{
      backgroundColor: 'black',
      padding: '20px',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '0' // Prevents forced height
    }}>
      {/* Definitions Card */}
      <div style={{
        backgroundColor: '#1e1e1e',
        padding: '25px',
        borderRadius: '8px',
        maxWidth: '700px',
        width: '100%',
        boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
        marginBottom: '15px'
      }}>
        <h2 style={{ marginBottom: '15px' }}>Key Definitions</h2>
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          {currentDefinitions.map((item, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
              <strong>{item.term}:</strong> {item.definition}
            </li>
          ))}
        </ul>
      </div>

      {/* Navigation Buttons */}
      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <button
          style={{ ...buttonStyle, visibility: page > 1 ? 'visible' : 'hidden' }}
          onClick={() => setPage(page - 1)}
        >
          Prior Page
        </button>
        <button
          style={{ ...buttonStyle, marginLeft: '20px', visibility: page < totalPages ? 'visible' : 'hidden' }}
          onClick={() => setPage(page + 1)}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#007bff',
  color: 'white',
  cursor: 'pointer',
  transition: 'background-color 0.3s'
};

export default DefinitionsPage;

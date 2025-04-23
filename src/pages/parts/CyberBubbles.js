
      {/* Flex Container for Left Image & Right Hero Section */}
      <div className="split-container">
        {/* Left-side Image */}
        <div className="split-left">
          <img 
            src="/cyber-bubbles.png"  
            alt="Left-side Image"  
            className="split-image"
          />
        </div>

        {/* Right-side Hero Section */}
        <div className="split-right">
          <Hero />
        </div>
      </div>

      {/* Flex Container for Right Image & Left Hero Section */}
      <div className="split-container">
        {/* Left-side Hero Section */}
        <div className="split-left">
          <Hero />
        </div>

        {/* Right-side Image */}
        <div className="split-right">
          <img 
            src="/demo.png"  
            alt="Right-side Image"  
            className="split-image"
          />
        </div>
      </div>

      <div>
       <ColorPattern />
      </div>

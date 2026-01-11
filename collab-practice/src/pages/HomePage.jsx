import React from "react";



export default function HomePage({ Navbar, Footer, heroProps, partnerProps }) {
  return (
    <div className="app-container">
      {Navbar && <Navbar />}

      <main className="main-content">
        <HeroSection {...heroProps} />
        <PartnersSection {...partnerProps} />
      </main>

      {Footer && <Footer />}
    </div>
  );
}

function HeroSection({ imageSrc = "/assets/hero-image.png" }) {
  return (
    <section className="hero-section">
      <div className="hero-image">
        <img src={imageSrc} alt="Hero illustration" />
      </div>

      <div className="hero-text">
        <h1>
          Make <br />
          remote work
        </h1>
        <p>
          Get your team in sync, no matter your location.
          Streamline processes, create team rituals, and
          watch productivity soar.
        </p>
        <button className="hero-button">Learn more</button>
      </div>
    </section>
  );
}

function PartnersSection({
  logos = [
    { src: "/assets/logo-databiz.svg", alt: "databiz" },
    { src: "/assets/logo-audiophile.svg", alt: "audiophile" },
    { src: "/assets/logo-meet.svg", alt: "meet" },
    { src: "/assets/logo-maker.svg", alt: "maker" },
  ],
}) {
  return (
    <section className="partners-section">
      <div className="partners-container">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="partner-logo"
          />
        ))}
      </div>
    </section>
  );
}

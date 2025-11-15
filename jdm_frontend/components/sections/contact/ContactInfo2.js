import React from "react";

export default function ContactInfo2({ iframe }) {
  const isValidIframe = iframe && iframe.startsWith("https://");

  return (
    <div className="office-google-map-wrapper">
      {isValidIframe ? (
        <iframe
          src={iframe}
          style={{ border: 0, width: "100%", height: "450px", display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <p style={{ color: "red", padding: "1rem", textAlign: "center" }}>
          Please enter a correct iframe link.
        </p>
      )}
    </div>
  );
}

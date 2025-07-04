import React from "react";

const Map = () => {
  return (
    <div id="map-section" style={{ padding: "40px 0", textAlign: "center" }}>
      

      <div
        className="map-container"
        data-aos="zoom-in"
        style={{
          maxWidth: "90%",
          height: "300px",
          margin: "auto",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        }}
      >
        <iframe
        title="Nest Mart and Groceries Location Map"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d121773.364022028!2d78.23148949726566!3d17.4875666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sNest%20mart!5e0!3m2!1sen!2sin!4v1751608418609!5m2!1sen!2sin"
          style={{ border: 0 }}
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;

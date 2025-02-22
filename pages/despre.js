import React from 'react';

const Success = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Locație</h1>
      <p>Ne puteți găsii aici!</p>
      
      <div style={{ margin: '2rem auto', maxWidth: '600px' }}>
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d345.196234009599!2d21.295965529291852!3d46.19911745127905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4745986d356cd2ed%3A0x79dec3bb0ea5b8a7!2sCalea%20Aurel%20Vlaicu%20202%2C%20Arad!5e0!3m2!1sro!2sro!4v1740239597618!5m2!1sro!2sro"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Success;

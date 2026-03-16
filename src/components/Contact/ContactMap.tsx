"use client";

export default function ContactMap() {
  return (
    <section style={{ padding: '0 0 100px' }}>
      <div className="container">
        <div
          style={{
            width: '100%',
            height: '500px',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid var(--glass-border)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
          }}
        >
          <iframe
            src="https://www.google.com/maps?q=Zahra+Park,+Koduvally,+Kozhikode,+Kerala&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

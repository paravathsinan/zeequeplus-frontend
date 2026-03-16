import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Navbar />
      <section
        style={{
          padding: "96px 0 80px",
          backgroundColor: "var(--bg-page)",
        }}
      >
        <div className="container" style={{ maxWidth: 880 }}>
          <header style={{ marginBottom: 40, textAlign: "left" }}>
            <p
              style={{
                fontSize: 13,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: 12,
                fontWeight: 600,
              }}
            >
              Legal
            </p>
            <h1
              style={{
                fontSize: 40,
                fontWeight: 800,
                color: "var(--text-primary)",
                margin: 0,
                marginBottom: 12,
              }}
            >
              Privacy Policy
            </h1>
            <p
              style={{
                fontSize: 14,
                color: "var(--text-secondary)",
              }}
            >
              This Privacy Policy explains how ZeeQue Plus collects, uses, and protects
              information in connection with our Qur’an learning programmes and this
              website. By using our services, you consent to the practices described
              here.
            </p>
          </header>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 32,
              fontSize: 15,
              lineHeight: 1.7,
              color: "var(--text-secondary)",
            }}
          >
            <section>
              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: 8,
                }}
              >
                Information we collect
              </h2>
              <p>
                We may collect basic contact details (such as parent name, child name,
                email address, and phone number), limited academic and attendance
                information related to our classes, and any information you choose to
                provide when you contact us or fill out forms on this site.
              </p>
            </section>

            <section>
              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: 8,
                }}
              >
                How we use your information
              </h2>
              <p>
                We use the information we collect to run classes, share progress
                reports, communicate important updates, respond to enquiries, and
                improve our programmes and website. We do not sell your personal data.
              </p>
            </section>

            <section>
              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: 8,
                }}
              >
                Data security and retention
              </h2>
              <p>
                We use reasonable technical and organisational safeguards to protect
                your information and retain it only for as long as necessary for the
                purposes described above or as required by applicable law.
              </p>
            </section>

            <section>
              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: 8,
                }}
              >
                Your choices
              </h2>
              <p>
                You may contact us to update or correct your details, or to ask
                questions about how your information is being used. In some cases, we
                may need to keep certain records for legal or administrative reasons.
              </p>
            </section>

            <section>
              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: 8,
                }}
              >
                Changes to this policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. When we make
                changes, we will revise the “last updated” date on this page. We
                encourage you to review this page periodically.
              </p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}


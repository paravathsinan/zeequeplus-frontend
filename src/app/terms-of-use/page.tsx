import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfUsePage() {
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
              Terms of Use
            </h1>
            <p
              style={{
                fontSize: 14,
                color: "var(--text-secondary)",
              }}
            >
              These Terms of Use govern your access to and use of the ZeeQue Plus
              website and our Qur’an learning programmes. By using our site or
              enrolling in our classes, you agree to these terms.
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
                Use of our services
              </h2>
              <p>
                Our programmes are intended for students and parents who register
                through official ZeeQue Plus channels. You agree to use the platform
                only for lawful purposes and in a way that respects other learners,
                teachers, and staff.
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
                Accounts and responsibilities
              </h2>
              <p>
                Parents and guardians are responsible for ensuring that login details
                are kept secure and that children use the platform appropriately.
                You agree to notify us if you believe your account has been
                compromised.
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
                Intellectual property
              </h2>
              <p>
                All course materials, branding, and content made available by ZeeQue
                Plus remain our intellectual property or that of our licensors. You
                may not copy, distribute, or reuse these materials outside personal
                learning without written permission.
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
                Limitation of liability
              </h2>
              <p>
                While we strive to provide a reliable and beneficial learning
                experience, the service is provided on an “as is” basis. To the
                extent permitted by law, ZeeQue Plus is not liable for indirect or
                consequential losses arising from use of the site or programmes.
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
                Changes to these terms
              </h2>
              <p>
                We may update these Terms of Use periodically. Continued use of the
                website or services after changes are posted will mean you accept the
                revised terms.
              </p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}


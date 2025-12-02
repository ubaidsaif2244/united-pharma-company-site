import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './LegalPages.css'

function PrivacyPolicy() {
  useScrollAnimation()
  
  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-header fade-in-up">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last Updated: December 2024</p>
        </div>

        <div className="legal-content">
          <section className="legal-section fade-in-up animate-delay-1">
            <h2>Introduction</h2>
            <p>
              United Pharma ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p>
              As a pharmaceutical company, we understand the sensitive nature of health-related information and maintain the highest standards of data protection in compliance with applicable privacy laws and regulations.
            </p>
          </section>

          <section className="legal-section">
            <h2>Information We Collect</h2>
            
            <h3>Personal Information</h3>
            <p>We may collect the following types of personal information:</p>
            <ul>
              <li>Contact information (name, email address, phone number, mailing address)</li>
              <li>Company information (company name, position, industry)</li>
              <li>Professional credentials and qualifications</li>
              <li>Communication preferences</li>
              <li>Information provided in forms, surveys, or correspondence</li>
            </ul>

            <h3>Technical Information</h3>
            <p>We automatically collect certain technical information, including:</p>
            <ul>
              <li>IP address and location data</li>
              <li>Browser type and version</li>
              <li>Device information and operating system</li>
              <li>Website usage patterns and navigation data</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            
            <div className="purpose-list">
              <div className="purpose-item">
                <h4>Service Provision</h4>
                <p>To provide pharmaceutical services, process inquiries, and fulfill contractual obligations.</p>
              </div>
              
              <div className="purpose-item">
                <h4>Communication</h4>
                <p>To respond to inquiries, provide customer support, and send important updates about our services.</p>
              </div>
              
              <div className="purpose-item">
                <h4>Compliance</h4>
                <p>To comply with legal obligations, regulatory requirements, and industry standards.</p>
              </div>
              
              <div className="purpose-item">
                <h4>Business Operations</h4>
                <p>To improve our services, conduct research, and maintain business records.</p>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2>Information Sharing and Disclosure</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
            
            <ul>
              <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in our operations</li>
              <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process</li>
              <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset transfers</li>
              <li><strong>Consent:</strong> When you have provided explicit consent for sharing</li>
              <li><strong>Protection:</strong> To protect our rights, property, or safety, or that of others</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our security measures include:
            </p>
            <ul>
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and audits</li>
              <li>Access controls and authentication procedures</li>
              <li>Employee training on data protection</li>
              <li>Secure data storage and backup systems</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the following rights regarding your personal information:</p>
            
            <div className="rights-grid">
              <div className="right-item">
                <h4>Access</h4>
                <p>Request access to your personal information we hold</p>
              </div>
              
              <div className="right-item">
                <h4>Correction</h4>
                <p>Request correction of inaccurate or incomplete information</p>
              </div>
              
              <div className="right-item">
                <h4>Deletion</h4>
                <p>Request deletion of your personal information</p>
              </div>
              
              <div className="right-item">
                <h4>Portability</h4>
                <p>Request transfer of your data to another service provider</p>
              </div>
              
              <div className="right-item">
                <h4>Objection</h4>
                <p>Object to certain processing of your information</p>
              </div>
              
              <div className="right-item">
                <h4>Restriction</h4>
                <p>Request restriction of processing in certain circumstances</p>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and improve our services. You can control cookie settings through your browser preferences.
            </p>
            <p>
              For detailed information about our use of cookies, please refer to our <a href="/cookie-policy" className="legal-link">Cookie Policy</a>.
            </p>
          </section>

          <section className="legal-section">
            <h2>Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. Retention periods vary based on the type of information and applicable legal requirements.
            </p>
          </section>

          <section className="legal-section">
            <h2>International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information during international transfers, including standard contractual clauses and adequacy decisions.
            </p>
          </section>

          <section className="legal-section">
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date.
            </p>
          </section>

          <section className="legal-section">
            <h2>Contact Information</h2>
            <p>If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:</p>
            
            <div className="contact-info">
              <div className="contact-method">
                <h4>Email</h4>
                <p>privacy@unitedpharma.com</p>
              </div>
              
              <div className="contact-method">
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
              
              <div className="contact-method">
                <h4>Mail</h4>
                <p>
                  United Pharma - Privacy Officer<br />
                  123 Pharmaceutical Drive<br />
                  Medical District, NY 10001<br />
                  United States
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
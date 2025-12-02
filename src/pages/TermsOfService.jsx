import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './LegalPages.css'

function TermsOfService() {
  useScrollAnimation()
  
  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-header">
          <h1>Terms of Service</h1>
          <p className="last-updated">Last Updated: December 2024</p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>Agreement to Terms</h2>
            <p>
              These Terms of Service ("Terms") constitute a legally binding agreement between you and United Pharma ("Company," "we," "our," or "us") regarding your use of our website, services, and products. By accessing or using our services, you agree to be bound by these Terms.
            </p>
            <p>
              If you do not agree to these Terms, you may not access or use our services. These Terms apply to all visitors, users, and others who access or use our services.
            </p>
          </section>

          <section className="legal-section">
            <h2>Description of Services</h2>
            <p>United Pharma provides pharmaceutical manufacturing services, including:</p>
            <ul>
              <li>Toll manufacturing and contract manufacturing services</li>
              <li>Pharmaceutical product development and formulation</li>
              <li>Quality assurance and regulatory compliance services</li>
              <li>Packaging and labeling solutions</li>
              <li>Nutraceutical product manufacturing</li>
              <li>Consultation and technical support services</li>
            </ul>
            <p>
              All services are provided in accordance with applicable pharmaceutical regulations and industry standards.
            </p>
          </section>

          <section className="legal-section">
            <h2>Eligibility and Registration</h2>
            
            <h3>Eligibility Requirements</h3>
            <p>To use our services, you must:</p>
            <ul>
              <li>Be at least 18 years of age</li>
              <li>Have the legal authority to enter into binding agreements</li>
              <li>Represent a legitimate business entity in the pharmaceutical or healthcare industry</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>

            <h3>Account Registration</h3>
            <p>
              Some services may require account registration. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
          </section>

          <section className="legal-section">
            <h2>Acceptable Use Policy</h2>
            
            <h3>Permitted Uses</h3>
            <p>You may use our services for legitimate business purposes in compliance with these Terms and applicable laws.</p>

            <h3>Prohibited Activities</h3>
            <p>You agree not to:</p>
            <ul>
              <li>Use our services for any unlawful purpose or in violation of applicable regulations</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Interfere with or disrupt the integrity or performance of our services</li>
              <li>Transmit any harmful, offensive, or inappropriate content</li>
              <li>Violate any intellectual property rights</li>
              <li>Engage in any fraudulent or deceptive practices</li>
              <li>Use our services to compete with our business</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Intellectual Property Rights</h2>
            
            <h3>Our Intellectual Property</h3>
            <p>
              All content, features, and functionality of our services, including but not limited to text, graphics, logos, trademarks, software, and proprietary formulations, are owned by United Pharma and are protected by intellectual property laws.
            </p>

            <h3>Limited License</h3>
            <p>
              We grant you a limited, non-exclusive, non-transferable license to access and use our services for your internal business purposes, subject to these Terms.
            </p>

            <h3>Your Content</h3>
            <p>
              You retain ownership of any content you provide to us. By submitting content, you grant us a license to use, modify, and distribute such content as necessary to provide our services.
            </p>
          </section>

          <section className="legal-section">
            <h2>Service Terms and Conditions</h2>
            
            <h3>Service Agreements</h3>
            <p>
              Specific services may be subject to additional terms and conditions outlined in separate service agreements. In case of conflict, the specific service agreement terms will prevail.
            </p>

            <h3>Quality Standards</h3>
            <p>
              All pharmaceutical products and services are provided in accordance with Good Manufacturing Practice (GMP) standards and applicable regulatory requirements.
            </p>

            <h3>Regulatory Compliance</h3>
            <p>
              You are responsible for ensuring that your use of our services complies with all applicable laws, regulations, and industry standards in your jurisdiction.
            </p>
          </section>

          <section className="legal-section">
            <h2>Payment Terms</h2>
            
            <h3>Pricing and Fees</h3>
            <p>
              Service fees are as specified in quotations or service agreements. All prices are subject to change with appropriate notice.
            </p>

            <h3>Payment Obligations</h3>
            <p>
              Payment terms are specified in individual service agreements. Late payments may be subject to interest charges and service suspension.
            </p>

            <h3>Taxes</h3>
            <p>
              You are responsible for all applicable taxes, duties, and governmental charges related to your use of our services.
            </p>
          </section>

          <section className="legal-section">
            <h2>Disclaimers and Limitations</h2>
            
            <h3>Service Availability</h3>
            <p>
              We strive to maintain service availability but do not guarantee uninterrupted access. Services may be temporarily unavailable due to maintenance, updates, or technical issues.
            </p>

            <h3>Disclaimer of Warranties</h3>
            <p>
              Our services are provided "as is" and "as available." We disclaim all warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>

            <h3>Limitation of Liability</h3>
            <p>
              To the maximum extent permitted by law, United Pharma shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
            </p>
          </section>

          <section className="legal-section">
            <h2>Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless United Pharma and its affiliates from any claims, damages, losses, or expenses arising from your use of our services, violation of these Terms, or infringement of any third-party rights.
            </p>
          </section>

          <section className="legal-section">
            <h2>Termination</h2>
            
            <h3>Termination by You</h3>
            <p>
              You may terminate your use of our services at any time by discontinuing access and notifying us in writing.
            </p>

            <h3>Termination by Us</h3>
            <p>
              We may terminate or suspend your access to our services immediately, without prior notice, for violation of these Terms or for any other reason at our sole discretion.
            </p>

            <h3>Effect of Termination</h3>
            <p>
              Upon termination, your right to use our services will cease immediately. Provisions that by their nature should survive termination will remain in effect.
            </p>
          </section>

          <section className="legal-section">
            <h2>Governing Law and Dispute Resolution</h2>
            
            <h3>Governing Law</h3>
            <p>
              These Terms are governed by and construed in accordance with the laws of the State of New York, without regard to conflict of law principles.
            </p>

            <h3>Dispute Resolution</h3>
            <p>
              Any disputes arising from these Terms or your use of our services will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
            </p>

            <h3>Jurisdiction</h3>
            <p>
              You consent to the exclusive jurisdiction of the courts located in New York for any matters not subject to arbitration.
            </p>
          </section>

          <section className="legal-section">
            <h2>Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website and updating the "Last Updated" date. Your continued use of our services after such modifications constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section className="legal-section">
            <h2>Contact Information</h2>
            <p>If you have questions about these Terms of Service, please contact us:</p>
            
            <div className="contact-info">
              <div className="contact-method">
                <h4>Email</h4>
                <p>legal@unitedpharma.com</p>
              </div>
              
              <div className="contact-method">
                <h4>Phone</h4>
                <p>+92 21 3456-7890</p>
              </div>
              
              <div className="contact-method">
                <h4>Mail</h4>
                <p>
                  United Pharma - Legal Department<br />
                  Plot 45-A, Sector 22, SITE<br />
                  Karachi, Sindh 75700<br />
                  Pakistan
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService
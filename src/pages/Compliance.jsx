import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './LegalPages.css'

function Compliance() {
  useScrollAnimation()
  
  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-header">
          <h1>Regulatory Compliance</h1>
          <p className="last-updated">Last Updated: December 2024</p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>Our Commitment to Compliance</h2>
            <p>
              United Pharma is committed to maintaining the highest standards of regulatory compliance across all aspects of our pharmaceutical manufacturing operations. We adhere to stringent quality standards and regulatory requirements to ensure the safety, efficacy, and quality of all products we manufacture.
            </p>
            <p>
              Our compliance framework encompasses international, federal, state, and local regulations governing pharmaceutical manufacturing, quality assurance, and distribution.
            </p>
          </section>

          <section className="legal-section">
            <h2>Regulatory Standards and Certifications</h2>
            
            <div className="compliance-standards">
              <div className="standard-item">
                <h3>Good Manufacturing Practice (GMP)</h3>
                <p>
                  Our facilities operate under strict GMP guidelines as established by the FDA and international regulatory bodies. We maintain comprehensive documentation, quality control procedures, and validation protocols to ensure consistent product quality.
                </p>
                <div className="standard-details">
                  <h4>Key GMP Areas:</h4>
                  <ul>
                    <li>Personnel training and qualification</li>
                    <li>Facility design and maintenance</li>
                    <li>Equipment validation and calibration</li>
                    <li>Raw material testing and qualification</li>
                    <li>Production process controls</li>
                    <li>Quality control and assurance</li>
                    <li>Documentation and record keeping</li>
                  </ul>
                </div>
              </div>

              <div className="standard-item">
                <h3>FDA Compliance</h3>
                <p>
                  We maintain full compliance with FDA regulations including 21 CFR Parts 210, 211, and other applicable sections of the Code of Federal Regulations. Our facilities are subject to regular FDA inspections and audits.
                </p>
                <div className="standard-details">
                  <h4>FDA Compliance Areas:</h4>
                  <ul>
                    <li>Drug Manufacturing (21 CFR 210 & 211)</li>
                    <li>Dietary Supplements (21 CFR 111)</li>
                    <li>Labeling Requirements (21 CFR 201)</li>
                    <li>Adverse Event Reporting</li>
                    <li>Registration and Listing</li>
                  </ul>
                </div>
              </div>

              <div className="standard-item">
                <h3>International Standards</h3>
                <p>
                  Our operations comply with international pharmaceutical standards including WHO GMP, ICH guidelines, and various country-specific regulatory requirements for global market access.
                </p>
                <div className="standard-details">
                  <h4>International Compliance:</h4>
                  <ul>
                    <li>WHO Good Manufacturing Practices</li>
                    <li>ICH Quality Guidelines (Q7, Q8, Q9, Q10)</li>
                    <li>European Medicines Agency (EMA) Guidelines</li>
                    <li>Health Canada Regulations</li>
                    <li>TGA (Australia) Compliance</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2>Quality Management System</h2>
            
            <div className="qms-components">
              <div className="qms-item">
                <h3>ISO 9001:2015 Certification</h3>
                <p>
                  Our quality management system is certified to ISO 9001:2015 standards, ensuring consistent quality in our manufacturing processes and customer satisfaction.
                </p>
              </div>

              <div className="qms-item">
                <h3>Risk Management</h3>
                <p>
                  We implement ICH Q9 risk management principles throughout our operations, including risk assessment, risk control, and risk communication processes.
                </p>
              </div>

              <div className="qms-item">
                <h3>Change Control</h3>
                <p>
                  All changes to manufacturing processes, equipment, or procedures are managed through a formal change control system to ensure continued compliance and product quality.
                </p>
              </div>

              <div className="qms-item">
                <h3>Deviation Management</h3>
                <p>
                  We maintain a comprehensive deviation management system to investigate, document, and resolve any deviations from established procedures or specifications.
                </p>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2>Facility and Equipment Compliance</h2>
            
            <h3>Facility Standards</h3>
            <p>Our manufacturing facilities are designed and maintained to meet or exceed regulatory requirements:</p>
            <ul>
              <li>Controlled environment with appropriate HVAC systems</li>
              <li>Segregated areas for different manufacturing activities</li>
              <li>Proper material flow and personnel movement patterns</li>
              <li>Adequate storage conditions for raw materials and finished products</li>
              <li>Waste management and environmental controls</li>
            </ul>

            <h3>Equipment Validation</h3>
            <p>All manufacturing equipment undergoes rigorous validation processes:</p>
            <ul>
              <li>Installation Qualification (IQ)</li>
              <li>Operational Qualification (OQ)</li>
              <li>Performance Qualification (PQ)</li>
              <li>Ongoing maintenance and calibration programs</li>
              <li>Regular revalidation as required</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Supply Chain Compliance</h2>
            
            <div className="supply-chain-areas">
              <div className="supply-area">
                <h3>Supplier Qualification</h3>
                <p>
                  All suppliers undergo thorough qualification processes including audits, quality agreements, and ongoing performance monitoring to ensure they meet our quality standards.
                </p>
              </div>

              <div className="supply-area">
                <h3>Raw Material Testing</h3>
                <p>
                  We conduct comprehensive testing of all incoming raw materials according to established specifications and pharmacopeial standards.
                </p>
              </div>

              <div className="supply-area">
                <h3>Chain of Custody</h3>
                <p>
                  We maintain complete traceability of all materials from receipt through final product distribution, ensuring full accountability throughout the supply chain.
                </p>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2>Documentation and Record Keeping</h2>
            
            <h3>Documentation Standards</h3>
            <p>We maintain comprehensive documentation systems in accordance with regulatory requirements:</p>
            <ul>
              <li>Standard Operating Procedures (SOPs)</li>
              <li>Batch production records</li>
              <li>Quality control test results</li>
              <li>Validation and qualification documentation</li>
              <li>Training records and personnel qualifications</li>
              <li>Deviation and investigation reports</li>
              <li>Change control documentation</li>
            </ul>

            <h3>Electronic Records</h3>
            <p>
              Our electronic record systems comply with 21 CFR Part 11 requirements for electronic records and electronic signatures, ensuring data integrity and security.
            </p>
          </section>

          <section className="legal-section">
            <h2>Training and Personnel Qualification</h2>
            
            <div className="training-programs">
              <div className="training-item">
                <h3>GMP Training</h3>
                <p>All personnel receive comprehensive GMP training appropriate to their roles and responsibilities, with regular refresher training and competency assessments.</p>
              </div>

              <div className="training-item">
                <h3>Technical Training</h3>
                <p>Specialized technical training is provided for equipment operation, analytical procedures, and specific manufacturing processes.</p>
              </div>

              <div className="training-item">
                <h3>Regulatory Updates</h3>
                <p>Regular training on regulatory changes and updates ensures our team stays current with evolving compliance requirements.</p>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2>Audit and Inspection Readiness</h2>
            
            <h3>Internal Audits</h3>
            <p>
              We conduct regular internal audits to assess compliance with regulatory requirements and identify opportunities for improvement. Our internal audit program covers all aspects of our operations.
            </p>

            <h3>Regulatory Inspections</h3>
            <p>
              Our facilities are prepared for regulatory inspections at any time. We maintain inspection readiness through:
            </p>
            <ul>
              <li>Regular mock inspections and assessments</li>
              <li>Comprehensive documentation systems</li>
              <li>Trained personnel familiar with inspection procedures</li>
              <li>Prompt response to regulatory inquiries</li>
              <li>Corrective and preventive action (CAPA) systems</li>
            </ul>

            <h3>Third-Party Audits</h3>
            <p>
              We welcome customer audits and third-party assessments as part of our commitment to transparency and continuous improvement.
            </p>
          </section>

          <section className="legal-section">
            <h2>Pharmacovigilance and Safety</h2>
            
            <h3>Adverse Event Reporting</h3>
            <p>
              We maintain robust pharmacovigilance systems to monitor product safety and report adverse events to appropriate regulatory authorities in accordance with established timelines.
            </p>

            <h3>Product Recalls</h3>
            <p>
              We have established procedures for product recalls, including rapid notification systems, investigation protocols, and corrective action implementation.
            </p>

            <h3>Risk Evaluation and Mitigation</h3>
            <p>
              We implement risk evaluation and mitigation strategies (REMS) as required by regulatory authorities to ensure safe use of pharmaceutical products.
            </p>
          </section>

          <section className="legal-section">
            <h2>Environmental and Safety Compliance</h2>
            
            <div className="environmental-compliance">
              <div className="env-item">
                <h3>Environmental Protection</h3>
                <p>We comply with all environmental regulations including waste disposal, emissions control, and environmental impact assessments.</p>
              </div>

              <div className="env-item">
                <h3>Occupational Safety</h3>
                <p>Our facilities maintain OSHA compliance and implement comprehensive safety programs to protect employee health and safety.</p>
              </div>

              <div className="env-item">
                <h3>Sustainability</h3>
                <p>We are committed to sustainable manufacturing practices and continuous improvement in environmental performance.</p>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2>Continuous Improvement</h2>
            <p>
              Our compliance program is built on principles of continuous improvement. We regularly review and update our procedures, invest in new technologies, and enhance our capabilities to maintain the highest standards of regulatory compliance.
            </p>
            <p>
              We actively participate in industry associations and regulatory forums to stay informed of emerging trends and best practices in pharmaceutical compliance.
            </p>
          </section>

          <section className="legal-section">
            <h2>Contact Information</h2>
            <p>For questions about our regulatory compliance programs or to request compliance documentation, please contact:</p>
            
            <div className="contact-info">
              <div className="contact-method">
                <h4>Regulatory Affairs</h4>
                <p>regulatory@unitedpharma.com</p>
              </div>
              
              <div className="contact-method">
                <h4>Quality Assurance</h4>
                <p>quality@unitedpharma.com</p>
              </div>
              
              <div className="contact-method">
                <h4>Phone</h4>
                <p>+92 21 3456-7890</p>
              </div>
              
              <div className="contact-method">
                <h4>Mail</h4>
                <p>
                  United Pharma - Regulatory Affairs<br />
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

export default Compliance
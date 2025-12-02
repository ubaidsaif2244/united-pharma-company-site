import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './LegalPages.css'

function CookiePolicy() {
  useScrollAnimation()
  
  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-header">
          <h1>Cookie Policy</h1>
          <p className="last-updated">Last Updated: December 2024</p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit our website. They are widely used to make websites work more efficiently and to provide information to website owners about user behavior and preferences.
            </p>
            <p>
              This Cookie Policy explains how United Pharma uses cookies and similar technologies on our website and your choices regarding these technologies.
            </p>
          </section>

          <section className="legal-section">
            <h2>Types of Cookies We Use</h2>
            
            <div className="cookie-types">
              <div className="cookie-type">
                <h3>Essential Cookies</h3>
                <p>
                  These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and form submissions. The website cannot function properly without these cookies.
                </p>
                <div className="cookie-examples">
                  <h4>Examples:</h4>
                  <ul>
                    <li>Session management cookies</li>
                    <li>Security and authentication cookies</li>
                    <li>Load balancing cookies</li>
                    <li>Form submission cookies</li>
                  </ul>
                </div>
              </div>

              <div className="cookie-type">
                <h3>Performance and Analytics Cookies</h3>
                <p>
                  These cookies collect information about how visitors use our website, such as which pages are visited most often and if users receive error messages. This information helps us improve website performance and user experience.
                </p>
                <div className="cookie-examples">
                  <h4>Examples:</h4>
                  <ul>
                    <li>Google Analytics cookies</li>
                    <li>Page load time measurement</li>
                    <li>Error tracking cookies</li>
                    <li>User behavior analytics</li>
                  </ul>
                </div>
              </div>

              <div className="cookie-type">
                <h3>Functional Cookies</h3>
                <p>
                  These cookies allow the website to remember choices you make and provide enhanced, more personal features. They may be set by us or by third-party providers whose services we have added to our pages.
                </p>
                <div className="cookie-examples">
                  <h4>Examples:</h4>
                  <ul>
                    <li>Language preference cookies</li>
                    <li>User interface customization</li>
                    <li>Remember login information</li>
                    <li>Form auto-fill preferences</li>
                  </ul>
                </div>
              </div>

              <div className="cookie-type">
                <h3>Marketing and Advertising Cookies</h3>
                <p>
                  These cookies are used to deliver advertisements that are relevant to you and your interests. They may also be used to limit the number of times you see an advertisement and measure the effectiveness of advertising campaigns.
                </p>
                <div className="cookie-examples">
                  <h4>Examples:</h4>
                  <ul>
                    <li>Targeted advertising cookies</li>
                    <li>Social media integration cookies</li>
                    <li>Conversion tracking cookies</li>
                    <li>Remarketing cookies</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2>Third-Party Cookies</h2>
            <p>
              We may use third-party services that place cookies on your device. These services help us analyze website traffic, provide social media features, and deliver relevant advertisements.
            </p>
            
            <div className="third-party-services">
              <div className="service-item">
                <h4>Google Analytics</h4>
                <p>We use Google Analytics to understand how visitors interact with our website. This helps us improve user experience and website performance.</p>
              </div>
              
              <div className="service-item">
                <h4>Social Media Platforms</h4>
                <p>Social media cookies enable you to share content and interact with social media platforms directly from our website.</p>
              </div>
              
              <div className="service-item">
                <h4>Customer Support Tools</h4>
                <p>We may use third-party customer support tools that place cookies to enhance your support experience.</p>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2>Cookie Duration</h2>
            
            <div className="cookie-duration">
              <div className="duration-type">
                <h3>Session Cookies</h3>
                <p>
                  These cookies are temporary and are deleted when you close your browser. They are used to maintain your session while browsing our website.
                </p>
              </div>
              
              <div className="duration-type">
                <h3>Persistent Cookies</h3>
                <p>
                  These cookies remain on your device for a specified period or until you delete them. They remember your preferences and settings for future visits.
                </p>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2>Managing Your Cookie Preferences</h2>
            
            <h3>Browser Settings</h3>
            <p>
              Most web browsers allow you to control cookies through their settings. You can typically:
            </p>
            <ul>
              <li>View and delete cookies</li>
              <li>Block cookies from specific websites</li>
              <li>Block third-party cookies</li>
              <li>Clear all cookies when you close the browser</li>
              <li>Receive notifications when cookies are set</li>
            </ul>

            <h3>Browser-Specific Instructions</h3>
            <div className="browser-instructions">
              <div className="browser-item">
                <h4>Google Chrome</h4>
                <p>Settings → Privacy and Security → Cookies and other site data</p>
              </div>
              
              <div className="browser-item">
                <h4>Mozilla Firefox</h4>
                <p>Options → Privacy & Security → Cookies and Site Data</p>
              </div>
              
              <div className="browser-item">
                <h4>Safari</h4>
                <p>Preferences → Privacy → Manage Website Data</p>
              </div>
              
              <div className="browser-item">
                <h4>Microsoft Edge</h4>
                <p>Settings → Cookies and site permissions → Cookies and site data</p>
              </div>
            </div>

            <h3>Opt-Out Tools</h3>
            <p>
              You can also use industry opt-out tools to manage advertising cookies:
            </p>
            <ul>
              <li>Network Advertising Initiative (NAI) opt-out tool</li>
              <li>Digital Advertising Alliance (DAA) opt-out tool</li>
              <li>European Interactive Digital Advertising Alliance (EDAA) opt-out tool</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Impact of Disabling Cookies</h2>
            <p>
              While you can disable cookies, please note that doing so may affect your experience on our website:
            </p>
            
            <div className="impact-list">
              <div className="impact-item">
                <h4>Essential Functions</h4>
                <p>Disabling essential cookies may prevent you from using certain features of our website, such as contact forms or secure areas.</p>
              </div>
              
              <div className="impact-item">
                <h4>Personalization</h4>
                <p>Without functional cookies, the website may not remember your preferences, requiring you to re-enter information on each visit.</p>
              </div>
              
              <div className="impact-item">
                <h4>Analytics</h4>
                <p>Disabling analytics cookies means we cannot track website performance or understand how to improve user experience.</p>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2>Updates to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our practices, technology, or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date.
            </p>
            <p>
              We encourage you to review this Cookie Policy periodically to stay informed about our use of cookies and related technologies.
            </p>
          </section>

          <section className="legal-section">
            <h2>Contact Information</h2>
            <p>If you have questions about our use of cookies or this Cookie Policy, please contact us:</p>
            
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

export default CookiePolicy
import Header from '../components/Header'
import Footer from '../components/Footer'
import './LegalPage.css'

export default function TermsPage() {
  return (
    <div>
      <Header />
      <div className="container legal-container">
        <h1>Terms of Service</h1>
        <p><strong>Effective Date:</strong> July 15, 2025</p>

        <p><strong>Rocket Applications Inc.</strong> ("we", "us", or "our") operates the mobile application linked to <a href="https://rocketpsstore.qzz.io/" target="_blank" rel="noopener noreferrer">https://rocketpsstore.qzz.io/</a> (the "App"). These Terms of Service outline the rules and expectations for using our services.</p>

        <h2>1. Account Eligibility</h2>
        <p>You must be at least 13 years old to use our services. By creating an account, you confirm that you meet this age requirement and agree to comply with these terms.</p>

        <h2>2. Account Usage</h2>
        <p>With a Rocket PSStore account or an affiliated Rocket Applications Inc. account, you can:</p>
        <ul>
          <li>Access restricted features</li>
          <li>Earn exclusive badges</li>
          <li>Participate in community events</li>
        </ul>

        <h2>3. Account Responsibilities</h2>
        <p>You are responsible for all activity that occurs under your account. Sharing accounts, using automation, or accessing others' accounts is prohibited.</p>

        <h2>4. Prohibited Activities</h2>
        <p>Users must not:</p>
        <ul>
          <li>Hack or exploit badges or platform features</li>
          <li>Bypass security or protection systems</li>
          <li>Evade bans or sanctions</li>
          <li>Engage in harassment, spam, or abuse</li>
        </ul>

        <h2>5. Sanctions</h2>
        <p>Violating our terms may result in one or more of the following sanctions:</p>
        <ul>
          <li>Soft warning</li>
          <li>Hard warning</li>
          <li>Mute or hard mute</li>
          <li>Temporary or permanent ban</li>
        </ul>

        <h2>6. Badge System</h2>
        <p>Badges are earned through achievements and behavior. Any attempt to manipulate or forge badges may result in badge removal or account action.</p>

        <h2>7. Service Availability</h2>
        <p>We strive for 24/7 availability but do not guarantee uninterrupted access. Maintenance or updates may occasionally cause downtime.</p>

        <h2>8. Modifications to Service</h2>
        <p>We reserve the right to modify or discontinue parts of the App with or without notice. Features may change over time based on updates or internal decisions.</p>

        <h2>9. Privacy Policy</h2>
        <p>Your use of the App is also governed by our <a href="/#/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>, which explains how we collect, use, and protect your data.</p>

        <h2>10. Termination</h2>
        <p>We may suspend or terminate your account at our sole discretion if we believe you have violated these terms or engaged in harmful activity.</p>

        <h2>11. Intellectual Property</h2>
        <p>All content, trademarks, and code used in the App are the property of Rocket Applications Inc. You may not reproduce or distribute our content without permission.</p>

        <h2>12. Feedback</h2>
        <p>If you provide feedback or suggestions, you agree we may use them without compensation or obligation to you.</p>

        <h2>13. Contact Information</h2>
        <p>If you have questions about these Terms, please contact us at <a href="mailto:support@rocketpsstore.qzz.io">support@rocketpsstore.qzz.io</a>.</p>
      </div>
      <Footer />
    </div>
  )
}

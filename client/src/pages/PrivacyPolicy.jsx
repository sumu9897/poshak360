import React from "react";
import Title from "../components/Title";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-gray-700 leading-relaxed">
        <Title title1={'Privacy'} title2={'Policy'}/>
      <p className="mb-4">
        At <strong>Poshak360</strong>, we value your privacy and are committed to
        protecting your personal information. This Privacy Policy explains how
        we collect, use, and safeguard your data when you use our website or
        services.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect personal details such as your name, email address, phone
        number, shipping address, and payment information when you make a
        purchase or subscribe to our newsletter. We also collect non-personal
        data like browser type, device information, and browsing patterns.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">2. How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>To process and fulfill your orders</li>
        <li>To send updates, promotions, and offers</li>
        <li>To improve our website and customer experience</li>
        <li>To provide customer support and resolve issues</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">3. Data Protection</h2>
      <p className="mb-4">
        We implement strict security measures to protect your personal data
        against unauthorized access, alteration, disclosure, or destruction.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">4. Sharing of Information</h2>
      <p className="mb-4">
        We do not sell or trade your personal data. However, we may share
        information with trusted service providers who assist us in operating
        our website, conducting business, or serving you—under strict
        confidentiality agreements.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">5. Cookies</h2>
      <p className="mb-4">
        Our website uses cookies to enhance user experience, track preferences,
        and analyze site traffic. You can choose to disable cookies in your
        browser settings, but this may affect website functionality.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">6. Your Rights</h2>
      <p className="mb-4">
        You have the right to request access to, correction of, or deletion of
        your personal data at any time by contacting us.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">7. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. All changes will be
        posted on this page with the updated date.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">8. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at:  
        <strong> contact@poshak360.com</strong> or call{" "}
        <strong>+880-123-456-789</strong>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;

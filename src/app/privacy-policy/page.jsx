import React from "react";
import PageLayout from "@/components/PageLayout";
import Image from "next/image";
import Link from "next/link";

const TermConditions = () => {
  return (
    <PageLayout>
      <section className="terms-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="terms-content text-center">
                <h1 className="same-heading">Privacy Policy</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="terms" id="terms">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>
                At Hadztech, we are committed to protecting your privacy and
                ensuring that your personal information is handled in a safe and
                responsible manner. This Privacy Policy outlines how we collect,
                use, disclose, and safeguard your information when you visit our
                website <Link href="/">http://hadztech.com</Link>{" "}
                and utilize our services.
              </p>
              <p>
                By accessing or using our Site, you agree to the terms of this
                Privacy Policy. If you do not agree with this policy, please do
                not use our Site.
              </p>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Information We Collect
              </h3>
              <p>We collect two types of information:</p>
              <ul>
                <li>
                  <b>Personal Information:</b> Information that can identify you
                  personally, such as your name, email address, phone number,
                  billing information, and other details you provide when
                  registering or interacting with our services.
                </li>
                <li>
                  <b>Non-Personal Information:</b> Information that does not
                  identify you personally, including demographic data, browser
                  type, IP address, and usage data collected through cookies and
                  analytics tools.
                </li>
              </ul>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                How We Use Your Information
              </h3>
              <p>
                We use the information we collect for various purposes,
                including:
              </p>
              <ul>
                <li>Providing and improving our services</li>
                <li>
                  Communicating with you about your account or transactions
                </li>
                <li>Personalizing your experience on our Site</li>
                <li>Analyzing Site usage to enhance functionality</li>
                <li>Complying with legal obligations</li>
              </ul>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Sharing Your Information
              </h3>
              <p>
                We do not sell, trade, or rent your personal information to
                third parties. However, we may share your information in the
                following circumstances:
              </p>
              <ul>
                <li>
                  <b>Service Providers</b>: With trusted third-party vendors who
                  perform services on our behalf, such as payment processing and
                  data hosting.
                </li>
                <li>
                  <b>Legal Compliance:</b> When required by law or to protect
                  our rights, property, or safety.
                </li>
                <li>
                  <b>Business Transfers:</b> In connection with a merger,
                  acquisition, or sale of assets.
                </li>
              </ul>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Cookies and Tracking Technologies
              </h3>
              <p>
                Our Site uses cookies and similar technologies to enhance user
                experience and analyze Site usage. You can control cookie
                settings through your browser, but disabling cookies may affect
                certain functionalities of the Site.
              </p>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Data Security
              </h3>
              <p>
                We implement reasonable security measures to protect your
                personal information from unauthorized access, alteration, or
                destruction. However, no method of transmission over the
                Internet is 100% secure, and we cannot guarantee absolute
                security.
              </p>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Your Rights and Choices
              </h3>
              <p>
                Depending on your location, you may have rights regarding your
                personal information, including:
              </p>
              <ul>
                <li>Accessing and correcting your data</li>
                <li>Requesting deletion of your data</li>
                <li>Opting out of marketing communications</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the
                information below.
              </p>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Third-Party Links
              </h3>
              <p>
                Our Site may contain links to third-party websites. We are not
                responsible for the privacy practices or content of these
                external sites.
              </p>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Changes to This Privacy Policy
              </h3>
              <p>
                We may update this Privacy Policy periodically to reflect
                changes in our practices or legal requirements. The "Effective
                Date" at the top of this page indicates the most recent
                revision. We encourage you to review this policy regularly.
              </p>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Sign up forms
              </h3>
              <p>
                Yes, the form links to a privacy policy that clearly states we
                do not share or sell SMS opt-in, or phone numbers for the
                purpose of SMS
              </p>
              <ul>
                <li>Messaging frequency may vary.</li>
                <li>Message and data rates may apply.</li>
                <li>You can opt out any time by texting STOP.</li>
                <li>
                  For assistance, text HELP or visit our website at
                  https://hadztech.com/.
                </li>
                <li>
                  Visit{" "}
                  <Link href="/privacy-policy">
                    https://hadztech.com/privacy-policy
                  </Link>{" "}
                  for privacy policy and{" "}
                  <Link href="/terms-conditions">
                    https://hadztech.com/terms-conditions
                  </Link>{" "}
                  for Terms of Service.
                </li>
              </ul>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Contact Us
              </h3>
              <p>
                If you have any questions or concerns about this Privacy Policy
                or our data practices, please contact us at:
              </p>
              <p>
                <b>Email:</b>{" "}
                <Link href="mailto:info@hadztech.com">info@hadztech.com</Link>
              </p>
              <p>
                <b>Website:</b>{" "}
                <Link href="/contact-us">
                  http://hadztech.com/contact-us
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TermConditions;

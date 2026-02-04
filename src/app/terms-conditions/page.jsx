import React from "react";
import PageLayout from "@/components/PageLayout";
import Link from "next/link";

const TermConditions = () => {
  return (
    <PageLayout>
      <section className="terms-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="terms-content text-center">
                <h1 className="same-heading">Terms Condtions</h1>
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
                These Terms of Use govern your access to and use of the services
                and products provided by Hadztech. By registering for or using
                any of our services, you agree that you have read, understood,
                and accepted these Terms in their entirety. If you do not agree
                with these Terms, please do not use our services or products.
              </p>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Coverage & Scope
              </h3>
              <p>
                These Terms apply to your use of the services and products
                offered by Hadztech, including any websites owned and operated
                by Hadztech. These Terms do not extend to third-party services
                or websites to which we may link, nor do they apply to entities
                that we do not own or control, including any third-party
                providers of products or services.
              </p>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Filing a Complaint
              </h3>
              <p>
                If you are dissatisfied with any of our services, we will work
                to find a mutually agreeable solution. If a resolution cannot be
                reached, and you wish to file a formal complaint, we encourage
                you to reach out to us in writing before proceeding with any
                formal claims. Complaints should only be filed if we have been
                unable to resolve the issue to your satisfaction.
              </p>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Eligibility for Refunds
              </h3>
              <p>
                At Hadztech, we take every project seriously and ensure that our
                clients receive the agreed-upon deliverables. However, if a
                dispute arises and the matter goes through a resolution process,
                refund requests will be considered according to the following
                guidelines for specific services:
              </p>
              <h4>Application Programming</h4>
              <ul>
                <li>
                  <b>Full Refund: </b>If the project has not yet been initiated.
                </li>
                <li>
                  <b>Partial Refund:</b> If the project has begun but is not
                  completed as agreed upon in the scope of work and contract,
                  Hadztech may offer a partial refund at its discretion. The
                  refund will be calculated based on the proportion of the
                  project completed.
                </li>
              </ul>
              <h4>Dedicated Hiring</h4>
              <ul>
                <li>
                  <b>Full Refund: </b>If there is a delay in starting the
                  project by the assigned staff (e.g., programmer, designer,
                  content writer, SEO expert, etc.)
                </li>
                <li>
                  <b>Proportionate Refund:</b> If the client cancels the project
                  at any time during its course.
                </li>
                <li>
                  <b>No Refund for Work Done:</b> Refunds will not be issued for
                  work already completed. If the client is unsatisfied with the
                  work at any point, they must notify our Project Manager
                  immediately to request discounts or adjustments.
                </li>
              </ul>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Applicability of the Delivery Policy
              </h3>
              <p>
                The following factors will impact our ability to honor the
                delivery schedule and refund commitments:
              </p>
              <ul>
                <li>
                  <b>Timely Payments:</b> A project is not considered void if
                  the agreed payments are not made as specified in the proposal.
                  Delayed or missed payments may result in delays or halts to
                  the project.
                </li>
                <li>
                  <b>Timely Communication:</b> Cubix is not liable for delays
                  caused by the client’s failure to provide timely feedback or
                  required information. The client must maintain consistent
                  communication for successful project completion.
                </li>
                <li>
                  <b>Completeness of Information:</b> If the client does not
                  provide complete information or an accurate scope of the
                  project during the initiation phase, Hadztech is not obligated
                  to meet the delivery or refund commitments. We will only
                  compensate for delays resulting from our own internal
                  processes, unless a special agreement with a penalty clause
                  for delays is in place.
                </li>
              </ul>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Limitation of Liability
              </h3>
              <p>
                Hadztech's liability is limited to the value of the portion of
                the project that is incomplete at any given time, as specified
                in the proposal. We are not liable for any loss or damage
                resulting from services delivered, not delivered, or delayed
                services. If the client cancels the project, and the
                cancellation is communicated in writing, the client is eligible
                for a refund as per our refund policy.
              </p>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Processing of Refunds
              </h3>
              <p>
                Refund requests, once approved, will be processed within 5
                business days from the cancellation date. Refunds will be issued
                using the same method of payment used for the original
                transaction, whether by check, credit card, or other payment
                methods.
              </p>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Termination of Services
              </h3>
              <p>
                Hadztech reserves the right to terminate or suspend services to
                any user who violates these Terms of Use. Termination may occur
                without notice if we believe there has been a breach of these
                Terms or if we are required to do so by law.
              </p>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Modifications to the Terms
              </h3>
              <p>
                We reserve the right to update or modify these Terms of Use at
                any time. Any changes will be posted on this page, and the
                "Effective Date" at the top will be updated accordingly. It is
                your responsibility to review these Terms periodically. Your
                continued use of our services after such modifications
                constitutes your acceptance of the updated Terms.
              </p>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Governing Law
              </h3>
              <p>
                These Terms of Use shall be governed by and construed in
                accordance with the laws of Houston, USA, without regard to its
                conflict of law principles. Any disputes arising out of or
                related to these Terms shall be subject to the exclusive
                jurisdiction of the courts located in Houston, TX.
              </p>
              <h3>
                {/* <Image
                  src="/assets/images/fa-vector-gn.webp"
                  className="Image-fluid"
                  alt="fa-art"
                /> */}
                Contact Us
              </h3>
              <p>
                If you have any questions, concerns, or complaints regarding
                these Terms of Use, please contact us using the details below:
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
              <p>
                By using our services, you agree to abide by these Terms and
                Conditions. If you do not agree to these Terms, please refrain
                from using our services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TermConditions;

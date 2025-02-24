import Head from 'next/head';

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms and Conditions</title>
      </Head>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">Terms and Conditions</h1>
        <p className="text-gray-600 text-sm text-center mb-6">Last updated: [Date]</p>
        
        <section className="mb-6">
          <p className="text-gray-700 leading-relaxed">
            By accessing this website, you agree to be bound by these Terms and Conditions. If you do
            not agree with any part of these terms, please do not use our website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Use of the Website</h2>
          <p className="text-gray-700 leading-relaxed">
            You agree to use the website only for lawful purposes and in a way that does not infringe
            on the rights of others or restrict their use of the website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Intellectual Property</h2>
          <p className="text-gray-700 leading-relaxed">
            The content on this website, including text, graphics, logos, and images, is the property
            of our company and protected by copyright laws.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed">
            We are not responsible for any damages resulting from the use of this website. Your use
            of the site is at your own risk.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Changes to These Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update our Terms and Conditions from time to time. It is your responsibility to
            review this page periodically for any changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about our Terms and Conditions, please contact us at
            <a href="mailto:support@example.com" className="text-blue-500 hover:underline"> support@example.com</a>.
          </p>
        </section>
      </div>
    </>
  );
}
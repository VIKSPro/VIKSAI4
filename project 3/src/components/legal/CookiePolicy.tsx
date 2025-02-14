export default function CookiePolicy() {
  return (
    <div className="py-24">
      <article className="max-w-4xl mx-auto px-4 text-gray-200">
        <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>
        <p className="text-gray-300">
          Last updated: March 12, 2024
        </p>
        
        <section>
          <h2>1. What Are Cookies</h2>
          <p className="mb-4">
            Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience and understand how you use our site.
          </p>
        </section>

        <section>
          <h2>2. How We Use Cookies</h2>
          <p className="mb-4">
            We use cookies to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className="text-gray-300">Remember your preferences and settings</li>
            <li className="text-gray-300">Understand how you use our website</li>
            <li className="text-gray-300">Improve our services</li>
            <li className="text-gray-300">Provide personalized content</li>
          </ul>
          <p className="mb-4">
            These cookies help us optimize your experience and deliver more relevant content.
          </p>
        </section>

        <section>
          <h2>3. Managing Cookies</h2>
          <p className="mb-4">
            You can control and manage cookies in your browser settings. Please note that removing or blocking cookies may impact your user experience on our website.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className="text-gray-300">Browser settings to manage cookies</li>
            <li className="text-gray-300">Cookie preferences center</li>
            <li className="text-gray-300">Third-party cookie controls</li>
          </ul>
        </section>

        <section>
          <h2>4. Contact Us</h2>
          <p className="mb-4">
            If you have questions about our use of cookies, please contact us at:{' '}
            <a href="mailto:info@viksproduction.com">
              info@viksproduction.com
            </a>
          </p>
        </section>
      </article>
    </div>
  );
}
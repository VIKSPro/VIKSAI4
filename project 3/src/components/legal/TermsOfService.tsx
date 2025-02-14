export default function TermsOfService() {
  return (
    <div className="py-24">
      <article className="max-w-4xl mx-auto px-4 text-gray-200">
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
        <p className="text-gray-300">
          Last updated: March 12, 2024
        </p>
        
        <section>
          <h2>1. Agreement to Terms</h2>
          <p className="mb-4">
            By accessing or using VIKS AI's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
          </p>
        </section>

        <section>
          <h2>2. Use License</h2>
          <p className="mb-4">
            Upon purchasing our services, you are granted a license to use the AI-generated content according to the terms of your selected plan. This license is non-transferable and subject to these terms.
          </p>
        </section>

        <section>
          <h2>3. Intellectual Property</h2>
          <p className="mb-4">
            You retain ownership of your original content. VIKS AI retains ownership of the AI technology, algorithms, and platform used to create the avatars.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className="text-gray-300">Full ownership of generated videos</li>
            <li className="text-gray-300">Rights to use in any commercial context</li>
            <li className="text-gray-300">Platform and technology remain VIKS AI property</li>
          </ul>
        </section>

        <section>
          <h2>4. Contact</h2>
          <p className="mb-4">
            Questions about the Terms of Service should be sent to:{' '}
            <a href="mailto:info@viksproduction.com">
              info@viksproduction.com
            </a>
          </p>
        </section>
      </article>
    </div>
  );
}
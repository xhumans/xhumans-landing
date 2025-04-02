import Image from 'next/image';
import DemoEmbed from '@/components/DemoEmbed';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-text-primary">
              XTRAORDINARY HUMANS
            </h1>
            <p className="text-xl mb-8 text-text-primary">
              Chat with the World's Greatest Minds, Anytime
            </p>
            <button className="bg-primary-500 hover:bg-primary-700 text-text-primary font-bold py-3 px-8 rounded-lg transition-colors">
              Get Early Access
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-text-primary">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-primary-500">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Natural Conversations</h3>
              <p className="text-gray-700">Experience two-way conversations with AI that feels human and emotionally responsive.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-primary-500">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Realistic Avatars</h3>
              <p className="text-gray-700">Interact with lifelike digital humans through video, audio, or text - your choice.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-primary-500">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Domain Expertise</h3>
              <p className="text-gray-700">Each digital human comes with specific knowledge domains and conversational styles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-text-primary">Experience XHumans</h2>
          <p className="text-center text-text-secondary max-w-3xl mx-auto mb-10">
            Try our interactive demo to see how XHumans creates natural, engaging conversations with digital humans.
          </p>
          <DemoEmbed />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-text-primary">Ready to experience the future?</h2>
          <p className="text-xl mb-8 text-text-secondary max-w-2xl mx-auto">
            Join our early access program and be among the first to interact with our digital humans.
          </p>
          <button className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Get Early Access
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">XHumans</h2>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-primary-300 transition-colors">About</a>
              <a href="#" className="hover:text-primary-300 transition-colors">Contact</a>
              <a href="#" className="hover:text-primary-300 transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary-300 transition-colors">Terms</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Eugenia Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
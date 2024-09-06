"use client";
export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-green-500"># Get In Touch</h2>
      <p className="mb-6 text-xl">
        I&apos;m always open to discussing new projects, innovative ideas, or
        opportunities to be part of your visions.
      </p>
      <div className="flex justify-center space-x-6">
        <a
          href="https://www.linkedin.com/in/martin-kondor"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-green-500 transition-colors"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/MartinKondor/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-green-500 transition-colors"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="mailto:martinkondor@gmail.com"
          className="text-3xl hover:text-green-500 transition-colors"
        >
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </section>
  );
}

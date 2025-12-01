import ContactForm from "./contact-form";

export default function ContactSection() {
  return (
    <section id="contact" className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="font-headline text-4xl sm:text-5xl font-bold mb-4 animate-fade-in-up">
          Let's Connect
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Have a project in mind or just want to say hi? Drop me a line. I'm always excited to collaborate on new and interesting ideas.
        </p>
      </div>
      <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <ContactForm />
      </div>
    </section>
  );
}

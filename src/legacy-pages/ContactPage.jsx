import { useState } from 'react';

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus('Please complete all fields.');
      return;
    }

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!validEmail.test(form.email)) {
      setStatus('Please enter a valid email address.');
      return;
    }

    setStatus('Thanks! Your message is ready to send.');
    setForm({ name: '', email: '', message: '' });
  }

  return (
    <section className="section container">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h2>Let’s build something memorable.</h2>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
        <input type="email" placeholder="Your email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
        <textarea rows="5" placeholder="Tell us about your project" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })}></textarea>
        <button className="btn btn-primary" type="submit">Send Message</button>
        <p className="form-message">{status}</p>
      </form>
    </section>
  );
}

export default ContactPage;

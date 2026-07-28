const services = [
  { title: 'Responsive Design', text: 'Flexible layouts optimized for phone, tablet, and desktop.' },
  { title: 'Reusable Components', text: 'Build pages faster with modular UI building blocks.' },
  { title: 'Conversion Focus', text: 'Clear calls to action that guide visitors smoothly.' },
];

function ServicesPage() {
  return (
    <section className="section container">
      <div className="section-heading">
        <p className="eyebrow">Services</p>
        <h2>Everything needed to launch with confidence.</h2>
      </div>
      <div className="card-grid">
        {services.map((service) => (
          <article className="card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ServicesPage;

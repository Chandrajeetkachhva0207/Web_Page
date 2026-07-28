import { Link } from 'react-router-dom';

const highlights = [
  { title: 'Fast Launch', text: 'Shipping-ready layouts built for speed.' },
  { title: 'Modern Design', text: 'Polished visuals with a premium feel.' },
  { title: 'Growth Ready', text: 'Built for campaigns and conversion.' },
];

function HomePage() {
  return (
    <section className="hero container">
      <div className="hero-content">
        <p className="eyebrow">Modern e-commerce experience</p>
        <h1>Build a standout brand with smart digital products.</h1>
        <p>
          NextGen Store helps teams launch beautiful, responsive experiences with reusable components and clear messaging.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-primary" to="/contact">Get Started</Link>
          <Link className="btn btn-secondary" to="/services">Explore Services</Link>
        </div>
      </div>
      <div className="hero-card">
        <h3>What you get</h3>
        <ul className="feature-list">
          {highlights.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default HomePage;

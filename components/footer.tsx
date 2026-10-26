const socials = [
  { name: "TikTok", path: "M16 3h4c.3 2.5 1.8 4 4 4.5v4a10 10 0 0 1-4-1.3V18a7 7 0 1 1-7-7h1v4h-1a3 3 0 1 0 3 3V3Z" },
  { name: "Facebook", path: "M18 5h4V1h-4c-4 0-6 2.5-6 6v3H8v4h4v12h5V14h4l1-4h-5V7c0-1.3.5-2 1-2Z" },
  { name: "Instagram", path: "" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <h3>KUNTIQ</h3>
      <p>Cacao, café y experiencias sensoriales.</p>
      <p className="footer-location">Tienda virtual · San Miguel, Lima, Perú</p>
      <div className="footer-socials" aria-label="Redes sociales de KUNTIQ">
        {socials.map((social) => (
          <div className="footer-social" key={social.name}>
            <svg viewBox="0 0 28 28" fill="currentColor" aria-hidden="true">
              {social.name === "Instagram" ? <><rect x="4" y="4" width="20" height="20" rx="6" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="14" cy="14" r="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="20" cy="8" r="1.4" /></> : <path d={social.path} />}
            </svg>
            <span>{social.name}<small>Próximamente</small></span>
          </div>
        ))}
      </div>
      <p>© {new Date().getFullYear()} KUNTIQ.</p>
    </footer>
  );
}

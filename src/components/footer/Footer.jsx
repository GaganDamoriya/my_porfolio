const Footer = () => {
  return (
    <footer
      className="text-center py-6 text-sm"
      style={{
        color: 'var(--text-secondary)',
        borderTop: '1px solid var(--border)',
        backgroundColor: 'var(--bg-elevated)',
      }}
    >
      Designed &amp; built by{' '}
      <span style={{ color: 'var(--accent)' }}>Gagan Prakash</span> · 2025
    </footer>
  );
};

export default Footer;

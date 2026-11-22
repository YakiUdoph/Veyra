export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="page-shell header-inner">
        <a className="brand" href="#top" aria-label="Veyra prototype home">
          <span className="brand-mark" aria-hidden="true">
            V
          </span>
          <span>
            Veyra
            <small>working name</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#method">Method</a>
          <a href="#tracks">Tracks</a>
          <a href="#status">Status</a>
        </nav>
        <div className="locale-control">
          <span aria-hidden="true">EN</span>
          <span className="locale-label">Interface: English</span>
        </div>
      </div>
    </header>
  );
}

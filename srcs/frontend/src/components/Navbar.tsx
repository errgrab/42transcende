export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="/" className="navbar-brand">markët</a>

        <div className="navbar-search">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input type="text" placeholder="Search products, sellers..." />
        </div>

        <div className="navbar-actions">
          <button className="btn-ghost">Sell</button>
          <button className="btn-ghost">Sign in</button>
          <button className="btn-cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span className="cart-count">0</span>
          </button>
        </div>
      </div>

      <div className="navbar-categories">
        {["All", "Electronics", "Clothing", "Home", "Books", "Art", "Sports", "Collectibles"].map((cat) => (
          <a key={cat} href="#" className={cat === "All" ? "active" : ""}>{cat}</a>
        ))}
      </div>
    </nav>
  )
}

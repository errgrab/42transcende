export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="navbar-brand">markët</span>
          <p>A marketplace built for independent sellers and curious buyers.</p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Marketplace</h4>
            <a href="#">Browse</a>
            <a href="#">Categories</a>
            <a href="#">Featured</a>
            <a href="#">New Arrivals</a>
          </div>
          <div className="footer-col">
            <h4>Sellers</h4>
            <a href="#">Start Selling</a>
            <a href="#">Seller Guide</a>
            <a href="#">Fees</a>
            <a href="#">Dashboard</a>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <a href="#">Help Center</a>
            <a href="#">Contact</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 markët. All rights reserved.</span>
      </div>
    </footer>
  )
}

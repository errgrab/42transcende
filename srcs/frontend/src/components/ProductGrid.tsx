import ProductCard, { type Product } from './ProductCard'

const MOCK_PRODUCTS: Product[] = [
  { id: 1,  title: "Vintage Leather Jacket",      price: 89.00,  seller: "retrowear",    category: "Clothing"     },
  { id: 2,  title: "Mechanical Keyboard",          price: 120.00, seller: "techdesk",     category: "Electronics"  },
  { id: 3,  title: "Handmade Ceramic Mug",         price: 24.00,  seller: "clayworks",    category: "Home"         },
  { id: 4,  title: "Film Camera – Minolta X-700",  price: 145.00, seller: "analogframes",  category: "Electronics"  },
  { id: 5,  title: "Abstract Watercolor Print",    price: 38.00,  seller: "studioink",    category: "Art"          },
  { id: 6,  title: "Wool Beanie – Handknit",       price: 18.00,  seller: "knitco",       category: "Clothing"     },
  { id: 7,  title: "Portable Record Player",       price: 75.00,  seller: "vinylhouse",   category: "Electronics"  },
  { id: 8,  title: "Running Shoes – barely used",  price: 55.00,  seller: "trailgear",    category: "Sports"       },
]

export default function ProductGrid() {
  return (
    <section className="product-section">
      <div className="section-header">
        <h2>Recent listings</h2>
        <a href="#" className="see-all">See all →</a>
      </div>

      <div className="product-grid">
        {MOCK_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

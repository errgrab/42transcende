import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="storefront">
      <Navbar />
      <main>
        <Hero />
        <div className="container">
          <ProductGrid />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App

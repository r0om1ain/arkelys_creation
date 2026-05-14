import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { products } from "../data/products";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <section className="section">
          <div className="container">
            <p className="section-kicker">Créations artisanales</p>
            <h2>Des fleurs éternelles pour chaque occasion</h2>

            <div className="products-grid">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section className="section soft-section">
          <div className="container split">
            <div>
              <p className="section-kicker">Sur mesure</p>
              <h2>Une création pensée pour vous</h2>
              <p>
                Chaque composition peut être adaptée selon les couleurs, le
                message ou l’occasion : anniversaire, mariage, naissance,
                décoration ou simple attention.
              </p>
            </div>

            <a
              className="button"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              Commander sur Instagram
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { products } from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <>
        <Header />
        <main className="section">
          <div className="container">
            <h1>Produit introuvable</h1>
            <Link className="button" to="/">
              Retour à l’accueil
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="product-page">
        <div className="container product-detail">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-detail-content">
            <p className="section-kicker">Création artisanale</p>
            <h1>{product.name}</h1>
            <p>{product.description}</p>

            <div className="product-price">À partir de {product.price}€</div>

            <div className="product-actions">
              <a
                className="button"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                Commander sur Instagram
              </a>

              <Link className="button secondary" to="/">
                Retour
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
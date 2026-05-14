import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} />

      <div className="product-content">
        <h3>{product.name}</h3>
        <p>{product.description}</p>

        <div className="product-footer">
          <span>À partir de {product.price}€</span>
          <Link to={`/produit/${product.id}`}>Voir</Link>
        </div>
      </div>
    </article>
  );
}
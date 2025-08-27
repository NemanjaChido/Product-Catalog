import "../css/ProductCard.css"

const ProductCard = ({product}) =>  {

    const status = product.Discount;

    return <section className="product-card">
        <picture className="product-image">
            <source media="(min-width: 768px)" srcSet={product.imageUrl.tablet}/>
            <img src={product.imageUrl.mobile} alt={product.title} />
        </picture>
        <section className="product-info">
            <h2 className="title">{product.title}</h2>
            {!status && <p className="price">{product.price}</p>}
            {status && (
                <p className="price">
                    <span className="original-price" style={{textDecoration: 'line-through', color: 'red', marginRight: '0.8rem'}}>
                        {product.price}
                    </span>
                    <span className="discounted-price" style={{color: 'green'}}>
                        {status}
                    </span>
                </p>
            )}
            <p className="description">"{product.description}"</p>
            <button className="add-to-cart">Add to Cart</button>
        </section>
    </section>
};


export default ProductCard;
import ProductCard from "../components/ProductCard";
import "../css/ItemPage.css";

const ItemPage = () => {

    const products = [
        {
            id: 1, 
            title: "Winter Jacket", 
            price: "$29.50", 
            description: "tailored to your taste", 
            imageUrl: { 
                mobile: "./src/assets/winter-jacket@bulbul-ahmed-mobile.webp",
                tablet: "./src/assets/winter-jacket@bulbul-ahmed-Tablet.webp"
            }, 
            Discount: "$20"
        },
        {   id: 2, 
            title: "Winter Jacket", 
            price: "$25", 
            description: "Get your jacket right, everthing else aligns", 
            imageUrl: {
                mobile: "./src/assets/jacket@pesce-huang--MqBBgzryAc-mobile.webp",
                tablet: "./src/assets/jacket@pesce-huang--MqBBgzryAc-Tablet.webp"
            }
        },
        {   id: 3, 
            title: "Leather-Jacket", 
            price: "$140", 
            description: "Tailored to your taste",
            imageUrl: {
                mobile: "./src/assets/leather-jacket-mobile.webp",
                tablet: "./src/assets/leather-jacket-Tablet.webp"
            }
        },
        {   id: 4, 
            title: "Italian Overcoat", 
            price: "$55", 
            description: "Luxurious Tailored Masterpiece",
            imageUrl: {
                mobile: "./src/assets/Italian-Overcoat-mobile.webp",
                tablet: "./src/assets/Italian-Overcoat-Tablet.webp"
            },
            Discount: "$100"
        },
        {   id: 5, 
            title: "hoody", 
            price: "$15", 
            description: "Tailored to your taste",
            imageUrl: {
                mobile: "./src/assets/hoody-mobile.webp",
                tablet: "./src/assets/hoody-Tablet.webp"
            }
        },
        {   id: 6, 
            title: "Jeans Jacket", 
            price: "$50", 
            description: "Timeless Casual Essential",
            imageUrl: {
                mobile: "./src/assets/jean-jacket@zakaria-issaad-mobile.webp",
                tablet: "./src/assets/jean-jacket@zakaria-issaad-Tablet.webp"
            }, 
            Discount: "$45"
        },
        {   id: 7, 
            title: "Denim Jacket", 
            price: "$20", 
            description: "Classic Denim Jacket - Matching fit",
            imageUrl: {
                mobile: "./src/assets/Jacket@nens-love-mobile.webp",
                tablet: "./src/assets/Jacket@nens-love-Tablet.webp"
            },
        },
    ]

    return <div className="product-gallery">
        {products.map((product) => (
             <ProductCard product={product} key={product.id}/>
            )
        )}
    </div>;
};


export default ItemPage;
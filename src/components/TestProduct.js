import TestCard from "./TestCard"
import "./TestProduct.css"

const TestProduct = () => {

    const items = [
        {
            id: 1,
            title: "Product",
            price: 200,
            src: "//cdn.allbirds.com/image/fetch/q_auto,f_auto/w_450,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/carouselCard/en-US/images/6foNxrUUA6gWTdJsjDn2lr/1"
        },
        {
            id: 2,
            title: "Product",
            price: 200,
            src: "//cdn.allbirds.com/image/fetch/q_auto,f_auto/w_450,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/carouselCard/en-US/images/69FFj332jxBH5iR2FjhJxd/1"
        },
        {
            id: 3,
            title: "Product",
            price: 200,
            src: "//cdn.allbirds.com/image/fetch/q_auto,f_auto/w_450,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/carouselCard/en-US/images/2fwdpLI90gBu0Lot4SIEpf/1"
        },
        {
            id: 4,
            title: "Product",
            price: 200,
            src: "//cdn.allbirds.com/image/fetch/q_auto,f_auto/w_450,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/carouselCard/en-US/images/2cFLbOqICKwH8hUhjVNkLc/1"
        },
        {
            id: 5,
            title: "Product",
            price: 200,
            src: "https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/carouselCard/en-US/images/7uzLqv2qatcZtOiq6ItnDR/1"
        },
        {
            id: 6,
            title: "Product",
            price: 200,
            src: "//cdn.allbirds.com/image/fetch/q_auto,f_auto/w_450,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/carouselCard/en-US/images/3tGLTBWhXrlgkxQRSc51im/1"
        }
    ]

    return (
        <div className="testProduct">
            {items.map(item => (
                <TestCard text={"ADD TO CART"} title={item.title} price={item.price} src={item.src} id={item.id}/>
            ))}
        </div>
    );
}

export default TestProduct;
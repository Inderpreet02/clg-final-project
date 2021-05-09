import TestCard from "./TestCard"
import "./TestProduct.css"

const TestProduct = () => {
    return (
        <div className="testProduct">
            <TestCard title={"Product"} price={200} src={"//cdn.allbirds.com/image/fetch/q_auto,f_auto/w_300,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/TX1MPMW_SHOE_ANGLE_GLOBAL_TREE_DASHER_RELAY_WHITE.png?v=1618860596"}/>
        </div>
    );
}

export default TestProduct;
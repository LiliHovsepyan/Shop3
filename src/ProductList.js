import ProductItem from "./ProductItem";

const ProductList = ({products}) => {
    return (
        <div className="ProductList">
            {
                products.map(item => <ProductItem key={item.id} item={item}/>)
            }
        </div>
    );
}

export default ProductList;

const ProductItem = ({item}) => {
    return (
        <div className="ProductItem">
            <img src={item.image} alt=""/>
            <span>{item.color}</span>
            <span>{item.year}</span>
            <span>{item.price}</span>
        </div>
    );
}

export default ProductItem;

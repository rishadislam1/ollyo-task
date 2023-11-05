
const Product = ({product}) => {
    const {id, image} = product;
    return (
        <div>
            <img src={image} alt="" className='rounded-xl border border-gray-400 col-span-2 row-span-2 cursor-pointer' />
        </div>
    );
};

export default Product;
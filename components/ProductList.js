// components/ProductList.js
const ProductList = ({ products }) => {
    return (
      <div>
        {products.length === 0 ? (
          <p>No products found</p>
        ) : (
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <div>
                  <strong>{product.name}</strong> - {product.description} - ${product.price}
                </div>
                <div>
                  <label>
                    Code:
                    <input type="text" placeholder="Enter code" />
                  </label>
                  <label>
                    Quantity:
                    <input type="number" placeholder="Enter quantity" />
                  </label>
                  <label>
                    Price:
                    <input type="text" placeholder="Enter price" />
                  </label>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default ProductList;
  
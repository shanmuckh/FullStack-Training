import React from 'react';

const ProductData = () => {
  const products = [
    {
      id: 1,
      image: 'https://cdn.thewirecutter.com/wp-content/media/2024/11/cheapgaminglaptops-2048px-7981.jpg',
      title: 'Laptop',
      price: 59999
    },
    {
      id: 2,
      image: 'https://www.honor.com/content/dam/honor/sa-en/blog/2024/5-things-a-smartphone-can-do/imgs-01.jpg',
      title: 'Smartphone',
      price: 19999
    },
    {
      id: 3,
      image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MUW33_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=Sk5mNVdNcjhJbUs0R1JIajlMTVBnVlZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUW9odXUzN3kxdU5pZjFrUWErZ2llTVE',
      title: 'Headphones',
      price: 2999
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Product List</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ccc',
              padding: '15px',
              borderRadius: '10px',
              width: '200px',
              textAlign: 'center'
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
            <h3>{product.title}</h3>
            <p>₹ {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductData;
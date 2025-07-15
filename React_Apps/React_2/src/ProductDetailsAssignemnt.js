import React from 'react';

const ProductDetailsAssignemnt = () => {
  const products = [
    {
      id: 1,
      image: 'https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:450/IBXornnilw-hp-victus-15-fa0186tx-gaming-laptop-i-1-1200wx1200h.jpeg',
      title: 'HP-Victus',
      price: 74+','+999
    },
    {
      id: 2,
      image: 'https://m.media-amazon.com/images/I/81vDZyJQ-4L._UF1000,1000_QL80_.jpg',
      title: 'Samsung S20 fe',
      price: 29+','+999
    },
    {
      id: 3,
      image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/OnePlus_bullets_wireless_z2_5.jpg?VersionId=BG2yftRF1kFX0psDvo12SrEmFZAyLPG6&size=690:388',
      title: 'OnePlus Bullets Wireless Z2',
      price: 1+','+999
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

export default ProductDetailsAssignemnt;
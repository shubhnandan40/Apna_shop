import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Example API - you can replace it with your real API
    fetch('https://fakestoreapi.com/products?limit=10')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {/* Hero Section / Banner */}
      <section className="text-center py-5">
        <h1 className="fw-bold display-5 mb-3">Welcome to Apna Shop</h1>
        <p className="lead">Find the best products at unbeatable prices</p>
      </section>

      {/* Product Carousel */}
      <section className="container mb-5">
        <h2 className="mb-4 text-center">Featured Products</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={{ paddingBottom: "40px" }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={product.image}
                  className="card-img-top p-4"
                  alt={product.title}
                  style={{ height: '200px', objectFit: 'contain' }}
                />
                <div className="card-body d-flex flex-column">
                  <h6 className="card-title">{product.title.slice(0, 40)}...</h6>
                  <p className="text-muted">${product.price}</p>
                  <button className="btn btn-primary mt-auto">Buy Now</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}

export default Home;

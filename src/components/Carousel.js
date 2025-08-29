import React from "react";

const CarouselHero = () => {
  // Royalty-free Unsplash images (safe to demo with)
  const slides = [
    {
      src: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop",
      title: "Latest Fashion",
      subtitle: "Shop the trending styles now!",
    },
    {
      src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600&auto=format&fit=crop",
      title: "Welcome to Apna Shop",
      subtitle: "Find the best products at unbeatable prices",
    },
    {
      src: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1600&auto=format&fit=crop",
      title: "Deals You’ll Love",
      subtitle: "Big savings on top brands",
    },
  ];

  return (
    <div className="position-relative">
      {/* Overlay centered text (stays centered over slides) */}
      <div
        className="position-absolute top-50 start-50 translate-middle text-center text-white px-3"
        style={{ zIndex: 2, textShadow: "0 2px 10px rgba(0,0,0,.6)" }}
      >
        <h1 className="fw-bold mb-2">Apna Shop</h1>
        <p className="lead mb-0">Trending styles • Hot deals • Fast delivery</p>
      </div>

      <div
        id="heroCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3500"          // auto-slide every 3.5s
      >
        {/* Dot indicators */}
        <div className="carousel-indicators">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={i}
              className={i === 0 ? "active" : ""}
              aria-current={i === 0 ? "true" : undefined}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          {slides.map((s, i) => (
            <div
              className={`carousel-item ${i === 0 ? "active" : ""}`}
              key={i}
            >
              <img
                src={s.src}
                className="d-block w-100"
                alt={s.title}
                style={{
                  height: "60vh",
                  objectFit: "cover",
                  filter: "brightness(0.7)", // darken a bit for text readability
                }}
              />
              {/* Optional per-slide caption (hidden on small screens) */}
              <div className="carousel-caption d-none d-md-block">
                <h5 className="fw-semibold">{s.title}</h5>
                <p>{s.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Prev / Next */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CarouselHero;

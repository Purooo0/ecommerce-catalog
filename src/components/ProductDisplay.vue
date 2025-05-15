<template>
  <div :class="productCategoryClass" class="product-display-container">
    <div v-if="product" class="product-card">
      <div class="product-card-content">
        <!-- Image Section (Left) -->
        <div class="product-image">
          <img :src="product.image" :alt="product.title" class="product-img" />
        </div>

        <!-- Product Info Section (Right) -->
        <div class="product-info">
          <h2 class="product-title">{{ product.title }}</h2>

          <!-- Category & Rating Section -->
          <div class="category-rating">
            <p class="product-category">{{ product.category }}</p>
            <div class="product-rating">
              <!-- Generate Bullets Based on Rating -->
              <div class="rating-bullets">
                <span v-for="n in 5" :key="n" :class="{'filled': n <= product.rating.rate, 'unfilled': n > product.rating.rate}"></span>
              </div>
              <p class="rating-number">{{ product.rating.rate }} / 5</p>
            </div>
          </div>

          <!-- Line Separator -->
          <hr class="separator"/>

          <!-- Product Description -->
          <p class="product-description">{{ product.description }}</p>

          <!-- Line Separator -->
          <hr class="separator"/>

          <!-- Product Price & Buttons Section -->
          <div class="price-buttons">
            <p class="product-price">Price: ${{ product.price }}</p>
            <div class="buttons">
              <button @click="buyProduct" class="buy-btn">Buy Now</button>
              <button @click="getNextProduct" class="next-btn">Next Product</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>This product is unavailable to show.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: null,
      currentIndex: 1,
    };
  },
  computed: {
    productCategoryClass() {
      return this.product && this.product.category.includes("women's")
        ? "women-section"
        : this.product && this.product.category.includes("men's")
        ? "men-section"
        : "unavailable-product";
    },
  },
  methods: {
    async fetchProduct() {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${this.currentIndex}`
        );
        const data = await response.json();
        
        // Only display products with category men's or women's clothing
        if (
          data.category === "men's clothing" ||
          data.category === "women's clothing"
        ) {
          this.product = data;
        } else {
          this.product = null; // For unavailable products
        }
      } catch (error) {
        console.error("Error fetching product", error);
      }
    },
    getNextProduct() {
      this.currentIndex = this.currentIndex === 20 ? 1 : this.currentIndex + 1;
      this.fetchProduct();
    },
    buyProduct() {
      alert("Product purchased!");
    },
  },
  mounted() {
    this.fetchProduct(); // Memanggil fetchProduct ketika komponen dimuat pertama kali
  },
};
</script>

<style scoped>
/* Gradasi Dinamis Berdasarkan Kategori */
.product-display-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

.men-section {
  background: linear-gradient(to bottom, #D6E6FF 75%, #ffffff 25%);
}

.women-section {
  background: linear-gradient(to bottom, #FDE2FF 75%, #ffffff 25%);
}

.unavailable-product {
  background: #DCDCDC;
}

.product-card {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background: white;
  padding: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-top: 20px;
  width: 100%;
  max-width: 1000px;
}

.product-image {
  flex: 1;
  margin-right: 20px;
}

.product-img {
  width: 150px;  /* Set the width of the product image */
  height: auto;
  border-radius: 8px;
  object-fit: contain;
}

.product-info {
  flex: 2;
  text-align: left;
  display: flex;
  flex-direction: column;
}

.product-title {
  font-size: 22px;
  font-weight: bold;
  color: #1e1e1e;
}

.category-rating {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.product-category {
  font-size: 16px;
  color: #666666;
}

.product-rating {
  display: flex;
  align-items: center;
}

.rating-bullets {
  display: flex;
}

.rating-bullets span {
  width: 20px;
  height: 20px;
  margin-right: 5px;
  border-radius: 50%;
  border: 2px solid transparent;  /* Border warna mengikuti warna penuh */
  background-color: transparent;
}

.rating-bullets .filled {
  background-color: #002772; /* Blue for men's category */
}

.rating-bullets .unfilled {
  background-color: #fff; /* Transparent for unfilled stars */
  border: 2px solid #002772; /* Border color same as filled */
}

.rating-number {
  font-size: 16px;
  color: #666;
  margin-left: 10px;
}

.product-description {
  font-size: 14px;
  color: #666666;
  margin-top: 10px;
}

.separator {
  border: none;
  border-top: 1px solid #ddd;
  margin: 15px 0;
}

.product-price {
  font-size: 18px;
  color: #1e1e1e;
  font-weight: bold;
  margin-top: 15px;
}

.price-buttons {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.buy-btn,
.next-btn {
  padding: 10px 20px;
  margin-top: 15px;
  background-color: transparent;
  color: #002772;
  border: 2px solid #002772;  /* Border color when not hovered */
  border-radius: 5px;
  cursor: pointer;
  flex: 1;
  margin: 0 10px;
  transition: all 0.3s ease;
}

.buy-btn:hover,
.next-btn:hover {
  background-color: #002772;  /* Background color when hovered */
  color: white;
}

.unavailable-product {
  background-color: #f0f0f0;
  color: gray;
}
</style>

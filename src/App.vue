<template>
  <div :class="productCategoryClass">
    <div v-if="product">
      <h2>{{ product.title }}</h2>
      <img :src="product.image" :alt="product.title" />
      <p>{{ product.description }}</p>
      <p>Price: ${{ product.price }}</p>
      <p>Rating: {{ product.rating.rate }} / 5</p>
      <button @click="buyProduct">Buy Now</button>
    </div>
    <div v-else>
      <p>This product is unavailable to show.</p>
    </div>
    <button @click="getNextProduct">Next Product</button>
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
    // Class based on product category
    productCategoryClass() {
      if (!this.product) return "unavailable-product";
      return this.product.category.includes("men's")
        ? "men-section"
        : this.product.category.includes("women's")
        ? "women-section"
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
        
        // Only update the product if it's men's or women's clothing
        if (
          data.category === "men's clothing" ||
          data.category === "women's clothing"
        ) {
          this.product = data;
        } else {
          this.product = null; // Set to null for unavailable products
        }
      } catch (error) {
        console.error("Error fetching product:", error);
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
    this.fetchProduct();
  },
};
</script>

<style scoped>
/* Scoped styles for Men Section */
.men-section {
  background-color: #1a73e8;
  color: white;
  padding: 20px;
  border-radius: 5px;
}

.men-section img {
  max-width: 100%;
  height: auto;
}

/* Scoped styles for Women Section */
.women-section {
  background-color: #fd2eff;
  color: white;
  padding: 20px;
  border-radius: 5px;
}

.women-section img {
  max-width: 100%;
  height: auto;
}

/* Scoped styles for Unavailable Product Section */
.unavailable-product {
  background-color: #dcdcdc;
  color: black;
  padding: 20px;
  border-radius: 5px;
}

.unavailable-product img {
  max-width: 100%;
  height: auto;
}

/* Global Styles (If any) */
body {
  background-color: lightgray;
}
</style>

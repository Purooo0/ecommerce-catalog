<template>
  <div class="product-container">
    <h2>{{ product?.title }}</h2>
    <img :src="product?.image" :alt="product?.title" class="product-image" />
    <p>{{ product?.description }}</p>
    <p>Price: ${{ product?.price }}</p>
    <button @click="buyProduct">Buy Now</button>
    <button @click="getNextProduct">Next Product</button>
  </div>
</template>

<script>
export default {
  props: ['currentIndex'],
  data() {
    return {
      product: null,
    };
  },
  methods: {
    async fetchProduct() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${this.currentIndex}`);
        const data = await response.json();
        // Only display products with the correct categories
        if (
          data.category === "men's clothing" ||
          data.category === "women's clothing"
        ) {
          this.product = data;
        } else {
          this.product = null;
        }
      } catch (error) {
        console.error("Error fetching product", error);
      }
    },
    getNextProduct() {
      // Emit event to parent to change currentIndex
      this.$emit("next-product");
    },
    buyProduct() {
      alert("Product purchased!");
    },
  },
  watch: {
    currentIndex() {
      this.fetchProduct();
    },
  },
  mounted() {
    this.fetchProduct();
  },
};
</script>

<style scoped>
.product-container {
  text-align: center;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-container img {
  width: 200px;
  height: auto;
  margin: 20px 0;
}

.product-container button {
  margin: 10px;
  padding: 10px 20px;
  background-color: #720060;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.product-container button:hover {
  background-color: #d6e6ff;
}
</style>

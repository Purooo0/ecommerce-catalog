<template>
    <div class="men-section">
      <h1>Men's Clothing</h1>
      <ProductDisplay :currentIndex="currentIndex" @next-product="nextProduct" />
    </div>
  </template>
  
  <script>
  import ProductDisplay from '../components/ProductDisplay.vue';
  
  export default {
    components: {
      ProductDisplay,
    },
    data() {
      return {
        currentIndex: 1,
      };
    },
    methods: {
      nextProduct() {
        this.currentIndex = this.currentIndex === 20 ? 1 : this.currentIndex + 1;
      },
    },
  };
  </script>
  
  <style scoped>
  .men-section {
    background-color: #1a73e8; /* Change to your desired color */
    color: white;
    padding: 20px;
    border-radius: 5px;
  }
  </style>
  
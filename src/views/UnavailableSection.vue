<template>
    <div class="unavailable-section">
      <h1>Unavailable Product</h1>
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
  .unavailable-section {
    background-color: #dcdcdc; /* Change to your desired color */
    padding: 20px;
    border-radius: 5px;
  }
  </style>
  
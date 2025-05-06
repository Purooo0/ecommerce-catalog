<template>
    <div class="women-section">
      <h1>Women's Clothing</h1>
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
  .women-section {
    background-color: #fd2eff; /* Change to your desired color */
    color: white;
    padding: 20px;
    border-radius: 5px;
  }
  </style>
  
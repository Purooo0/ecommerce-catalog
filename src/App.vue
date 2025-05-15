<template>
  <div id="app">
    <!-- Router View: this will render the current component based on route -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
#app {
  text-align: center;
  padding: 20px;
}
</style>
<template>
  <div id="app">
    <router-view></router-view>
    <div v-if="loading" class="loading">Loading...</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      loading: false,
    };
  },
};
</script>

<style></style>

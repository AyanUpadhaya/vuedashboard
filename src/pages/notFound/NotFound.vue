<template>
    <div class="h-screen bg-authBg bg-bottom bg-no-repeat bg-cover flex flex-col items-center justify-center w-full">
      <div class="text-center space-y-3">
        <p class="text-8xl font-extrabold font-sans text-black-900">404</p>
        <p class="text-5xl font-semibold font-sans text-black-700">This page does not exist</p>
        <button class="btn btn-success text-white text-2xl text-center px-8 py-4 cursor-pointer rounded-xl h-auto" @click="goHome">Go Home</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goHome() {
        // Navigate to home page or any other route as needed
        this.$router.push('/');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your scoped styles here */
  </style>
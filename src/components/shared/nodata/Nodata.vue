<template>
    <div class="w-full py-10 h-full flex items-center justify-center">
      <div>
        <div class="mb-6">
          <img :src="noData" alt="" class="w-48" />
        </div>
        <h2 class="text-center text-lg">No data found!</h2>
      </div>
    </div>
  </template>
  
  <script>
  import { nodata } from "../../../assets/getAssets";
  
  export default {
    data() {
      return {
        noData: nodata,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any scoped styles here if needed */
  </style>
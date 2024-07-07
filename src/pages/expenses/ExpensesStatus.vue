<template lang="">
    <div class="flex-1 py-[60px] px-[100px] bg-white">
        <!-- top header -->
        <div class="flex justify-between items-start mb-[46px]">
          <div class="max-w-[195px] flex flex-col gap-[10px]">
            <h2 class="font-semibold text-[40px] leading-[50px]">Expenses</h2>
            <p class="text-black-900 opacity-50 text-base">
              01 - 25 March, 2020
            </p>
          </div>
          <div class="flex gap-[11px] items-center pt-4">
            <div>
              <img :src="users" alt="" />
            </div>
            <button>
              <img :src="addicon" alt="" />
            </button>
          </div>
        </div>

        <!-- stats -->
        <div class="mb-[47px]">
          <img :src="stats" alt="" />
        </div>

        <!-- today -->
        <div class="flex flex-col gap-[25px] mb-[59px]">
          <!-- top box -->
          <div class="h-[38px]">
            <div class="font-semibold font-avenir text-[18px] leading-[30px]">
              Today
            </div>
          </div>

          <!-- all details -->
          <div class="w-full flex flex-col gap-6">
            <!-- gocery -->
            <div class="flex justify-between">
              <div class="flex gap-[17px] items-center">
                <div class="shrink-0">
                  <img :src="cart" alt="" />
                </div>
                <div class="flex flex-col gao-1">
                  <h3 class="text-base font-medium font-poppins text-black-400">
                    Grocery
                  </h3>
                  <p class="text-sm font-poppins text-black-300 opacity-50">
                    5:12 pm • Belanja di pasar
                  </p>
                </div>
              </div>
              <div class="text-base text-black-400 font-semibold">-326,800</div>
            </div>

            <!-- transport -->
            <div class="flex justify-between">
              <div class="flex gap-[17px] items-center">
                <div class="shrink-0">
                  <img :src="transport" alt="" />
                </div>
                <div class="flex flex-col gao-1">
                  <h3 class="text-base font-medium font-poppins text-black-400">
                    Transportation
                  </h3>
                  <p class="text-sm font-poppins text-black-300 opacity-50">
                    5:12 pm • Naik bus umum
                  </p>
                </div>
              </div>
              <div class="text-base text-black-400 font-semibold">-15,000</div>
            </div>

            <!-- housing -->
            <div class="flex justify-between">
              <div class="flex gap-[17px] items-center">
                <div class="shrink-0">
                  <img :src="home" alt="" />
                </div>
                <div class="flex flex-col gao-1">
                  <h3 class="text-base font-medium font-poppins text-black-400">
                    Housing
                  </h3>
                  <p class="text-sm font-poppins text-black-300 opacity-50">
                    5:12 pm • Naik bus umum
                  </p>
                </div>
              </div>
              <div class="text-base text-black-400 font-semibold">-185.750</div>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-[25px] mb-[59px]">
          <!-- top box -->
          <div class="h-[38px]">
            <div class="font-semibold font-avenir text-[18px] leading-[30px]">
              Monday, 23 March 2020
            </div>
          </div>

          <!-- all details -->
          <div class="w-full flex flex-col gap-6">
            <!-- food -->
            <div class="flex justify-between">
              <div class="flex gap-[17px] items-center">
                <div class="shrink-0">
                  <img :src="food" alt="" />
                </div>
                <div class="flex flex-col gao-1">
                  <h3 class="text-base font-medium font-poppins text-black-400">
                    Food and Drink
                  </h3>
                  <p class="text-sm font-poppins text-black-300 opacity-50">
                    5:12 pm • Makan Steak
                  </p>
                </div>
              </div>
              <div class="text-base text-black-400 font-semibold">-156,800</div>
            </div>

            <!-- entertainment -->
            <div class="flex justify-between">
              <div class="flex gap-[17px] items-center">
                <div class="shrink-0">
                  <img :src="entertainment" alt="" />
                </div>
                <div class="flex flex-col gao-1">
                  <h3 class="text-base font-medium font-poppins text-black-400">
                    Entertainment
                  </h3>
                  <p class="text-sm font-poppins text-black-300 opacity-50">
                    5:12 pm • Nonton Bioskop
                  </p>
                </div>
              </div>
              <div class="text-base text-black-400 font-semibold">-35.200</div>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
import {
  addicon,
  users,
  stats,
  cart,
  home,
  transport,
  food,
  entertainment,

} from "../../assets/getAssets";

export default {
  data() {
    return {
      addicon,
      users,
      stats,
      cart,
      home,
      transport,
      food,
      entertainment,

    };
  },
 
};
</script>
<style lang="">
    
</style>
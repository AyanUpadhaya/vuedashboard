<template lang="">
     <div class="w-[350px] bg-white-60 pt-[76px] px-[50px] pb-[67px]">
        <div class="flex flex-col justify-between gap-[67px]">
          <div>
            <div class="mb-[30px]">
                <h3 class="font-semibold font-avenir text-xl text-black-600">
                Where your money go?
                </h3>
            </div>
            <div class="flex flex-col gap-[30px]">
              <!-- food and drinks -->
                <div>
                    <!-- details -->
                    <div class="flex justify-between items-center mb-2">
                        <h4 class="font-poppins text-[13px] text-black-400 font-medium">Food and Drinks</h4>
                        <p class="font-poppins text-[13px] text-black-400">
                            872.400
                        </p>
                        
                    </div>
                    <!-- bar -->
                    <div>
                        <BaseProgressBar  :percentage="35" />
                    </div>

                </div>

              <!-- shopping -->
               <div>
                    <!-- details -->
                    <div class="flex justify-between items-center mb-2">
                        <h4 class="font-poppins text-[13px] text-black-400 font-medium">Shopping</h4>
                        <p class="font-poppins text-[13px] text-black-400">
                            1.378.200
                        </p>
                        
                    </div>
                    <!-- bar -->
                    <div>
                        <BaseProgressBar  :percentage="55" />
                    </div>

                </div>

              <!-- housing -->

              <div>
                    <!-- details -->
                    <div class="flex justify-between items-center mb-2">
                        <h4 class="font-poppins text-[13px] text-black-400 font-medium">Housing</h4>
                        <p class="font-poppins text-[13px] text-black-400">
                            928.500
                        </p>
                        
                    </div>
                    <!-- bar -->
                    <div>
                        <BaseProgressBar  :percentage="35" />
                    </div>

                </div>

              <!-- transportation -->

              <div>
                    <!-- details -->
                    <div class="flex justify-between items-center mb-2">
                        <h4 class="font-poppins text-[13px] text-black-400 font-medium">Transportation</h4>
                        <p class="font-poppins text-[13px] text-black-400">
                            420.700
                        </p>
                        
                    </div>
                    <!-- bar -->
                    <div>
                        <BaseProgressBar  :percentage="30" />
                    </div>

                </div>

                <!-- Vehicle -->

              <div>
                    <!-- details -->
                    <div class="flex justify-between items-center mb-2">
                        <h4 class="font-poppins text-[13px] text-black-400 font-medium">Vehicle</h4>
                        <p class="font-poppins text-[13px] text-black-400">
                            520.000
                        </p>
                        
                    </div>
                    <!-- bar -->
                    <div>
                        <BaseProgressBar  :percentage="40" />
                    </div>

                </div>
                
            </div>
          </div>

          <div>
            <div class="w-[250px] h-[291px] relative">
              <div
                class="absolute bottom-0 w-[250px] h-[250px] rounded-xl bg-[#EDF0F6] px-[25px] pb-[25px]"
              >
                <div class="flex w-full justify-between -mt-10">
                  <img :src="box" />
                  <img :src="illustration" />
                </div>

                <div class="mt-[19px]">
                  <div class="mb-5">
                    <h3
                      class="font-poppins text-base font-semibold text-black-400 mb-1"
                    >
                      Save more money
                    </h3>
                    <p
                      class="text-black-300 opacity-70 font-poppins text-xs leading-[21px]"
                    >
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim.
                    </p>
                  </div>

                  <div>
                    <button class="text-[13px] font-poppins font-semibold bg-[#101010] rounded-lg w-full text-white py-[13px]">
                        VIEW TIPS
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
import {

  illustration,
  box,
} from "../../assets/getAssets";
import BaseProgressBar from "../../components/shared/ui/BaseProgressBar.vue";
export default {
  data() {
    return {

      box,
      illustration,
    };
  },
  components:{
    BaseProgressBar,
  }
};
</script>
<style lang="">
    
</style>
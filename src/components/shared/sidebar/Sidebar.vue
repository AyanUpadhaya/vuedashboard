<template>
  <div
    class="bg-black-900 h-full duration-300 pt-[80px] pb-[184px] px-[83px] sidebar shrink-0 no-scrollbar overflow-auto select-none"
  >
    <div class="w-[197px] flex flex-col justify-between gap-[117px]">
      <!-- profile -->
      <div class="profile">
        <!-- logo -->
        <div class="w-max relative">
          <div class="max-w-[95px] h-[95px]">
            <img :src="profile" alt="" />
          </div>
          <div
            class="w-7 h-7 rounded-full bg-warningColor flex justify-center items-center absolute -right-[10px] -top-[10px] text-white"
          >
            4
          </div>
        </div>
        <h3
          class="font-poppins text-[30px] text-white font-semibold leading-[35px] mb-[5px]"
        >
          Samantha
        </h3>
        <p
          class="font-poppins text-[17px] text-white opacity-60 font-normal leading-7"
        >
          samantha@email.com
        </p>
      </div>

      <!-- links -->
      <div class="flex flex-col gap-[30px]">
        <!-- dashboard  -->
        <div class="whitespace-nowrap">
          <router-link
            :to="{ name: 'dashboard' }"
            class="font-poppins text-[25px] text-white font-normal leading-[35px]"
            :class="activePath === 'dashboard' ? 'opacity-100' : 'opacity-60 '"
            @click.native="setActivePath('dashboard')"
          >
            <span class="shirnk-0 duration-300">Dashboard</span>
          </router-link>
        </div>

        <!-- expenses -->
        <div class="whitespace-nowrap">
          <router-link
            :to="{ name: 'expenses' }"
            class="font-poppins text-[25px] text-white font-normal leading-[35px]"
            :class="activePath === 'expenses' ? 'opacity-100' : 'opacity-60 '"
            @click.native="setActivePath('expenses')"
          >
            <span class="shirnk-0 duration-300">Expenses</span>
          </router-link>
        </div>

        <!-- wallets -->
        <div class="whitespace-nowrap">
          <router-link
            :to="{ name: 'wallets' }"
            class="font-poppins text-[25px] text-white font-normal leading-[35px]"
            :class="activePath === 'wallets' ? 'opacity-100' : 'opacity-60 '"
            @click.native="setActivePath('wallets')"
          >
            <span class="shirnk-0 duration-300">Wallets</span>
          </router-link>
        </div>

        <!-- summary -->
        <div class="whitespace-nowrap">
          <router-link
            :to="{ name: 'summary' }"
            class="font-poppins text-[25px] text-white font-normal leading-[35px]"
            :class="activePath === 'summary' ? 'opacity-100' : 'opacity-60 '"
            @click.native="setActivePath('summary')"
          >
            <span class="shirnk-0 duration-300">Summary</span>
          </router-link>
        </div>

        <!-- accounts -->
        <div class="whitespace-nowrap">
          <router-link
            :to="{ name: 'accounts' }"
            class="font-poppins text-[25px] text-white font-normal leading-[35px]"
            :class="activePath === 'accounts' ? 'opacity-100' : 'opacity-60 '"
            @click.native="setActivePath('accounts')"
          >
            <span class="shirnk-0 duration-300">Accounts</span>
          </router-link>
        </div>

        <!-- settings -->

        <div class="whitespace-nowrap">
          <router-link
            :to="{ name: 'settings' }"
            class="font-poppins text-[25px] text-white font-normal leading-[35px]"
            :class="activePath === 'settings' ? 'opacity-100' : 'opacity-60 '"
            @click.native="setActivePath('settings')"
          >
            <span class="shirnk-0 duration-300">Settings</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { profile } from "../../../assets/getAssets";
import { getActivePath } from "../../../utils/getActivePath";
export default {
  data() {
    return {
      profile,
      activePath: "dashboard",
    };
  },

  watch: {
    "$route.name"(newValue) {
      this.activePath = getActivePath(newValue);
      this.setActivePath(this.activePath);
    },
  },
  mounted() {
    this.activePath = getActivePath(this.$route.name);
    this.setActivePath(this.activePath);
    console.log(this.activePath)
  },

  methods: {
    setActivePath(path) {
      this.activePath = path;
    },
  },
};
</script>

<style scoped>
.sidebar {
  transition: width 0.4s ease-in-out;
}
.sidebar::-webkit-scrollbar {
  width: 0px;
}
</style>

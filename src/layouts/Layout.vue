<template>
  <div class="w-full h-screen overflow-hidden">
    <div class="flex items-start h-full">
      <Sidebar></Sidebar>

      <div class="h-full flex-1 w-full overflow-hidden">
        <div className="h-full bg-black-900 py-5 pr-5 ">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/shared/sidebar/Sidebar.vue";

export default {
  data() {
    return {
      showSidebar: true,
    };
  },
  methods: {
    setActive(value) {
      this.activeLink = value;
      localStorage.setItem("activepath", value);
    },
  },
  components: { Sidebar },
};
</script>

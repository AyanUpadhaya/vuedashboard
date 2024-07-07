<template lang="">
  <div
    class="bg-white w-full h-full overflow-auto  rounded-2xl font-poppins"
  >
    <div class="flex items-stretch">
      <!-- left column-->
       <ExpensesStatus></ExpensesStatus>
      <!-- right column -->
       <ExpensesCost></ExpensesCost>
       
     
    </div>
  </div>
</template>

<script>

import ExpensesCost from "./ExpensesCost.vue"
import ExpensesStatus from "./ExpensesStatus.vue"
export default {

  components:{
    ExpensesCost,
    ExpensesStatus
  }
};
</script>

<style scoped>

</style>


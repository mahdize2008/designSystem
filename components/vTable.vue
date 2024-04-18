<script setup>
const { tHead , tBody , border , height, size} = defineProps({
  tHead: {
    type: Array,
    default: [],
  },
  tBody: {
    type: Array,
    default: [],
  },
  border:{
    type : Boolean,
    default:false
  },
  height:{
    type : Number,
    default: null
  },
  size:{
    type : String,
    default: 'base'
  }
});
function setSize(){
    return `table-${size}`
}
</script>

<template>
  <table class="w-full border-spacer_light" :class="[{border : border},setSize()]">
    <thead class="border-b-2 border-spacer_light">
      <tr>
        <th v-for="th of tHead" :class="['th-' + th.design,{'border-r' : border}]">
          {{ th.title }}
        </th>
        <th class="th-center">
          action
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="tr in tBody" class="odd:bg-bg_light_grey/40">
        <td v-for="td of tr" :class="['td-' + td.design,{'border-r' : border}]">
          <span
            class="w-2.5 h-2.5 bg-Error rounded-full inline-block mr-1"
            v-if="td.status"
            :class="'status-' + td.title"
          ></span>
          {{ td.title }}
        </td>
        <td>
            <ul class="flex justify-center -m-1.5 items-center">
            <li class="p-1.5 cursor-pointer text-border hover:text-purple">
              <i class="icon-Plus text-sm"></i>
            </li>
            <li class="p-1.5 cursor-pointer text-border hover:text-purple">
              <i class="icon-close text-sm"></i>
            </li>
            <li class="p-1.5 cursor-pointer text-border hover:text-purple">
              <i class="icon-Vector text-sm"></i>
            </li>
            <li class="p-1.5 cursor-pointer text-border hover:text-purple">
              <i class="icon-menu text-sm"></i>
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style>
th,
td {
  @apply text-start text-black text-base font-normal last:border-r-0 border-spacer_light p-2 capitalize;
}
th.th-left,
td.td-left {
  @apply text-left;
}
th.th-center,
td.td-center {
  @apply text-center;
}
th.th-right,
td.td-right {
  @apply text-right;
}
td {
  @apply !text-natural !font-light;
}
tr {
  @apply border-b last:border-b-0 border-spacer_light;
}


.table-sm th,
.table-sm td {
    @apply py-1
}
.table-base th,
.table-base td {
    @apply py-2.5
}
.table-lg th,
.table-lg td {
    @apply py-4
}


.status-success {
  @apply bg-Approval;
}
.status-error {
  @apply bg-Attention;
}
.status-warning {
  @apply bg-Error;
}
</style>
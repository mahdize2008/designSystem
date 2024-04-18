<script setup>
let tHead = [
  { title: "City", design: "left" },
  { title: "Date", design: "left" },
  { title: "Number", design: "right" },
  { title: "Range", design: "center" },
  { title: "Status", design: "left" },
];
let tBody = [
  [
    { title: "Moscow", design: "left" },
    { title: "01.09.2021", design: "left" },
    { title: 100, design: "right" },
    { title: "1...50", design: "center" },
    { title: "error", design: "left", status: true },
  ],
  [
    { title: "Arkhangelsk", design: "left" },
    { title: "23.08.2021", design: "left" },
    { title: 48123546, design: "right" },
    { title: "1...4530", design: "center" },
    { title: "warning", design: "left", status: true },
  ],
  [
    { title: "Krasnodar", design: "left" },
    { title: "15.08.2021", design: "left" },
    { title: 42, design: "right" },
    { title: "752...4530", design: "center" },
    { title: "success", design: "left", status: true },
  ],
  [
    { title: "Moscow", design: "left" },
    { title: "01.09.2021", design: "left" },
    { title: 100, design: "right" },
    { title: "1...50", design: "center" },
    { title: "error", design: "left", status: true },
  ],
  [
    { title: "Arkhangelsk", design: "left" },
    { title: "23.08.2021", design: "left" },
    { title: 48123546, design: "right" },
    { title: "1...4530", design: "center" },
    { title: "warning", design: "left", status: true },
  ],
  [
    { title: "Krasnodar", design: "left" },
    { title: "15.08.2021", design: "left" },
    { title: 42, design: "right" },
    { title: "752...4530", design: "center" },
    { title: "success", design: "left", status: true },
  ]
];
</script>

<template>
  <VTable :tHead="tHead" :tBody="tBody" class="mb-8"/>
  <VTable :tHead="tHead" :tBody="tBody" class="mb-8" border />
  
  
  <VTable :tHead="tHead" :tBody="tBody" class="mb-8" size="sm" />
  <VTable :tHead="tHead" :tBody="tBody" class="mb-8" border  size="sm" />
  
  
  <VTable :tHead="tHead" :tBody="tBody" class="mb-8" size="lg" />
  <VTable :tHead="tHead" :tBody="tBody" border  size="lg" />
</template>
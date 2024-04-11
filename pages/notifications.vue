    <script setup>
import { ref } from "vue";

let toasts = ref({
  error: true,
  warning: true,
  success: true,
  inform: true,
});
function onCloseToast(e) {
  toasts.value[e] = false;
}
</script>

<template>
  <ul class="mb-8">
    <li class="mb-6 last:mb-0" v-if="toasts.error">
      <VToast
        class="text-lg text-black"
        icon="error"
        type="error"
        @closeToast="onCloseToast('error')"
        >Warning text</VToast
      >
    </li>
    <li class="mb-6 last:mb-0" v-if="toasts.warning">
      <VToast class="text-lg text-black" @closeToast="onCloseToast('warning')"
        >Warning text</VToast
      >
    </li>
    <li class="mb-6 last:mb-0" v-if="toasts.inform">
      <VToast
        class="text-lg text-black"
        icon="inform"
        type="inform"
        @closeToast="onCloseToast('inform')"
        >Warning text</VToast
      >
    </li>
    <li class="mb-6 last:mb-0" v-if="toasts.success">
      <VToast
        class="text-lg text-black"
        icon="success"
        type="success"
        @closeToast="onCloseToast('success')"
        >Warning text</VToast
      >
    </li>
  </ul>
  <ul>
    <li class="mb-6 last:mb-0" v-if="toasts.error">
      <VToast
        icon="error"
        outline
        type="error"
        @closeToast="onCloseToast('error')"
      >
        <div>
          <h2 class="text-lg font-bold text-Attention">Error!</h2>
          <p class="text-base text-border">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </VToast>
    </li>
    <li class="mb-6 last:mb-0" v-if="toasts.warning">
      <VToast
        class="text-lg text-black"
        outline
        @closeToast="onCloseToast('warning')"
      >
        <div>
          <h2 class="text-lg font-bold text-Error">Warning!</h2>
          <p class="text-base text-border">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </VToast>
    </li>
    <li class="mb-6 last:mb-0" v-if="toasts.inform">
      <VToast
        class="text-lg text-black"
        icon="inform"
        outline
        type="inform"
        @closeToast="onCloseToast('inform')"
      >
        <div>
          <h2 class="text-lg font-bold text-purple">Notification!!</h2>
          <p class="text-base text-border">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </VToast>
    </li>
    <li class="mb-6 last:mb-0" v-if="toasts.success">
      <VToast
        class="text-lg text-black"
        icon="success"
        outline
        type="success"
        @closeToast="onCloseToast('success')"
      >
        <div>
          <h2 class="text-lg font-bold text-Approval">Successful!</h2>
          <p class="text-base text-border">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </VToast>
    </li>
  </ul>
</template>
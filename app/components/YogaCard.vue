<template>
  <div
    class="w-[682px] mx-auto flex flex-col gap-4 pt-16 pb-16 pl-20 pr-20 shadow-gray-400 shadow-md rounded-2xl bg-white font-open-sans text-sm font-normal mt-8"
  >
    <h1 class="flex items-center gap-2 mb-4">
      <div
        aria-label="Icon of studio"
        style="
          background-color: black;
          border-radius: 30px;
          width: 28px;
          height: 28px;
        "
      />
      <span class="text-[18px] font-bold">Yoga Studio</span>
    </h1>
    <slot />
  </div>
</template>
<script setup lang="ts"></script>

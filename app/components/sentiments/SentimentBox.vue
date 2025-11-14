<template>
  <div
    class="p-[2px] w-[100px] rounded"
    :style="
      selected
        ? `
        box-shadow: 0 7px 14px -4px ${backdropColor};
        background-image: linear-gradient(180deg,${backdropColor},${color});
        `
        : `background-color: #F5F7FA;`
    "
  >
    <div class="flex flex-col gap-2 items-center p-3 rounded bg-white">
      <SentimentIcon :sentiment="sentiment" :selected="selected" />
      <span
        class="font-semibold"
        :style="`color: ${selected ? color : '#545F67'}`"
      >
        {{ textContent }}
      </span>
    </div>
  </div>
</template>
<script setup>
import SentimentIcon from "~/components/sentiments/SentimentIcon.vue";
import { sentiments } from "~/utils.ts";

const props = defineProps({
  sentiment: { type: String, default: "satisfactory" },
  textContent: { type: String, default: "Undefined" },
  selected: Boolean,
});

const color = computed(() =>
  props.selected ? sentiments[props.sentiment].color : "#545F67",
);

const backdropColor = computed(() =>
  props.selected ? sentiments[props.sentiment].background : "#F5F7FA",
);
</script>

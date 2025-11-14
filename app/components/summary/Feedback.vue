<template>
  <div
    data-testid="summary-preview"
    class="border-[1px] rounded border-gray-200 pt-8 pb-8 pl-10 pr-10 flex flex-col gap-4 bg-white shadow-xs shadow-gray-400"
  >
    <svg
      :width="68"
      :height="68"
      :viewBox="'0 0 68 68'"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <SentimentIcon :sentiment="feedback.sentiment" :selected="true">
        <ExcellentIcon :selected="true" />
      </SentimentIcon>
    </svg>
    <div class="flex flex-col gap-2">{{ feedback.text }}</div>
    <div v-if="!!feedback.name" class="flex flex-col gap-2 text-gray-400">
      {{ feedback.name }}
    </div>
  </div>
</template>
<script setup lang="ts">
import ExcellentIcon from "~/components/sentiments/ExcellentIcon.vue";
import SentimentIcon from "~/components/sentiments/SentimentIcon.vue";

defineProps<{
  feedback: { id: number; text: string; name: string; sentiment: string };
}>();
</script>

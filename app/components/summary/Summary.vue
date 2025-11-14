<template>
  <YogaCard class="flex flex-col gap-10">
    <div class="summary">
      <h1 class="text-[26px] font-bold">
        Thank you! We received your feedback!
      </h1>
    </div>
    <div
      data-testid="summary-preview"
      class="border-[1px] rounded border-gray-200 pt-8 pb-8 pl-10 pr-10 flex flex-col gap-4"
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

    <div class="flex flex-col gap-3 ml-12">
      <strong v-if="feedback.shared" class="text-sm font-semibold">
        <Check stroke-width="3" class="inline-block" :size="18" />
        Feedback is public
      </strong>
      <strong v-if="!feedback.shared" class="text-sm font-semibold">
        <Check stroke-width="3" class="inline-block" :size="18" />
        Feedback is not public
      </strong>
      <strong v-if="feedback.contact" class="text-sm font-semibold">
        <Check stroke-width="3" class="inline-block" :size="18" />
        Yoga Studio will be in touch
      </strong>
    </div>
    <div class="flex justify-around mt-16">
      <button
        class="bg-blue-500 rounded-md p-3 pl-10 pr-10 text-white text-[16px] font-semibold h-[48px] align-center"
        @click="() => onClose()"
      >
        Done
      </button>
    </div>
  </YogaCard>
</template>
<script setup lang="ts">
import YogaCard from "~/components/YogaCard.vue";
import ExcellentIcon from "~/components/sentiments/ExcellentIcon.vue";
import SentimentIcon from "~/components/sentiments/SentimentIcon.vue";
import { Check } from "lucide-vue-next";

defineProps<{
  feedback: {
    contact: boolean;
    createdAt: string;
    email: string;
    id: number;
    name: string;
    sentiment: string;
    shared: boolean;
    text: string;
  };
  onClose: () => void;
}>();
</script>

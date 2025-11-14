<template>
  <svg
    :width="selected ? 68 : 60"
    :height="selected ? 68 : 68"
    :viewBox="selected ? '0 0 68 68' : '0 0 60 60'"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      v-if="selected"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M67.8784 33.9392C67.8784 52.6825 52.6825 67.8784 33.9392 67.8784C15.193 67.8784 0 52.6825 0 33.9392C0 15.193 15.193 0 33.9392 0C52.6825 0 67.8784 15.193 67.8784 33.9392Z"
      :fill="currentBackdropColor"
    />
    <path
      v-if="selected"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M67.8784 33.9392C67.8784 52.6825 52.6825 67.8784 33.9392 67.8784C15.193 67.8784 0 52.6825 0 33.9392C0 15.193 15.193 0 33.9392 0C52.6825 0 67.8784 15.193 67.8784 33.9392Z"
      :fill="`url(#paint0_linear_satisfactory_${currentBackdropColor})`"
      fill-opacity="0.5"
    />
    <path
      v-if="!selected"
      opacity="0.6"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M59.0251 29.5126C59.0251 45.8112 45.8112 59.0251 29.5126 59.0251C13.2114 59.0251 0 45.8112 0 29.5126C0 13.2114 13.2114 0 29.5126 0C45.8112 0 59.0251 13.2114 59.0251 29.5126Z"
      fill="#E3EAF0"
    />

    <g :transform="selected ? 'translate(4,4)' : ''">
      <SatisfactoryIcon
        v-if="sentiment === 'satisfactory'"
        :selected="selected"
        :color="currentColor"
        :backdrop-color="currentBackdropColor"
      />
      <ExcellentIcon
        v-if="sentiment === 'excellent'"
        :selected="selected"
        :color="currentColor"
        :backdrop-color="currentBackdropColor"
      />
      <PoorIcon
        v-if="sentiment === 'poor'"
        :selected="selected"
        :color="currentColor"
        :backdrop-color="currentBackdropColor"
      />
      <FairIcon
        v-if="sentiment === 'fair'"
        :selected="selected"
        :color="currentColor"
        :backdrop-color="currentBackdropColor"
      />
      <GoodIcon
        v-if="sentiment === 'good'"
        :selected="selected"
        :color="currentColor"
        :backdrop-color="currentBackdropColor"
      />
    </g>

    <defs>
      <linearGradient
        :id="`paint0_linear_satisfactory_${currentBackdropColor}`"
        x1="33.9392"
        y1="0"
        x2="33.9392"
        y2="67.8784"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="white" />
        <stop offset="1" :stop-color="currentBackdropColor" />
      </linearGradient>
    </defs>
  </svg>
</template>
<script setup>
import SatisfactoryIcon from "~/components/sentiments/SatisfactoryIcon.vue";
import ExcellentIcon from "~/components/sentiments/ExcellentIcon.vue";
import PoorIcon from "~/components/sentiments/PoorIcon.vue";
import FairIcon from "~/components/sentiments/FairIcon.vue";
import GoodIcon from "~/components/sentiments/GoodIcon.vue";

import { sentiments } from "~/utils.ts";

const props = defineProps({
  selected: Boolean,
  sentiment: { type: String, default: "satisfactory" },
});

const currentColor = computed(() =>
  props.selected ? sentiments[props.sentiment].color : "#545F67",
);

const currentBackdropColor = computed(() =>
  props.selected ? sentiments?.[props.sentiment]?.background : "#545F67",
);
</script>

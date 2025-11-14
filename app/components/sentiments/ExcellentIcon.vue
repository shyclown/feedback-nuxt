<!-- components/sentiments/ExcellentIcon.vue -->
<template>
  <g transform="translate(6,6)">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M46 23.5C46 35.9259 35.9259 46 23.5 46C11.0722 46 1 35.9259 1 23.5C1 11.0722 11.0722 1 23.5 1C35.9259 1 46 11.0722 46 23.5V23.5Z"
      :stroke="currentColor"
      stroke-opacity="0.6"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M38.174 26.4348C38.174 33.5624 31.604 40.1304 23.5001 40.1304C15.3962 40.1304 8.82617 33.5624 8.82617 26.4348H38.174V26.4348Z"
      :stroke="currentColor"
      stroke-opacity="0.6"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.7827 19.5869C10.7827 14.4158 18.6088 14.41 18.6088 19.5869"
      :stroke="currentColor"
      stroke-opacity="0.6"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M36.2174 19.5869C36.2174 14.4158 28.3914 14.41 28.3914 19.5869"
      :stroke="currentColor"
      stroke-opacity="0.6"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
</template>

<script setup>
const props = defineProps({
  selected: Boolean,
  color: String,
  backdropColor: String,
});

const currentColor = computed(() => (props.selected ? props.color : "#545F67"));
</script>

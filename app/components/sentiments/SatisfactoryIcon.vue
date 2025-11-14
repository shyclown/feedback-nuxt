<!-- components/sentiments/SatisfactoryIcon.vue -->
<template>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.7371 22.6648C25.7371 24.2848 24.4223 25.5995 22.8023 25.5995C21.1803 25.5995 19.8675 24.2848 19.8675 22.6648C19.8675 21.0448 21.1803 19.73 22.8023 19.73C24.4223 19.73 25.7371 21.0448 25.7371 22.6648V22.6648Z" :stroke="currentColor" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M33.5631 22.6648C33.5631 24.2848 34.8759 25.5995 36.4979 25.5995C38.1179 25.5995 39.4327 24.2848 39.4327 22.6648C39.4327 21.0448 38.1179 19.73 36.4979 19.73C34.8759 19.73 33.5631 21.0448 33.5631 22.6648V22.6648Z" :stroke="currentColor" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M41.8813 36.6432C39.2537 40.6032 34.7537 43.2093 29.6511 43.2093" :stroke="currentColor" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M52.1501 29.5126C52.1501 41.9404 42.076 52.0126 29.6501 52.0126C17.2223 52.0126 7.15009 41.9404 7.15009 29.5126C7.15009 17.0847 17.2223 7.01257 29.6501 7.01257C42.076 7.01257 52.1501 17.0847 52.1501 29.5126V29.5126Z" :stroke="currentColor" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</template>

<script setup>
const props = defineProps({
  selected: Boolean,
  color: String,
  backdropColor: String,
})

const currentColor = computed(() => props.selected ? props.color: "#545F67");
</script>
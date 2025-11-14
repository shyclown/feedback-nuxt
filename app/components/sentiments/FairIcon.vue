<!-- components/sentiments/FairIcon.vue -->
<template>
    <path d="M16.7482 41.3051C22.3615 31.3581 37.1293 31.7631 42.2769 41.2738" :stroke="currentColor" stroke-opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.0964 22.6648C23.0964 24.2848 21.7817 25.5995 20.1617 25.5995C18.5397 25.5995 17.2269 24.2848 17.2269 22.6648C17.2269 21.0448 18.5397 19.73 20.1617 19.73C21.7817 19.73 23.0964 21.0448 23.0964 22.6648V22.6648Z" :stroke="currentColor" stroke-opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M34.8356 22.6648C34.8356 24.2848 36.1484 25.5995 37.7704 25.5995C39.3904 25.5995 40.7051 24.2848 40.7051 22.6648C40.7051 21.0448 39.3904 19.73 37.7704 19.73C36.1484 19.73 34.8356 21.0448 34.8356 22.6648V22.6648Z" :stroke="currentColor" stroke-opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M51.9551 29.5126C51.9551 41.9404 41.881 52.0126 29.4551 52.0126C17.0273 52.0126 6.95514 41.9404 6.95514 29.5126C6.95514 17.0847 17.0273 7.01257 29.4551 7.01257C41.881 7.01257 51.9551 17.0847 51.9551 29.5126V29.5126Z" :stroke="currentColor" stroke-opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.7482 41.3051C22.3615 31.3581 37.1293 31.7631 42.2769 41.2738" :stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.0964 22.6648C23.0964 24.2848 21.7817 25.5995 20.1617 25.5995C18.5397 25.5995 17.2269 24.2848 17.2269 22.6648C17.2269 21.0448 18.5397 19.73 20.1617 19.73C21.7817 19.73 23.0964 21.0448 23.0964 22.6648V22.6648Z" :stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M34.8356 22.6648C34.8356 24.2848 36.1484 25.5995 37.7704 25.5995C39.3904 25.5995 40.7051 24.2848 40.7051 22.6648C40.7051 21.0448 39.3904 19.73 37.7704 19.73C36.1484 19.73 34.8356 21.0448 34.8356 22.6648V22.6648Z" :stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M51.9551 29.5126C51.9551 41.9404 41.881 52.0126 29.4551 52.0126C17.0273 52.0126 6.95514 41.9404 6.95514 29.5126C6.95514 17.0847 17.0273 7.01257 29.4551 7.01257C41.881 7.01257 51.9551 17.0847 51.9551 29.5126V29.5126Z" :stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>


</template>

<script setup>
const props = defineProps({
  selected: Boolean,
  color: String,
  backdropColor: String,
})

const currentColor = computed(() => props.selected ? props.color: "#545F67");
</script>
<!-- components/sentiments/PoorIcon.vue -->
<template>

    <path fill-rule="evenodd" clip-rule="evenodd" d="M52.0126 29.5126C52.0126 41.9384 41.9384 52.0126 29.5126 52.0126C17.0847 52.0126 7.01257 41.9384 7.01257 29.5126C7.01257 17.0847 17.0847 7.01257 29.5126 7.01257C41.9384 7.01257 52.0126 17.0847 52.0126 29.5126V29.5126Z" :stroke="currentColor" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.8386 46.5405C14.8386 26.625 44.1864 26.2787 44.1864 46.5405" :stroke="currentColor" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M24.6213 21.6865C24.6213 26.8635 16.7952 26.8576 16.7952 21.6865" :stroke="currentColor" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M34.4039 21.6865C34.4039 26.8635 42.23 26.8576 42.23 21.6865" :stroke="currentColor" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

</template>

<script setup>
const props = defineProps({
  selected: Boolean,
  color: String,
  backdropColor: String,
})

const currentColor = computed(() => props.selected ? props.color: "#545F67");
</script>
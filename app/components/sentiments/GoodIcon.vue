<!-- components/sentiments/GoodIcon.vue -->
<template>
   <path fill-rule="evenodd" clip-rule="evenodd" d="M52.0126 29.5126C52.0126 41.9404 41.9384 52.0126 29.5126 52.0126C17.0847 52.0126 7.01257 41.9404 7.01257 29.5126C7.01257 17.0847 17.0847 7.01257 29.5126 7.01257C41.9384 7.01257 52.0126 17.0847 52.0126 29.5126V29.5126Z" :stroke="currentColor" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.6758 22.6342C18.6774 21.0983 21.0819 20.0692 23.7037 19.7307" :stroke="currentColor" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M42.3476 22.6342C40.3461 21.0983 37.9415 20.0692 35.3198 19.7307" :stroke="currentColor" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M42.23 35.3821C39.7002 39.8841 34.9752 42.6819 29.5694 42.6819C24.0774 42.6819 19.2937 40.0484 16.7952 35.4134" :stroke="currentColor" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

</template>

<script setup>
const props = defineProps({
  selected: Boolean,
  color: String,
  backdropColor: String,
})

const currentColor = computed(() => props.selected ? props.color: "#545F67");
</script>
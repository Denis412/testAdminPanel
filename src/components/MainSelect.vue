<template>
  <q-select v-model="model" @update:model-value="update($event?.value)" />
</template>

<script setup>
import { ref } from "vue";

const { fieldName, value } = defineProps({
  fieldName: String,
  value: String,
});

const model = ref("");

const emit = defineEmits(["update:value"]);

const update = (event) => {
  emit("update:value", {
    field: fieldName,
    value: {
      id: event,
    },
  });
};
</script>

<style scoped lang="scss"></style>

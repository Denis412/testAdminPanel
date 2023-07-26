<template>
  <q-input v-model="value" @update:model-value="update" />
</template>

<script setup>
import { ref } from "vue";

const { fieldName, parse } = defineProps({
  fieldName: String,
  parse: Function,
});

const value = ref("");

const emit = defineEmits(["update:value"]);

const update = (event) => {
  emit("update:value", {
    field: fieldName,
    value: parse ? parse(event) : event,
  });
};
</script>

<style scoped lang="scss"></style>

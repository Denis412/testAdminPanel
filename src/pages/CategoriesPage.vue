<template>
  <main-page
    object="category"
    object-paginate="categories"
    :properties-paginate="propertiesPaginate"
    :properties-get="propertiesGet"
    :properties-create="propertiesCreate"
    :properties-update="propertiesUpdate"
    :table-columns="columns"
    table-title="Категории"
  >
  </main-page>
</template>

<script setup>
import { ref } from "vue";

import MainPage from "src/pages/MainPage.vue";

const propertiesPaginate = ref(`{ id name created_at updated_at }`);
const propertiesGet = ref(`{ id name }`);
const propertiesCreate = ref(`{ id name }`);
const propertiesUpdate = ref(`{ id name }`);
</script>

<style scoped lang="scss"></style>

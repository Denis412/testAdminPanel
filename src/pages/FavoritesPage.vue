<template>
  <main-page
    object="favorite"
    object-paginate="favorites"
    :properties-paginate="propertiesPaginate"
    :properties-get="propertiesGet"
    :properties-create="propertiesCreate"
    :properties-update="propertiesUpdate"
    :table-columns="columns"
    table-title="Избранное"
  >
  </main-page>
</template>

<script setup>
import { ref } from "vue";

import MainPage from "src/pages/MainPage.vue";

const propertiesPaginate = ref(`{ id product { id } created_at updated_at }`);
const propertiesGet = ref(`{ id  }`);
const propertiesCreate = ref(`{ id  }`);
const propertiesUpdate = ref(`{ id  }`);
</script>

<style scoped lang="scss"></style>

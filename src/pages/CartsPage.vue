<template>
  <main-page
    object="cart"
    object-paginate="carts"
    :properties-paginate="propertiesPaginate"
    :properties-get="propertiesGet"
    :properties-create="propertiesCreate"
    :properties-update="propertiesUpdate"
    :table-columns="columns"
    table-title="Корзины"
  >
    <pre>{{ users }}</pre>
  </main-page>
</template>

<script setup>
import { ref } from "vue";

import MainPage from "src/pages/MainPage.vue";

const propertiesPaginate = ref(
  `{ id product { id } user { id } created_at updated_at }`
);
const propertiesGet = ref(`{ id product { id } user { id } }`);
const propertiesCreate = ref(`{ id product { id } user { id } }`);
const propertiesUpdate = ref(`{ id product { id } user { id } }`);
</script>

<style scoped lang="scss"></style>

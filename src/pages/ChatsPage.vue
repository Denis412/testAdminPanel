<template>
  <main-page
    object="chat"
    object-paginate="chats"
    :properties-paginate="propertiesPaginate"
    :properties-get="propertiesGet"
    :properties-create="propertiesCreate"
    :properties-update="propertiesUpdate"
    :table-columns="columns"
    table-title="Чаты"
  >
  </main-page>
</template>

<script setup>
import { ref } from "vue";

import MainPage from "src/pages/MainPage.vue";

const propertiesPaginate = ref(
  `{ id name buyer { id } saller { id } created_at updated_at }`
);
const propertiesGet = ref(`{ id name }`);
const propertiesCreate = ref(`{ id name }`);
const propertiesUpdate = ref(`{ id name }`);
</script>

<style scoped lang="scss"></style>

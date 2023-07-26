<template>
  <main-page
    object="message"
    object-paginate="messages"
    :properties-paginate="propertiesPaginate"
    :properties-get="propertiesGet"
    :properties-create="propertiesCreate"
    :properties-update="propertiesUpdate"
    :table-columns="columns"
    table-title="Cообщения"
  >
  </main-page>
</template>

<script setup>
import { ref } from "vue";

import MainPage from "src/pages/MainPage.vue";

const propertiesPaginate = ref(
  `{ id text sender { id }  created_at updated_at }`
);
const propertiesGet = ref(`{ id text }`);
const propertiesCreate = ref(`{ id text }`);
const propertiesUpdate = ref(`{ id text }`);
</script>

<style scoped lang="scss"></style>

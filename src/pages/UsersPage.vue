<template>
  <main-page
    object="user"
    object-paginate="users"
    :create-inputs="createInputs"
    :properties-paginate="propertiesPaginate"
    :properties-get="propertiesGet"
    :properties-create="propertiesCreate"
    :properties-update="propertiesUpdate"
    table-title="Пользователи"
  >
    <pre>{{ users }}</pre>
  </main-page>
</template>

<script setup>
import { ref } from "vue";

import MainPage from "src/pages/MainPage.vue";

const createInputs = ref([
  { label: "Имя", name: "first_name" },
  { label: "Фамилия", name: "last_name" },
  { label: "Отчество", name: "middle_name" },
  { label: "email", name: "email" },
]);

const propertiesPaginate = ref(
  `{ id first_name middle_name last_name email created_at updated_at }`
);
const propertiesGet = ref(`{ id first_name }`);
const propertiesCreate = ref(`{ id first_name }`);
const propertiesUpdate = ref(`{ id first_name }`);
</script>

<style scoped lang="scss"></style>

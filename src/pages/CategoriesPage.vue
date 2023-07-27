<template>
  <main-page
    object="category"
    object-paginate="categories"
    :properties-paginate="propertiesPaginate"
    :properties-get="propertiesGet"
    :properties-create="propertiesCreate"
    :properties-update="propertiesUpdate"
    table-title="Категории"
    :create-inputs="createInputs"
    :update-inputs="updateInputs"
  >
  </main-page>
</template>

<script setup>
import { ref } from "vue";
import MainPage from "src/pages/MainPage.vue";
import { provideApolloClient } from "@vue/apollo-composable";
import apolloClient from "src/apollo/apollo-client";

provideApolloClient(apolloClient);

const createInputs = ref([{ label: "Название", name: "name" }]);
const updateInputs = ref(JSON.parse(JSON.stringify(createInputs.value)));

const propertiesPaginate = ref(`{ id name created_at updated_at }`);
const propertiesGet = ref(`{ id name }`);
const propertiesCreate = ref(`{ id name }`);
const propertiesUpdate = ref(`{ id name }`);
</script>

<style scoped lang="scss"></style>

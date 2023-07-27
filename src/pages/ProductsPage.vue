<template>
  <main-page
    object="product"
    object-paginate="products"
    :properties-paginate="propertiesPaginate"
    :properties-get="propertiesGet"
    :properties-create="propertiesCreate"
    :properties-update="propertiesUpdate"
    table-title="Товары"
    :create-inputs="createInputs"
    :create-selects="createSelects"
    :update-inputs="updateInputs"
  >
  </main-page>
</template>

<script setup>
import { computed, ref } from "vue";
import MainPage from "src/pages/MainPage.vue";
import { provideApolloClient, useQuery } from "@vue/apollo-composable";
import { getPaginateObjectsDocumentNode } from "src/graphql";
import apolloClient from "src/apollo/apollo-client";

provideApolloClient(apolloClient);

const createInputs = ref([
  { label: "Название", name: "title" },
  { label: "Описание", name: "description" },
  { label: "Цена", name: "price", parse: parseFloat },
  { label: "Картинка", name: "image" },
  { label: "Cтарая цена", name: "old_price", parse: parseFloat },
  { label: "Количество", name: "quantity", type: "number", parse: parseInt },
]);

const updateInputs = ref(JSON.parse(JSON.stringify(createInputs.value)));

const usersQuery = useQuery(
  getPaginateObjectsDocumentNode("users", `{ id first_name }`)
);

const categoriesQuery = useQuery(
  getPaginateObjectsDocumentNode("categories", `{ id name }`)
);

const usersOptions = computed(() =>
  usersQuery.result.value?.users.map((user) => ({
    label: user.first_name,
    value: user.id,
  }))
);

const categoriesOptions = computed(() =>
  categoriesQuery.result.value?.categories.map((category) => ({
    label: category.name,
    value: category.id,
  }))
);

const createSelects = ref([
  { label: "Пользователь", name: "user", options: usersOptions },
  { label: "Категория", name: "category", options: categoriesOptions },
]);

const propertiesPaginate = ref(
  `{ id title description created_at updated_at }`
);
const propertiesGet = ref(`{ id title }`);
const propertiesCreate = ref(`{ id title }`);
const propertiesUpdate = ref(`{ id title }`);
</script>

<style scoped lang="scss"></style>

<template>
  <main-page
    object="cart"
    object-paginate="carts"
    :properties-paginate="propertiesPaginate"
    :properties-get="propertiesGet"
    :properties-create="propertiesCreate"
    :properties-update="propertiesUpdate"
    table-title="Корзины"
    :create-selects="createSelects"
  >
    <pre>{{ users }}</pre>
  </main-page>
</template>

<script setup>
import { computed, ref } from "vue";
import { provideApolloClient, useQuery } from "@vue/apollo-composable";

import MainPage from "src/pages/MainPage.vue";
import { getPaginateObjectsDocumentNode } from "src/graphql";
import apolloClient from "src/apollo/apollo-client";

provideApolloClient(apolloClient);

const usersQuery = useQuery(
  getPaginateObjectsDocumentNode("users", `{ id first_name }`)
);

const productsQuery = useQuery(
  getPaginateObjectsDocumentNode("products", `{ id title }`)
);

const usersOptions = computed(() =>
  usersQuery.result.value?.users.map((user) => ({
    label: user.first_name,
    value: user.id,
  }))
);

const productsOptions = computed(() =>
  productsQuery.result.value?.products.map((product) => ({
    label: product.title,
    value: product.id,
  }))
);

const createSelects = ref([
  { label: "Пользователь", name: "user", options: usersOptions },
  { label: "Товар", name: "product", options: productsOptions },
]);
const propertiesPaginate = ref(
  `{ id product { id } user { id } created_at updated_at }`
);
const propertiesGet = ref(`{ id product { id } user { id } }`);
const propertiesCreate = ref(`{ id product { id } user { id } }`);
const propertiesUpdate = ref(`{ id product { id } user { id } }`);
</script>

<style scoped lang="scss"></style>

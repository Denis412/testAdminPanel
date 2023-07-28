<template>
  <main-page
    object="chat"
    object-paginate="chats"
    :properties-paginate="propertiesPaginate"
    :properties-get="propertiesGet"
    :properties-create="propertiesCreate"
    :properties-update="propertiesUpdate"
    table-title="Чаты"
    :create-inputs="createInputs"
    :create-selects="createSelects"
    :update-inputs="updateInputs"
  >
  </main-page>
</template>

<script setup>
import { computed, ref } from "vue";
import { provideApolloClient, useQuery } from "@vue/apollo-composable";

import MainPage from "src/pages/MainPage.vue";
import { getPaginateObjectsDocumentNode } from "src/graphql";
import apolloClient from "src/apollo/apollo-client";

provideApolloClient(apolloClient);

const createInputs = ref([{ label: "Название", name: "name" }]);
const updateInputs = ref(JSON.parse(JSON.stringify(createInputs.value)));

const usersQuery = useQuery(
  getPaginateObjectsDocumentNode("users", `{ id first_name }`)
);

const usersOptions = computed(() =>
  usersQuery.result.value?.users.map((user) => ({
    label: user.first_name,
    value: user.id,
  }))
);

const createSelects = ref([
  { label: "Покупатель", name: "buyer", options: usersOptions },
  { label: "Продавец", name: "saller", options: usersOptions },
]);

const propertiesPaginate = ref(
  `{ id name buyer { id } saller { id } created_at updated_at }`
);
const propertiesGet = ref(`{ id name }`);
const propertiesCreate = ref(`{ id name }`);
const propertiesUpdate = ref(`{ id name }`);
</script>

<style scoped lang="scss"></style>

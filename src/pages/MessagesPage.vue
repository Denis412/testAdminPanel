<template>
  <main-page
    object="message"
    object-paginate="messages"
    :properties-paginate="propertiesPaginate"
    :properties-get="propertiesGet"
    :properties-create="propertiesCreate"
    :properties-update="propertiesUpdate"
    table-title="Cообщения"
    :create-inputs="createInputs"
    :update-inputs="updateInputs"
    :create-selects="createSelects"
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

const createInputs = ref([
  { label: "Текст сообщения", name: "text", type: "textarea" },
]);
const updateInputs = ref(JSON.parse(JSON.stringify(createInputs.value)));

const usersQuery = useQuery(
  getPaginateObjectsDocumentNode("users", `{ id first_name }`)
);

const chatsQuery = useQuery(
  getPaginateObjectsDocumentNode(
    "chats",
    `{ id name buyer { id first_name } saller { id first_name } }`
  )
);

const usersOptions = computed(() =>
  usersQuery.result.value?.users.map((user) => ({
    label: user.first_name,
    value: user.id,
  }))
);

const chatsOptions = computed(() =>
  chatsQuery.result.value?.chats.map((chat) => ({
    label: chat.name,
    value: chat.id,
  }))
);

const createSelects = ref([
  { label: "Чат", name: "chat", options: chatsOptions },
  { label: "Отправитель", name: "sender", options: usersOptions },
  { label: "Получатель", name: "recipient", options: usersOptions },
]);
const propertiesPaginate = ref(
  `{ id text sender { id }  created_at updated_at }`
);
const propertiesGet = ref(`{ id text }`);
const propertiesCreate = ref(`{ id text }`);
const propertiesUpdate = ref(`{ id text }`);
</script>

<style scoped lang="scss"></style>

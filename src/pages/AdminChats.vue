<template>
  <q-page>
    <q-list separator class="column">
      <q-item
        clickable
        class="flex items-center"
        v-for="chat in chats"
        @click="redirectToChat(chat)"
      >
        <span>
          {{ chat.id }}. {{ chat.saller.first_name }}
          {{ chat.saller.last_name }}
        </span>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { provideApolloClient, useQuery } from "@vue/apollo-composable";
import apolloClient from "src/apollo/apollo-client";
import { getPaginateObjectsDocumentNode } from "src/graphql";
import { computed } from "vue";
import { useRouter } from "vue-router";

provideApolloClient(apolloClient);

const router = useRouter();

const chatsQuery = useQuery(
  getPaginateObjectsDocumentNode(
    "chats",
    `{
  id
  name
  saller {
    id
    first_name
    last_name
  }
}`
  )
);

const chats = computed(() => chatsQuery.result.value?.chats);

const redirectToChat = async (chat) => {
  await router.push({
    name: "chat",
    params: { id: chat.id },
  });
};
</script>

<style scoped lang="scss"></style>

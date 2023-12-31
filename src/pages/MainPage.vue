<template>
  <q-page class="q-pa-md">
    <q-input v-model="login" placeholder="Введите логин" />
    <q-input v-model="password" type="password" placeholder="Введите пароль" />

    <header class="flex justify-around">
      <q-btn
        no-caps
        flat
        class="main__btn"
        label="Обновить токен"
        @click="signIn"
      />
      <q-btn
        no-caps
        flat
        class="main__btn"
        label="Создать"
        @click="showCreate"
      />
      <q-btn
        no-caps
        flat
        class="main__btn"
        label="Обновить"
        @click="showUpdate"
      />
      <q-btn
        no-caps
        flat
        class="negative__btn"
        label="Удалить"
        @click="showDelete"
      />
    </header>

    <div class="q-mt-lg">
      <q-table flat :title="tableTitle" :rows="rows" row-key="id" />
    </div>

    <popup-form
      v-model="isCreate"
      :inputs="createInputs"
      :selects="createSelects"
      :title="`Создание ${object}`"
      label-button="Cоздать"
      @submit="create"
      type="create"
    />

    <popup-form
      v-model="isUpdate"
      :inputs="updateInputs"
      :selects="updateSelects"
      :title="`Обновление ${object}`"
      label-button="Обновить"
      @submit="update"
      type="update"
    />

    <popup-form
      v-model="isDelete"
      :inputs="deleteInputs"
      :selects="deleteSelects"
      :title="`Удаление ${object}`"
      label-button="Удалить"
      @submit="del"
      type="delete"
    />

    <slot name="default"></slot>
  </q-page>
</template>

<script setup>
import {
  provideApolloClient,
  useMutation,
  useQuery,
} from "@vue/apollo-composable";
import apolloClient from "src/apollo/apollo-client";
import graphqlAPI from "src/graphql";
import { computed, ref } from "vue";
import {
  topPositiveNotify,
  topNegativeNotify,
} from "src/helpers/notifications";

import PopupForm from "src/components/PopupForm.vue";

provideApolloClient(apolloClient);

const {
  object,
  tableColumns,
  tableTitle,
  createInputs,
  updateInputs,
  deleteInputs,
  createSelects,
  updateSelects,
  deleteSelects,
  objectPaginate,
  propertiesPaginate,
  propertiesGet,
  propertiesCreate,
  propertiesUpdate,
  propertiesDelete,
} = defineProps({
  object: String,
  tableColumns: Array,
  tableTitle: String,
  createInputs: Array,
  updateInputs: Array,
  deleteInputs: Array,
  createSelects: Array,
  updateSelects: Array,
  deleteSelects: Array,
  objectPaginate: String,
  propertiesPaginate: String,
  propertiesGet: String,
  propertiesCreate: String,
  propertiesUpdate: String,
  propertiesDelete: String,
});

const emit = defineEmits(["create", "update", "delete"]);

const objectCreateMutation = useMutation(
  graphqlAPI.getCreateObjectDocumentNode(object, propertiesCreate)
);
const objectUpdateMutation = useMutation(
  graphqlAPI.getUpdateObjectDocumentNode(object, propertiesUpdate)
);
const objectDeleteMutation = useMutation(
  graphqlAPI.getDeleteObjectDocumentNode(object)
);

const signInMutation = useMutation(graphqlAPI.getSignInDocumentNode());

const objectsQuery = useQuery(
  graphqlAPI.getPaginateObjectsDocumentNode(objectPaginate, propertiesPaginate)
);
const objectByIdQuery = useQuery(
  graphqlAPI.getObjectByIdDocumentNode(object, propertiesGet)
);

const objects = computed(() => objectsQuery.result.value?.[objectPaginate]);
const obj = computed(() => objectByIdQuery.result.value?.[object]);

const rows = computed(() => objects.value);
const login = ref("");
const password = ref("");

const signIn = async () => {
  //vasser1man@yandex.ru
  //Raskat561

  //hello@yandex.ru
  //Raskat561
  const { data } = await signInMutation.mutate({
    input: {
      email: login.value,
      password: password.value,
    },
  });

  localStorage.setItem("token", data.SignIn.access_token);
  localStorage.setItem("user_id", data.SignIn.user_id);
  location.reload();
};

const isCreate = ref(false);
const isUpdate = ref(false);
const isDelete = ref(false);

const showCreate = async (input) => {
  isCreate.value = true;
};
const showUpdate = async (id, input) => {
  isUpdate.value = true;
};
const showDelete = async (id) => {
  isDelete.value = true;
};

const create = async (input) => {
  try {
    await objectCreateMutation.mutate({
      input: {
        ...input,
      },
    });

    topPositiveNotify(`${object} создан`);
  } catch (e) {
    topNegativeNotify("Ошибка");
  }
};
const update = async (input) => {
  const { id, ...rest } = input;
  try {
    await objectUpdateMutation.mutate({
      id,
      input: rest,
    });

    topPositiveNotify(`${object} обновлен`);
  } catch (e) {
    topNegativeNotify("Ошибка");
  }
};
const del = async (input) => {
  try {
    await objectDeleteMutation.mutate({
      id: input.id,
    });

    topPositiveNotify(`${object} удален`);
  } catch (e) {
    topNegativeNotify("Ошибка");
  }
};
</script>

<style scoped lang="scss"></style>

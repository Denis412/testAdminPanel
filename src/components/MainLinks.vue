<template>
  <q-list>
    <q-item
      clickable
      class="flex items-center"
      v-for="route in routes[0].children"
      @click="redirect(route.path)"
    >
      {{ route.path }}
    </q-item>
  </q-list>
</template>

<script setup>
import routes from "src/router/routes";
import { useRouter } from "vue-router";

const router = useRouter();

const redirect = async (path) => {
  await router.push({
    path,
  });
};
</script>

<style scoped lang="scss"></style>

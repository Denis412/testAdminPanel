<template>
  <q-list>
    <q-item
      clickable
      class="flex items-center"
      v-for="route in routes[0].children"
      @click="redirect(route.name)"
    >
      {{ route.path }}
    </q-item>
  </q-list>
</template>

<script setup>
import routes from "src/router/routes";
import { useRouter } from "vue-router";

const router = useRouter();

const redirect = async (name) => {
  await router.push({
    name,
  });
};
</script>

<style scoped lang="scss"></style>

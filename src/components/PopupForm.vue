<template>
  <q-dialog>
    <q-card class="q-pa-lg popup">
      <div>
        <span class="text-body1">{{ title }}</span>
      </div>

      <q-form @submit="submit">
        <main-input
          v-if="type === 'delete'"
          label="ID"
          type="number"
          :parse="parseInt"
          field-name="id"
          @update:value="update"
        />

        <div v-else>
          <main-input
            v-if="type === 'update'"
            label="ID"
            type="number"
            :parse="parseInt"
            field-name="id"
            @update:value="update"
          />

          <main-input
            v-for="input in inputs"
            :key="input.label"
            :label="input.label"
            :type="input.type || 'text'"
            :parse="input.parse"
            :field-name="input.name"
            @update:value="update"
          />

          <div v-for="select in selects">
            <main-select
              :key="select.label"
              :label="select.label"
              :options="select.options"
              :field-name="select.name"
              @update:value="update"
            />
          </div>
        </div>

        <div class="flex flex-center q-mt-md">
          <q-btn no-caps :label="labelButton" class="main__btn" type="submit" />
        </div>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from "vue";
import MainInput from "./MainInput.vue";
import MainSelect from "./MainSelect.vue";

const { inputs, selects, title, labelButton, type } = defineProps({
  inputs: Array,
  selects: Array,
  title: String,
  labelButton: String,
  type: String,
});

const emit = defineEmits(["submit"]);
const input = ref({});

const update = ({ field, value }) => {
  input.value[field] = value;

  console.log(input.value);
};
const submit = () => emit("submit", input.value);
</script>

<style scoped lang="scss">
.popup {
  min-width: 500px;
}
</style>

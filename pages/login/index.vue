<template>
  <div class="wrapper">
    <q-form ref="form" greedy no-error-focus>
      <div class="q-mb-md">
        <q-input
          v-model="formData.username"
          label="username"
          :rules="[(val: string) => !!val || 'requiredField']"
          outlined
          dense
          no-error-icon
          lazy-rules="ondemand"
        />
      </div>
      <div class="q-mb-md">
        <q-input
          v-model="formData.password"
          label="password"
          type="password"
          :rules="[(val: string) => !!val || 'requiredField']"
          outlined
          dense
          no-error-icon
          lazy-rules="ondemand"
        />
      </div>
      <q-btn label="login" color="primary" @click="login" />
    </q-form>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '~/store/userStore';

const userStore = useUserStore();

const router = useRouter();

const form = ref();

const formData = reactive({
  username: '',
  password: '',
});

const login = async () => {
  try {
    const is_valid = await form.value.validate();

    if (!is_valid) return console.error('Validation failed');

    await userStore.login(formData);
    await router.push('/');
  } catch (e: unknown) {
    console.error(e);
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  max-width: 500px;
  padding: 20px;
  margin: 0 auto;
}
</style>

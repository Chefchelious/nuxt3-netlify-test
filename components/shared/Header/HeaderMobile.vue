<template>
  <Container class="wrapper row items-center">
    <div class="q-mr-auto">
      <q-btn
        unelevated
        :ripple="false"
        class="burger-btn"
        no-caps
        style="padding: 0"
      >
        <q-icon :name="`img:${Burger}`" class="q-mr-sm" size="18px" />

        <q-menu anchor="bottom end" self="top right">
          <q-list style="min-width: 100px">
            <q-item v-close-popup dense clickable>
              <q-item-section>some menu</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>

    <h1 class="logo q-mr-xl cursor-pointer" @click="goToHome">Annoncé</h1>

    <q-icon class="bag cursor-pointer" :name="`img:${Bag}`" size="24px">
      <span class="bag__counter">1</span>
    </q-icon>
  </Container>
</template>

<script lang="ts" setup>
import Burger from 'assets/images/burger.svg';
import Bag from '~/assets/images/bag.svg';

const router = useRouter();

const goToHome = () => {
  router.push('/');
};
</script>

<style scoped lang="scss">
:deep(.q-btn .q-focus-helper) {
  display: none;
}

.wrapper {
  padding: 0 16px;
}

.logo {
  font-family: $typography-font-family-secondary;
  line-height: 28px;
  font-size: 28px;
  font-weight: 600;
}

.bag {
  position: relative;

  &__counter {
    position: absolute;
    top: -6px;
    right: -4px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $positive-dark;
    min-width: 16px;
    padding: 0 4px;
    height: 16px;
    border: 1px solid #fff;
    border-radius: 20px;
    font-family: 'Open Sans', sans-serif;
    font-size: 11px;
    line-height: 12px;
    font-weight: 600;
    color: #fff;
  }
}
</style>

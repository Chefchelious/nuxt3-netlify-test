<template>
  <header>
    <HeaderDesktop v-if="windowWidth && windowWidth >= 993" />
    <HeaderMobile v-if="windowWidth && windowWidth < 993" />
    <q-resize-observer debounce="530" @resize="windowStore.onResize" />
  </header>
</template>

<script lang="ts" setup>
import { useWindowSizeStore } from '~/store/windowSizeStore';
import { useUserStore } from '~/store/userStore';

const windowStore = useWindowSizeStore();
const windowWidth = ref<number | null>(null);

const userStore = useUserStore();

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  userStore.getUserFromLS();
  updateWindowWidth();
  window.addEventListener('resize', updateWindowWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowWidth);
});
</script>

<style scoped lang="scss">
header {
  background-color: #fff7eb;
  padding: 8px 0;
  min-height: 55px;
}
</style>

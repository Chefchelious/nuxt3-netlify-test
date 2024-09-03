export const useWindowSizeStore = defineStore('use-window-size-store', () => {
  const windowWidth = ref(0);

  const onResize = (val: { width: number }) => {
    windowWidth.value = val.width;
  };

  return {
    windowWidth,
    onResize,
  };
});

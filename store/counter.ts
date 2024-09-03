export const useCounterStore = defineStore('use-counter-store', () => {
  const counter = ref(0);

  const increment = () => {
    counter.value += 1;
  };

  return {
    counter,
    increment,
  };
});

<template>
  <div class="wrapper">
    <AgentCard v-for="agent in agents" :key="agent._id" :agent="agent" class="agent-card" />
  </div>
</template>

<script setup lang="ts">
import { useAgentStore } from '~/store/agentsStore';

const agentsStore = useAgentStore();
const { agents } = storeToRefs(agentsStore);

// роут защищен axios interceptor, но по-хорошему middleware надо написать

const loading = ref(false);

const getAgents = async () => {
  try {
    loading.value = true;
    await agentsStore.get();
  } catch (e: unknown) {
    console.error(e); // заменить на notify
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  getAgents();
});
</script>

<style scoped lang="scss">
.agent-card + .agent-card {
  margin-top: 12px;
}
</style>

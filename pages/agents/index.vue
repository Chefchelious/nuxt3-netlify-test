  <template>
    <div class="wrapper">
      <InfoPannel />
      <div class="agent-list q-mt-md q-mb-xl">
        <AgentList />
      </div>
    </div>
  </template>

  <script setup lang="ts">
  definePageMeta({
    middleware: ['auth'],
  });
  </script>

  <style scoped lang="scss">
  .agent-list {
    max-width: 560px;
    margin: 0 auto;
    padding: 32px 0 64px;
  }
  </style>

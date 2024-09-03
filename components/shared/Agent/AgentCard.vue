<template>
  <div class="card">
    <div class="img-wrapper">
      <img :src="agent.avatar" alt="img" class="img" />
    </div>

    <div class="content">
      <h4 class="title">{{ agent.name }} {{ agent.lastname }}</h4>
      <p class="stats q-mb-sm">
        <span v-if="agent.isVerified" class="row items-center">
          <q-icon :name="`img:${Premium}`" class="q-mr-xs" />
          <span>{{ windowWidth <= 768 ? 'Проверен' : 'Документы проверены' }}</span>
        </span>
        <span v-if="agent.agentFeedback" class="row items-center">
          <q-icon :name="`img:${Star}`" class="q-mr-xs" />
          {{ agent.agentFeedback.rating }}
        </span>
        <span v-if="agent.agentFeedback"
          >{{ agent.agentFeedback.reviews }} отзывов</span
        >
      </p>
    </div>

    <div class="description">
      <p>
        {{ agent.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Premium from 'assets/images/premium.svg';
import Star from 'assets/images/star.svg';
import type { IAgentApi } from '~/types';

defineProps<{
  agent: IAgentApi;
}>();

const windowWidth = ref(window.innerWidth);

const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', updateWidth);
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth);
});
</script>

<style scoped lang="scss">
.card {
  display: grid;
  grid-template-columns: 152px 1fr;
  gap: 10px;
  padding: 20px;
  grid-auto-rows: min-content;
  grid-template-rows: auto auto;
  align-items: start;
  background-color: #f5f5f5;
  border-radius: 20px;

  @include md {
    grid-template-columns: 47px 1fr;
    grid-template-rows: auto 1fr;
    row-gap: 0;
    padding: 16px;
  }
}

.card + .card {
  margin-top: 20px;
}

.img-wrapper {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  border-radius: 12px;
  overflow: hidden;
  width: 140px;
  height: 140px;

  @include md {
    grid-row: 1 / 2;
    width: 48px;
    height: 48px;
  }
}

.title {
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;

  @include md {
    font-size: 20px;
  }
}

.content {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  align-self: start;
}

.stats {
  display: flex;
  align-items: center;
  position: relative;
}

.stats span:not(:last-child)::after {
  content: '•';
  font-weight: bold;
  font-size: 16px;
  color: #000;
  margin: 0 5px;
}


.description {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  color: #0f0f0f;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @include md {
    grid-column: 1 / 3;
  }
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>

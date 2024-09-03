<template>
  <Container class="wrapper">
    <section class="content-wrapper">
      <div class="desctop-info">
        <div class="img-wrapper">
          <img class="img" :src="LegacyImg" alt="img" />
        </div>
        <h3 class="title q-mb-sm cursor-pointer">Наследие</h3>
        <div class="stats q-mb-lg">
          <span>
            <q-icon :name="`img:${Premium}`" />
            <span>Документы проверены</span>
          </span>
          <span>
            <q-icon :name="`img:${Star}`" />
            <span>4.7</span>
          </span>
          <span>19 отзывов</span>
        </div>

        <q-btn
          :label="`${isVisibleNumber ? '+7-xxx-xxx-xx' : 'Показать номер телефона'}`"
          class="show-number-btn text-white q-py-md"
          no-caps
          @click="toggleNumberVisibilyty"
        />
      </div>

      <swiper
        :slides-per-view="'auto'"
        :space-between="7.5"
        class="mySwiper"
      >
        <swiper-slide
          v-for="tab in routeTabs"
          :key="tab.id"
        >
          <q-btn
            :key="tab.id"
            :label="tab.value"
            no-caps
            class="tab text-weight-bold"
            :class="{ 'active-tab': isActiveTab(tab.route) }"
            unelevated
            :ripple="false"
            :to="tab.route"
          >
            <span v-if="tab.quantity" class="q-ml-xs text-grey-7">{{ tab.quantity }}</span>
          </q-btn>
        </swiper-slide>
      </swiper>
    </section>
  </Container>
  <q-separator size="2px" color="grey-4" />
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import LegacyImg from '~/assets/images/legacy-logo.jpg';
import Premium from '~/assets/images/premium.svg';
import Star from '~/assets/images/star.svg';

interface ITabs {
  id: string;
  value: string;
  route: string;
  quantity?: number;
}

const route = useRoute();

const isVisibleNumber = ref(false);

const routeTabs = ref<ITabs[]>([
  {
    id: '1',
    value: 'Товары и услуги',
    route: '/',
  },
  {
    id: '2',
    value: 'Агенты',
    route: '/agents',
    quantity: 5,
  },
  {
    id: '3',
    value: 'О компании',
    route: '/about',
  },
]);

const toggleNumberVisibilyty = () => {
  isVisibleNumber.value = !isVisibleNumber.value;
};

const isActiveTab = (tabRoute: string) => {
  return route.path === tabRoute;
};
</script>

<style scoped lang="scss">
:deep(.q-btn .q-focus-helper) {
  display: none;
}

.wrapper {
  @include md {
    padding: 0 16px
  }
}

.content-wrapper {
  max-width: 368px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 29px;
}

.desctop-info {
  text-align: center;
}

.desctop-info {
  @include md {
    display: none;
  }
}

.img-wrapper {
  overflow: hidden;
  width: 120px;
  border-radius: 20px;
  margin: 0 auto 24px;
}

.img {
  width: 100%;
  height: auto;
}

.title {
  font-size: 24px;
  line-height: 28px;
  font-weight: bold;
}

.stats span {
  position: relative;
}


.stats span:not(:last-child)::after {
  content: '•';
  font-weight: bold;
  font-size: 16px;
  color: #000;
  margin: 0 6px;
}

.show-number-btn {
  min-width: 224px;
  background-color: #337566;
  border-radius: 12px;
  margin-bottom: 31px;
}

.mySwiper {
  @include md {
    margin-top: 32px;
  }
}

.swiper-slide {
  width: fit-content;
  display: flex;
  align-items: stretch;
}

:deep(.tab) {
  border-radius: 12px;
  background-color: #e8e8e8;
  padding: 8px 12px;
}

.active-tab {
  border: 1px solid #000;
  padding: 7px 11px;
}

.quantity {
  font-weight: 500;
}
</style>

<template>
  <div class="product-card">
    <div class="product-image-wrapper">
      <img class="product-image" :src="product.image" alt="Product Image" />
    </div>
    <div class="product-details q-pa-sm">
      <span class="product-price">{{ product.price }} ₽</span>
      <p class="product-title">{{ product.title }}</p>
    </div>
    <q-separator size="1px" color="grey-4" />

    <div
      v-if="product.status === ProductStatus.Active"
      class="card-footer row items-center no-wrap justify-between"
    >
      <span class="boost-text">Увеличьте количество просмотров</span>
      <q-btn class="boost-btn text-white q-pa-sm" label="Продвигать" no-caps />
    </div>

    <div v-else-if="product.status === ProductStatus.Featured" class="card-footer promoted q-pa-sm text-center text-green-7">
      <p>Объявление продвигается</p>
    </div>

    <div v-else-if="product.status === ProductStatus.Hidden" class="card-footer promoted q-pa-sm text-center text-red-7">
      <p>Объявление скрыто</p>
    </div>

    <div class="info-block row items-center no-wrap">
      <div class="views q-mr-sm">
        <q-icon :name="`img:${EyeIcon}`" size="22px" class="q-mr-sm" />
        <span>{{ product.views }}</span>
      </div>
      <div class="days-ago">
        <q-icon :name="`img:${CalendarIcon}`" size="22px" />
        <span>4 дня</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import EyeIcon from '~/assets/images/eye-icon.svg';
import CalendarIcon from '~/assets/images/calendar.svg';
import { type IProductApi, ProductStatus } from '~/types';

defineProps<{
  product: IProductApi;
}>();
</script>

<style scoped lang="scss">
.product-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  user-select: none;
}

.product-image-wrapper {
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 4 / 3.05;
  margin-bottom: 9px;

  @include md {
    aspect-ratio: 1 / 1;
  }
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.product-details {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.product-price {
  font-size: 17px;
  line-height: 20px;
  font-weight: 500;
}

.product-title {
  font-weight: 500;
  line-height: 24px;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.boost-btn {
  background-color: #337566;
  border-radius: 12px;
}

.boost-text {
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
}

.card-footer {
  flex: 1;
  margin-top: auto;
  gap: 8px;
  padding: 12px 10px;
}

.promoted {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.info-block {
  position: absolute;
  left: 16px;
  top: 10px;
}

.views,
.days-ago {
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 12px;
  padding: 4px 8px;
  color: #fff;
  font-size: 13px;
  line-height: 20px;
  font-weight: 500;
  background-color: rgba(29, 29, 29, 0.6);
}
</style>

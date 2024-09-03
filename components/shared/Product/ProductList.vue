<template>
  <Container class="wrapper">
    <div class="select-wrapper">
      <q-select
        v-model="modelValue"
        :options="['one', 'two', 'three']"
        class="col-3 q-pa-none field-36"
        style="
          border: 1px solid #dbdbdb;
          border-radius: 12px;
          background-color: #ededed;
        "
        borderless
        popup-content-class="bg-grey-2"
      >
        <template v-if="!modelValue" #selected>
          <div class="placeholder text-black">Все товары и услуги</div>
        </template>
      </q-select>
    </div>
    <div v-if="loading" class="product-list">
      <p>loading...</p>
    </div>
    <!--    добавить скелетона во время загрузки-->
    <div v-else class="product-list">
      <ProductCard
        v-for="product in products"
        :key="product._id"
        :product="product"
      />
    </div>
  </Container>
</template>

<script setup lang="ts">
import { useProductStore } from '~/store/productStore';

const productStore = useProductStore();
const { products } = storeToRefs(productStore);

const loading = ref(false);

const getProducts = async () => {
  try {
    loading.value = true;
    await productStore.get();
  } catch (e: unknown) {
    console.error(e); // заменить на notify
  } finally {
    loading.value = false;
  }
};

const modelValue = ref('');

onMounted(() => {
  getProducts();
});
</script>

<style scoped lang="scss">
.wrapper {
  @include md {
    padding: 0 16px
  }
}

.select-wrapper {
  max-width: 443px;
  margin: 28px auto;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 21px;
  row-gap: 52px;
  margin-bottom: 73px;
}

@include xl {
  .product-list {
    grid-template-columns: repeat(3, 1fr);
  }
}

@include lg {
  .product-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@include md {
  .product-list {
    grid-template-columns: 1fr;
  }
}

.placeholder {
  font-weight: 500;
  letter-spacing: 1px;
}
</style>

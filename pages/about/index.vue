<template>
  <div>
    <InfoPannel />
    <div v-if="companyInfo" class="wrapper">
      <section class="about">
        <h3 class="about__title">О компании</h3>
        <p class="about__description">
          {{ companyInfo.description }}
        </p>
      </section>
      <div class="working-time cursor-pointer" @click.stop="toggleDropdown">
        <div class="heading row items-center justify-between">
          <h4 class="heading__title">Режим работы</h4>
          <q-icon
            name="keyboard_arrow_down"
            size="24px"
            color="grey"
            class="rotate-icon"
            :class="{ rotate: isDropdownOpen }"
          />
        </div>
        <span>Сегодня с 8:00 до 23:00</span>
        <div
          ref="dropdown"
          class="dropdown-content"
          :style="{ height: isDropdownOpen ? dropdownHeight + 'px' : '0px' }"
        >
          <div class="list row column">
            <span>Завтра с 8:00 до 23:00</span>
            <span>Послезавтра с 8:00 до 23:00</span>
            <span>И так далее...</span>
          </div>
        </div>
      </div>

      <section class="location">
        <div class="location__info">
          <h4 class="location__title">Местоположение</h4>
          <p class="location__address">{{ companyInfo.address }}</p>
        </div>
        <div class="location__map" />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useCompanyStore } from '~/store/companyStore';

const companyStore = useCompanyStore();
const { companyInfo } = storeToRefs(companyStore);

const isDropdownOpen = ref(false);
const dropdown = ref<HTMLElement | null>(null);
const dropdownHeight = ref(0);

const loading = ref(false);

const toggleDropdown = async () => {
  isDropdownOpen.value = !isDropdownOpen.value;
  await nextTick();
  if (dropdown.value) {
    dropdownHeight.value = isDropdownOpen.value
      ? dropdown.value.scrollHeight
      : 0;
  }
};

const closeDropdown = (event: MouseEvent) => {
  if (dropdown.value && !dropdown.value.contains(event.target as Node)) {
    isDropdownOpen.value = false;
    dropdownHeight.value = 0;
  }
};

// роут защищен axios interceptor, но по-хорошему middleware надо написать

const getCompanyInfo = async () => {
  try {
    loading.value = true;
    await companyStore.get();
  } catch (e: unknown) {
    console.error(e); // заменить на notify
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  getCompanyInfo();
  window.addEventListener('click', closeDropdown);
});

onUnmounted(() => {
  window.removeEventListener('click', closeDropdown);
});
</script>

<style scoped lang="scss">
.wrapper {
  max-width: 560px;
  margin: 0 auto;
  padding: 33px 0 64px;
}

.about {
  padding: 20px;
  margin-bottom: 12px;

  &__title {
    margin-bottom: 8px;
    font-size: 24px;
    font-weight: 600;
    line-height: 28px;
  }

  &__description {
    font-size: 17px;
    line-height: 28px;
  }
}

.working-time {
  user-select: none;
  padding: 20px;
  margin-bottom: 12px;
  opacity: 30%;
  border-radius: 16px;
  background: rgba(245, 245, 245, 1);
}

.heading {
  &__title {
    font-size: 24px;
    font-weight: 600;
    line-height: 28px;
    margin-bottom: 8px;
    color: rgba(15, 15, 15, 1);
  }
}

.dropdown-content {
  height: 0;
  overflow: hidden;
  transition: height 0.7s;
}

.rotate-icon {
  transition: transform 0.3s;
}

.rotate {
  transform: rotate(180deg);
}

.location {
  display: flex;
  align-items: center;

  @include sm {
    flex-direction: column;
  }

  &__info {
    padding: 20px;

    @include sm {
      order: 1;
      width: 100%;
    }
  }

  &__title {
    font-size: 24px;
    line-height: 28px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  &__address {
    font-size: 17px;
    line-height: 28px;
    color: #337566;
  }

  &__map {
    overflow: hidden;
    border-radius: 0 12px 12px 0;
    width: 200px;
    height: 132px;
    flex-shrink: 0;
    background: url('assets/images/map-desktop.jpg') no-repeat center center;
    background-size: cover;

    @include sm {
      order: 0;
      width: 100%;
      height: 96px;
      background-image: url('assets/images/map-mobile.jpg');
      border-radius: 12px 12px 0 0;
    }
  }

  &__frame {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}
</style>

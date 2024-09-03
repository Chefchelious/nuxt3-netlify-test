<template>
  <Container class="row justify-between items-center">
    <div class="left-col row items-center">
      <h1 class="logo cursor-pointer" @click="goToHome">Annoncé</h1>
      <div>
        <q-btn unelevated :ripple="false" class="category-btn category-btn--large" no-caps>
          <q-icon :name="`img:${CategoryIcon}`" class="q-mr-xs" />
          Все категории
          <q-menu anchor="bottom start" self="top left">
            <q-list style="min-width: 100px">
              <q-item v-close-popup dense clickable>
                <q-item-section>list here</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>
    </div>
    <div v-if="user" class="right-col row items-center">
      <p class="geo-position">
        <q-icon :name="`img:${MapMarker}`" />
        Ростов-на-Дону
      </p>
      <q-separator class="separator-line" size="1px" color="grey-13" vertical inset />
      <q-btn
        unelevated
        :ripple="false"
        no-caps
        label="Разместить объявления"
        class="publish-ad q-pa-none"
      />
      <div>
        <q-btn
          unelevated
          :ripple="false"
          class="category-btn"
          style="padding: 4px 4px 4px 12px"
          no-caps
        >
          <q-icon :name="`img:${Burger}`" class="q-mr-sm" size="18px" />
          <q-icon
            v-if="user.avatar"
            :name="`img:${user.avatar}`"
            class="profile-icon"
            size="40px"
          />

          <q-menu anchor="bottom end" self="top right">
            <q-list style="min-width: 100px">
              <q-item v-close-popup dense clickable>
                <q-item-section @click="userStore.logout()">logout</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>
    </div>
    <q-btn v-else label="login" to="/login" />
  </Container>
</template>

<script lang="ts" setup>
import { useUserStore } from '~/store/userStore';
import CategoryIcon from '~/assets/images/categories.svg';
import MapMarker from '~/assets/images/marker.svg';
import Burger from 'assets/images/burger.svg';

const userStore = useUserStore();
const { user } = storeToRefs(userStore);
const router = useRouter();

// при логауте сделать пуш на ту же страницу чтобы отработал middleware или рефрешнуть

const goToHome = () => {
  router.push('/');
};
</script>

<style scoped lang="scss">
.logo {
  font-family: $typography-font-family-secondary;
  line-height: 28px;
  font-size: 28px;
  font-weight: 600;
  margin: 0 38px 0 10px;
}

:deep(.q-btn .q-focus-helper) {
  display: none;
}

.category-btn {
  background-color: #e8e8e8;
  border-radius: 40px;
  font-size: 15px;
  font-weight: 500;
}

.category-btn--large {
  padding: 12px 15px
}

.separator-line {
  margin: 8px 36px 8px 30px;
}

.publish-ad {
  color: $positive-dark;
  margin-right: 42px;
}

.profile-icon {
  border-radius: 50%;
  overflow: hidden;
}
</style>

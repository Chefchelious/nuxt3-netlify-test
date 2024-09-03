<template>
  <footer>
    <Container class="row items-center footer-container">
      <h6 class="footer-logo">© Annonce 2023</h6>

      <router-link v-for="(link, idx) in links" :key="idx" :to="link.route" class="text-grey-7">
        {{ link.value }}
      </router-link>
    </Container>

  </footer>
</template>

<script lang="ts" setup>
const links = ref<{ value: string, route: string }[]>([
  {
    value: 'Документы',
    route: '/',
  },
  {
    value: 'О компании',
    route: '/about',
  },
]);
</script>

<style scoped lang="scss">
footer {
  background-color: #f5f5f5;
  padding: 24px 0 40px 0;
}

.footer-container {
  gap: 20px;
}

.footer-logo {
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
}
</style>

<template>
  <div class="page">
    <Header />
    <div class="main">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1;
}
</style>

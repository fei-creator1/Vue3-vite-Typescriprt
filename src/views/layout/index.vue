<template>
  <div class="layout">
    <div class="main-container">
      <router-view />
    </div>	
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
}

</style>

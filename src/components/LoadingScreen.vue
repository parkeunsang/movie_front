<template>
  <div :class="{ loader: true, fadeout: !isLoading }">
    <div id="loading-wrapper">
      <div id="loading-text">분석중...</div>
      <div id="loading-content"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LoadingScreen",
    props: ["isLoading"]
  };
</script>

<style>

.fadeout {
  animation: fadeout 4s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
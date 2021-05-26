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
  .loader {
    background-color: #1d1e1f;
    bottom: 0;
    color: white;
    display: block;
    font-size: 32px;
    left: 0;
    overflow: hidden;
    padding-top: 10vh;
    position: fixed;
    right: 0;
    text-align: center;
    top: 0;
  }

  .fadeout {
    animation: fadeout 3s forwards;
  }

  @keyframes fadeout {
    to {
      opacity: 0;
      visibility: hidden;
    }
  }
</style>
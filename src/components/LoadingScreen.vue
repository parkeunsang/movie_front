<template>
  <div :class="{ loader: true, fadeout: !isLoading}">
    <div id="loading-wrapper">
      <div id="loading-text">{{loadingText}}...</div>
      <div id="loading-content"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LoadingScreen",
    props: ["isLoading", "loadingText"],
    created() {
      console.log('zzzz')
      console.log(this.isLoading)
    }
    
  };
  
</script>

<style>
  .loader {
    background-color: #ffef610c;
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
    z-index:100;

  }

  .fadeout {
    z-index:100;
    animation: fadeout 0.1s forwards;
  }
  

  @keyframes fadeout {
    to {
      opacity: 0;
      visibility: hidden;
    }
  }

</style>
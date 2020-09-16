<template>
  <div class="loading-container" v-if="isShow">
    <div class="loading-box" />
    <div class="loading-text">{{title}}</div>
  </div>
</template>
<script>
export default {
  name: 'Loading',
  data: () => {
    return {
      title: '正在加载中...',
      isShow: true
    }
  }
}
</script>
<style lang="scss" scoped>
  .loading-container {
    width: 200px;
    height: 200px;
    border-radius: 20%;
    background: #aaa;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .loading-box {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 3px solid #fff;
      margin: 20px auto;
      border-right-color: skyblue;
      animation: loading 2s linear infinite;
    }
    .loading-text {
      text-align: center;
    }
  }
  @keyframes loading {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>

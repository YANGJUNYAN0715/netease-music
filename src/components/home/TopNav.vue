<template>
  <div class="topNav">
    <div class="topleft">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-31liebiao"></use>
      </svg>
    </div>
    <div class="topContent">
      <span>我的</span>
      <span class="active">发现</span>
      <span>云村</span>
      <span>视频</span>
    </div>
    <div class="topRight">
      <svg class="icon" aria-hidden="true" @click="$router.push('/search')">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </div>
  </div>
</template>
<style lang="less" scoped>
.topNav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7rem;
  background-color: #fff;
  padding: 0 2rem;
  .topContent {
    width: 65%;
    display: flex;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    font-size: 18px;
    .active {
      font-weight: 900;
    }
  }
}
</style>

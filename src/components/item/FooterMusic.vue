<template>
  <div class="FooterMusic">
    <div class="footerLeft">
      <img :src="playList[playListIndex].al.picUrl" alt="" />
      <div>
        <p>{{ playList[playListIndex].al.name }}</p>
        <span>横滑切换上下首</span>
      </div>
    </div>
    <div class="footerLeft">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-bofanganniu"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zu"></use>
      </svg>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["playList", "playListIndex"]),
  },
};
</script>
<style lang="less" scoped>
.FooterMusic {
  width: 100%;
  height: 14rem;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  border-top: 10px solid #999;
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  .footerLeft {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      width: 10rem;
      height: 10rem;
      border-radius: 50%;
    }
  }
  .footerRight {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      width: 6rem;
      height: 6rem;
    }
  }
}
</style>

<template>
  <img :src="musicList.al.picUrl" alt="" class="bgimg" />
  <div class="detailTop">
    <div class="detailTopLeft">
      <svg class="icon libiao" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-zuojiantou"></use>
      </svg>
      <div>
        <span>
          <Vue3Marquee>{{ musicList.al.name }}</Vue3Marquee>
          <span v-for="item in musicList.ar" :key="item">{{ item.name }}</span>
          <svg class="icon libiao" aria-hidden="true" @click="$router.go(-1)">
            <use xlink:href="#icon-youjiantou1"></use>
          </svg>
        </span>
      </div>
    </div>
    <div class="detailTopRight">
      <svg class="icon libiao" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-fenxiang"></use>
      </svg>
    </div>
  </div>
</template>
<script>
import Vue3Marquee from "vue3-marquee";
import "vue3-marquee/dist/style.css";
export default {
  mounted() {
    console.log(this.musicList);
  },
  props: ["musicList"],
  components: {
    Vue3Marquee,
  },
};
</script>
<style>
.bgimg {
  width: 100%;
  height: 30%;
  position: absolute;
  z-index: -1;
  filter: blur(100px);
}
</style>

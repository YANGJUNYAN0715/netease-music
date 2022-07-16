<template>
  <div>
    <TopNav></TopNav>
    <SwiperTop></SwiperTop>
    <IconList></IconList>
  </div>
</template>

<script>
// @ is an alias to /src

import TopNav from "@/components/home/TopNav.vue";
import SwiperTop from "@/components/home/SwiperTop.vue";
import IconList from "@/components/home/IconList.vue";
export default {
  name: "Home",
  components: {
    TopNav,
    SwiperTop,
    IconList,
  },
};
</script>

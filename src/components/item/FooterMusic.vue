<template>
  <div class="FooterMusic">
    <div class="footerLeft">
      <img :src="playList[playListIndex].al.picUrl" alt="" />
      <div>
        <p>{{ playList[playListIndex].al.name }}</p>
        <span>横滑切换上下首</span>
      </div>
    </div>
    <div class="footerRight">
      <svg class="icon liebiao" aria-hidden="true" v-if="IsbtnShow">
        <use xlink:href="#icon-bofanganniu" @click="play"></use>
      </svg>
      <svg class="icon libiao" aria-hidden="true" v-else>
        <use xlink:href="#icon-weibiaoti--" @click="play"></use>
      </svg>
      <svg class="icon libiao" aria-hidden="true">
        <use xlink:href="#icon-zu"></use>
      </svg>
    </div>
    <audio
      ref="audio"
      :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"
    ></audio>
  </div>
</template>
<script>
import { runInThisContext } from "vm";
import { mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["playList", "playListIndex", "isbtnShow"]),
  },
  mounted() {
    console.log(this.$refs);
  },
  methods: {
    play: function () {
      if (this.$refs.audio.paused) {
        this.$refs.audio.play();
        this.updateIsbtnShow(false);
      } else {
        this.$refs.audio.pause();
        this.updateIsbtnShow(true);
      }
    },
    ...mapMutations(["updateIsbtnShow"]),
  },
};
</script>
<style lang="less" scoped>
.FooterMusic {
  width: 100%;
  height: 13rem;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  border-top: 2px solid #999;
  display: flex;
  padding: 5px;
  justify-content: space-around;
  align-items: center;
  .footerLeft {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    img {
      width: 10rem;
      height: 10rem;
      border-radius: 50%;
    }
    .footerRight {
      width: 40%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      .icon {
        width: 6rem;
        height: 30px;
      }
    }
  }
}
</style>

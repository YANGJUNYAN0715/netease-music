<template>
  <div class="FooterMusic">
    <div class="footerLeft" @click="updateDetailShow">
      <img :src="playList[playListIndex].al.picUrl" alt="" />
      <div>
        <p>{{ playList[playListIndex].al.name }}</p>
        <span>横滑切换上下首</span>
      </div>
    </div>
    <div class="footerRight">
      <svg
        class="icon liebiao"
        aria-hidden="true"
        v-if="isbtnShow"
        @click="play"
      >
        <use xlink:href="#icon-bofanganniu"></use>
      </svg>
      <svg class="icon libiao" aria-hidden="true" v-else @click="play">
        <use xlink:href="#icon-weibiaoti--"></use>
      </svg>
      <svg class="icon libiao" aria-hidden="true">
        <use xlink:href="#icon-zu"></use>
      </svg>
    </div>
    <audio
      ref="audio"
      :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"
    ></audio>
    <van-popup
      v-model:show="detailShow"
      position="right"
      :style="{ height: '100%', width: '100%' }"
    >
      <MusicDetail
        :musicList="playList[playListIndex]"
        :play="play"
        :isbtnShow="isbtnShow"
      />
    </van-popup>
  </div>
</template>
<script>
import { runInThisContext } from "vm";
import { mapMutations, mapState } from "vuex";
import MusicDetail from "./MusicDetail.vue";
export default {
  data() {
    return {
      interVal: 0,
    };
  },
  computed: {
    ...mapState(["playList", "playListIndex", "isbtnShow", "detailShow"]),
  },
  mounted() {
    console.log(this.$refs);
    this.$store.dispatch("getLyric", this.playList[this.playListIndex].id);
    this.updateTime();
  },
  updated() {
    this.$store.dispatch("getLyric", this.playList[this.playListIndex].id);
  },
  methods: {
    play: function () {
      if (this.$refs.audio.paused) {
        this.$refs.audio.play();
        this.updateIsbtnShow(false);
        this.updateTime();
      } else {
        this.$refs.audio.pause();
        this.updateIsbtnShow(true);
        clearInterval(this.interVal);
      }
    },
    updateTime: function () {
      this.interVal = setInterval(() => {
        this.updateCurrentTime(this.$refs.audio.currentTime);
      }, 1000);
    },
    ...mapMutations([
      "updateIsbtnShow",
      "updateDetailShow",
      "updateCurrentTime",
    ]),
  },
  watch: {
    playListIndex: function () {
      this.$refs.audio.autoplay = true;
      if (this.$refs.audio.paused) {
        this.updateIsbtnShow(false);
      }
    },
  },
  components: { MusicDetail },
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
  }
  .footerRight {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .icon {
      width: 6rem;
      height: 30px;
    }
  }
}
</style>

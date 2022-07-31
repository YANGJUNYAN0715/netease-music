<template>
  <img :src="musicList.al.picUrl" alt="" class="bgimg" />
  <div class="detailTop">
    <div class="detailTopLeft">
      <svg class="icon libiao" aria-hidden="true" @click="updateDetailShow">
        <use xlink:href="#icon-zuojiantou"></use>
      </svg>
      <div class="leftMarquee">
        <Vue3Marquee>{{ musicList.al.name }}</Vue3Marquee>
        <span v-for="item in musicList.ar" :key="item">{{ item.name }}</span>
        <svg class="icon libiao" aria-hidden="true">
          <use xlink:href="#icon-youjiantou1"></use>
        </svg>
      </div>
    </div>
    <div class="detailTopRight">
      <svg class="icon libiao" aria-hidden="true">
        <use xlink:href="#icon-fenxiang"></use>
      </svg>
    </div>
  </div>
  <div class="detailContent" v-show="isLyricShow">
    <img src="../../assets/cd.png" alt="" class="img_cd" />
    <img
      src="../../assets/needle-ab.png"
      alt=""
      class="img_needle"
      :class="{ img_needle_active: !isbtnShow }"
    />
    <img
      :src="musicList.al.picUrl"
      alt=""
      class="img_ar"
      :class="{ img_ar_active: !isbtnShow, img_ar_paused: isbtnShow }"
    />
  </div>
  <div class="musicLyric">
    <p v-for="item in lyric" :key="item">
      {{ item.lrc }}
    </p>
  </div>
  <div class="detailFooter">
    <div class="footerTop">
      <svg class="icon libiao" aria-hidden="true">
        <use xlink:href="#icon-aixin"></use>
      </svg>
      <svg class="icon libiao" aria-hidden="true">
        <use xlink:href="#icon-iconfontzhizuobiaozhun023146"></use>
      </svg>
      <svg class="icon libiao" aria-hidden="true">
        <use xlink:href="#icon-yinlechangpian"></use>
      </svg>
      <svg class="icon libiao" aria-hidden="true">
        <use xlink:href="#icon-iconfontzhizuobiaozhun023110"></use>
      </svg>
      <svg class="icon libiao" aria-hidden="true">
        <use xlink:href="#icon-liebiao-"></use>
      </svg>
    </div>
    <div class="footerContent"></div>
    <div class="footer">
      <svg class="icon fenxiang" aria-hidden="true">
        <use xlink:href="#icon-fenxiang"></use>
      </svg>
      <svg class="icon shangyishou" aria-hidden="true">
        <use xlink:href="#icon-shangyishoushangyige"></use>
      </svg>
      <svg
        class="icon bofang"
        aria-hidden="true"
        v-if="isbtnShow"
        @click="play"
      >
        <use xlink:href="#icon-bofang1"></use>
      </svg>
      <svg class="icon bofang" aria-hidden="true" v-else @click="play">
        <use xlink:href="#icon-zanting"></use>
      </svg>
      <svg class="icon xiayishou" aria-hidden="true">
        <use xlink:href="#icon-xiayigexiayishou"></use>
      </svg>
      <svg class="icon libiao" aria-hidden="true">
        <use xlink:href="#icon-zu"></use>
      </svg>
    </div>
  </div>
</template>
<script>
import { Vue3Marquee } from "vue3-marquee";
import "vue3-marquee/dist/style.css";
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      isLyricShow: false,
    };
  },
  computed: {
    ...mapState(["lyricList"]),
    lyric: function () {
      let arr;
      if (this.lyricList.lyric) {
        arr = this.lyricList.lyric.split(/[{(\r\n)\r\n]}+/).map((item, i) => {
          let min = item.slice(1, 3);
          let sec = item.slice(4, 6);
          let mill = item.slice(7, 10);
          let lrc = item.slice(11, item.length);
          if (isNaN(Number(mill))) {
            mill = item.silce(7, 9);
            lrc = item.slice(10, item.length);
          }
          return { min, sec, mill, lrc };
        });
      }
      return arr;
    },
    mounted() {
      console.log(this.musicList);
      console.log(this.lyricList.lyric);
    },
    props: ["musicList", "isbtnShow", "play"],
    methods: {
      ...mapMutations(["updateDetailShow"]),
    },
    components: {
      Vue3Marquee,
    },
  },
};
</script>
<style lang="less" scoped>
.bgimg {
  width: 100%;
  height: 80%;
  position: absolute;
  z-index: -1;
  filter: blur(70px);
}
.detailTop {
  width: 100%;
  height: 10rem;
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  align-items: center;
  fill: #fff;
  .detailTopLeft {
    display: flex;
    align-items: center;
    .leftMarquee {
      width: 30rem;
      height: 100%;
      margin-left: 4rem;
      span {
        color: #999;
      }
      .icon {
        width: 3rem;
        height: 3rem;
        fill: #999;
      }
    }
  }
}
.detailContent {
  width: 100%;
  height: 90rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .img_needle {
    width: 20rem;
    height: 30rem;
    position: absolute;
    left: 46%;
    transform-origin: 0 0;
    transform: rotate(-15deg);
    transition: all 2s;
  }
  .img_needle_active {
    width: 20rem;
    height: 30rem;
    position: absolute;
    left: 46%;
    transform-origin: 0 0;
    transform: rotate(0deg);
    transition: all 2s;
  }
  .img_cd {
    width: 50rem;
    height: 50rem;
    position: absolute;
    bottom: 23rem;
    z-index: -1;
  }
  .img_ar {
    width: 32rem;
    height: 32rem;
    border-radius: 50%;
    position: absolute;
    bottom: 31.4rem;
    animation: rotate_ar 10s linear infinite;
  }
  .img_ar_active {
    animation-play-state: running;
  }
  .img_ar_paused {
    animation-play-state: paused;
  }
  @keyframes rotate_ar {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
.detailFooter {
  width: 100%;
  height: 30rem;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  bottom: 2rem;
  .footerTop {
    width: 100%;
    height: 10rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .icon {
      width: 6.4rem;
      height: 6.4rem;
      fill: rgb(245, 234, 234);
    }
  }
  .footer {
    width: 100%;
    height: 10rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .icon {
      fill: rgb(67, 67, 67);
    }
    .bofang {
      width: 10rem;
      height: 10rem;
    }
  }
}
.musicLyric {
  width: 100%;
  height: 9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 4rem;
  overflow: scroll;
  p {
    color: grey;
  }
}
</style>

<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="musicContent">
      <van-swipe
        :loop="false"
        :width="150"
        class="my-swipe"
        :show-indicators="false"
      >
        <van-swipe-item v-for="item in musicList" :key="item">
          <img :src="item.picUrl" alt="" />
          <span class="playCount">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bofang"></use>
            </svg>
            {{ changeCount(item.playCount) }}
          </span>
          <span class="name">{{ item.name }}</span>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
import { getMusicList } from "../../request/api/home";
export default {
  data() {
    return {
      musicList: [],
    };
  },
  methods: {
    async getGedan() {
      let res = await getMusicList();
      this.musicList = res.data.result;
    },
    changeCount: function (num) {
      return num > 10000 ? (num / 10000).toFixed(1) + "万" : num;
    },
  },
  mounted() {
    this.getGedan();
  },
};
</script>
<style lang="less" scoped>
.musicList {
  width: 100%;
  height: 5rem;
  padding: 0.2rem;
  .musicTop {
    width: 100%;
    display: flex;
    height: 5.6rem;
    justify-content: space-between;
    margin-bottom: 0.2rem;
    .title {
      font-size: 3.5rem;
      font-weight: 900;
    }
    .more {
      border: 2px solid #ccc;
      text-align: center;
      line-height: 0.6rem;
      padding: 10px 0.2rem;
      border-radius: 3.4rem;
    }
  }
  .musicContent {
    width: 100%;
    height: 200px;
    .van-swipe-item {
      padding-right: 1rem;
      position: relative;
      height: 100%;
      img {
        width: 100%;
        height: 150px;
        border-radius: 5rem;
      }
      .playCount {
        position: absolute;
        z-index: 100;
        right: 3rem;
        color: white;
        margin-top: 0.06rem;
        .icon {
          width: 4rem;
          height: 4rem;
        }
      }
      .name {
        bottom: 0px;
      }
    }
  }
}
</style>

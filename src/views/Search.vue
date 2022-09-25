<template>
  <link
    rel="stylesheet"
    href="//at.alicdn.com/t/c/font_3518054_g9cgbxg983p.css"
  />
  <div class="search">
    <div class="header">
      <div class="iconfont icon-youjiantou" @click="$router.go(-1)"></div>
      <div class="iconfont icon-41"></div>
      <input
        type="text"
        placeholder="邓紫棋"
        v-model="searchKey"
        @keydown.enter="addKey"
      />
    </div>
    <div class="history">
      <div style="white-space: nowrap">历史</div>
      <span
        v-for="(item, index) in searchList"
        :key="item"
        @click="searchHistory(item)"
        >{{ item }}</span
      >
      <div class="iconfont icon-del" @click="clearKey"></div>
    </div>
    <div class="itemList">
      <div class="item" v-for="(item, i) in searchList2" :key="i">
        <div class="itemLeft" @click="updateIndex(item)">
          <span class="leftSpan">{{ i + 1 }}</span>
          <div>
            <p>{{ item.name }}</p>
            <span v-for="(item1, index) in item.artists" :key="index">{{
              item1.name
            }}</span>
          </div>
        </div>
        <div class="itemRight">
          <svg class="icon bofang" aria-hidden="true" v-if="item.mvid != 0">
            <use xlink:href="#icon-shipin"></use>
          </svg>
          <svg class="icon liebiao" aria-hidden="true">
            <use xlink:href="#icon-31liebiao"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getResearchResult from "../request/api/home.js";
export default {
  data() {
    return {
      searchList: [],
      searchKey: "",
      searchList2: [],
    };
  },
  mounted() {
    this.searchList = JSON.parse(localStorage.getItem("searchList")) || [];
  },
  methods: {
    addKey: async function () {
      if (this.searchKey !== "") {
        this.searchList.unshift(this.searchKey);
        this.searchList = [...new Set(this.searchList)];
        if (this.searchList.length > 5) {
          this.searchList.pop();
        }
        localStorage.setItem("searchList", JSON.stringify(this.searchList));
        let res = await getResearchResult(this.searchKey);
        // console.log(res);
        this.searchList2 = res.data.result.songs;
        this.searchKey = "";
      }
    },
    clearKey() {
      localStorage.removeItem("searchList");
      this.searchList = [];
    },
    searchHistory: async function (item) {
      this.searchKey = item;
      let res = await this.addKey();
      // console.log(res);
    },
    updateIndex: function (item) {
      item.al = item.album;
      item.al.picUrl = item.album.artist.img1v1Url;
      this.$store.commit("pushPlayList", item);
      this.$store.commit(
        "updatePlayListIndex",
        this.$store.state.playList.length - 1
      );
    },
  },
};
</script>

<style lang="less">
.header {
  padding: 8px;
  display: flex;
  .iconfont {
    font-size: 28px;
    margin-right: 5px;
  }
  input {
    font-size: 16px;
    width: 100%;
    border: none;
    border-bottom: 1px solid #ccc;
  }
}
.history {
  font-size: 16px;
  padding-left: 8px;
  display: flex;
  //   align-items: center;
  position: relative;
  flex-wrap: wrap;
  div {
    margin-right: 10px;
    font-weight: 700;
  }
  span {
    margin-right: 8px;
    margin-bottom: 8px;
    border-radius: 16px;
    background-color: rgb(174, 173, 173);
    padding: 4px 8px;
    white-space: pre;
    display: inline-block;
  }
  .iconfont {
    position: absolute;
    right: 0px;
  }
}
.itemList {
  width: 100%;
  padding: 10px;
  .item {
    width: 100%;
    height: 14rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .itemLeft {
      width: 85%;
      height: 100%;
      display: flex;
      align-items: center;
      .leftSpan {
        display: inline-block;
        width: 2rem;
        text-align: center;
      }
      div {
        p {
          width: 45.4rem;
          height: 4rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-weight: 700;
        }
        span {
          font-weight: 400;
          font-size: 2.4rem;
          color: #999;
        }
        margin-left: 3rem;
      }
    }
    .itemRight {
      width: 20%;
      height: 100%;
      display: flex;
      // justify-content: space-between;
      align-items: center;
      position: relative;
      .icon {
        fill: #999;
      }
      .bofang {
        position: absolute;
        left: 0;
      }
      .liebiao {
        position: absolute;
        right: 0;
      }
    }
  }
}
</style>

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
      <span v-for="(item, index) in searchList" :key="item">{{ item }}</span>
      <div class="iconfont icon-del" @click="clearKey"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchList: [],
      searchKey: "",
    };
  },
  mounted() {
    this.searchList = JSON.parse(localStorage.getItem("searchList")) || [];
  },
  methods: {
    addKey() {
      if (this.searchKey !== "") {
        this.searchList.unshift(this.searchKey);
        this.searchList = [...new Set(this.searchList)];
        if (this.searchList.length > 5) {
          this.searchList.pop();
        }
        localStorage.setItem("searchList", JSON.stringify(this.searchList));
        this.searchKey = "";
      }
    },
    clearKey() {
      localStorage.removeItem("searchList");
      this.searchList = [];
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
</style>

import { createStore } from "vuex";
import { getMusicLyric } from "../request/api/item.js";
export default createStore({
  state: {
    playList: [
      {
        al: {
          id: 89039055,
          name: "雨爱抖音版",
          pic: 109951164966568500,
          picUrl:
            "https://p1.music.126.net/2f6UgY8Jc0Dy6jufMdIZeQ==/109951164966568495.jpg",
          pic_str: "109951164966568495",
        },
        id: 1446137141,
        name: "雨爱（抖音版）",
        ar: [{ name: "灏灏灏仔" }],
      },
    ],
    playListIndex: 0,
    isbtnShow: true,
    detailShow: false,
    lyricList: {},
  },
  mutations: {
    updateIsbtnShow: function (state, value) {
      state.isbtnShow = value;
    },
    updatePlayList: function (state, value) {
      state.playList = value;
    },
    updatePlayListIndex: function (state, value) {
      state.playListIndex = value;
    },
    updateDetailShow: function (state) {
      state.detailShow = !state.detailShow;
    },
    updateLyricList: function (state, value) {
      state.lyricList = value;
    },
  },
  actions: {
    getLyric: async function (context, value) {
      let res = await getMusicLyric(value);
      console.log(res);
      context.commit("updateLyricList", res.data.lrc);
    },
  },
  modules: {},
});

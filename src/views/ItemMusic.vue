<template>
  <ItemMusicTop :playlist="state.playlist" />
  <ItemMusicList
    :itemList="state.itemList"
    :subscribedCount="state.playlist.subscribedCount"
  />
</template>
<script>
import { useRoute } from "vue-router";
import { onMounted, reactive } from "vue";
import { getMusicItemList, getItemList } from "../request/api/item.js";
import ItemMusicTop from "../components/item/ItemMusicTop";
import ItemMusicList from "../components/item/ItemMusicList";
export default {
  setup() {
    const state = reactive({
      playlist: {}, //歌单详情页数据
      itemList: [], //歌单的歌曲
    });
    onMounted(async () => {
      let id = useRoute().query.id;
      // console.log(id);
      let res = await getMusicItemList(id);
      // console.log(res);
      state.playlist = res.data.playlist;
      let result = await getItemList({ id, limit: 10, offset: 0 });
      // console.log(result);
      state.itemList = result.data.songs;
      sessionStorage.setItem("itemDetail", JSON.stringify(state));
    });
    return { state };
  },
  components: {
    ItemMusicTop,
    ItemMusicList,
  },
};
</script>

import service from "../index";
export function getBanner() {
  return service({
    method: "GET",
    url: "/banner?type=2",
  });
}
// 获取发现好歌单
export function getMusicList() {
  return service({
    method: "GET",
    url: "/personalized?limit=10",
  });
}

export default function getSearchResult(data) {
  return service({
    method: "GET",
    url: `/search?keywords=${data}`,
  });
}

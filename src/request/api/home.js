import service from "../index";
export function getBanner() {
  return service({
    method: "GET",
    url: "/banner?type=2",
  });
}
// 获取发现好歌单
export function getDiscover() {
  return service({
    method: "GET",
    url: "/personalized",
  });
}

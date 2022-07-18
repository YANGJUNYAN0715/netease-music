import { Swipe, SwipeItem, Button, Popup } from "vant";
let plugins = [
  Swipe,
  SwipeItem,
  Button, // 引入插件
  Popup,
];
export default function getVant(app) {
  plugins.forEach((item) => {
    return app.use(item);
  });
}

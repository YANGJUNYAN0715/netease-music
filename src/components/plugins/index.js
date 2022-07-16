import { Swipe, SwipeItem, Button } from "vant";
let plugins = [
  Swipe,
  SwipeItem,
  Button, // 引入插件
];
export default function getVant(app) {
  plugins.forEach((item) => {
    return app.use(item);
  });
}

# Seoul Trip Plan

这是一个纯静态的手机端首尔三日游页面，不需要后端。

## 文件

- `index.html` 页面结构
- `styles.css` 页面样式
- `app.js` 行程数据、地图嵌入和交互

## Netlify Drop 部署

1. 打开 https://app.netlify.com/drop
2. 把包含这三个文件的文件夹拖进去
3. Netlify 会生成一个可分享链接

## Vercel 部署

1. 新建一个 Vercel 项目
2. 上传这个文件夹或连接 GitHub 仓库
3. Framework 选择 Other / Static
4. 直接部署

## 注意

Naver Map 嵌入和小红书/Naver 外链在线上 URL 中通常比 `file://` 本地打开更稳定。

如果要让 Naver 路线准确识别具体店铺，最好在 `app.js` 的对应地点里补充 Naver 的真实地点 ID：

```js
{ name: "The Hyundai Seoul", position: { lat: 37.5259, lng: 126.9284 }, naverPlaceId: "..." }
```

Naver 地点 ID 可以从 Naver Map 的具体店铺分享链接里提取。

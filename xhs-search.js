const params = new URLSearchParams(window.location.search);
const keyword = params.get("keyword")?.trim();
const openLink = document.querySelector("#xhsOpenLink");
const keywordLabel = document.querySelector("#xhsKeyword");
const searchUrl = keyword
  ? `https://www.xiaohongshu.com/search_result?keyword=${encodeURIComponent(keyword)}`
  : "https://www.xiaohongshu.com/";

openLink.href = searchUrl;
keywordLabel.textContent = keyword ? `搜索词：${keyword}` : "搜索词未带过来，先打开小红书首页。";

setTimeout(() => {
  window.location.href = searchUrl;
}, 320);

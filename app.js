const routes = {
  day1: {
    date: "5.23 周六",
    title: "落地后直奔西边",
    count: "7 stops",
    caption: "Day 1 · 明洞皇家酒店 → 延南洞 → 麻浦 → 汝矣岛汉江",
    meta: ["金浦抵达", "汉江泡面", "不回头路线"],
    places: [
      { name: "金浦机场", position: { lat: 37.5583, lng: 126.7906 } },
      { name: "明洞皇家酒店", position: { lat: 37.5642, lng: 126.9856 } },
      { name: "延南洞", position: { lat: 37.5626, lng: 126.9238 } },
      { name: "Object 弘大本店", position: { lat: 37.5549, lng: 126.9291 } },
      { name: "麻浦元祖炒年糕", position: { lat: 37.5408, lng: 126.9486 } },
      { name: "The Hyundai Seoul", position: { lat: 37.5259, lng: 126.9284 } },
      { name: "汝矣岛汉江公园", position: { lat: 37.5285, lng: 126.9348 } }
    ],
    mapPlaces: [
      { name: "明洞皇家酒店", position: { lat: 37.5642, lng: 126.9856 } },
      { name: "延南洞", position: { lat: 37.5626, lng: 126.9238 } },
      { name: "Object 弘大本店", position: { lat: 37.5549, lng: 126.9291 } },
      { name: "麻浦元祖炒年糕", position: { lat: 37.5408, lng: 126.9486 } },
      { name: "The Hyundai Seoul", position: { lat: 37.5259, lng: 126.9284 } },
      { name: "汝矣岛汉江公园", position: { lat: 37.5285, lng: 126.9348 } }
    ],
    naverRoutePlaces: [
      { name: "明洞皇家酒店", position: { lat: 37.5642, lng: 126.9856 } },
      { name: "延南洞", position: { lat: 37.5626, lng: 126.9238 } },
      { name: "Object 弘大本店", position: { lat: 37.5549, lng: 126.9291 } },
      { name: "麻浦元祖炒年糕", position: { lat: 37.5408, lng: 126.9486 } },
      { name: "The Hyundai Seoul", position: { lat: 37.5259, lng: 126.9284 } },
      { name: "汝矣岛汉江公园", position: { lat: 37.5285, lng: 126.9348 } }
    ],
    stops: [
      {
        time: "14:00",
        name: "金浦机场抵达",
        transport: "入境 40-60 分钟",
        note: "取完行李先去酒店。今天不要把午饭排死，后面有炒年糕、百货美食和汉江泡面。",
        tags: ["T-money", "护照随身"],
        xhs: "首尔 金浦机场 入境 交通 明洞"
      },
      {
        time: "15:10",
        name: "明洞皇家酒店 Royal Hotel Seoul",
        transport: "机场铁路 + 2 号线",
        note: "金浦机场坐机场铁路到弘大入口，换 2 号线到乙支路入口，步行约 3 分钟到酒店。行李多就打车。",
        tags: ["放行李", "补妆"],
        xhs: "明洞皇家酒店 Royal Hotel Seoul 首尔"
      },
      {
        time: "16:15",
        name: "延南洞 Yeonnam-dong",
        transport: "2 号线到弘大入口",
        note: "从酒店出发去弘大入口站 3 号口，先走延南洞小巷。这里适合第一天用咖啡、小吃和路边小店进入首尔状态。",
        tags: ["拍照", "饰品小店"],
        xhs: "首尔 延南洞 咖啡 小店 拍照"
      },
      {
        time: "17:15",
        name: "Object 弘大本店 오브젝트 서교점",
        transport: "步行 12 分钟",
        note: "比普通潮牌店更特别，适合买贴纸、文创、布贴和小包。想做 DIY 布贴的话，现场看人多不多再决定。",
        tags: ["DIY", "可退税"],
        xhs: "首尔 Object 弘大 DIY 布贴",
        link: "https://map.naver.com/p/search/%EC%98%A4%EB%B8%8C%EC%A0%9D%ED%8A%B8%20%EC%84%9C%EA%B5%90%EC%A0%90"
      },
      {
        time: "18:15",
        name: "麻浦元祖炒年糕 마포원조떡볶이",
        transport: "打车 10-15 分钟",
        note: "老派甜辣炒年糕小店。建议点炒年糕、鱼饼汤、炸物，两个人不要点太多，后面还要去汉江吃泡面。",
        tags: ["街头小吃", "现金备用"],
        xhs: "麻浦元祖炒年糕 首尔 炒年糕",
        link: "https://map.naver.com/p/search/%EB%A7%88%ED%8F%AC%EC%9B%90%EC%A1%B0%EB%96%A1%EB%B3%B6%EC%9D%B4"
      },
      {
        time: "19:10",
        name: "The Hyundai Seoul 더현대 서울",
        transport: "麻浦打车约 10 分钟",
        note: "重点逛 B2 韩国设计师品牌、B1 美食、F1 美妆香氛和 Gentle Monster。周六人会多，只逛重点楼层。",
        tags: ["B2", "B1", "F1"],
        xhs: "The Hyundai Seoul 首尔 现代百货 B2 emis depound",
        link: "https://map.naver.com/p/search/%EB%8D%94%ED%98%84%EB%8C%80%20%EC%84%9C%EC%9A%B8"
      },
      {
        time: "20:45",
        name: "汝矣岛汉江公园泡面",
        transport: "步行 10-15 分钟",
        note: "从百货出来去汉江边便利店，买饮料和自煮泡面。周六晚上人多，但这就是氛围。",
        tags: ["CU", "晚风", "夜景"],
        xhs: "汝矣岛汉江公园 泡面 首尔",
        link: "https://map.naver.com/p/search/%EC%97%AC%EC%9D%98%EB%8F%84%ED%95%9C%EA%B0%95%EA%B3%B5%EC%9B%90"
      }
    ]
  },
  day2: {
    date: "5.24 周日",
    title: "圣水早咖啡，再下江南",
    count: "8 stops",
    caption: "Day 2 · Tournesol 帅哥咖啡厅 → 圣水 → Haus Dosan → 31 旗舰店",
    meta: ["早咖啡", "圣水主菜", "江南下午茶"],
    places: [
      { name: "明洞皇家酒店", position: { lat: 37.5642, lng: 126.9856 } },
      { name: "Tournesol", position: { lat: 37.5448, lng: 127.0575 } },
      { name: "LCDC Seoul", position: { lat: 37.5430, lng: 127.0529 } },
      { name: "능동미나리 圣水", position: { lat: 37.5428, lng: 127.0563 } },
      { name: "HAUS DOSAN", position: { lat: 37.5239, lng: 127.0367 } },
      { name: "31 Brown Cheongdam", position: { lat: 37.5232, lng: 127.0397 } },
      { name: "乙支路三街", position: { lat: 37.5660, lng: 126.9910 } }
    ],
    naverRoutePlaces: [
      { name: "明洞皇家酒店", position: { lat: 37.5642, lng: 126.9856 } },
      { name: "Tournesol", position: { lat: 37.5448, lng: 127.0575 } },
      { name: "LCDC Seoul", position: { lat: 37.5430, lng: 127.0529 } },
      { name: "능동미나리 圣水", position: { lat: 37.5428, lng: 127.0563 } },
      { name: "HAUS DOSAN", position: { lat: 37.5239, lng: 127.0367 } },
      { name: "31 Brown Cheongdam", position: { lat: 37.5232, lng: 127.0397 } }
    ],
    stops: [
      {
        time: "08:50",
        name: "明洞皇家酒店出发",
        transport: "2 号线直达圣水",
        note: "乙支路入口站上车到圣水站，约 20 分钟。今天穿舒服的鞋，圣水会走很多。",
        tags: ["早出门", "轻装"],
        xhs: "明洞 到 圣水 地铁 2号线"
      },
      {
        time: "09:30",
        name: "Tournesol 뚜흐느솔",
        transport: "圣水站 2 号口步行",
        note: "你说的圣水帅哥咖啡厅大概率就是这家。点拿铁、美式或草莓法式吐司；早上去排队压力小，二楼更适合坐一会儿。",
        tags: ["帅哥咖啡厅", "法式吐司"],
        xhs: "圣水 帅哥咖啡厅 Tournesol 뚜흐느솔",
        link: "https://map.naver.com/p/search/%EB%9A%9C%ED%9D%90%EB%8A%90%EC%86%94%20%EC%84%B1%EC%88%98"
      },
      {
        time: "10:45",
        name: "圣水 Yeonmujang-gil 随机快闪",
        transport: "步行",
        note: "不要把圣水写死成十家店。当天打开 Naver Map 搜 popup seongsu，沿主街看快闪、香氛、服饰和生活方式店。",
        tags: ["快闪", "香氛", "潮牌"],
        xhs: "圣水洞 快闪 首尔 香氛 潮牌"
      },
      {
        time: "11:50",
        name: "LCDC Seoul",
        transport: "步行 10 分钟",
        note: "比纯网红店耐逛，买手店、文创和咖啡都有。适合慢慢看韩国本土品牌，不用每层都买。",
        tags: ["买手店", "生活方式"],
        xhs: "LCDC Seoul 圣水 买手店",
        link: "https://map.naver.com/p/search/LCDC%20Seoul"
      },
      {
        time: "13:00",
        name: "능동미나리 성수 Neungdong Minari",
        transport: "步行/短程打车",
        note: "吃水芹菜牛肉汤或韩牛生拌饭。比普通网红餐厅更有韩国味，也不会太拖下午行程。",
        tags: ["韩餐", "水芹菜"],
        xhs: "능동미나리 성수 圣水 水芹菜 韩餐",
        link: "https://map.naver.com/p/search/%EB%8A%A5%EB%8F%99%EB%AF%B8%EB%82%98%EB%A6%AC%20%EC%84%B1%EC%88%98"
      },
      {
        time: "14:30",
        name: "HAUS DOSAN",
        transport: "圣水打车 20-30 分钟",
        note: "一栋楼解决 Gentle Monster、Tamburins 和 Nudake。比单独跑新沙 Tamburins 更省力，也更像一个完整打卡点。",
        tags: ["GM", "Tamburins", "Nudake"],
        xhs: "HAUS DOSAN Gentle Monster Tamburins Nudake",
        link: "https://map.naver.com/p/search/HAUS%20DOSAN"
      },
      {
        time: "16:10",
        name: "Baskin Robbins Brown Cheongdam",
        transport: "打车 5-10 分钟",
        note: "31 冰淇淋不要去普通店，去 Brown Cheongdam 更特别，口味多、空间更像旗舰店。适合当江南下午甜点。",
        tags: ["31 冰淇淋", "旗舰店"],
        xhs: "31冰淇凌 首尔 Brown Cheongdam",
        link: "https://map.naver.com/p/search/%EB%B0%B0%EC%8A%A4%ED%82%A8%EB%9D%BC%EB%B9%88%EC%8A%A4%20%EB%B8%8C%EB%9D%BC%EC%9A%B4%20%EC%B2%AD%EB%8B%B4"
      },
      {
        time: "20:00",
        name: "乙支路 / 钟路夜宵",
        transport: "回酒店休息后步行/打车",
        note: "把首尔塔删掉，晚上吃烤肉、炸鸡、海鲜锅或找小酒馆。离酒店近，累了可以随时撤。",
        tags: ["宵夜", "喝一杯"],
        xhs: "乙支路 钟路 首尔 夜宵 小酒馆"
      }
    ]
  },
  day3: {
    date: "5.25 周一",
    title: "只买重点，然后去仁川",
    count: "5 stops",
    caption: "Day 3 · 明洞早咖啡 → 乐天免税店 → 仁川机场",
    meta: ["14:00 仁川起飞", "11:00 必须离开市区", "不加景点"],
    places: [
      { name: "明洞皇家酒店", position: { lat: 37.5642, lng: 126.9856 } },
      { name: "乐天免税店明洞", position: { lat: 37.5653, lng: 126.9817 } },
      { name: "明洞 Olive Young", position: { lat: 37.5637, lng: 126.9850 } },
      { name: "首尔站 AREX", position: { lat: 37.5547, lng: 126.9706 } },
      { name: "仁川机场", position: { lat: 37.4602, lng: 126.4407 } }
    ],
    mapPlaces: [
      { name: "明洞皇家酒店", position: { lat: 37.5642, lng: 126.9856 } },
      { name: "乐天免税店明洞", position: { lat: 37.5653, lng: 126.9817 } },
      { name: "明洞 Olive Young", position: { lat: 37.5637, lng: 126.9850 } },
      { name: "首尔站 AREX", position: { lat: 37.5547, lng: 126.9706 } }
    ],
    naverRoutePlaces: [
      { name: "明洞皇家酒店", position: { lat: 37.5642, lng: 126.9856 } },
      { name: "乐天免税店明洞", position: { lat: 37.5653, lng: 126.9817 } },
      { name: "明洞 Olive Young", position: { lat: 37.5637, lng: 126.9850 } },
      { name: "首尔站 AREX", position: { lat: 37.5547, lng: 126.9706 } }
    ],
    stops: [
      {
        time: "08:00",
        name: "明洞早咖啡",
        transport: "酒店步行",
        note: "选 Blue Bottle Myeongdong 或 Luft Coffee Myeongdong，喝完回酒店收拾退房。今天不安排远路。",
        tags: ["早咖啡", "轻早餐"],
        xhs: "明洞 咖啡 Blue Bottle Luft Coffee"
      },
      {
        time: "09:30",
        name: "乐天免税店明洞总店",
        transport: "步行 8-10 分钟",
        note: "开门直奔清单：香化、墨镜、护肤。不要临时慢逛，后面要去仁川。",
        tags: ["护照", "登机信息"],
        xhs: "乐天免税店 明洞 首尔 购物 攻略",
        link: "https://map.naver.com/p/search/%EB%A1%AF%EB%8D%B0%EB%A9%B4%EC%84%B8%EC%A0%90%20%EB%AA%85%EB%8F%99%EB%B3%B8%EC%A0%90"
      },
      {
        time: "10:20",
        name: "明洞 Olive Young 快速补货",
        transport: "步行",
        note: "只买补漏：防晒、面膜、零食、药妆。10:45 前回酒店取行李。",
        tags: ["补货", "伴手礼"],
        xhs: "明洞 Olive Young 必买",
        link: "https://map.naver.com/p/search/%EB%AA%85%EB%8F%99%20%EC%98%AC%EB%A6%AC%EB%B8%8C%EC%98%81"
      },
      {
        time: "11:00",
        name: "离开市区去仁川机场",
        transport: "首尔站 AREX 更稳",
        note: "推荐打车到首尔站，再坐 AREX。机场巴士更舒服但周一上午受路况影响，时间不如铁路稳。",
        tags: ["AREX", "别拖延"],
        xhs: "首尔站 AREX 仁川机场 交通"
      },
      {
        time: "12:15",
        name: "仁川机场",
        transport: "值机 + 退税 + 安检",
        note: "如果有免税提货，留足时间。14:00 起飞，Day3 不再加景点。",
        tags: ["退税", "免税提货"],
        xhs: "仁川机场 退税 免税提货 攻略"
      }
    ]
  }
};

const timeline = document.querySelector("#timeline");
const mapCaption = document.querySelector("#mapCaption");
const dayDate = document.querySelector("#dayDate");
const dayTitle = document.querySelector("#dayTitle");
const routeCount = document.querySelector("#routeCount");
const routeMeta = document.querySelector("#routeMeta");
const tabs = document.querySelectorAll(".day-tab");
const routeMapRoot = document.querySelector("#routeMap");
const mapFallback = document.querySelector("#mapFallback");
const openMapLink = document.querySelector("#openMapLink");

let activeDay = "day1";
let routeMap;
let routeMapLayer;
let routeLineLayer;
let routeMarkerLayer;

function createStop(stop, nextPlace) {
  const tags = stop.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
  const nextLink = nextPlace
    ? `<a class="route-link" href="${naverWebRouteUrl([stop.routePlace, nextPlace])}" data-naver-app="${naverTwoPointRouteUrl(stop.routePlace, nextPlace)}" target="_blank" rel="noreferrer">去下一站</a>`
    : "";
  const xhsHref = stop.xhsUrl ?? (stop.xhs ? xiaohongshuSearchUrl(stop.xhs) : "");
  const xhsLabel = stop.xhsUrl ? "小红书笔记" : "小红书搜索";
  const xhsLink = stop.xhs
    ? `<a class="xhs-link" href="${xiaohongshuAppSearchUrl(stop.xhs)}" data-xhs-fallback="${xhsHref}" target="_blank" rel="noreferrer">${xhsLabel}</a>`
    : "";

  return `
    <article class="stop-card">
      <div class="stop-top">
        <span class="stop-time">${stop.time}</span>
        <span class="stop-transport">${stop.transport}</span>
      </div>
      <h3 class="stop-name">${stop.name}</h3>
      <p class="stop-note">${stop.note}</p>
      <div class="stop-links">${tags}${nextLink}${xhsLink}</div>
    </article>
  `;
}

function naverPoint(place) {
  if (place.naverPlaceId) return `${place.naverPlaceId},${encodeURIComponent(place.name)},PLACE_POI`;
  return `${place.position.lng},${place.position.lat},${encodeURIComponent(place.name)},PLACE_POI`;
}

function naverSchemePoint(prefix, place) {
  return {
    [`${prefix}lat`]: place.position.lat,
    [`${prefix}lng`]: place.position.lng,
    [`${prefix}name`]: place.name
  };
}

function routePlacesFor(day) {
  const routePlaces = day.mapPlaces ?? day.places;
  return routePlaces.filter((place) => place.position);
}

function naverPlacesFor(day) {
  const routePlaces = day.naverRoutePlaces ?? day.mapPlaces ?? day.places;
  return routePlaces.filter((place) => place.position).slice(0, 6);
}

function routeCenter(places) {
  const total = places.reduce(
    (sum, place) => ({
      lat: sum.lat + place.position.lat,
      lng: sum.lng + place.position.lng
    }),
    { lat: 0, lng: 0 }
  );

  return {
    lat: total.lat / places.length,
    lng: total.lng / places.length
  };
}

function naverWebRouteUrl(places) {
  const center = routeCenter(places);
  const routePath = places.map(naverPoint).join("/");
  return `https://map.naver.com/p/directions/${routePath}/-/walk?c=${center.lng},${center.lat},12,0,0,0,dh`;
}

function naverTwoPointRouteUrl(from, to) {
  return naverAppRouteUrl([from, to]);
}

function naverAppRouteUrl(places) {
  const [start, ...rest] = places;
  const destination = rest[rest.length - 1];
  const viaPlaces = rest.slice(0, -1).slice(0, 4);
  const params = new URLSearchParams({
    appname: "seoul-trip-plan"
  });

  Object.entries(naverSchemePoint("s", start)).forEach(([key, value]) => params.set(key, value));
  Object.entries(naverSchemePoint("d", destination)).forEach(([key, value]) => params.set(key, value));

  viaPlaces.forEach((place, index) => {
    Object.entries(naverSchemePoint(`v${index + 1}`, place)).forEach(([key, value]) => params.set(key, value));
  });

  return `nmap://route/walk?${params.toString()}`;
}

function mapOpenUrl(day) {
  return naverAppRouteUrl(naverPlacesFor(day));
}

function drawMapRoute(day) {
  const naverPlaces = naverPlacesFor(day);
  const naverWebUrl = naverWebRouteUrl(naverPlaces);
  drawRouteMap(day);
  openMapLink.href = naverWebUrl;
  openMapLink.dataset.naverApp = mapOpenUrl(day);
  openMapLink.setAttribute("aria-label", `打开 ${day.date} 的 Naver Map 当天步行路线`);
}

document.addEventListener("click", (event) => {
  const xhsLink = event.target.closest(".xhs-link[data-xhs-fallback]");
  if (xhsLink) {
    event.preventDefault();
    openXiaohongshuSearch(xhsLink.href, xhsLink.dataset.xhsFallback, true);
    return;
  }

  const naverLink = event.target.closest("a[data-naver-app]");
  if (naverLink) {
    event.preventDefault();
    openNaverRoute(naverLink.dataset.naverApp, naverLink.href, true);
    return;
  }

  const link = event.target.closest("a[href]");
  if (!link) return;

  const href = link.getAttribute("href");
  if (!href || href === "#") {
    event.preventDefault();
    return;
  }

  if (href.startsWith("http")) {
    event.preventDefault();
    window.location.href = href;
  }
});

function xiaohongshuSearchUrl(keyword) {
  return `https://www.xiaohongshu.com/search_result?keyword=${encodeURIComponent(keyword)}`;
}

function xiaohongshuAppSearchUrl(keyword) {
  return `xhsdiscover://search_result?keyword=${encodeURIComponent(keyword)}`;
}

function openXiaohongshuSearch(appUrl, fallbackUrl, newPage = false) {
  if (newPage) {
    window.open(appUrl, "_blank", "noopener,noreferrer");
    return;
  }

  let pageStayedVisible = true;
  const markHidden = () => {
    pageStayedVisible = false;
  };

  document.addEventListener("visibilitychange", markHidden, { once: true });
  window.addEventListener("pagehide", markHidden, { once: true });
  window.location.href = appUrl;

  setTimeout(() => {
    if (pageStayedVisible && document.visibilityState === "visible") {
      window.location.href = fallbackUrl;
    }
  }, 1200);
}

function openNaverRoute(appUrl, webUrl, newPage = false) {
  if (newPage) {
    openUrl(webUrl, true);
    return;
  }

  if (!isMobileBrowser()) {
    openUrl(webUrl, newPage);
    return;
  }

  openExternalApp(appUrl, webUrl);
}

function openExternalApp(appUrl, fallbackUrl) {
  let pageStayedVisible = true;
  const markHidden = () => {
    pageStayedVisible = false;
  };

  document.addEventListener("visibilitychange", markHidden, { once: true });
  window.addEventListener("pagehide", markHidden, { once: true });
  window.location.href = appUrl;

  setTimeout(() => {
    if (pageStayedVisible && document.visibilityState === "visible") {
      window.location.href = fallbackUrl;
    }
  }, 1200);
}

function isMobileBrowser() {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function openUrl(url, newPage) {
  if (newPage) {
    window.open(url, "_blank", "noopener,noreferrer");
    return;
  }

  window.location.href = url;
}

function render(dayKey) {
  const day = routes[dayKey];
  activeDay = dayKey;

  tabs.forEach((tab) => {
    const isActive = tab.dataset.day === dayKey;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  dayDate.textContent = day.date;
  dayTitle.textContent = day.title;
  routeCount.textContent = day.count;
  mapCaption.textContent = day.caption;
  routeMeta.innerHTML = day.meta.map((item) => `<span class="meta-pill">${item}</span>`).join("");
  const routePlaces = routePlacesFor(day);
  let routeIndex = 0;
  timeline.innerHTML = day.stops
    .map((stop) => {
      const matchedPlace = routePlaces.find((place) => stop.name.includes(place.name) || place.name.includes(stop.name.split(" ")[0]));
      if (matchedPlace) {
        stop.routePlace = matchedPlace;
        routeIndex = routePlaces.indexOf(matchedPlace);
      }

      const nextPlace = stop.routePlace ? routePlaces[routeIndex + 1] : null;
      return createStop(stop, nextPlace);
    })
    .join("");
  drawMapRoute(day);
}

function drawRouteMap(day) {
  const places = routePlacesFor(day);
  if (!window.L) {
    mapFallback.classList.remove("is-hidden");
    return;
  }

  if (!routeMap) {
    routeMap = L.map(routeMapRoot, {
      attributionControl: true,
      zoomControl: false,
      dragging: true,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      tap: true
    });
    routeMapLayer = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(routeMap);
    routeLineLayer = L.layerGroup().addTo(routeMap);
    routeMarkerLayer = L.layerGroup().addTo(routeMap);
    routeMapLayer.once("load", () => mapFallback.classList.add("is-hidden"));
  }

  routeLineLayer.clearLayers();
  routeMarkerLayer.clearLayers();

  const latLngs = places.map((place) => [place.position.lat, place.position.lng]);
  L.polyline(latLngs, {
    color: "#1591c6",
    opacity: 0.3,
    weight: 9,
    lineCap: "round",
    lineJoin: "round"
  }).addTo(routeLineLayer);
  L.polyline(latLngs, {
    color: "#2ab3e7",
    opacity: 0.98,
    weight: 5,
    lineCap: "round",
    lineJoin: "round"
  }).addTo(routeLineLayer);

  places.forEach((place, index) => {
    const marker = L.marker([place.position.lat, place.position.lng], {
      icon: routePinIcon(index + 1)
    }).addTo(routeMarkerLayer);
    marker.bindTooltip(place.name, {
      permanent: true,
      direction: index === 0 ? "bottom" : "top",
      offset: index === 0 ? [0, 14] : [0, -15],
      className: "leaflet-route-label"
    });
  });

  routeMap.fitBounds(latLngs, {
    paddingTopLeft: [34, 44],
    paddingBottomRight: [34, 84],
    maxZoom: day === routes.day3 ? 15 : 13
  });
  requestAnimationFrame(() => routeMap.invalidateSize());
}

function routePinIcon(index) {
  return L.divIcon({
    className: "",
    html: `<span class="leaflet-route-pin">${index}</span>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16]
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => render(tab.dataset.day));
});

document.querySelector("#fitMap").addEventListener("click", () => {
  drawMapRoute(routes[activeDay]);
});

render(activeDay);

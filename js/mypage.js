// ===== 데이터 =====
const dramas = {
  interested: [
    { id: 1, title: "스물다섯 스물하나", color: "#e8c4a0", emoji: "🌸" },
    { id: 2, title: "왕과 사는 남자", color: "#b8a88a", emoji: "👑" },
    { id: 3, title: "폭군의 셰프", color: "#8b6f5e", emoji: "🍳" },
    { id: 4, title: "케이팝 데몬 헌터스", color: "#c084fc", emoji: "🎤" },
  ],
  visited: [
    {
      id: 1,
      title: "리틀 포레스트",
      location: "대구광역시 군위군",
      date: "2018.09.08",
      desc: "따뜻한 위로를 건네는, 상그러움이 가득한 쉼터 같은 영화",
      color: "#7c9e7a",
      emoji: "🌿",
    },
    {
      id: 2,
      title: "동백꽃 필 무렵",
      location: "경상북도 포항시",
      date: "2020.03.14",
      desc: "울고 웃는 최고의 힐링 인생 드라마",
      color: "#f4a0a0",
      emoji: "🌺",
    },
    {
      id: 3,
      title: "웰컴투 삼달리",
      location: "제주 제주시",
      date: "2024.05.25",
      desc: "따뜻한 위로와 몽글몽글한 설렘 가득한 드라마",
      color: "#a8c4e0",
      emoji: "🍊",
    },
  ],
  reviews: [
    {
      id: 1,
      title: "리틀 포레스트",
      stars: 4,
      half: true,
      review: "잠시 멈춰 가도 괜찮아, 나만의 숲을 찾게 해주는 영상 힐링 푸드",
      color: "#7c9e7a",
      emoji: "🌿",
    },
    {
      id: 2,
      title: "동백꽃 필 무렵",
      stars: 5,
      half: false,
      review: "나를 지키는 법을 알려주는, 매 화가 선물 같은 드라마",
      color: "#f4a0a0",
      emoji: "🌺",
    },
    {
      id: 3,
      title: "웰컴투 삼달리",
      stars: 4,
      half: true,
      review: "숨 가쁜 일상에 잠시 쉼표를 찍어주는, 제주 삼달리에서 온 가장 따뜻한 초대장",
      color: "#a8c4e0",
      emoji: "🍊",
    },
  ],
};

// ===== 별점 렌더링 =====
function renderStars(stars, half) {
  return "★".repeat(stars) + (half ? "☆" : "") + "☆".repeat(5 - stars - (half ? 1 : 0));
}

// ===== 카드 생성 =====
function createDramaCard(item, type) {
  const card = document.createElement("div");
  card.className = `drama-card${type === "visited" ? " visited" : ""}`;

  // hover 효과 (동적 색상이라 JS로 처리)
  card.addEventListener("mouseenter", () => {
    card.style.background = `linear-gradient(135deg, ${item.color}55, ${item.color}22)`;
    card.style.borderColor = item.color;
    card.style.boxShadow = `0 12px 28px ${item.color}44`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.background = "white";
    card.style.borderColor = "#e5e7eb";
    card.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
  });

  const poster = document.createElement("div");
  poster.className = "card-poster";
  poster.style.background = `linear-gradient(135deg, ${item.color}88, ${item.color}44)`;
  poster.textContent = item.emoji;
  card.appendChild(poster);

  const title = document.createElement("p");
  title.className = "card-title";
  title.textContent = item.title;
  card.appendChild(title);

  if (type === "visited") {
    const loc = document.createElement("p");
    loc.className = "card-location";
    loc.textContent = `📍 ${item.location}`;
    card.appendChild(loc);

    const date = document.createElement("p");
    date.className = "card-date";
    date.textContent = item.date;
    card.appendChild(date);

    const desc = document.createElement("p");
    desc.className = "card-desc";
    desc.textContent = item.desc;
    card.appendChild(desc);
  }

  return card;
}

// ===== 리뷰 행 생성 =====
function createReviewRow(item) {
  const row = document.createElement("div");
  row.className = "review-row";

  // 제목 셀
  const titleCell = document.createElement("div");
  titleCell.className = "review-title-cell";

  const emojiEl = document.createElement("div");
  emojiEl.className = "review-emoji";
  emojiEl.style.background = `linear-gradient(135deg, ${item.color}88, ${item.color}44)`;
  emojiEl.textContent = item.emoji;
  titleCell.appendChild(emojiEl);

  const titleEl = document.createElement("span");
  titleEl.className = "review-drama-title";
  titleEl.textContent = item.title;
  titleCell.appendChild(titleEl);

  // 별점 셀
  const starsEl = document.createElement("span");
  starsEl.className = "star-rating";
  starsEl.textContent = renderStars(item.stars, item.half);

  // 후기 셀
  const reviewEl = document.createElement("p");
  reviewEl.className = "review-text";
  reviewEl.textContent = item.review;

  row.appendChild(titleCell);
  row.appendChild(starsEl);
  row.appendChild(reviewEl);

  return row;
}

// ===== 초기화 =====
document.addEventListener("DOMContentLoaded", () => {
  // 관심있는 성지 카드 렌더링
  const interestedContainer = document.getElementById("interested-cards");
  dramas.interested.forEach((item) => {
    interestedContainer.appendChild(createDramaCard(item, "interested"));
  });

  // 다녀온 성지 카드 렌더링
  const visitedContainer = document.getElementById("visited-cards");
  dramas.visited.forEach((item) => {
    visitedContainer.appendChild(createDramaCard(item, "visited"));
  });

  // 리뷰 렌더링
  const reviewContainer = document.getElementById("review-rows");
  dramas.reviews.forEach((item) => {
    reviewContainer.appendChild(createReviewRow(item));
  });
});

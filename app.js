const questions = [
  {
    id: "q1",
    title: "毎月の返済は、どのようにやりくりしていますか？",
    weight: "high",
    options: [
      {
        label: "自分の収入・お小遣いの範囲で払えている",
        score: 0,
        value: "within_income",
      },
      {
        label: "生活費を調整して、なんとか払っている",
        score: 3,
        value: "adjust_living_expenses",
      },
      {
        label: "返済後に生活費が足りず、カード・後払い・キャッシングに頼ることがある",
        score: 5,
        value: "borrow_to_cover_living",
      },
    ],
  },
  {
    id: "q2",
    title: "郵便物を家族が先に見ることはありますか？",
    weight: "normal",
    options: [
      {
        label: "ほとんどない",
        score: 0,
        value: "rarely",
      },
      {
        label: "たまにあり、少し気になる",
        score: 3,
        value: "sometimes",
      },
      {
        label: "よくあり、通知やハガキが届かないか不安がある",
        score: 5,
        value: "often_anxious",
      },
    ],
  },
  {
    id: "q3",
    title: "家計の口座やカード明細を見られたらどう感じますか？",
    weight: "normal",
    options: [
      {
        label: "特に困る履歴はない",
        score: 0,
        value: "no_issue",
      },
      {
        label: "一部、説明しづらい支払いがある",
        score: 3,
        value: "some_hard_to_explain",
      },
      {
        label: "返済・リボ・借入の履歴があり、見られると説明が難しい",
        score: 5,
        value: "hard_to_explain",
      },
    ],
  },
  {
    id: "q4",
    title: "スマホ通知やLINEを家族に見られる不安はありますか？",
    weight: "normal",
    options: [
      {
        label: "ほとんどない",
        score: 0,
        value: "rarely",
      },
      {
        label: "通知が出ないか気になることがある",
        score: 3,
        value: "sometimes_anxious",
      },
      {
        label: "子どもや夫がスマホを見ることがあり不安",
        score: 5,
        value: "family_uses_phone",
      },
    ],
  },
  {
    id: "q5",
    title: "返済や支払いが遅れたことはありますか？",
    weight: "high",
    options: [
      {
        label: "遅れたことはない",
        score: 0,
        value: "never",
      },
      {
        label: "数日遅れた・残高不足になったことがある",
        score: 3,
        value: "minor_delay",
      },
      {
        label: "督促の電話・SMS・ハガキが来たことがある",
        score: 5,
        value: "collection_contact",
      },
    ],
  },
];

const routeContent = {
  postal: "郵便物：通知やハガキを家族が先に見ることで、説明が必要になる可能性があります。",
  statement:
    "通帳・カード明細：返済やリボ、借入に関する履歴を見られると、説明が難しくなることがあります。",
  smartphone:
    "スマホ通知・LINE・SMS：通知やメッセージを家族に見られることで、借入や督促に気づかれる可能性があります。",
  delinquency:
    "返済遅れ・督促：支払い遅れが続くと、電話・SMS・郵便物などの連絡が増える可能性があります。",
  revolving_cycle:
    "返済後に生活費が足りなくなる状態は、借入が長引きやすいサインです。早めに返済計画を見直すことが大切です。",
};

const resultContent = {
  low: {
    badge: "低リスク",
    title: "家族に知られるリスク：現時点では低め",
    body: [
      "郵便物・明細・スマホ通知などの面では、今すぐ家族に知られる可能性は比較的低い状態です。",
      "ただし、返済が長引くほど、急な出費や収入減、引き落とし漏れをきっかけに状況が変わることがあります。",
      "今のうちに、現在の返済ペースで完済できそうか、月々の負担を減らせる可能性があるかだけ確認しておくと安心です。",
    ],
    ctaLead: "手続きするか決める前に、まずは今の返済を続けて大丈夫か確認できます。",
    ctaText: "家族に知られにくい相談方法を確認する",
  },
  medium: {
    badge: "中リスク",
    title: "家族に知られるリスク：注意が必要",
    body: [
      "今は何とか隠せていても、郵便物・スマホ通知・カード明細・急な残高不足など、日常の小さなきっかけで不安が大きくなりやすい状態です。",
      "特に、返済のために生活費を調整している場合や、返済後にまたカード・後払いを使ってしまう場合は、借金が長引きやすくなります。",
      "今の段階なら、家族に知られにくい相談方法や、返済を続けた場合の見通しを確認しやすい状態です。",
    ],
    ctaLead: "相談したからといって、すぐに手続きを決める必要はありません。まずは選択肢だけ確認できます。",
    ctaText: "無料で相談方法を確認する",
  },
  high: {
    badge: "高リスク",
    title: "家族に知られるリスク：高め",
    body: [
      "返済のために別の支払いを後回しにしていたり、督促・通知・明細などを気にしながら生活している状態です。",
      "この段階では、「隠し続ける工夫」だけでは負担が大きくなりやすく、郵便物・スマホ通知・返済遅れをきっかけに説明が難しくなる可能性があります。",
      "ただし、今すぐ家族に話さなければいけないとは限りません。弁護士に相談すると、家族に知られにくい連絡方法や、月々の返済を見直す方法を確認できる場合があります。",
    ],
    ctaLead: "一人で抱え込む前に、まずは「家族に知られにくい進め方」だけ確認してみてください。",
    ctaText: "今すぐ無料で相談する",
  },
};

const abVariantOptions = {
  cta: {
    A: "家族に知られにくい相談方法を確認する",
    B: "手続きするか決める前に無料で相談する",
    C: "月々の返済を減らせる可能性を確認する",
  },
  headline: {
    A: {
      eyebrow: "家族に知られる前に確認",
      title: "借金バレるリスク診断",
      lead: "郵便物・スマホ通知・カード明細・返済遅れなど、日常の中で家族に気づかれやすいポイントを30秒でチェックできます。",
    },
    B: {
      eyebrow: "郵便物・スマホ通知・明細が不安な方へ",
      title: "借金が家族に知られるリスクを30秒でチェック",
      lead: "5つの質問に答えるだけで、家族に気づかれやすいポイントを整理できます。",
    },
    C: {
      eyebrow: "ひとりで抱え込まなくて大丈夫です",
      title: "夫に言えない借金、ひとりで抱えていませんか？",
      lead: "やさしい質問に答えながら、家族に知られやすい経路と今できる対策を確認できます。",
    },
  },
};

const questionScreen = document.querySelector("#question-screen");
const resultScreen = document.querySelector("#result-screen");
const progressCount = document.querySelector("#progress-count");
const progressBar = document.querySelector(".progress-bar");
const progressFill = document.querySelector("#progress-fill");
const questionTitle = document.querySelector("#question-title");
const questionOptions = document.querySelector("#question-options");
const backButton = document.querySelector("#back-button");
const riskBadge = document.querySelector("#risk-badge");
const resultTitle = document.querySelector("#result-title");
const resultBody = document.querySelector("#result-body");
const riskRouteList = document.querySelector("#risk-route-list");
const routeFallback = document.querySelector("#route-fallback");
const ctaLead = document.querySelector("#cta-lead");
const ctaButton = document.querySelector("#cta-button");
const highRiskNote = document.querySelector("#high-risk-note");
const consultSection = document.querySelector("#consult-section");
const consultForm = document.querySelector("#consult-form");
const restartButton = document.querySelector("#restart-button");
const headlineEyebrow = document.querySelector(".eyebrow");
const headlineTitle = document.querySelector("h1");
const headlineLead = document.querySelector(".lead");

const urlParams = new URLSearchParams(window.location.search);
const ctaVariant = pickVariant("cta", "A");
const headlineVariant = pickVariant("headline", "A");

let currentQuestionIndex = 0;
let currentResult = null;
const answers = new Map();
let hasTrackedFormStart = false;

backButton.addEventListener("click", goBackQuestion);
ctaButton.addEventListener("click", handleCtaClick);
restartButton.addEventListener("click", restartDiagnosis);

consultForm.addEventListener("focusin", () => {
  if (hasTrackedFormStart || !currentResult) {
    return;
  }
  hasTrackedFormStart = true;
  trackEvent("form_started", buildTrackingParams(currentResult));
});

consultForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!currentResult) {
    return;
  }
  trackEvent("form_submitted", buildTrackingParams(currentResult));
  window.alert("送信ありがとうございました（デモ表示）。");
});

applyHeadlineVariant(headlineVariant);
startDiagnosis();

function startDiagnosis() {
  answers.clear();
  currentResult = null;
  currentQuestionIndex = 0;
  hasTrackedFormStart = false;
  consultSection.hidden = true;
  consultForm.reset();
  clearHiddenFields();
  showScreen("question");
  renderQuestion();
  trackEvent("diagnosis_start", buildTrackingParamsFromCurrentAnswers());
}

function goBackQuestion() {
  if (currentQuestionIndex === 0) {
    return;
  }
  currentQuestionIndex -= 1;
  renderQuestion();
}

function renderQuestion() {
  const question = questions[currentQuestionIndex];
  progressCount.textContent = `${currentQuestionIndex + 1}/${questions.length}`;
  progressFill.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
  progressBar.setAttribute("aria-valuenow", String(currentQuestionIndex + 1));

  questionTitle.textContent = question.title;
  questionOptions.innerHTML = "";

  question.options.forEach((option) => {
    const optionButton = document.createElement("button");
    optionButton.type = "button";
    optionButton.className = "option-btn";
    optionButton.textContent = option.label;

    if (answers.get(question.id)?.value === option.value) {
      optionButton.classList.add("is-selected");
    }

    optionButton.addEventListener("click", () => {
      answerQuestion(question, option);
    });

    questionOptions.appendChild(optionButton);
  });

  backButton.disabled = currentQuestionIndex === 0;
}

function answerQuestion(question, option) {
  answers.set(question.id, {
    questionId: question.id,
    value: option.value,
    score: option.score,
  });

  trackEvent("question_answered", {
    question_id: question.id,
    answer_value: option.value,
    ...buildTrackingParamsFromCurrentAnswers(),
  });

  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex += 1;
    renderQuestion();
    return;
  }

  completeDiagnosis();
}

function completeDiagnosis() {
  const normalizedAnswers = questions.map((question) => {
    const answer = answers.get(question.id);
    return {
      questionId: question.id,
      value: answer?.value || "",
      score: answer?.score || 0,
    };
  });

  const result = calculateRisk(normalizedAnswers);
  currentResult = result;

  renderResult(result);
  syncFormHiddenFields(result, normalizedAnswers);
  showScreen("result");

  trackEvent("diagnosis_completed", buildTrackingParams(result));
}

function renderResult(result) {
  const content = resultContent[result.finalLevel];
  riskBadge.className = `risk-badge ${result.finalLevel}`;
  riskBadge.textContent = `総合判定：${content.badge}`;
  resultTitle.textContent = content.title;
  resultBody.innerHTML = "";

  content.body.forEach((paragraph) => {
    const paragraphElement = document.createElement("p");
    paragraphElement.textContent = paragraph;
    resultBody.appendChild(paragraphElement);
  });

  ctaLead.textContent = content.ctaLead;
  ctaButton.textContent = pickCtaText(result.finalLevel, content.ctaText);
  highRiskNote.hidden = result.finalLevel !== "high";

  riskRouteList.innerHTML = "";
  if (result.riskRoutes.length === 0) {
    routeFallback.hidden = false;
  } else {
    routeFallback.hidden = true;
    result.riskRoutes.forEach((routeId) => {
      const item = document.createElement("li");
      item.textContent = routeContent[routeId];
      riskRouteList.appendChild(item);
    });
  }
}

function handleCtaClick() {
  if (!currentResult) {
    return;
  }
  consultSection.hidden = false;
  consultSection.scrollIntoView({ behavior: "smooth", block: "start" });
  trackEvent("cta_clicked", buildTrackingParams(currentResult));
}

function restartDiagnosis() {
  startDiagnosis();
}

function showScreen(target) {
  questionScreen.hidden = target !== "question";
  resultScreen.hidden = target !== "result";
}

function calculateRisk(answerList) {
  const totalScore = answerList.reduce((sum, answer) => sum + answer.score, 0);
  const q1 = answerList.find((answer) => answer.questionId === "q1");
  const q2 = answerList.find((answer) => answer.questionId === "q2");
  const q3 = answerList.find((answer) => answer.questionId === "q3");
  const q4 = answerList.find((answer) => answer.questionId === "q4");
  const q5 = answerList.find((answer) => answer.questionId === "q5");

  let baseLevel = "high";
  if (totalScore <= 4) {
    baseLevel = "low";
  } else if (totalScore <= 14) {
    baseLevel = "medium";
  }

  const q1HighRisk = q1?.score === 5;
  const q5HighRisk = q5?.score === 5;

  let finalLevel = baseLevel;
  if ((q1HighRisk || q5HighRisk) && baseLevel === "low") {
    finalLevel = "medium";
  } else if ((q1HighRisk || q5HighRisk) && baseLevel === "medium") {
    finalLevel = "high";
  }

  const riskRoutes = [];
  if (q2?.score >= 3) {
    riskRoutes.push("postal");
  }
  if (q3?.score >= 3) {
    riskRoutes.push("statement");
  }
  if (q4?.score >= 3) {
    riskRoutes.push("smartphone");
  }
  if (q5?.score >= 3) {
    riskRoutes.push("delinquency");
  }
  if (q1?.score === 5) {
    riskRoutes.push("revolving_cycle");
  }

  return {
    totalScore,
    baseLevel,
    finalLevel,
    riskRoutes,
    q1HighRisk,
    q5HighRisk,
  };
}

function syncFormHiddenFields(result, answerList) {
  setHidden("total_score", String(result.totalScore));
  setHidden("risk_level", result.finalLevel);
  setHidden("q1_answer", answerList.find((answer) => answer.questionId === "q1")?.value || "");
  setHidden("q2_answer", answerList.find((answer) => answer.questionId === "q2")?.value || "");
  setHidden("q3_answer", answerList.find((answer) => answer.questionId === "q3")?.value || "");
  setHidden("q4_answer", answerList.find((answer) => answer.questionId === "q4")?.value || "");
  setHidden("q5_answer", answerList.find((answer) => answer.questionId === "q5")?.value || "");
  setHidden("risk_routes", result.riskRoutes.join(","));
  setHidden("is_q1_high_risk", String(result.q1HighRisk));
  setHidden("is_q5_high_risk", String(result.q5HighRisk));
}

function clearHiddenFields() {
  [
    "total_score",
    "risk_level",
    "q1_answer",
    "q2_answer",
    "q3_answer",
    "q4_answer",
    "q5_answer",
    "risk_routes",
    "is_q1_high_risk",
    "is_q5_high_risk",
  ].forEach((name) => setHidden(name, ""));
}

function setHidden(name, value) {
  const input = consultForm.elements.namedItem(name);
  if (input) {
    input.value = value;
  }
}

function buildTrackingParams(result) {
  return {
    total_score: result.totalScore,
    risk_level: result.finalLevel,
    risk_routes: result.riskRoutes.join(","),
    q1_high_risk: result.q1HighRisk,
    q5_high_risk: result.q5HighRisk,
  };
}

function buildTrackingParamsFromCurrentAnswers() {
  const tempAnswerList = questions.map((question) => {
    const answer = answers.get(question.id);
    return {
      questionId: question.id,
      score: answer?.score || 0,
      value: answer?.value || "",
    };
  });
  const partialResult = calculateRisk(tempAnswerList);

  return {
    total_score: partialResult.totalScore,
    risk_level: answers.size === questions.length ? partialResult.finalLevel : "",
    risk_routes: partialResult.riskRoutes.join(","),
    q1_high_risk: partialResult.q1HighRisk,
    q5_high_risk: partialResult.q5HighRisk,
  };
}

function trackEvent(eventName, payload) {
  const data = {
    event: eventName,
    ...payload,
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);

  if (typeof window.console?.info === "function") {
    window.console.info("[tracking]", data);
  }
}

function pickVariant(category, fallback) {
  const value = urlParams.get(`${category}Variant`) || fallback;
  return abVariantOptions[category][value] ? value : fallback;
}

function pickCtaText(level, defaultText) {
  if (level === "high") {
    return resultContent.high.ctaText;
  }
  return abVariantOptions.cta[ctaVariant] || defaultText;
}

function applyHeadlineVariant(variant) {
  const content = abVariantOptions.headline[variant];
  headlineEyebrow.textContent = content.eyebrow;
  headlineTitle.textContent = content.title;
  headlineLead.textContent = content.lead;
}

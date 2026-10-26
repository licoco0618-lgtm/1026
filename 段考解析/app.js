/**
 * 智光商工 115學年度第一學期 物理科第一次段考・全方位互動解析平台
 * 核心應用程式邏輯 (Application Controller)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 取得全域資料
  const examData = window.EXAM_DATA;
  if (!examData) {
    console.error("EXAM_DATA not loaded!");
    return;
  }

  // 合併全部題目（40 選擇 + 6 填充）
  const allQuestions = [...examData.questions, ...examData.fillQuestions];

  // ================= State Management =================
  const state = {
    activeTab: 'tab-compare',
    currentPage: 'front', // 'front' | 'back'
    currentQuestionId: 'q1',
    zoomLevel: 1.0,
    showHotspots: true,
    solutionCategory: 'all',
    solutionSearchQuery: '',
    mobileCompareView: 'scan', // 'scan' | 'inspector'
    // Quiz state
    quiz: {
      mode: 'all',
      questions: [],
      currentIndex: 0,
      userAnswers: {},
      score: 0,
      isAnswered: false
    }
  };

  // ================= DOM Elements =================
  // Header & Nav
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  const btnToggleWrongFilter = document.getElementById('btnToggleWrongFilter');
  const btnPrintPage = document.getElementById('btnPrintPage');
  const quickWrongBtn = document.getElementById('quickWrongBtn');
  const btnHeaderQuiz = document.getElementById('btnHeaderQuiz');

  // Tab 1: Compare Viewer & Mobile Switcher
  const compareLayout = document.getElementById('compareLayout');
  const mobileCompareTabs = document.getElementById('mobileCompareTabs');
  const btnMobileViewScan = document.getElementById('btnMobileViewScan');
  const btnMobileViewInspector = document.getElementById('btnMobileViewInspector');
  const mobileCurrentQText = document.getElementById('mobileCurrentQText');
  const scanViewerPanel = document.getElementById('scanViewerPanel');
  const questionInspectorPanel = document.getElementById('questionInspectorPanel');

  const pageToggleBtns = document.querySelectorAll('.page-toggle-btn');
  const examScanImg = document.getElementById('examScanImg');
  const hotspotsOverlay = document.getElementById('hotspotsOverlay');
  const imageStage = document.getElementById('imageStage');
  const imageViewport = document.getElementById('imageViewport');
  const btnZoomIn = document.getElementById('btnZoomIn');
  const btnZoomOut = document.getElementById('btnZoomOut');
  const btnZoomReset = document.getElementById('btnZoomReset');
  const btnFitWidth = document.getElementById('btnFitWidth');
  const chkShowHotspots = document.getElementById('chkShowHotspots');
  const quickJumpStrip = document.getElementById('quickJumpStrip');
  const inspectorCardContent = document.getElementById('inspectorCardContent');
  const currentQNumDisplay = document.getElementById('currentQNumDisplay');
  const btnPrevQuestion = document.getElementById('btnPrevQuestion');
  const btnNextQuestion = document.getElementById('btnNextQuestion');

  // Tab 2: Solutions Explorer
  const solutionSearchInput = document.getElementById('solutionSearchInput');
  const btnClearSearch = document.getElementById('btnClearSearch');
  const categoryFilterContainer = document.getElementById('categoryFilterContainer');
  const solutionsContainer = document.getElementById('solutionsContainer');
  const mistakeBannerCallout = document.getElementById('mistakeBannerCallout');

  // Tab 3: Interactive Quiz
  const quizSetupCard = document.getElementById('quizSetupCard');
  const quizActiveCard = document.getElementById('quizActiveCard');
  const quizResultCard = document.getElementById('quizResultCard');
  const quizModeCards = document.querySelectorAll('.mode-card');
  const btnStartQuiz = document.getElementById('btnStartQuiz');
  const btnQuitQuiz = document.getElementById('btnQuitQuiz');
  const quizProgressText = document.getElementById('quizProgressText');
  const quizScoreText = document.getElementById('quizScoreText');
  const quizProgressBar = document.getElementById('quizProgressBar');
  const quizQuestionBox = document.getElementById('quizQuestionBox');
  const quizFeedbackBox = document.getElementById('quizFeedbackBox');
  const btnQuizPrev = document.getElementById('btnQuizPrev');
  const btnQuizNext = document.getElementById('btnQuizNext');
  const btnRestartQuiz = document.getElementById('btnRestartQuiz');
  const btnReviewAllSolutions = document.getElementById('btnReviewAllSolutions');

  // Tab 4: Cheatsheet
  const cheatSheetGrid = document.getElementById('cheatSheetGrid');

  // Lightbox Modal
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitleBar = document.getElementById('lightboxTitleBar');
  const btnCloseLightbox = document.getElementById('btnCloseLightbox');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');

  // ================= 1. TAB NAVIGATION =================
  function switchTab(tabId) {
    state.activeTab = tabId;
    tabButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    tabContents.forEach(content => {
      content.classList.toggle('active', content.id === tabId);
    });

    // 特定切換處理
    if (tabId === 'tab-compare') {
      renderHotspots();
      renderInspectorCard(state.currentQuestionId);
    } else if (tabId === 'tab-solutions') {
      renderSolutionsGrid();
    }
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  if (btnHeaderQuiz) {
    btnHeaderQuiz.addEventListener('click', () => switchTab('tab-quiz'));
  }

  if (btnPrintPage) {
    btnPrintPage.addEventListener('click', () => {
      switchTab('tab-solutions');
      setTimeout(() => window.print(), 200);
    });
  }

  // 快捷查看錯題
  if (quickWrongBtn) {
    quickWrongBtn.addEventListener('click', () => {
      switchTab('tab-solutions');
      setSolutionCategory('wrong');
    });
  }
  if (btnToggleWrongFilter) {
    btnToggleWrongFilter.addEventListener('click', () => {
      switchTab('tab-solutions');
      setSolutionCategory('wrong');
    });
  }

  // ================= 2. SCAN & HOTSPOT VIEWER =================
  function setScanPage(page) {
    state.currentPage = page;
    pageToggleBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.page === page);
    });
    examScanImg.src = page === 'front' ? '正面.jpg' : '反面.jpg';
    renderHotspots();
  }

  pageToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => setScanPage(btn.dataset.page));
  });

  // 縮放控制
  function updateZoom() {
    imageStage.style.transform = `scale(${state.zoomLevel})`;
  }

  if (btnZoomIn) {
    btnZoomIn.addEventListener('click', () => {
      if (state.zoomLevel < 2.5) {
        state.zoomLevel += 0.2;
        updateZoom();
      }
    });
  }
  if (btnZoomOut) {
    btnZoomOut.addEventListener('click', () => {
      if (state.zoomLevel > 0.6) {
        state.zoomLevel -= 0.2;
        updateZoom();
      }
    });
  }
  if (btnZoomReset) {
    btnZoomReset.addEventListener('click', () => {
      state.zoomLevel = 1.0;
      updateZoom();
    });
  }
  if (btnFitWidth) {
    btnFitWidth.addEventListener('click', () => {
      const containerWidth = imageViewport.clientWidth - 32;
      const baseWidth = 620;
      state.zoomLevel = Math.max(0.6, Math.min(2.0, containerWidth / baseWidth));
      updateZoom();
    });
  }

  if (chkShowHotspots) {
    chkShowHotspots.addEventListener('change', (e) => {
      state.showHotspots = e.target.checked;
      hotspotsOverlay.style.display = state.showHotspots ? 'block' : 'none';
    });
  }

  // ================= Mobile Compare View Switcher =================
  function setMobileCompareView(view) {
    state.mobileCompareView = view;
    if (btnMobileViewScan) btnMobileViewScan.classList.toggle('active', view === 'scan');
    if (btnMobileViewInspector) btnMobileViewInspector.classList.toggle('active', view === 'inspector');

    if (compareLayout) {
      compareLayout.classList.remove('view-scan', 'view-inspector');
      compareLayout.classList.add(`view-${view}`);
    }

    if (view === 'inspector' && questionInspectorPanel) {
      questionInspectorPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (view === 'scan' && scanViewerPanel) {
      scanViewerPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  if (btnMobileViewScan) {
    btnMobileViewScan.addEventListener('click', () => setMobileCompareView('scan'));
  }
  if (btnMobileViewInspector) {
    btnMobileViewInspector.addEventListener('click', () => setMobileCompareView('inspector'));
  }

  // 渲染當前頁面的題目標記點 (Hotspots)
  function renderHotspots() {
    hotspotsOverlay.innerHTML = '';
    const pageQuestions = allQuestions.filter(q => q.page === state.currentPage);

    pageQuestions.forEach(q => {
      const box = document.createElement('div');
      box.className = `hotspot-box ${!q.isStudentCorrect ? 'wrong' : ''} ${q.id === state.currentQuestionId ? 'active' : ''}`;
      box.style.left = `${q.hotspot.x}%`;
      box.style.top = `${q.hotspot.y}%`;
      box.style.width = `${q.hotspot.w}%`;
      box.style.height = `${q.hotspot.h}%`;
      box.dataset.id = q.id;

      const pin = document.createElement('span');
      pin.className = 'hotspot-pin';
      pin.textContent = typeof q.num === 'number' ? `Q${q.num}` : q.num;
      box.appendChild(pin);

      box.addEventListener('click', () => {
        selectQuestion(q.id, true, true);
      });

      hotspotsOverlay.appendChild(box);
    });
  }

  // 題號快速跳轉膠囊條渲染
  function renderQuickJumpStrip() {
    quickJumpStrip.innerHTML = '';
    allQuestions.forEach(q => {
      const pill = document.createElement('button');
      pill.className = `jump-pill ${!q.isStudentCorrect ? 'wrong' : ''} ${q.id === state.currentQuestionId ? 'active' : ''}`;
      pill.textContent = q.num;
      pill.title = `${typeof q.num === 'number' ? '第 ' + q.num + ' 題' : q.num} (${q.categoryName})`;
      pill.dataset.id = q.id;

      pill.addEventListener('click', () => {
        selectQuestion(q.id);
      });

      quickJumpStrip.appendChild(pill);
    });
  }

  // 選中特定題目
  function selectQuestion(qId, scrollIntoView = true, fromHotspotClick = false) {
    const q = allQuestions.find(item => item.id === qId);
    if (!q) return;

    state.currentQuestionId = qId;

    if (mobileCurrentQText) {
      mobileCurrentQText.textContent = typeof q.num === 'number' ? `第 ${q.num} 題` : q.num;
    }

    // 若在手機端且是點擊試卷熱點，自動切換至解析視圖
    if (fromHotspotClick && window.innerWidth <= 768) {
      setMobileCompareView('inspector');
    }

    // 若該題目位於另一面，自動翻頁
    if (q.page !== state.currentPage) {
      setScanPage(q.page);
    } else {
      // 更新標記點高亮狀態
      const allHotspots = hotspotsOverlay.querySelectorAll('.hotspot-box');
      allHotspots.forEach(box => {
        box.classList.toggle('active', box.dataset.id === qId);
      });
    }

    // 更新膠囊按鈕狀態
    const allPills = quickJumpStrip.querySelectorAll('.jump-pill');
    allPills.forEach(pill => {
      const isCurrent = pill.dataset.id === qId;
      pill.classList.toggle('active', isCurrent);
      if (isCurrent && scrollIntoView) {
        pill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });

    // 捲動圖片視窗到該標記位置
    if (scrollIntoView && (!fromHotspotClick || window.innerWidth > 768)) {
      setTimeout(() => {
        const activeBox = hotspotsOverlay.querySelector(`.hotspot-box[data-id="${qId}"]`);
        if (activeBox) {
          activeBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }

    // 渲染右側題目卡
    renderInspectorCard(qId);
  }

  // 渲染右側題目剖析卡片
  function renderInspectorCard(qId) {
    const q = allQuestions.find(item => item.id === qId);
    if (!q) return;

    currentQNumDisplay.textContent = typeof q.num === 'number' ? `第 ${q.num} 題` : q.num;

    let contentHtml = `
      <div class="q-detail-card">
        <div class="q-badge-row">
          <div class="q-left-badges">
            <span class="q-num-badge">${typeof q.num === 'number' ? '第 ' + q.num + ' 題' : q.num}</span>
            <span class="q-category-tag">${q.categoryName}</span>
            <span class="q-score-tag">配分：${q.score} 分</span>
          </div>
          <span class="q-status-badge ${q.isStudentCorrect ? 'correct' : 'wrong'}">
            ${q.isStudentCorrect ? '✅ 卷面答對' : '⚠️ 卷面扣分失分點'}
          </span>
        </div>

        <div class="q-text-content">${formatMath(q.question)}</div>
    `;

    // 選擇題選項
    if (q.type === 'choice' && q.options) {
      contentHtml += `<div class="q-options-list">`;
      q.options.forEach(opt => {
        const isOfficialCorrect = opt.label === q.answer;
        const isStudentMistake = !q.isStudentCorrect && opt.label === q.studentAnswer;
        contentHtml += `
          <div class="option-item ${isOfficialCorrect ? 'is-correct' : ''} ${isStudentMistake ? 'is-student-wrong' : ''}">
            <span class="option-label">${opt.label}</span>
            <span class="option-text">${opt.text}</span>
            ${isOfficialCorrect ? '<span style="margin-left:auto; font-size:0.8rem; font-weight:700; color:#34d399;">★ 正確解答</span>' : ''}
            ${isStudentMistake ? '<span style="margin-left:auto; font-size:0.8rem; font-weight:700; color:#fda4af;">✕ 卷面作答</span>' : ''}
          </div>
        `;
      });
      contentHtml += `</div>`;
    }

    // 填充題資訊
    if (q.type === 'fill') {
      contentHtml += `
        <div class="fill-answer-card">
          <div class="fill-row">
            <span class="fill-label">📌 標準解答：</span>
            <span class="fill-val-correct">${q.answer}</span>
          </div>
          <div class="fill-row">
            <span class="fill-label">📝 卷面作答：</span>
            <span class="fill-val-student">${q.studentAnswer}</span>
            <span class="q-status-badge ${q.isStudentCorrect ? 'correct' : 'wrong'}" style="margin-left:auto;">
              ${q.isStudentCorrect ? '全對' : '扣分'}
            </span>
          </div>
      `;
      if (q.blanks && q.blanks.length > 0) {
        contentHtml += `<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:0.5rem; margin-top:0.5rem; border-top:1px dashed var(--border-glass); padding-top:0.5rem;">`;
        q.blanks.forEach(b => {
          contentHtml += `
            <div style="background:rgba(255,255,255,0.04); padding:0.4rem 0.6rem; border-radius:4px; font-size:0.85rem;">
              <span style="color:var(--text-muted);">${b.label}：</span>
              <strong style="color:#34d399;">${b.answer}</strong>
            </div>
          `;
        });
        contentHtml += `</div>`;
      }
      contentHtml += `</div>`;
    }

    // 詳解三部曲
    contentHtml += `
      <div class="solution-blocks-wrapper">
        <div class="sol-block concept">
          <div class="sol-block-title">💡 核心觀念與考點剖析</div>
          <div class="sol-block-content">${formatMath(q.concept)}</div>
        </div>

        <div class="sol-block steps">
          <div class="sol-block-title">📝 逐步解析與論證推導</div>
          <div class="sol-block-content">${formatMath(q.explanation)}</div>
        </div>

        <div class="sol-block trap">
          <div class="sol-block-title">⚠️ 解題陷阱與常見盲點</div>
          <div class="sol-block-content">${formatMath(q.trap)}</div>
        </div>
      </div>
    </div>`;

    inspectorCardContent.innerHTML = contentHtml;
  }

  // 上一題 / 下一題
  function navigateQuestion(direction) {
    const currentIndex = allQuestions.findIndex(q => q.id === state.currentQuestionId);
    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) nextIndex = allQuestions.length - 1;
    if (nextIndex >= allQuestions.length) nextIndex = 0;
    selectQuestion(allQuestions[nextIndex].id);
  }

  if (btnPrevQuestion) btnPrevQuestion.addEventListener('click', () => navigateQuestion(-1));
  if (btnNextQuestion) btnNextQuestion.addEventListener('click', () => navigateQuestion(1));

  // 鍵盤左右鍵快捷切換
  window.addEventListener('keydown', (e) => {
    if (state.activeTab === 'tab-compare' && !document.activeElement.matches('input, textarea')) {
      if (e.key === 'ArrowLeft') navigateQuestion(-1);
      if (e.key === 'ArrowRight') navigateQuestion(1);
    }
  });

  // ================= 3. SOLUTIONS EXPLORER =================
  function renderCategoryFilters() {
    categoryFilterContainer.innerHTML = '';
    examData.units.forEach(unit => {
      const btn = document.createElement('button');
      btn.className = `filter-btn ${unit.id === 'wrong' ? 'wrong-btn' : ''} ${unit.id === state.solutionCategory ? 'active' : ''}`;
      btn.textContent = `${unit.name}`;
      btn.dataset.category = unit.id;

      btn.addEventListener('click', () => {
        setSolutionCategory(unit.id);
      });

      categoryFilterContainer.appendChild(btn);
    });
  }

  function setSolutionCategory(catId) {
    state.solutionCategory = catId;
    const allBtns = categoryFilterContainer.querySelectorAll('.filter-btn');
    allBtns.forEach(b => b.classList.toggle('active', b.dataset.category === catId));
    if (mistakeBannerCallout) {
      mistakeBannerCallout.style.display = catId === 'wrong' ? 'flex' : 'none';
    }
    renderSolutionsGrid();
  }

  function renderSolutionsGrid() {
    solutionsContainer.innerHTML = '';

    const query = state.solutionSearchQuery.toLowerCase().trim();
    let filtered = allQuestions.filter(q => {
      // 分類過濾
      if (state.solutionCategory === 'wrong') {
        if (q.isStudentCorrect) return false;
      } else if (state.solutionCategory === 'choice') {
        if (q.type !== 'choice') return false;
      } else if (state.solutionCategory === 'fill') {
        if (q.type !== 'fill') return false;
      } else if (state.solutionCategory !== 'all') {
        if (q.category !== state.solutionCategory) return false;
      }

      // 搜尋關鍵字過濾
      if (query) {
        const textMatch = q.question.toLowerCase().includes(query) ||
                          q.explanation.toLowerCase().includes(query) ||
                          q.concept.toLowerCase().includes(query) ||
                          q.trap.toLowerCase().includes(query) ||
                          String(q.num).toLowerCase().includes(query);
        return textMatch;
      }
      return true;
    });

    if (filtered.length === 0) {
      solutionsContainer.innerHTML = `
        <div style="text-align:center; padding: 4rem 1rem; color: var(--text-muted); background: var(--bg-card); border-radius: var(--radius-lg);">
          <div style="font-size:3rem; margin-bottom:1rem;">🔍</div>
          <h3>未找到相符的題目</h3>
          <p>請嘗試使用其他關鍵字搜尋，或切換上方分類標籤。</p>
        </div>
      `;
      return;
    }

    filtered.forEach(q => {
      const card = document.createElement('div');
      card.className = `solution-card-full ${!q.isStudentCorrect ? 'is-mistake' : ''}`;
      card.id = `sol-card-${q.id}`;

      let cardHtml = `
        <div class="card-top-row">
          <div class="q-left-badges">
            <span class="q-num-badge">${typeof q.num === 'number' ? '第 ' + q.num + ' 題' : q.num}</span>
            <span class="q-category-tag">${q.categoryName}</span>
            <span class="q-score-tag">配分：${q.score} 分</span>
          </div>
          <div style="display:flex; align-items:center; gap:0.6rem;">
            <button class="btn-locate-scan" data-id="${q.id}">
              <span>📑</span> 在原卷對照
            </button>
            <span class="q-status-badge ${q.isStudentCorrect ? 'correct' : 'wrong'}">
              ${q.isStudentCorrect ? '✅ 答對' : '⚠️ 扣分點'}
            </span>
          </div>
        </div>

        <div class="q-full-text">${formatMath(q.question)}</div>
      `;

      if (q.type === 'choice' && q.options) {
        cardHtml += `<div class="options-full-grid">`;
        q.options.forEach(opt => {
          const isCorrect = opt.label === q.answer;
          cardHtml += `
            <div class="option-item ${isCorrect ? 'is-correct' : ''}">
              <span class="option-label">${opt.label}</span>
              <span class="option-text">${opt.text}</span>
            </div>
          `;
        });
        cardHtml += `</div>`;
      } else if (q.type === 'fill') {
        cardHtml += `
          <div class="fill-answer-card" style="margin-bottom:1rem;">
            <div class="fill-row">
              <span class="fill-label">📌 正確答案：</span>
              <span class="fill-val-correct">${q.answer}</span>
            </div>
            <div class="fill-row">
              <span class="fill-label">📝 卷面填寫：</span>
              <span class="fill-val-student">${q.studentAnswer}</span>
              <span class="q-status-badge ${q.isStudentCorrect ? 'correct' : 'wrong'}" style="margin-left:auto;">
                ${q.isStudentCorrect ? '全對' : '扣分'}
              </span>
            </div>
        `;
        if (q.blanks && q.blanks.length > 0) {
          cardHtml += `<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:0.5rem; margin-top:0.5rem; border-top:1px dashed var(--border-glass); padding-top:0.5rem;">`;
          q.blanks.forEach(b => {
            cardHtml += `
              <div style="background:rgba(255,255,255,0.04); padding:0.4rem 0.6rem; border-radius:4px; font-size:0.85rem;">
                <span style="color:var(--text-muted);">${b.label}：</span>
                <strong style="color:#34d399;">${b.answer}</strong>
              </div>
            `;
          });
          cardHtml += `</div>`;
        }
        cardHtml += `</div>`;
      }

      cardHtml += `
        <div class="solution-blocks-wrapper">
          <div class="sol-block concept">
            <div class="sol-block-title">💡 核心觀念</div>
            <div class="sol-block-content">${formatMath(q.concept)}</div>
          </div>
          <div class="sol-block steps">
            <div class="sol-block-title">📝 詳解推導</div>
            <div class="sol-block-content">${formatMath(q.explanation)}</div>
          </div>
          <div class="sol-block trap">
            <div class="sol-block-title">⚠️ 易錯盲點</div>
            <div class="sol-block-content">${formatMath(q.trap)}</div>
          </div>
        </div>
      `;

      card.innerHTML = cardHtml;

      // 綁定「在原卷對照」按鈕事件
      const btnLocate = card.querySelector('.btn-locate-scan');
      if (btnLocate) {
        btnLocate.addEventListener('click', () => {
          switchTab('tab-compare');
          if (window.innerWidth <= 768) {
            setMobileCompareView('scan');
          }
          selectQuestion(q.id);
        });
      }

      solutionsContainer.appendChild(card);
    });
  }

  // 搜尋處理
  if (solutionSearchInput) {
    solutionSearchInput.addEventListener('input', (e) => {
      state.solutionSearchQuery = e.target.value;
      if (btnClearSearch) btnClearSearch.style.display = e.target.value ? 'block' : 'none';
      renderSolutionsGrid();
    });
  }
  if (btnClearSearch) {
    btnClearSearch.addEventListener('click', () => {
      solutionSearchInput.value = '';
      state.solutionSearchQuery = '';
      btnClearSearch.style.display = 'none';
      renderSolutionsGrid();
    });
  }

  // ================= 4. INTERACTIVE QUIZ ENGINE =================
  quizModeCards.forEach(card => {
    card.addEventListener('click', () => {
      quizModeCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      state.quiz.mode = card.dataset.mode;
    });
  });

  if (btnStartQuiz) {
    btnStartQuiz.addEventListener('click', startQuiz);
  }
  if (btnQuitQuiz) {
    btnQuitQuiz.addEventListener('click', quitQuiz);
  }
  if (btnRestartQuiz) {
    btnRestartQuiz.addEventListener('click', resetQuizToSetup);
  }
  if (btnReviewAllSolutions) {
    btnReviewAllSolutions.addEventListener('click', () => {
      switchTab('tab-solutions');
    });
  }

  function startQuiz() {
    let pool = [];
    if (state.quiz.mode === 'wrong') {
      pool = allQuestions.filter(q => !q.isStudentCorrect && q.type === 'choice');
    } else if (state.quiz.mode === 'random10') {
      const choices = examData.questions.slice();
      choices.sort(() => 0.5 - Math.random());
      pool = choices.slice(0, 10);
    } else {
      pool = examData.questions.slice(); // 全部 40 題選擇題
    }

    state.quiz.questions = pool;
    state.quiz.currentIndex = 0;
    state.quiz.userAnswers = {};
    state.quiz.score = 0;
    state.quiz.isAnswered = false;

    quizSetupCard.classList.add('hidden');
    quizResultCard.classList.add('hidden');
    quizActiveCard.classList.remove('hidden');

    renderQuizQuestion();
  }

  function renderQuizQuestion() {
    const q = state.quiz.questions[state.quiz.currentIndex];
    if (!q) return;

    state.quiz.isAnswered = !!state.quiz.userAnswers[q.id];

    // 更新進度條
    const total = state.quiz.questions.length;
    const current = state.quiz.currentIndex + 1;
    quizProgressText.textContent = `第 ${current} / ${total} 題`;
    quizScoreText.textContent = `目前得分：${state.quiz.score} 分`;
    quizProgressBar.style.width = `${(current / total) * 100}%`;

    btnQuizPrev.disabled = state.quiz.currentIndex === 0;
    btnQuizNext.textContent = current === total ? '完成測驗並結算 🏁' : '下一題 ▶';

    // 題目卡片
    let html = `
      <div class="q-badge-row" style="margin-bottom:1rem;">
        <span class="q-num-badge">測驗題 ${current}</span>
        <span class="q-category-tag">${q.categoryName}</span>
      </div>
      <div class="q-text-content" style="margin-bottom:1.5rem;">${formatMath(q.question)}</div>
      <div class="q-options-list">
    `;

    q.options.forEach(opt => {
      const hasAnswered = !!state.quiz.userAnswers[q.id];
      const selected = state.quiz.userAnswers[q.id] === opt.label;
      const isCorrect = opt.label === q.answer;

      let cls = '';
      if (hasAnswered) {
        if (selected && isCorrect) cls = 'selected-correct';
        else if (selected && !isCorrect) cls = 'selected-wrong';
        else if (isCorrect) cls = 'selected-correct';
      }

      html += `
        <button class="quiz-choice-btn ${cls}" data-label="${opt.label}" ${hasAnswered ? 'disabled' : ''}>
          <span class="option-label">${opt.label}</span>
          <span class="option-text">${opt.text}</span>
        </button>
      `;
    });

    html += `</div>`;
    quizQuestionBox.innerHTML = html;

    // 綁定選項點擊
    const choiceBtns = quizQuestionBox.querySelectorAll('.quiz-choice-btn');
    choiceBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        handleQuizAnswer(q, btn.dataset.label);
      });
    });

    // 渲染解析反饋
    if (state.quiz.isAnswered) {
      const userChoice = state.quiz.userAnswers[q.id];
      const isRight = userChoice === q.answer;
      quizFeedbackBox.className = `quiz-feedback-box ${isRight ? 'correct' : 'wrong'}`;
      quizFeedbackBox.classList.remove('hidden');
      quizFeedbackBox.innerHTML = `
        <div style="font-weight:800; font-size:1.1rem; color:${isRight ? '#34d399' : '#f43f5e'}; margin-bottom:0.5rem;">
          ${isRight ? '🎉 恭喜答對！+2 分' : '✕ 答錯了！正確答案是 (' + q.answer + ')'}
        </div>
        <div style="font-size:0.95rem; color:#e2e8f0; line-height:1.6;">
          <strong>【核心解析】</strong>${q.explanation}
        </div>
      `;
    } else {
      quizFeedbackBox.classList.add('hidden');
    }
  }

  function handleQuizAnswer(q, selectedOption) {
    if (state.quiz.userAnswers[q.id]) return;

    state.quiz.userAnswers[q.id] = selectedOption;
    state.quiz.isAnswered = true;

    if (selectedOption === q.answer) {
      state.quiz.score += q.score;
    }

    renderQuizQuestion();
  }

  if (btnQuizNext) {
    btnQuizNext.addEventListener('click', () => {
      if (state.quiz.currentIndex < state.quiz.questions.length - 1) {
        state.quiz.currentIndex++;
        renderQuizQuestion();
      } else {
        finishQuiz();
      }
    });
  }

  if (btnQuizPrev) {
    btnQuizPrev.addEventListener('click', () => {
      if (state.quiz.currentIndex > 0) {
        state.quiz.currentIndex--;
        renderQuizQuestion();
      }
    });
  }

  function finishQuiz() {
    quizActiveCard.classList.add('hidden');
    quizResultCard.classList.remove('hidden');

    const total = state.quiz.questions.length;
    let correctCount = 0;
    state.quiz.questions.forEach(q => {
      if (state.quiz.userAnswers[q.id] === q.answer) correctCount++;
    });

    const wrongCount = total - correctCount;
    const accuracy = ((correctCount / total) * 100).toFixed(1);
    const scoreVal = correctCount * 2;
    const maxScore = total * 2;

    document.getElementById('resultScoreVal').textContent = scoreVal;
    document.getElementById('resultScoreDenom').textContent = `/ ${maxScore}`;
    document.getElementById('resultCorrectCount').textContent = correctCount;
    document.getElementById('resultWrongCount').textContent = wrongCount;
    document.getElementById('resultAccuracy').textContent = `${accuracy}%`;

    const commentEl = document.getElementById('resultComment');
    if (accuracy >= 90) {
      commentEl.textContent = '🌟 卓越非凡！你對高一物理的掌握度達到了頂尖水準！';
    } else if (accuracy >= 75) {
      commentEl.textContent = '👍 表現優良！已經掌握大部分題型，再加強錯題盲點即可衝刺滿分！';
    } else {
      commentEl.textContent = '💪 還有進步空間！建議至「題庫全真詳解」與「考點地圖」重複溫習觀念。';
    }
  }

  function quitQuiz() {
    if (confirm('確定要提前結束目前的測驗嗎？')) {
      resetQuizToSetup();
    }
  }

  function resetQuizToSetup() {
    quizActiveCard.classList.add('hidden');
    quizResultCard.classList.add('hidden');
    quizSetupCard.classList.remove('hidden');
  }

  // ================= 5. CHEAT SHEET & KNOWLEDGE MAP =================
  function renderCheatSheet() {
    cheatSheetGrid.innerHTML = '';
    examData.cheatSheet.forEach(card => {
      const cardEl = document.createElement('div');
      cardEl.className = 'cheat-card';

      let itemsHtml = '';
      card.content.forEach(item => {
        itemsHtml += `
          <div class="cheat-item-row">
            <div class="cheat-item-label">${item.label}</div>
            <div class="cheat-item-val">${item.value}</div>
            <div class="cheat-item-note">${item.note}</div>
          </div>
        `;
      });

      cardEl.innerHTML = `
        <div class="cheat-card-header">
          <span class="cheat-card-icon">${card.icon}</span>
          <h3 class="cheat-card-title">${card.title}</h3>
        </div>
        <div class="cheat-card-body">${itemsHtml}</div>
      `;

      cheatSheetGrid.appendChild(cardEl);
    });
  }

  // ================= 6. LIGHTBOX MODAL =================
  if (btnCloseLightbox) btnCloseLightbox.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

  function openLightbox(imgSrc, title) {
    lightboxImg.src = imgSrc;
    lightboxTitleBar.textContent = title;
    lightboxModal.style.display = 'flex';
    lightboxModal.classList.remove('hidden');
  }

  function closeLightbox() {
    lightboxModal.style.display = 'none';
    lightboxModal.classList.add('hidden');
  }

  // 雙擊試卷可開啟全螢幕檢視
  examScanImg.addEventListener('dblclick', () => {
    const title = state.currentPage === 'front' ? '段考試卷 正面 (高解析度)' : '段考試卷 反面 (高解析度)';
    openLightbox(examScanImg.src, title);
  });

  // ================= Helper: 格式化數學式與上下標 =================
  function formatMath(text) {
    if (!text) return '';
    return text
      .replace(/10\^-9/g, '10<sup>-9</sup>')
      .replace(/10\^-8/g, '10<sup>-8</sup>')
      .replace(/10\^-10/g, '10<sup>-10</sup>')
      .replace(/10\^-7/g, '10<sup>-7</sup>')
      .replace(/10\^8/g, '10<sup>8</sup>')
      .replace(/10\^11/g, '10<sup>11</sup>')
      .replace(/10\^15/g, '10<sup>15</sup>')
      .replace(/m\/s\^2/g, 'm/s<sup>2</sup>')
      .replace(/r\^2/g, 'r<sup>2</sup>');
  }

  // ================= Initialization =================
  setMobileCompareView('scan');
  renderHotspots();
  renderQuickJumpStrip();
  selectQuestion('q1', false);
  renderCategoryFilters();
  renderSolutionsGrid();
  renderCheatSheet();

  console.log("段考解析平台初始化完成！46 題全真詳解已就緒。");
});

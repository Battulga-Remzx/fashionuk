// Women's Victorian Fashion Quiz Data
const womensQuizDataRaw = [
    {
        question: "What did Victorian women commonly wear on their heads?",
        correctAnswer: "Bonnets",
        allAnswers: ["Bonnets", "Helmets", "Crowns", "Berets"]
    },
    {
        question: "Why did women wear bonnets?",
        correctAnswer: "To protect themselves from the sun and appear elegant",
        allAnswers: [
            "To protect themselves from the sun and appear elegant",
            "To show military power",
            "To cover their ears only",
            "To keep their hair wet"
        ]
    },
    {
        question: "What kind of neckline was common in Victorian women's dresses?",
        correctAnswer: "High neckline",
        allAnswers: ["High neckline", "Open neckline", "No neckline", "Deep V-neck"]
    },
    {
        question: "What created the hourglass silhouette?",
        correctAnswer: "Corsets",
        allAnswers: ["Corsets", "Boots", "Gloves", "Parasols"]
    },
    {
        question: "What were corsets often supported with?",
        correctAnswer: "Whalebone or steel",
        allAnswers: ["Whalebone or steel", "Plastic", "Rubber", "Glass"]
    },
    {
        question: "What was the purpose of petticoats?",
        correctAnswer: "To make the skirt fuller",
        allAnswers: [
            "To make the skirt fuller",
            "To decorate the shoulders",
            "To hold gloves",
            "To cover the hair"
        ]
    },
    {
        question: "What kind of footwear did Victorian women usually wear?",
        correctAnswer: "Ankle boots",
        allAnswers: ["Ankle boots", "Sandals", "Sneakers", "Tall riding boots only"]
    },
    {
        question: "Why did women carry parasols?",
        correctAnswer: "To protect their skin from the sun",
        allAnswers: [
            "To protect their skin from the sun",
            "To keep warm in winter",
            "To carry books",
            "To decorate dresses"
        ]
    },
    {
        question: "Which fabrics were common in Victorian women's fashion?",
        correctAnswer: "Silk, cotton, wool, and velvet",
        allAnswers: [
            "Silk, cotton, wool, and velvet",
            "Plastic and denim",
            "Nylon and polyester",
            "Rubber and linen only"
        ]
    },
    {
        question: "What did pale skin represent in the Victorian era?",
        correctAnswer: "Beauty and high social status",
        allAnswers: [
            "Beauty and high social status",
            "Illness and weakness",
            "Athletic skill",
            "Factory work"
        ]
    }
];

// Men's Victorian Fashion Quiz Data
const mensQuizDataRaw = [
    {
        question: "What kinds of hats did Victorian men commonly wear?",
        correctAnswer: "Top hats or bowler hats",
        allAnswers: ["Top hats or bowler hats", "Helmets or caps", "Crowns or scarves", "Beanies or hoods"]
    },
    {
        question: "What materials were Victorian men's hats often made from?",
        correctAnswer: "Felt, wool, or cotton blend",
        allAnswers: ["Felt, wool, or cotton blend", "Plastic and rubber", "Silk and glass", "Denim and leather"]
    },
    {
        question: "What types of coats did Victorian men wear?",
        correctAnswer: "Frock coats, tailcoats, or morning coats",
        allAnswers: ["Frock coats, tailcoats, or morning coats", "Raincoats and bomber jackets", "Only short coats", "Sports jackets only"]
    },
    {
        question: "How were Victorian coats usually shaped?",
        correctAnswer: "Fitted at the top and long at the bottom",
        allAnswers: ["Fitted at the top and long at the bottom", "Loose and very short", "Wide and square", "Tight only at the waist"]
    },
    {
        question: "What did men usually wear under the coat?",
        correctAnswer: "White shirts with waistcoats",
        allAnswers: ["White shirts with waistcoats", "Sweaters with scarves", "Robes with belts", "T-shirts with hoodies"]
    },
    {
        question: "What were Victorian men's shirts usually like?",
        correctAnswer: "High-collared and plain",
        allAnswers: ["High-collared and plain", "Low-collared and bright", "Sleeveless and patterned", "Short and loose"]
    },
    {
        question: "What kind of trousers were common in Victorian men's fashion?",
        correctAnswer: "Straight or slightly fitted trousers",
        allAnswers: ["Straight or slightly fitted trousers", "Baggy trousers", "Very short trousers", "Sports trousers"]
    },
    {
        question: "What shoes did Victorian men commonly wear?",
        correctAnswer: "Leather boots or Oxford shoes",
        allAnswers: ["Leather boots or Oxford shoes", "Sneakers", "Sandals", "Slippers only"]
    },
    {
        question: "Which accessories were part of Victorian men's fashion?",
        correctAnswer: "Cravats, pocket watches, gloves, and canes",
        allAnswers: ["Cravats, pocket watches, gloves, and canes", "Backpacks, sunglasses, and caps", "Belts, chains, and headphones", "Pins, socks, and bracelets only"]
    },
    {
        question: "How can Victorian men's fashion best be described?",
        correctAnswer: "Elegant, detailed, and formal",
        allAnswers: ["Elegant, detailed, and formal", "Casual and sporty", "Simple and modern", "Bright and playful"]
    }
];

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Randomize answers for a single question
function randomizeAnswers(questionData) {
    const answers = [...questionData.allAnswers];
    const correctAnswer = questionData.correctAnswer;
    
    // Shuffle the answers array randomly
    const shuffledAnswers = shuffleArray(answers);
    
    // Find new index of correct answer after shuffle
    const newCorrectIndex = shuffledAnswers.indexOf(correctAnswer);
    
    return {
        question: questionData.question,
        answers: shuffledAnswers,
        correct: newCorrectIndex
    };
}

// Generate randomized quiz data
let womensQuizData = [];
let mensQuizData = [];

function initializeQuizzes() {
    womensQuizData = womensQuizDataRaw.map(item => randomizeAnswers(item));
    mensQuizData = mensQuizDataRaw.map(item => randomizeAnswers(item));
}

// Call initialization
initializeQuizzes();

let womensCurrentQuestion = 0;
let womensScore = 0;
let womensAnswered = false;

let mensCurrentQuestion = 0;
let mensScore = 0;
let mensAnswered = false;

// Women's Quiz Functions
function startWomensQuiz() {
    // Re-randomize answers when starting quiz for fresh experience
    initializeQuizzes();
    womensCurrentQuestion = 0;
    womensScore = 0;
    womensAnswered = false;
    renderWomensQuiz();
    document.getElementById('womensQuizModal').style.display = 'block';
}

function renderWomensQuiz() {
    const container = document.getElementById('womensQuizContainer');
    const current = womensQuizData[womensCurrentQuestion];
    
    container.innerHTML = `
        <div class="quiz-inner">
            <div class="quiz-sticker">👗 Victorian Women's Quiz</div>
            <div class="quiz-progress-text">Question ${womensCurrentQuestion + 1} of ${womensQuizData.length}</div>
            <div class="quiz-question-text">${current.question}</div>
            <div class="quiz-answers-area" id="womensAnswersArea"></div>
            <div class="quiz-feedback-area" id="womensFeedback"></div>
            <div class="quiz-next-wrap">
                <button class="quiz-next-btn" id="womensNextBtn" onclick="nextWomensQuestion()">Next Question <i class="fas fa-arrow-right"></i></button>
            </div>
        </div>
    `;
    
    const answersArea = document.getElementById('womensAnswersArea');
    current.answers.forEach((answer, idx) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-answer-btn';
        btn.textContent = answer;
        btn.setAttribute('data-index', idx);
        btn.onclick = () => selectWomensAnswer(idx);
        answersArea.appendChild(btn);
    });
    
    document.getElementById('womensNextBtn').style.display = 'none';
}

function selectWomensAnswer(selectedIdx) {
    if (womensAnswered) return;
    womensAnswered = true;
    
    const current = womensQuizData[womensCurrentQuestion];
    const buttons = document.querySelectorAll('#womensAnswersArea .quiz-answer-btn');
    const feedback = document.getElementById('womensFeedback');
    
    buttons.forEach((btn, idx) => {
        btn.style.pointerEvents = 'none';
        if (idx === current.correct) {
            btn.classList.add('correct');
        }
        if (idx === selectedIdx && idx !== current.correct) {
            btn.classList.add('wrong');
        }
    });
    
    if (selectedIdx === current.correct) {
        womensScore++;
        feedback.innerHTML = '<i class="fas fa-check-circle"></i> ✅ Correct! ' + current.answers[current.correct] + ' is the right answer.';
        feedback.className = 'quiz-feedback-correct';
    } else {
        feedback.innerHTML = `<i class="fas fa-times-circle"></i> ❌ Incorrect! The correct answer is: "${current.answers[current.correct]}".`;
        feedback.className = 'quiz-feedback-wrong';
    }
    
    document.getElementById('womensNextBtn').style.display = 'inline-flex';
}

function nextWomensQuestion() {
    womensCurrentQuestion++;
    
    if (womensCurrentQuestion < womensQuizData.length) {
        womensAnswered = false;
        renderWomensQuiz();
    } else {
        showWomensResults();
    }
}

function showWomensResults() {
    const container = document.getElementById('womensQuizContainer');
    let resultHTML = `
        <div class="quiz-inner">
            <div class="quiz-sticker">🏆 Quiz Complete</div>
            <div class="quiz-result-title">Your Score: ${womensScore} / ${womensQuizData.length}</div>
            <div class="quiz-perfect-score">${womensScore === womensQuizData.length ? '🎉 Perfect score! You\'re a Victorian fashion expert! 🎉' : (womensScore >= 7 ? '🌟 Great job! Keep learning! 🌟' : '📚 Review the content and try again! 📚')}</div>
            <div class="quiz-answers-list">
                <h3><i class="fas fa-list"></i> All Correct Answers</h3>
    `;
    
    womensQuizData.forEach((item, idx) => {
        resultHTML += `
            <div class="quiz-answer-item">
                <strong>${idx + 1}. ${item.question}</strong>
                <span>✓ ${item.answers[item.correct]}</span>
            </div>
        `;
    });
    
    resultHTML += `
            </div>
            <button class="quiz-restart-btn" onclick="restartWomensQuiz()"><i class="fas fa-redo"></i> Try Again</button>
            <button class="quiz-close-btn" onclick="closeWomensQuiz()"><i class="fas fa-times"></i> Close</button>
        </div>
    `;
    
    container.innerHTML = resultHTML;
}

function restartWomensQuiz() {
    initializeQuizzes();
    womensCurrentQuestion = 0;
    womensScore = 0;
    womensAnswered = false;
    renderWomensQuiz();
}

function closeWomensQuiz() {
    document.getElementById('womensQuizModal').style.display = 'none';
}

// Men's Quiz Functions
function startMensQuiz() {
    // Re-randomize answers when starting quiz for fresh experience
    initializeQuizzes();
    mensCurrentQuestion = 0;
    mensScore = 0;
    mensAnswered = false;
    renderMensQuiz();
    document.getElementById('mensQuizModal').style.display = 'block';
}

function renderMensQuiz() {
    const container = document.getElementById('mensQuizContainer');
    const current = mensQuizData[mensCurrentQuestion];
    
    container.innerHTML = `
        <div class="quiz-inner">
            <div class="quiz-sticker">🎩 Victorian Men's Quiz</div>
            <div class="quiz-progress-text">Question ${mensCurrentQuestion + 1} of ${mensQuizData.length}</div>
            <div class="quiz-question-text">${current.question}</div>
            <div class="quiz-answers-area" id="mensAnswersArea"></div>
            <div class="quiz-feedback-area" id="mensFeedback"></div>
            <div class="quiz-next-wrap">
                <button class="quiz-next-btn" id="mensNextBtn" onclick="nextMensQuestion()">Next Question <i class="fas fa-arrow-right"></i></button>
            </div>
        </div>
    `;
    
    const answersArea = document.getElementById('mensAnswersArea');
    current.answers.forEach((answer, idx) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-answer-btn';
        btn.textContent = answer;
        btn.setAttribute('data-index', idx);
        btn.onclick = () => selectMensAnswer(idx);
        answersArea.appendChild(btn);
    });
    
    document.getElementById('mensNextBtn').style.display = 'none';
}

function selectMensAnswer(selectedIdx) {
    if (mensAnswered) return;
    mensAnswered = true;
    
    const current = mensQuizData[mensCurrentQuestion];
    const buttons = document.querySelectorAll('#mensAnswersArea .quiz-answer-btn');
    const feedback = document.getElementById('mensFeedback');
    
    buttons.forEach((btn, idx) => {
        btn.style.pointerEvents = 'none';
        if (idx === current.correct) {
            btn.classList.add('correct');
        }
        if (idx === selectedIdx && idx !== current.correct) {
            btn.classList.add('wrong');
        }
    });
    
    if (selectedIdx === current.correct) {
        mensScore++;
        feedback.innerHTML = '<i class="fas fa-check-circle"></i> ✅ Correct! ' + current.answers[current.correct] + ' is the right answer.';
        feedback.className = 'quiz-feedback-correct';
    } else {
        feedback.innerHTML = `<i class="fas fa-times-circle"></i> ❌ Incorrect! The correct answer is: "${current.answers[current.correct]}".`;
        feedback.className = 'quiz-feedback-wrong';
    }
    
    document.getElementById('mensNextBtn').style.display = 'inline-flex';
}

function nextMensQuestion() {
    mensCurrentQuestion++;
    
    if (mensCurrentQuestion < mensQuizData.length) {
        mensAnswered = false;
        renderMensQuiz();
    } else {
        showMensResults();
    }
}

function showMensResults() {
    const container = document.getElementById('mensQuizContainer');
    let resultHTML = `
        <div class="quiz-inner">
            <div class="quiz-sticker">🏆 Quiz Complete</div>
            <div class="quiz-result-title">Your Score: ${mensScore} / ${mensQuizData.length}</div>
            <div class="quiz-perfect-score">${mensScore === mensQuizData.length ? '🎉 Perfect score! You\'re a Victorian fashion expert! 🎉' : (mensScore >= 7 ? '🌟 Great job! Keep learning! 🌟' : '📚 Review the content and try again! 📚')}</div>
            <div class="quiz-answers-list">
                <h3><i class="fas fa-list"></i> All Correct Answers</h3>
    `;
    
    mensQuizData.forEach((item, idx) => {
        resultHTML += `
            <div class="quiz-answer-item">
                <strong>${idx + 1}. ${item.question}</strong>
                <span>✓ ${item.answers[item.correct]}</span>
            </div>
        `;
    });
    
    resultHTML += `
            </div>
            <button class="quiz-restart-btn" onclick="restartMensQuiz()"><i class="fas fa-redo"></i> Try Again</button>
            <button class="quiz-close-btn" onclick="closeMensQuiz()"><i class="fas fa-times"></i> Close</button>
        </div>
    `;
    
    container.innerHTML = resultHTML;
}

function restartMensQuiz() {
    initializeQuizzes();
    mensCurrentQuestion = 0;
    mensScore = 0;
    mensAnswered = false;
    renderMensQuiz();
}

function closeMensQuiz() {
    document.getElementById('mensQuizModal').style.display = 'none';
}

// Toggle Expandable Sections
function toggleSection(contentId) {
    const section = document.getElementById(contentId).closest('.expandable-section');
    section.classList.toggle('active');
}

// Close modals when clicking outside
window.onclick = function(event) {
    const womensModal = document.getElementById('womensQuizModal');
    const mensModal = document.getElementById('mensQuizModal');
    if (event.target === womensModal) closeWomensQuiz();
    if (event.target === mensModal) closeMensQuiz();
}

// Mobile Menu and Smooth Scroll
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPos = window.scrollY + 200;
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href').substring(1);
            if (href === current) link.classList.add('active');
            else if (current === '' && href === 'home') link.classList.add('active');
        });
    });
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.fashion-card, .quiz-card, .comparison-table-wrapper, .fashion-photo').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add quiz styles dynamically
const quizStyles = document.createElement('style');
quizStyles.textContent = `
    .quiz-inner {
        padding: 40px;
        color: #f5f0e6;
    }
    .quiz-sticker {
        display: inline-block;
        background: #d4b26a;
        color: #0B2B40;
        padding: 6px 16px;
        border-radius: 50px;
        font-size: 12px;
        font-weight: 600;
        margin-bottom: 20px;
    }
    .quiz-progress-text {
        color: #cdb88a;
        font-size: 14px;
        margin-bottom: 20px;
        letter-spacing: 1px;
    }
    .quiz-question-text {
        font-size: 28px;
        line-height: 1.4;
        margin-bottom: 28px;
        font-family: 'Playfair Display', serif;
    }
    .quiz-answers-area {
        display: grid;
        gap: 12px;
        margin-bottom: 20px;
    }
    .quiz-answer-btn {
        text-align: left;
        padding: 14px 20px;
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(212,178,106,0.3);
        border-radius: 12px;
        color: #f3ead9;
        font-size: 16px;
        cursor: pointer;
        transition: all 0.2s ease;
    }
    .quiz-answer-btn:hover {
        background: rgba(212,178,106,0.15);
        transform: translateX(5px);
    }
    .quiz-answer-btn.correct {
        background: rgba(31,125,70,0.3);
        border-color: #39b56a;
        color: #dff7e8;
    }
    .quiz-answer-btn.wrong {
        background: rgba(160,39,39,0.3);
        border-color: #d94a4a;
        color: #ffe2e2;
    }
    .quiz-feedback-area {
        min-height: 70px;
        padding: 12px 16px;
        border-radius: 12px;
        margin: 15px 0;
        display: flex;
        align-items: center;
    }
    .quiz-feedback-correct {
        background: rgba(31,125,70,0.2);
        color: #63d48f;
        border-left: 4px solid #39b56a;
    }
    .quiz-feedback-wrong {
        background: rgba(160,39,39,0.2);
        color: #ff7a7a;
        border-left: 4px solid #d94a4a;
    }
    .quiz-next-wrap {
        display: flex;
        justify-content: flex-end;
        margin-top: 10px;
    }
    .quiz-next-btn {
        padding: 10px 28px;
        background: transparent;
        border: 1px solid #d4b26a;
        border-radius: 40px;
        color: #d4b26a;
        font-size: 15px;
        cursor: pointer;
        transition: 0.2s;
        font-weight: 500;
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }
    .quiz-next-btn:hover {
        background: rgba(212,178,106,0.15);
        transform: translateY(-2px);
    }
    .quiz-result-title {
        font-size: 32px;
        color: #d4b26a;
        margin: 20px 0;
    }
    .quiz-perfect-score {
        font-size: 18px;
        margin-bottom: 30px;
        color: #e8dfcf;
    }
    .quiz-answers-list {
        margin: 25px 0;
        text-align: left;
        max-height: 400px;
        overflow-y: auto;
    }
    .quiz-answers-list h3 {
        color: #d4b26a;
        margin-bottom: 15px;
        font-size: 20px;
    }
    .quiz-answer-item {
        padding: 14px 16px;
        background: rgba(255,255,255,0.03);
        border-left: 3px solid #d4b26a;
        margin-bottom: 10px;
        border-radius: 4px;
    }
    .quiz-answer-item strong {
        display: block;
        margin-bottom: 6px;
        color: #f5f0e6;
        font-size: 15px;
    }
    .quiz-answer-item span {
        color: #d7c6a0;
        font-size: 14px;
    }
    .quiz-restart-btn, .quiz-close-btn {
        padding: 12px 28px;
        margin: 10px 10px 0 0;
        background: #d4b26a;
        border: none;
        border-radius: 40px;
        color: #111;
        font-weight: 600;
        cursor: pointer;
        transition: 0.2s;
        font-size: 15px;
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }
    .quiz-restart-btn:hover, .quiz-close-btn:hover {
        background: #e2c27b;
        transform: translateY(-2px);
    }
    .quiz-close-btn {
        background: transparent;
        border: 1px solid #d4b26a;
        color: #d4b26a;
    }
    .quiz-close-btn:hover {
        background: rgba(212,178,106,0.1);
        transform: translateY(-2px);
    }
    @media (max-width: 768px) {
        .quiz-inner { padding: 24px; }
        .quiz-question-text { font-size: 22px; }
        .quiz-result-title { font-size: 26px; }
        .quiz-answer-btn { padding: 12px 16px; font-size: 14px; }
    }
`;
document.head.appendChild(quizStyles);
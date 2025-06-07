// step6-content.js - Блок 6: Меню и технологические карты

function generateStep6Content() {
    return `
        <h3>6.1 Наличие технологических карт</h3>
        
        <p style="margin-bottom: 15px; opacity: 0.9;">Есть ли у вас готовые ТТК (технологические карты):</p>
        
        <div class="grid">
            <button class="btn btn-secondary" onclick="selectOption('technicalCards', 'full', this)">
                ✅ <strong>Да, есть полный комплект ТТК</strong>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('technicalCards', 'partial', this)">
                ⚠️ <strong>Есть частично</strong><br>
                <small style="opacity: 0.7;">(на основные блюда)</small>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('technicalCards', 'recipes', this)">
                📝 <strong>Есть только рецептуры</strong><br>
                <small style="opacity: 0.7;">без ТТК</small>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('technicalCards', 'none', this)">
                ❌ <strong>Нет, готовим "по памяти"</strong>
            </button>
        </div>
        
        <div id="ttcValidation"></div>
        
        <h3>6.2 Основные категории блюд в меню</h3>
        
        <h4 style="color: #fbbf24; margin: 20px 0 15px 0;">Холодные блюда и закуски:</h4>
        <div class="grid">
            <button class="btn btn-secondary" onclick="toggleOption('menuCategories', 'freshSalads', this)">
                🥗 Салаты из свежих овощей
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('menuCategories', 'dressingsSalads', this)">
                🥗 Салаты с майонезом/соусами
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('menuCategories', 'meatFishCuts', this)">
                🍖 Мясные/рыбные нарезки
            </button>
        </div>
        
        <h4 style="color: #fbbf24; margin: 20px 0 15px 0;">Горячие блюда:</h4>
        <div class="grid">
            <button class="btn btn-secondary" onclick="toggleOption('menuCategories', 'meatDishes', this)">
                🥩 Мясные блюда
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('menuCategories', 'poultryDishes', this)">
                🐔 Птица
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('menuCategories', 'fishSeafood', this)">
                🐟 Рыба и морепродукты
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('menuCategories', 'pizza', this)">
                🍕 Пицца
            </button>
        </div>
        
        <h3>6.3 Особенности приготовления</h3>
        
        <p style="margin-bottom: 15px; opacity: 0.9;">Используете ли в приготовлении:</p>
        
        <div class="grid">
            <button class="btn btn-secondary" onclick="toggleOption('cookingFeatures', 'rawEggs', this)">
                🥚 <strong>Сырые яйца</strong><br>
                <small style="opacity: 0.7;">(в майонезе, креме, коктейлях)</small>
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('cookingFeatures', 'rawFish', this)">
                🍣 <strong>Сырую рыбу</strong><br>
                <small style="opacity: 0.7;">(суши, сашими, строганина)</small>
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('cookingFeatures', 'rareMeat', this)">
                🥩 <strong>Мясо слабой прожарки</strong><br>
                <small style="opacity: 0.7;">(стейки с кровью)</small>
            </button>
        </div>
        
        <div id="cookingFeaturesWarnings"></div>
    `;
}

// Валидация ТТК
function validateTTC() {
    const validationContainer = document.getElementById('ttcValidation');
    if (!validationContainer) return;
    
    if (formData.technicalCards === 'none') {
        validationContainer.innerHTML = `
            <div class="error">
                ⚠️ Для системы ХАССП необходимы технологические карты. Поможем создать их на основе вашего меню
            </div>
        `;
    } else {
        validationContainer.innerHTML = '';
    }
}

// Предупреждения для особенностей приготовления
function updateCookingWarnings() {
    const warningsContainer = document.getElementById('cookingFeaturesWarnings');
    if (!warningsContainer) return;
    
    const features = formData.cookingFeatures || [];
    let warnings = [];
    
    if (features.includes('rawEggs')) {
        warnings.push({
            type: 'error',
            message: '🚨 ВЫСОКИЙ РИСК! Добавим строгие процедуры контроля качества яиц'
        });
    }
    
    if (features.includes('rawFish')) {
        warnings.push({
            type: 'error',
            message: '🚨 ВЫСОКИЙ РИСК! Необходим особый контроль поставщиков рыбы'
        });
    }
    
    warningsContainer.innerHTML = warnings.map(warning => 
        `<div class="${warning.type}">${warning.message}</div>`
    ).join('');
}

// Валидация для Блока 6
function validateStep6() {
    const errors = [];
    
    if (!formData.technicalCards) {
        errors.push('Укажите наличие технологических карт');
    }
    
    if (!formData.menuCategories || formData.menuCategories.length === 0) {
        errors.push('Выберите хотя бы одну категорию блюд');
    }
    
    return errors;
}

// Обработчики событий
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-secondary')) {
            setTimeout(() => {
                validateTTC();
                updateCookingWarnings();
            }, 100);
        }
    });
});

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generateStep6Content, validateStep6, validateTTC, updateCookingWarnings };
}

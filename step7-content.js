// step7-content.js - Блок 7: Поставщики и логистика

function generateStep7Content() {
    return `
        <h3>7.1 Поставщики продуктов</h3>
        
        <p style="margin-bottom: 15px; opacity: 0.9;">Количество основных поставщиков:</p>
        
        <div class="grid">
            <button class="btn btn-secondary" onclick="selectOption('suppliersCount', '1-2', this)">
                🏢 <strong>1-2 поставщика</strong><br>
                <small style="opacity: 0.7;">(все от одной компании)</small>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('suppliersCount', '3-5', this)">
                📦 <strong>3-5 поставщиков</strong><br>
                <small style="opacity: 0.7;">(специализированные)</small>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('suppliersCount', '6-10', this)">
                🏪 <strong>6-10 поставщиков</strong>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('suppliersCount', '10+', this)">
                📋 <strong>Более 10 поставщиков</strong>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('suppliersCount', 'retail', this)">
                🛒 <strong>Покупаем в магазинах/на рынке</strong>
            </button>
        </div>
        
        <div id="suppliersHints"></div>
        
        <h3>7.2 График поставок</h3>
        
        <p style="margin-bottom: 15px; opacity: 0.9;">Как часто получаете продукты:</p>
        
        <div class="grid">
            <button class="btn btn-secondary" onclick="selectOption('deliverySchedule', 'daily', this)">
                📅 <strong>Ежедневно</strong>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('deliverySchedule', '2-3times', this)">
                📅 <strong>2-3 раза в неделю</strong>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('deliverySchedule', 'weekly', this)">
                📅 <strong>1 раз в неделю</strong>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('deliverySchedule', 'ondemand', this)">
                📞 <strong>По мере необходимости</strong>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('deliverySchedule', 'self', this)">
                🚗 <strong>Закупаем сами</strong>
            </button>
        </div>
        
        <div id="scheduleHints"></div>
        
        <h3>7.3 Приемка товара</h3>
        
        <p style="margin-bottom: 15px; opacity: 0.9;">Кто принимает товар от поставщиков:</p>
        
        <div class="grid">
            <button class="btn btn-secondary" onclick="selectOption('goodsAcceptance', 'responsible', this)">
                👤 <strong>Назначенный ответственный</strong><br>
                <small style="opacity: 0.7;">(повар, администратор)</small>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('goodsAcceptance', 'anyone', this)">
                👥 <strong>Любой свободный сотрудник</strong>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('goodsAcceptance', 'manager', this)">
                👨‍💼 <strong>Руководитель лично</strong>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('goodsAcceptance', 'rotation', this)">
                🔄 <strong>По очереди разные сотрудники</strong>
            </button>
        </div>
        
        <div id="acceptanceHints"></div>
        
        <h3>7.4 Документооборот</h3>
        
        <p style="margin-bottom: 15px; opacity: 0.9;">Как ведется учет поступающих продуктов (можно выбрать несколько):</p>
        
        <div class="grid">
            <button class="btn btn-secondary" onclick="toggleOption('documentation', 'journal', this)">
                📋 <strong>Ведем журнал приемки</strong><br>
                <small style="opacity: 0.7;">с проверкой документов</small>
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('documentation', 'expiry', this)">
                📅 <strong>Проверяем только сроки годности</strong>
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('documentation', 'minimal', this)">
                ❌ <strong>Принимаем без особых проверок</strong>
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('documentation', 'accounting', this)">
                💻 <strong>Фиксируем только в учетной программе</strong><br>
                <small style="opacity: 0.7;">(1С и т.д.)</small>
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('documentation', 'mercury', this)">
                🐄 <strong>Используем систему "Меркурий"</strong><br>
                <small style="opacity: 0.7;">для ветеринарных документов</small>
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('documentation', 'honestSign', this)">
                🏷️ <strong>Используем "Честный знак"</strong><br>
                <small style="opacity: 0.7;">для маркированных товаров</small>
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('documentation', 'multiple', this)">
                📊 <strong>Ведем учет в нескольких системах</strong><br>
                <small style="opacity: 0.7;">одновременно</small>
            </button>
        </div>
        
        <div id="documentationHints"></div>
        <div id="documentationValidation"></div>
    `;
}

// Подсказки для поставщиков
function updateSuppliersHints(count) {
    const hintsContainer = document.getElementById('suppliersHints');
    if (!hintsContainer) return;
    
    const hints = {
        'retail': '⚠️ Усложняет контроль качества и документооборот. Рекомендуем работу с проверенными поставщиками',
        '10+': '📋 Много поставщиков = много документооборота. Добавим усиленные процедуры контроля'
    };
    
    if (hints[count]) {
        const type = count === 'retail' ? 'warning' : 'hint';
        hintsContainer.innerHTML = `
            <div class="${type}">
                💡 <strong>Подсказка:</strong> ${hints[count]}
            </div>
        `;
    } else {
        hintsContainer.innerHTML = '';
    }
}

// Подсказки для графика поставок
function updateScheduleHints(schedule) {
    const hintsContainer = document.getElementById('scheduleHints');
    if (!hintsContainer) return;
    
    const hints = {
        'daily': 'Добавим ежедневные процедуры приемки и контроля качества',
        'weekly': 'Усилим требования к хранению продуктов в течение недели'
    };
    
    if (hints[schedule]) {
        hintsContainer.innerHTML = `
            <div class="hint">
                💡 <strong>Подсказка:</strong> ${hints[schedule]}
            </div>
        `;
    } else {
        hintsContainer.innerHTML = '';
    }
}

// Подсказки для приемки
function updateAcceptanceHints(acceptance) {
    const hintsContainer = document.getElementById('acceptanceHints');
    if (!hintsContainer) return;
    
    const hints = {
        'responsible': '✅ Правильно! Включим обучение ответственного лица процедурам приемки',
        'anyone': '⚠️ Рискованно! Рекомендуем назначить ответственного и обучить процедурам приемки'
    };
    
    if (hints[acceptance]) {
        const type = acceptance === 'responsible' ? 'hint' : 'warning';
        hintsContainer.innerHTML = `
            <div class="${type}">
                💡 <strong>Рекомендация:</strong> ${hints[acceptance]}
            </div>
        `;
    } else {
        hintsContainer.innerHTML = '';
    }
}

// Подсказки для документооборота
function updateDocumentationHints() {
    const hintsContainer = document.getElementById('documentationHints');
    if (!hintsContainer) return;
    
    const docs = formData.documentation || [];
    let hints = [];
    
    if (docs.includes('mercury')) {
        hints.push('✅ Отлично! Включим интеграцию с системой ветеринарного контроля в процедуры приемки');
    }
    
    if (docs.includes('honestSign')) {
        hints.push('✅ Добавим процедуры сверки маркировки и работы с системой прослеживаемости');
    }
    
    if (hints.length > 0) {
        hintsContainer.innerHTML = hints.map(hint => 
            `<div class="hint">💡 <strong>Умная подсказка:</strong> ${hint}</div>`
        ).join('');
    } else {
        hintsContainer.innerHTML = '';
    }
}

// Валидация документооборота
function validateDocumentation() {
    const validationContainer = document.getElementById('documentationValidation');
    if (!validationContainer) return;
    
    const docs = formData.documentation || [];
    
    if (docs.includes('minimal')) {
        validationContainer.innerHTML = `
            <div class="error">
                🚨 КРИТИЧЕСКОЕ НАРУШЕНИЕ! Обязательно нужен контроль документов и качества продуктов
            </div>
        `;
    } else if (docs.length === 0) {
        validationContainer.innerHTML = `
            <div class="warning">
                ⚠️ Выберите хотя бы один способ ведения документооборота
            </div>
        `;
    } else {
        validationContainer.innerHTML = '';
    }
}

// Валидация для Блока 7
function validateStep7() {
    const errors = [];
    
    // Проверка обязательных выборов
    if (!formData.suppliersCount) {
        errors.push('Укажите количество поставщиков');
    }
    
    if (!formData.deliverySchedule) {
        errors.push('Выберите график поставок');
    }
    
    if (!formData.goodsAcceptance) {
        errors.push('Укажите, кто принимает товар');
    }
    
    if (!formData.documentation || formData.documentation.length === 0) {
        errors.push('Выберите способ ведения документооборота');
    }
    
    // Критические проверки
    const docs = formData.documentation || [];
    if (docs.includes('minimal')) {
        errors.push('Приемка без проверок недопустима для пищевых предприятий');
    }
    
    return errors;
}

// Обработчики событий
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-secondary')) {
            setTimeout(() => {
                // Обновление подсказок
                if (formData.suppliersCount) {
                    updateSuppliersHints(formData.suppliersCount);
                }
                
                if (formData.deliverySchedule) {
                    updateScheduleHints(formData.deliverySchedule);
                }
                
                if (formData.goodsAcceptance) {
                    updateAcceptanceHints(formData.goodsAcceptance);
                }
                
                if (formData.documentation) {
                    updateDocumentationHints();
                    validateDocumentation();
                }
            }, 100);
        }
    });
});

// Экспорт функций
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        generateStep7Content, 
        validateStep7,
        updateSuppliersHints,
        updateScheduleHints,
        updateAcceptanceHints,
        updateDocumentationHints,
        validateDocumentation
    };
}

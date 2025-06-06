// step3-content.js - Блок 3: Кухня и технологические процессы

function getStep3Content() {
    return `
        <h3>3.1 Тип производства</h3>
        
        <p style="margin-bottom: 15px; opacity: 0.9;">Основной способ приготовления блюд:</p>
        
        <div class="grid">
            <button class="btn btn-secondary" onclick="selectOption('productionType', 'full', this)">
                🥕 <strong>Полный цикл</strong><br>
                <small style="opacity: 0.7;">Готовим все с нуля из сырых продуктов</small>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('productionType', 'semi', this)">
                🍲 <strong>Полуфабрикаты</strong><br>
                <small style="opacity: 0.7;">Используем готовые полуфабрикаты + минимальная обработка</small>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('productionType', 'mixed', this)">
                🔄 <strong>Смешанный</strong><br>
                <small style="opacity: 0.7;">Часть блюд с нуля, часть из полуфабрикатов</small>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('productionType', 'reheat', this)">
                🔥 <strong>Только разогрев</strong><br>
                <small style="opacity: 0.7;">Разогрев готовых блюд</small>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('productionType', 'ready', this)">
                🛒 <strong>Реализация готовых изделий</strong><br>
                <small style="opacity: 0.7;">Кондитерские изделия, выпечка без собственного производства</small>
            </button>
        </div>
        
        <div id="productionTypeHints"></div>
        
        <h3>3.2 Специализация кухни</h3>
        
        <p style="margin-bottom: 15px; opacity: 0.9;">Основные направления (выберите до 3-х):</p>
        
        <div class="grid">
            <button class="btn btn-secondary" onclick="toggleOption('cuisineSpecialization', 'european', this)">
                🇪🇺 Европейская кухня
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('cuisineSpecialization', 'russian', this)">
                🇷🇺 Русская/славянская кухня
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('cuisineSpecialization', 'asian', this)">
                🥢 Азиатская кухня<br>
                <small style="opacity: 0.7;">(китайская, японская, тайская)</small>
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('cuisineSpecialization', 'eastern', this)">
                🥙 Восточная кухня<br>
                <small style="opacity: 0.7;">(кавказская, среднеазиатская)</small>
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('cuisineSpecialization', 'italian', this)">
                🍕 Итальянская<br>
                <small style="opacity: 0.7;">(пицца, паста)</small>
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('cuisineSpecialization', 'fastfood', this)">
                🍔 Фастфуд<br>
                <small style="opacity: 0.7;">(бургеры, картофель фри)</small>
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('cuisineSpecialization', 'vegan', this)">
                🌱 Веганская/вегетарианская
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('cuisineSpecialization', 'children', this)">
                👶 Детская кухня
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('cuisineSpecialization', 'diet', this)">
                💊 Диетическая кухня
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('cuisineSpecialization', 'mixed', this)">
                🌍 Смешанная<br>
                <small style="opacity: 0.7;">(без специализации)</small>
            </button>
        </div>
        
        <div id="cuisineHints"></div>
        <div id="cuisineValidation"></div>
        
        <h3>3.3 Планировка помещений</h3>
        
        <p style="margin-bottom: 15px; opacity: 0.9;">Выберите планировку, наиболее похожую на вашу:</p>
        
        <div class="grid">
            <button class="btn btn-secondary" onclick="selectOption('kitchenLayout', 'linear', this)">
                ➖ <strong>Линейная кухня</strong><br>
                <small style="opacity: 0.7;">Все оборудование в линию</small>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('kitchenLayout', 'l-shaped', this)">
                📐 <strong>L-образная кухня</strong><br>
                <small style="opacity: 0.7;">Оборудование буквой L</small>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('kitchenLayout', 'island', this)">
                🏝️ <strong>Островная кухня</strong><br>
                <small style="opacity: 0.7;">Рабочая зона в центре</small>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('kitchenLayout', 'open', this)">
                👁️ <strong>Открытая кухня</strong><br>
                <small style="opacity: 0.7;">Видна из зала</small>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('kitchenLayout', 'separate', this)">
                🏢 <strong>Отдельные цеха</strong><br>
                <small style="opacity: 0.7;">Заготовочный, горячий, холодный</small>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('kitchenLayout', 'custom', this)">
                📋 <strong>Моя планировка отличается</strong><br>
                <small style="opacity: 0.7;">Загружу план помещения</small>
            </button>
        </div>
        
        <div id="layoutUpload" class="hidden" style="margin-top: 20px;">
            <div class="file-upload" onclick="document.getElementById('layoutFile').click()">
                <p style="margin-bottom: 10px;">📁 <strong>Загрузите план помещения</strong></p>
                <p style="opacity: 0.7;">Поддерживаемые форматы: JPG, PNG, PDF</p>
                <p style="opacity: 0.7;">Можно сфотографировать план на телефон</p>
                <input type="file" id="layoutFile" accept=".jpg,.jpeg,.png,.pdf" style="display: none;" onchange="handleLayoutUpload(this)">
            </div>
            <div id="layoutPreview"></div>
        </div>
        
        <h3>3.4 Производственные зоны</h3>
        
        <p style="margin-bottom: 15px; opacity: 0.9;">Какие зоны есть в вашей кухне:</p>
        
        <div class="grid">
            <button class="btn btn-secondary" onclick="toggleOption('productionZones', 'prep', this)">
                🥒 Заготовочная зона<br>
                <small style="opacity: 0.7;">Первичная обработка сырья</small>
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('productionZones', 'hot', this)">
                🔥 Горячий цех<br>
                <small style="opacity: 0.7;">Плиты, духовки, фритюр</small>
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('productionZones', 'cold', this)">
                🥗 Холодный цех<br>
                <small style="opacity: 0.7;">Салаты, закуски, десерты</small>
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('productionZones', 'pastry', this)">
                🧁 Кондитерский цех
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('productionZones', 'bakery', this)">
                🥖 Пекарский цех
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('productionZones', 'dishWashDining', this)">
                🍽️ Моечная столовой посуды
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('productionZones', 'dishWashKitchen', this)">
                🍳 Моечная кухонной посуды
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('productionZones', 'dryStorage', this)">
                📦 Склад сухих продуктов
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('productionZones', 'coldStorage', this)">
                ❄️ Холодильная/морозильная камера
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('productionZones', 'restroom', this)">
                🚻 Санузел для персонала
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('productionZones', 'staffArea', this)">
                👔 Отдельная зона для персонала<br>
                <small style="opacity: 0.7;">(раздевалка, душ)</small>
            </button>
        </div>
        
        <div id="zonesValidation"></div>
        
        <h3>3.5 Использование одноразовой посуды</h3>
        
        <p style="margin-bottom: 15px; opacity: 0.9;">Используете ли одноразовую посуду:</p>
        
        <div class="grid">
            <button class="btn btn-secondary" onclick="selectOption('dishwareType', 'reusable', this)">
                🍽️ <strong>Только многоразовая посуда</strong>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('dishwareType', 'disposable', this)">
                🥤 <strong>Только одноразовая посуда</strong>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('dishwareType', 'mixed', this)">
                🔄 <strong>Смешанно</strong><br>
                <small style="opacity: 0.7;">В зале многоразовая, на вынос одноразовая</small>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('dishwareType', 'choice', this)">
                ✅ <strong>Выбор предоставляется клиенту</strong>
            </button>
        </div>
        
        <div id="dishwareHints"></div>
    `;
}

// Умные подсказки для типов производства
function updateProductionTypeHints(type) {
    const hintsContainer = document.getElementById('productionTypeHints');
    if (!hintsContainer) return;
    
    const hints = {
        'semi': {
            type: 'hint',
            message: 'Отлично! Это существенно упростит вашу систему ХАССП — многие этапы производства исключаются'
        },
        'full': {
            type: 'hint',
            message: 'Добавим все этапы: от приемки сырья до подачи готовых блюд. Система будет более детальной'
        },
        'ready': {
            type: 'hint',
            message: 'Сосредоточимся на процедурах приемки, хранения и реализации готовой продукции'
        }
    };
    
    if (hints[type]) {
        hintsContainer.innerHTML = `
            <div class="${hints[type].type}">
                💡 <strong>Умная подсказка:</strong> ${hints[type].message}
            </div>
        `;
    } else {
        hintsContainer.innerHTML = '';
    }
}

// Подсказки для специализации кухни
function updateCuisineHints(specializations) {
    const hintsContainer = document.getElementById('cuisineHints');
    if (!hintsContainer) return;
    
    let hints = [];
    
    if (specializations.includes('asian')) {
        hints.push('Добавим процедуры для сырой рыбы (суши), соевых соусов и специфических ингредиентов');
    }
    
    if (specializations.includes('children')) {
        hints.push('Усилим санитарные требования и добавим контроль аллергенов');
    }
    
    if (specializations.includes('vegan')) {
        hints.push('Добавим процедуры предотвращения перекрестного загрязнения с животными продуктами');
    }
    
    if (specializations.includes('diet')) {
        hints.push('Усилим контроль калорийности и пищевой ценности блюд');
    }
    
    if (hints.length > 0) {
        hintsContainer.innerHTML = hints.map(hint => 
            `<div class="hint">💡 <strong>Умная подсказка:</strong> ${hint}</div>`
        ).join('');
    } else {
        hintsContainer.innerHTML = '';
    }
}

// Валидация количества специализаций
function validateCuisineCount() {
    const validationContainer = document.getElementById('cuisineValidation');
    if (!validationContainer) return;
    
    const specializations = formData.cuisineSpecialization || [];
    
    if (specializations.length > 3) {
        validationContainer.innerHTML = `
            <div class="warning">
                ⚠️ Рекомендуем выбрать не более 3-х основных направлений для более точной настройки ХАССП
            </div>
        `;
    } else {
        validationContainer.innerHTML = '';
    }
}

// Валидация производственных зон
function validateProductionZones() {
    const validationContainer = document.getElementById('zonesValidation');
    if (!validationContainer) return;
    
    const zones = formData.productionZones || [];
    let warnings = [];
    
    // Проверка обязательных зон
    if (!zones.includes('restroom')) {
        warnings.push({
            type: 'error',
            message: '⚠️ Санузел для персонала обязателен по СанПиН. Если его нет, это серьезное нарушение'
        });
    }
    
    // Проверка логических несоответствий
    if (zones.includes('bakery') && formData.businessType === 'bar') {
        warnings.push({
            type: 'warning',
            message: '🤔 Обычно бары не имеют пекарского цеха. Возможно, это кафе-бар или ресторан?'
        });
    }
    
    if (formData.dishwareType === 'reusable' && !zones.includes('dishWashDining')) {
        warnings.push({
            type: 'warning',
            message: '⚠️ При использовании многоразовой посуды необходима моечная для столовой посуды'
        });
    }
    
    // Отображение предупреждений
    validationContainer.innerHTML = warnings.map(warning => 
        `<div class="${warning.type}">${warning.message}</div>`
    ).join('');
}

// Подсказки для типов посуды
function updateDishwareHints(type) {
    const hintsContainer = document.getElementById('dishwareHints');
    if (!hintsContainer) return;
    
    const hints = {
        'disposable': {
            type: 'hint',
            message: 'Упростим процедуры мойки посуды и сосредоточимся на контроле качества упаковки'
        },
        'mixed': {
            type: 'hint',
            message: 'Добавим процедуры для обоих типов посуды и их раздельного хранения'
        }
    };
    
    if (hints[type]) {
        hintsContainer.innerHTML = `
            <div class="${hints[type].type}">
                💡 <strong>Умная подсказка:</strong> ${hints[type].message}
            </div>
        `;
    } else {
        hintsContainer.innerHTML = '';
    }
}

// Обработка загрузки планов помещений
function handleLayoutUpload(input) {
    const file = input.files[0];
    if (!file) return;
    
    const previewContainer = document.getElementById('layoutPreview');
    if (!previewContainer) return;
    
    // Проверка типа файла
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
    if (!allowedTypes.includes(file.type)) {
        previewContainer.innerHTML = `
            <div class="error">
                ⚠️ Неподдерживаемый формат файла. Используйте JPG, PNG или PDF
            </div>
        `;
        return;
    }
    
    // Проверка размера файла (максимум 10MB)
    if (file.size > 10 * 1024 * 1024) {
        previewContainer.innerHTML = `
            <div class="error">
                ⚠️ Файл слишком большой. Максимальный размер: 10MB
            </div>
        `;
        return;
    }
    
    // Сохранение файла в formData
    formData.layoutFile = {
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified
    };
    
    // Показ превью
    if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewContainer.innerHTML = `
                <div style="margin-top: 15px; text-align: center;">
                    <p style="margin-bottom: 10px;">✅ Файл загружен: ${file.name}</p>
                    <img src="${e.target.result}" style="max-width: 100%; max-height: 200px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.3);">
                    <p style="margin-top: 10px; opacity: 0.7; font-size: 0.9rem;">
                        🤖 AI попытается распознать зоны автоматически. Вы сможете откорректировать распознанное.
                    </p>
                </div>
            `;
        };
        reader.readAsDataURL(file);
    } else {
        previewContainer.innerHTML = `
            <div style="margin-top: 15px; text-align: center;">
                <p style="margin-bottom: 10px;">✅ PDF файл загружен: ${file.name}</p>
                <p style="opacity: 0.7; font-size: 0.9rem;">
                    🤖 AI попытается распознать зоны автоматически. Вы сможете откорректировать распознанное.
                </p>
            </div>
        `;
    }
}

// Валидация для Блока 3
function validateStep3() {
    const errors = [];
    
    // Проверка обязательных выборов
    if (!formData.productionType) {
        errors.push('Выберите тип производства');
    }
    
    if (!formData.cuisineSpecialization || formData.cuisineSpecialization.length === 0) {
        errors.push('Выберите хотя бы одну специализацию кухни');
    }
    
    if (!formData.kitchenLayout) {
        errors.push('Выберите планировку помещений');
    }
    
    if (!formData.productionZones || formData.productionZones.length === 0) {
        errors.push('Выберите производственные зоны');
    }
    
    if (!formData.dishwareType) {
        errors.push('Укажите тип используемой посуды');
    }
    
    // Проверка критических зон
    const zones = formData.productionZones || [];
    if (!zones.includes('restroom')) {
        errors.push('Санузел для персонала обязателен по СанПиН');
    }
    
    // Проверка логических связей
    if (formData.dishwareType === 'reusable' && !zones.includes('dishWashDining')) {
        errors.push('При использовании многоразовой посуды необходима моечная для столовой посуды');
    }
    
    return errors;
}

// Обработчики событий
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-secondary')) {
            setTimeout(() => {
                // Показ/скрытие загрузки плана
                if (formData.kitchenLayout === 'custom') {
                    const uploadDiv = document.getElementById('layoutUpload');
                    if (uploadDiv) uploadDiv.classList.remove('hidden');
                } else {
                    const uploadDiv = document.getElementById('layoutUpload');
                    if (uploadDiv) uploadDiv.classList.add('hidden');
                }
                
                // Обновление подсказок
                if (formData.productionType) {
                    updateProductionTypeHints(formData.productionType);
                }
                
                if (formData.cuisineSpecialization) {
                    updateCuisineHints(formData.cuisineSpecialization);
                    validateCuisineCount();
                }
                
                if (formData.productionZones) {
                    validateProductionZones();
                }
                
                if (formData.dishwareType) {
                    updateDishwareHints(formData.dishwareType);
                }
            }, 100);
        }
    });
});

// Экспорт функций
window.handleLayoutUpload = handleLayoutUpload;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        getStep3Content, 
        validateStep3,
        updateProductionTypeHints,
        updateCuisineHints,
        validateCuisineCount,
        validateProductionZones,
        updateDishwareHints,
        handleLayoutUpload
    };
}

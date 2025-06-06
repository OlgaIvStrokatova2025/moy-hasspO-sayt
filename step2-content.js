// step2-content.js - Блок 2: Характеристика заведения

function getStep2Content() {
    return `
        <h3>2.1 Тип и формат заведения</h3>
        
        <p style="margin-bottom: 15px; opacity: 0.9;">Выберите основной тип вашего заведения:</p>
        
        <div class="grid">
            <button class="btn btn-secondary" onclick="selectOption('businessType', 'restaurant', this)">
                🍽️ <strong>Ресторан</strong><br>
                <small style="opacity: 0.7;">Полное обслуживание, широкая кухня</small>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('businessType', 'cafe', this)">
                ☕ <strong>Кафе</strong><br>
                <small style="opacity: 0.7;">Ограниченное меню, быстрое обслуживание</small>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('businessType', 'canteen', this)">
                🍛 <strong>Столовая</strong><br>
                <small style="opacity: 0.7;">Комплексные обеды, самообслуживание</small>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('businessType', 'coffeehouse', this)">
                ☕ <strong>Кофейня</strong><br>
                <small style="opacity: 0.7;">Кофе, легкие закуски, десерты</small>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('businessType', 'bar', this)">
                🍸 <strong>Бар</strong><br>
                <small style="opacity: 0.7;">Напитки + легкие закуски</small>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('businessType', 'fastfood', this)">
                🍔 <strong>Фастфуд</strong><br>
                <small style="opacity: 0.7;">Быстрое питание, стандартизированное меню</small>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('businessType', 'delivery', this)">
                🚗 <strong>Только доставка</strong><br>
                <small style="opacity: 0.7;">Темная кухня, без зала</small>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('businessType', 'bakery', this)">
                🥐 <strong>Кондитерская/Пекарня</strong><br>
                <small style="opacity: 0.7;">Выпечка, кондитерские изделия</small>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('businessType', 'other', this)">
                ❓ <strong>Другое</strong><br>
                <small style="opacity: 0.7;">Укажите в комментариях</small>
            </button>
        </div>
        
        <div id="businessTypeHints"></div>
        
        <h3>2.2 Размер заведения</h3>
        
        <div class="grid-2">
            <div>
                <label style="display: block; margin-bottom: 8px; opacity: 0.9;">Посадочных мест</label>
                <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));">
                    <button class="btn btn-secondary" onclick="selectOption('seatingCapacity', 'none', this)">
                        Без мест/<br>На вынос
                    </button>
                    <button class="btn btn-secondary" onclick="selectOption('seatingCapacity', 'up20', this)">
                        До 20
                    </button>
                    <button class="btn btn-secondary" onclick="selectOption('seatingCapacity', '21-50', this)">
                        21-50
                    </button>
                    <button class="btn btn-secondary" onclick="selectOption('seatingCapacity', '51-100', this)">
                        51-100
                    </button>
                    <button class="btn btn-secondary" onclick="selectOption('seatingCapacity', '101-200', this)">
                        101-200
                    </button>
                    <button class="btn btn-secondary" onclick="selectOption('seatingCapacity', '200+', this)">
                        200+
                    </button>
                </div>
                <div class="hint" style="margin-top: 10px;">
                    💬 Влияет на объем документации и количество процедур
                </div>
            </div>
            
            <div>
                <label style="display: block; margin-bottom: 8px; opacity: 0.9;">Площадь кухни</label>
                <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));">
                    <button class="btn btn-secondary" onclick="selectOption('kitchenArea', 'up20', this)">
                        До 20 м²
                    </button>
                    <button class="btn btn-secondary" onclick="selectOption('kitchenArea', '21-50', this)">
                        21-50 м²
                    </button>
                    <button class="btn btn-secondary" onclick="selectOption('kitchenArea', '51-100', this)">
                        51-100 м²
                    </button>
                    <button class="btn btn-secondary" onclick="selectOption('kitchenArea', '100+', this)">
                        100+ м²
                    </button>
                </div>
            </div>
        </div>
        
        <div>
            <label style="display: block; margin-bottom: 8px; opacity: 0.9;">Персонал на кухне</label>
            <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));">
                <button class="btn btn-secondary" onclick="selectOption('staffCount', '1-2', this)">
                    1-2 чел.
                </button>
                <button class="btn btn-secondary" onclick="selectOption('staffCount', '3-5', this)">
                    3-5 чел.
                </button>
                <button class="btn btn-secondary" onclick="selectOption('staffCount', '6-10', this)">
                    6-10 чел.
                </button>
                <button class="btn btn-secondary" onclick="selectOption('staffCount', '11+', this)">
                    11+ чел.
                </button>
            </div>
        </div>
        
        <div id="sizeValidation"></div>
        
        <h3>2.3 Режим работы</h3>
        
        <div class="grid-2">
            <div>
                <label style="display: block; margin-bottom: 8px; opacity: 0.9;">График работы</label>
                <div class="grid">
                    <button class="btn btn-secondary" onclick="selectOption('workSchedule', 'breakfast-lunch', this)">
                        Завтрак+обед<br>
                        <small style="opacity: 0.7;">(6:00-16:00)</small>
                    </button>
                    <button class="btn btn-secondary" onclick="selectOption('workSchedule', 'lunch-dinner', this)">
                        Обед+ужин<br>
                        <small style="opacity: 0.7;">(11:00-23:00)</small>
                    </button>
                    <button class="btn btn-secondary" onclick="selectOption('workSchedule', 'full-day', this)">
                        Полный день<br>
                        <small style="opacity: 0.7;">(8:00-22:00)</small>
                    </button>
                    <button class="btn btn-secondary" onclick="selectOption('workSchedule', '24-7', this)">
                        Круглосуточно<br>
                        <small style="opacity: 0.7;">(24/7)</small>
                    </button>
                    <button class="btn btn-secondary" onclick="selectOption('workSchedule', 'lunch-only', this)">
                        Только обед<br>
                        <small style="opacity: 0.7;">(12:00-16:00)</small>
                    </button>
                    <button class="btn btn-secondary" onclick="selectOption('workSchedule', 'dinner-only', this)">
                        Только ужин<br>
                        <small style="opacity: 0.7;">(18:00-23:00)</small>
                    </button>
                </div>
                <div style="margin-top: 10px;">
                    <input type="text" id="customSchedule" class="input" placeholder="Другой режим работы (укажите время)">
                </div>
                <div class="hint" style="margin-top: 10px;">
                    💬 Влияет на график контрольных мероприятий
                </div>
            </div>
            
            <div>
                <label style="display: block; margin-bottom: 8px; opacity: 0.9;">Дни работы</label>
                <div class="grid">
                    <button class="btn btn-secondary" onclick="selectOption('workDays', '7days', this)">
                        7 дней в неделю
                    </button>
                    <button class="btn btn-secondary" onclick="selectOption('workDays', '6days-mon', this)">
                        6 дней<br>
                        <small style="opacity: 0.7;">(выходной понедельник)</small>
                    </button>
                    <button class="btn btn-secondary" onclick="selectOption('workDays', '5days', this)">
                        5 дней<br>
                        <small style="opacity: 0.7;">(выходные сб-вс)</small>
                    </button>
                    <button class="btn btn-secondary" onclick="selectOption('workDays', 'other', this)">
                        Другой график
                    </button>
                </div>
            </div>
        </div>
        
        <div id="scheduleHints"></div>
        
        <h3>2.4 Дополнительные услуги</h3>
        
        <p style="margin-bottom: 15px; opacity: 0.9;">Отметьте все подходящие варианты:</p>
        
        <div class="grid">
            <button class="btn btn-secondary" onclick="toggleOption('additionalServices', 'ownDelivery', this)">
                🚚 Доставка собственными силами
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('additionalServices', 'aggregators', this)">
                📱 Доставка через агрегаторы<br>
                <small style="opacity: 0.7;">(Яндекс.Еда, Delivery Club)</small>
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('additionalServices', 'banquets', this)">
                🎉 Банкетное обслуживание
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('additionalServices', 'childEvents', this)">
                🎈 Детские мероприятия
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('additionalServices', 'catering', this)">
                🎪 Кейтеринг<br>
                <small style="opacity: 0.7;">(выездное обслуживание)</small>
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('additionalServices', 'alcohol', this)">
                🍷 Продажа алкогольных напитков
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('additionalServices', 'hookah', this)">
                💨 Кальяны/курительные смеси
            </button>
        </div>
        
        <div id="servicesHints"></div>
    `;
}

// Умные подсказки для типов заведений
function updateBusinessTypeHints(type) {
    const hintsContainer = document.getElementById('businessTypeHints');
    if (!hintsContainer) return;
    
    const hints = {
        'coffeehouse': {
            type: 'hint',
            message: 'Для кофеен добавим контроль качества кофе, молочных продуктов и процедуры для кофемашин'
        },
        'delivery': {
            type: 'hint', 
            message: 'Добавим требования к упаковке, транспортировке и контролю температуры при доставке'
        },
        'bar': {
            type: 'hint',
            message: 'Добавим процедуры проверки лицензий поставщиков алкоголя и контроль качества напитков'
        },
        'bakery': {
            type: 'hint',
            message: 'Сосредоточимся на процедурах контроля качества сырья для выпечки и температурных режимах'
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

// Валидация логики размеров
function validateSizeLogic() {
    const validationContainer = document.getElementById('sizeValidation');
    if (!validationContainer) return;
    
    const businessType = formData.businessType;
    const seatingCapacity = formData.seatingCapacity;
    const kitchenArea = formData.kitchenArea;
    
    let warnings = [];
    
    // Проверка соответствия типа заведения и количества мест
    if (businessType === 'restaurant' && seatingCapacity === 'none') {
        warnings.push({
            type: 'warning',
            message: '🤔 Вы уверены? Рестораны обычно имеют зал для гостей. Возможно, это кейтеринг или темная кухня?'
        });
    }
    
    // Проверка соответствия мест и площади кухни
    if (seatingCapacity === '200+' && kitchenArea === 'up20') {
        warnings.push({
            type: 'error',
            message: '⚠️ Для 200+ гостей кухня кажется маленькой. Проверьте площадь кухни'
        });
    }
    
    if (seatingCapacity === '101-200' && kitchenArea === 'up20') {
        warnings.push({
            type: 'warning',
            message: '⚠️ Для такого количества гостей рекомендуется кухня больше 20 м²'
        });
    }
    
    // Отображение предупреждений
    validationContainer.innerHTML = warnings.map(warning => 
        `<div class="${warning.type}">${warning.message}</div>`
    ).join('');
}

// Подсказки для режима работы
function updateScheduleHints(schedule) {
    const hintsContainer = document.getElementById('scheduleHints');
    if (!hintsContainer) return;
    
    if (schedule === '24-7') {
        hintsContainer.innerHTML = `
            <div class="hint">
                💡 <strong>Умная подсказка:</strong> Для круглосуточной работы добавим процедуры контроля в ночное время и смены персонала
            </div>
        `;
    } else {
        hintsContainer.innerHTML = '';
    }
}

// Подсказки для дополнительных услуг
function updateServicesHints(services) {
    const hintsContainer = document.getElementById('servicesHints');
    if (!hintsContainer) return;
    
    let hints = [];
    
    if (services.includes('alcohol')) {
        hints.push('Добавим процедуры проверки лицензий поставщиков алкоголя и контроль качества напитков');
    }
    
    if (services.includes('childEvents')) {
        hints.push('Усилим требования к гигиене и добавим процедуры для детского питания');
    }
    
    if (services.includes('catering')) {
        hints.push('Добавим процедуры транспортировки и контроля температуры вне заведения');
    }
    
    if (services.includes('ownDelivery')) {
        hints.push('Добавим контроль температурных режимов при доставке и требования к транспорту');
    }
    
    if (hints.length > 0) {
        hintsContainer.innerHTML = hints.map(hint => 
            `<div class="hint">💡 <strong>Умная подсказка:</strong> ${hint}</div>`
        ).join('');
    } else {
        hintsContainer.innerHTML = '';
    }
}

// Валидация для Блока 2
function validateStep2() {
    const errors = [];
    
    // Проверка обязательных выборов
    if (!formData.businessType) {
        errors.push('Выберите тип заведения');
    }
    
    if (!formData.seatingCapacity) {
        errors.push('Укажите количество посадочных мест');
    }
    
    if (!formData.kitchenArea) {
        errors.push('Укажите площадь кухни');
    }
    
    if (!formData.staffCount) {
        errors.push('Укажите количество персонала на кухне');
    }
    
    if (!formData.workSchedule) {
        errors.push('Выберите график работы');
    }
    
    if (!formData.workDays) {
        errors.push('Выберите дни работы');
    }
    
    // Логическая валидация
    if (formData.businessType === 'restaurant' && formData.seatingCapacity === 'none') {
        errors.push('Ресторан должен иметь посадочные места');
    }
    
    if (formData.seatingCapacity === '200+' && formData.kitchenArea === 'up20') {
        errors.push('Площадь кухни не соответствует количеству посадочных мест');
    }
    
    return errors;
}

// Обработчики событий для умных подсказок
document.addEventListener('DOMContentLoaded', function() {
    // Отслеживание изменений для валидации размеров
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-secondary')) {
            setTimeout(() => {
                validateSizeLogic();
                
                // Обновление подсказок
                if (formData.businessType) {
                    updateBusinessTypeHints(formData.businessType);
                }
                
                if (formData.workSchedule) {
                    updateScheduleHints(formData.workSchedule);
                }
                
                if (formData.additionalServices) {
                    updateServicesHints(formData.additionalServices);
                }
            }, 100);
        }
    });
});

// Экспорт функций
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        getStep2Content, 
        validateStep2,
        updateBusinessTypeHints,
        validateSizeLogic,
        updateScheduleHints,
        updateServicesHints
    };
}

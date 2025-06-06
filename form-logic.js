// form-logic.js - Основная логика ХАССП Конструктора

// Конфигурация шагов
const STEPS_CONFIG = [
    {
        id: 1,
        title: "Блок 1: Основные данные предприятия",
        subtitle: "Время заполнения: ~5 минут",
        fields: ['businessName', 'legalForm', 'inn', 'phone', 'legalAddress', 'directorName', 'directorPosition', 'businessEmail', 'haccpResponsible']
    },
    {
        id: 2,
        title: "Блок 2: Характеристика заведения",
        subtitle: "Время заполнения: ~10 минут", 
        fields: ['businessType', 'seatingCapacity', 'kitchenArea', 'staffCount', 'workSchedule', 'workDays', 'additionalServices']
    },
    {
        id: 3,
        title: "Блок 3: Кухня и технологические процессы",
        subtitle: "Время заполнения: ~10 минут",
        fields: ['productionType', 'cuisineSpecialization', 'kitchenLayout', 'productionZones', 'dishwareType']
    },
    {
        id: 4,
        title: "Блок 4: Оборудование и инфраструктура", 
        subtitle: "Время заполнения: ~10 минут",
        fields: ['heatingEquipment', 'refrigerationEquipment', 'mechanicalEquipment', 'washingEquipment', 'additionalEquipment', 'equipmentMaintenance', 'controlInstruments', 'utilities']
    },
    {
        id: 5,
        title: "Блок 5: Уборка и санитария",
        subtitle: "Время заполнения: ~5 минут",
        fields: ['cleaningOrganization', 'cleaningSupplies', 'cleaningInventory']
    },
    {
        id: 6,
        title: "Блок 6: Меню и технологические карты",
        subtitle: "Время заполнения: ~10 минут", 
        fields: ['technicalCards', 'menuCategories', 'cookingFeatures']
    },
    {
        id: 7,
        title: "Блок 7: Поставщики и логистика",
        subtitle: "Время заполнения: ~5 минут",
        fields: ['suppliersCount', 'deliverySchedule', 'goodsAcceptance', 'documentation']
    },
    {
        id: 8,
        title: "Блок 8: Персонал",
        subtitle: "Время заполнения: ~5 минут",
        fields: ['staffStructure', 'medicalBooks', 'staffTraining', 'staffTurnover']
    }
];

// Глобальные переменные
let currentStep = 1;
let formData = {};
let validationErrors = {};

// Инициализация модуля
function initFormLogic() {
    console.log('Инициализация логики формы...');
    
    // Попытка загрузить сохраненные данные
    loadSavedData();
    
    // Установка обработчиков событий
    setupFormEventListeners();
}

function setupFormEventListeners() {
    // Автосохранение при изменении полей
    document.addEventListener('input', debounce(autoSaveFormData, 1000));
    document.addEventListener('change', autoSaveFormData);
    
    // Валидация в реальном времени
    document.addEventListener('blur', validateFieldOnBlur, true);
}

// Основные функции навигации
function startForm() {
    document.getElementById('welcome').classList.add('hidden');
    document.getElementById('form').classList.remove('hidden');
    
    // Проверяем, есть ли сохраненные данные
    if (Object.keys(formData).length > 0) {
        showRestoreDataModal();
    } else {
        showStep(1);
    }
}

function showStep(step) {
    if (step < 1 || step > 8) return;
    
    currentStep = step;
    updateStepIndicator();
    updateProgressBar();
    updateStepHeader();
    loadStepContent(step);
    updateNavigationButtons();
    
    // Сохраняем текущий шаг в истории браузера
    history.pushState({step: step}, '', `#step-${step}`);
    
    // Скроллим к началу формы
    document.querySelector('.card').scrollIntoView({behavior: 'smooth'});
}

function nextStep() {
    // Сохраняем данные текущего шага
    saveCurrentStepData();
    
    // Валидируем текущий шаг
    if (!validateCurrentStep()) {
        showValidationErrors();
        return;
    }
    
    if (currentStep < 8) {
        showStep(currentStep + 1);
    } else {
        // Финальная валидация всех данных
        if (validateAllSteps()) {
            generateDocuments();
        } else {
            showNotification('Пожалуйста, исправьте ошибки в форме', 'error');
        }
    }
}

function prevStep() {
    if (currentStep > 1) {
        saveCurrentStepData();
        showStep(currentStep - 1);
    }
}

// Обновление интерфейса
function updateStepIndicator() {
    for (let i = 1; i <= 8; i++) {
        const stepEl = document.getElementById(`step-${i}`);
        if (!stepEl) continue;
        
        stepEl.classList.remove('active', 'completed');
        
        if (i < currentStep) {
            stepEl.classList.add('completed');
        } else if (i === currentStep) {
            stepEl.classList.add('active');
        }
    }
}

function updateProgressBar() {
    const progress = (currentStep / 8) * 100;
    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
        progressFill.style.width = progress + '%';
    }
}

function updateStepHeader() {
    const stepConfig = STEPS_CONFIG[currentStep - 1];
    const titleEl = document.getElementById('stepTitle');
    const subtitleEl = document.getElementById('stepSubtitle');
    
    if (titleEl) titleEl.textContent = stepConfig.title;
    if (subtitleEl) subtitleEl.textContent = stepConfig.subtitle;
}

function updateNavigationButtons() {
    const backBtn = document.getElementById('backBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (backBtn) {
        backBtn.style.display = currentStep === 1 ? 'none' : 'block';
    }
    
    if (nextBtn) {
        nextBtn.textContent = currentStep === 8 ? '🎯 Создать документы ХАССП' : 'Далее →';
    }
}

// Работа с данными формы
function saveCurrentStepData() {
    const stepContainer = document.getElementById('stepContent');
    if (!stepContainer) return;
    
    // Сохраняем все поля ввода
    const inputs = stepContainer.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        if (input.type === 'checkbox') {
            formData[input.id] = input.checked;
        } else if (input.type === 'radio') {
            if (input.checked) {
                formData[input.name] = input.value;
            }
        } else {
            formData[input.id] = input.value;
        }
    });
    
    // Сохраняем активные кнопки выбора
    const activeButtons = stepContainer.querySelectorAll('.btn-secondary.active');
    activeButtons.forEach(button => {
        const fieldName = button.getAttribute('data-field');
        const value = button.getAttribute('data-value');
        if (fieldName && value) {
            if (button.getAttribute('data-multiple') === 'true') {
                if (!formData[fieldName]) formData[fieldName] = [];
                if (!formData[fieldName].includes(value)) {
                    formData[fieldName].push(value);
                }
            } else {
                formData[fieldName] = value;
            }
        }
    });
    
    console.log('Данные шага сохранены:', formData);
}

function restoreStepData(step) {
    const stepContainer = document.getElementById('stepContent');
    if (!stepContainer) return;
    
    // Восстанавливаем значения полей
    const inputs = stepContainer.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        if (formData[input.id] !== undefined) {
            if (input.type === 'checkbox') {
                input.checked = formData[input.id];
            } else if (input.type === 'radio') {
                input.checked = formData[input.name] === input.value;
            } else {
                input.value = formData[input.id];
            }
        }
    });
    
    // Восстанавливаем активные кнопки
    const buttons = stepContainer.querySelectorAll('.btn-secondary[data-field]');
    buttons.forEach(button => {
        const fieldName = button.getAttribute('data-field');
        const value = button.getAttribute('data-value');
        const isMultiple = button.getAttribute('data-multiple') === 'true';
        
        if (fieldName && value && formData[fieldName] !== undefined) {
            if (isMultiple) {
                if (Array.isArray(formData[fieldName]) && formData[fieldName].includes(value)) {
                    button.classList.add('active');
                }
            } else {
                if (formData[fieldName] === value) {
                    button.classList.add('active');
                }
            }
        }
    });
}

function autoSaveFormData() {
    saveCurrentStepData();
    try {
        localStorage.setItem('haccpFormData', JSON.stringify(formData));
        localStorage.setItem('haccpCurrentStep', currentStep.toString());
    } catch (e) {
        console.warn('Не удалось автосохранить данные:', e);
    }
}

function loadSavedData() {
    try {
        const savedData = localStorage.getItem('haccpFormData');
        const savedStep = localStorage.getItem('haccpCurrentStep');
        
        if (savedData) {
            formData = JSON.parse(savedData);
            console.log('Загружены сохраненные данные:', formData);
        }
        
        if (savedStep) {
            currentStep = parseInt(savedStep);
        }
        
        return Object.keys(formData).length > 0;
    } catch (e) {
        console.warn('Не удалось загрузить сохраненные данные:', e);
        return false;
    }
}

// Функции для работы с опциями
function selectOption(field, value, button) {
    // Убираем активный класс у всех кнопок в группе
    const group = button.parentElement;
    group.querySelectorAll('.btn-secondary').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Добавляем активный класс к выбранной кнопке
    button.classList.add('active');
    
    // Сохраняем значение
    formData[field] = value;
    
    // Устанавливаем атрибуты для восстановления состояния
    button.setAttribute('data-field', field);
    button.setAttribute('data-value', value);
    
    // Запускаем дополнительную логику для определенных полей
    handleSpecialCases(field, value);
    
    // Автосохранение
    autoSaveFormData();
}

function toggleOption(field, value, button) {
    if (!formData[field]) formData[field] = [];
    
    const index = formData[field].indexOf(value);
    if (index > -1) {
        formData[field].splice(index, 1);
        button.classList.remove('active');
    } else {
        formData[field].push(value);
        button.classList.add('active');
    }
    
    // Устанавливаем атрибуты для восстановления состояния
    button.setAttribute('data-field', field);
    button.setAttribute('data-value', value);
    button.setAttribute('data-multiple', 'true');
    
    autoSaveFormData();
}

// Специальная логика для определенных полей
function handleSpecialCases(field, value) {
    switch (field) {
        case 'haccpResponsible':
            const otherResponsibleDiv = document.getElementById('otherResponsible');
            if (otherResponsibleDiv) {
                if (value === 'other') {
                    otherResponsibleDiv.classList.remove('hidden');
                } else {
                    otherResponsibleDiv.classList.add('hidden');
                }
            }
            break;
            
        case 'businessType':
            updateBusinessTypeHints(value);
            break;
            
        case 'productionType':
            updateProductionTypeHints(value);
            break;
    }
}

function updateBusinessTypeHints(type) {
    const hints = {
        'coffeehouse': 'Для кофеен добавим контроль качества кофе, молочных продуктов и процедуры для кофемашин',
        'delivery': 'Добавим требования к упаковке, транспортировке и контролю температуры при доставке',
        'bar': 'Добавим процедуры проверки лицензий поставщиков алкоголя и контроль качества напитков'
    };
    
    if (hints[type]) {
        showHint(hints[type]);
    }
}

function updateProductionTypeHints(type) {
    const hints = {
        'semi': 'Отлично! Это существенно упростит вашу систему ХАССП — многие этапы производства исключаются',
        'full': 'Добавим все этапы: от приемки сырья до подачи готовых блюд. Система будет более детальной',
        'ready': 'Сосредоточимся на процедурах приемки, хранения и реализации готовой продукции'
    };
    
    if (hints[type]) {
        showHint(hints[type]);
    }
}

function showHint(message) {
    const hintEl = document.createElement('div');
    hintEl.className = 'hint';
    hintEl.innerHTML = `💡 <strong>Подсказка:</strong> ${message}`;
    
    const stepContent = document.getElementById('stepContent');
    if (stepContent) {
        stepContent.appendChild(hintEl);
        
        // Автоматически убираем подсказку через 10 секунд
        setTimeout(() => {
            if (hintEl.parentElement) {
                hintEl.remove();
            }
        }, 10000);
    }
}

// Функции для работы с адресами
function toggleSameAddress() {
    const checkbox = document.getElementById('sameAddress');
    const actualAddressInput = document.getElementById('actualAddress');
    const legalAddressInput = document.getElementById('legalAddress');
    
    if (checkbox && checkbox.checked && legalAddressInput) {
        if (actualAddressInput) {
            actualAddressInput.value = legalAddressInput.value;
            actualAddressInput.disabled = true;
        }
    } else if (actualAddressInput) {
        actualAddressInput.disabled = false;
    }
}

// Утилиты
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function showRestoreDataModal() {
    const modalContent = `
        <h3>Восстановить данные?</h3>
        <p>Найдены сохраненные данные предыдущего заполнения формы. Хотите продолжить с того места, где остановились?</p>
        <div style="margin-top: 20px; text-align: center;">
            <button class="btn btn-primary" onclick="continueFromSaved()">Продолжить заполнение</button>
            <button class="btn btn-secondary" onclick="startFresh()">Начать заново</button>
        </div>
    `;
    showModal(modalContent);
}

function continueFromSaved() {
    closeModal();
    showStep(currentStep);
}

function startFresh() {
    formData = {};
    currentStep = 1;
    localStorage.removeItem('haccpFormData');
    localStorage.removeItem('haccpCurrentStep');
    closeModal();
    showStep(1);
}

// Экспорт функций для глобального использования
window.startForm = startForm;
window.nextStep = nextStep;
window.prevStep = prevStep;
window.selectOption = selectOption;
window.toggleOption = toggleOption;
window.toggleSameAddress = toggleSameAddress;
window.continueFromSaved = continueFromSaved;
window.startFresh = startFresh;
function loadStepContent(step) {
    const stepContentEl = document.getElementById('stepContent');
    if (!stepContentEl) return;
    
    let content = '';
    
    // Вызываем соответствующую функцию генерации контента
    switch(step) {
        case 1:
            content = typeof generateStep1Content === 'function' ? generateStep1Content() : '<p>Контент загружается...</p>';
            break;
        case 2:
            content = typeof generateStep2Content === 'function' ? generateStep2Content() : '<p>Контент загружается...</p>';
            break;
        case 3:
            content = typeof generateStep3Content === 'function' ? generateStep3Content() : '<p>Контент загружается...</p>';
            break;
        case 4:
            content = typeof generateStep4Content === 'function' ? generateStep4Content() : '<p>Контент загружается...</p>';
            break;
        case 5:
            content = typeof generateStep5Content === 'function' ? generateStep5Content() : '<p>Контент загружается...</p>';
            break;
        case 6:
            content = typeof generateStep6Content === 'function' ? generateStep6Content() : '<p>Контент загружается...</p>';
            break;
        case 7:
            content = typeof generateStep7Content === 'function' ? generateStep7Content() : '<p>Контент загружается...</p>';
            break;
        case 8:
            content = typeof generateStep8Content === 'function' ? generateStep8Content() : '<p>Контент загружается...</p>';
            break;
        default:
            content = '<p>Неизвестный шаг</p>';
    }
    
    stepContentEl.innerHTML = content;
    
    // Восстанавливаем данные после загрузки контента
    setTimeout(() => restoreStepData(step), 100);
}

// step5-content.js - Блок 5: Уборка и санитария

function generateStep5Content() {
    return `
        <h3>5.1 Организация уборки</h3>
        
        <p style="margin-bottom: 15px; opacity: 0.9;">Кто выполняет уборку помещений:</p>
        
        <div class="grid">
            <button class="btn btn-secondary" onclick="selectOption('cleaningOrganization', 'staff', this)">
                👥 <strong>Штатные уборщики</strong>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('cleaningOrganization', 'company', this)">
                🏢 <strong>Клининговая компания</strong><br>
                <small style="opacity: 0.7;">по договору</small>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('cleaningOrganization', 'cooks', this)">
                👨‍🍳 <strong>Повара убирают сами</strong>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('cleaningOrganization', 'mixed', this)">
                🔄 <strong>Смешанная система</strong><br>
                <small style="opacity: 0.7;">кухню повара, зал - уборщики</small>
            </button>
        </div>
        
        <div id="cleaningHints"></div>
        
        <h3>5.2 Моющие и дезинфицирующие средства</h3>
        
        <div class="grid-2">
            <div>
                <label style="display: block; margin-bottom: 8px; opacity: 0.9;">Кто обеспечивает химией:</label>
                <div class="grid">
                    <button class="btn btn-secondary" onclick="selectOption('cleaningSupplier', 'self', this)">
                        🛒 Покупаем сами<br>
                        <small style="opacity: 0.7;">в магазинах</small>
                    </button>
                    <button class="btn btn-secondary" onclick="selectOption('cleaningSupplier', 'supplier', this)">
                        📋 Поставщик по договору<br>
                        <small style="opacity: 0.7;">с документами соответствия</small>
                    </button>
                    <button class="btn btn-secondary" onclick="selectOption('cleaningSupplier', 'cleaning', this)">
                        🏢 Клининговая компания<br>
                        <small style="opacity: 0.7;">предоставляет</small>
                    </button>
                    <button class="btn btn-secondary" onclick="selectOption('cleaningSupplier', 'folk', this)">
                        🧂 Народные средства<br>
                        <small style="opacity: 0.7;">(сода, уксус и т.д.)</small>
                    </button>
                </div>
            </div>
            
            <div>
                <label style="display: block; margin-bottom: 8px; opacity: 0.9;">Документы на моющие средства:</label>
                <div class="grid">
                    <button class="btn btn-secondary" onclick="selectOption('cleaningDocs', 'full', this)">
                        ✅ Есть сертификаты<br>
                        <small style="opacity: 0.7;">на все используемые средства</small>
                    </button>
                    <button class="btn btn-secondary" onclick="selectOption('cleaningDocs', 'partial', this)">
                        ⚠️ Есть частично
                    </button>
                    <button class="btn btn-secondary" onclick="selectOption('cleaningDocs', 'none', this)">
                        ❌ Нет документов
                    </button>
                    <button class="btn btn-secondary" onclick="selectOption('cleaningDocs', 'unknown', this)">
                        ❓ Не знаю, что нужны<br>
                        <small style="opacity: 0.7;">документы</small>
                    </button>
                </div>
            </div>
        </div>
        
        <div id="cleaningDocsUpload" class="hidden" style="margin-top: 20px;">
            <div class="file-upload" onclick="document.getElementById('cleaningCerts').click()">
                <p style="margin-bottom: 10px;">📁 <strong>Загрузите сертификаты на моющие средства</strong></p>
                <p style="opacity: 0.7;">Поддерживаемые форматы: PDF, JPG, PNG</p>
                <p style="opacity: 0.7;">AI извлечет названия средств и номера сертификатов</p>
                <input type="file" id="cleaningCerts" accept=".pdf,.jpg,.jpeg,.png" multiple style="display: none;" onchange="handleCleaningCertsUpload(this)">
            </div>
            <div id="cleaningCertsPreview"></div>
        </div>
        
        <div id="cleaningSuppliesValidation"></div>
        
        <h3>5.3 Уборочный инвентарь</h3>
        
        <p style="margin-bottom: 15px; opacity: 0.9;">Как организована система уборочного инвентаря:</p>
        
        <div class="grid">
            <button class="btn btn-secondary" onclick="selectOption('cleaningInventory', 'colorCoded', this)">
                🌈 <strong>Есть цветовая маркировка</strong><br>
                <small style="opacity: 0.7;">разные цвета для разных зон</small>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('cleaningInventory', 'universal', this)">
                🔄 <strong>Единый инвентарь</strong><br>
                <small style="opacity: 0.7;">для всех помещений</small>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('cleaningInventory', 'separate', this)">
                🏢 <strong>Отдельный инвентарь</strong><br>
                <small style="opacity: 0.7;">для кухни и зала</small>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('cleaningInventory', 'notConsidered', this)">
                ❓ <strong>Не задумывались об этом</strong>
            </button>
        </div>
        
        <div id="inventoryHints"></div>
        
        <div id="colorCodingScheme" class="hidden" style="margin-top: 20px;">
            <h4 style="color: #fbbf24; margin-bottom: 15px;">Схема цветовой маркировки:</h4>
            <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
                <div style="background: rgba(255,0,0,0.2); padding: 15px; border-radius: 10px; border-left: 4px solid #ef4444;">
                    <strong>🔴 Красный</strong><br>
                    <small>Туалеты, санузлы</small>
                </div>
                <div style="background: rgba(255,255,0,0.2); padding: 15px; border-radius: 10px; border-left: 4px solid #fbbf24;">
                    <strong>🟡 Желтый</strong><br>
                    <small>Кухня, пищевые зоны</small>
                </div>
                <div style="background: rgba(0,255,0,0.2); padding: 15px; border-radius: 10px; border-left: 4px solid #10b981;">
                    <strong>🟢 Зеленый</strong><br>
                    <small>Зал для гостей</small>
                </div>
                <div style="background: rgba(0,0,255,0.2); padding: 15px; border-radius: 10px; border-left: 4px solid #3b82f6;">
                    <strong>🔵 Синий</strong><br>
                    <small>Офисные помещения</small>
                </div>
            </div>
        </div>
    `;
}

// Умные подсказки для организации уборки
function updateCleaningHints(organization) {
    const hintsContainer = document.getElementById('cleaningHints');
    if (!hintsContainer) return;
    
    const hints = {
        'cooks': 'Добавим детальный график уборки в должностные инструкции поваров',
        'company': 'Включим требования к документам клининговой компании и контролю их работы'
    };
    
    if (hints[organization]) {
        hintsContainer.innerHTML = `
            <div class="hint">
                💡 <strong>Умная подсказка:</strong> ${hints[organization]}
            </div>
        `;
    } else {
        hintsContainer.innerHTML = '';
    }
}

// Валидация моющих средств
function validateCleaningSupplies() {
    const validationContainer = document.getElementById('cleaningSuppliesValidation');
    if (!validationContainer) return;
    
    const supplier = formData.cleaningSupplier;
    const docs = formData.cleaningDocs;
    
    let warnings = [];
    
    if (supplier === 'folk') {
        warnings.push({
            type: 'error',
            message: '⚠️ ВНИМАНИЕ! Для пищевых предприятий должны использоваться только сертифицированные моющие средства'
        });
    }
    
    if (docs === 'none') {
        warnings.push({
            type: 'error',
            message: '🚨 Это серьезное нарушение! Все моющие средства должны иметь документы соответствия'
        });
    }
    
    if (docs === 'partial') {
        warnings.push({
            type: 'warning',
            message: '⚠️ Рекомендуем получить сертификаты на все используемые моющие средства'
        });
    }
    
    validationContainer.innerHTML = warnings.map(warning => 
        `<div class="${warning.type}">${warning.message}</div>`
    ).join('');
}

// Подсказки для инвентаря
function updateInventoryHints(inventory) {
    const hintsContainer = document.getElementById('inventoryHints');
    if (!hintsContainer) return;
    
    const hints = {
        'colorCoded': 'Отлично! Это соответствует лучшим практикам. Добавим схему маркировки в документы',
        'notConsidered': 'Рекомендуем внедрить цветовую маркировку для предотвращения перекрестного загрязнения'
    };
    
    if (hints[inventory]) {
        const type = inventory === 'colorCoded' ? 'hint' : 'warning';
        hintsContainer.innerHTML = `
            <div class="${type}">
                💡 <strong>Умная подсказка:</strong> ${hints[inventory]}
            </div>
        `;
    } else {
        hintsContainer.innerHTML = '';
    }
    
    // Показ/скрытие схемы цветовой маркировки
    const schemeDiv = document.getElementById('colorCodingScheme');
    if (schemeDiv) {
        if (inventory === 'colorCoded') {
            schemeDiv.classList.remove('hidden');
        } else {
            schemeDiv.classList.add('hidden');
        }
    }
}

// Обработка загрузки сертификатов
function handleCleaningCertsUpload(input) {
    const files = Array.from(input.files);
    const previewContainer = document.getElementById('cleaningCertsPreview');
    if (!previewContainer) return;
    
    // Проверка файлов
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
    const validFiles = files.filter(file => allowedTypes.includes(file.type));
    
    if (validFiles.length !== files.length) {
        previewContainer.innerHTML = `
            <div class="error">
                ⚠️ Некоторые файлы имеют неподдерживаемый формат. Используйте JPG, PNG или PDF
            </div>
        `;
        return;
    }
    
    // Сохранение файлов в formData
    formData.cleaningCertificates = validFiles.map(file => ({
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified
    }));
    
    // Показ превью
    previewContainer.innerHTML = `
        <div style="margin-top: 15px;">
            <p style="margin-bottom: 10px;">✅ Загружено сертификатов: ${validFiles.length}</p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px;">
                ${validFiles.map(file => `
                    <div style="background: rgba(255,255,255,0.1); padding: 10px; border-radius: 8px;">
                        <div style="font-size: 0.9rem; margin-bottom: 5px;">${file.name}</div>
                        <div style="opacity: 0.7; font-size: 0.8rem;">${(file.size / 1024).toFixed(1)} KB</div>
                    </div>
                `).join('')}
            </div>
            <p style="margin-top: 10px; opacity: 0.7; font-size: 0.9rem;">
                🤖 AI извлечет названия средств и номера сертификатов автоматически
            </p>
        </div>
    `;
}

// Валидация для Блока 5
function validateStep5() {
    const errors = [];
    
    // Проверка обязательных выборов
    if (!formData.cleaningOrganization) {
        errors.push('Выберите организацию уборки');
    }
    
    if (!formData.cleaningSupplier) {
        errors.push('Укажите, кто обеспечивает моющими средствами');
    }
    
    if (!formData.cleaningDocs) {
        errors.push('Укажите наличие документов на моющие средства');
    }
    
    if (!formData.cleaningInventory) {
        errors.push('Укажите организацию уборочного инвентаря');
    }
    
    // Критические проверки
    if (formData.cleaningSupplier === 'folk') {
        errors.push('Народные средства запрещены для пищевых предприятий');
    }
    
    if (formData.cleaningDocs === 'none') {
        errors.push('Документы на моющие средства обязательны');
    }
    
    return errors;
}

// Обработчики событий
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-secondary')) {
            setTimeout(() => {
                // Показ/скрытие загрузки сертификатов
                if (formData.cleaningDocs === 'full') {
                    const uploadDiv = document.getElementById('cleaningDocsUpload');
                    if (uploadDiv) uploadDiv.classList.remove('hidden');
                } else {
                    const uploadDiv = document.getElementById('cleaningDocsUpload');
                    if (uploadDiv) uploadDiv.classList.add('hidden');
                }
                
                // Обновление подсказок
                if (formData.cleaningOrganization) {
                    updateCleaningHints(formData.cleaningOrganization);
                }
                
                if (formData.cleaningSupplier || formData.cleaningDocs) {
                    validateCleaningSupplies();
                }
                
                if (formData.cleaningInventory) {
                    updateInventoryHints(formData.cleaningInventory);
                }
            }, 100);
        }
    });
});

// Экспорт функций
window.handleCleaningCertsUpload = handleCleaningCertsUpload;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        generateStep5Content, 
        validateStep5,
        updateCleaningHints,
        validateCleaningSupplies,
        updateInventoryHints,
        handleCleaningCertsUpload
    };
}

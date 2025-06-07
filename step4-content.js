// step4-content.js - Блок 4: Оборудование и инфраструктура

function generateStep4Content() {
    return `
        <h3>4.1 Основное кухонное оборудование</h3>
        
        <h4 style="color: #fbbf24; font-size: 1.1rem; margin: 20px 0 15px 0;">Тепловое оборудование:</h4>
        
        <div class="grid">
            <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px;">
                <label style="display: block; margin-bottom: 10px;">🔥 Плита газовая</label>
                <button class="btn btn-secondary" onclick="toggleEquipment('heatingEquipment', 'gasStove', this)">Есть</button>
                <div id="gasStoveCount" class="hidden" style="margin-top: 10px;">
                    <label style="display: block; margin-bottom: 5px; opacity: 0.9;">Количество конфорок:</label>
                    <div class="grid" style="grid-template-columns: repeat(4, 1fr); gap: 5px;">
                        <button class="btn btn-secondary" onclick="selectOption('gasStoveConf', '2', this)">2</button>
                        <button class="btn btn-secondary" onclick="selectOption('gasStoveConf', '4', this)">4</button>
                        <button class="btn btn-secondary" onclick="selectOption('gasStoveConf', '6', this)">6</button>
                        <button class="btn btn-secondary" onclick="selectOption('gasStoveConf', '8+', this)">8+</button>
                    </div>
                </div>
            </div>
            
            <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px;">
                <label style="display: block; margin-bottom: 10px;">⚡ Плита электрическая</label>
                <button class="btn btn-secondary" onclick="toggleEquipment('heatingEquipment', 'electricStove', this)">Есть</button>
                <div id="electricStoveCount" class="hidden" style="margin-top: 10px;">
                    <label style="display: block; margin-bottom: 5px; opacity: 0.9;">Количество конфорок:</label>
                    <div class="grid" style="grid-template-columns: repeat(4, 1fr); gap: 5px;">
                        <button class="btn btn-secondary" onclick="selectOption('electricStoveConf', '2', this)">2</button>
                        <button class="btn btn-secondary" onclick="selectOption('electricStoveConf', '4', this)">4</button>
                        <button class="btn btn-secondary" onclick="selectOption('electricStoveConf', '6', this)">6</button>
                        <button class="btn btn-secondary" onclick="selectOption('electricStoveConf', '8+', this)">8+</button>
                    </div>
                </div>
            </div>
            
            <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px;">
                <label style="display: block; margin-bottom: 10px;">🔥 Духовой шкаф</label>
                <button class="btn btn-secondary" onclick="toggleEquipment('heatingEquipment', 'oven', this)">Есть</button>
                <div id="ovenCount" class="hidden" style="margin-top: 10px;">
                    <label style="display: block; margin-bottom: 5px; opacity: 0.9;">Количество:</label>
                    <div class="grid" style="grid-template-columns: repeat(3, 1fr); gap: 5px;">
                        <button class="btn btn-secondary" onclick="selectOption('ovenCount', '1', this)">1</button>
                        <button class="btn btn-secondary" onclick="selectOption('ovenCount', '2', this)">2</button>
                        <button class="btn btn-secondary" onclick="selectOption('ovenCount', '3+', this)">3+</button>
                    </div>
                </div>
            </div>
            
            <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px;">
                <label style="display: block; margin-bottom: 10px;">🍟 Фритюрница</label>
                <button class="btn btn-secondary" onclick="toggleEquipment('heatingEquipment', 'fryer', this)">Есть</button>
                <div id="fryerCount" class="hidden" style="margin-top: 10px;">
                    <label style="display: block; margin-bottom: 5px; opacity: 0.9;">Количество:</label>
                    <div class="grid" style="grid-template-columns: repeat(3, 1fr); gap: 5px;">
                        <button class="btn btn-secondary" onclick="selectOption('fryerCount', '1', this)">1</button>
                        <button class="btn btn-secondary" onclick="selectOption('fryerCount', '2', this)">2</button>
                        <button class="btn btn-secondary" onclick="selectOption('fryerCount', '3+', this)">3+</button>
                    </div>
                </div>
            </div>
        </div>
        
        <h4 style="color: #fbbf24; font-size: 1.1rem; margin: 30px 0 15px 0;">Холодильное оборудование:</h4>
        
        <div class="grid">
            <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px;">
                <label style="display: block; margin-bottom: 10px;">🧊 Холодильный шкаф</label>
                <button class="btn btn-secondary" onclick="toggleEquipment('refrigerationEquipment', 'fridgeCabinet', this)">Есть</button>
                <div id="fridgeCabinetCount" class="hidden" style="margin-top: 10px;">
                    <label style="display: block; margin-bottom: 5px; opacity: 0.9;">Количество:</label>
                    <div class="grid" style="grid-template-columns: repeat(4, 1fr); gap: 5px;">
                        <button class="btn btn-secondary" onclick="selectOption('fridgeCabinetCount', '1', this)">1</button>
                        <button class="btn btn-secondary" onclick="selectOption('fridgeCabinetCount', '2', this)">2</button>
                        <button class="btn btn-secondary" onclick="selectOption('fridgeCabinetCount', '3', this)">3</button>
                        <button class="btn btn-secondary" onclick="selectOption('fridgeCabinetCount', '4+', this)">4+</button>
                    </div>
                </div>
            </div>
            
            <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px;">
                <label style="display: block; margin-bottom: 10px;">❄️ Морозильный шкаф</label>
                <button class="btn btn-secondary" onclick="toggleEquipment('refrigerationEquipment', 'freezerCabinet', this)">Есть</button>
                <div id="freezerCabinetCount" class="hidden" style="margin-top: 10px;">
                    <label style="display: block; margin-bottom: 5px; opacity: 0.9;">Количество:</label>
                    <div class="grid" style="grid-template-columns: repeat(3, 1fr); gap: 5px;">
                        <button class="btn btn-secondary" onclick="selectOption('freezerCabinetCount', '1', this)">1</button>
                        <button class="btn btn-secondary" onclick="selectOption('freezerCabinetCount', '2', this)">2</button>
                        <button class="btn btn-secondary" onclick="selectOption('freezerCabinetCount', '3+', this)">3+</button>
                    </div>
                </div>
            </div>
        </div>
        
        <h3>4.2 Обслуживание оборудования</h3>
        
        <p style="margin-bottom: 15px; opacity: 0.9;">Как обслуживается оборудование:</p>
        
        <div class="grid">
            <button class="btn btn-secondary" onclick="selectOption('equipmentMaintenance', 'contract', this)">
                📋 <strong>Полностью по договорам</strong><br>
                <small style="opacity: 0.7;">с сервисными компаниями</small>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('equipmentMaintenance', 'inhouse', this)">
                🔧 <strong>Полностью своими силами</strong><br>
                <small style="opacity: 0.7;">есть штатный механик/электрик</small>
            </button>
            <button class="btn btn-secondary" onclick="selectOption('equipmentMaintenance', 'mixed', this)">
                🔄 <strong>Смешанно</strong><br>
                <small style="opacity: 0.7;">мелкий ремонт своими силами, крупный по договорам</small>
            </button>
        </div>
        
        <h3>4.3 Контрольно-измерительные приборы</h3>
        
        <p style="margin-bottom: 15px; opacity: 0.9;">Какие приборы используете для контроля:</p>
        
        <div class="grid">
            <button class="btn btn-secondary" onclick="toggleOption('controlInstruments', 'productThermometer', this)">
                🌡️ Термометры для продуктов
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('controlInstruments', 'fridgeThermometer', this)">
                🧊 Термометры для холодильников
            </button>
            <button class="btn btn-secondary" onclick="toggleOption('controlInstruments', 'scales', this)">
                ⚖️ Весы
            </button>
            <button class="btn btn-secondary" onclick="selectOption('controlInstruments', 'none', this)" style="border-color: #ef4444;">
                ❌ Не используем контрольные приборы
            </button>
        </div>
        
        <div id="instrumentsValidation"></div>
    `;
}

// Функции для работы с оборудованием
function toggleEquipment(category, equipment, button) {
    if (!formData[category]) formData[category] = [];
    
    const index = formData[category].indexOf(equipment);
    if (index > -1) {
        formData[category].splice(index, 1);
        button.classList.remove('active');
        const countDiv = document.getElementById(equipment + 'Count');
        if (countDiv) countDiv.classList.add('hidden');
    } else {
        formData[category].push(equipment);
        button.classList.add('active');
        const countDiv = document.getElementById(equipment + 'Count');
        if (countDiv) countDiv.classList.remove('hidden');
    }
    
    autoSaveFormData();
}

// Валидация для Блока 4
function validateStep4() {
    const errors = [];
    
    if (!formData.equipmentMaintenance) {
        errors.push('Выберите способ обслуживания оборудования');
    }
    
    if (!formData.controlInstruments || formData.controlInstruments === 'none') {
        errors.push('Контрольные приборы обязательны для системы ХАССП');
    }
    
    return errors;
}

// Экспорт функций
window.toggleEquipment = toggleEquipment;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generateStep4Content, validateStep4, toggleEquipment };
}

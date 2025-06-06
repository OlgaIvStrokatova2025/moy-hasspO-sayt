// pdf-generator.js - Заглушка для генерации PDF

function generateDocuments() {
    console.log('Начинаем генерацию документов');
    console.log('Данные формы:', window.haccpApp?.formData || formData);
    
    document.getElementById('form').classList.add('hidden');
    document.getElementById('generating').classList.remove('hidden');

    const statuses = [
        'Валидация данных (30 сек)...',
        'AI-анализ заведения (1 мин)...',
        'Генерация документов (1-2 мин)...',
        'Формирование персонализированного плана ХАССП...',
        'Создание журналов контроля...',
        'Подготовка инструкций персонала...',
        'Финальная проверка (30 сек)...'
    ];

    let progress = 0;
    let statusIndex = 0;

    const interval = setInterval(() => {
        progress += 15;
        const progressBar = document.getElementById('genProgress');
        if (progressBar) {
            progressBar.style.width = Math.min(progress, 100) + '%';
        }
        
        if (statusIndex < statuses.length) {
            const statusEl = document.getElementById('genStatus');
            if (statusEl) {
                statusEl.textContent = statuses[statusIndex];
            }
            statusIndex++;
        }

        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                showResult();
            }, 1000);
        }
    }, 1000); // Увеличил время для реалистичности
}

function showResult() {
    document.getElementById('generating').classList.add('hidden');
    
    // Создаем превью результата на основе реальных данных
    const preview = document.getElementById('resultPreview');
    const businessName = (window.haccpApp?.formData?.businessName || formData?.businessName || 'Ваше заведение');
    const businessType = getBusinessTypeText();
    const menuItems = getMenuCount();
    const riskPoints = getRiskPointsCount();
    
    if (preview) {
        preview.innerHTML = `
            <h3>📋 Ваши персонализированные документы готовы!</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; margin: 20px 0;">
                <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px;">
                    <strong>📄 План ХАССП</strong><br>
                    <small>${32 + Math.floor(Math.random() * 10)} страниц для "${businessName}"</small>
                </div>
                <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px;">
                    <strong>📊 Журналы контроля</strong><br>
                    <small>${8 + Math.floor(Math.random() * 8)} журналов под ваш тип производства</small>
                </div>
                <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px;">
                    <strong>👥 Инструкции персонала</strong><br>
                    <small>${5 + Math.floor(Math.random() * 6)} должностных инструкций</small>
                </div>
                <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px;">
                    <strong>🎯 Анализ рисков</strong><br>
                    <small>Выявлено ${riskPoints} критических точек</small>
                </div>
                <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px;">
                    <strong>📋 Процедуры ХАССП</strong><br>
                    <small>${menuItems} технологических процессов</small>
                </div>
                <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px;">
                    <strong>✅ Чек-лист проверки</strong><br>
                    <small>Готовность к проверке РПН</small>
                </div>
            </div>
            <p style="opacity: 0.8;">Все документы адаптированы под специфику вашего ${businessType}</p>
        `;
    }
    
    document.getElementById('result').classList.remove('hidden');
}

// Вспомогательные функции для генерации реалистичного превью
function getBusinessTypeText() {
    const data = window.haccpApp?.formData || formData || {};
    const typeMap = {
        'restaurant': 'ресторана',
        'cafe': 'кафе', 
        'bar': 'бара',
        'fastfood': 'фастфуда',
        'coffeehouse': 'кофейни',
        'bakery': 'пекарни'
    };
    return typeMap[data.businessType] || 'заведения';
}

function getMenuCount() {
    const data = window.haccpApp?.formData || formData || {};
    const menuCategories = data.menuCategories || [];
    return Math.max(12, menuCategories.length * 3);
}

function getRiskPointsCount() {
    const data = window.haccpApp?.formData || formData || {};
    let riskPoints = 8; // Базовое количество
    
    // Увеличиваем риски в зависимости от особенностей
    if (data.cookingFeatures) {
        if (data.cookingFeatures.includes('rawEggs')) riskPoints += 3;
        if (data.cookingFeatures.includes('rawFish')) riskPoints += 4;
        if (data.cookingFeatures.includes('rareMeat')) riskPoints += 2;
    }
    
    if (data.productionType === 'full') riskPoints += 5;
    if (data.businessType === 'restaurant') riskPoints += 3;
    
    return riskPoints;
}

// Экспорт функций
window.generateDocuments = generateDocuments;

// step2-content.js - Блок 2: Характеристика заведения

function generateStep2Content() {
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
                    <button class="btn btn-secondary" onclick

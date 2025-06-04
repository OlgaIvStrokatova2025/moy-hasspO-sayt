const { useState, useEffect } = React;
const {
    Coffee, Utensils, Store, Building2, Clock, Package, ChefHat, Zap, Check,
    ChevronRight, ArrowRight, Shield, Thermometer, Sparkles, FileText,
    Trophy, Mail, Phone, Download, CheckCircle, Star
} = lucideReact;

// Step1 Component - НАЧАЛО
const Step1 = ({ formData, updateFormData, toggleArrayField }) => {
    const businessTypes = [
        { id: 'restaurant', label: 'Ресторан', icon: Utensils },
        { id: 'cafe', label: 'Кафе', icon: Coffee },
        { id: 'canteen', label: 'Столовая', icon: Building2 },
        { id: 'coffeeshop', label: 'Кофейня', icon: Coffee },
        { id: 'bar', label: 'Бар', icon: Store },
        { id: 'fastfood', label: 'Фастфуд', icon: Zap },
        { id: 'delivery', label: 'Только доставка', icon: Package },
        { id: 'bakery', label: 'Кондитерская/пекарня', icon: ChefHat }
    ];

    return React.createElement('div', { className: "space-y-6" },
        React.createElement('h2', { className: "text-2xl font-bold text-white mb-6" }, "Шаг 1: Ваше заведение"),
       
        // Business Name
        React.createElement('div', null,
            React.createElement('label', { className: "block text-white font-semibold mb-2" }, "Название заведения"),
            React.createElement('input', {
                type: "text",
                value: formData.businessName,
                onChange: (e) => updateFormData('businessName', e.target.value),
                className: "w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur text-white placeholder-purple-200 border border-white/30 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/30 transition-all duration-300",
                placeholder: "Введите название вашего заведения"
            })
        ),

        // Business Type
        React.createElement('div', null,
            React.createElement('label', { className: "block text-white font-semibold mb-3" }, "Тип заведения"),
            React.createElement('div', { className: "grid grid-cols-2 md:grid-cols-4 gap-3" },
                businessTypes.map(type =>
                    React.createElement('button', {
                        key: type.id,
                        onClick: () => updateFormData('businessType', type.id),
                        className: `p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                            formData.businessType === type.id
                                ? 'bg-gradient-to-br from-purple-500 to-pink-500 border-transparent text-white shadow-lg shadow-purple-500/30'
                                : 'bg-white/10 border-white/30 text-purple-200 hover:bg-white/20 hover:border-purple-400'
                        }`
                    },
                        React.createElement(type.icon, { className: "w-8 h-8 mx-auto mb-2" }),
                        React.createElement('p', { className: "text-sm font-medium" }, type.label)
                    )
                )
            )
        ),
// Seating Capacity
        React.createElement('div', null,
            React.createElement('label', { className: "block text-white font-semibold mb-3" }, "Посадочных мест"),
            React.createElement('div', { className: "grid grid-cols-2 md:grid-cols-5 gap-3" },
                ['Без мест', 'До 30', '31-80', '81-150', '150+'].map(capacity =>
                    React.createElement('button', {
                        key: capacity,
                        onClick: () => updateFormData('seatingCapacity', capacity),
                        className: `py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                            formData.seatingCapacity === capacity
                                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30'
                                : 'bg-white/10 text-purple-200 hover:bg-white/20 border border-white/30'
                        }`
                    }, capacity)
                )
            )
        ),

        // Kitchen Staff
        React.createElement('div', null,
            React.createElement('label', { className: "block text-white font-semibold mb-3" }, "Сотрудников на кухне"),
            React.createElement('div', { className: "grid grid-cols-2 md:grid-cols-4 gap-3" },
                ['1-2', '3-6', '7-15', '15+'].map(staff =>
                    React.createElement('button', {
                        key: staff,
                        onClick: () => updateFormData('kitchenStaff', staff),
                        className: `py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                            formData.kitchenStaff === staff
                                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30'
                                : 'bg-white/10 text-purple-200 hover:bg-white/20 border border-white/30'
                        }`
                    }, staff)
                )
            )
        ),

        // Work Schedule
        React.createElement('div', null,
            React.createElement('label', { className: "block text-white font-semibold mb-3" }, "График работы"),
            React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-3" },
                [
                    { id: 'breakfast-lunch', label: 'Завтрак + обед', icon: Clock },
                    { id: 'lunch-dinner', label: 'Обед + ужин', icon: Clock },
                    { id: 'full-day', label: 'Полный день', icon: Clock },
                    { id: 'delivery-only', label: 'Только доставка', icon: Package }
                ].map(schedule => {
                    const Icon = schedule.icon;
                    return React.createElement('button', {
                        key: schedule.id,
                        onClick: () => toggleArrayField('workSchedule', schedule.id),
                        className: `p-4 rounded-xl border-2 transition-all duration-300 flex items-center gap-3 ${
                            formData.workSchedule?.includes(schedule.id)
                                ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400 text-white'
                                : 'bg-white/10 border-white/30 text-purple-200 hover:bg-white/20'
                        }`
                    },
                        React.createElement(Icon, { className: "w-5 h-5" }),
                        React.createElement('span', { className: "font-medium" }, schedule.label),
                        formData.workSchedule?.includes(schedule.id) &&
                            React.createElement(Check, { className: "w-5 h-5 ml-auto text-purple-300" })
                    );
                })
            )
        ),
// Additional Services
        React.createElement('div', null,
            React.createElement('label', { className: "block text-white font-semibold mb-3" }, "Дополнительно"),
            React.createElement('div', { className: "space-y-3" },
                [
                    { id: 'alcohol', label: 'Продажа алкоголя' },
                    { id: 'delivery', label: 'Доставка еды' },
                    { id: 'banquets', label: 'Банкеты и праздники' }
                ].map(service =>
                    React.createElement('label', {
                        key: service.id,
                        className: "flex items-center gap-3 p-4 rounded-xl bg-white/10 border border-white/30 hover:bg-white/20 cursor-pointer transition-all duration-300"
                    },
                        React.createElement('input', {
                            type: "checkbox",
                            checked: formData.additionalServices?.includes(service.id) || false,
                            onChange: () => toggleArrayField('additionalServices', service.id),
                            className: "w-5 h-5 rounded accent-purple-500"
                        }),
                        React.createElement('span', { className: "text-white font-medium" }, service.label)
                    )
                )
            )
        )
    );
};
// Step2 Component
const Step2 = ({ formData, updateFormData, toggleArrayField }) => {
    const kitchenLayouts = [
        {
            id: 'simple',
            label: 'Простая кухня',
            description: 'Все в одном помещении',
            layout: `┌─────────────────┐
│  Зал для гостей │
├─────────────────┤
│      Кухня      │
│ (все в одном)   │
└─────────────────┘`
        },
        {
            id: 'separated',
            label: 'Разделенная кухня',
            description: 'Есть отдельный склад',
            layout: `┌─────────────────┐
│  Зал для гостей │
├─────┬───────────┤
│Склад│   Кухня   │
│     │           │
└─────┴───────────┘`
        },
        {
            id: 'workshop',
            label: 'Цеховая кухня',
            description: 'Разные цеха',
            layout: `┌─────────────────┐
│  Зал для гостей │
├──────┬────┬─────┤
│Склад │Хол.│Гор. │
│      │цех │цех  │
└──────┴────┴─────┘`
        }
    ];

    return React.createElement('div', { className: "space-y-6" },
        React.createElement('h2', { className: "text-2xl font-bold text-white mb-6" }, "Шаг 2: Ваша кухня"),
       
        // Cooking Method
        React.createElement('div', null,
            React.createElement('label', { className: "block text-white font-semibold mb-3" }, "Как готовите"),
            React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-3" },
                [
                    { id: 'from-scratch', label: 'Готовим с нуля', desc: 'Сырые продукты → готовые блюда' },
                    { id: 'semi-finished', label: 'Используем полуфабрикаты', desc: 'Доготавливаем готовые заготовки' },
                    { id: 'mixed', label: 'Смешанно', desc: 'Что-то с нуля, что-то полуфабрикаты' },
                    { id: 'reheat-only', label: 'Только разогрев', desc: 'Разогреваем готовые блюда' }
                ].map(method =>
                    React.createElement('button', {
                        key: method.id,
                        onClick: () => updateFormData('cookingMethod', method.id),
                        className: `p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                            formData.cookingMethod === method.id
                                ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400'
                                : 'bg-white/10 border-white/30 hover:bg-white/20'
                        }`
                    },
                        React.createElement('p', { className: "font-semibold text-white mb-1" }, method.label),
                        React.createElement('p', { className: "text-sm text-purple-200" }, method.desc)
                    )
                )
            )
        ),
// Kitchen Layout
        React.createElement('div', null,
            React.createElement('label', { className: "block text-white font-semibold mb-3" }, "Планировка кухни"),
            React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-3 gap-4" },
                kitchenLayouts.map(layout =>
                    React.createElement('button', {
                        key: layout.id,
                        onClick: () => updateFormData('kitchenLayout', layout.id),
                        className: `p-4 rounded-xl border-2 transition-all duration-300 ${
                            formData.kitchenLayout === layout.id
                                ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400'
                                : 'bg-white/10 border-white/30 hover:bg-white/20'
                        }`
                    },
                        React.createElement('p', { className: "font-semibold text-white mb-2" }, layout.label),
                        React.createElement('p', { className: "text-xs text-purple-200 mb-3" }, layout.description),
                        React.createElement('pre', { className: "text-xs text-purple-300 font-mono leading-tight" }, layout.layout)
                    )
                )
            )
        ),

        // Equipment
        React.createElement('div', null,
            React.createElement('label', { className: "block text-white font-semibold mb-3" }, "Основное оборудование"),
           
            // Cooking Equipment
            React.createElement('div', { className: "mb-4" },
                React.createElement('p', { className: "text-purple-200 mb-2" }, "Для приготовления:"),
                React.createElement('div', { className: "grid grid-cols-2 md:grid-cols-3 gap-3" },
                    [
                        { id: 'stove', label: 'Плита', icon: ChefHat },
                        { id: 'oven', label: 'Духовка', icon: ChefHat },
                        { id: 'microwave', label: 'Микроволновка', icon: Zap },
                        { id: 'fryer', label: 'Фритюрница', icon: ChefHat },
                        { id: 'grill', label: 'Гриль', icon: ChefHat }
                    ].map(item => {
                        const Icon = item.icon;
                        return React.createElement('label', {
                            key: item.id,
                            className: `flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300 ${
                                formData.cookingEquipment?.includes(item.id)
                                    ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400'
                                    : 'bg-white/10 hover:bg-white/20'
                            } border-2 border-white/30`
                        },
                            React.createElement('input', {
                                type: "checkbox",
                                checked: formData.cookingEquipment?.includes(item.id) || false,
                                onChange: () => toggleArrayField('cookingEquipment', item.id),
                                className: "sr-only"
                            }),
                            React.createElement(Icon, { className: "w-5 h-5 text-purple-300" }),
                            React.createElement('span', { className: "text-white font-medium" }, item.label),
                            formData.cookingEquipment?.includes(item.id) &&
                                React.createElement(Check, { className: "w-4 h-4 ml-auto text-purple-300" })
                        );
                    })
                )
            ),
// Storage Equipment
            React.createElement('div', { className: "mb-4" },
                React.createElement('p', { className: "text-purple-200 mb-2" }, "Для хранения:"),
                React.createElement('div', { className: "grid grid-cols-2 md:grid-cols-3 gap-3" },
                    [
                        { id: 'fridge', label: 'Холодильник', icon: Thermometer },
                        { id: 'freezer', label: 'Морозилка', icon: Thermometer },
                        { id: 'dry-storage', label: 'Сухой склад', icon: Package }
                    ].map(item => {
                        const Icon = item.icon;
                        return React.createElement('label', {
                            key: item.id,
                            className: `flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300 ${
                                formData.storageEquipment?.includes(item.id)
                                    ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400'
                                    : 'bg-white/10 hover:bg-white/20'
                            } border-2 border-white/30`
                        },
                            React.createElement('input', {
                                type: "checkbox",
                                checked: formData.storageEquipment?.includes(item.id) || false,
                                onChange: () => toggleArrayField('storageEquipment', item.id),
                                className: "sr-only"
                            }),
                            React.createElement(Icon, { className: "w-5 h-5 text-purple-300" }),
                            React.createElement('span', { className: "text-white font-medium" }, item.label),
                            formData.storageEquipment?.includes(item.id) &&
                                React.createElement(Check, { className: "w-4 h-4 ml-auto text-purple-300" })
                        );
                    })
                )
            ),

            // Washing Equipment
            React.createElement('div', { className: "mb-4" },
                React.createElement('p', { className: "text-purple-200 mb-2" }, "Для мойки:"),
                React.createElement('div', { className: "grid grid-cols-2 gap-3" },
                    [
                        { id: 'dishwasher', label: 'Посудомоечная машина' },
                        { id: 'sinks', label: 'Мойки для посуды' }
                    ].map(item =>
                        React.createElement('label', {
                            key: item.id,
                            className: `flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300 ${
                                formData.washingEquipment?.includes(item.id)
                                    ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400'
                                    : 'bg-white/10 hover:bg-white/20'
                            } border-2 border-white/30`
                        },
                            React.createElement('input', {
                                type: "checkbox",
                                checked: formData.washingEquipment?.includes(item.id) || false,
                                onChange: () => toggleArrayField('washingEquipment', item.id),
                                className: "w-5 h-5 rounded accent-purple-500"
                            }),
                            React.createElement('span', { className: "text-white font-medium" }, item.label)
                        )
                    )
                )
            )
        ),

        // Cleaning Method
        React.createElement('div', null,
            React.createElement('label', { className: "block text-white font-semibold mb-3" }, "Кто убирает"),
            React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-3" },
                [
                    { id: 'chefs-clean', label: 'Повара сами убирают' },
                    { id: 'cleaner', label: 'Есть отдельный уборщик' },
                    { id: 'cleaning-company', label: 'Клининговая компания' },
                    { id: 'mixed-cleaning', label: 'По-разному (кухню повара, зал уборщик)' }
                ].map(method =>
                    React.createElement('button', {
                        key: method.id,
                        onClick: () => updateFormData('cleaningMethod', method.id),
                        className: `p-4 rounded-xl border-2 transition-all duration-300 ${
                            formData.cleaningMethod === method.id
                                ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400'
                                : 'bg-white/10 border-white/30 hover:bg-white/20'
                        }`
                    },
                        React.createElement('p', { className: "text-white font-medium" }, method.label)
                    )
                )
            )
        )
    );
};
// Step3 Component
const Step3 = ({ formData, updateFormData, toggleArrayField }) => {
    return React.createElement('div', { className: "space-y-6" },
        React.createElement('h2', { className: "text-2xl font-bold text-white mb-6" }, "Шаг 3: Ваше меню"),
       
        // Menu Categories
        React.createElement('div', null,
            React.createElement('label', { className: "block text-white font-semibold mb-3" }, "Основные категории блюд"),
           
            // Cold Dishes
            React.createElement('div', { className: "mb-4" },
                React.createElement('p', { className: "text-purple-200 mb-2" }, "Холодные блюда:"),
                React.createElement('div', { className: "grid grid-cols-2 gap-3" },
                    [
                        { id: 'salads', label: 'Салаты' },
                        { id: 'appetizers', label: 'Закуски и нарезки' }
                    ].map(item =>
                        React.createElement('label', {
                            key: item.id,
                            className: `flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300 ${
                                formData.coldDishes?.includes(item.id)
                                    ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400'
                                    : 'bg-white/10 hover:bg-white/20'
                            } border-2 border-white/30`
                        },
                            React.createElement('input', {
                                type: "checkbox",
                                checked: formData.coldDishes?.includes(item.id) || false,
                                onChange: () => toggleArrayField('coldDishes', item.id),
                                className: "w-5 h-5 rounded accent-purple-500"
                            }),
                            React.createElement('span', { className: "text-white font-medium" }, item.label)
                        )
                    )
                )
            ),

            // Hot Dishes
            React.createElement('div', { className: "mb-4" },
                React.createElement('p', { className: "text-purple-200 mb-2" }, "Горячие блюда:"),
                React.createElement('div', { className: "grid grid-cols-2 md:grid-cols-3 gap-3" },
                    [
                        { id: 'soups', label: 'Супы' },
                        { id: 'meat', label: 'Мясные блюда' },
                        { id: 'poultry', label: 'Птица' },
                        { id: 'fish', label: 'Рыба' },
                        { id: 'pizza', label: 'Пицца' },
                        { id: 'pasta', label: 'Паста/макароны' },
                        { id: 'garnish', label: 'Гарниры' }
                    ].map(item =>
                        React.createElement('label', {
                            key: item.id,
                            className: `flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300 ${
                                formData.hotDishes?.includes(item.id)
                                    ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400'
                                    : 'bg-white/10 hover:bg-white/20'
                            } border-2 border-white/30`
                        },
                            React.createElement('input', {
                                type: "checkbox",
                                checked: formData.hotDishes?.includes(item.id) || false,
                                onChange: () => toggleArrayField('hotDishes', item.id),
                                className: "w-5 h-5 rounded accent-purple-500"
                            }),
                            React.createElement('span', { className: "text-white font-medium" }, item.label)
                        )
                    )
                )
            ),
// Desserts and Drinks
            React.createElement('div', { className: "mb-4" },
                React.createElement('p', { className: "text-purple-200 mb-2" }, "Десерты и напитки:"),
                React.createElement('div', { className: "grid grid-cols-2 gap-3" },
                    [
                        { id: 'desserts-bought', label: 'Десерты (покупные)' },
                        { id: 'desserts-made', label: 'Торты/пирожные (делаем сами)' },
                        { id: 'fresh-juice', label: 'Свежевыжатые соки' },
                        { id: 'coffee', label: 'Кофе' }
                    ].map(item =>
                        React.createElement('label', {
                            key: item.id,
                            className: `flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300 ${
                                formData.dessertsAndDrinks?.includes(item.id)
                                    ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400'
                                    : 'bg-white/10 hover:bg-white/20'
                            } border-2 border-white/30`
                        },
                            React.createElement('input', {
                                type: "checkbox",
                                checked: formData.dessertsAndDrinks?.includes(item.id) || false,
                                onChange: () => toggleArrayField('dessertsAndDrinks', item.id),
                                className: "w-5 h-5 rounded accent-purple-500"
                            }),
                            React.createElement('span', { className: "text-white font-medium" }, item.label)
                        )
                    )
                )
            )
        ),

        // Menu Specialties
        React.createElement('div', null,
            React.createElement('label', { className: "block text-white font-semibold mb-3" }, "Особенности меню"),
            React.createElement('div', { className: "space-y-3" },
                [
                    { id: 'raw-eggs', label: 'Сырые яйца (в майонезе, креме)', warning: true },
                    { id: 'raw-fish', label: 'Сырая рыба (суши, сашими)', warning: true },
                    { id: 'rare-meat', label: 'Мясо с кровью (стейки rare)', warning: true },
                    { id: 'kids-menu', label: 'Детское меню', warning: false },
                    { id: 'none', label: 'Ничего из перечисленного', warning: false }
                ].map(item =>
                    React.createElement('label', {
                        key: item.id,
                        className: `flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                            formData.menuSpecialties?.includes(item.id)
                                ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400'
                                : 'bg-white/10 hover:bg-white/20'
                        } border-2 border-white/30`
                    },
                        React.createElement('input', {
                            type: "checkbox",
                            checked: formData.menuSpecialties?.includes(item.id) || false,
                            onChange: () => toggleArrayField('menuSpecialties', item.id),
                            className: "w-5 h-5 rounded accent-purple-500"
                        }),
                        React.createElement('span', { className: "text-white font-medium flex-1" }, item.label),
                        item.warning && formData.menuSpecialties?.includes(item.id) &&
                            React.createElement('span', { className: "text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded-lg" },
                                "Требует особого контроля"
                            )
                    )
                )
            )
        ),

        // Suppliers
        React.createElement('div', null,
            React.createElement('label', { className: "block text-white font-semibold mb-3" }, "Откуда берете продукты"),
            React.createElement('div', { className: "grid grid-cols-2 gap-3" },
                [
                    { id: '1-2', label: '1-2 постоянных поставщика', desc: 'Проще контролировать качество' },
                    { id: '3-5', label: '3-5 разных поставщиков', desc: 'Средняя сложность контроля' },
                    { id: '5+', label: 'Много поставщиков (больше 5)', desc: 'Требует усиленного контроля' },
                    { id: 'retail', label: 'Покупаем в магазинах/на рынках', desc: 'Нужен тщательный отбор' }
                ].map(option =>
                    React.createElement('button', {
                        key: option.id,
                        onClick: () => updateFormData('suppliersCount', option.id),
                        className: `p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                            formData.suppliersCount === option.id
                                ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400'
                                : 'bg-white/10 border-white/30 hover:bg-white/20'
                        }`
                    },
                        React.createElement('p', { className: "text-white font-medium mb-1" }, option.label),
                        React.createElement('p', { className: "text-xs text-purple-200" }, option.desc)
                    )
                )
            )
        ),

        // Delivery Frequency
        React.createElement('div', null,
            React.createElement('label', { className: "block text-white font-semibold mb-3" }, "Как часто привозят продукты"),
            React.createElement('div', { className: "grid grid-cols-2 gap-3" },
                [
                    { id: 'daily', label: 'Каждый день', icon: '📦' },
                    { id: '2-3-week', label: '2-3 раза в неделю', icon: '📦' },
                    { id: 'weekly', label: '1 раз в неделю', icon: '📦' },
                    { id: 'self-purchase', label: 'Закупаемся сами', icon: '🛒' }
                ].map(option =>
                    React.createElement('button', {
                        key: option.id,
                        onClick: () => updateFormData('deliveryFrequency', option.id),
                        className: `p-4 rounded-xl border-2 transition-all duration-300 flex items-center gap-3 ${
                            formData.deliveryFrequency === option.id
                                ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400'
                                : 'bg-white/10 border-white/30 hover:bg-white/20'
                        }`
                    },
                        React.createElement('span', { className: "text-2xl" }, option.icon),
                        React.createElement('p', { className: "text-white font-medium" }, option.label)
                    )
                )
            )
        ),

        // Summary Info
        React.createElement('div', { className: "mt-8 p-4 bg-purple-500/10 rounded-xl border border-purple-400/30" },
            React.createElement('p', { className: "text-purple-200 text-sm" },
                "💡 На основе ваших ответов мы создадим персонализированную систему ХАССП, учитывающую все особенности вашего заведения и меню."
            )
        )
    );
};
// GeneratingScreen Component
const GeneratingScreen = () => {
    const [progress, setProgress] = useState(0);
    const [currentAction, setCurrentAction] = useState('Инициализация системы...');
    const [completedSteps, setCompletedSteps] = useState([]);

    useEffect(() => {
        const actions = [
            { progress: 20, text: 'Анализ данных вашего заведения...', step: 'analysis' },
            { progress: 40, text: 'Генерация плана ХАССП...', step: 'haccp-plan' },
            { progress: 60, text: 'Создание журналов контроля...', step: 'journals' },
            { progress: 80, text: 'Формирование инструкций для персонала...', step: 'instructions' },
            { progress: 100, text: 'Финализация документов...', step: 'finalization' }
        ];

        actions.forEach((action, index) => {
            setTimeout(() => {
                setProgress(action.progress);
                setCurrentAction(action.text);
                if (index > 0) {
                    setCompletedSteps(prev => [...prev, actions[index - 1].step]);
                }
            }, (index + 1) * 600);
        });
    }, []);

    const features = [
        { icon: FileText, title: '35+ документов', desc: 'Полный пакет' },
        { icon: Shield, title: '100% готовность', desc: 'К проверкам' },
        { icon: Zap, title: '3 минуты', desc: 'До готовности' }
    ];

    const steps = [
        { id: 'analysis', label: 'Анализ данных', icon: '📊' },
        { id: 'haccp-plan', label: 'План ХАССП', icon: '📋' },
        { id: 'journals', label: 'Журналы', icon: '📝' },
        { id: 'instructions', label: 'Инструкции', icon: '📖' },
        { id: 'finalization', label: 'Финализация', icon: '✅' }
    ];

    return React.createElement('div', { className: "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6" },
        React.createElement('div', { className: "bg-white/10 backdrop-blur-md rounded-3xl p-12 max-w-2xl w-full text-center border border-white/20" },
            React.createElement('div', { className: "mb-8" },
                React.createElement('div', { className: "w-24 h-24 mx-auto mb-6 relative" },
                    React.createElement('div', { className: "absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-pulse" }),
                    React.createElement('div', { className: "absolute inset-2 bg-slate-900 rounded-full flex items-center justify-center" },
                        React.createElement(Sparkles, { className: "w-10 h-10 text-white animate-spin" })
                    )
                ),
                React.createElement('h2', { className: "text-3xl font-bold text-white mb-4" }, "Создаем ваши документы ХАССП"),
                React.createElement('p', { className: "text-purple-200 text-lg" }, currentAction)
            ),
            React.createElement('div', { className: "space-y-4 mb-8" },
                React.createElement('div', { className: "bg-white/10 rounded-full h-4 overflow-hidden" },
                    React.createElement('div', {
                        className: "h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500",
                        style: { width: `${progress}%` }
                    })
                ),
                React.createElement('p', { className: "text-purple-300" }, `${progress}% завершено`)
            ),
            React.createElement('div', { className: "mb-8" },
                React.createElement('div', { className: "flex justify-between items-center" },
                    steps.map((step, index) =>
                        React.createElement('div', { key: step.id, className: "flex flex-col items-center flex-1" },
                            React.createElement('div', {
                                className: `w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-2 transition-all duration-300 transform ${
                                    completedSteps.includes(step.id)
                                        ? 'bg-green-500/20 scale-110'
                                        : progress > (index * 20)
                                            ? 'bg-purple-500/20 animate-pulse'
                                            : 'bg-white/5'
                                }`
                            }, step.icon),
                            React.createElement('p', { className: `text-xs ${completedSteps.includes(step.id) ? 'text-green-400' : 'text-purple-300'}` },
                                step.label
                            )
                        )
                    )
                )
            ),
            React.createElement('div', { className: "grid grid-cols-3 gap-4" },
                features.map((feature, index) => {
                    const Icon = feature.icon;
                    return React.createElement('div', {
                        key: index,
                        className: "bg-white/5 rounded-xl p-4 transform transition-all duration-300 hover:scale-105"
                    },
                        React.createElement(Icon, { className: "w-8 h-8 text-purple-400 mx-auto mb-2" }),
                        React.createElement('p', { className: "text-white font-semibold" }, feature.title),
                        React.createElement('p', { className: "text-purple-300 text-sm" }, feature.desc)
                    );
                })
            ),
            React.createElement('div', { className: "mt-8 p-4 bg-purple-500/10 rounded-xl" },
                React.createElement('p', { className: "text-purple-200 text-sm" },
                    "💡 Знаете ли вы? Наша система генерирует документы в 50 раз быстрее, чем традиционная разработка консультантами!"
                )
            )
        )
    );
};
// ResultScreen Component
const ResultScreen = ({ formData }) => {
    const documentCategories = [
        {
            title: '✅ Основные документы ХАССП',
            items: [
                'План ХАССП (15-20 страниц)',
                'Политика пищевой безопасности',
                'Анализ рисков для вашего меню',
                'Критические контрольные точки'
            ]
        },
        {
            title: '📊 Журналы контроля',
            items: [
                'Журнал температурного контроля',
                'Журнал приемки продуктов',
                'Журнал бракеража',
                'Гигиенический журнал'
            ]
        },
        {
            title: '📖 Инструкции и процедуры',
            items: [
                'Процедуры приготовления блюд',
                'Инструкции по личной гигиене',
                'Программа уборки и дезинфекции',
                'План действий при авариях'
            ]
        },
        {
            title: '🎁 Дополнительно',
            items: [
                'Чек-лист проверки РПН',
                'Приказы и распоряжения',
                'Календарный план мероприятий',
                'Шаблоны для ведения записей'
            ]
        }
    ];

    const benefits = [
        { icon: CheckCircle, text: 'Полный пакет документов ХАССП' },
        { icon: Star, text: 'Персонализация под ваше заведение' },
        { icon: Shield, text: 'Поддержка 30 дней в WhatsApp' },
        { icon: Star, text: 'Обновления документов 1 год' }
    ];

    return React.createElement('div', { className: "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" },
        React.createElement('div', { className: "relative z-10 p-6" },
            React.createElement('div', { className: "max-w-4xl mx-auto" },
                React.createElement('div', { className: "text-center mb-12 pt-12" },
                    React.createElement('div', { className: "w-32 h-32 mx-auto mb-6 relative animate-bounce" },
                        React.createElement('div', { className: "absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full animate-pulse" }),
                        React.createElement('div', { className: "absolute inset-2 bg-slate-900 rounded-full flex items-center justify-center" },
                            React.createElement(Trophy, { className: "w-16 h-16 text-white" })
                        )
                    ),
                    React.createElement('h1', { className: "text-4xl font-bold text-white mb-4" }, "Поздравляем! Документы готовы"),
                    React.createElement('p', { className: "text-xl text-purple-200" },
                        `Ваша система ХАССП для "${formData.businessName || 'вашего заведения'}" создана успешно`
                    )
                ),
React.createElement('div', { className: "bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 mb-8" },
                    React.createElement('h2', { className: "text-2xl font-bold text-white mb-6 flex items-center gap-3" },
                        React.createElement(FileText, { className: "w-8 h-8 text-purple-400" }),
                        "Что включено в ваш пакет документов:"
                    ),
                    React.createElement('div', { className: "grid md:grid-cols-2 gap-6" },
                        documentCategories.map((category, index) =>
                            React.createElement('div', { key: index, className: "bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300" },
                                React.createElement('h3', { className: "text-lg font-semibold text-purple-300 mb-2" }, category.title),
                                React.createElement('ul', { className: "space-y-1" },
                                    category.items.map((item, idx) =>
                                        React.createElement('li', { key: idx, className: "text-purple-200 flex items-start gap-2" },
                                            React.createElement('span', { className: "text-purple-400 mt-1" }, "•"),
                                            React.createElement('span', null, item)
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement('div', { className: "mt-6 p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-400" },
                        React.createElement('div', { className: "grid grid-cols-2 md:grid-cols-4 gap-4 text-center" },
                            [
                                { number: '35+', label: 'документов' },
                                { number: '140-180', label: 'страниц' },
                                { number: '100%', label: 'готовность' },
                                { number: '3', label: 'минуты' }
                            ].map((stat, index) =>
                                React.createElement('div', { key: index },
                                    React.createElement('p', { className: "text-3xl font-bold text-white" }, stat.number),
                                    React.createElement('p', { className: "text-purple-200 text-sm" }, stat.label)
                                )
                            )
                        )
                    )
                ),

                React.createElement('div', { className: "bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 text-center transform hover:scale-[1.02] transition-all duration-300" },
                    React.createElement('h2', { className: "text-3xl font-bold text-white mb-4" }, "Получите документы прямо сейчас!"),
                    React.createElement('p', { className: "text-purple-100 text-lg mb-6" }, "Документы будут отправлены на ваш email в течение 5 минут"),
                   
                    React.createElement('div', { className: "bg-white/20 backdrop-blur rounded-2xl p-6 mb-6 max-w-md mx-auto" },
                        React.createElement('div', { className: "text-white mb-4" },
                            React.createElement('p', { className: "text-sm text-purple-100 line-through opacity-75" }, "19,990₽"),
                            React.createElement('div', { className: "flex items-center justify-center gap-3" },
                                React.createElement('p', { className: "text-5xl font-bold" }, "9,990₽"),
                                React.createElement('div', { className: "bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse" }, "-50%")
                            ),
                            React.createElement('p', { className: "text-purple-100 mt-2" }, "Специальная цена для первых клиентов")
                        ),
                        React.createElement('div', { className: "space-y-3 text-left mb-6" },
                            benefits.map((benefit, index) => {
                                const Icon = benefit.icon;
                                return React.createElement('div', { key: index, className: "flex items-center gap-3 text-white" },
                                    React.createElement(Icon, { className: "w-5 h-5 text-green-400 flex-shrink-0" }),
                                    React.createElement('span', { className: "text-sm" }, benefit.text)
                                );
                            })
                        ),
                        React.createElement('div', { className: "mb-4" },
                            React.createElement('input', {
                                type: "email",
                                placeholder: "Ваш email для получения документов",
                                className: "w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur text-white placeholder-purple-200 border border-white/30 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300"
                            })
                        )
                    ),
                   
                    React.createElement('button', { className: "w-full max-w-md py-4 bg-white text-purple-600 font-bold text-lg rounded-xl hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-3" },
                        React.createElement(Download, { className: "w-6 h-6" }),
                        "Оплатить и получить документы"
                    ),
                   
                    React.createElement('p', { className: "text-purple-100 text-sm mt-4" },
                        "🔒 Безопасная оплата • 💳 Все способы оплаты • ↩️ Возврат денег в течение 14 дней"
                    )
                )
            )
        )
    );
};
// Main HACCPConstructor Component
const HACCPConstructor = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        businessName: '',
        businessType: '',
        seatingCapacity: '',
        kitchenStaff: '',
        workSchedule: [],
        additionalServices: [],
        cookingMethod: '',
        kitchenLayout: '',
        cookingEquipment: [],
        storageEquipment: [],
        washingEquipment: [],
        cleaningMethod: '',
        coldDishes: [],
        hotDishes: [],
        dessertsAndDrinks: [],
        menuSpecialties: [],
        suppliersCount: '',
        deliveryFrequency: ''
    });
    const [isGenerating, setIsGenerating] = useState(false);
    const [showResult, setShowResult] = useState(false);

    const updateFormData = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const toggleArrayField = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: prev[field]?.includes(value)
                ? prev[field].filter(item => item !== value)
                : [...(prev[field] || []), value]
        }));
    };

    const handleNext = () => {
        if (step < 3) {
            setStep(step + 1);
        } else {
            generateDocuments();
        }
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const generateDocuments = () => {
        setIsGenerating(true);
        setTimeout(() => {
            setIsGenerating(false);
            setShowResult(true);
        }, 3000);
    };

    if (showResult) {
        return React.createElement(ResultScreen, { formData });
    }

    if (isGenerating) {
        return React.createElement(GeneratingScreen);
    }

    return React.createElement('div', { className: "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" },
        React.createElement('div', { className: "relative z-10" },
            // Header
            React.createElement('header', { className: "px-6 py-8" },
                React.createElement('div', { className: "max-w-6xl mx-auto" },
                    React.createElement('div', { className: "flex items-center gap-3 mb-8" },
                        React.createElement('div', { className: "p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg shadow-purple-500/30" },
                            React.createElement(Shield, { className: "w-8 h-8 text-white" })
                        ),
                        React.createElement('div', null,
                            React.createElement('h1', { className: "text-3xl font-bold text-white" }, "ХАССП Конструктор"),
                            React.createElement('p', { className: "text-purple-200" }, "Система пищевой безопасности за 15 минут")
                        )
                    ),
                   
                    // Steps
                    React.createElement('div', { className: "flex justify-between mt-8" },
                        [1, 2, 3].map(num =>
                            React.createElement('div', { key: num, className: "flex items-center" },
                                React.createElement('div', {
                                    className: `w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                                        step >= num
                                            ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30'
                                            : 'bg-white/10 text-purple-300 backdrop-blur'
                                    }`
                                },
                                    step > num ? React.createElement(Check, { className: "w-6 h-6" }) : num
                                ),
                                React.createElement('div', { className: "ml-3" },
                                    React.createElement('p', { className: "text-sm text-purple-300" },
                                        num === 1 ? '5 минут' : num === 2 ? '10 минут' : '5 минут'
                                    )
                                ),
                                num < 3 && React.createElement(ChevronRight, { className: "w-5 h-5 text-purple-400 ml-8" })
                            )
                        )
                    )
                )
            ),

            // Main Content
            React.createElement('main', { className: "px-6 pb-12" },
                React.createElement('div', { className: "max-w-4xl mx-auto" },
                    React.createElement('div', { className: "bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20" },
                        step === 1 && React.createElement(Step1, { formData, updateFormData, toggleArrayField }),
                        step === 2 && React.createElement(Step2, { formData, updateFormData, toggleArrayField }),
                        step === 3 && React.createElement(Step3, { formData, updateFormData, toggleArrayField }),
                       
                        // Navigation
                        React.createElement('div', { className: "flex justify-between mt-8" },
                            React.createElement('button', {
                                onClick: handleBack,
                                className: `px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                                    step === 1
                                        ? 'opacity-0 pointer-events-none'
                                        : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur'
                                }`
                            }, "Назад"),
                           
                            React.createElement('button', {
                                onClick: handleNext,
                                className: "px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                            },
                                step === 3 ? 'Создать документы' : 'Далее',
                                React.createElement(ArrowRight, { className: "w-5 h-5" })
                            )
                        )
                    )
                )
            )
        )
    );
};

// Render the app
ReactDOM.render(React.createElement(HACCPConstructor), document.getElementById('root')); 


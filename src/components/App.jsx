import React from 'react';
import { Coffee, Utensils, Store, Building2, Clock, Package, ChefHat, Zap, Check } from 'lucide-react';

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

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Шаг 1: Ваше заведение</h2>
      
      {/* Business Name */}
      <div>
        <label className="block text-white font-semibold mb-2">Название заведения</label>
        <input
          type="text"
          value={formData.businessName}
          onChange={(e) => updateFormData('businessName', e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur text-white placeholder-purple-200 border border-white/30 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/30 transition-all duration-300"
          placeholder="Введите название вашего заведения"
        />
      </div>

      {/* Business Type */}
      <div>
        <label className="block text-white font-semibold mb-3">Тип заведения</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {businessTypes.map(type => {
            const Icon = type.icon;
            return (
              <button
                key={type.id}
                onClick={() => updateFormData('businessType', type.id)}
                className={`
                  p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105
                  ${formData.businessType === type.id
                    ? 'bg-gradient-to-br from-purple-500 to-pink-500 border-transparent text-white shadow-lg shadow-purple-500/30'
                    : 'bg-white/10 border-white/30 text-purple-200 hover:bg-white/20 hover:border-purple-400'
                  }
                `}
              >
                <Icon className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm font-medium">{type.label}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Seating Capacity */}
      <div>
        <label className="block text-white font-semibold mb-3">Посадочных мест</label>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {['Без мест', 'До 30', '31-80', '81-150', '150+'].map(capacity => (
            <button
              key={capacity}
              onClick={() => updateFormData('seatingCapacity', capacity)}
              className={`
                py-3 px-4 rounded-xl font-medium transition-all duration-300
                ${formData.seatingCapacity === capacity
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-white/10 text-purple-200 hover:bg-white/20 border border-white/30'
                }
              `}
            >
              {capacity}
            </button>
          ))}
        </div>
      </div>

      {/* Kitchen Staff */}
      <div>
        <label className="block text-white font-semibold mb-3">Сотрудников на кухне</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {['1-2', '3-6', '7-15', '15+'].map(staff => (
            <button
              key={staff}
              onClick={() => updateFormData('kitchenStaff', staff)}
              className={`
                py-3 px-4 rounded-xl font-medium transition-all duration-300
                ${formData.kitchenStaff === staff
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-white/10 text-purple-200 hover:bg-white/20 border border-white/30'
                }
              `}
            >
              {staff}
            </button>
          ))}
        </div>
      </div>

      {/* Work Schedule */}
      <div>
        <label className="block text-white font-semibold mb-3">График работы</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { id: 'breakfast-lunch', label: 'Завтрак + обед', icon: Clock },
            { id: 'lunch-dinner', label: 'Обед + ужин', icon: Clock },
            { id: 'full-day', label: 'Полный день', icon: Clock },
            { id: 'delivery-only', label: 'Только доставка', icon: Package }
          ].map(schedule => {
            const Icon = schedule.icon;
            return (
              <button
                key={schedule.id}
                onClick={() => toggleArrayField('workSchedule', schedule.id)}
                className={`
                  p-4 rounded-xl border-2 transition-all duration-300 flex items-center gap-3
                  ${formData.workSchedule.includes(schedule.id)
                    ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400 text-white'
                    : 'bg-white/10 border-white/30 text-purple-200 hover:bg-white/20'
                  }
                `}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{schedule.label}</span>
                {formData.workSchedule.includes(schedule.id) && (
                  <Check className="w-5 h-5 ml-auto text-purple-300" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Additional Services */}
      <div>
        <label className="block text-white font-semibold mb-3">Дополнительно</label>
        <div className="space-y-3">
          {[
            { id: 'alcohol', label: 'Продажа алкоголя' },
            { id: 'delivery', label: 'Доставка еды' },
            { id: 'banquets', label: 'Банкеты и праздники' }
          ].map(service => (
            <label
              key={service.id}
              className="flex items-center gap-3 p-4 rounded-xl bg-white/10 border border-white/30 hover:bg-white/20 cursor-pointer transition-all duration-300"
            >
              <input
                type="checkbox"
                checked={formData.additionalServices.includes(service.id)}
                onChange={() => toggleArrayField('additionalServices', service.id)}
                className="w-5 h-5 rounded accent-purple-500"
              />
              <span className="text-white font-medium">{service.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step1;


import React from 'react';
import { ChefHat, Zap, Thermometer, Package, Check } from 'lucide-react';

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

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Шаг 2: Ваша кухня</h2>

      {/* Cooking Method */}
      <div>
        <label className="block text-white font-semibold mb-3">Как готовите</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { id: 'from-scratch', label: 'Готовим с нуля', desc: 'Сырые продукты → готовые блюда' },
            { id: 'semi-finished', label: 'Используем полуфабрикаты', desc: 'Доготавливаем готовые заготовки' },
            { id: 'mixed', label: 'Смешанно', desc: 'Что-то с нуля, что-то полуфабрикаты' },
            { id: 'reheat-only', label: 'Только разогрев', desc: 'Разогреваем готовые блюда' }
          ].map(method => (
            <button
              key={method.id}
              onClick={() => updateFormData('cookingMethod', method.id)}
              className={`
                p-4 rounded-xl border-2 transition-all duration-300 text-left
                ${formData.cookingMethod === method.id
                  ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400'
                  : 'bg-white/10 border-white/30 hover:bg-white/20'
                }
              `}
            >
              <p className="font-semibold text-white mb-1">{method.label}</p>
              <p className="text-sm text-purple-200">{method.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Kitchen Layout */}
      <div>
        <label className="block text-white font-semibold mb-3">Планировка кухни</label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {kitchenLayouts.map(layout => (
            <button
              key={layout.id}
              onClick={() => updateFormData('kitchenLayout', layout.id)}
              className={`
                p-4 rounded-xl border-2 transition-all duration-300
                ${formData.kitchenLayout === layout.id
                  ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400'
                  : 'bg-white/10 border-white/30 hover:bg-white/20'
                }
              `}
            >
              <p className="font-semibold text-white mb-2">{layout.label}</p>
              <p className="text-xs text-purple-200 mb-3">{layout.description}</p>
              <pre className="text-xs text-purple-300 font-mono leading-tight">{layout.layout}</pre>
            </button>
          ))}
        </div>
      </div>

      {/* Equipment */}
      <div>
        <label className="block text-white font-semibold mb-3">Основное оборудование</label>
        
        {/* Cooking Equipment */}
        <div className="mb-4">
          <p className="text-purple-200 mb-2">Для приготовления:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { id: 'stove', label: 'Плита', icon: ChefHat },
              { id: 'oven', label: 'Духовка', icon: ChefHat },
              { id: 'microwave', label: 'Микроволновка', icon: Zap },
              { id: 'fryer', label: 'Фритюрница', icon: ChefHat },
              { id: 'grill', label: 'Гриль', icon: ChefHat }
            ].map(item => {
              const Icon = item.icon;
              return (
                <label
                  key={item.id}
                  className={`
                    flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300
                    ${formData.cookingEquipment.includes(item.id)
                      ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400'
                      : 'bg-white/10 hover:bg-white/20'
                    } border-2 border-white/30
                  `}
                >
                  <input
                    type="checkbox"
                    checked={formData.cookingEquipment.includes(item.id)}
                    onChange={() => toggleArrayField('cookingEquipment', item.id)}
                    className="sr-only"
                  />
                  <Icon className="w-5 h-5 text-purple-300" />
                  <span className="text-white font-medium">{item.label}</span>
                  {formData.cookingEquipment.includes(item.id) && (
                    <Check className="w-4 h-4 ml-auto text-purple-300" />
                  )}
                </label>
              );
            })}
          </div>
        </div>

        {/* Storage Equipment */}
        <div className="mb-4">
          <p className="text-purple-200 mb-2">Для хранения:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { id: 'fridge', label: 'Холодильник', icon: Thermometer },
              { id: 'freezer', label: 'Морозилка', icon: Thermometer },
              { id: 'dry-storage', label: 'Сухой склад', icon: Package }
            ].map(item => {
              const Icon = item.icon;
              return (
                <label
                  key={item.id}
                  className={`
                    flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300
                    ${formData.storageEquipment.includes(item.id)
                      ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400'
                      : 'bg-white/10 hover:bg-white/20'
                    } border-2 border-white/30
                  `}
                >
                  <input
                    type="checkbox"
                    checked={formData.storageEquipment.includes(item.id)}
                    onChange={() => toggleArrayField('storageEquipment', item.id)}
                    className="sr-only"
                  />
                  <Icon className="w-5 h-5 text-purple-300" />
                  <span className="text-white font-medium">{item.label}</span>
                  {formData.storageEquipment.includes(item.id) && (
                    <Check className="w-4 h-4 ml-auto text-purple-300" />
                  )}
                </label>
              );
            })}
          </div>
        </div>

        {/* Washing Equipment */}
        <div className="mb-4">
          <p className="text-purple-200 mb-2">Для мойки:</p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { id: 'dishwasher', label: 'Посудомоечная машина' },
              { id: 'sinks', label: 'Мойки для посуды' }
            ].map(item => (
              <label
                key={item.id}
                className={`
                  flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300
                  ${formData.washingEquipment.includes(item.id)
                    ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400'
                    : 'bg-white/10 hover:bg-white/20'
                  } border-2 border-white/30
                `}
              >
                <input
                  type="checkbox"
                  checked={formData.washingEquipment.includes(item.id)}
                  onChange={() => toggleArrayField('washingEquipment', item.id)}
                  className="w-5 h-5 rounded accent-purple-500"
                />
                <span className="text-white font-medium">{item.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Cleaning Method */}
      <div>
        <label className="block text-white font-semibold mb-3">Кто убирает</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { id: 'chefs-clean', label: 'Повара сами убирают' },
            { id: 'cleaner', label: 'Есть отдельный уборщик' },
            { id: 'cleaning-company', label: 'Клининговая компания' },
            { id: 'mixed-cleaning', label: 'По-разному (кухню повара, зал уборщик)' }
          ].map(method => (
            <button
              key={method.id}
              onClick={() => updateFormData('cleaningMethod', method.id)}
              className={`
                p-4 rounded-xl border-2 transition-all duration-300
                ${formData.cleaningMethod === method.id
                  ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400'
                  : 'bg-white/10 border-white/30 hover:bg-white/20'
                }
              `}
            >
              <p className="text-white font-medium">{method.label}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step2;


import React from 'react';

const Step3 = ({ formData, updateFormData, toggleArrayField }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Шаг 3: Ваше меню</h2>

      {/* Menu Categories */}
      <div>
        <label className="block text-white font-semibold mb-3">Основные категории блюд</label>
        
        {/* Cold Dishes */}
        <div className="mb-4">
          <p className="text-purple-200 mb-2">Холодные блюда:</p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { id: 'salads', label: 'Салаты' },
              { id: 'appetizers', label: 'Закуски и нарезки' }
            ].map(item => (
              <label
                key={item.id}
                className={`
                  flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300
                  ${formData.coldDishes.includes(item.id)
                    ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400'
                    : 'bg-white/10 hover:bg-white/20'
                  } border-2 border-white/30
                `}
              >
                <input
                  type="checkbox"
                  checked={formData.coldDishes.includes(item.id)}
                  onChange={() => toggleArrayField('coldDishes', item.id)}
                  className="w-5 h-5 rounded accent-purple-500"
                />
                <span className="text-white font-medium">{item.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Hot Dishes */}
        <div className="mb-4">
          <p className="text-purple-200 mb-2">Горячие блюда:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { id: 'soups', label: 'Супы' },
              { id: 'meat', label: 'Мясные блюда' },
              { id: 'poultry', label: 'Птица' },
              { id: 'fish', label: 'Рыба' },
              { id: 'pizza', label: 'Пицца' },
              { id: 'pasta', label: 'Паста/макароны' },
              { id: 'garnish', label: 'Гарниры' }
            ].map(item => (
              <label
                key={item.id}
                className={`
                  flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300
                  ${formData.hotDishes.includes(item.id)
                    ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400'
                    : 'bg-white/10 hover:bg-white/20'
                  } border-2 border-white/30
                `}
              >
                <input
                  type="checkbox"
                  checked={formData.hotDishes.includes(item.id)}
                  onChange={() => toggleArrayField('hotDishes', item.id)}
                  className="w-5 h-5 rounded accent-purple-500"
                />
                <span className="text-white font-medium">{item.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Desserts and Drinks */}
        <div className="mb-4">
          <p className="text-purple-200 mb-2">Десерты и напитки:</p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { id: 'desserts-bought', label: 'Десерты (покупные)' },
              { id: 'desserts-made', label: 'Торты/пирожные (делаем сами)' },
              { id: 'fresh-juice', label: 'Свежевыжатые соки' },
              { id: 'coffee', label: 'Кофе' }
            ].map(item => (
              <label
                key={item.id}
                className={`
                  flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300
                  ${formData.dessertsAndDrinks.includes(item.id)
                    ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400'
                    : 'bg-white/10 hover:bg-white/20'
                  } border-2 border-white/30
                `}
              >
                <input
                  type="checkbox"
                  checked={formData.dessertsAndDrinks.includes(item.id)}
                  onChange={() => toggleArrayField('dessertsAndDrinks', item.id)}
                  className="w-5 h-5 rounded accent-purple-500"
                />
                <span className="text-white font-medium">{item.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Specialties */}
      <div>
        <label className="block text-white font-semibold mb-3">Особенности меню</label>
        <div className="space-y-3">
          {[
            { id: 'raw-eggs', label: 'Сырые яйца (в майонезе, креме)', warning: true },
            { id: 'raw-fish', label: 'Сырая рыба (суши, сашими)', warning: true },
            { id: 'rare-meat', label: 'Мясо с кровью (стейки rare)', warning: true },
            { id: 'kids-menu', label: 'Детское меню', warning: false },
            { id: 'none', label: 'Ничего из перечисленного', warning: false }
          ].map(item => (
            <label
              key={item.id}
              className={`
                flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all duration-300
                ${formData.menuSpecialties.includes(item.id)
                  ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400'
                  : 'bg-white/10 hover:bg-white/20'
                } border-2 border-white/30
              `}
            >
              <input
                type="checkbox"
                checked={formData.menuSpecialties.includes(item.id)}
                onChange={() => toggleArrayField('menuSpecialties', item.id)}
                className="w-5 h-5 rounded accent-purple-500"
              />
              <span className="text-white font-medium flex-1">{item.label}</span>
              {item.warning && formData.menuSpecialties.includes(item.id) && (
                <span className="text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded-lg">
                  Требует особого контроля
                </span>
              )}
            </label>
          ))}
        </div>
      </div>

      {/* Suppliers */}
      <div>
        <label className="block text-white font-semibold mb-3">Откуда берете продукты</label>
        <div className="grid grid-cols-2 gap-3">
          {[
            { id: '1-2', label: '1-2 постоянных поставщика', desc: 'Проще контролировать качество' },
            { id: '3-5', label: '3-5 разных поставщиков', desc: 'Средняя сложность контроля' },
            { id: '5+', label: 'Много поставщиков (больше 5)', desc: 'Требует усиленного контроля' },
            { id: 'retail', label: 'Покупаем в магазинах/на рынках', desc: 'Нужен тщательный отбор' }
          ].map(option => (
            <button
              key={option.id}
              onClick={() => updateFormData('suppliersCount', option.id)}
              className={`
                p-4 rounded-xl border-2 transition-all duration-300 text-left
                ${formData.suppliersCount === option.id
                  ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400'
                  : 'bg-white/10 border-white/30 hover:bg-white/20'
                }
              `}
            >
              <p className="text-white font-medium mb-1">{option.label}</p>
              <p className="text-xs text-purple-200">{option.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Delivery Frequency */}
      <div>
        <label className="block text-white font-semibold mb-3">Как часто привозят продукты</label>
        <div className="grid grid-cols-2 gap-3">
          {[
            { id: 'daily', label: 'Каждый день', icon: '📦' },
            { id: '2-3-week', label: '2-3 раза в неделю', icon: '📦' },
            { id: 'weekly', label: '1 раз в неделю', icon: '📦' },
            { id: 'self-purchase', label: 'Закупаемся сами', icon: '🛒' }
          ].map(option => (
            <button
              key={option.id}
              onClick={() => updateFormData('deliveryFrequency', option.id)}
              className={`
                p-4 rounded-xl border-2 transition-all duration-300 flex items-center gap-3
                ${formData.deliveryFrequency === option.id
                  ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400'
                  : 'bg-white/10 border-white/30 hover:bg-white/20'
                }
              `}
            >
              <span className="text-2xl">{option.icon}</span>
              <p className="text-white font-medium">{option.label}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Summary Info */}
      <div className="mt-8 p-4 bg-purple-500/10 rounded-xl border border-purple-400/30">
        <p className="text-purple-200 text-sm">
          💡 На основе ваших ответов мы создадим персонализированную систему ХАССП, 
          учитывающую все особенности вашего заведения и меню.
        </p>
      </div>
    </div>
  );
};

export default Step3;


import React, { useState, useEffect } from 'react';
import { Sparkles, FileText, Shield, Zap } from 'lucide-react';

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 max-w-2xl w-full text-center border border-white/20">
        {/* Animated Logo */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            <div className="absolute inset-2 bg-slate-900 rounded-full flex items-center justify-center">
              <Sparkles className="w-10 h-10 text-white animate-spin" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4">Создаем ваши документы ХАССП</h2>
          <p className="text-purple-200 text-lg">{currentAction}</p>
        </div>

        {/* Progress Bar */}
        <div className="space-y-4 mb-8">
          <div className="bg-white/10 rounded-full h-4 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <p className="text-purple-300">{progress}% завершено</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center flex-1">
                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-2
                  transition-all duration-300 transform
                  ${completedSteps.includes(step.id) 
                    ? 'bg-green-500/20 scale-110' 
                    : progress > (index * 20) 
                      ? 'bg-purple-500/20 animate-pulse' 
                      : 'bg-white/5'
                  }
                `}>
                  {step.icon}
                </div>
                <p className={`text-xs ${completedSteps.includes(step.id) ? 'text-green-400' : 'text-purple-300'}`}>
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-3 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white/5 rounded-xl p-4 transform transition-all duration-300 hover:scale-105"
              >
                <Icon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <p className="text-white font-semibold">{feature.title}</p>
                <p className="text-purple-300 text-sm">{feature.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Fun Facts */}
        <div className="mt-8 p-4 bg-purple-500/10 rounded-xl">
          <p className="text-purple-200 text-sm">
            💡 Знаете ли вы? Наша система генерирует документы в 50 раз быстрее, 
            чем традиционная разработка консультантами!
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeneratingScreen;


import React from 'react';
import { Trophy, FileText, Shield, Mail, Phone, Download, CheckCircle, Star, Clock } from 'lucide-react';

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
    { icon: Clock, text: 'Обновления документов 1 год' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="relative z-10 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-12 pt-12">
            <div className="w-32 h-32 mx-auto mb-6 relative animate-bounce">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-slate-900 rounded-full flex items-center justify-center">
                <Trophy className="w-16 h-16 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-white mb-4">Поздравляем! Документы готовы</h1>
            <p className="text-xl text-purple-200">
              Ваша система ХАССП для <span className="text-purple-300 font-semibold">"{formData.businessName || 'вашего заведения'}"</span> создана успешно
            </p>
          </div>

          {/* Documents Preview */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-purple-400" />
              Что включено в ваш пакет документов:
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {documentCategories.map((category, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">{category.title}</h3>
                  <ul className="space-y-1">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="text-purple-200 flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* Statistics */}
            <div className="mt-6 p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-400">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-white">35+</p>
                  <p className="text-purple-200 text-sm">документов</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">140-180</p>
                  <p className="text-purple-200 text-sm">страниц</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">100%</p>
                  <p className="text-purple-200 text-sm">готовность</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">3</p>
                  <p className="text-purple-200 text-sm">минуты</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 text-center transform hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-3xl font-bold text-white mb-4">Получите документы прямо сейчас!</h2>
            <p className="text-purple-100 text-lg mb-6">Документы будут отправлены на ваш email в течение 5 минут</p>
            
            {/* Pricing Card */}
            <div className="bg-white/20 backdrop-blur rounded-2xl p-6 mb-6 max-w-md mx-auto">
              <div className="text-white mb-4">
                <p className="text-sm text-purple-100 line-through opacity-75">19,990₽</p>
                <div className="flex items-center justify-center gap-3">
                  <p className="text-5xl font-bold">9,990₽</p>
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                    -50%
                  </div>
                </div>
                <p className="text-purple-100 mt-2">Специальная цена для первых клиентов</p>
              </div>
              
              <div className="space-y-3 text-left mb-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 text-white">
                      <Icon className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{benefit.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Ваш email для получения документов"
                  className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur text-white placeholder-purple-200 border border-white/30 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300"
                />
              </div>
            </div>
            
            <button className="w-full max-w-md py-4 bg-white text-purple-600 font-bold text-lg rounded-xl hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-3">
              <Download className="w-6 h-6" />
              Оплатить и получить документы
            </button>
            
            <p className="text-purple-100 text-sm mt-4">
              🔒 Безопасная оплата • 💳 Все способы оплаты • ↩️ Возврат денег в течение 14 дней
            </p>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { number: '500+', label: 'Довольных клиентов' },
              { number: '4.9', label: 'Средняя оценка' },
              { number: '24/7', label: 'Поддержка' },
              { number: '100%', label: 'Гарантия' }
            ].map((badge, index) => (
              <div key={index} className="bg-white/5 backdrop-blur rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-purple-400">{badge.number}</p>
                <p className="text-sm text-purple-200">{badge.label}</p>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center text-purple-200">
            <p className="mb-4 text-lg">Нужна помощь?</p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a href="tel:+79991234567" className="flex items-center justify-center gap-2 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                <span>+7 (999) 123-45-67</span>
              </a>
              <a href="mailto:support@haccp.ru" className="flex items-center justify-center gap-2 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span>support@haccp.ru</span>
              </a>
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Пн-Пт 9:00-18:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;


import React, { useState, useEffect } from 'react';
import { ChevronRight, Check, ArrowRight } from 'lucide-react';

// Импортируйте эти компоненты из отдельных файлов
// import Step1 from './Step1';
// import Step2 from './Step2';
// import Step3 from './Step3';
// import GeneratingScreen from './GeneratingScreen';
// import ResultScreen from './ResultScreen';

const HACCPConstructor = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    businessName: '',
    businessType: '',
    seatingCapacity: '',
    kitchenStaff: '',
    workSchedule: [],
    additionalServices: [],
    
    // Step 2
    cookingMethod: '',
    kitchenLayout: '',
    cookingEquipment: [],
    storageEquipment: [],
    washingEquipment: [],
    cleaningMethod: '',
    
    // Step 3
    coldDishes: [],
    hotDishes: [],
    dessertsAndDrinks: [],
    menuSpecialties: [],
    suppliersCount: '',
    deliveryFrequency: ''
  });
  
  const [progress, setProgress] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const filledFields = Object.values(formData).filter(value => 
      value !== '' && (Array.isArray(value) ? value.length > 0 : true)
    ).length;
    const totalFields = Object.keys(formData).length;
    setProgress((filledFields / totalFields) * 100);
  }, [formData]);

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

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArrayField = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  if (showResult) {
    return <ResultScreen formData={formData} />;
  }

  if (isGenerating) {
    return <GeneratingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.03"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <header className="px-6 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg shadow-purple-500/30">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">ХАССП Конструктор</h1>
                <p className="text-purple-200">Система пищевой безопасности за 15 минут</p>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="bg-white/10 backdrop-blur rounded-full h-3 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            {/* Steps */}
            <div className="flex justify-between mt-8">
              {[1, 2, 3].map(num => (
                <div key={num} className="flex items-center">
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg
                    transition-all duration-300
                    ${step >= num 
                      ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30' 
                      : 'bg-white/10 text-purple-300 backdrop-blur'
                    }
                  `}>
                    {step > num ? <Check className="w-6 h-6" /> : num}
                  </div>
                  <div className="ml-3">
                    <p className={`font-semibold ${step >= num ? 'text-white' : 'text-purple-300'}`}>
                      {num === 1 ? 'Ваше заведение' : num === 2 ? 'Ваша кухня' : 'Ваше меню'}
                    </p>
                    <p className="text-sm text-purple-300">
                      {num === 1 ? '5 минут' : num === 2 ? '10 минут' : '5 минут'}
                    </p>
                  </div>
                  {num < 3 && (
                    <ChevronRight className="w-5 h-5 text-purple-400 ml-8" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-6 pb-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
              {step === 1 && <Step1 formData={formData} updateFormData={updateFormData} toggleArrayField={toggleArrayField} />}
              {step === 2 && <Step2 formData={formData} updateFormData={updateFormData} toggleArrayField={toggleArrayField} />}
              {step === 3 && <Step3 formData={formData} updateFormData={updateFormData} toggleArrayField={toggleArrayField} />}
              
              {/* Navigation */}
              <div className="flex justify-between mt-8">
                <button
                  onClick={handleBack}
                  className={`
                    px-6 py-3 rounded-xl font-semibold transition-all duration-300
                    ${step === 1 
                      ? 'opacity-0 pointer-events-none' 
                      : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur'
                    }
                  `}
                >
                  Назад
                </button>
                
                <button
                  onClick={handleNext}
                  className="
                    px-8 py-3 rounded-xl font-semibold text-white
                    bg-gradient-to-r from-purple-500 to-pink-500
                    hover:from-purple-600 hover:to-pink-600
                    shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50
                    transition-all duration-300 transform hover:scale-105
                    flex items-center gap-2
                  "
                >
                  {step === 3 ? 'Создать документы' : 'Далее'}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HACCPConstructor;


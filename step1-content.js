// step1-content.js - Блок 1: Основные данные предприятия

function generateStep1Content() {
   return `
       <h3>1.1 Реквизиты организации</h3>
       
       <div class="grid-2">
           <div>
               <label style="display: block; margin-bottom: 8px; opacity: 0.9;">Наименование организации *</label>
               <input type="text" id="businessName" class="input" placeholder="Укажите полное название как в документах">
           </div>
           
           <div>
               <label style="display: block; margin-bottom: 8px; opacity: 0.9;">Организационно-правовая форма *</label>
               <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));">
                   <button class="btn btn-secondary" onclick="selectOption('legalForm', 'ip', this)">ИП</button>
                   <button class="btn btn-secondary" onclick="selectOption('legalForm', 'ooo', this)">ООО</button>
                   <button class="btn btn-secondary" onclick="selectOption('legalForm', 'ao', this)">АО</button>
                   <button class="btn btn-secondary" onclick="selectOption('legalForm', 'other', this)">Другое</button>
               </div>
               <div class="hint" style="margin-top: 10px;">
                   💡 Влияет на перечень обязательных документов ХАССП
               </div>
           </div>
       </div>
       
       <div class="grid-2">
           <div>
               <label style="display: block; margin-bottom: 8px; opacity: 0.9;">ИНН *</label>
               <input type="text" id="inn" class="input" placeholder="1234567890" maxlength="12">
           </div>
           
           <div>
               <label style="display: block; margin-bottom: 8px; opacity: 0.9;">Телефон *</label>
               <input type="tel" id="phone" class="input" placeholder="+7 (999) 123-45-67">
           </div>
       </div>
       
       <div>
           <label style="display: block; margin-bottom: 8px; opacity: 0.9;">Юридический адрес *</label>
           <input type="text" id="legalAddress" class="input" placeholder="Полный адрес регистрации организации">
       </div>
       
       <div>
           <label style="display: block; margin-bottom: 8px; opacity: 0.9;">Фактический адрес заведения</label>
           <input type="text" id="actualAddress" class="input" placeholder="Адрес, где фактически работает заведение">
           <label style="display: flex; align-items: center; margin-top: 10px; cursor: pointer;">
               <input type="checkbox" id="sameAddress" style="margin-right: 10px;" onchange="toggleSameAddress()">
               <span>Совпадает с юридическим адресом</span>
           </label>
       </div>
       
       <h3>1.2 Руководство и контакты</h3>
       
       <div class="grid-2">
           <div>
               <label style="display: block; margin-bottom: 8px; opacity: 0.9;">ФИО руководителя *</label>
               <input type="text" id="directorName" class="input" placeholder="Иванов Иван Иванович">
           </div>
           
           <div>
               <label style="display: block; margin-bottom: 8px; opacity: 0.9;">Должность руководителя *</label>
               <div class="grid">
                   <button class="btn btn-secondary" onclick="selectOption('directorPosition', 'director', this)">Директор</button>
                   <button class="btn btn-secondary" onclick="selectOption('directorPosition', 'manager', this)">Управляющий</button>
                   <button class="btn btn-secondary" onclick="selectOption('directorPosition', 'owner', this)">Собственник</button>
               </div>
           </div>
       </div>
       
       <div>
           <label style="display: block; margin-bottom: 8px; opacity: 0.9;">Email *</label>
           <input type="email" id="businessEmail" class="input" placeholder="info@restaurant.ru">
       </div>
       
       <div>
           <label style="display: block; margin-bottom: 8px; opacity: 0.9;">Ответственный за ХАССП *</label>
           <div class="grid">
               <button class="btn btn-secondary" onclick="selectOption('haccpResponsible', 'same', this)">Тот же руководитель</button>
               <button class="btn btn-secondary" onclick="selectOption('haccpResponsible', 'other', this)">Другое лицо</button>
           </div>
           <div id="otherResponsible" class="hidden" style="margin-top: 15px;">
               <input type="text" id="haccpResponsibleName" class="input" placeholder="ФИО ответственного за ХАССП">
               <input type="text" id="haccpResponsiblePosition" class="input" placeholder="Должность">
           </div>
       </div>
       
       <div class="hint">
           💡 <strong>Подсказка:</strong> По закону должно быть назначено ответственное лицо за пищевую безопасность. 
           Это может быть руководитель или назначенный сотрудник с соответствующим обучением.
       </div>
   `;
}

// Валидация для Блока 1
function validateStep1() {
   const errors = [];
   
   // Проверка обязательных полей
   const requiredFields = [
       { id: 'businessName', name: 'Наименование организации' },
       { id: 'inn', name: 'ИНН' },
       { id: 'phone', name: 'Телефон' },
       { id: 'legalAddress', name: 'Юридический адрес' },
       { id: 'directorName', name: 'ФИО руководителя' },
       { id: 'businessEmail', name: 'Email' }
   ];
   
   requiredFields.forEach(field => {
       const element = document.getElementById(field.id);
       if (!element || !element.value.trim()) {
           errors.push(`Поле "${field.name}" обязательно для заполнения`);
       }
   });
   
   // Проверка выбранных опций
   if (!formData.legalForm) {
       errors.push('Выберите организационно-правовую форму');
   }
   
   if (!formData.directorPosition) {
       errors.push('Выберите должность руководителя');
   }
   
   if (!formData.haccpResponsible) {
       errors.push('Укажите ответственного за ХАССП');
   }
   
   // Валидация ИНН
   const innElement = document.getElementById('inn');
   if (innElement && innElement.value) {
       const inn = innElement.value.replace(/\D/g, '');
       if (inn.length !== 10 && inn.length !== 12) {
           errors.push('ИНН должен содержать 10 или 12 цифр');
       }
   }
   
   // Валидация email
   const emailElement = document.getElementById('businessEmail');
   if (emailElement && emailElement.value) {
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       if (!emailRegex.test(emailElement.value)) {
           errors.push('Введите корректный email адрес');
       }
   }
   
   // Валидация телефона
   const phoneElement = document.getElementById('phone');
   if (phoneElement && phoneElement.value) {
       const phone = phoneElement.value.replace(/\D/g, '');
       if (phone.length !== 11) {
           errors.push('Введите корректный номер телефона');
       }
   }
   
   // Проверка дополнительных полей для "другого ответственного"
   if (formData.haccpResponsible === 'other') {
       const nameElement = document.getElementById('haccpResponsibleName');
       const positionElement = document.getElementById('haccpResponsiblePosition');
       
       if (!nameElement || !nameElement.value.trim()) {
           errors.push('Укажите ФИО ответственного за ХАССП');
       }
       
       if (!positionElement || !positionElement.value.trim()) {
           errors.push('Укажите должность ответственного за ХАССП');
       }
   }
   
   return errors;
}

// Автоформатирование полей
document.addEventListener('DOMContentLoaded', function() {
   // Форматирование ИНН
   document.addEventListener('input', function(e) {
       if (e.target.id === 'inn') {
           e.target.value = e.target.value.replace(/\D/g, '').substring(0, 12);
       }
       
       // Форматирование телефона
       if (e.target.id === 'phone') {
           let value = e.target.value.replace(/\D/g, '');
           if (value.length > 0) {
               if (value.length <= 11) {
                   value = value.replace(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/, '+7 ($2) $3-$4-$5');
                   if (value.indexOf('+7 (') !== 0 && value.length > 1) {
                       value = '+7 (' + value.substring(1, 4) + ') ' + value.substring(4, 7) + '-' + value.substring(7, 9) + '-' + value.substring(9, 11);
                   }
               }
           }
           e.target.value = value;
       }
   });
});

// Экспорт функций
if (typeof module !== 'undefined' && module.exports) {
   module.exports = { generateStep1Content, validateStep1 };
}

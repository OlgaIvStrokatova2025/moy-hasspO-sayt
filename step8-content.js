// step8-content.js - Блок 8: Персонал

function generateStep8Content() {
    return `
        <div class="step-content" id="step8">
            <h2>Блок 8: Персонал</h2>
            <p class="step-description">
                Укажите информацию о персонале, ответственном за внедрение и поддержание системы ХАССП
            </p>

            <!-- Ответственный за ХАССП -->
            <div class="form-group">
                <label for="haccp-responsible">
                    Ответственный за ХАССП (ФИО, должность) <span class="required">*</span>
                </label>
                <input type="text" 
                       id="haccp-responsible" 
                       name="haccpResponsible" 
                       placeholder="Иванов И.И., главный технолог"
                       required>
                <div class="field-hint">
                    Укажите ФИО и должность лица, ответственного за систему ХАССП
                </div>
            </div>

            <!-- Команда ХАССП -->
            <div class="form-group">
                <label for="haccp-team">
                    Команда ХАССП <span class="required">*</span>
                </label>
                <div id="haccp-team-container">
                    <div class="team-member" data-member="1">
                        <div class="member-row">
                            <input type="text" 
                                   name="teamMemberName1" 
                                   placeholder="ФИО члена команды"
                                   class="team-member-name">
                            <input type="text" 
                                   name="teamMemberPosition1" 
                                   placeholder="Должность"
                                   class="team-member-position">
                            <input type="text" 
                                   name="teamMemberResponsibility1" 
                                   placeholder="Область ответственности"
                                   class="team-member-responsibility">
                            <button type="button" class="remove-member-btn" onclick="removeMember(1)">
                                ✕
                            </button>
                        </div>
                    </div>
                </div>
                <button type="button" class="add-member-btn" onclick="addTeamMember()">
                    + Добавить члена команды
                </button>
                <div class="field-hint">
                    Минимум 3 человека в команде ХАССП
                </div>
            </div>

            <!-- Обучение персонала -->
            <div class="form-group">
                <label for="training-program">
                    Программа обучения персонала ХАССП <span class="required">*</span>
                </label>
                <textarea id="training-program" 
                          name="trainingProgram" 
                          rows="4"
                          placeholder="Опишите программу обучения персонала по принципам ХАССП"
                          required></textarea>
                <div class="field-hint">
                    Укажите темы обучения, периодичность, ответственных
                </div>
            </div>

            <!-- Квалификация персонала -->
            <div class="form-group">
                <label for="staff-qualifications">
                    Требования к квалификации персонала <span class="required">*</span>
                </label>
                <textarea id="staff-qualifications" 
                          name="staffQualifications" 
                          rows="3"
                          placeholder="Укажите минимальные требования к образованию и опыту работы персонала"
                          required></textarea>
            </div>

            <!-- Система мотивации -->
            <div class="form-group">
                <label for="motivation-system">
                    Система мотивации персонала
                </label>
                <textarea id="motivation-system" 
                          name="motivationSystem" 
                          rows="3"
                          placeholder="Опишите систему поощрений и мотивации персонала для соблюдения требований ХАССП"></textarea>
            </div>

            <!-- Контроль знаний -->
            <div class="form-group">
                <label for="knowledge-control">
                    Контроль знаний персонала <span class="required">*</span>
                </label>
                <div class="checkbox-group">
                    <label class="checkbox-label">
                        <input type="checkbox" name="knowledgeControlMethods" value="testing">
                        Тестирование
                    </label>
                    <label class="checkbox-label">
                        <input type="checkbox" name="knowledgeControlMethods" value="practical">
                        Практические задания
                    </label>
                    <label class="checkbox-label">
                        <input type="checkbox" name="knowledgeControlMethods" value="observation">
                        Наблюдение за работой
                    </label>
                    <label class="checkbox-label">
                        <input type="checkbox" name="knowledgeControlMethods" value="interview">
                        Собеседование
                    </label>
                </div>
            </div>

            <!-- Периодичность аттестации -->
            <div class="form-group">
                <label for="certification-frequency">
                    Периодичность аттестации персонала <span class="required">*</span>
                </label>
                <select id="certification-frequency" name="certificationFrequency" required>
                    <option value="">Выберите периодичность</option>
                    <option value="quarterly">Ежеквартально</option>
                    <option value="semi-annual">Раз в полгода</option>
                    <option value="annual">Ежегодно</option>
                    <option value="biennial">Раз в два года</option>
                </select>
            </div>

            <!-- Документооборот по персоналу -->
            <div class="form-group">
                <label for="personnel-documentation">
                    Документооборот по персоналу <span class="required">*</span>
                </label>
                <div class="checkbox-group">
                    <label class="checkbox-label">
                        <input type="checkbox" name="personnelDocs" value="training-records">
                        Журналы обучения
                    </label>
                    <label class="checkbox-label">
                        <input type="checkbox" name="personnelDocs" value="certification-records">
                        Протоколы аттестации
                    </label>
                    <label class="checkbox-label">
                        <input type="checkbox" name="personnelDocs" value="health-books">
                        Медицинские книжки
                    </label>
                    <label class="checkbox-label">
                        <input type="checkbox" name="personnelDocs" value="job-descriptions">
                        Должностные инструкции
                    </label>
                    <label class="checkbox-label">
                        <input type="checkbox" name="personnelDocs" value="training-certificates">
                        Сертификаты обучения
                    </label>
                </div>
            </div>

            <!-- Ответственные за обучение -->
            <div class="form-group">
                <label for="training-responsible">
                    Лица, ответственные за обучение персонала
                </label>
                <textarea id="training-responsible" 
                          name="trainingResponsible" 
                          rows="2"
                          placeholder="Укажите ФИО и должности лиц, ответственных за обучение"></textarea>
            </div>

            <!-- Внешние обучающие организации -->
            <div class="form-group">
                <label for="external-training">
                    Внешние обучающие организации
                </label>
                <textarea id="external-training" 
                          name="externalTraining" 
                          rows="2"
                          placeholder="Укажите партнерские организации для обучения персонала"></textarea>
            </div>
        </div>
    `;
}

// Функции для управления командой ХАССП
let memberCounter = 1;

function addTeamMember() {
    memberCounter++;
    const container = document.getElementById('haccp-team-container');
    const newMember = document.createElement('div');
    newMember.className = 'team-member';
    newMember.setAttribute('data-member', memberCounter);
    
    newMember.innerHTML = `
        <div class="member-row">
            <input type="text" 
                   name="teamMemberName${memberCounter}" 
                   placeholder="ФИО члена команды"
                   class="team-member-name">
            <input type="text" 
                   name="teamMemberPosition${memberCounter}" 
                   placeholder="Должность"
                   class="team-member-position">
            <input type="text" 
                   name="teamMemberResponsibility${memberCounter}" 
                   placeholder="Область ответственности"
                   class="team-member-responsibility">
            <button type="button" class="remove-member-btn" onclick="removeMember(${memberCounter})">
                ✕
            </button>
        </div>
    `;
    
    container.appendChild(newMember);
}

function removeMember(memberId) {
    const member = document.querySelector(`[data-member="${memberId}"]`);
    if (member && document.querySelectorAll('.team-member').length > 1) {
        member.remove();
    }
}

// Валидация для блока 8
function validateStep8() {
    const errors = [];
    
    // Проверка ответственного за ХАССП
    const responsible = document.getElementById('haccp-responsible');
    if (!responsible || !responsible.value.trim()) {
        errors.push('Укажите ответственного за ХАССП');
    }
    
    // Проверка команды ХАССП (минимум 3 человека)
    const teamMembers = document.querySelectorAll('.team-member');
    let filledMembers = 0;
    
    teamMembers.forEach(member => {
        const name = member.querySelector('.team-member-name');
        const position = member.querySelector('.team-member-position');
        if (name && name.value.trim() && position && position.value.trim()) {
            filledMembers++;
        }
    });
    
    if (filledMembers < 3) {
        errors.push('Команда ХАССП должна состоять минимум из 3 человек');
    }
    
    // Проверка программы обучения
    const trainingProgram = document.getElementById('training-program');
    if (!trainingProgram || !trainingProgram.value.trim()) {
        errors.push('Укажите программу обучения персонала');
    }
    
    // Проверка квалификации
    const qualifications = document.getElementById('staff-qualifications');
    if (!qualifications || !qualifications.value.trim()) {
        errors.push('Укажите требования к квалификации персонала');
    }
    
    // Проверка методов контроля знаний
    const controlMethods = document.querySelectorAll('input[name="knowledgeControlMethods"]:checked');
    if (controlMethods.length === 0) {
        errors.push('Выберите хотя бы один метод контроля знаний');
    }
    
    // Проверка периодичности аттестации
    const frequency = document.getElementById('certification-frequency');
    if (!frequency || !frequency.value) {
        errors.push('Выберите периодичность аттестации персонала');
    }
    
    // Проверка документооборота
    const docs = document.querySelectorAll('input[name="personnelDocs"]:checked');
    if (docs.length === 0) {
        errors.push('Выберите хотя бы один тип документооборота по персоналу');
    }
    
    return errors;
}

// Функция для получения данных блока 8
function getStep8Data() {
    const data = {
        haccpResponsible: document.getElementById('haccp-responsible')?.value || '',
        teamMembers: [],
        trainingProgram: document.getElementById('training-program')?.value || '',
        staffQualifications: document.getElementById('staff-qualifications')?.value || '',
        motivationSystem: document.getElementById('motivation-system')?.value || '',
        knowledgeControlMethods: Array.from(document.querySelectorAll('input[name="knowledgeControlMethods"]:checked'))
            .map(cb => cb.value),
        certificationFrequency: document.getElementById('certification-frequency')?.value || '',
        personnelDocs: Array.from(document.querySelectorAll('input[name="personnelDocs"]:checked'))
            .map(cb => cb.value),
        trainingResponsible: document.getElementById('training-responsible')?.value || '',
        externalTraining: document.getElementById('external-training')?.value || ''
    };
    
    // Собираем данные команды ХАССП
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach((member, index) => {
        const memberNum = index + 1;
        const name = document.querySelector(`input[name="teamMemberName${memberNum}"]`)?.value || '';
        const position = document.querySelector(`input[name="teamMemberPosition${memberNum}"]`)?.value || '';
        const responsibility = document.querySelector(`input[name="teamMemberResponsibility${memberNum}"]`)?.value || '';
        
        if (name.trim() || position.trim() || responsibility.trim()) {
            data.teamMembers.push({
                name: name,
                position: position,
                responsibility: responsibility
            });
        }
    });
    
    return data;
}

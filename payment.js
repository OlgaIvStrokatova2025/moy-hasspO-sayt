// payment.js - Заглушка для платежей

function purchase() {
    const email = document.getElementById('email').value;
    if (!email) {
        alert('Пожалуйста, введите email');
        return;
    }
    
    // Проверка email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Пожалуйста, введите корректный email');
        return;
    }
    
    alert(`🎉 Демо версия!\n\nВ реальной версии здесь будет:\n✅ Переход к оплате через ЮKassa\n✅ Генерация PDF документов\n✅ Отправка на email: ${email}\n\nСпасибо за тестирование!`);
}

// Экспорт функций
window.purchase = purchase;

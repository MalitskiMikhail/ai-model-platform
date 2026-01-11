// Ждем, пока страница полностью загрузится
document.addEventListener('DOMContentLoaded', () => {
    const subscribeBtn = document.querySelector('.btn-subscribe');
    const photoCards = document.querySelectorAll('.photo-card');

    // Функция для "разблокировки" контента
    function unlockContent() {
        photoCards.forEach(card => {
            card.style.filter = 'none'; // Убираем блюр
            const overlay = card.querySelector('.overlay');
            if (overlay) overlay.remove(); // Убираем иконку замка
        });

        subscribeBtn.textContent = 'Welcome, Member!';
        subscribeBtn.style.background = '#28a745'; // Меняем цвет на зеленый
    }

    // Слушаем клик по кнопке подписки
    subscribeBtn.addEventListener('click', () => {
        // В будущем здесь будет переход на оплату в Lemon Squeezy
        // А пока имитируем успех:
        const confirmed = confirm("Redirecting to payment... (Simulation: Click OK to pay)");

        if (confirmed) {
            unlockContent();
            // Сохраняем статус в памяти браузера, чтобы после перезагрузки не сбросилось
            localStorage.setItem('isSubscribed', 'true');
        }
    });

    // Проверяем при входе, не покупал ли юзер доступ ранее
    if (localStorage.getItem('isSubscribed') === 'true') {
        unlockContent();
    }
});
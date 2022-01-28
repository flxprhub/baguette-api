const Baguette = require('baguette-api')

const client = new Baguette({ 
    userId: yourid, // айди страницы ВКонтакте
    userData: "vk_access_token_settings=menu&vk_app_id=7874718&vk_are_notifications_enabled=0&vk_is_app_user=1&vk_is_favorite=1&vk_language=ru&vk_platform=desktop_web&vk_ref=other&vk_ts=1627660740&vk_user_id=...&sign=...", // проверочный ключ
});

async function sendPayment(link, amount) {
    await client.api.initialization("your firstname", "your lastname"); // Инициализация клиента
    const result = await client.api.sendPayment(link, amount); // Отправить запрос о переводе багетов
    
    console.log(`-> Перевел коины пользователю #${link} в размере ${amount}: ${result}`); // Возвращает ответ сервера
} // Функция отправки перевода пользователю

sendPayment(link, amount).catch(console.error); // Запуск функции «sendPayment»
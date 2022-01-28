import Baguette from 'baguette-api';

const client = new Baguette({ 
    userId: yourid, // айди страницы ВКонтакте
    userData: "vk_access_token_settings=menu&vk_app_id=7874718&vk_are_notifications_enabled=0&vk_is_app_user=1&vk_is_favorite=1&vk_language=ru&vk_platform=desktop_web&vk_ref=other&vk_ts=1627660740&vk_user_id=...&sign=...", // проверочный ключ
});

async function getBalance(userid) {
    await client.api.initialization("your firstname", "your lastname"); // Инициализация клиента
    const result = await client.api.getBalance(userid); // Отправить запрос получения баланса
    
    console.log(`-> Получил баланс пользователя #${userid}: ${result}`); // Возвращает текущий баланс указанного пользователя
} // Функция получения баланса пользователя

async function getMyBalance() {
    await client.api.initialization("your firstname", "your lastname"); // Инициализация клиента
    const result = await client.api.getMyBalance(); // Отправить запрос получения баланса
    
    console.log(`-> Получил баланс текущего пользователя: ${result}`); // Возвращает текущий баланс пользователя
} // Функция получения своего баланса

getBalance(userid).catch(console.error); // Запуск функции «getBalance»
getMyBalance().catch(console.error); // Запуск функции «getMyBalance»
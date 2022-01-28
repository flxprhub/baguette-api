<div align='center'><h1>baguette-api (<strong>❗ PROJECT SUSPENTED</strong>)</h1></div>
<div align='center'>Простой модуль для работы с API сервиса Baguette Coin</div>

<div align='center'>
  <a href='https://npm.im/baguette-api'><b>📚 NPM пакет</b></a>
    <span>&nbsp;•&nbsp;</span>
  <a href='https://github.com/flxprhub/baguette-api/tree/main/examples'><b>📝 Примеры работы</b></a>
    <span>&nbsp;•&nbsp;</span>
  <a href='https://vk.com/baguette_game'><b>🙋‍♂ Группа коина</b></a>
</div>

<div align='center'><h2>Установка</h2></div>
<div align='center'><h3>NPM</h3></div>

```js
$ npm i baguette-api
```

<div align='center'><h3>YARN</h3></div>

```js
$ yarn add baguette-api
```

<div align='center'><h2>Начало работы</h1></div>

Для начала использования, вам нужно создать в своей папке исполняемый файл, пусть это будет **index.js**

Теперь его нужно открыть и импортировать библиотеку:
```js
const Baguette = require('baguette-api')

const client = new Baguette({ 
  userId: yourid, // айди страницы ВКонтакте
  userData: "vk_access_token_settings=menu&vk_app_id=7874718&vk_are_notifications_enabled=0&vk_is_app_user=1&vk_is_favorite=1&vk_language=ru&vk_platform=desktop_web&vk_ref=other&vk_ts=1627660740&vk_user_id=...&sign=...", // проверочный ключ
});

```

<div align='center'><h2>Пример отправки метода</h1></div>

Допустим, возьмем в пример метод click. Вызываем метод:
```js
async function run() {
  await client.api.initialization("your firstname", "your lastname"); // Инициализация клиента
  const result = await client.api.click(); // Отправить запрос о клике
    
  console.log(`-> Кликнул! Ваш баланс: ${result.bal}`); // Возвращает ваш текущий баланс
} // Функция клика

run().catch(console.error);
```

# baguette-api
Простой модуль для работы с Baguette Coin



### Установка

```js
$ npm i baguette-api
```

# Начало работы
Для начала использования, вам нужно создать в своей папке исполняемый файл, пусть это будет **index.js**

Теперь его нужно открыть и импортировать библиотеку:
```js
const Baguette = require('baguette-api')

const client = new Baguette({ 
    userId: айди страницы вк, 
    userData: "",
});

```



# Доступные методы

### click
Отправляет запрос о клике на сервер Baguette Coin (возвращает {"bal": вашбаланс})

```js
async function run() {
    const result = await client.api.click();
    
    console.log(result);
}

run().catch(console.error);
```



### getBalance
Получить баланс любого пользователя
```js
async function run() {
    const result = await client.api.getBalance(id);
    console.log(result);
}


run().catch(console.error);
```

|Параметр|Тип|Описание|
|-|-|-|
|id|Number|Пользователь для получения баланса|



### getMyBalance
Получить свой баланс
```js
async function run() {
    const result = await client.api.getMyBalance();
    console.log(result);
}


run().catch(console.error);
```


### sendPayment
Получить баланс любого пользователя/пользователей
```js
async function run() {
    const result = await client.api.sendPayment(id, amount);
    console.log(result);
}


run().catch(console.error);
```

|Параметр|Тип|Описание|
|-|-|-|
|id|Number|Айди пользователя, которому нужно отправить коины|
|amount|Number|Сумма, которую нужно отправить пользователю|
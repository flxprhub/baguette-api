const axios = require('axios');
const chalk = require('chalk');

class API {
    /**
     * @param {String} userData 
     * @param {Number} userId
     */
    constructor(userData, userId) {
        this.userData = userData;
        this.userId = userId;
    }


    // Инициализация входа
    async initialization(first_name, last_name) {
        const request = await axios({
            method: 'post',
            url: 'https://baguette-game.com/',
            data: {
                "fn": first_name,
                "id": this.userId,
                "ln": last_name,
                "params": this.userData,
            }
        }).catch(() => {
            throw {
                status: 'error',
                description: 'Ошибка авторизации клиента. Проверьте авторизационные данные'
            }
        });

        return request.data;
    }

    async connect(id, link, key) {
        const request = await axios({
            method: 'post',
            url: 'https://baguette-game.com/api/ConnectServer',
            data: {
                "id": id,
                "server": link,
                "key": key,
            }
        }).catch(() => {
            throw {
                status: 'error',
                description: 'Ошибка авторизации клиента. Проверьте авторизационные данные'
            }
        });

        return request.data;
    }

    // Клик
    async click() {
        const request = await axios({
            method: 'post',
            url: 'https://baguette-game.com/NewClick',
            data: {
                "id": this.userId,
                "pr": this.userData,
            }
        }).catch(() => {
            throw {
                status: 'error',
                description: 'Ошибка авторизации клиента. Проверьте авторизационные данные'
            }
        });

        return request.data;
    }

    // Получить баланс пользователя
    async getBalance(id) {
        if (!id) {
            throw (`${chalk.red(`Baguette Coin error:`)} не указан параметр id`)
        }

        const request = await axios({
            method: 'post',
            url: 'https://baguette-game.com/GetUserBalance',
            data: {
                "id": id,
            }
        }).catch(() => {
            throw {
                status: 'error',
                description: 'Ошибка авторизации клиента. Проверьте авторизационные данные'
            }
        });

        return request.data;
    }

    // Получение моего баланса
    async getMyBalance() {
        const request = await axios({
            method: 'post',
            url: 'https://baguette-game.com/GetUserBalance',
            data: {
                "id": this.userId,
            }
        }).catch(() => {
            throw {
                status: 'error',
                description: 'Ошибка авторизации клиента. Проверьте авторизационные данные'
            }
        });

        return request.data;
    }

    // Отправить коины пользователю
    async sendPayment(link, amount) {
        if (!link) {
            throw (`${chalk.red(`Baguette Coin error:`)} не указан параметр id`)
        }
        if (!amount) {
            throw (`${chalk.red(`Baguette Coin error:`)} не указан параметр amount`)
        }
        
        const request = await axios({
            method: 'post',
            url: 'https://baguette-game.com/Transfer',
            data: {
                "Amount": amount,
                "LinkVkUser": link,
                "id": this.userId,
                "params": this.userData,
            }
        }).catch(() => {
            throw {
                status: 'error',
                description: 'Ошибка авторизации клиента. Проверьте авторизационные данные'
            }
        });

        return request.data;
    }
}





module.exports = class Baguette {
    /**
     * @param {Object} options - Опции класса
     * 
     * 
     * @param {String} options.userData - API-ключ
     * @param {Number} options.userId - ID пользователя
     */
    constructor(options) {
        if (!options.userData) throw (`\n${chalk.red(`Baguette Coin error:`)} не указан авторизационный параметр userData\n`) // Уникальная ссылка пользователя
        if (!options.userId) throw (`\n${chalk.red(`Baguette Coin error:`)} не указан авторизационный параметр userId\n`) // Уникальный цифровой айди пользователя

        this.userData = options.userData;
        this.userId = options.userId;
        this.api = new API(this.userData, this.userId);
    }
};
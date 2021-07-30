const axios = require('axios');
const chalk = require('chalk');

class API {
    /**
     * @param {String} userData 
     * @param {String} userId 
     */
    constructor(userData, userId) {
        this.userData = userData;
        this.userId = userId;
    }


    // Мой топ
    async click() {
        await axios.post("https://baguette-game.com:3030/NewClick", {
            data: {
                "id": this.userId,
                "pr": this.userData,
            },
        }).then((response) => {
            if (!response.data.bal) {
                throw {
                    status: 'error',
                    description: 'Ошибка авторизации клиента. Проверьте авторизационные данные'
                }
            } else {
                return response.data
            }
        }).catch(() => {
            throw {
                status: 'error',
                description: 'Ошибка авторизации клиента. Проверьте авторизационные данные'
            }
        });
    }

    // Получить баланс
    async getBalance(id) {
        if (!id) {
            throw (`${chalk.red(`Baguette Coin error:`)} не указан параметр id`)
        }

        await axios.post("https://baguette-game.com:3030/GetUserBalance", {
            data: {
                "id": id,
            },
        }).then((response) => {
            if (response.data.bal) {
                throw {
                    status: 'error',
                    description: 'Ошибка авторизации клиента. Проверьте авторизационные данные'
                }
            } else {
                return response.data
            }
        }).catch(() => {
            throw {
                status: 'error',
                description: 'Ошибка авторизации клиента. Проверьте авторизационные данные'
            }
        });
    }

    // Получение моего баланса
    async getMyBalance() {
        await axios.post("https://baguette-game.com:3030/GetUserBalance", {
            data: {
                "id": this.userId,
            },
        }).then((response) => {
            if (response.data.bal) {
                throw {
                    status: 'error',
                    description: 'Ошибка авторизации клиента. Проверьте авторизационные данные'
                }
            } else {
                return response.data
            }
        }).catch(() => {
            throw {
                status: 'error',
                description: 'Ошибка авторизации клиента. Проверьте авторизационные данные'
            }
        });
    }

    // Отправить коины пользователю
    async sendPayment(link, amount) {
        if (!id) {
            throw (`${chalk.red(`Baguette Coin error:`)} не указан параметр id`)
        }
        if (!amount) {
            throw (`${chalk.red(`Baguette Coin error:`)} не указан параметр amount`)
        }
        
        await axios.post("https://baguette-game.com:3030/Transfer", {
            data: {
                "Amount": amount,
                "LinkVkUser": link,
                "id": this.userId,
                "params": this.userData,
            },
        }).then((response) => {
            if (!response.data.bal && response.data.status != "Перевод был успешно совершен") {
                throw {
                    status: 'error',
                    description: 'Ошибка авторизации клиента. Проверьте авторизационные данные'
                }
            } else {
                return response.data
            }
        }).catch(() => {
            throw {
                status: 'error',
                description: 'Ошибка авторизации клиента. Проверьте авторизационные данные'
            }
        });
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
        if (!options.userId) throw (`\n${chalk.red(`Baguette Coin error:`)} не указан авторизационный параметр userId\n`)
        this.userData = options.userData;
        this.userId = options.userId;
        this.api = new API(this.userData, this.userId);
    }
};
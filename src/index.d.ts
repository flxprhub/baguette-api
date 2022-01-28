export class Baguette {
    /**
     * @param {String} userData
     * @param {Number} userId
     */
    constructor(userData: string, userId: number);

    /**
     * Инициализация клиента
     */
    initialization(first_name: string, last_name: string): void;

    /**
     * Клик
     */
    click(): void;

    /**
     * Получить баланс пользователя
     * @param {Number} id
     */
    getBalance(id: number): void;

    /**
     * Получить свой баланс
     * @param {Number} id
     */
     getMyBalance(id: number): void;

    /**
     * Отправить коины пользователю
     * @param {String} link
     * @param {Number} amount
     */
    sendPayment(link: string, amount: number): void;
}
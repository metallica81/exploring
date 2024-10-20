const TelegramApi = require('node-telegram-bot-api')

const {gameOptions, againOptions} = require('./options')

const token = '7831891707:AAHvBmhyOjnwd9Bbg4vOeAdkx8Ug3sv6H0c'

const bot = new TelegramApi(token, {polling: true})

const chats = {}

const startGame = async (chatId) => {
    await bot.sendMessage(chatId, 'отгадай цифру от 0 до 9')
    const randomeNum = Math.floor(Math.random() * 10)
    chats[chatId] = randomeNum;
    await bot.sendMessage(chatId, 'отгадай', gameOptions)
}

const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Начальное приветствие'},
        {command: '/info', description: 'Получить информацию о пользователе'},
        {command: '/game', description: 'Угадай число'}
    ])
    
    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
    
        if (text === '/start') {
            await bot.sendSticker(chatId, 'https://data.chpic.su/stickers/m/msgcldngzszss/msgcldngzszss_100.webp')
            return bot.sendMessage(chatId, 'опять это ты... боже чел иди умойся...')
        }
    
        if (text === '/info') {
            return bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name} ${msg.from.last_name}`)
        }

        if (text === '/game') {
            return startGame(chatId);
        }
        return bot.sendMessage(chatId, 'я тебя не понимаю....')
        // await bot.sendMessage(chatId, `Ты написал мне ${text}`)
    })

    bot.on('callback_query', async msg => {
        const data = msg.data;
        const chatId = msg.message.chat.id;

        if (data === '/again') {
            return startGame(chatId);
        }

        if (data === chats[chatId]) {
            return bot.sendMessage(chatId, `Поздравляю, ты отгадал цифру ${chats[chatId]}`, againOptions)
        } else {
            return bot.sendMessage(chatId, `не отгадал цифру ${chats[chatId]}`, againOptions)
        } 
        
    })
}

start() 
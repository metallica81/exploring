require('dotenv').config();
const {Bot, Keyboard} = require('grammy');

const bot = new Bot(process.env.BOT_API_KEY)

bot.command('start', async (ctx) => {
    await ctx.reply('Введите номер аудитории, в которой вы находитесь');
})

bot.hears(['Не работает проектор', 'Не работает компьютер', 
    'Не работают динамики', 'Не работает микрофон', 
    'Не отображается флешка'], async (ctx) => {

    let num_study = ctx.message.text;

    const problemKeyBoard = new Keyboard().text('Добавить')
    .row().text('Не стоит').resized();

    console.log(num_study);

    
    await ctx.reply(`Добавить примечание?`, {
        reply_markup: problemKeyBoard
    });

});

bot.hears(['Да', 'Нет'], async (ctx) => {
    let num_study = ctx.message.text;
    const problemKeyBoard = new Keyboard().text('Не работает проектор')
    .row().text('Не работает компьютер').row().text('Не работают динамики')
    .row().text('Не работает микрофон').row().text('Не отображается флешка').resized();

    console.log(num_study);
    if (ctx.message.text == 'Да') {
        await ctx.reply(`Выберите вариант`, {
            reply_markup: problemKeyBoard
        });
    }

    else {
        await ctx.reply(`Проблема с работой какой-либо программы?`, {
            reply_markup: problemKeyBoard
        });
    }
});

bot.on('message', async (ctx) => {
    let num_study = ctx.message.text;
    const problemKeyBoard = new Keyboard().text('Да').row().text('Нет').resized();
    console.log(num_study);
    return ctx.reply(`У вас проблема с оборудованием?`, {
        reply_markup: problemKeyBoard
    });
    
    // let problem = ctx.message.text;
    // await ctx.reply(`Хотите добавить примечание?`);
})


bot.start();
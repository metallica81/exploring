require('dotenv').config();
const {Bot, Keyboard, Api} = require('grammy');
//const { conversations, createConversation } = require('@grammyjs/conversations');

const bot = new Bot(process.env.BOT_API_KEY)
//bot.use(conversations());
bot.api.setMyCommands([
    { command: 'start', description: 'Оформить заявку' },
    ]);
let num_study;
let problem_case_1;
let problem_case_2;
let global_problem;
let comment;


bot.command('start', async (ctx) => {
    await ctx.reply('Введите номер аудитории, в которой вы находитесь');
    
})

bot.hears(['Не стоит', 'Добавить'], async (ctx) => {

    const problemKeyBoard_call = new Keyboard().text('Вызвать сотрудника').row()
    .text('Нет, уже справились с проблемой').row().resized();

    if (ctx.message.text == 'Добавить') {

        // // Просим пользователя написать комментарий
        // await ctx.reply('Пожалуйста, напишите ваш комментарий.');

        // // Ожидаем единственного ответа (комментария) от пользователя
        // const comment = await ctx.conversation.wait();

        // // Обрабатываем полученный комментарий
        // console.log('comment=', comment.message.text);
        // await ctx.reply('Ваш комментарий записан.');

        // // Продолжаем основную логику после получения комментария
        // await ctx.reply("Спасибо! Продолжаем работу.");
        
    }

    await ctx.reply(`Делаем вызов?`, {
        reply_markup: problemKeyBoard_call
    });
    
})


bot.hears(['Не работает проектор', 'Не работает компьютер', 
    'Не работают динамики', 'Не работает микрофон', 
    'Не отображается флешка', 'Не работает power point', 
    'Не открываются файлы из флешки', 'Не запускается видео'], async (ctx) => {

    const problemKeyBoard = new Keyboard().text('Добавить')
    .row().text('Не стоит').resized();

    problem_case_2 = ctx.message.text;
    console.log('problem_case_2=', problem_case_2)

    global_problem = problem_case_1 + ', а именно, ' + problem_case_2;
    console.log("global_problem=", global_problem);

    await ctx.reply(`Добавить примечание?`, {
        reply_markup: problemKeyBoard
    });

    if (ctx.message.text == 'Добавить') {
        //note
    }

});


bot.hears(['Да', 'Нет'], async (ctx) => {

    const answer_problem_facility = ctx.message.text;

    const problemKeyBoard_Yes = new Keyboard().text('Не работает проектор')
    .row().text('Не работает компьютер').row().text('Не работают динамики')
    .row().text('Не работает микрофон').row().text('Не отображается флешка').resized();

    const problemKeyBoard_No = new Keyboard().text('Не работает power point')
    .row().text('Не открываются файлы из флешки').row().text('Не запускается видео').resized();

    console.log("answer_problem_facility =", answer_problem_facility);

    if (ctx.message.text == 'Да') {
        await ctx.reply(`Выберите вариант`, {
            reply_markup: problemKeyBoard_Yes
        });
        problem_case_1 = 'Проблемы с оборудованием';
        console.log("problem_case_1=", problem_case_1);
    }

    else {
        await ctx.reply(`Проблема с работой какой-либо программы?`, {
            reply_markup: problemKeyBoard_No
        });
        problem_case_1 = 'Проблемы с программой';
        console.log("problem_case_1=", problem_case_1);
    }
});

bot.on('message', async (ctx) => {

    const messageText = ctx.message.text;
    const problemKeyBoard = new Keyboard().text('Да').row().text('Нет').resized();

    if (/^\d+$/.test(messageText)) {  // Регулярное выражение для проверки целого числа
        num_study = messageText;
        console.log("num_study=", num_study);
        await ctx.reply(`У вас проблема с оборудованием?`, {
        reply_markup: problemKeyBoard
    });
        

    } else {
        await ctx.reply(`Введите подходящий запрос`);
    }
    
});


bot.start();
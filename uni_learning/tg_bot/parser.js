const puppeteer = require('puppeteer');
const fs = require('fs').promises;
//const base_shat = require('./data_base.json');

let parse_shatsionok = (async () => {

    const browser = await puppeteer.launch({headless: false}); //headless - открытие в фоновом режиме
    const page = await browser.newPage();
    await page.goto('https://www.miit.ru/depts/21123/people'); //переходим в раздел сотрудников отдела инф ИЭФ

    await page.click('a[href="/people/27900"]'); //переходим на стринцу Павла Васильевича

    //здесь же оставлю на Врублёвского href="/people/405" на будущее
    //Хомутов href="/people/488332"

    await page.click('.page__sub-menu-header__title'); //раскрываем меню информации

    await page.click('a[href="/people/27900/timetable"]'); //переходим в расписание

    let array_date = await page.evaluate(() => {
        
        function parse_date() {
            let dates = '';
            let grouped_dates = [];
        
            for (let i = 0; i < 12; i++) {

                dates += ' ' + document.querySelectorAll(".info-block__header-text")[i].innerText;

            }
            
            console.log(dates);

            dates = dates.replace(/(\r\n|\n|\r)/gm, "").replace(/\s+/g, ' ').trim(); //убираем переносы

            dates = dates.split(/\s+/); 
        
            for (let i = 0; i < 36; i += 3) {
                grouped_dates.push([dates[i], dates[i + 1], dates[i + 2]]);
            }
        
            return grouped_dates.sort((a, b) => a[1] - b[1]);
        }
        

        let result_array = [];

        for (let i = 0; i < 12; i++) {

            let day_week = {
                date: [],
                classroom: null,
            };

            day_week.date = parse_date()[i];

            day_week.is_work = [false, day_week.classroom]; // Устанавливаем is_work после инициализации day_week

            result_array.push(day_week);

        }

        return result_array;
    })

    await browser.close();

    return array_date;
})

const scheduleData = parse_shatsionok();
  
async function writeDataToFile() {
    try {
        // Дожидаемся данных от функции `parse_shatsionok`
        const data = await parse_shatsionok();

        // Преобразуем данные в JSON и записываем в файл
        await fs.writeFile('data_base_main.json', JSON.stringify(data, null, 4));
        console.log('File successfully written');
    } catch (err) {
        console.log('Error writing file:', err);
    }
}

// Запускаем запись данных в файл
writeDataToFile();

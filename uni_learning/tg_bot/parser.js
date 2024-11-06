const puppeteer = require('puppeteer');
const fs = require('fs');

let parse_shatsionok = (async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://www.miit.ru/depts/21123/people'); //переходим в раздел сотрудников отдела инф ИЭФ

    await page.click('a[href="/people/27900"]'); //переходим на стринцу Павла Васильевича

    //здесь же оставлю на Врублёвского href="/people/405" на будущее
    //Хомутов href="/people/488332"

    await page.click('.page__sub-menu-header__title'); //раскрываем меню информации

    await page.click('a[href="/people/27900/timetable"]'); //переходим в расписание

    let array_date = await page.evaluate(() => {
        
        let dates = '';

        let grouped_dates = new Array;

        for (let i = 0; i < 12; i++) {

            dates += ' ' + (document.querySelectorAll(".info-block__header-text")[i].innerText); //убираем переносы

        }

        dates = dates.replace(/(\r\n|\n|\r)/gm, "");

        dates = dates.replace(/\s+/g, ' ').trim(); //убираем лишние пробелы

        dates = dates.split(/\s+/); //делим по пробелам

        for (let i = 0; i < 36; i+=3) {
            
            grouped_dates.push([dates[i], dates[i + 1], dates[i + 2]]);

        }

        return grouped_dates.sort((a, b) => a[1] - b[1]); //делаем сортировку по числу
    })

    console.log(array_date);

    
    await browser.close();
})

parse_shatsionok();




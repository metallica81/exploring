const puppeteer = require('puppeteer');
const fs = require('fs');

let parse_shatsionok = (async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://www.miit.ru/people/27900/timetable');

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

        return grouped_dates;
    })

    console.log(array_date);

    
    await browser.close();
})

parse_shatsionok();




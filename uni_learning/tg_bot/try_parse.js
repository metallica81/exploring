const puppeteer = require('puppeteer');

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
            

            let each_day = document.querySelectorAll(".info-block.info-block_collapse.show");

            for (let element of each_day) {

                dates.concat(element.innerText.trim()); // Убираем лишние пробелы и переносы строк

            }

            // dates = dates.replace(/(\r\n|\n|\r)/gm, "").replace(/\s+/g, ' ').trim(); //убираем переносы

            // dates = dates.split(/\s+/); 
        
            // for (let i = 0; i < 36; i += 3) {
            //     grouped_dates.push([dates[i], dates[i + 1], dates[i + 2]]);
            // }
        
            //return grouped_dates.sort((a, b) => a[1] - b[1]); //сартировка

            return dates;

        }
        

        // let result_array = [];

        // for (let i = 0; i < 12; i++) {

        //     let day_week = {
        //         date: [],
        //         classroom: null,
        //     };

        //     day_week.date = parse_date()[i];

        //     day_week.is_work = [false, day_week.classroom]; // Устанавливаем is_work после инициализации day_week

        //     result_array.push(day_week);

        // }

        // return result_array;

        return parse_date();
    })

    console.log(array_date);

    
    await browser.close();
})

parse_shatsionok();
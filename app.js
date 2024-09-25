//this file is only for diciding problems on leetcode!!!



//task1

/*function twoSum(nums, target) {
    let result = [];
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push(i, j);
            }
        }
    }
    
    return result;
}

// Пример использования
let nums = [2, 7, 11, 15];
let target = 9;

console.log(twoSum(nums, target));*/

//task2

/*function argumentsLength() {
    return arguments.length;
}

// Пример использования
console.log(argumentsLength(5)); // Выведет: 1
console.log(argumentsLength(2, 7, 11)); // Выведет: 3
console.log(argumentsLength()); // Выведет: 0 */

//task3

/*
function isPalindrome(x) {
    // Проверяем, является ли число положительным
    if (x < 0) {
        return false;
    }

    // Преобразуем число в строку
    let str_x = x.toString();

    // Инициализируем два указателя
    let left = 0;
    let right = str_x.length - 1;

    // Сравниваем символы справа налево
    while (left < right) {
        if (str_x[left] !== str_x[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}
console.log(isPalindrome(121));
*/

//score of a string

/*let s = prompt("Введите значение:");
let sum = 0;
for (let i = 1; i < s.length; i++) {
    sum += (Math.abs(s[i - 1].charCodeAt(0) - s[i].charCodeAt(0)));
}
alert(sum);*/

//roman to integer
/*
function romanToInt(s) {
    let arr = ["I", "V", "X", "L", "C", "D", "M"];


    let values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let sum = 0;


    let prevIndex = 0;

    for (let i = s.length - 1; i >= 0; i--) {

        if (arr.indexOf(s[i]) >= prevIndex) {
        sum = sum + values[s[i]];
        } else {

        sum = sum - values[s[i]];
        }

        prevIndex = arr.indexOf(s[i]);
    }
    return sum;
}
console.log(romanToInt("MCMXCIV"));
*/

//1
/*function suum(x, y) {
    let result = x + y;
    return result;
}
let first = Number(prompt());
let second = Number(prompt());
alert(suum(first, second));*/

//longesstr

/*
/**
 * @param {string[]} strs
 * @return {string}

var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";
    
    const shortestStr = strs.reduce((a, b) => a.length < b.length ? a : b);
    
    for (let i = 0; i < shortestStr.length; i++) {
        for (const str of strs) {
            if (str[i] !== shortestStr[i]) {
                return shortestStr.slice(0, i);
            }
        }
    }
    
    return shortestStr;
};
let st = ["flower","flow","flight"];

alert(longestCommonPrefix(st)); */


//valid parentheses

/*
var isValid = function(s) {
    let count_1 = 0;
    let count_2 = 0;
    let count_3 = 0;
    let count_4 = 0;
    let count_5 = 0;
    let count_6 = 0;
    let flag = null;

    for (let i = 0; i <= s.length; i++) {
        if (s[i] == "(") {
            count_1 += 1;
        }

        if (s[i] == ")") {
            count_2 += 1;
        }

        if (s[i] == "[") {
            count_3 += 1;
        }

        if (s[i] == "]") {
            count_4 += 1;
        }

        if (s[i] == "{") {
            count_5 += 1;
        }

        if (s[i] == "}") {
            count_6 += 1;
        }
        console.log(count_1);    
    }
    console.log((count_1 != 0) || (count_2 != 0) || (count_3 != 0) || (count_4 != 0) || (count_5 != 0) || (count_6 != 0))
    if ((count_1 != 0) || (count_2 != 0) || (count_3 != 0) || (count_4 != 0) || (count_5 != 0) || (count_6 != 0)) {
        if ((count_1 - count_2 == 0) & (count_3 - count_4 == 0) & (count_5 - count_6 == 0)) {
            flag == true;
            console.log(flag);
        }
        else {
            flag == false;
        }
    }
    return flag;
};

s = "()[]{}";
console.log(isValid(s)); */

//merge two sorted lists

/*
function MergeTwoLists(list1, list2) {
    return (list1.concat(list2)).sort();
};

console.log(MergeTwoLists([1, 2, 4], [1, 3, 4]))*/

//occurrence of needle in haystack

/*
function strStr(haystack, needle) {
    /*for (let i = 0; i <= needle.lenght; i++) {
        for (let j = 0; j <= needle.lenght; j++) {
            if ((haystack[i] == needle[j])) {
                
            }
        }
        
    }
   console.log(haystack.indexOf(needle));
   
}

strStr("adfsad", "asad")
*/

//contains dublicate

//function containDublicate(nums) {

//button-feature

/*
let inputIn = document.querySelector('.input-in'); //input
let button = document.querySelector('button'); //button

button.onclick = function () {
    console.log(inputIn.value); //NaN - not a number
}

function containsDublicate(nums) {
    for (let i = 0; i <= nums)
    return [nums];
}
containsDublicate(inputIn.value);
*/


//containsDublicate 

/*
function containsDublicate(nums) {
    let set = new Set(nums);
    flag = null;
    if (nums.length == set.size) {
        flag = false;
    }
    else {
        flag = true;
    }


    return console.log(flag);
    
}

containsDublicate([1, 2, 3, 4]);
*/

//consistent string

/*
function conString(allowed, words) {
    set1 = Set(allowed.split(' '));
    setWord = Set(words);
    
    let count = 0;
    for (const symb of words) {
        if (symb.split(' ') in )
    }
} */


//number component

/*
function findComponent(num) {
    let numBin1;
    let numBin2 = '';
    
    try {
        numBin1 = dec2bin(num);
    } catch (error) {
        console.error('Error:', error);
        return null; 
    }

    numBin1 = String(numBin1);

    for (let i = 0; i < numBin1.length; i++) { 
        if (numBin1[i] === "0") {
            numBin2 += "1";
        } else {
            numBin2 += "0";
        }
    }

    return parseInt(numBin2, 2);
}

function dec2bin(dec) {
    return dec.toString(2);
}

console.log(findComponent(11));
*/


//isAcronym

/*
function isAcronym(words, s) {
    let s1 = '';
    let flag = false;
    for(let i = 0; i < words.length; i++) {

        s1 += words[i][0];
    }

    if (s1 == s) {
        flag = true;
    }
    return flag;
}

console.log(isAcronym(["alice","bob","charlie"], "abc"))
*/


//concat array

/*
function getConcatenation(nums) {
    let con_1 = nums.slice();
    
    let con_2 = con_1.concat(nums);
    return con_2;
}
console.log(getConcatenation([1, 2, 3, 4])); */


//num of good pairs

/*
function numIdentical(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                count += 1;
            }
        }
    }
    return count;
}

numIdentical([1,2,3,1,1,3]); */

//singleNum

/*
function singleNumber(nums) {
    let count = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        0: 0
    }
    
    let con = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let [key, value] of Object.entries(count)) {
            if (key == nums[i]) {
                /*console.log(key, nums[i], key == nums[i])*/
               /* count[key] += 1;
            }
        }
    }

    for (const [key, value] of Object.entries(count)) {
        if (value == 1) {
            con = key;
        }
    }

    return console.log(con);

}
singleNumber([4,1,2,1,2]); */


//dif of sums

function difSums(n, m) {
    let difNums = 0;
    let notdifNums = 0;
    for (let i = 0; n >= i; i++) {
        if (i % m == 0) {
            difNums += i;
        }
        else {
            notdifNums += i;
        }
    }
    return notdifNums - difNums;
    
}

console.log(difSums(10, 3));
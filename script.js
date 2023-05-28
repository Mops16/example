"use strict";

let money = +prompt("Ваш бюджет?", "");
let time = +prompt("Введите дату в формате YYYY-MM-DD", "");

let firstQust = +prompt("Введите обязательную статью расходов в этом месяце");
let secondQust = +prompt("Во сколько обойдется?");

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: null,
  income: [],
  timeData: time,
  savangs: false,
};

for (let i = 1; i < 2; i++) {
  let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
    b = prompt("Во сколько обойдется?", "");

  //   while (
  //     typeof a === "string" &&
  //     typeof a != null &&
  //     typeof b != null &&
  //     a != "" &&
  //     b != "" &&
  //     a.length < 50
  //   ) {
  //     appData.expenses[a] = b;
  //   }

  if (
    typeof a === "string" &&
    typeof a != null &&
    typeof b != null &&
    a != "" &&
    b != "" &&
    a.length < 50
  ) {
    appData.expenses[a] = b;
  } else {
    console.log("bad result");
    i--;
  }
}
appData.moneyPerDay = appData["budget"] / 30;
alert(`Ежедневный бюджет ${Math.round(appData.moneyPerDay)}`);

// switch (appData.moneyPerDay) {
//   case appData.moneyPerDay < 100:
//     console.log("Минимальный уровень");
//     break;
//   case appData.moneyPerDay > 100 && appData.moneyPerDay < 2000:
//     console.log("Средний уровень");
//     break;
//   case appData.moneyPerDay > 100:
//     console.log("Высокий уровень");
//     break;
//   default:
//     console.log("Ошибка");
//     break;
// }

if (appData.moneyPerDay < 100) {
  console.log("Минимальный уровень");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень");
} else {
  console.log("Ошибка");
}

// @ts-check
import DateFnsAdapter from "@date-io/date-fns";
import { ja } from "date-fns/locale/index.js";

const dateLib = new DateFnsAdapter({
  locale: ja,
  formats: {
    keyboardDate: "yyyy/MM/dd",
    keyboardDateTime: "yyyy/MM/dd HH:mm:ss",
    keyboardDateTime12h: "yyyy/MM/dd hh:mm A",
    keyboardDateTime24h: "yyyy/MM/dd HH:mm",
  },
});

// 現在時刻を表示する
const now = dateLib.date();
console.log("current:\t", dateLib.format(now, "keyboardDateTime"));

// 1日後を表示する
const tomorrow = dateLib.addDays(now, 1);
console.log("1day later:\t", dateLib.format(tomorrow, "keyboardDateTime"));

// 1日前を表示する
const yesterday = dateLib.addDays(now, -1);
console.log("1day ago:\t", dateLib.format(yesterday, "keyboardDateTime"));

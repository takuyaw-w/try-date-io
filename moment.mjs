// @ts-check
import MomentAdapter from "@date-io/moment";

const dateLib = new MomentAdapter({
  locale: "ja",
  formats: {
    keyboardDate: "YYYY/MM/DD",
    keyboardDateTime: "YYYY/MM/DD HH:mm:ss",
    keyboardDateTime12h: "YYYY/MM/DD hh:mm A",
    keyboardDateTime24h: "YYYY/MM/DD HH:mm",
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

import moment from "jalali-moment";
export default {
  uuidv4: () =>
    ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    ),
  dateConvertToGregorian: (dateStr) => {
    let m = moment(dateStr, "jYYYY/jM/jD");
    if (!dateStr || dateStr == '')
      m = moment();
    m.locale("fa");
    if (m.isValid())
      return m
        .locale("en")
        .format("YYYY-MM-DD");
    return "";
  },
  dateConvertToJalali: (dateStr) => {
    let m = moment(dateStr, "YYYY/MM/DD");
    if (!dateStr || dateStr == '')
      m = moment();
    m.locale("en");
    if (m.isValid())
      return m
        .locale("fa")
        .format("YYYY/MM/DD");
    return "";
  },
  dateConvertToJalaliWithTime: (dateStr) => {
    let m = moment(dateStr, "YYYY/MM/DD HH:mm:ss");
    if (!dateStr || dateStr == '')
      m = moment();
    m.locale("en");
    m.format("YYYY-MM-DD HH:mm:ss")
    if (m.isValid())
      return m
        .locale("fa")
        .format("YYYY/MM/DD HH:mm");
    return "";
  },
  formatter: new Intl.NumberFormat("fa-IR", { currency: "IRR" }),
  sleep: async (ms) => await new Promise((resolve) => setTimeout(resolve, ms)),
};

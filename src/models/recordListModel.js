const localStorageKeyName = "recordList";
const recordListModel = {
  getKeys() {
    const date = new Date();
    return [date.getFullYear(), date.getMonth() + 1, date.getDate()];
  },
  clone(data) {
    return JSON.parse(JSON.stringify(data));
  },
  fetch() {
    const [year, month] = this.getKeys();
    const recordList = window.localStorage.getItem(localStorageKeyName);
    if (!recordList) return JSON.parse(`{"${year}":{"${month}":{}}}`);
    return JSON.parse(recordList);
  },
  save(data, type) {
    const [year, month, day] = this.getKeys();
    const recordList = this.clone(this.fetch());

    const record = recordList[year][month];
    // const initMonthInfo = {
    //   expenditureAmount: 0,
    //   inComeAmount: 0,
    //   dayTotal: 0,
    //   allCostNum: 0
    //   days: {
    //     xx: {
    //       createdAt: new Date(),
    //       tags: [
    //         {
    //           id: new Date().getTime(),
    //           createdAt: new Date(),
    //           svg: xxx,
    //           amount: xxx,
    //           type: xx,
    //           note: xxxx
    //         }
    //       ]
    //     }
    //   },
    // };
    if (!record.days) record.days = {};
    if (!record.days[day]) record.days[day] = {};
    type === "-"
      ? record.expenditureAmount
        ? (record.expenditureAmount += Number(data.amount))
        : (record.expenditureAmount = Number(data.amount))
      : record.inComeAmount
      ? (record.inComeAmount += Number(data.amount))
      : (record.inComeAmount = Number(data.amount));
    type === "-"
      ? record.days[day].expenditureAmount
        ? (record.days[day].expenditureAmount += Number(data.amount))
        : (record.days[day].expenditureAmount = Number(data.amount))
      : record.days[day].inComeAmount
      ? (record.days[day].inComeAmount += Number(data.amount))
      : (record.days[day].inComeAmount = Number(data.amount));

    if (record.days[day].tags) {
      record.days[day].tags.push(data);
    } else {
      record.days[day].createdAt = new Date();
      record.days[day].tags = [data];
    }

    record.dayTotal = Object.keys(record.days).length;
    record.allCostNum ? (record.allCostNum += 1) : (record.allCostNum = 1);

    window.localStorage.setItem(
      localStorageKeyName,
      JSON.stringify(recordList)
    );
  }
};
export default recordListModel;
Object.prototype.hasOwnProperty;

const tables = [
  {
    id: 0,
    title: "Key Performance Metrics",
    table_headers: ["Metric", "Strategy"],
    table_datas: [
      ["Risk-Free Rate", "0.0%"],
      ["Time in Market", "81.0%"],
      ["Cumulative Return", "496.61%"],
      ["CAGR﹪", "42.17%"],
      ["Sharpe", "1.61"],
      ["Smart Sharpe", "1.57"],
      ["Sortino", "2.88"],
      ["Smart Sortino", "2.82"],
      ["Sortino/√2", "2.04"],
      ["Smart Sortino/√2", "1.99"],
      ["Omega", "1.48"],
    ],
  },
  {
    id: 1,
    title: "EOY Returns",
    table_headers: ["Year", "Return", "Cumulative"],
    table_datas: [
      ["2017", "34.7%%", "37.88%"],
      ["2018", "29.2%%", "31.49%"],
      ["2019", "10.33%%", "10.04%"],
      ["2020", "41.87%%", "50.78%"],
    ],
  },
  {
    id: 2,
    title: "Worst 10 Drawdowns",
    table_headers: ["Started", "Recovered", "Drawdown", "Days"],
    table_datas: [
      ["2021-01-08", "2021-02-09", "-16.51%", "32"],
      ["2017-12-18", "2018-02-01", "-15.58%", "45"],
      ["2019-06-27", "2020-03-12", "-11.86%", "259"],
      ["2021-02-22", "2021-04-22", "-10.68%", "59"],
    ],
  },
];

export default tables;

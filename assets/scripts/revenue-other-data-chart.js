const revenueOtherData = {
  format: x => '$' + withCommas(x),
  data: [
    {
      name: 'Conference Revenue',
      value: 6717500,
      desc: 'During the summer months, when many students have left campus, HFS use the residence halls to offer housing to conference and internship groups.  Revenue raised from these summer operations is used to offset operating expense increases which results in lower housing rates for UW students.'
    },
    { name: 'Catering', value: 4081990 },
    { name: 'Athletics', value: 1278820 },
    {
      name: 'Forfeitures and Fees',
      value: 1266748,
      desc: 'HFS charges internal UW dining units a 33% fee to help operate dining plans.'
    },
    { name: 'Laundry', value: 451830 },
    { name: 'Vending Commissions', value: 678474 },
    { name: 'Other Food Service', value: 60420 }
  ]
};
createPieChart('.revenue-other-chart', 'revenue-info', revenueOtherData);

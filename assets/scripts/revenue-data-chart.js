const revenueData = {
  format: x => x + '%',
  data: [
    {
      name: 'Student Housing',
      value: 66,
      desc: 'Total revenues for student housing are $81,972,921.'
    },
    {
      name: 'Food Sales',
      value: 21,
      desc: 'Total revenues for student housing are $46,868,880.'
    },
    {
      name: 'Other',
      value: 13,
      desc: 'Check the breakdown for more information on other revenue sources!'
    }
  ]
}
createPieChart('.revenue-chart', 'revenue-info', revenueData);

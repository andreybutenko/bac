const expensesGeneralData = {
  format: x => x + '%',
  data: [
    {
      name: 'Operating Expenses',
      value: 63,
      desc: 'Expenses incurred in the daily process of running the business.'
    },
    {
      name: 'Debt Service',
      value: 26,
      desc: 'The mortgage on the loans borrowed to finance the Housing Master Plan. Borrowing from UW\'s Internal Lending Program, 4.5% interest rate and 1% financing fee. The redevelopment of residential halls on campus was the most cost effective method of ensuring long term housing viability on campus.  Constructing new buildings has allowed HFS to offer a wider variety of living options (i.e apartments), better collaborative and learning spaces, and reduce overall operating costs due to energy efficient buildings.'
    },
    {
      name: 'Capital Improvements',
      value: 11,
      desc: 'Longer term investments in facility improvement, equipment repair, and equipment replacement. Includes heating systesm, elevators, and kitchen equipment.'
    }
  ]
};
createPieChart('.expenses-general-chart', 'expenses-info', expensesGeneralData);

const housingData = {
  format: x => x + '%',
  data: {
    revenue: [
      {
        name: 'Residental Housing',
        value: 83,
        desc: 'This represents payments for housing in residence halls, apartments, and family housing units. This also includes summer school, interim and Early Fall Start housing revenues.'
      },
      {
        name: 'Conferences',
        value: 9,
        desc: 'During the summer months, when many students have left campus, HFS use the residence halls to offer housing to conference and internship groups. Revenue raised from these summer operations is used to offset operating expense increases which results in lower housing rates for UW students.'
      },
      {
        name: 'Other System Revenue',
        value: 7,
        desc: 'The majority of revenue in this category (over 66%) is earned from properties owned by the University and managed by a private company – Radford Court, Commodore Duchess. Other revenues in this category include micro-fridge commissions, interest income, and emergency kit and other fee income.'
      },
      {
        name: 'Laundry and Vending',
        value: 1,
        desc: 'HFS contracts out the maintenance and operation of the laundry machines in residential buildings and in return receives a commission of all laundry sales. Additionally, HFS receives commission on sales generated at beverage and snack vending machines within housing facilities.'
      }
    ],
    expenses: [
      {
        name: 'Debt Service',
        value: 42,
        desc: 'The mortgage on the loans borrowed to finance the Housing Master Plan. Borrowing from UW\'s Internal Lending Program, 4.5% interest rate and 1% financing fee. The redevelopment of residential halls on campus was the most cost effective method of ensuring long term housing viability on campus.  Constructing new buildings has allowed HFS to offer a wider variety of living options (i.e apartments), better collaborative and learning spaces, and reduce overall operating costs due to energy efficient buildings.'
      },
      {
        name: 'Labor',
        value: 18,
        desc: 'HFS is the largest employer of students on campus, with over 1,200 student-employees! Many factors are out of HFS control: union contracts and benefits rate largely determine this category.'
      },
      {
        name: 'Capital Projects',
        value: 15,
        desc: 'Longer term investments in facility improvement, equipment repair, and equipment replacement. Includes heating systesm, elevators, and kitchen equipment.'
      },
      {
        name: 'Utilities',
        value: 9,
        desc: 'HFS is financially responsible for all major utilities: electric, water/sewer, gas/oil, and steam. They also pay the UW for student Husky TV ($12.47/month/student) and student ethernet ($18.17/month/student).'
      },
      {
        name: 'Directs',
        value: 5,
        desc: 'Outside contractors ($1M), merchant fees ($1.25M), insurance ($441K), and UW Police ($350K).'
      },
      {
        name: 'HFS Administration',
        value: 5,
        desc: 'This is the cost for the employees behind the scenes that support the administrative functions necessary to operate. These functions include Human Resources, IT, Finance/Accounting, and Marketing.'
      },
      {
        name: 'Reserve Contributions',
        value: 4,
        desc: 'This represents our contribution to the “savings account” just like you may do with your personal finances.  Contributions to reserve help fund future program enhancements and development of new buildings.  A certain amount of money must be kept in reserve due to having high debt payments.'
      },
      {
        name: 'Physical Plant',
        value: 2
      }
    ]
  }
}

const housingRevenueChart = new Chartist.Bar('.housing-revenue-chart',
  generateBarData(housingData.data, 'revenue'),
  {
    stackBars: true,
    axisY: {
      onlyInteger: true,
      labelOffset: {
        x: 0,
        y: 7
      }
    },
    plugins: [onHoverPlugin('housing-info', housingData)]
  }
);

let housingRevenueIndex = -1;
housingRevenueChart.on('created', function() {
  housingRevenueIndex = -1;
});

housingRevenueChart.on('draw', function(context) {
  if(context.type === 'bar') {
    if(context.index === 0) {
      housingRevenueIndex++;
    }

    var series = housingRevenueChart.data.series[housingRevenueIndex];

    context.element.root().elem('text', {
      x: context.x1,
      y: context.y2 + 5
    }, 'ct-bar-label').text(series.name + ': ' + housingData.format(housingData.data.revenue[housingRevenueIndex].value));
  }
});

const housingExpensesChart = new Chartist.Bar('.housing-expenses-chart',
  generateBarData(housingData.data, 'expenses'),
  {
    stackBars: true,
    axisY: {
      onlyInteger: true,
      labelOffset: {
        x: 0,
        y: 7
      },
      position: 'end'
    },
    plugins: [onHoverPlugin('housing-info', housingData)]
  }
);

let housingExpensesIndex = -1;
housingExpensesChart.on('created', function() {
  housingExpensesIndex = -1;
});

housingExpensesChart.on('draw', function(context) {
  if(context.type === 'bar') {
    if(context.index === 0) {
      housingExpensesIndex++;
    }

    var series = housingExpensesChart.data.series[housingExpensesIndex];

    context.element.root().elem('text', {
      x: context.x1,
      y: context.y2 + 5
    }, 'ct-bar-label').text(series.name + ': ' + housingData.format(housingData.data.expenses[housingExpensesIndex].value));
  }
});

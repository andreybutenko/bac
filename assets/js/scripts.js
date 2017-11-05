gumshoe.init();

function toCase(x) {
  return x.replace(/\s+/g, '-').toLowerCase();
}

function withCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

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

const expensesOperatingData = {
  format: x => '$' + withCommas(x),
  data: [
    {
      name: 'Salaries and Benefits',
      value: 34550841,
      desc: 'HFS is the largest employer of students on campus, with over 1,200 student-employees! Many factors are out of HFS control: union contracts and benefits rate largely determine this category.'
    },
    {
      name: 'Cost of Food',
      value: 17228529,
      desc: 'HFS utilizes volume pricing to reduce cost. There is an emphasis on food products which are grown sustainably and which minimize food and packaging waste.'
    },
    {
      name: 'Indirect Expenses',
      value: 10413141,
      desc: 'Administrative overhead for HFS and institutional overhead for UW.'
    },
    {
      name: 'Utilities',
      value: 8087169,
      desc: 'HFS is financially responsible for all major utilities: electric, water/sewer, gas/oil, and steam. They also pay the UW for student Husky TV ($12.47/month/student) and student ethernet ($18.17/month/student).'
    },
    {
      name: 'Contract Services',
      value: 5540886,
      desc: 'Outside contractors ($1M), merchant fees ($1.25M), insurance ($441K), and UW Police ($350K).'
    },
    {
      name: 'Supplies and Materials',
      value: 2998671
    },
    {
      name: 'Repairs and Maintainence',
      value: 2604943
    },
    {
      name: 'Other',
      value: 285960
    },
  ]
};
createPieChart('.expenses-operating-chart', 'expenses-info', expensesOperatingData);

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

function generateBarData(data, set) {
  return {
    labels: [set],
    series: data[set].map(x => {
      return {
        name: x.name,
        data: [x.value]
      }
    })
  }
}

function onHover(prefix, dataset, id) {
  let data = [];
  if(Array.isArray(dataset.data)) {
    data = dataset.data;
  }
  else  {
    const keys = Object.keys(dataset.data);
    keys.forEach(key => data.push(...dataset.data[key]))
  }
  data = data.filter(data => toCase(data.name) == id)[0];

  if(typeof(data) != 'undefined') {
    document.getElementById(prefix + '-placeholder').classList.add('hidden');
    document.getElementById(prefix + '-title-container').classList.remove('hidden');
    document.getElementById(prefix + '-desc').classList.remove('hidden');

    document.getElementById(prefix + '-title').innerHTML = data.name;
    document.getElementById(prefix + '-value').innerHTML = dataset.format(data.value);
    document.getElementById(prefix + '-desc').innerHTML = data.desc || '';
  }
}

function onHoverPlugin(prefix, data) {
  return function onHoverPlugin(chart) {
    const $chart = chart.container;
    $chart.addEventListener('mousedown', e => {
      if(e.target.localName == 'path') {
        onHover(prefix, data, e.target.parentElement.classList.item(1));
      }
      else if(e.target.localName == 'text') {
        onHover(prefix, data, toCase(e.target.textContent.split(':')[0]));
      }
      else if(e.target.localName == 'line') {
        onHover(prefix, data, toCase(e.target.parentElement.getAttribute('ct:series-name')));
      }
    })
  }
}

function generatePieData(arr) {
  return {
    labels: arr.map(data => data.name),
    series: arr.map(data => {
      return {
        name: data.name,
        className: toCase(data.name),
        value: data.value
      }
    })
  }
}

function createPieChart(selector, prefix, data) {
  const chartData = generatePieData(data.data);
  new Chartist.Pie(selector,
    chartData, {
      donut: true,
      plugins: [onHoverPlugin(prefix, data)],
      labelInterpolationFnc: (label, index) => {
        return label + ': ' + data.format(data.data[index].value)
      }
    },
    [
      ['screen and (max-width: 500px)', {
        showLabel: false,
        donutWidth: 20
      }]
    ]
  );
}

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

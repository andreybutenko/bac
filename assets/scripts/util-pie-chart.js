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

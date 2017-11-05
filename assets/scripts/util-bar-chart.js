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

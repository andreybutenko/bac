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

gumshoe.init();

function toCase(x) {
  return x.replace(/\s+/g, '-').toLowerCase();
}

function withCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

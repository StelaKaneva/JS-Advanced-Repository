function solve() {
  let text = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;

  let result = applyNamingConvention(text, namingConvention);

  document.getElementById('result').textContent = result;

  function applyNamingConvention (text, namingConvention) {
    const conventionSwitch = {
      'Pascal Case': () => text
              .toLowerCase().split(' ')
              .map(x => x[0].toUpperCase() + x.slice(1))
              .join(''),
      'Camel Case': () => text
              .toLowerCase().split(' ')
              .map((x, i) => x = i !== 0 ? x[0].toUpperCase() + x.slice(1) : x)
              .join(''),
      default: () => 'Error!'
    };

    return (conventionSwitch[namingConvention] || conventionSwitch.default)();
  }
}
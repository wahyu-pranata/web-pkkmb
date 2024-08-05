const locations = [
  {location: 'Kampus Sudirman', link: 'https://app.lapentor.com/sphere/vt-kampus-sudirman-universitas-udayana'},
  {location: 'Rektorat - Kampus Jimbaran', link: 'https://app.lapentor.com/sphere/rektorat-kampus-jimbaran'},
  {location: 'Kampus Sanglah', link: 'https://app.lapentor.com/sphere/vt-kampus-sanglah-universitas-udayana'},
  {location: 'Kampus Peternakan', link: 'https://app.lapentor.com/sphere/fakultas-peternakan'},
  {location: 'Kampus Pertanian', link: 'https://app.lapentor.com/sphere/fakultas-pertanian'},
  {location: 'Kampus Teknik', link: 'https://app.lapentor.com/sphere/fakultas-teknik'},
  {location: 'Kampus Teknik Sipil', link: 'https://app.lapentor.com/sphere/teknik-sipil'},
  {location: 'Kampus FMIPA', link: 'https://app.lapentor.com/sphere/fakultas-matematika-dan-ilmu-pengetahuan-alam'},
  {location: 'Kampus FPAR, FEB, FH, FKP', link: 'https://app.lapentor.com/sphere/komplek-fpar-feb-fh-fkp'},
]

const select = document.querySelector('#location')
const map = document.querySelector('#map')
locations.forEach(location => {
  const option = document.createElement('option')
  option.innerHTML = option.value = location.location
  select.appendChild(option)
})

select.addEventListener('change', event => {
  map.setAttribute('src', locations.filter(location => location.location == event.target.value)[0].link)
})
// const domain = "https://www.comejaca.org.br"
const domain = 'http://localhost:3003';

async function getRegistrationList() {
  const table = document.querySelector('.list-table');

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  const res = await fetch(`${domain}/api/registrations/`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });

  const { registrations } = JSON.parse(await res.text());

  let html = '';

  html += '<thead>';
  Object.keys(registrations.result[0]).forEach(value => {
    html += `<td>${value}</td>`;
  });
  html += '</thead>';

  html += '<tbody>';
  registrations.result.forEach(registration => {
    html += '<tr>';
    Object.values(registration).forEach(value => {
      html += `<td>${value}</td>`;
    });
    html += '</tr>';
  });
  html += '</tbody>';

  table.innerHTML = html;
}

async function getRegistrationList() {
  const { user, token } = await getToken();

  if (!token) {
    // nao logou antes
    window.location.pathname = 'form.html';
  }

  const table = document.querySelector('.content-table');

  const queryParams = new URLSearchParams({
    page: 1,
    per_page: 2000,
    orderBy: 'number_id',
    orderType: 'ASC',
  });

  const res = await fetch(`./api/registrations/?${queryParams}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },

    method: 'GET',
  });

  const response = JSON.parse(await res.text());

  if (!response.success) {
    // autorização falhou
    await localStorage.removeItem('@comejaca:login');
    window.location.pathname = 'form.html';
  }

  document.querySelector('.usuario').innerHTML = user.name;

  const { registrations } = response;

  document.querySelector('.inscritos').innerHTML =
    registrations.total_registers;

  let html = '';

  Object.keys(registrations.result).forEach(registration => {
    delete registration.questionario;
  });

  html += '<thead>';
  Object.keys(registrations.result[0]).forEach(value => {
    html += `<td>${value.toUpperCase().replaceAll('_', ' ')}</td>`;
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

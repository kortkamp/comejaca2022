async function getRegistrationList() {
  const data = await getToken();

  if (!data) {
    // nao logou antes
    window.location.pathname = 'form.html';
  }

  const { user, token } = data;

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

  document.querySelector('.usuario').innerHTML = user?.name;

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

function tableToCSV() {

  var csv_data = [];
  var rows = document.getElementsByTagName('tr');
  for (var i = 0; i < rows.length; i++) {

    var cols = rows[i].querySelectorAll('td,th');

    var csvrow = [];
    for (var j = 0; j < cols.length; j++) {


      csvrow.push(cols[j].innerHTML);
    }

    csv_data.push(csvrow.join(";"));
  }

  csv_data = csv_data.join('\n');

  downloadCSVFile(csv_data);

}

function downloadCSVFile(csv_data) {


  CSVFile = new Blob(["\ufeff", csv_data], {
    type: "text/csv"
  });


  var temp_link = document.createElement('a');

  temp_link.download = "produtos.csv";
  var url = window.URL.createObjectURL(CSVFile);
  temp_link.href = url;

  temp_link.style.display = "none";
  document.body.appendChild(temp_link);


  temp_link.click();
  document.body.removeChild(temp_link);
}
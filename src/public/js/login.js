async function storeToken(data) {
  console.log(data);
  localStorage.setItem('@comejaca:login', JSON.stringify(data));
}

async function getToken() {
  const data = localStorage.getItem('@comejaca:login');
  return JSON.parse(data);
}

async function login(event) {
  event.preventDefault();
  const form = event.target;

  const email = form.querySelector(`input[name=email]`).value;
  const password = form.querySelector(`input[name=password]`).value;

  const res = await fetch(`./api/sessions/`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
  const response = JSON.parse(await res.text());

  console.log(response);

  if (!response.success) {
    window.alert(response.message);
  } else {
    await storeToken({ user: response.user, token: response.token });
    window.location.pathname = 'register.html';
  }
}

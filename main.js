function mainMenu() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}

document.getElementById('menu').addEventListener('click', mainMenu);
document.getElementById('xmark').addEventListener('click', mainMenu);

function register() {
  const register = document.getElementById('register');
  const login = document.getElementById('login');
  document.getElementById('instructions').innerHTML = `<p>"Just follow what I need you to do. Don't worry, your personal information is 100% safe. I respect your privacy and will ensure everything remains secure. You can trust that your details will not be shared or misused in any way."</p>`;
  register.style.display = 'none';
  login.style.display = 'none';

  const register_form = document.getElementById('register_form');
  register_form.innerHTML = `
    <form id="register_form_add">
      <input type="text" placeholder="Username" maxlength="6" required id="uname" class="style">
      <input type="password" placeholder="Password" maxlength="8" required id="password" class="style">
      <label for="bdate">Birth date</label>
      <input type="date" required class="style" id="date">
      <label for="male">Male</label>
      <input type="radio" name="value" id="male" value="Male" class="sex">
      <label for="female">Female</label>
      <input type="radio" name="value" id="female" value="Female" class="sex">
      <input type="tel" name="number" id="number" maxlength="12" placeholder="Contact number" class="style">
      <input type="email" placeholder="Email address" id="email" class="style">
      <button type="submit" id="btn_submit">SUBMIT</button>
    </form>
  `;

  document.getElementById('register_form_add').addEventListener('submit', function(event) {
    event.preventDefault(); 
    let uname = document.getElementById('uname').value;
    let pword = document.getElementById('password').value;
    localStorage.setItem('uname', uname);
    localStorage.setItem('pword', pword);

    alert('Registration successful! \n Reload this page then login.');
  });
}

function login() {
  const register = document.getElementById('register');
  const login = document.getElementById('login');
  register.style.display = 'none';
  login.style.display = 'none';

  document.getElementById('instructions').innerHTML = `<p>Don't forget your email and password to log in again. Make sure to store them in a safe place. If you have trouble remembering, consider using a password manager. Always keep your credentials secure to prevent unauthorized access. If you ever forget them, you might need to reset your password through the recovery process.</p>`;

  const login_form = document.getElementById('login_form');
  login_form.innerHTML = `
    <form id="forms">
      <input type="text" name="uname_login" id="uname_login" required maxlength="6" placeholder="Enter user name" class="login_style">
      <input type="password" name="pword_login" id="pword_login" required maxlength="8" placeholder="Enter password" class="login_style">
      <button type="submit" id="submit_login">Log in</button>
    </form>
  `;

  document.getElementById('forms').addEventListener('submit', function(event) {
    event.preventDefault();

    let unames = localStorage.getItem('uname');
    let pwords = localStorage.getItem('pword');
    let uname_login = document.getElementById('uname_login').value;
    let pword_login = document.getElementById('pword_login').value;

    if (unames === uname_login && pwords === pword_login) {
      alert(`Login successful\nWELCOME ${unames}`);
    } else {
      alert('Incorrect username or password');
    }
  });
}

document.getElementById('register').addEventListener('click', register);
document.getElementById('login').addEventListener('click', login);

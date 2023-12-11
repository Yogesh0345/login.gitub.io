function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (!isValidUsername(password)) {
      alert('Invalid password. password must be up to 7 characters and include at least one number.');
      return;
    }
    document.write('Username: ', username);
    document.write('Password: ', password);
  }
  
  function isValidUsername(password) {
    return /^.{1,7}(?=.*\d)/.test(password);
  }
  
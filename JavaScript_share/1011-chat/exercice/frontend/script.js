let username = '';
let socket;

function login() {
  const inputUsername = document.getElementById('username'); // Renommée pour plus de clarté
  username = inputUsername.value.trim();
  if (!username) return alert('Veuillez entrer un prénom.');

  document.getElementById('login').style.display = 'none';
  document.getElementById('chat').classList.remove('hidden');

  const form = document.getElementById('form');
  const inputMessage = document.getElementById('input'); // Changé en inputMessage

  form.addEventListener('submit', (e) => {
    
  });

}
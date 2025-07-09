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

  const socket = io('http://localhost:3000');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Message envoyé : ' + inputMessage.value);
    socket.emit('canal1', { user: username, text: inputMessage.value});
  });

  socket.on('canal1', (msg) => {
    console.log('Message reçu : ' + msg.text);
    const item = document.createElement('div');
    item.classList.add(msg.user);
    item.textContent = `${msg.user}: ${msg.text}`;
    document.getElementById('messages').appendChild(item);
  });

}

const { hash } = window.location;

const meassge = atob(hash.replace('#', ''));

if (meassge) {
  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#message-show').classList.remove('hide');

  document.querySelector('h1').innerHTML = meassge;
}

document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();

  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#link-form').classList.remove('hide');

  const input = document.querySelector('#message-input');
  const encryted = btoa(input.value);

  const linkInput = document.querySelector('#link-input');
  linkInput.value = `${window.location}#${encryted}`;
  linkInput.select();
});

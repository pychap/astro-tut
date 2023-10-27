document.querySelector('.hamburger').addEventListener('click', () => {
  const headerChange = document.querySelector("#pycHeader");
  document.querySelector('.nav-links').classList.toggle('expanded');
  headerChange.classList.toggle('is-open');
});
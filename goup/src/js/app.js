let alertClose = document.getElementById('alertDropdownClose');
let alertBox = document.getElementsByClassName('alert-dropdown');

alertClose.addEventListener('click', () => {
    alertBox[0].style.display = 'none';
});

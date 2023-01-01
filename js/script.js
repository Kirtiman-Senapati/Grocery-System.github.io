let SearchForm = document.querySelector('.search-form'); // create variable and select the quries 1st /select form 1st 

document.querySelector('#search-btn').onclick = () =>    // after click icon it works active
{
    SearchForm.classList.toggle('active');
}
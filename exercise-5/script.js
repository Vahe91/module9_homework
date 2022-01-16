const btn = document.querySelector('.btn');
const cardDiv = document.querySelector('.card');

const getCards = localStorage.getItem('cards');

if (getCards) {
    cardDiv.innerHTML = getCards;
} else {
    cardDiv.innerHTML = '';
}

btn.addEventListener('click', (e) => {
    e.preventDefault();

    const pageNum = +document.querySelector('.page-num').value;
    const limit = +document.querySelector('.limit').value;

    if ( (isNaN(pageNum) || pageNum < 1 || pageNum > 10) && (isNaN(limit) || limit < 1 || limit > 10) ) {
        cardDiv.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10';
    } else if (isNaN(pageNum) || pageNum < 1 || pageNum > 10) {
        cardDiv.textContent = 'Номер страницы вне диапазона от 1 до 10';
    } else if (isNaN(limit) || limit < 1 || limit > 10) {
        cardDiv.textContent = 'Лимит вне диапазона от 1 до 10';
    } else {
        let cards = '';

        fetch(`https://picsum.photos/v2/list?page=${pageNum}&limit=${limit}`)
            .then(response => response.json())
            .then(data => {
                data.forEach(item => {
                    const card = `<img class="card-item" src="${item.download_url}" alt="image">`;
                    cards += card;
                })
                cardDiv.innerHTML = cards;
                localStorage.setItem('cards', cardDiv.innerHTML);
            })
            .catch(reject => {
                console.log(reject);
            }).finally(data => {
                
            })
    }
    localStorage.setItem('cards', cardDiv.innerHTML);
})
const btnNode = document.querySelector('.btn');
const cardNode = document.querySelector('.card');

function useRequest(url, callback) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url);

    xhr.onload = function() {
        if (xhr.status == 200) {
            const result = JSON.parse(xhr.response);
            callback(result);
        }
    };

    xhr.onerror = function() {
        console.log('Error: ' + xhr.status);
    };

    xhr.send();
}

function displayResult(apiData) {
    let cards = '';
    
    apiData.forEach(item => {
        const card = `<img class="card-item" src="${item.download_url}" alt="image">`;
        cards += card;
    });

    cardNode.innerHTML = cards;
}

btnNode.addEventListener('click', () => {
    const inputNode = document.querySelector('.input').value;

    if (inputNode > 0 && inputNode <= 10) {
        useRequest(`https://picsum.photos/v2/list?limit=${inputNode}`, displayResult);
    } else {
        cardNode.textContent = 'число вне диапазона от 1 до 10';
    }
})
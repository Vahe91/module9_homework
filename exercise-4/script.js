const btn = document.querySelector('.btn');
const cardDiv = document.querySelector('.card');

btn.addEventListener('click', () => {
    const width = document.querySelector('.input-width').value;
    const height = document.querySelector('.input-height').value;

    if (width < 100 || width > 300 || height < 100 || height > 300) {
        cardDiv.textContent = 'одно из чисел вне диапазона от 100 до 300';
    } else {
        fetch(`https://picsum.photos/${width}/${height}`)
            .then(response => {
                cardDiv.innerHTML = `<img src="${response.url}" alt="image with - ${width}, height - ${height}">`;
            })
            .catch (reject => {console.log(reject)})
    }
});
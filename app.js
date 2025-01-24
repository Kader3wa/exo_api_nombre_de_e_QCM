const api_endpoint = 'https://jsonplaceholder.typicode.com/posts';
let elInput = document.querySelector('.post');
let elSubmit = document.querySelector('.submitPost');
let message = document.querySelector('.message');

let value = '';

function eventInput(event) {
    value = event.target.value;
}

elInput.addEventListener('input', eventInput);

function onClick(event) {
    event.preventDefault();
    fetch(api_endpoint)
        .then(response => response.json())
        .then(data => {
            console.log(data.slice(0, 10));
            let posts = data.slice(0, value);
            posts.map(post => {
                let count = 0;
                for (let i = 0; i < post.title.length; i++) {
                    if (post.title[i] === 'e') {
                        count++;
                    }
                }
                message.innerHTML += `
                    <p class="result">Le titre "${post.title}" contient ${count} 'e'</p>
                    <p class="warning"> Moyenne des 'e' dans le titre : ${(count / post.title.length)
                        .toFixed(2) * 100} %</p>
                    `;
            });
        });
}

elSubmit.addEventListener('click', onClick);


function fetcSimpsonJSON() {

    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
    axios.get(url)
        .then(function (response) {
            return response.data[0]; 
        })
        .then(function (simpson) {
            console.log('data decoded from JSON:', simpson);

            // Build a block of HTML
            const simpsonHtml = `
            
            <img src="${simpson.image}" />
            <p><em>${simpson.quote}</em></p>
            <p><strong>${simpson.character}</strong></p>

        `;
            document.querySelector('#simpson').innerHTML = simpsonHtml;
        });
}

const newQuote = document.querySelector('#new-quote');
newQuote.addEventListener('click', fetcSimpsonJSON);

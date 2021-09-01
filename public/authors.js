
window.addEventListener('load', () => {
    start();
});

start = () => {
    fetch('/api/authors')
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                renderError(response);
            }
        })
        .then(response => {
            renderAuthors(response.authors);
        });
};

const authorContainer = document.getElementById('author-container');

const resetAuthors = () => {
    authorContainer.innerHTML = '';
};

const renderError = response => {
    authorContainer.innerHTML = `<p>Your request returned an error from the server: </p>
<p>Code: ${response.status}</p>
<p>${response.statusText}</p>`;
};

const renderAuthors = (authors = []) => {
    resetAuthors();
    if (authors.length > 0) {
        authors.forEach(author => {
            const newAuthor = document.createElement('div');
            newAuthor.className = 'single-quote';
            newAuthor.innerHTML = `<div class="quote-text">${author.biography}</div>
      <div class="attribution">- ${author.name}</div>`;
            authorContainer.appendChild(newAuthor);
        });
    } else {
        authorContainer.innerHTML = '<p>Your request returned no authors.</p>';
    }
};



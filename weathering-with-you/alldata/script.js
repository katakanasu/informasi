document.addEventListener('DOMContentLoaded', () => {
    // Fetch data from JSON file
    fetch('alldata/infoAnime.json') // Pastikan nama file JSON yang benar
        .then(response => response.json())
        .then(animeData => {
            // Reference to the anime detail container
            const animeDetailContainer = document.getElementById('animeDetail');

            // Function to display anime details
            function displayAnimeDetail(anime) {
                animeDetailContainer.innerHTML = `
                    <div class="anime-content">
                        <img src="${anime.poster}" alt="${anime.title}" class="anime-poster">
                        <div class="anime-info">
                            <h2>${anime.title}</h2>
                            <p><i class="fas fa-film icon"></i> Studio: ${anime.studio}</p>
                            <p><i class="fas fa-tags icon"></i> Genre: ${anime.genre}</p>
                            <p><i class="fas fa-star icon"></i> Rating: ${anime.rating}</p>
                            <p><i class="fas fa-flag icon"></i> Type: ${anime.type}</p>
                            <p><i class="fas fa-list-alt icon"></i> Episodes: ${anime.episodes}</p>
                            <p><i class="fas fa-info-circle icon"></i> Description: ${anime.description}</p>
                            <a href="${anime.watchLink}" class="watch-button" target="_blank"><i class="fas fa-play icon"></i> Watch Now</a>
                        </div>
                    </div>
                `;
            }

            // Display the anime detail
            displayAnimeDetail(animeData);

            // Dark mode toggle
            document.getElementById('toggleTheme').addEventListener('click', () => {
                document.body.classList.toggle('dark-mode');
                const isDarkMode = document.body.classList.contains('dark-mode');
                document.getElementById('toggleTheme').innerHTML = `<i class="fas fa-${isDarkMode ? 'sun' : 'moon'}"></i>`;
            });
        })
        .catch(error => console.error('Error loading anime data:', error));
});

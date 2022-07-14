import axios from 'axios';

async function makeMarkupCard(array) {
  return array
    .map(
      ({
        id,
        title,
        poster_path,
        release_date,
        genre_ids,
        overview,
        vote_average,
      }) =>
        `
        <li class="card">
          <a class="card__link" href="" data-id="${id}">
            <img class="card__img" src="${
              poster_path !== null
                ? IMG_URL + '/w500' + poster_path
                : 'https://upload.wikimedia.org/wikipedia/commons/b/ba/No_image_available_400_x_600.svg'
            }" alt="${overview !== '' ? overview : 'No info!'}" />
            <p class="card__name">${title ?? 'No info about title!'}</p>
            <p class="card__description">${
              genre_ids != false
                ? genres
                    .filter(el => genre_ids.includes(el.id))
                    .map(el => el.name)
                    .join(', ')
                : 'No info about genres!'
            } | ${release_date?.slice(0, 4) || 'No info about year!'}
            </p>
            <span class="card__vote">${
              vote_average === 10
                ? vote_average
                : vote_average !== 0
                ? vote_average.toString().padEnd(3, '.0')
                : 'No votes'
            }</span>
          </a>
        </li>`
    )
    .join('');
}

export { makeMarkupCard };

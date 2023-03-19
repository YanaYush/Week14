
const array = [
    {
        name: '1. Стивен Спилберг',
        career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
        films: 'https://www.film.ru/compilation/vse-filmy-stivena-spilberga-ot-luchshego-k-horoshemu',
        top_rated_film: 'Список Шиндлера'
    },
    {
        name: '2. Кристофер Нолан',
        career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
        films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
        top_rated_film: 'Начало'
    },
    {
        name: '3. Мартин МакДона',
        career: 'Сценарист, Режиссёр, Продюсер',
        films: 'https://www.film.ru/person/martin-makdonah',
        top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
        name: '4. Алексей Балабанов',
        career: 'Режиссёр, Сценарист, Актёр, Продюсер',
        films: 'https://www.film.ru/person/aleksey-balabanov',
        top_rated_film: 'Брат'
    },
    {
        name: '5. Питер Фаррелли',
        career: 'Продюсер, Режиссёр, Сценарист, Актёр',
        films: 'https://www.film.ru/person/piter-farrelli',
        top_rated_film: 'Зелёная книга'
    },
    {
        name: '6. Юрий Быков',
        career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
        films: 'https://www.film.ru/person/yuriy-bykov',
        top_rated_film: 'Дурак'
    },
    {
        name: '7. Жан-Марк Валле',
        career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
        films: 'https://www.film.ru/person/zhan-mark-valle',
        top_rated_film: 'Далласский клуб покупателей'
    },
];

let post = document.createElement('div');
directors.append(post);

array.forEach((element) => {
    const director = document.createElement('div');
    director.className = "director"
    director.textContent = element.name
    post.append(director)

    const occupation = document.createElement('div');
    occupation.className = "occupation"
    occupation.textContent = element.career

    post.append(occupation)

    const movies = document.createElement('a');
    movies.href = element.films
    movies.className = "movies"
    movies.textContent = 'фильмография'
    post.append(movies)
})

const topFilmsList = array.map(el => el.top_rated_film)
const bestmovies = document.getElementById('bestmovieslist');
bestmovies.append(topFilmsList.join(', '))



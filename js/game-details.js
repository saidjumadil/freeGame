const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const id = urlParams.get('id')

const swipe = document.querySelector('#relate')
const title = document.querySelector('#title')
const publisher = document.querySelector('#publisher')
const short_description = document.querySelector('#short_description')
const genre = document.querySelectorAll('#genre')
const platform = document.querySelector('#platform')
const developer = document.querySelector('#developer')
const release_date = document.querySelector('#release_date')

let genreGame = ''

const os = document.querySelector('#os')
const processor = document.querySelector('#processor')
const memory = document.querySelector('#memory')
const graphics = document.querySelector('#graphics')
const storage = document.querySelector('#storage')


swipe.innerHTML = ''

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'cec47c803cmsh9010d9ea5ba8d23p1d0c7fjsncd1b3cc8a433',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
};

fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
    .then(response => response.json())
    .then(data => {
        console.log(data.minimum_system_requirements.os)
        title.innerHTML = data.title
        publisher.innerHTML = data.publisher
        short_description.innerHTML = data.description
        genreGame = data.genre
        relate(genreGame)
        genre[0].innerHTML = data.genre
        genre[1].innerHTML = `<span>Genre:</span> ${data.genre}`
        platform.innerHTML = `<span>Platform:</span> ${data.platform}`
        developer.innerHTML = `<span>Developer:</span> ${data.developer}`
        release_date.innerHTML = `<span>Release Date:</span> ${data.release_date}`
        
        os.innerHTML = `<span>OS</span> ${data.minimum_system_requirements.os}`
        processor.innerHTML = `<span>Processor</span> ${data.minimum_system_requirements.processor}`
        graphics.innerHTML = `<span>Graphic Card</span> ${data.minimum_system_requirements.graphics}`
        memory.innerHTML = `<span>Memory</span> ${data.minimum_system_requirements.memory}`
        storage.innerHTML = `<span>Storage</span> ${data.minimum_system_requirements.storage}`
        
        return
    })
    .catch(err => console.error(err));
    
    console.log(genreGame)

    function relate(genre) {
        fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity&&category=${genre}`, options)
            .then(response => response.json())
            .then(data => {
                let view = ""
                for(let i in data){
                    // console.log(data[i])
                    let thumbnail = new URL((data[i].thumbnail))
                    // console.log(thumbnail.toString())
                    view += `<div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="product__item">
                        <div class="product__item__pic set-bg" style="background-image: url(${thumbnail.toString()});" >
                            <div class="ep">${data[i].genre}</div>
                            <div class="comment"><i class="fa fa-calendar"></i>  ${data[i].release_date}</div>
                            <div class="view"><i class="fa fa-gamepad"></i> ${data[i].developer}</div>
                        </div>
                        <div class="product__item__text">
                            <ul>
                                <li>${data[i].platform}</li>
                                <li>${data[i].publisher}</li>
                            </ul>
                            <h5><a href="#">${data[i].title}</a></h5>
                        </div>
                    </div>
                </div>
                `
                    if(i == 2){
                        break
                    }
                }
                swipe.innerHTML += view
                return
            })
            .catch(err => console.error(err));
    }




const swipe = document.querySelector('#relate')

swipe.innerHTML = ''

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'cec47c803cmsh9010d9ea5ba8d23p1d0c7fjsncd1b3cc8a433',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
};

fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity', options)
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


fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=date_release', options)
    .then(response => response.json())
    .then(data => {
        let view = ""
        for(let i in data){
            console.log(data[i])
            let thumbnail = new URL((data[i].thumbnail))
            console.log(thumbnail.toString())
            view += `<div class="product__sidebar__view__item set-bg" style="background-image: url(${thumbnail.toString()});">
                <div class="ep">${data[i].genre}</div>
                <div class="view"><i class="fa fa-gamepad"></i> ${data[i].developer}</div>
                <h5><a href="#">${data[i].title}</a></h5>
            </div>
            `
            if(i == 4){
                break
            }
        }
        sidebar.innerHTML += view
        return
    })
    .catch(err => console.error(err));

    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc&&sort-by=popularity', options)
    .then(response => response.json())
    .then(data => {
        let view = ""
        for(let i in data){
            console.log(data[i])
            let thumbnail = new URL((data[i].thumbnail))
            console.log(thumbnail.toString())
            view += `<div class="product__sidebar__comment__item">
                <div class="product__sidebar__comment__item__text">
                    <img src=${thumbnail.toString()} alt="" width="300" style="margin-bottom : 10px">
                    <h5><a href="#">${data[i].title}</a></h5>
                    <ul>
                        <li>${data[i].platform}</li>
                        <li>${data[i].genre}</li>
                        <li>${data[i].publisher}</li>
                    </ul>
                </div>
            </div>
            `
            if(i == 2){
                break
            }
        }
        pc.innerHTML += view
        return
    })
    .catch(err => console.error(err));

    //Browser game
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&&sort-by=popularity', options)
    .then(response => response.json())
    .then(data => {
        let view = ""
        for(let i in data){
            console.log(data[i])
            let thumbnail = new URL((data[i].thumbnail))
            console.log(thumbnail.toString())
            view += `<div class="product__sidebar__comment__item">
                <div class="product__sidebar__comment__item__text">
                    <img src=${thumbnail.toString()} alt="" width="300" style="margin-bottom : 10px">
                    <h5><a href="#">${data[i].title}</a></h5>
                    <ul>
                        <li>${data[i].platform}</li>
                        <li>${data[i].genre}</li>
                        <li>${data[i].publisher}</li>
                    </ul>
                </div>
            </div>
            `
            if(i == 2){
                break
            }
        }
        browser.innerHTML += view
        return
    })
    .catch(err => console.error(err));
    //End Browser Game
    

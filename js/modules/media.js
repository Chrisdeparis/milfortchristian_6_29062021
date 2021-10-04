import data from "../FishEyeData.js";
// import { myListPictures } from './media';


const media = () => {
    const url_string = window.location.href;
    let url = new URL(url_string);
    const myparam = url.searchParams.get('id');
    let photographerId;
    let user;
    let pathuser;

    //liste des pictures
    // object of user
    user = data.photographers.filter((person) => {
        if(person.id == myparam) {
            let firstname = person.name.split(' ');
            let pathuser = firstname[0];
            
            return pathuser;
        }
    })
    
    let res = ""; 
    let totalLikes = 0;
    let position = 0;
    const listPictures = [];
    const listAlts = [];
    const listLikes = [];
    const listDates = [];
    let dataP =[];
    
    data.media.filter((media) => {
        
        if(media.photographerId == myparam){
            console.log(media);
            
            //ajouter les medias dans un array
            dataP.push(media);
            console.log(dataP);
            
            let path = user[0].name.split(' ')[0];
            
            if(parseFloat(media.likes)){
                totalLikes += parseFloat(media.likes);
            }
            if(media.image) {
                //remplissage du tableau des données
                listPictures.push(media.image);
                listAlts.push(media.title);
                listLikes.push(media.likes);
                //(listLikes);
                res += '<div class="media-item"><img data-p="'+position+'" data-date="'+media.date+'" data-likes="'+media.likes+'" data-pid="'+media.photographerId+'" data-media="'+media.id+'" class="thumb-img" alt="'+media.title+'" src="/img/Photos/'+path+'/'+media.image+'"/><div class="thumb-info" value="1"><p>'+media.title+'</p><div class="thumb-likes"><div class="likes"><p class="likesPicture">'+media.likes+'</p></div><img class="heart" src="../img/heart-solid.svg" alt="likes"/></div></div></div>';
                position++;
               
            }
            if(media.video) {
                //ajout des videos
                listPictures.push(media.video);
                listAlts.push(media.title);
                listLikes.push(media.likes);
                //(listPictures);
                //(listLikes);
                res += '<div class="media-item"><video data-p="'+position+'" data-date="'+media.date+'" data-likes="'+media.likes+'" data-pid="'+media.photographerId+'" data-media="'+media.id+'" class="thumb-img" alt="'+media.title+'" src="/img/Photos/'+path+'/'+media.video+'"></video><div class="thumb-info" value="2"><p>'+media.title+'</p><div class="thumb-likes"><div class="likes"><p class="likesPicture">'+media.likes+'</p></div><img class="heart" src="../img/heart-solid.svg" alt="likes"/></div></div></div>';
                position++;
                
            }     
            if(media.date) {
                listDates.push(media.date);
            }
            //(listDates);
            //(listPictures);
            
            
            
            // sort by alphabetical Title
            // let sortedAlphabetical = listPictures.sort();
            //(sortedAlphabetical);
            // sort by date chrono
            //(listDates);
            // let sortedDate = listDates.slice().sort((a, b) => a.localeCompare(b));
            //(sortedDate);
            
        }
        
        

    })   
    let sortPopBtn = document.getElementById('popularity');
    sortPopBtn.addEventListener('click', () => {
        //('affiche les images par popularité');
        //sort by likes descending order > Popularity
        let wrapper = document.getElementById('photos-section');
        let findPictures = document.querySelectorAll('.media-item');
        // change nodelist in array
        const mediasP = Array.from(findPictures);
        //tri par popularité decroissante
        mediasP.sort((a, b) => {
            return b.children[0].dataset.likes - a.children[0].dataset.likes;
        })
        wrapper.innerHTML ='';
        for(let item of mediasP){
            wrapper.appendChild(item);
        }
    })
    let sortDateBtn = document.getElementById('date');
    sortDateBtn.addEventListener('click', () => {
        //('par date chrono');
        let wrapper = document.getElementById('photos-section');
        let findPictures = document.querySelectorAll('.media-item');
        // change nodelist in array
        const mediasP = Array.from(findPictures);
        mediasP.sort(function(a,b) {
            a = a.children[0].dataset.date;
            b = b.children[0].dataset.date;
            console.log(a);
            // return a > b ? 1 : a < b ? -1 : 0;
            return a.localeCompare(b);         // <-- alternative 
          });
        wrapper.innerHTML ='';
        for(let item of mediasP){
            wrapper.appendChild(item);
        }
    })
    let sortTitleBtn = document.getElementById('alphabet');
    sortTitleBtn.addEventListener('click', () => {
        //('par titre A-Z');
        let wrapper = document.getElementById('photos-section');
        let findPictures = document.querySelectorAll('.media-item');
        // change nodelist in array
        const mediasP = Array.from(findPictures);
        mediasP.sort(function(a,b) {
            if(a.children[0].alt) {
                a = a.children[0].alt;
                b = b.children[0].alt;
                console.log(a);
                // return a > b ? 1 : a < b ? -1 : 0;
                return a.localeCompare(b);         // <-- alternative 
            }
            
          });
        wrapper.innerHTML ='';
        for(let item of mediasP){
            wrapper.appendChild(item);
        }
    });

    // ajouter like
    
    //setAttribute data-list alt-list like-list
    
    document.querySelector('#photoList').setAttribute('data-list', JSON.stringify(listPictures));
    document.querySelector('#photoList').setAttribute('alt-list', JSON.stringify(listAlts));
    document.querySelector('#photoList').setAttribute('data-likes', JSON.stringify(listLikes));
    
    document.getElementById('totalLikes').innerHTML = totalLikes;
    // medias dans la gallerie
    document.getElementById('photos-section').innerHTML = res;
    // return listAlts;

}
media();

export { media };
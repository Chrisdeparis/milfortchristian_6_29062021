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
    
    data.media.filter((media) => {
        
        if(media.photographerId == myparam){
            
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
                res += '<div><img data-p="'+position+'" like-n="'+media.likes+'" id="'+media.id+'" class="thumb-img" alt="'+media.title+'" src="/img/Photos/'+path+'/'+media.image+'"/><div class="thumb-info" value="1"><p>'+media.title+'</p><div class="thumb-likes"><div class="likes"><p class="likesPicture">'+media.likes+'</p></div><img class="heart" src="../img/heart-solid.svg" alt="likes"/></div></div></div>';
                position++;
               
            }
            if(media.video) {
                //ajout des videos
                listPictures.push(media.video);
                listAlts.push(media.title);
                listLikes.push(media.likes);
                //(listPictures);
                //(listLikes);
                res += '<div><video data-p="'+position+'" like-n="'+media.likes+'" id="'+media.id+'" class="thumb-img" alt="'+media.title+'" src="/img/Photos/'+path+'/'+media.video+'"></video><div class="thumb-info" value="2"><p>'+media.title+'</p><div class="thumb-likes"><div class="likes"><p class="likesPicture">'+media.likes+'</p></div><img class="heart" src="../img/heart-solid.svg" alt="likes"/></div></div></div>';
                position++;
                
            }     
            if(media.date) {
                listDates.push(media.date);
            }
            //(listDates);
            //(listPictures);
            let sortPopBtn = document.getElementById('popularity');
            let sortTitleBtn = document.getElementById('alphabet');
            let sortDateBtn = document.getElementById('date');
            sortDateBtn.addEventListener('click', () => {
                //('par date chrono');
            })
            sortTitleBtn.addEventListener('click', () => {
                //('par titre A-Z');
            });
            sortPopBtn.addEventListener('click', () => {
                //('affiche les images par popularité');
                //sort by likes descending order > Popularity
                
                let sortedLike = listLikes.sort(function(a, b){return b-a});
                
                document.querySelector('#photoList').setAttribute('data-list', JSON.stringify(sortedLike));
            })
            // sort by alphabetical Title
            let sortedAlphabetical = listPictures.sort();
            //(sortedAlphabetical);
            // sort by date chrono
            //(listDates);
            let sortedDate = listDates.slice().sort((a, b) => a.localeCompare(b));
            //(sortedDate);
            
        }

    })   
    //setAttribute data-list alt-list like-list
    document.querySelector('#photoList').setAttribute('data-list', JSON.stringify(listPictures));
    document.querySelector('#photoList').setAttribute('alt-list', JSON.stringify(listAlts));
    // document.querySelector('#photoList').setAttribute('like-list', JSON.stringify(listLikes));
    

    
    
    document.getElementById('totalLikes').innerHTML = totalLikes;
    // medias dans la gallerie
    document.getElementById('photos-section').innerHTML = res;
    // return listAlts;
    
    

}
media();

export { media };
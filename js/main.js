$(function(){
  init();
});

var pageBB= 1;
var gOld = $('.old')[0];
var gNew = $('.new')[0];
var gPages = $('.pages')[0];
var gsearchDescription = $('.searchDescription')[0];
var gNext = $('.next')[0];
var gdL1 = $('.dLi')[0];
var gdL2 = $('.dLi')[1];
var gdL3 = $('.dLi')[2];
var gdL4 = $('.dLi')[3];
var gdL0 = $('#dLabel')[0];

var Popular =  "https://api.themoviedb.org/3/movie/popular?page="+pageBB+"&language=en-US&api_key=0e560703f1a6fc9606d09b7037944dc5";
var topRated = "https://api.themoviedb.org/3/movie/top_rated?page="+pageBB+"&language=en-US&api_key=0e560703f1a6fc9606d09b7037944dc5";
var Upcoming = "https://api.themoviedb.org/3/movie/upcoming?page="+pageBB+"&language=en-US&api_key=0e560703f1a6fc9606d09b7037944dc5";
var nowPlaying = "https://api.themoviedb.org/3/movie/now_playing?page="+pageBB+"&language=en-US&api_key=0e560703f1a6fc9606d09b7037944dc5";

 var gJson = {  };
//主页电影展示；
function homeShow(gUrl){
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": gUrl,
    "method": "GET",
    "headers": {},
    "data": "{}"
  };

  $.ajax(settings).done(function (response) {
    gJson = response;
    var gLength = gJson.results.length;
     var o='';
    for(var i=0; i<gLength;i++){
      var SandD = gLength/2;
      if(SandD===0){
        o += "<div class='photo tu'><img class='home' src='https://image.tmdb.org/t/p/w342"
          +gJson.results[i].poster_path +"'><div class='homeIofo'><h4>"
          +gJson.results[i].title+"</h4><p><i class='fa fa-star' aria-hidden='true'></i>"
          +gJson.results[i].vote_average+"</p><p><i class='fa fa-calendar' aria-hidden='true'></i>"
          +gJson.results[i].release_date+"</p></div><a class='more'href='#'>More info...</a></div>";
      }else{
        o += "<div class='photo tu1'><img class='home' src='https://image.tmdb.org/t/p/w342"
          +gJson.results[i].poster_path+"'><div class='homeIofo'><h4>"
          +gJson.results[i].title+"</h4><p><i class='fa fa-star' aria-hidden='true'></i>"
          +gJson.results[i].vote_average+"</p><p><i class='fa fa-calendar' aria-hidden='true'></i>"
          +gJson.results[i].release_date+"</p></div><a class='more'href='#'>More info...</a></div>";
      }
      SandD = '';
    }
    gNext.innerHTML =o;
    gPages.innerHTML='Currently on pages: '+gJson.page+' of '+gJson.total_pages
      +' ( '+gJson.total_results+' ) ';
  });
}

function a(){
  gNext.innerHTML =' ';
  gPages.innerHTML = ' ';
  var kind = gsearchDescription.innerHTML;
  if(kind ==='Popular Movies'){
    homeShow(Popular);
  }else if(kind === 'Top Rated Movies'){
    homeShow(topRated);
  }else if(kind === 'Upcoming Movies'){
    homeShow(Upcoming);
  }else{
    homeShow(nowPlaying);
  }
}
//page下一页
gNew.onclick = function(){
  pageBB +=1;
  if(pageBB == gJson.total_pages){
    gNew.className = 'new disabled';
  }
  a();
};
//上一页
gOld.onclick = function(){
  pageBB -=1;
  if(pageBB ==1){
    gOld.className = 'old disabled';
  }
  a();
};
//网页最初设定
function init(){
  $('.dropdown-toggle').dropdown();
  homeShow(Popular);
}

gdL1.onclick = function (){
  homeShow(topRated);
  gsearchDescription.innerHTML = 'Top Rated Movies';
  gdL0.innerHTML = 'Top Rated';
  page = '1';
};

gdL2.onclick = function (){
  homeShow(Upcoming);
  gsearchDescription.innerHTML = 'Upcoming Movies';
  gdL0.innerHTML = 'Upcoming';
  page = '1';
};

gdL3.onclick = function (){
  homeShow(nowPlaying);
  gsearchDescription.innerHTML = 'Now Playing Movies';
  gdL0.innerHTML = 'Now Playing';
  page = '1';
};

gdL4.onclick = function (){
  homeShow(Popular);
  gsearchDescription.innerHTML = 'Popular Movies';
  gdL0.innerHTML = 'Popular';
  page = '1';
};



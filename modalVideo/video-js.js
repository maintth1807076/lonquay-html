var keyWord = document.getElementById("key-word");
keyWord.onkeypress = function (event) {
    if( event.keyCode ==13)
        search();
}
function search() {
    var YOUTUBE_API = "https://content.googleapis.com/youtube/v3/search?q=" + keyWord.value + "&type=video&maxResults=12&part=snippet&key=AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc";
    var xhttp = new XMLHttpRequest();
    var captionText = document.getElementById("caption");
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var jsOject = JSON.parse(xhttp.responseText);
            var contentImg = '';
            for (var i = 0; i < jsOject.items.length; i++) {
                var imgItem = '    <div class="column">\n' +
                    '           <img src="' + jsOject.items[i].snippet.thumbnails.medium.url + '"  onclick="openVideo(\''+jsOject.items[i].id.videoId+'\')" class="hover-shadow cursor">\n' +
                    '             <h4 onclick="openVideo(\''+jsOject.items[i].id.videoId+'\')">' + jsOject.items[i].snippet.title + '</h4>' +
                    '    </div>';
                contentImg += imgItem;
            }
            document.getElementById("row").innerHTML = contentImg;
        }
    };
    xhttp.open("GET", YOUTUBE_API, true);
    xhttp.send();
}
var mySrc=document.getElementById('video-frame');
function openVideo(videoId) {
    mySrc.src='https://www.youtube.com/embed/'+videoId;
    document.getElementById('myModal').style.display = "block";
}
function closeModal() {
    mySrc.src='';
    document.getElementById('myModal').style.display = "none";
}
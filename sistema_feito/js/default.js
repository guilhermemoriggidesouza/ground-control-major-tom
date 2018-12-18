$(document).ready(function(){

    var playlist = [{
            artist: 'david bowie',
            title: 'Lady stardust',
            mp3: 'songs/lady.mp3'
        },{
            artist: 'david bowie',
            title:'Space Oditty',
            mp3: 'songs/space.mp3'
        }];
    //define a posição da array
    var currentTracks=0;
    //conta quantas musicas tem
    var numTracks =  playlist.length;
    console.dir(playlist[currentTracks]);

    //cria função que vai iniciar o jplayer na class player

    var player = $(".player").jPlayer({
        //ao ler:
        ready: function () {
            $(this).jPlayer("setMedia", playlist[currentTracks]);
        },
        //ao encerrar a musica:
        ended: function(){
            //passar para proxima ao acabar de tocar
            $(this).playNext();
        },
        play: function(){
            //quando começar a tocar, escrever o nome da faixa executada
            $("#player-current-track").text(playlist[currentTracks].artist+' - '+playlist[currentTracks].title);
        },
        //caso n tenha a opção do chrome de player, rodar um flash q esta nessa url
        swfPath: "js/plugins/jplayer/dist/jplayer/",
        //tipo de arquivo q vai rodar
        supplied: "mp3",
        //selecionar onde vai estar as config do css base da lib, como nós fizemos as nossas próprias, deixar em branco
        cssSelectorAncestor: "",
        //onde será a nossa configuração css
        cssSelector: {
            play: "#player-play",
            pause: "#player-pause",
            stop: "#player-stop",
            seekBar: "#player-timeline",
            playBar: "#player-timeline-control"
        },
        //tamanho do css
        size: {
            width: "20%",
            height: "20%"
        }
    });
    //cria o metodo playCurrent, que vai "setar" a musica q é para o jplayer tocar com as informações do player
    //o segundo "#jPlayer passa como parametro o objeto de inicalização"
    player.playCurrent = function() {
        player.jPlayer("setMedia", playlist[currentTracks]);
    }
    //cria o metodo play next
    player.playNext = function(){
        //se o currentTracks for a quantidade de musicas -1 (por ser uma chamada de objeto do vetor -1), voltar a ter o 0 pra continuar o loop
        //caso contrário, somar um ao currentTrack 
        currentTracks = (currentTracks == numTracks -1) ? 0 : ++currentTracks;
        player.playCurrent();
        $("#player-current-track").text(playlist[currentTracks].artist+' - '+playlist[currentTracks].title);

    }
    player.playPrevious = function(){
        //se o currentTrack for 0, fazer ele se tornar a quantidade de musicas menos um (por ser uma chamada de obj#)
        //caso contrário, subtrair um do currentTracks
        currentTracks = (currentTracks == 0) ? numTracks-1 : --currentTracks;
        player.playCurrent();
        $("#player-current-track").text(playlist[currentTracks].artist+' - '+playlist[currentTracks].title);

    }
    $('#player-next').click(function(){
        player.playNext();
    });
    $('#player-back').click(function(){
        player.playPrevious();
    });
});
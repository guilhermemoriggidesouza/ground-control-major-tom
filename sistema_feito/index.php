<!DOCTYPE html>
<?php
    session_start();
    $_SESSION['user'] = 5;
?>
<html>
    <head>
        <meta charset="utf-8">
        <title>Sistema player de musica</title>
        <script type="text/javascript" src="js/plugins/jplayer/lib/jquery.min.js?id=<?php echo time(); ?>"></script>
        <script type="text/JavaScript" src="js/plugins/jplayer/dist/jplayer/jquery.jplayer.min.js?id=<?php echo time(); ?>"></script>
        <script type="text/javascript" src="js/default.js?id=<?php echo time(); ?>"></script>
        <link rel="stylesheet" href="css/default.css?id=<?php echo time(); ?>">
    </head>
    <body>
    <div>
        <div class="top-bar">
            <div class="container">
                <div class="player-controls" id="player-controls">
                    <span type="button" class="player-play" id="player-play"><img src="imagens/play.png" alt="play"></span>
                    <span type="button" class="player-pause" id="player-pause"><img src="imagens/pause.png" alt="pause"></span>
                    <span type="button" class="player-next" id="player-next"><img src="imagens/next.png" alt="next"></span>
                    <span type="button" class="player-back" id="player-back"><img src="imagens/back.png" alt="back"></span>
                    <span type="button" class="player-stop" id="player-stop"><img src="imagens/stop.png" alt="stop"></span>
                </div>
                <div class="player" id="player"></div>
                <div class="player-timeline" id="player-timeline">
                    <div class="player-timeline-control" id="player-timeline-control"></div>
                </div>
                <div class="player-display" id="player-display">
                    playing: <span class="player-current-track" id="player-current-track"></span>
                </div>
            </div>
        </div>
    </div>
    </body>
</html>
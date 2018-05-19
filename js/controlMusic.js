var musicControl = $('#music')[0]
musicControl.volume = 0.5

$('.actions img').click(function () {
    if(musicControl.paused){
        musicControl.play()
        $('.actions img').removeClass('pause')
    }else{
        musicControl.pause()
        $('.actions img').addClass('pause')

    }
})
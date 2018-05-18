!function () {
    var duration = 10
    $('.actions').on('click', 'button', function (e) {
        let $button = $(e.currentTarget) // button
        let speed = $button.attr('data-speed')
        $button.addClass('active')
            .siblings('.active').removeClass('active')
        switch (speed) {
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 10
                break
        }
    })
    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id
        id = setTimeout(function run() {
            n += 1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n < code.length) {
                id = setTimeout(run, duration)
            } else {
                fn && fn.call()
            }
        }, duration)
    }

    let code = `
       .preview {
      background: #FEE433;
      border-top-left-radius: 100px;
      border-top-right-radius: 100px;
    }

    .nose {
      position: absolute;
      left: 50%;
      top: 28px;
      margin-left: -12px;
      width: 0;
      height: 0;
      border: 12px solid transparent;
      border-top-color: black;
      border-radius: 11px;
    }

    .eye {
      position: absolute;
      width: 49px;
      height: 49px;
      background: #2E2E2E;
      border-radius: 50%;
      border: 2px solid #000000;
    }

    .eye::before {
      position: absolute;
      left: 6px;
      top: -1px;
      display: block;
      width: 24px;
      height: 24px;
      content: '';
      background: white;
      border-radius: 50%;
      border: 2px solid #000;
    }

    .eye.left {
      right: 50%;
      margin-right: 90px;
    }

    .eye.right {
      left: 50%;
      margin-left: 90px;
    }

    .face {
      position: absolute;
      top: 85px;
      width: 68px;
      height: 68px;
      background: #FC0D1C;
      border: 2px solid black;
      border-radius: 50%;
    }

    .face.left {
      right: 50%;
      margin-right: 110px;
    }

    .face.right {
      left: 50%;
      margin-left: 110px;
    }

    .upperLip {
      position: absolute;
      top: 50px;
      height: 25px;
      width: 80px;
      border: 2px solid black;
      background: #FDE348;
    }

    .upperLip.left {
      right: 50%;
      border-bottom-left-radius: 40px 25px;
      border-top: none;
      border-right: none;
      transform: rotate(-20deg);
    }

    .upperLip.right {
      left: 50%;
      border-bottom-right-radius: 40px 25px;
      border-top: none;
      border-left: none;
      transform: rotate(20deg);
    }

    .lowerLip-wrapper {
      position: absolute;
      bottom: 0;
      left: 50%;
      margin-left: -150px;
      height: 110px;
      width: 300px;
      overflow: hidden;
    }

    .lowerLip {
      position: absolute;
      height: 3500px;
      width: 300px;
      background: #990513;
      border-radius: 200px/2000px;
      border: 2px solid black;
      bottom: 0;
      overflow: hidden;
    }

    .lowerLip::after {
      position: absolute;
      margin-left: -50px;
      left: 50%;
      bottom: -20px;
      content: '';
      width: 100px;
      height: 100px;
      background: #FC4A62;
      border-radius: 50px;
    }

    .horn {
      position: absolute;
      top: -20%;
      height: 0;
      width: 30px;
      border-bottom: 150px solid #FDE348;
      border-left: 3px solid transparent;
      border-right: 3px solid transparent;
      border-top-right-radius: 400px;
      border-top-left-radius: 400px;
    }

    .horn.left {
      right: 60%;
      transform: rotate(-20deg);
    }

    .horn.right {
      left: 60%;
      transform: rotate(20deg);
    }

    .hand {
      position: absolute;
      left: 25%;
      bottom: -10%;
      height: 0;
      width: 25px;
      border-top-right-radius: 200px;
      border-top-left-radius: 200px;
      border-bottom: 130px solid #555;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      transform: rotate(80deg);
      overflow: hidden;
    }

    #heart {
      position: absolute;
      bottom: 8px;
      left: 60%;
      width: 80px;
      height: 64px;
      animation: heart-anim 2s infinite backwards;
    }

    #heart::before, #heart::after {
      position: absolute;
      top: 0;
      content: "";
      width: 40px;
      height: 64px;
      background: #FC4A62;
      border-radius: 40px 40px 0 0;
    }

    #heart::before {
      left: 40px;
      transform: rotate(-45deg);
      transform-origin: 0 100%;
    }

    #heart::after {
      left: 0;
      transform: rotate(45deg);
      transform-origin: 100% 100%;
    }

    @keyframes heart-anim {
      0% {
        transform: scale(0);
      }
      75% {
        transform: scale(1.1);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }

    /*
     *
     * 好了好了，这只皮卡丘就送给你啦
     * 么么哒(≖ ‿ ≖)✧
     *
     *
     *
     *
     *
     */
`
    writeCode('', code)

}.call()

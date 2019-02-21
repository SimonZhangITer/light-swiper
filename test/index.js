var options2 = {
  continuous: true
};

var options3 = {
  width: 310,
  offset: 28,
  continuous: true
}

var options4 = {
  width: 310,
  offset: 28,
  continuous: true,
  callback: function (index, el) {
    var dots = document.querySelectorAll('.dot')
    for(let i = 0;i < dots.length; i++) {
      let dot = dots[i].querySelector('span')
      if (i == index) {
        dot.className = 'active'
      }else dot.className = ''
    }
  }
}

var mySwiper1 = new lightSwiper(document.querySelector('#siwper-1'))
var mySwiper2 = new lightSwiper(document.querySelector('#siwper-2'), options2)
var mySwiper3 = new lightSwiper(document.querySelector('#siwper-3'), options3)
var mySwiper4 = new lightSwiper(document.querySelector('#siwper-4'), options4)
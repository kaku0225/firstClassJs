// let's start coding:
$(window).ready(function(){
  console.log('ready')
  let cnt = 0, timer = null

  $('button').click(function(){
    console.log('clicked!')


    if (timer) {
      $('#running').slideUp()
      clearInterval(timer)
      timer = null
    } else {
      $('#running').slideDown()
      timer = setInterval(function(){
        cnt += 1
        $('#seconds').text(Math.floor(cnt / 10))
        $('.dots div:last-child').prependTo($('.dots'))
      }, 100)
    }
  })
})



$(window).ready(function(){
  console.log('ready')
  let cnt = 0, timer = null
  

  $('button').click(function(){
    console.log('clicked!')


    if (timer) {
      clearInterval(timer)
      timer = null
    } else {
      timer = setInterval(function(){
        console.log('!')
        cnt += 1
        $('#seconds').text(cnt)
      }, 1000)
    }
  })
})
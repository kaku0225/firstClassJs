// let's start coding:
window.addEventListener('DOMContentLoaded', function(){
  document.getElementById('create-element').addEventListener('click', function(){
    const div = document.createElement('div')
    div.className = 'time'
    div.textContent = (new Date()).toString()
    document.querySelector('.right').appendChild(div)
  })

  document.getElementById('reset-inner-html').addEventListener('click', function(){
    document.querySelector('.right').innerHTML = ('<div class="title">DOM practice...</div>')
  })

  document.getElementById('remove').addEventListener('click', function(){
    const lastTime = document.querySelector('.time:last-child')
    if (lastTime){
      lastTime.remove()
    }
  })

  document.getElementById('create-element-insert-adjacent').addEventListener('click', function(){
    const div = document.createElement('div')
    div.className = 'time'
    div.textContent = '!' + (new Date()).toString()
    document.querySelector('.title').insertAdjacentElement('afterend' , div )
  })
})
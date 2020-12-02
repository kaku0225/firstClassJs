window.addEventListener('DOMContentLoaded', function(){
  document.getElementById('on').addEventListener('click', function(){
    document.body.classList.add('light')

    const statusDiv = document.querySelector('.status')
    statusDiv.classList.remove('off')
    statusDiv.classList.add('on')
    
    document.querySelector('.status span').textContent = '開'

  })
  document.getElementById('off').addEventListener('click', function(){
    document.body.classList.remove('light')

    const statusDiv =  document.querySelector('.status')
    statusDiv.classList.add('off')
    statusDiv.classList.remove('on')

    document.querySelector('.status span').textContent = '關'
  })
})
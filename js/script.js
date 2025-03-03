let cookies = document.cookie.split('; ')
let isCookieSaved = false
let user_name = ''
for (let i = 0; i < cookies.length; i += 1) {
    if (cookies[i].split('=')[0].trim() == 'user_name') {
        isCookieSaved = true
        user_name = cookies[i].split('=')[1]
        break
    }
}

if (isCookieSaved) {
    document.querySelector('.input_field').style.display = 'none'
    document.querySelector('button').style.display = 'none'
    document.querySelector('h1').style.display = 'block'
    document.querySelector('h1').innerHTML = 'Привет, ' + user_name
} else {
    document.querySelector('button').addEventListener('click', function() {
        document.cookie = `user_name=${document.querySelector('.input_field').value};max-age=5000`
        document.querySelector('.input_field').style.display = 'none'
        document.querySelector('button').style.display = 'none'
        document.querySelector('h1').style.display = 'block'
        document.querySelector('h1').innerHTML = 'Привет, ' + document.querySelector('.input_field').value
    })
}

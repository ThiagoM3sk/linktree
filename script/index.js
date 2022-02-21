function enviar(){
    let user = document.getElementById('link')
    let redeSocial = document.getElementById('rede')
    let resu = document.getElementById('final')
    
    if(user.value == ''){
        alert('Preencha os campos')
        user.focus()
    }
    
    if(redeSocial.value == ''){
        alert('Preencha os campos')
        redeSocial.focus()
    }
    
    let areaLinks = document.createElement('div')
    areaLinks.setAttribute('class', 'social')
    let link = document.createElement('a')
        link.setAttribute('href', `https://${redeSocial.value}.com/${user.value}`)
        link.setAttribute('target', '_blank')
        
        link.style.textTransform = 'capitalize'
        link.innerHTML += `${redeSocial.value}<br>`
        resu.style.display = 'none'
        areaLinks.appendChild(link)
        resu.appendChild(areaLinks)

        redeSocial.value = ''
        //user.value = ''
    }
        
function finalizar(){
    let final = document.getElementById('final')
    let campoLink = document.getElementById('campo-link')
    let usuario = document.getElementById('user')
    let userFinal = document.getElementById('link')

    usuario.innerHTML = `@${userFinal.value}`
    final.style.display = 'inline-block'
    campoLink.style.display = 'none'
}
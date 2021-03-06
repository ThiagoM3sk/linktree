function enviar(){
    let user = document.getElementById('link')
    let redeSocial = document.getElementById('rede')
    let resu = document.getElementById('final')
    
    if(user.value == ''){
        alert('Preencha os campos')
        user.focus()
        return
    }
    
    if(redeSocial.value == ''){
        alert('Preencha os campos')
        redeSocial.focus()
        return
    }
    
    let areaLinks = document.createElement('div')
    areaLinks.setAttribute('class', 'social')
    let link = document.createElement('a')
        link.setAttribute('href', `https://${redeSocial.value}.com/${user.value}`)
        link.setAttribute('target', '_blank')
        
        link.style.textTransform = 'capitalize'
        areaLinks.innerHTML += `${redeSocial.value}<br>`
        resu.style.display = 'none'
        link.appendChild(areaLinks)
        resu.appendChild(link)

        redeSocial.value = ''
        //user.value = ''
    }
        
function finalizar(){
    let final = document.getElementById('final')
    let campoLink = document.getElementById('campo-link')
    let usuario = document.getElementById('user')
    let userFinal = document.getElementById('link')
    let title = document.getElementById('title')

    usuario.innerHTML = `@${userFinal.value}`
    title.innerHTML = `@${userFinal.value} | Linktree`
    final.style.display = 'inline-block'
    campoLink.style.display = 'none'
}
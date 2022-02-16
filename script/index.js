function enviar(){
    let linkSocial = document.getElementById('link')
    let redeSocial = document.getElementById('rede')
    let resu = document.getElementById('final')
    
    

    if(linkSocial.value == '' || redeSocial.value == ''){
        alert('Preencha os campos')
    }else{
        let link = document.createElement('a')
        link.setAttribute('href', `${linkSocial.value}`)
        link.setAttribute('target', '_blank')
        link.setAttribute('class', 'social')
        link.innerHTML += `${redeSocial.value}<br>`
        resu.style.display = 'none'
        resu.appendChild(link)
    }
}

function finalizar(){
    let final = document.getElementById('final')
    let campoLink = document.getElementById('campo-link')

    final.style.display = 'inline-block'
    campoLink.style.display = 'none'
}
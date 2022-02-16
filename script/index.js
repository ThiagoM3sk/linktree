function enviar(){
    let linkSocial = document.getElementById('link')
    let redeSocial = document.getElementById('rede')
    
    

    if(linkSocial.value == '' || redeSocial.value == ''){
        alert('Preencha os campos')
    }else{
        let link = document.createElement('a')
        link.setAttribute('href', `${linkSocial.value}`)
        link.setAttribute('target', '_blank')
        
        link.style.display = 'none'
    }
}

function finalizar(){
    let redeS = document.getElementById('rede')
    let linkS = document.getElementById('link')
    let final = document.getElementById('final')
    let campoLink = document.getElementById('campo-link')

    let fim = document.createElement('a')
    fim.setAttribute('href', `${linkS.value}`)
    fim.setAttribute('target', '_blank')

    fim.innerHTML = `${redeS.value}`
    
    final.style.display = 'inline-block'
    campoLink.style.display = 'none'
    final.appendChild(fim)
}
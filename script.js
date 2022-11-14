function calcular() {
    var txtnInput = window.document.getElementById('txtInput')
    var candidato = Number(txtInput.value)

    var resultado = window.document.getElementById('resultado')

    var fotoPerfil = window.document.createElement('IMG');

    switch (candidato) {
        case 13:
        resultado.innerHTML += `<p><strong>Luíz Inácio Lula da Silva - Partido dos Trabalhadores</strong></p>`;
        resultado.style.color = 'red';
        fotoPerfil.setAttribute('src', '/img/lula113PT.jpeg');
        document.getElementById('Perfil').appendChild(fotoPerfil);
        break;

        case 12:
        resultado.innerHTML += `<p><strong>Ciro Gomes - Partido Democrático Trabalhista</strong></p>`;
        resultado.style.color = 'green';
        fotoPerfil.setAttribute('src', '/img/ciro12PDT.jpg');
        document.getElementById('Perfil').appendChild(fotoPerfil);
        break;

        case 22:
        resultado.innerHTML += `<p><strong>Jair Bolsonaro - Partido Liberal</strong></p>`;
        resultado.style.color = 'blue';
        fotoPerfil.setAttribute('src', '/img/bolsonaro.jpg');
        document.getElementById('Perfil').appendChild(fotoPerfil);
        break;

        case 15:
        resultado.innerHTML += `<p><strong>Simone Tebet - Movimento Democrático Brasileiro</strong></p>`;
        resultado.style.color = 'blue';
        fotoPerfil.setAttribute('src', '/img/tebet15PMD.jpg');
        document.getElementById('Perfil').appendChild(fotoPerfil);
        break;

        case 21:
        resultado.innerHTML += `<p><strong>Sofia Manzano - Partido Comunista Brasileiro</strong></p>`;
        resultado.style.color = 'yellow';
        fotoPerfil.setAttribute('src', '/img/sofia21PCB.jpg');
        document.getElementById('Perfil').appendChild(fotoPerfil);
        break;

        case 16:
        resultado.innerHTML += `<p><strong>Vera Lúcia - Partido Socialista dos Trabalhadores Unificado</strong></p>`;
        resultado.style.color = 'red-white';
        fotoPerfil.setAttribute('src', '/img/vera16PSTU.jpg');
        document.getElementById('Perfil').appendChild(fotoPerfil);
        break;

        case 30:
        resultado.innerHTML += `<p><strong>Luiz Felipe d'Avila - NOVO</strong></p>`;
        resultado.style.color = 'orange';
        fotoPerfil.setAttribute('src', '/img/luiz30NOVO.jpg');
        document.getElementById('Perfil').appendChild(fotoPerfil);
        break;

        case 80:
        resultado.innerHTML += `<p><strong>Leonardo Péricles - Unidade Popular</strong></p>`;
        resultado.style.color = 'green';
        fotoPerfil.setAttribute('src', '/img/leonardo.80UP.jpg');
        document.getElementById('Perfil').appendChild(fotoPerfil);
        break;

        default:
        resultado.innerHTML += `<p><strong>[ERRO] CANDIDATO INVÁLIDO! CONFIRA O NÚMERO E TENTE NOVAMENTE</strong></p>`;
        resultado.style.color = 'white';
    }
}
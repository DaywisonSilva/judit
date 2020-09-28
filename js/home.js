function closeMessage() {
    setTimeout(function () {
        let message = document.createElement('div');
        message.classList.add('message');
        message.innerHTML = `<p>Olá, Sou a Judite. Está precisando de ajuda?</p>
                            <button class="close-message">Fechar</button>`
        message.style.position = 'fixed';
        message.style.backgroundColor = 'white';
        message.style.right = '90px';
        message.style.bottom = '40px';
        message.style.width = '200px';
        message.style.fontSize = '14px';
        message.style.color = '#3d3d3d';
        message.style.display = 'block';
        message.style.padding = '8px';
        message.style.boxSizing = 'border-box';
        document.querySelector('.message-container').appendChild(message);
        document.querySelector('.close-message').addEventListener('click', function () {
            document.querySelector('.message').remove();
        })
    }, 4000)
}

function changeStyleChatbot() {
    setTimeout(function () {
        let $img = document.createElement('img');
        $img.setAttribute('src', '../images/judite-chatbot.png')
        $img.style.width = '100%';
        document.querySelector('.WACLauncher__Button').style.borderRadius = '50%';
        document.querySelector('.WACLauncher__ButtonContainer').style.borderRadius = '50%';
        document.querySelector('.WACLauncher__svg').remove();
        document.querySelector('.WACLauncher__Button').appendChild($img);
    }, 2000)
}

function showModal() {
    document.querySelector('main').classList.toggle('black-filter');
    document.querySelector('header').classList.toggle('black-filter');
    document.querySelector('footer').classList.toggle('black-filter');
    document.querySelector('.modal').classList.toggle('d-none');
}

function getOption() {
    let btnCadastro = document.querySelector('#btn-cadastro');
    let btnMaisTarde = document.querySelector('#btn-mais-tarde');

    btnCadastro.addEventListener('click', function () {
        window.open('cadastro.html', '_self');
    })

    btnMaisTarde.addEventListener('click', function () {
        document.querySelector('.modal').classList.toggle('d-none');
        document.querySelector('main').classList.toggle('black-filter');
        document.querySelector('header').classList.toggle('black-filter');
        document.querySelector('footer').classList.toggle('black-filter');
    })
}

closeMessage();
changeStyleChatbot();
getOption();
setTimeout(showModal, 3000)


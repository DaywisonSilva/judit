function showModal() {
    let btnLogin = document.querySelector('.sectionOne__btn--login');
    let modal = document.querySelector('.modal');
    let divFilter = document.querySelector('.filter');
    btnLogin.addEventListener('click', function () {
        modal.classList.toggle('d-none');
        divFilter.classList.toggle('black-filter');
    })
}

function hideModal() {
    let iconClose = document.querySelector('.icon-close');
    let modal = document.querySelector('.modal');
    let divFilter = document.querySelector('.filter');
    iconClose.addEventListener('click', function () {
        modal.classList.toggle('d-none');
        divFilter.classList.toggle('black-filter');
    })
}

function validateUser() {
    let btnSubmit = document.querySelector('.modal__btnSubmit');
    let btnUser = document.querySelector('.modal__user');
    let btnPassword = document.querySelector('.modal__password');
    btnSubmit.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('olá')
        if (btnUser.value && btnPassword.value) {
            window.open('pageuser.html', '_self')
        }
    })
}

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
        console.log(message);
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
    }, 2500)
}

closeMessage();
changeStyleChatbot();
showModal();
hideModal();
validateUser();
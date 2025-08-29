const elements = {    
    burgerToggle: document.querySelector('.toggle'),
    menu: document.querySelector('.menu-toggle'),
    close: document.querySelector('.cross'),
    itensMenu: document.querySelectorAll('.menu-toggle__itens'),
    faq: document.querySelectorAll('.box-faq__question'),
    boxFaq: document.querySelectorAll('.box-faq'),
    resposta: document.querySelectorAll('.response'),
    chevron: document.querySelectorAll('.fi-ts-angle-small-down'),
    modal:document.querySelectorAll('.modal'),
    dsModal:document.querySelectorAll('.close'),
    btnFranqueado: document.querySelector('.open-toggle'),
    unidadeBtn: document.querySelectorAll('.unidades__plans-btn'),
    franquiasTypeof: document.querySelectorAll('.franquias__opt'),
    franquiasDscTypes: document.querySelectorAll('.dl'),
    franquiasTitleTypes: document.querySelectorAll('.unidades__plans-title'),
    tagsBeneficios: document.querySelector('.tags'),
    tagsTitle: document.querySelector('.title-tag'),
    tagsDsc: document.querySelector('.dsc-tag'),
    opt: document.getElementsByTagName('option')
}
// Monitorar seleção da tag select e armazenar a opção selecionada


elements.unidadeBtn.forEach((item, index) => {
    item.addEventListener('click', ()=> {
        elements.modal[index].classList.toggle("modal--active");
    })
});


if (document.querySelector('.franqueado')) {
    elements.btnFranqueado.addEventListener('click', () => {
        elements.btnFranqueado.classList.add('franqueado--active');
        let franquiaActive = document.querySelector('.franqueado')
        let btnActive = document.querySelector('.franqueado__opened');
        let btnDeactive = document.querySelector('.franqueado__close');
    
        btnActive.classList.add('franqueado__opened--active');
        franquiaActive.classList.add('franqueado--active');
        btnDeactive.classList.add('franqueado__close--deactive');
    
        console.log(elements.dsModal);
    })

}

if (document.querySelector('#beneficios')) {
    let equipTx = elements.linhaTx.childNodes;
    let equipSx = elements.linhaSx.childNodes;
    let equipMac = elements.linhaMac.childNodes;
    
    let modals = Array.from(elements.modal.children);
    
    equipTx.forEach((item, index) => {
       
        item.addEventListener('click', () => {
             console.log('apertei no array' + index)
            // Fecha todos os modais antes de abrir um novo
            modals.forEach(modalEl => {
                modalEl.style.display = 'none';
            });
            switch(index) {
                case 1:
                console.log('Deu certo' + index)   
                modals[0].style.display = 'flex';
                break;
                case 3:
                console.log('Deu certo' + index)   
                modals[1].style.display = 'flex';
                break;
                case 5:
                console.log('Deu certo' + index)   
                modals[2].style.display = 'flex';
                break;
                case 7:
                console.log('Deu certo' + index)   
                modals[3].style.display = 'flex';
                break;            
                default:
                    // Caso padrão, se necessário
                    break;
            }
        });
    });
    
    equipSx.forEach((item, index) => {
        item.addEventListener('click', () => {
            console.log('apertei no array' + index)
            modals.forEach(modalEl => {
                modalEl.style.display = 'none';
            });
            switch(index) {
                case 1: 
                console.log('Deu certo' + index)
                modals[4].style.display = 'flex';
                break;
                case 3:
                    console.log('Deu certo' + index)
                    modals[5].style.display = 'flex';
                    break;
                case 5:
                    console.log('Deu certo' + index)
                    modals[6].style.display = 'flex';
                    break;
                case 7:
                    console.log('Deu certo' + index)
                    modals[7].style.display = 'flex';
                    break;
                default:
                    break;
            }
        })
    });
    
    equipMac.forEach((item, index) => {
        item.addEventListener('click', () => {
            console.log('apertei no array' + index)
            modals.forEach(modalEl => {
                modalEl.style.display = 'none';
            });
            switch(index) {
                case 1: 
                console.log('Deu certo' + index)
                modals[8].style.display = 'flex';
                break;
                case 3:
                    console.log('Deu certo' + index)
                    modals[9].style.display = 'flex';
                    break;
                case 5:
                    console.log('Deu certo' + index)
                    modals[10].style.display = 'flex';
                    break;
                case 7:
                    console.log('Deu certo' + index)
                    modals[11].style.display = 'flex';
                    break;
                default:
                    break;
            }
        })
    });
    
    elements.dsModal.forEach((item) => {
        item.addEventListener('click', () => {
            console.log('apertei pra fechar o modal')
            modals.forEach(modalEl => {
                modalEl.style.display = 'none';
            });
        });
    });
    
    elements.burgerToggle.addEventListener('click', () =>{
        elements.menu.classList.toggle('menu-toggle--active');
    });
    
    elements.close.addEventListener('click', () =>{
        elements.burgerToggle.dispatchEvent(new Event('click'));
    });
    
    elements.itensMenu.forEach(item =>{
        item.addEventListener('click', () =>{
            elements.burgerToggle.dispatchEvent(new Event('click'));
            console.log('clicou no item')
        })
    });
    
}
elements.faq.forEach((item, index) => {
    item.addEventListener('click', () => {
        console.log('clicou certo!')
        elements.boxFaq[index].classList.toggle('box-faq--active');
        if (elements.boxFaq[index].classList.contains('box-faq--active')){
            elements.chevron[index].style.rotate = "-90deg";
        }else{
            elements.chevron[index].style.rotate = "0deg";
        }
        elements.resposta[index].classList.toggle('response--active');

        
    });
});

elements.dsModal.forEach((item) => {
    item.addEventListener('click', () => {
        let btnActive = document.querySelector('.franqueado__opened');
        let btnDeactive = document.querySelector('.franqueado__close');
        let franquiaActive = document.querySelector('.franqueado')

        franquiaActive.classList.remove('franqueado--active');
        btnActive.classList.remove('franqueado__opened--active');
        btnDeactive.classList.remove('franqueado__close--deactive');
        elements.btnFranqueado.classList.remove('franqueado--active');
    });
});

function openModalEquip() {
    let modalEquip = document.getElementById('m01');    
    
    modalEquip.style.display = 'none';    
    modalEquip.style.display = 'block';
}
//senha transwar wi-fi ADM: Tw@#$1987
function switchModal(index){
    if (document.querySelector("#sigma")) {
        modalEquip.style.display = 'none';    
        modalEquip.style.display = 'flex';
        
        let modalImg = document.getElementById("item");
        let equipImg = sigma[index][0];
        let equipLine = sigma[index][2];
        let equipDsc = sigma[index][3];
        document.querySelector(".modal__infos").children[0].innerHTML = document.querySelectorAll(".complete-line__footer-title")[index].innerText;
        document.querySelector(".modal__infos").children[1].innerHTML = equipLine;
        document.querySelector(".modal__infos").children[2].innerHTML = equipDsc;
    
        modalImg.setAttribute('src', equipImg)
        let modals = modalEquip;
        return dsModal(modals)
    }else if (document.querySelector("#tx")) {
        modalEquip.style.display = 'none';    
        modalEquip.style.display = 'flex';
        
        let modalImg = document.getElementById("item");
        let equipImg = tx[index][0];
        let equipLine = tx[index][2];
        let equipDsc = tx[index][3];
        document.querySelector(".modal__infos").children[0].innerHTML = document.querySelectorAll(".complete-line__footer-title")[index].innerText;
        document.querySelector(".modal__infos").children[1].innerHTML = equipLine;
        document.querySelector(".modal__infos").children[2].innerHTML = equipDsc;
                console.log(index)
        modalImg.setAttribute('src', equipImg)
        let modals = modalEquip;
        return dsModal(modals)
    }else if(document.querySelector("#sx")){
        modalEquip.style.display = 'none';    
        modalEquip.style.display = 'flex';
        
        let modalImg = document.getElementById("item");
        let equipImg = sx[index][0];
        let equipLine = sx[index][2];
        let equipDsc = sx[index][3];
        document.querySelector(".modal__infos").children[0].innerHTML = document.querySelectorAll(".complete-line__footer-title")[index].innerText;
        document.querySelector(".modal__infos").children[1].innerHTML = equipLine;
        document.querySelector(".modal__infos").children[2].innerHTML = equipDsc;
    
        modalImg.setAttribute('src', equipImg)
        let modals = modalEquip;
        return dsModal(modals)        
    }else if(document.querySelector("#cromus")){
        modalEquip.style.display = 'none';    
        modalEquip.style.display = 'flex';
        
        let modalImg = document.getElementById("item");
        let equipImg = cromus[index][0];
        let equipLine = cromus[index][2];
        let equipDsc = cromus[index][3];
        document.querySelector(".modal__infos").children[0].innerHTML = document.querySelectorAll(".complete-line__footer-title")[index].innerText;
        document.querySelector(".modal__infos").children[1].innerHTML = equipLine;
        document.querySelector(".modal__infos").children[2].innerHTML = equipDsc;

        modalImg.setAttribute('src', equipImg)
        let modals = modalEquip;
        return dsModal(modals)        
    }

    
}
//document.querySelector(".modal__infos").children[0]
let modalEquip = document.getElementById('m01'); 

if (document.querySelector('.toggle')) {
    elements.burgerToggle.addEventListener('click', () =>{
        elements.menu.classList.toggle('menu-toggle--active');
    });
    
    elements.close.addEventListener('click', () =>{
        elements.burgerToggle.dispatchEvent(new Event('click'));
    });

}
if (document.querySelector('.nav-franquia')) {

    const _typeNormal = [
        ['./sources/foto-franquia-omega.jpg', './sources/unidades-academia_02.jpg', './sources/image-academia-contato_01.jpg'],
        ['Free Basic 500m²', 'Premium 1000m²', 'Be 2000m²'],
        ['entre 80m² à 500m²','entre 600m² à 1000m²', 'entre 1020m² à 2000m²'],
        ['8%', '8,5%', '9%'],
        ['3,5%', '4%', '5%']
    ];
    const _typeCondom = [
        ['./sources/image-franquia-condom.jpg', './sources/image-franquia-condom_02.png', './sources/image-franquia-condom_03.png'],
        ['Basic condom', 'Premium condom', 'Be condom'],
        ['entre 40m² à 70m²','entre 80m² à 96m²', 'entre 100m² à 200m²'],
        ['4%', '4,5%', '5%'],
        ['3%', '3,2%', '3,5%']
    ];
    const _beneficios = [
        ['investimento inicial', 'Rentabilidade', 'Marketing', 'Suporte', 'Treinamento'],
        [
            'Conquiste sua franquia com um investimento inicial de: R$240 mil. Incluso aluguel de máquinas.',
            'Lorem ipsum dolor sit amet',
            'Suporte total a estratégias de marketing digital e offline, desenvolvimento de peças e campanhas gerais e individuais de cada franqueado',
            'Suporte na gestão dos recursos, financeiro, dentre outros. Para facilitar o franqueado a manter sua academia no mais alto desempenho.',
            'Treinamento de funcionários e gestores de academia, introduzindo-os aos processos de vendas e processos de gestão e manutenção de recursos.'
        ]
    ]
    let imgFranquias = document.querySelectorAll('.unidades__plans-img');
    elements.franquiasTypeof.forEach((item, index) => {
        item.addEventListener('click', () =>{
            elements.franquiasTypeof.forEach(el => el.classList.add('deactive'));
            item.classList.remove('deactive');

            switch (index) {
                case 0:
                    imgFranquias[0].setAttribute('src', _typeNormal[0][index]);
                    elements.franquiasTitleTypes[0].innerHTML = _typeNormal[1][index];
                    imgFranquias[1].setAttribute('src', _typeCondom[0][index]);
                    elements.franquiasTitleTypes[1].innerHTML = _typeCondom[1][index];
                    elements.franquiasDscTypes[0].innerHTML = _typeNormal[2][index];
                    elements.franquiasDscTypes[1].innerHTML = _typeNormal[3][index];
                    elements.franquiasDscTypes[2].innerHTML = _typeNormal[4][index];
                    elements.franquiasDscTypes[3].innerHTML = _typeCondom[2][index];
                    elements.franquiasDscTypes[3].innerHTML = _typeCondom[2][index];
                    elements.franquiasDscTypes[3].innerHTML = _typeCondom[2][index];
                break;
                case 1:
                    imgFranquias[0].setAttribute('src', _typeNormal[0][index]);
                    elements.franquiasTitleTypes[0].innerHTML = _typeNormal[1][index];
                    imgFranquias[1].setAttribute('src', _typeCondom[0][index]);
                    elements.franquiasTitleTypes[1].innerHTML = _typeCondom[1][index];
                    elements.franquiasDscTypes[0].innerHTML = _typeNormal[2][index];
                    elements.franquiasDscTypes[1].innerHTML = _typeNormal[3][index];
                    elements.franquiasDscTypes[2].innerHTML = _typeNormal[4][index];
                    elements.franquiasDscTypes[3].innerHTML = _typeCondom[2][index];
                    elements.franquiasDscTypes[4].innerHTML = _typeCondom[3][index];
                    elements.franquiasDscTypes[5].innerHTML = _typeCondom[4][index];
                break;
                case 2:
                    imgFranquias[0].setAttribute('src', _typeNormal[0][index]);
                    elements.franquiasTitleTypes[0].innerHTML = _typeNormal[1][index];
                    imgFranquias[1].setAttribute('src', _typeCondom[0][index]);
                    elements.franquiasTitleTypes[1].innerHTML = _typeCondom[1][index];
                    elements.franquiasDscTypes[0].innerHTML = _typeNormal[2][index];
                    elements.franquiasDscTypes[1].innerHTML = _typeNormal[3][index];
                    elements.franquiasDscTypes[2].innerHTML = _typeNormal[4][index];
                    elements.franquiasDscTypes[3].innerHTML = _typeCondom[2][index];
                    elements.franquiasDscTypes[4].innerHTML = _typeCondom[3][index];
                    elements.franquiasDscTypes[5].innerHTML = _typeCondom[4][index];
                break;
            }
        })
    })

    let tags = Array.from(elements.tagsBeneficios.children);

    tags.forEach((item, index) => {
        item.addEventListener('click', () => {
            tags.forEach((el) => {
                el.classList.add('tag--deactive');
                el.classList.remove('tag');
            });
            item.classList.add('tag');
            item.classList.remove('tag--deactive');

            switch(index) {
                case 0:
                    elements.tagsTitle.innerHTML = _beneficios[0][index];
                    elements.tagsDsc.innerHTML = _beneficios[1][index];
                    break;
                case 1:
                    elements.tagsTitle.innerHTML = _beneficios[0][index];
                    elements.tagsDsc.innerHTML = _beneficios[1][index];
                    break;
                case 2:
                    elements.tagsTitle.innerHTML = _beneficios[0][index];
                    elements.tagsDsc.innerHTML = _beneficios[1][index];
                    break;
                case 3:
                    elements.tagsTitle.innerHTML = _beneficios[0][index];
                    elements.tagsDsc.innerHTML = _beneficios[1][index];
                    break;
                case 4:
                    elements.tagsTitle.innerHTML = _beneficios[0][index];
                    elements.tagsDsc.innerHTML = _beneficios[1][index];
                    break;
            }
        })
    })
    console.log(elements.tagsTitle.innerHTML);
}
if (document.querySelector('.horarios')) {
    const hoje = document.getElementById('today');
    const diaAtual = document.getElementById('current-day');
    const hour = document.querySelectorAll('.hour');

    hoje.innerHTML = new Date().getDate();
    let namedDay = diaAtual.innerHTML = new Date().getDay();
    switch(namedDay) {
        case 0:
            diaAtual.innerHTML = "Domingo";
            break;
        case 1:
            diaAtual.innerHTML = "Segunda-feira";
            break;
        case 2:
            diaAtual.innerHTML = "Terça-feira";
            break;
        case 3:
            diaAtual.innerHTML = "Quarta-feira";
            break;
        case 4:
            diaAtual.innerHTML = "Quinta-feira";
            break;
        case 5:
            diaAtual.innerHTML = "Sexta-feira";
            break;
        case 6:
            diaAtual.innerHTML = "Sábado";
            break;
    }
    
    let diasMes = Array.from(document.querySelectorAll('.horarios__tab-daynumb'))
    let diasSemana = Array.from(document.querySelectorAll('.horarios__tab-day')).filter(dia => dia !== diaAtual);
    //laço que pega os números dos dias do Mês
    for (let i = 0; i < diasMes.filter(dia => dia !== hoje).length; i++) {
        // Converte o valor de hoje.innerHTML para número
        let baseDay = parseInt(hoje.innerHTML, 10);
        // Calcula o novo valor para o dia, somando o índice + 1 ao dia base
        let dayMonth = diasMes.filter(dia => dia !== hoje)[i].innerHTML = baseDay + i + 1;
        
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        if (dayMonth > daysInMonth) {
            diasMes.filter(dia => dia !== hoje)[i].innerHTML = dayMonth - daysInMonth;
        }
    }
    for (let c = 0; c < diasSemana.length; c++) {
        let dayOfWeekIndex = (namedDay + c + 1) % 7;
        switch(dayOfWeekIndex) {
            case 0:
                diasSemana[c].innerHTML = "Domingo";
                break;
            case 1:
                diasSemana[c].innerHTML = "Segunda-feira";
                break;
            case 2:
                diasSemana[c].innerHTML = "Terça-feira";
                break;
            case 3:
                diasSemana[c].innerHTML = "Quarta-feira";
                break;
            case 4:
                diasSemana[c].innerHTML = "Quinta-feira";
                break;
            case 5:
                diasSemana[c].innerHTML = "Sexta-feira";
                break;
            case 6:
                diasSemana[c].innerHTML = "Sábado";
                break;
        }
    }
    let selectedOption = null;
    const selectElement = document.querySelector('select');
    selectedOption = selectElement.value;
    selectElement.addEventListener('change', (e) => {
        selectedOption = e.target.value;
        // Você pode usar selectedOption conforme necessário
        console.log('Opção selecionada:', selectedOption);
    });
    
}
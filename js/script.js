const elements = {    
    burgerToggle: document.querySelector('.toggle'),
    menu: document.querySelector('.menu-toggle'),
    close: document.querySelector('.cross'),
    itensMenu: document.querySelectorAll('.menu-toggle__itens'),
    faq: document.querySelectorAll('.box-faq__question'),
    boxFaq: document.querySelectorAll('.box-faq'),
    resposta: document.querySelectorAll('.response'),
    chevron: document.querySelectorAll('.fi-ts-angle-small-down'),
    nxt: document.querySelector('.nxt'),
    prv:document.querySelector('.prv'),
    photo: document.getElementById('project-photo'),
    modal:document.getElementById('modal'),
    linhaTx:document.getElementById('l01'),
    linhaSx:document.getElementById('l02'),
    linhaMac:document.getElementById('l03'),
    dsModal:document.querySelectorAll('.close'),
    dsModalPlanos:document.querySelector('.close-md-planos'),
    modalPlanos: document.getElementById('md-planos'),
    openModal: document.getElementById('open-md-planos'),
    equipItens: document.querySelectorAll('.box-equipment'),
    bannerHero: document.querySelectorAll('.hero-complete-line')
}
const _gallery = [
    [
        ["./sources/Máquinas Alfa/IMG-20250328-WA0040.jpg", "", "Linha Alfa TX - TX1052", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e porta garrafas que aumentam a sua conveniência no momento do treino."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0041.jpg", "", "Linha Alfa TX - TX1054", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e porta garrafas que aumentam a sua conveniência no momento do treino."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0046.jpg", "", "Linha Alfa TX - TX1015", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e porta garrafas que aumentam a sua conveniência no momento do treino."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0047.jpg", "", "Linha Alfa TX - TX1040", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e porta garrafas que aumentam a sua conveniência no momento do treino."],        
        ["./sources/Máquinas Alfa/IMG-20250328-WA0044.jpg", "", "Linha Alfa TX - TX1025-EP", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e porta garrafas que aumentam a sua conveniência no momento do treino."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0041.jpg", "", "Linha Alfa TX - TX1054", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e porta garrafas que aumentam a sua conveniência no momento do treino."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0043.jpg", "", "Linha Alfa TX - TX1020", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e porta garrafas que aumentam a sua conveniência no momento do treino."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0042.jpg", "", "Linha Alfa TX - TX1015-EP", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e porta garrafas que aumentam a sua conveniência no momento do treino."],        
        ["./sources/Máquinas Alfa/IMG-20250328-WA0045.jpg", "", "Linha Alfa TX - TX1051", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e porta garrafas que aumentam a sua conveniência no momento do treino."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0050.jpg", "", "Linha Alfa TX - TX1055", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e porta garrafas que aumentam a sua conveniência no momento do treino."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0051.jpg", "", "Linha Alfa TX - TX1058", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e porta garrafas que aumentam a sua conveniência no momento do treino."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0052.jpg", "", "Linha Alfa TX - TX1070", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e porta garrafas que aumentam a sua conveniência no momento do treino."],        
        ["./sources/Máquinas Alfa/IMG-20250328-WA0054.jpg", "", "Linha Alfa TX - TX1060", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e porta garrafas que aumentam a sua conveniência no momento do treino."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0056.jpg", "", "Linha Alfa TX - TX1080", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e porta garrafas que aumentam a sua conveniência no momento do treino."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0057.jpg", "", "Linha Alfa TX - TX1085", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e porta garrafas que aumentam a sua conveniência no momento do treino."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0058.jpg", "", "Linha Alfa TX - TX2020", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e porta garrafas que aumentam a sua conveniência no momento do treino."],        
        ["./sources/Máquinas Alfa/IMG-20250328-WA0059.jpg", "", "Linha Alfa TX - TX2012", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e porta garrafas que aumentam a sua conveniência no momento do treino."],        
        ["./sources/Máquinas Alfa/IMG-20250328-WA0060.jpg", "", "Linha Alfa TX - TX2022", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e porta garrafas que aumentam a sua conveniência no momento do treino."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0061.jpg", "", "Linha Alfa TX - TX2010", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e porta garrafas que aumentam a sua conveniência no momento do treino."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0062.jpg", "", "Linha Alfa TX - TX2028", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e porta garrafas que aumentam a sua conveniência no momento do treino."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0063.jpg", "", "Linha Alfa TX - TX2040", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e porta garrafas que aumentam a sua conveniência no momento do treino."],       
        ["./sources/Máquinas Alfa/IMG-20250328-WA0064.jpg", "", "Linha Alfa TX - TX2051", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e porta garrafas que aumentam a sua conveniência no momento do treino."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0065.jpg", "", "Linha Alfa TX - TX2042", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e porta garrafas que aumentam a sua conveniência no momento do treino."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0066.jpg", "", "Linha Alfa TX - TX2050", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e porta garrafas que aumentam a sua conveniência no momento do treino."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0067.jpg", "", "Linha Alfa TX - TX2059", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e porta garrafas que aumentam a sua conveniência no momento do treino."],        
        ["./sources/Máquinas Alfa/IMG-20250328-WA0068.jpg", "", "Linha Alfa TX - TX2057", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e porta garrafas que aumentam a sua conveniência no momento do treino."],        
        ["./sources/Máquinas Alfa/IMG-20250328-WA0069.jpg", "", "Linha Alfa TX - TX2084", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e porta garrafas que aumentam a sua conveniência no momento do treino."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0070.jpg", "", "Linha Alfa TX - TX2061", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e porta garrafas que aumentam a sua conveniência no momento do treino."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0071.jpg", "", "Linha Alfa TX - TX2090", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e porta garrafas que aumentam a sua conveniência no momento do treino."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0072.jpg", "", "Linha Alfa TX - TX2055", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e porta garrafas que aumentam a sua conveniência no momento do treino."]       
    ],
    [
        ["./sources/Máquinas Alfa/IMG-20250328-WA0073.jpg", "", "Linha Alfa SX - SX2099", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e garrafas que aumentam a sua conveniência no momento do treino. Ideal para quem quer treinar com em um ambiente mais agradável."],
        ["./sources/Máquinas Alfa/SX1060 - Apolete.png", "", "Linha Alfa SX - SX1060", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e garrafas que aumentam a sua conveniência no momento do treino. Ideal para quem quer treinar com em um ambiente mais agradável."],
        ["./sources/Máquinas Alfa/SX1052.png", "", "Linha Alfa SX - SX1052", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e garrafas que aumentam a sua conveniência no momento do treino. Ideal para quem quer treinar com em um ambiente mais agradável."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0078.jpg", "", "Linha Alfa SX - SX1025-EP", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e garrafas que aumentam a sua conveniência no momento do treino. Ideal para quem quer treinar com em um ambiente mais agradável."],      
        ["./sources/Máquinas Alfa/IMG-20250328-WA0079.jpg", "", "Linha Alfa SX - SX1015-EP", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e garrafas que aumentam a sua conveniência no momento do treino. Ideal para quem quer treinar com em um ambiente mais agradável."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0080.jpg", "", "Linha Alfa SX - SX1054", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e garrafas que aumentam a sua conveniência no momento do treino. Ideal para quem quer treinar com em um ambiente mais agradável."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0081.jpg", "", "Linha Alfa SX - SX1040", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e garrafas que aumentam a sua conveniência no momento do treino. Ideal para quem quer treinar com em um ambiente mais agradável."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0082.jpg", "", "Linha Alfa SX - SX1051", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e garrafas que aumentam a sua conveniência no momento do treino. Ideal para quem quer treinar com em um ambiente mais agradável."],      
        ["./sources/Máquinas Alfa/IMG-20250328-WA0084.jpg", "", "Linha Alfa SX - SX1052", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e garrafas que aumentam a sua conveniência no momento do treino. Ideal para quem quer treinar com em um ambiente mais agradável."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0085.jpg", "", "Linha Alfa SX - SX1058", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e garrafas que aumentam a sua conveniência no momento do treino. Ideal para quem quer treinar com em um ambiente mais agradável."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0086.jpg", "", "Linha Alfa SX - SX1055", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e garrafas que aumentam a sua conveniência no momento do treino. Ideal para quem quer treinar com em um ambiente mais agradável."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0087.jpg", "", "Linha Alfa SX - SX1078", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e garrafas que aumentam a sua conveniência no momento do treino. Ideal para quem quer treinar com em um ambiente mais agradável."],      
        ["./sources/Máquinas Alfa/IMG-20250328-WA0088.jpg", "", "Linha Alfa SX - SX1070", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e garrafas que aumentam a sua conveniência no momento do treino. Ideal para quem quer treinar com em um ambiente mais agradável."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0090.jpg", "", "Linha Alfa SX - SX1080", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e garrafas que aumentam a sua conveniência no momento do treino. Ideal para quem quer treinar com em um ambiente mais agradável."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0091.jpg", "", "Linha Alfa SX - SX1085", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e garrafas que aumentam a sua conveniência no momento do treino. Ideal para quem quer treinar com em um ambiente mais agradável."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0093.jpg", "", "Linha Alfa SX - SX2010", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e garrafas que aumentam a sua conveniência no momento do treino. Ideal para quem quer treinar com em um ambiente mais agradável."],      
        ["./sources/Máquinas Alfa/IMG-20250328-WA0096.jpg", "", "Linha Alfa SX - SX2012", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e garrafas que aumentam a sua conveniência no momento do treino. Ideal para quem quer treinar com em um ambiente mais agradável."],      
        ["./sources/Máquinas Alfa/IMG-20250328-WA0094.jpg", "", "Linha Alfa SX - SX2020", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e garrafas que aumentam a sua conveniência no momento do treino. Ideal para quem quer treinar com em um ambiente mais agradável."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0098.jpg", "", "Linha Alfa SX - SX2022", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e garrafas que aumentam a sua conveniência no momento do treino. Ideal para quem quer treinar com em um ambiente mais agradável."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0097.jpg", "", "Linha Alfa SX - SX2028", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e garrafas que aumentam a sua conveniência no momento do treino. Ideal para quem quer treinar com em um ambiente mais agradável."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0095.jpg", "", "Linha Alfa SX - SX2040", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e garrafas que aumentam a sua conveniência no momento do treino. Ideal para quem quer treinar com em um ambiente mais agradável."],      
        ["./sources/Máquinas Alfa/IMG-20250328-WA0099.jpg", "", "Linha Alfa SX - SX2042", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e garrafas que aumentam a sua conveniência no momento do treino. Ideal para quem quer treinar com em um ambiente mais agradável."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0100.jpg", "", "Linha Alfa SX - 2090", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e garrafas que aumentam a sua conveniência no momento do treino. Ideal para quem quer treinar com em um ambiente mais agradável."],      
        ["./sources/Máquinas Alfa/IMG-20250328-WA0101.jpg", "", "Linha Alfa SX - SX2050", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e garrafas que aumentam a sua conveniência no momento do treino. Ideal para quem quer treinar com em um ambiente mais agradável."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0103.jpg", "", "Linha Alfa SX - SX2059", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e garrafas que aumentam a sua conveniência no momento do treino. Ideal para quem quer treinar com em um ambiente mais agradável."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0104.jpg", "", "Linha Alfa SX - SX2051", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e garrafas que aumentam a sua conveniência no momento do treino. Ideal para quem quer treinar com em um ambiente mais agradável."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0105.jpg", "", "Linha Alfa SX - SX2090", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e garrafas que aumentam a sua conveniência no momento do treino. Ideal para quem quer treinar com em um ambiente mais agradável."],      
        ["./sources/Máquinas Alfa/IMG-20250328-WA0106.jpg", "", "Linha Alfa SX - SX2061", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e garrafas que aumentam a sua conveniência no momento do treino. Ideal para quem quer treinar com em um ambiente mais agradável."],      
        ["./sources/Máquinas Alfa/IMG-20250328-WA0107.jpg", "", "Linha Alfa SX - SX2095", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e garrafas que aumentam a sua conveniência no momento do treino. Ideal para quem quer treinar com em um ambiente mais agradável."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0102.jpg", "", "Linha Alfa SX - SX2055", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e garrafas que aumentam a sua conveniência no momento do treino. Ideal para quem quer treinar com em um ambiente mais agradável."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0108.jpg", "", "Linha Alfa SX - SX2057", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e garrafas que aumentam a sua conveniência no momento do treino. Ideal para quem quer treinar com em um ambiente mais agradável."]
    ],
    [
        ["./sources/maquinas-sigma/recortadas/cross-angular-smith.png", "", "Linha Sigma", "Estofado produzido em Courvin padrão Náutico Antimofo para maior durabilidade e custo benefício, cabos de aço em Nylon (alta resistência), mais segurança nos movimentos dos seus exercícios."],
        ["./sources/maquinas-sigma/crossover-tradicional.png", "", "Linha Sigma", "Estofado produzido em Courvin padrão Náutico Antimofo para maior durabilidade e custo benefício, cabos de aço em Nylon (alta resistência), mais segurança nos movimentos dos seus exercícios."],
        ["./sources/maquinas-sigma/Gluteo-Deslizante.jpeg", "", "Linha Sigma", "Estofado produzido em Courvin padrão Náutico Antimofo para maior durabilidade e custo benefício, cabos de aço em Nylon (alta resistência), mais segurança nos movimentos dos seus exercícios."],
        ["./sources/maquinas-sigma/recortadas/panturilha-agachamento.png", "", "Linha Sigma", "Estofado produzido em Courvin padrão Náutico Antimofo para maior durabilidade e custo benefício, cabos de aço em Nylon (alta resistência), mais segurança nos movimentos dos seus exercícios."],      
        ["./sources/maquinas-sigma/recortadas/peck-deck.png", "", "Linha Sigma", "Estofado produzido em Courvin padrão Náutico Antimofo para maior durabilidade e custo benefício, cabos de aço em Nylon (alta resistência), mais segurança nos movimentos dos seus exercícios."],      
        ["./sources/maquinas-sigma/Polia-Regulavel-Simples-1.jpg", "", "Linha Sigma", "Estofado produzido em Courvin padrão Náutico Antimofo para maior durabilidade e custo benefício, cabos de aço em Nylon (alta resistência), mais segurança nos movimentos dos seus exercícios."],      
        ["./sources/maquinas-sigma/Pulley-com-Remada-6.jpeg", "", "Linha Sigma", "Estofado produzido em Courvin padrão Náutico Antimofo para maior durabilidade e custo benefício, cabos de aço em Nylon (alta resistência), mais segurança nos movimentos dos seus exercícios."],      
        ["./sources/maquinas-sigma/recortadas/Remada-Sentada-Maquina.png", "", "Linha Sigma", "Estofado produzido em Courvin padrão Náutico Antimofo para maior durabilidade e custo benefício, cabos de aço em Nylon (alta resistência), mais segurança nos movimentos dos seus exercícios."],      
        ["./sources/maquinas-sigma/Supino-Vertical-Maquina-3.jpeg", "", "Linha Sigma", "Estofado produzido em Courvin padrão Náutico Antimofo para maior durabilidade e custo benefício, cabos de aço em Nylon (alta resistência), mais segurança nos movimentos dos seus exercícios."]     
    ],
    [
        ["./sources/maquina-cromus/Desenv.-Ombro-Maquina-_1_.png", "", "Linha Cromus", "Estofado produzido em Courvin padrão Náutico Antimofo para maior durabilidade e custo benefício, cabos de aço em Nylon (alta resistência), mais segurança nos movimentos dos seus exercícios."],
        ["./sources/maquina-cromus/Extensora.jpg", "", "Linha Cromus", "Estofado produzido em Courvin padrão Náutico Antimofo para maior durabilidade e custo benefício, cabos de aço em Nylon (alta resistência), mais segurança nos movimentos dos seus exercícios."],
        ["./sources/maquina-cromus/Flexora-Vertical-Cromus-2.jpg", "", "Linha Cromus", "Estofado produzido em Courvin padrão Náutico Antimofo para maior durabilidade e custo benefício, cabos de aço em Nylon (alta resistência), mais segurança nos movimentos dos seus exercícios."],
        ["./sources/maquina-cromus/Gluteo-Deslizante-2.jpeg", "", "Linha Cromus", "Estofado produzido em Courvin padrão Náutico Antimofo para maior durabilidade e custo benefício, cabos de aço em Nylon (alta resistência), mais segurança nos movimentos dos seus exercícios."],      
        ["./sources/maquina-cromus/Panturilha-Vertical-3.jpg", "", "Linha Cromus", "Estofado produzido em Courvin padrão Náutico Antimofo para maior durabilidade e custo benefício, cabos de aço em Nylon (alta resistência), mais segurança nos movimentos dos seus exercícios."],      
        ["./sources/maquina-cromus/Remada-Sentada-Maquina-2.png", "", "Linha Cromus", "Estofado produzido em Courvin padrão Náutico Antimofo para maior durabilidade e custo benefício, cabos de aço em Nylon (alta resistência), mais segurança nos movimentos dos seus exercícios."],      
        ["./sources/maquina-cromus/Supino-Multi-Funcional-Maquina-4-1.jpg", "", "Linha Cromus", "Estofado produzido em Courvin padrão Náutico Antimofo para maior durabilidade e custo benefício, cabos de aço em Nylon (alta resistência), mais segurança nos movimentos dos seus exercícios."]       
    ]
]
function modal() {

    elements.modalPlanos.style.display = "block";

    elements.dsModalPlanos.addEventListener('click', () => {
        elements.modalPlanos.style.display = 'none';
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
    
    elements.faq.forEach((item, index) => {
        item.addEventListener('click', () => {
            elements.boxFaq[index].classList.toggle('box-faq--active');
            if (elements.boxFaq[index].classList.contains('box-faq--active')){
                elements.chevron[index].style.rotate = "-90deg";
            }else{
                elements.chevron[index].style.rotate = "0deg";
            }
            elements.resposta[index].classList.toggle('response--active');
    
            console.log('clicou certo!')
        });
    });
}
let tx = _gallery[0];
let sx = _gallery[1];
let sigma = _gallery[2];
let cromus = _gallery[3];


function openModalEquip() {
    let modalEquip = document.getElementById('m01');    
    
    modalEquip.style.display = 'none';    
    modalEquip.style.display = 'block';
}

function dsModal(modals){
    elements.dsModal.forEach((item) => {
        item.addEventListener('click', () => {
            console.log('apertei pra fechar o modal')
            modals.style.display = 'none';
        });
    });
}
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

elements.equipItens.forEach((item, index) => {
    item.addEventListener('click', ()=>{
    switchModal(index);
    })
});

elements.burgerToggle.addEventListener('click', () =>{
    elements.menu.classList.toggle('menu-toggle--active');
});

elements.close.addEventListener('click', () =>{
    elements.burgerToggle.dispatchEvent(new Event('click'));
});
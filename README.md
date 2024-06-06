# Projeto de Cronômetro

Este projeto consiste em um cronômetro simples desenvolvido com JavaScript, HTML e CSS. O cronômetro permite iniciar, parar e zerar a contagem de tempo, exibindo o tempo decorrido em horas, minutos e segundos.

## Funcionalidades
- Iniciar Contagem: Inicia a contagem de tempo incrementando segundos a cada segundo e atualizando os minutos e horas conforme necessário.
- Parar Contagem: Pausa a contagem do tempo.
- Zerar Contagem: Reseta o cronômetro para zero.

## Estrutura do Código

O projeto é composto por três funções principais:

1. `ativarContagem()`:

- Ao acionar a função `ativarContagem()`, o cronômetro começa a contar o tempo, incrementando os segundos a cada segundo.
- Quando os segundos chegam a 60, os minutos são incrementados, e da mesma forma, quando os minutos chegam a 60, as horas são incrementadas.
- A função utiliza setInterval para realizar a atualização contínua a cada segundo.
- Exibe a mensagem "Iniciado" no elemento com o ID display.

2. `pararContagem()`:

- A função `pararContagem()` interrompe a contagem do cronômetro, pausando o tempo no ponto em que está.
- Utiliza clearInterval para parar a execução contínua iniciada por setInterval.
- Exibe a mensagem "Parou" no elemento com o ID display.

3. `zerarContagem()`:

- A função `zerarContagem()` redefine o cronômetro, zerando os valores de horas, minutos e segundos.
- Limpa a mensagem do display, permitindo que o cronômetro seja reiniciado do zero.

## Como Usar
1. Clone este repositório.
2. Abra o arquivo index.html em um navegador web ou acesse esse [link](https://projeto-cronometro-js.vercel.app/).
3. Use os botões na interface para iniciar, parar ou zerar a contagem do cronômetro.


## Tecnologias Utilizadas

![html](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![css](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![javascript](https://img.shields.io/badge/JavaScript-000?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

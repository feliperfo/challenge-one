# Giftpalooza 🎁
Giftpalooza é uma aplicação web que organiza sorteios de amigo secreto. Nesse projeto desenvolvido para o Challenge da **Oracle Next Education** em parceria com a **Alura**, é possível adicionar os nomes dos participantes, realizar o sorteio e garantir que cada pessoa receba um amigo secreto único. 

![Página inicial](https://github.com/user-attachments/assets/229eac23-a091-45c6-bdec-c58125ab3763)

## Funcionalidades

- **Adicionar**: Insira os nomes dos participantes que farão parte do sorteio.
- **Limpar**: Remova todos os nomes da lista para reiniciar o sorteio.
- **Fazer sorteio**: Realize o sorteio de forma aleatória, garantindo que cada pessoa receba um amigo único.

## Como Usar

1. **Lista de Amigos**:
   - Acesse a página "Lista de Amigos".
     
![Lista de amigos](https://github.com/user-attachments/assets/1e03944f-fc7f-4cc7-a1b0-a2f7f4afcaa1)

   - Digite o nome de um participante no campo de texto e clique em "Adicionar".
   - Repita o processo para todos os participantes.
     
![Lista com 3 nomes](https://github.com/user-attachments/assets/6e175d6b-a491-4c46-8bfb-f236e04305ba)

2. **Sortear**:
   - Acesse a página "Sortear".
     
![Sortear](https://github.com/user-attachments/assets/af49d24a-cbcf-4e6a-bb6b-fc4d62afd9b0)

   - Digite o nome de quem está realizando o sorteio no campo de texto.
     
![Nome da pessoa sorteando](https://github.com/user-attachments/assets/4eb34d55-5070-4024-8c6e-1d1e0fb89cc6)

   - Clique em "Fazer sorteio" para descobrir o amigo secreto.
     
![Resultado do amigo secreto da vez](https://github.com/user-attachments/assets/ff46b686-0488-4624-95dc-749f5ff0caec)

   - O amigo secreto aparecerá na tela por apenas 2 segundos, impossibilitando que a próxima pessoa a sortear saiba o resultado de quem sorteou antes dela.
   - A próxima pessoa a sortear deve realizar o processo novamente com seu próprio nome para descobrir seu amigo secreto.

## Prevenções de Erros 🛠️

O Giftpalooza foi desenvolvido para prevenir erros que a pessoa usuária pode cometer, garantindo que o sorteio funcione adequadamente. 

### 1. **Nome Vazio**
   - O sistema não permite adicionar nomes vazios à lista de amigos. Caso o usuário tente adicionar um nome sem conteúdo, uma mensagem de alerta será exibida.

![Alerta para tentativa de adicionar nome vazio](https://github.com/user-attachments/assets/0f87a00d-c81a-4960-8160-79b4b0af5847)

### 2. **Nomes Repetidos**
   - O sistema impede que um mesmo nome seja adicionado mais de uma vez à lista de amigos. Caso o usuário tente adicionar um nome já existente, uma mensagem de alerta será exibida.

![Alerta para nome repetido](https://github.com/user-attachments/assets/1e35422d-cd7c-4a40-97c9-6f3ba8415a49)

### 3. **Mínimo de Participantes**
   - Para garantir um sorteio imprevisível, é necessário que pelo menos **3 amigos** estejam na lista. Caso contrário, o sistema exibirá uma mensagem de alerta.

![Alerta para lista com menos de 3 nomes](https://github.com/user-attachments/assets/ea2d5b22-b94b-451e-b7e3-ee150981e076)

### 4. **Limpeza da Lista**
   - Antes de limpar a lista de amigos e os sorteios realizados, o sistema solicita uma confirmação do usuário para evitar ações acidentais.

![Confirmação para limpar lista](https://github.com/user-attachments/assets/94068721-780d-4e96-bc99-c4d4817c2bec)

### 5. **Sorteio Duplicado**
   - Cada participante só pode realizar o sorteio uma vez. Caso tente sortear novamente, o sistema exibirá uma mensagem informando que o sorteio já foi realizado.

![Alerta para nome que já sorteou alguém](https://github.com/user-attachments/assets/3af558e7-52ca-435a-aaee-38c3ab449f04)

### 6. **Nome Inválido**
   - O nome da pessoa que está realizando o sorteio deve estar na lista de amigos. Caso contrário, o sistema exibirá uma mensagem de alerta.
 
![Alerta para nome fora da lista](https://github.com/user-attachments/assets/3e7bdde9-c059-4a61-ab74-d0c759c0b240)

### 7. **Falta de Identificação**
   - O sistema não permite realizar o sorteio sem que o nome de quem está sorteando seja informado. Caso o campo esteja vazio, uma mensagem de alerta será exibida.

![Alerta para sorteio sem identificação](https://github.com/user-attachments/assets/b98fbc91-653f-4cf8-bece-77a46dd87529)

## Estrutura do Projeto

- **index.html**: Página inicial do Giftpalooza, com descrição sobre o projeto, links e menu de navegação para as outras páginas.
- **listadeamigos.html**: Página onde os nomes dos participantes são adicionados e exibidos.
- **sortear.html**: Página onde o sorteio é realizado.
- **app.js**: Script que gerencia a adição de amigos, realização do sorteio e limpeza da lista.
- **style.css**: Arquivo de estilos para a aplicação.

## Tecnologias Utilizadas

- **HTML**: Estruturação das páginas.
- **CSS**: Estilização da aplicação.
- **JavaScript**: Lógica de funcionamento do sorteio, manipulação da lista de amigos e uso do **LocalStorage** para persistência de dados entre sessões.

## Como Executar o Projeto

Siga os passos abaixo para executar o Giftpalooza em sua máquina local:

### 1. **Obtenha o Código Fonte**
   Há duas maneiras de obter o código do projeto:

   #### **Opção 1: Clonar o Repositório**
   - Abra o terminal ou prompt de comando.
   - Execute o seguinte comando para clonar o repositório:
     ```bash
     git clone https://github.com/feliperfo/challenge-one.git
     ```

   #### **Opção 2: Baixar o Código Fonte**
   - Acesse o repositório do projeto.
   - Clique no botão **"Code"** e selecione **"Download ZIP"**.
   - Extraia o arquivo ZIP em uma pasta de sua preferência.

### 2. **Execute o Projeto**
   - Navegue até a pasta do projeto.
   - Abra o arquivo `index.html` em seu navegador.

---

Seu amigo secreto é um festival de presentes! Adicione amigos e realize sorteios diretamente no Giftpalooza. 🚀

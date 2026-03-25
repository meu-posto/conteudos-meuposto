# Formulário de Contato com Integração ao Google Sheets

Este diretório contém os arquivos para um formulário de contato que envia os dados para uma planilha do Google Sheets.

## Funcionalidades

- Formulário HTML com campos para Nome, Celular, Email, Empresa e Cargo.
- Validação de campos obrigatórios.
- Máscara de entrada para o campo de celular.
- Notificações de status (enviando, sucesso, erro) usando a biblioteca SweetAlert2.
- Envio de dados para uma planilha do Google Sheets através de um Google Apps Script.

## Arquivos

- **`index.html`**: A estrutura HTML do formulário de contato.
- **`styles.css`**: A folha de estilos para o formulário.
- **`script.js`**: O script do lado do cliente que lida com a máscara de entrada, a submissão do formulário e as notificações.
- **`_app-script.js`**: O script do Google Apps que recebe os dados do formulário e os insere em uma planilha do Google.
- **`_infos.txt`**: Contém a URL de implantação do Google Apps Script.

## Como Funciona

1.  O usuário preenche o formulário no `index.html`.
2.  O `script.js` captura o evento de submissão do formulário.
3.  Uma requisição `POST` é enviada para a URL do Google Apps Script (`_infos.txt`) com os dados do formulário.
4.  O `_app-script.js` (implantado como um aplicativo da web) recebe a requisição.
5.  O script insere os dados em uma nova linha na planilha do Google especificada.

## Configuração

Para usar este formulário, você precisará configurar seu próprio Google Apps Script e planilha:

1.  **Crie uma nova Planilha do Google.**
2.  Na planilha, vá para `Extensões > Apps Script`.
3.  Copie o conteúdo de `_app-script.js` e cole no editor de script.
4.  **Configure o nome da planilha:** No `_app-script.js`, altere a variável `sheetName` para o nome da sua planilha.
5.  **Implante o script:**
    - Clique em `Implantar > Nova implantação`.
    - Selecione o tipo como `App da Web`.
    - Em `Quem tem acesso`, selecione `Qualquer pessoa`.
    - Clique em `Implantar`.
6.  **Copie a URL do aplicativo da web.**
7.  **Atualize a URL no `script.js`**: Cole a URL copiada na variável `scriptURL` no arquivo `script.js`.

Com essas etapas, o formulário estará pronto para receber dados e enviá-los para a sua planilha do Google.

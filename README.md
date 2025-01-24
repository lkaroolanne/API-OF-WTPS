# Envio de Mensagens em Massa com a API Oficial do WhatsApp

## 📄 Descrição

Este projeto utiliza a **API Oficial do WhatsApp** para enviar mensagens em massa para uma lista de destinatários. Ele foi desenvolvido em **Node.js** utilizando a biblioteca `axios` para realizar as requisições HTTP. Com este código, você pode automatizar o envio de mensagens personalizadas utilizando templates previamente aprovados pela API do WhatsApp.

---

## 🚀 Funcionalidades

- **Envio em massa** para múltiplos números de telefone.
- **Templates personalizáveis**, permitindo o envio de mensagens específicas.
- **Logs detalhados** sobre o status de cada mensagem enviada.
- Conformidade total com a **API Oficial do WhatsApp**.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Axios**: Biblioteca para realizar requisições HTTP.
- **API Oficial do WhatsApp**: Interface de envio de mensagens.

---

## 📋 Pré-requisitos

Antes de executar este projeto, certifique-se de ter:

1. **Node.js** instalado (versão 16 ou superior).
2. Credenciais válidas para acessar a **API Oficial do WhatsApp**, incluindo:
   - **Access Token** (token de autenticação).
   - **Phone Number ID** (ID do número de telefone registrado).
3. Um **template aprovado** configurado no [Meta for Developers](https://developers.facebook.com/).

---

## 📦 Instalação e Configuração

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```

2. **Instale as dependências**:
   Este projeto utiliza apenas o `axios`. Para instalá-lo, execute:
   ```bash
   npm install axios
   ```

3. **Configure as variáveis**:
   Abra o arquivo principal do projeto e atualize as seguintes variáveis:
   - `accessToken`: Substitua pelo seu token de acesso válido.
   - `phoneNumberId`: Substitua pelo ID do número de telefone registrado.
   - `recipients`: Adicione os números de telefone no formato internacional, incluindo o código do país (ex.: `5511999999999`).

   Certifique-se também de que o nome do template (`name`) e o idioma (`language`) estejam configurados corretamente no objeto `template`.

4. **Execute o projeto**:
   Para iniciar o envio de mensagens, rode o seguinte comando:
   ```bash
   node index.js
   ```

---

## 📚 Uso

O script envia mensagens em massa para uma lista de destinatários especificada na variável `recipients`. Ele utiliza templates previamente aprovados para garantir conformidade com as políticas da API do WhatsApp.

### Exemplo de Configuração de Template
No arquivo principal, você pode personalizar o template da mensagem:
```javascript
template: {
  name: 'onbording', // Substitua pelo nome do template aprovado
  language: { code: 'pt_br' } // Defina o idioma
}
```

A resposta bem-sucedida para cada mensagem será exibida no console, enquanto erros serão registrados com detalhes.

---

## 🛡️ Conformidade e Segurança

Este projeto segue as diretrizes da **API Oficial do WhatsApp**. Garanta que:
- Apenas números de telefone opt-in sejam utilizados.
- As mensagens estejam em conformidade com as regras da plataforma.

**Nota**: Não compartilhe seu token de acesso ou outras informações sensíveis publicamente.

---

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests para melhorias e correções.

---

## 📧 Suporte

Se tiver dúvidas ou encontrar problemas, entre em contato pelo e-mail: [karolanne.developer@gmail.com](mailto:karolanne.developer@gmail.com).

---

## 📝 Licença

Este projeto está licenciado sob a licença **MIT**. Consulte o arquivo `LICENSE` para mais detalhes.

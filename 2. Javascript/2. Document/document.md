**Imagine que o objeto `document` é como um mapa detalhado da sua página web,** representa o conteúdo da página web e fornece métodos e propriedades para acessar e manipular os elementos HTML e o conteúdo da página.


### Principais Propriedades e Métodos do `document`

- **`document.getElementById(id)`**: Seleciona um elemento pelo seu `id`.
  
  ```javascript
  let elemento = document.getElementById('meuId');
  ```

- **`document.getElementsByClassName(className)`**: Seleciona todos os elementos com uma determinada classe.
  
  ```javascript
  let elementos = document.getElementsByClassName('minhaClasse');
  ```

- **`document.getElementsByTagName(tagName)`**: Seleciona todos os elementos com uma determinada tag.
  
  ```javascript
  let elementos = document.getElementsByTagName('p');
  ```

- **`document.querySelector(selector)`**: Seleciona o primeiro elemento que corresponde ao seletor CSS.
  
  ```javascript
  let elemento = document.querySelector('.minhaClasse');
  ```

- **`document.querySelectorAll(selector)`**: Seleciona todos os elementos que correspondem ao seletor CSS.
  
  ```javascript
  let elementos = document.querySelectorAll('p');
  ```

- **`document.createElement(tagName)`**: Cria um novo elemento HTML.
  
  ```javascript
  let novoElemento = document.createElement('div');
  ```

- **`document.createTextNode(text)`**: Cria um novo nó de texto.
  
  ```javascript
  let texto = document.createTextNode('Texto novo');
  ```
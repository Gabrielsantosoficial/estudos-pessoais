**Imagine que você está organizando uma festa, e cada convidado tem um crachá com diferentes adesivos que indicam seus interesses.** O `classList` em JavaScript é como uma lista desses adesivos em cada crachá, permitindo que você adicione, remova ou verifique se um determinado adesivo está presente.

## O que é `classList`?

O `classList` é uma propriedade dos elementos HTML que retorna uma lista dinâmica de classes CSS associadas ao elemento. Com ele, você pode adicionar ou remover classes de forma eficiente, verificar se um elemento possui uma determinada classe, e até mesmo alternar classes.

### Principais Métodos de `classList`

Aqui estão os principais métodos que você pode usar com `classList` para manipular as classes de um elemento:

### 1. **`add()`**

- **Descrição:** Adiciona uma ou mais classes ao elemento.
- **Sintaxe:** `element.classList.add('classe1', 'classe2', ...)`
- **Exemplo:**

```javascript
let elemento = document.querySelector('#meuElemento');
elemento.classList.add('ativo', 'destaque');
```

### 2. **`remove()`**

- **Descrição:** Remove uma ou mais classes do elemento.
- **Sintaxe:** `element.classList.remove('classe1', 'classe2', ...)`
- **Exemplo:**

```javascript
let elemento = document.querySelector('#meuElemento');
elemento.classList.remove('destaque');
```

### 3. **`toggle()`**

- **Descrição:** Alterna uma classe no elemento. Se a classe estiver presente, ela é removida; se não estiver, ela é adicionada.
- **Sintaxe:** `element.classList.toggle('classe')`
- **Exemplo:**

```javascript
let elemento = document.querySelector('#meuElemento');
elemento.classList.toggle('invisivel');
```

### 4. **`contains()`**

- **Descrição:** Verifica se o elemento possui uma determinada classe.
- **Sintaxe:** `element.classList.contains('classe')`
- **Exemplo:**

```javascript
let elemento = document.querySelector('#meuElemento');
if (elemento.classList.contains('ativo')) {
    console.log('O elemento está ativo');
}
```

### 5. **`replace()`**

- **Descrição:** Substitui uma classe por outra no elemento.
- **Sintaxe:** `element.classList.replace('classeAntiga', 'classeNova')`
- **Exemplo:**

```javascript
let elemento = document.querySelector('#meuElemento');
elemento.classList.replace('destaque', 'realce');
```

## Exemplo Prático na Tela

Vamos juntar tudo isso em um exemplo prático que você pode usar para ver como o `classList` funciona na prática:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo de classList em JavaScript</title>
    <style>
        .ativo { color: green; font-weight: bold; }
        .destaque { background-color: yellow; }
        .invisivel { display: none; }
    </style>
</head>
<body>
    <h1 id="meuElemento">Manipulando Classes com classList</h1>
    <button id="toggleAtivo">Alternar "ativo"</button>
    <button id="addDestaque">Adicionar "destaque"</button>
    <button id="removeDestaque">Remover "destaque"</button>
    <button id="toggleInvisivel">Alternar "invisivel"</button>

    <script>
        let elemento = document.querySelector('#meuElemento');

        document.getElementById('toggleAtivo').onclick = function() {
            elemento.classList.toggle('ativo');
        };

        document.getElementById('addDestaque').onclick = function() {
            elemento.classList.add('destaque');
        };

        document.getElementById('removeDestaque').onclick = function() {
            elemento.classList.remove('destaque');
        };

        document.getElementById('toggleInvisivel').onclick = function() {
            elemento.classList.toggle('invisivel');
        };
    </script>
</body>
</html>
```

### Como esse código funciona:

1. **Alternar "ativo":** Quando você clica no botão "Alternar 'ativo'", a classe `ativo` é alternada no título (`<h1>`). Se a classe estiver presente, ela será removida; se não estiver, será adicionada.
2. **Adicionar "destaque":** Quando você clica no botão "Adicionar 'destaque'", a classe `destaque` é adicionada ao título, mudando o fundo para amarelo.
3. **Remover "destaque":** Quando você clica no botão "Remover 'destaque'", a classe `destaque` é removida do título.
4. **Alternar "invisivel":** Quando você clica no botão "Alternar 'invisivel'", a classe `invisivel` é alternada no título, ocultando ou mostrando o elemento.

### Como testar:

1. Crie um arquivo HTML (por exemplo, `index.html`).
2. Cole o código acima no arquivo.
3. Abra o arquivo HTML em um navegador.

### O que você verá:

A página exibirá um título com o texto "Manipulando Classes com classList" e quatro botões. Ao clicar nos botões, você verá as classes sendo adicionadas, removidas ou alternadas no título, modificando sua aparência ou visibilidade conforme o que cada botão faz.
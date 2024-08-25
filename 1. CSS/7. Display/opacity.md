Vamos explorar as propriedades **`visibility`**, **`opacity`** e **`display: none`** em CSS. Essas propriedades ajudam a controlar a visibilidade e a exibição dos elementos em uma página web, mas cada uma funciona de maneira diferente.

### 1. **Propriedade `visibility`**

A propriedade `visibility` controla se um elemento é visível ou não, mas o espaço ocupado pelo elemento ainda é reservado no layout, mesmo quando ele está oculto.

#### **Valores Comuns**

- **`visible`**: O elemento é visível (este é o valor padrão).
  ```css
  .visivel {
      visibility: visible;
  }
  ```
  
- **`hidden`**: O elemento é oculto, mas ainda ocupa espaço no layout.
  ```css
  .oculto {
      visibility: hidden;
  }
  ```

#### **Exemplo**:
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Propriedade Visibility</title>
    <style>
        .visivel {
            background-color: lightblue;
            padding: 20px;
        }
        .oculto {
            visibility: hidden;
            background-color: lightcoral;
            padding: 20px;
        }
    </style>
</head>
<body>
    <div class="visivel">Este elemento é visível</div>
    <div class="oculto">Este elemento está oculto mas ocupa espaço</div>
</body>
</html>
```

### 2. **Propriedade `opacity`**

A propriedade `opacity` controla a transparência de um elemento. Um valor de `1` é totalmente opaco, enquanto `0` é totalmente transparente.

#### **Valores Comuns**

- **`1`**: Totalmente opaco (padrão).
  ```css
  .opaco {
      opacity: 1;
  }
  ```
  
- **`0`**: Totalmente transparente.
  ```css
  .transparente {
      opacity: 0;
  }
  ```
  
- **Valores entre `0` e `1`**: Transparência parcial.
  ```css
  .semi-transparente {
      opacity: 0.5;
  }
  ```

#### **Exemplo**:
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Propriedade Opacity</title>
    <style>
        .opaco {
            background-color: lightblue;
            opacity: 1;
            padding: 20px;
        }
        .transparente {
            background-color: lightcoral;
            opacity: 0;
            padding: 20px;
        }
        .semi-transparente {
            background-color: lightgreen;
            opacity: 0.5;
            padding: 20px;
        }
    </style>
</head>
<body>
    <div class="opaco">Este elemento é totalmente opaco</div>
    <div class="transparente">Este elemento é totalmente transparente</div>
    <div class="semi-transparente">Este elemento é semi-transparente</div>
</body>
</html>
```

### 3. **Propriedade `display: none`**

A propriedade `display: none` remove o elemento do layout da página. Ele não ocupa espaço e não afeta o layout dos elementos ao redor.

#### **Exemplo**:
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Propriedade Display None</title>
    <style>
        .visivel {
            background-color: lightblue;
            padding: 20px;
        }
        .escondido {
            display: none;
            background-color: lightcoral;
            padding: 20px;
        }
    </style>
</head>
<body>
    <div class="visivel">Este elemento é visível</div>
    <div class="escondido">Este elemento está escondido e não ocupa espaço</div>
</body>
</html>
```

### 4. **Comparação das Propriedades**

- **`visibility: hidden`**: O elemento é oculto mas o espaço no layout é reservado.
- **`opacity: 0`**: O elemento é totalmente transparente, mas ainda ocupa espaço e interage com o layout.
- **`display: none`**: O elemento é removido do layout e não ocupa espaço. Não é exibido e não afeta o layout dos outros elementos.

### 5. **Resumo**

- **`visibility`**: Controla a visibilidade do elemento, mas mantém o espaço no layout.
- **`opacity`**: Controla a transparência do elemento, mas mantém o espaço no layout e pode afetar a interação.
- **`display: none`**: Remove o elemento do layout, fazendo com que ele não ocupe espaço ou afete outros elementos.

### Algo mais para aprender?

Se você tiver mais perguntas sobre como usar essas propriedades ou outros aspectos do CSS, estou aqui para ajudar! O que você gostaria de explorar a seguir? 😊
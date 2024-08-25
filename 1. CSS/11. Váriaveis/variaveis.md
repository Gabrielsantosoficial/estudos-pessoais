Vamos explorar **variáveis no CSS**! As variáveis, também conhecidas como **custom properties**, são uma maneira poderosa de armazenar e reutilizar valores no CSS, tornando o código mais fácil de manter e ajustar.

### O Que São Variáveis no CSS?

Variáveis no CSS permitem que você defina valores reutilizáveis que podem ser aplicados a diferentes propriedades CSS. Isso é útil para manter a consistência e facilitar atualizações de estilo em um projeto.

### Como Definir Variáveis

As variáveis CSS são definidas dentro de um seletor usando a sintaxe `--nome-da-variável`. Normalmente, elas são definidas no seletor `:root`, que é um pseudo-elemento que representa o nível mais alto do documento, tornando as variáveis disponíveis globalmente.

#### Exemplo Básico

```css
:root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --font-size: 16px;
}

body {
    font-size: var(--font-size);
    color: var(--primary-color);
}

h1 {
    color: var(--secondary-color);
}
```

### Usando Variáveis

Para usar uma variável em CSS, você utiliza a função `var()`, passando o nome da variável que deseja aplicar.

```css
h2 {
    color: var(--primary-color);
    font-size: var(--font-size);
}
```

### Alterando Variáveis em Escopos Específicos

Você pode redefinir variáveis dentro de seletores específicos para alterar valores em um escopo mais restrito. Isso permite criar temas ou estilos diferentes dentro da mesma página.

#### Exemplo de Escopo Local

```css
:root {
    --background-color: #ffffff;
    --text-color: #333333;
}

.dark-mode {
    --background-color: #333333;
    --text-color: #ffffff;
}

body {
    background-color: var(--background-color);
    color: var(--text-color);
}
```

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo de Variáveis CSS</title>
    <style>
        :root {
            --primary-color: #3498db;
            --secondary-color: #2ecc71;
            --font-size: 16px;
        }

        body {
            font-size: var(--font-size);
            color: var(--primary-color);
            background-color: #f4f4f4;
        }

        h1 {
            color: var(--secondary-color);
        }

        .dark-mode {
            --primary-color: #ecf0f1;
            --secondary-color: #e74c3c;
            background-color: #2c3e50;
        }

        .dark-mode body {
            color: var(--primary-color);
            background-color: #2c3e50;
        }

        .dark-mode h1 {
            color: var(--secondary-color);
        }
    </style>
</head>
<body>
    <h1>Olá, Mundo!</h1>
    <button onclick="document.body.classList.toggle('dark-mode')">Alternar Modo Escuro</button>
</body>
</html>
```

### Benefícios das Variáveis CSS

1. **Manutenção Simplificada**: Alterar um valor em um só lugar atualizará todas as instâncias desse valor.
2. **Consistência**: Garante que os mesmos valores sejam usados em todo o site.
3. **Temas Dinâmicos**: Facilita a implementação de temas que podem ser trocados dinamicamente.

### Considerações

- **Compatibilidade**: As variáveis CSS são suportadas na maioria dos navegadores modernos, mas pode haver problemas com versões mais antigas. Verifique a compatibilidade se precisar oferecer suporte a navegadores mais antigos.
- **Herança**: As variáveis são herdadas pelos elementos filhos, a menos que sejam redefinidas em um escopo local.

### Algo mais para aprender?

Se você quiser explorar mais sobre como usar variáveis CSS com preprocessadores como Sass ou Less, ou se tiver outras perguntas sobre CSS, estou aqui para ajudar! O que você gostaria de aprender a seguir? 😊
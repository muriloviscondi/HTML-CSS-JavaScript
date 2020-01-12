<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Calculo Combustível</title>
    <link href="css/style.css" type="text/css" rel="stylesheet">
</head>
<body>
    <header>
        <h1>Calculando combustível</h1>
    </header>
    <main>
        <section id="informacao">
            <div class="sub-titulo">
                <h2>Instruções</h2>
            </div><!--.sub-titulo-->
            <div class="conteudo">
                <ol>
                    <li>Digite os valores CORRESPONDENTE em cada campo:
                        <ul>
                            <li>Quilometros a ser percorrido</li>
                            <li>Média de km/l de seu carro</li>
                        </ul>
                    </li>
                    <li>NÃO será aceito valores zerados ou negativo
                        <ul>
                            <li>Não há como viajar de ré</li>
                        </ul>
                    </li>
                    <li>Clique em CALCULAR para gerar a média do valor R$ do combustível</li>
                    <li>Clique em RESET para zera todos os valores</li>
                </ol>
            </div><!--.conteudo-->
        </section><!--#informacao-->

        <section id="calculo">
            <form action="calculo.php" method="POST">
                <div class="sub-titulo">
                    <h2>Campo do Cálculo</h2>
                </div><!--.sub-titulo-->
                <div class="input-number">
                    <label>
                        Quilometros a ser percorrido:
                    </label>
                    <input type="number" name="quilometro" min="1" autofocus required>
                </div><!--.input-number-->
                <div class="input-number">
                    <label>
                        Média de km/l de seu carro:
                    </label>
                    <input type="text" name="media" min="1" required>
                </div><!--.input-text-->
                <div class="input-buttons">
                    <input type="submit" value="CALCULAR">
                    <input type="reset" value="RESET">
                </div><!--input-buttons-->
            </form>
        </section>
    </main>
</body>
</html>

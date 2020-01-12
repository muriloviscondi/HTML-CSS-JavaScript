<?php
    if($_POST){
        $quilometro = $_POST['quilometro'];
        $media = $_POST['media'];

        $gasolina = number_format(5.20, 2, ",", ".");
        $alcool = 3.99;
        $diesel = 3.89;

        $consumoGasolina = ($quilometro / $media) * $gasolina;
        $consumoGasolina = number_format($consumoGasolina, 2, ",", ".");

        $consumoAlcool = ($quilometro / $media) * $alcool;
        $consumoAlcool = number_format($consumoAlcool, 2, ",", ".");

        $consumoDiesel = ($quilometro / $media) * $diesel;
        $consumoDiesel = number_format($consumoDiesel, 2, ",", ".");

        $mensagemValor = "Valor gasolina: R$ $consumoGasolina, alcool: R$ $consumoAlcool e Diesel: R$ $consumoDiesel";
        
        $mensagem = "<div class='sub-titulo'>";
        $mensagem .= "<h2>O valor total gasto será de:</h2>";
        $mensagem .= "</div>";
        $mensagem .= "<ul>";
        $mensagem .= "<li>Gasolina: R$ $consumoGasolina</li>";
        $mensagem .= "<li>Alcool:.....R$ $consumoAlcool</li>";
        $mensagem .= "<li>Diesel:.....R$ $consumoDiesel</li>";
        $mensagem .= "</ul>";
        $mensagem .= "</div>";

    } else {
        $mensagem = "<form class='form-respostaErro' action='calculo-combustivel.php' method='POST'>";
        $mensagem .= "<div class='sub-titulo'>";
        $mensagem .= "<h2>Nenhum valor inserido</h2>";
        $mensagem .= "</div>";
        $mensagem .= "<input type='submit' value='VOLTAR'>";
        $mensagem .= "</form>";
    }   
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Resposta Cálculo</title>
    <link href="css/style.css" type="text/css" rel="stylesheet">
</head>
<body>
    <div class="resposta">
        <?php 
            echo $mensagem;
        ?>
    </div>
</body>
</html>

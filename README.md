<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Style.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Portfolio website</title>
</head>
<body>

    <div class="background">
        <nav>
            <h2 class="logo">thae<span>milly</span></h2>
            <ul class="cabeçalho-link">
                <li><a href="#">Inicio</a></li>
                <button onclick="location.href='#Sobre-Mim'">Sobre-Mim</button>
                <button onclick="location.href='#Projetos'">Projetos</button>
                <button onclick="location.href='#Contato'">Contato</button>
            </ul>
        </nav>

        <div class="Main">
            <h4>Ola, meu nome é</h4>
            <h1>Thaemilly<span>Oliveira</span></h1>
            <h3>Eu sou uma (nao sei oq sou)</h3>
            <div class="Container-btn">
                <form action="mailto:thaemillytata73365@gmail.com" method="post" enctype="text/plain">
                    <input type="email" name="email" id="mail" placeholder="Envie seu Email">
                    <input type="submit" name="submit" value="Enviar">
                </form>
            </div>
        </div>
    </div>

    <section class="background-color-Sobre">
        <div class="main-sobre">
            <img src="emizzitita.jpg"width="320" height="205"/>
            <div class="Text-sobre">
                <h2 id="Sobre-Mim">Sobre-Mim</h2>
                <h5>(oq eu sou)<span>& "outra coisa ki eu sou</span></h5>
                <p>Meu nome é Thaemilly. Tenho 16 anos e sou apaixonada por música e filmes de terror. Minha cantora preferida é Mitski, cuja arte me inspira.
                </p>
                <button type="button">Vamos conversar</button>
            </div>
        </div>
    </section>

    <div class="Container-serviços">
        <div class="title">
            <h2 id="Projetos">Projetos</h2>
        </div>
        <div class="Caixa">
            <div class="Card">
                <i class="fa-solid fa-sun"></i>
                <h5>Sistema solar</h5>
                <div class="Paragrafo-button">
                    <p>Este projeto é sobre o sistema solar</p>
                    <a href="sistemasolar.html">
                        <button type="button">Ver mais</button>
                    </a>
                </div>
            </div>


            <div class="Card">
                <i class="fa-solid fa-film"></i>
                <h5>Site anime</h5>
                <div class="Paragrafo-button">
                    <p>Um site com imagens e videos de anime </p>
                    <a href="siteanimes.html">
                        <button type="button">Ver mais</button>
                    </a>
                </div>
            </div>

            <div class="Card">
                <i class="fa-solid fa-question"></i>
                <h5>Em desenvolvimento...</h5>
                <div class="Paragrafo-button">
                    <p>... </p>
                    <button type="button">Ler Mais</button>
                </div>
            </div>
        </div>
    </div>    

    <div class="me-contate">
            <button type="button">Enviar mensagem</button>
                </div>

            <footer>
                <div class="Redes-sociais">
                    <a href="https://www.facebook.com/thaem1lly"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/thaemiillly/"><i class="fab fa-instagram"></i></a>
                </div>
            </footer>
            
                
        </body>
        </html>
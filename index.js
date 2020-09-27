const articles = [
    {
        title: "A Hero's Death",
        sub_title: "Fotaines D.C.",
        album: 'fontaines.jpg',
        text: `"A Hero's Death" é o segundo álbum da banda irlandesa Fotaines D.C., lançado em 31 de julho de 2020. Mostra uma evolucão muito grande
            da banda, trazendo letras e melodias introspectivas, que acabam nos fazendo ter uma sensação de incerteza ainda maior nos dias atuais`
    },
    {
        title: "Impenetrable Cerebral Fortress",
        sub_title: "Gulch",
        album: 'gultch.jpg',
        text: `"Impenetrable Cerebral Fortress" também e o segundo full length da banda americana Gulch. Essa emergente banda de death/punk/hardcore/grind/metal vem chamando muita atencão
            no cenário underground americano e europeu. Esse álbum conta com a supreendente faixa "Sin in My Heart", fechando inesperadamente o disco, que contem 8 músicas e apenas 15 minutos.`
    },
    {
        title: "Joy As An Act Of Resistance",
        sub_title: "Idles",
        album: 'idles.jpg',
        text: `Não tao novo assim, "Joy As An Act Of Resistance" (lançado em 31 de agosto de 2018), é (novamente) o segundo álbum da banda britânica Idles. Contendo, como ja é de praxe pra
                banda, letras carregadas de questões políticas e sociais muito importantes nos dias atuais. Esse álbum deu a banda fama mundial. Recentemente, (em 2 de setembro de 2020),
                o Idles fez 3 performances ao vivo no Abbey Road, o famoso estúdio em que os Beatles gravaram diversos sucessos.`
    }
];

class Title {
    constructor(item) {
        this.element = document.createElement('H1')
        this.element.innerText = item.title
        this.element.className = "title"
    }
}

class SubTitle {
    constructor(item) {
        this.element = document.createElement('H2')
        this.element.innerText = item.sub_title
        this.element.className = "sub-title"
    }
}

class Text {
    constructor(item) {
        this.element = document.createElement('P')
        this.element.innerText = item.text
        this.element.className = 'text'
    }
}

class Album {
    constructor(item) {
        this.element = document.createElement('IMG')
        this.element.src = item.album
        this.element.className = 'album'
    }
}

class Post {
    constructor(items) {
        this.element = document.createElement('DIV')
        this.element.className = 'post';

        for (const item of items) {
            this.element.appendChild(item.element)
        }
    }
}

let likeCount = 0;

class Like {
    constructor() {
        const like = document.createElement('BUTTON');
        like.className = 'btn'

        const icon = document.createElement('I');
        icon.className = 'fa fa-thumbs-up';

        like.appendChild(icon);
        like.classList.add('not_liked');

        const likeNumber = document.createElement('SPAN');
        likeNumber.innerHTML = likeCount.toString();
        likeNumber.className = 'like-count';

        like.addEventListener('click', () => {
            if (like.classList.contains('liked')) {
                like.classList.remove('liked');
                like.classList.add('not_liked');

                likeNumber.innerHTML = (likeCount -= 1).toString();
            } else {
                like.classList.add('liked');
                like.classList.remove('not_liked');

                likeNumber.innerHTML = (likeCount += 1).toString();
            }
        })

        this.element = document.createElement('DIV')

        this.element.appendChild(like);
        this.element.appendChild(likeNumber);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const element = document.createElement('DIV')
    element.className = 'articles'

    document.body.appendChild(element);

    articles.forEach(article => {
        const title = new Title(article);
        const sub_title = new SubTitle(article);
        const text = new Text(article);
        const album = new Album(article);
        const like = new Like()
        const post = new Post([title, sub_title, text, album, like]);

        element.appendChild(post.element);
    });
});

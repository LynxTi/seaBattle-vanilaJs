const SeaBatle = function() {
    const wraper = document.querySelector('.wrapper');
    
    const createField = () => {
        const arrLetters = ['a','b','c','d','e','f','g','h','i','j'];
        let htmlCode = `<div class="fieldWrap">`;
        let lettersWrap = `<div class="lettersWrap">`;
        let namberWrap = `<div class="namberWrap">`;
        let field =`<div class="field">`;
        const numberOfTiles = 10;

        for (const letter of arrLetters) {
            lettersWrap += `<div class="letter">${letter}</div>`;
        }
        lettersWrap += `</div>`;

        for (let i = 0; i < numberOfTiles; i++) {
            namberWrap += `<div class="number">${i + 1}</div>`;
        }
        namberWrap += `</div>`;

        for (let i = 0; i < numberOfTiles; i++) {
            field += `<div class="rowField">`;

            for (let j = 0; j < numberOfTiles; j++) {
                field += `<div class="tile" data-ship="" data-coordsY="${i}" data-coordsX="${j}"></div>`
            }
            field += `</div>`;
        }
        field += `</div>`;

        htmlCode += lettersWrap + namberWrap + field;
        wraper.innerHTML = htmlCode;
    }

    const Player = function () {
        const createPlayingFieldArray = (numberDecks)=> {
            let newPlayerFieldArr =[]
            
            for (let i = 0; i < 10; i++) {
                let rowPlayerField = [];

                for (let j = 0; j < 10; j++) {
                    rowPlayerField.push(j);
                }

                newPlayerFieldArr.push(rowPlayerField);
            }
            return newPlayerFieldArr;
        }



        this.createShip = () => {
            const fieldPlaer = document.querySelector('.field');
            const tilePlaer = document.querySelector('.tile');

            fieldPlaer.addEventListener('click', (event) => {
                const tile = event.target;
                tile.dataset.ship = 'ship';
                tile.classList.add('ship');
            })
        }

        this.chekPostShip = (tile) => {
            if (tile.dataset.ship === 'ship') {
                return false;
            } 
            return true;
        }

        // this.createShipsPlayer = () => {
        //     const ships = [ {quantityDecks: 1, statusDecks: [''], coordsDecks: []},
        //     {quantityDecks: 2, statusDecks: ['', ''], coordsDecks: []} 
        //     ];

        //     for (const ship of ships) {
        //         if (ship.statusDecks.includes('')) {

        //         }
        //     }

        //     }
        // }

        this.playerFieldArr = createPlayingFieldArray();
        this.enomyFieldArr = createPlayingFieldArray();
        this.ships;
        this.createShip();
    }

    createField();
    player1 = new Player();
    // player1.createShip()

}

const newGame = new SeaBatle();

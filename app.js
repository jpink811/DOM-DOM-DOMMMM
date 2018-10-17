document.addEventListener("DOMContentLoaded", function () {

    let btn = document.createElement("button");
    let btnText = document.createTextNode('Add Square');
    let brk = document.createElement('br');

    btn.appendChild(btnText);
    document.body.appendChild(btn);
    document.body.append(brk);
    let i = 0;

    

    btn.addEventListener('click', function () {

        let blkSqr = document.createElement('div');
        document.body.appendChild(blkSqr);

        blkSqr.className = 'Square';
        blkSqr.id = i;

        let sqrId = document.createElement('p')
        let sqrText = document.createTextNode(i);
        sqrId.appendChild(sqrText);

 
        blkSqr.style.fontFamily = 'Rubik Mono One';
        blkSqr.style.fontSize = '40px';
        blkSqr.style.color = 'white';
        blkSqr.style.textAlign = 'center';
        blkSqr.style.verticalAlign = 'middle';
        blkSqr.style.textShadow = '2px 3px 6px blue'
        

        blkSqr.style.backgroundColor = 'black';
        blkSqr.style.height = '300px';
        blkSqr.style.width = '300px';
        blkSqr.style.borderStyle = 'outset';
        blkSqr.style.borderWidth = '10px';
        blkSqr.style.borderColor = 'pink';
        blkSqr.style.margin = '20px 10px 20px 20px';
        blkSqr.style.cssFloat = 'left';
        
        blkSqr.style.boxShadow = '30px 20px 50px purple'
        sqrId.style.paddingTop = '25%'

        i++

        blkSqr.addEventListener('mouseover', function () {

            blkSqr.style.backgroundColor = 'red';
            blkSqr.appendChild(sqrId);

            blkSqr.addEventListener('mouseout', function () {
                blkSqr.style.backgroundColor = 'black';
                sqrId.remove();
            })
        })

        blkSqr.addEventListener('click', function () {

            const hexChars = '0123456789ABCDEF';
            randomColor();

            function randomColor() {
                let hexCode = '#';
                for (a = 0; a <= 5; a++) {
                    let randomNum = Math.floor(Math.random() * 16);
                    hexCode += hexChars[randomNum];
                }
        
                console.log(hexCode);
                blkSqr.style.backgroundColor = hexCode;
            }
            
        })

        blkSqr.addEventListener('dblclick', function () {

            delSqr(Number(blkSqr.id));

            function delSqr() {
                if ((blkSqr.previousSibling.className != 'Square') || (blkSqr.nextSibling == null) || (blkSqr.nextSibling.className != 'Square')) {
                    alert('No Square');

                } else if ((Number(blkSqr.id) % 2 != 0)) {
                    console.log('Deleting square with id ' + blkSqr.previousSibling.id);
                    document.body.removeChild(blkSqr.previousSibling);
                    i--;

                } else if ((Number(blkSqr.id) % 2 == 0) && (blkSqr.nextSibling.className = 'Square')) {   
                    console.log('Deleting square with id ' + '"' + blkSqr.nextSibling.id + '"');
                    document.body.removeChild(blkSqr.nextSibling);
                    i--;
                } 
            }

        })

    })

})





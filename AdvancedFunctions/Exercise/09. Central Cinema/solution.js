function solve() {
    //1.Select elements

    let onScreenButton = document.querySelector('#container button');
    //2.1 attach event listener on [On-Screen] button
    onScreenButton.addEventListener('click', onScreenHandler);
    //5.1 add Clear button event listener
    let clearArchiveButton = document.querySelector('#archive > button');
    clearArchiveButton.addEventListener('click', clearArchive);

    //2.Implement Add movie functionality
    function onScreenHandler(ev) {
        //2.Implement Add movie functionality

        //2.2 get input values for movie
        //2.3 convert values where needed
        //2.4 create html structure for movie
        //2.5 attach html structure to Movies on Screen section

        ev.preventDefault();

        let movieInputs = document.querySelectorAll('#container input');
        let nameInput = movieInputs[0];
        let hallInput = movieInputs[1];
        let priceInput = movieInputs[2];

        let name = nameInput.value;
        let hall = hallInput.value;
        let price = priceInput.value;

        //check inputs
        if (name.trim() !== '' &&
            hall.trim() !== '' &&
            price.trim() !== '' &&
            !isNaN(Number(price))) {

            price = Number(price).toFixed(2);

            let li = document.createElement('li');

            let nameSpan = document.createElement('span');
            nameSpan.textContent = name;

            let hallStrong = document.createElement('strong');
            hallStrong.textContent = `Hall: ${hall}`;

            let rightSectionDiv = document.createElement('div');
            let priceStrong = document.createElement('strong');
            priceStrong.textContent = price;

            let ticketsSoldInput = document.createElement('input');
            ticketsSoldInput.setAttribute('placeholder', 'Tickets Sold');

            let archiveButton = document.createElement('button');
            archiveButton.textContent = 'Archive';
            archiveButton.addEventListener('click', archiveMovie);

            rightSectionDiv.appendChild(priceStrong);
            rightSectionDiv.appendChild(ticketsSoldInput);
            rightSectionDiv.appendChild(archiveButton);

            li.appendChild(nameSpan);
            li.appendChild(hallStrong);
            li.appendChild(rightSectionDiv);

            let moviesUl = document.querySelector('#movies ul');
            moviesUl.appendChild(li);

            nameInput.value = '';
            hallInput.value = '';
            priceInput.value = '';
        }

    }

    //3.Implement Archive movie functionality
    function archiveMovie(ev) {
        //3.1 attach event listener on each movie [Archieve] button
        //3.2 get input values for current movie to archive
        //3.3 convert values where needed
        //3.4 create html structure for archived movie 
        //3.5 attach html structure to Archive section

        let movieLi = ev.target.parentElement.parentElement;
        let ticketsSoldInput = movieLi.querySelector('div input');

        let ticketsSold = ticketsSoldInput.value;

        if (ticketsSold.trim() !== '' &&
            !isNaN(Number(ticketsSold))) {

            ticketsSold = Number(ticketsSold);
            let priceStrong = movieLi.querySelector('div strong');
            let price = Number(priceStrong.textContent);

            let hallStrong = movieLi.querySelector('strong');
            let totalPrice = price * ticketsSold;
            hallStrong.textContent = `Total amount: ${totalPrice.toFixed(2)}`;

            let rightDiv = movieLi.querySelector('div');
            rightDiv.remove();

            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            //4.1 attach event listener on each movie [Delete] button
            deleteButton.addEventListener('click', deleteFromArchive);
            movieLi.appendChild(deleteButton);

            let archiveUl = document.querySelector('#archive ul');
            archiveUl.appendChild(movieLi);
        }
    }

    //4. Implement Archived movie's delete functionality
    function deleteFromArchive(ev) {
        let currentElement = ev.target;
        let movieLi = currentElement.parentElement;
        //4.2 delete html structure of deleted movie from DOM
        movieLi.remove();
    }

    //5. Implement Archive Clear functionality
    function clearArchive() {
        //5.2 delete archive's LI elements from DOM
        let archiveLis = Array.from(document.querySelectorAll('#archive ul li'));
        archiveLis.forEach(el => el.remove());
    }
}
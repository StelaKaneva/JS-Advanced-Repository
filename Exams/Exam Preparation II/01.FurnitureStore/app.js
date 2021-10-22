window.addEventListener('load', solve);

function solve() {
    const modelInput = document.getElementById('model');
    const yearInput = document.getElementById('year');
    const descriptionInput = document.getElementById('description');
    const priceInput = document.getElementById('price');

    const addBtn = document.getElementById('add');
    addBtn.addEventListener('click', appendToFurnitureList)

    const cart = [];

    function appendToFurnitureList(ev) {
        ev.preventDefault();

        const model = modelInput.value.trim();
        const year = Number(yearInput.value.trim());
        const description = descriptionInput.value.trim();
        let price = Number(priceInput.value.trim());

        //Validate values
        if (model == '' || year == '' || description == '' || price == '' ||
            Number.isNaN(year) || Number.isNaN(price) || year <= 0 || price <= 0 ) {
            return;
        }

        //Create new item in table
        price = price.toFixed(2);

        let tbody = document.getElementById('furniture-list');

        let trInfo = document.createElement('tr');
        trInfo.setAttribute('class', 'info');
        tbody.appendChild(trInfo);

        let tdModel = document.createElement('td');
        tdModel.textContent = model;
        trInfo.appendChild(tdModel);

        let tdPrice = document.createElement('td');
        tdPrice.textContent = price;
        trInfo.appendChild(tdPrice);

        let moreInfoBtn = document.createElement('button');
        moreInfoBtn.setAttribute('class', 'moreBtn');
        moreInfoBtn.textContent = 'More Info';
        moreInfoBtn.addEventListener('click', showAdditionalInfo);

        let buyBtn = document.createElement('button');
        buyBtn.setAttribute('class', 'buyBtn');
        buyBtn.textContent = 'Buy it';
        buyBtn.addEventListener('click', buyHandler);

        let btnTd = document.createElement('td');
        trInfo.appendChild(btnTd);

        btnTd.appendChild(moreInfoBtn);
        btnTd.appendChild(buyBtn);

        let trHide = document.createElement('tr');
        trHide.setAttribute('class', 'hide');
        tbody.appendChild(trHide);

        let yearTd = document.createElement('td');
        yearTd.textContent = `Year: ${year}`;
        trHide.appendChild(yearTd);

        let descriptionTd = document.createElement('td');
        descriptionTd.setAttribute('colspan', '3');
        descriptionTd.textContent = `Description: ${description}`;
        trHide.appendChild(descriptionTd);

        function showAdditionalInfo(ev) {
            ev.target.textContent = ev.target.textContent === 'More Info' ? 'Less Info' : 'More Info';
            trHide.style.display = trHide.style.display === "contents" ? 'none' : 'contents';
        }

        function buyHandler(ev) {
            let priceTd = document.querySelector('.total-price');
            cart.push(Number(price));
            const total = cart.reduce((t, c) => t + c, 0);
            priceTd.textContent = total.toFixed(2);
            trInfo.remove();
            trHide.remove();
        }

        modelInput.value = '';
        yearInput.value = '';
        descriptionInput.value = '';
        priceInput.value = '';
    }
}

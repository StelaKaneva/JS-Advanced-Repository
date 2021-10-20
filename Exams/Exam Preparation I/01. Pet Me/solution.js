function solve() {
    //get reference to elements of interest
    //configure event listeners
    const fields = document.querySelectorAll('#container input');
    const addButton = document.querySelector('#container button');
    const petList = document.querySelector('#adoption ul');
    const adoptedList = document.querySelector('#adopted ul');

    const input = {
        name: fields[0],
        age: fields[1],
        kind: fields[2],
        owner: fields[3]
    };

    addButton.addEventListener('click', addPet);

    // # Add new pet
    function addPet(ev) {
        ev.preventDefault();

        //Read input fields
        const name = input.name.value.trim();
        const age = Number(input.age.value.trim());
        const kind = input.kind.value.trim();
        const owner = input.owner.value.trim();

        //Validate values
        if (name == '' || age == '' || input.age.value.trim() == '' ||
            Number.isNaN(age) || kind == '' || owner == '') {
            return;
        }

        //Create new list item
        const contactBtn = e('button', {}, 'Contact with owner');

        const pet = e('li', {},
            e('p', {},
                e('strong', {}, name),
                " is a ",
                e('strong', {}, age),
                " year old ",
                e('strong', {}, kind),
            ),
            e('span', {}, `Owner: ${owner}`),
            contactBtn
        );

        //Configure event listener for newly created element
        contactBtn.addEventListener('click', contact);

        petList.appendChild(pet);

        input.name.value = '';
        input.age.value = '';
        input.kind.value = '';
        input.owner.value = '';

        // # Contact owner
        function contact() {
            //Create confirmation div
            const confirmInput = e('input', { placeholder: 'Enter your names' });
            const confirmBtn = e('button', {}, 'Yes! I take it!');
            const confirmDiv = e('div', {},
                confirmInput,
                confirmBtn
            );

            //Configure event listener for new button
            confirmBtn.addEventListener('click', adopt.bind(null, confirmInput, pet));

            //Replace existing button with confirmation div
            contactBtn.remove();
            pet.appendChild(confirmDiv);
        }
    }

    // # Adopt a pet
    function adopt(input, pet) {
        //Read and validate input
        const newOwner = input.value.trim();
        if (newOwner == '') {
            return;
        }

        //Create new button for checking
        const checkBtn = e('button', {}, 'Checked');
        //Configure event listener for new button
        checkBtn.addEventListener('click', check.bind(null, pet));

        //Replace confirmation div with new button
        pet.querySelector('div').remove();
        pet.appendChild(checkBtn);

        //Change text content of Owner span
        pet.querySelector('span').textContent = `New Owner: ${newOwner}`;
      
        //Move element to other list
        adoptedList.appendChild(pet);
    }

    // # Checking of adopted pet
    function check(pet) {
        //Remove element from DOM
        pet.remove();
    }

    function e(type, attr, ...content) {
        const element = document.createElement(type);

        for (let prop in attr) {
            element[prop] = attr[prop]; // attr -> object
        }

        for (let item of content) {
            if (typeof item == 'string' || typeof item == 'number') {
                item = document.createTextNode(item);
            }

            element.appendChild(item);
        }

        return element;
    }
}


function lockedProfile() {

    document.getElementById('main').addEventListener('click', onToggle);

    function onToggle(ev) {

        if (ev.target.tagName == "BUTTON") {
            const profile = ev.target.parentElement;
            const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;

            if (isActive) {
                const infoDiv = profile.querySelector('div');

                if (ev.target.textContent == 'Show more') {
                    infoDiv.style.display = 'block';
                    ev.target.textContent = 'Hide it';
                } else {
                    infoDiv.style.display = '';
                    ev.target.textContent = 'Show more';
                }
            }
        }
    }
}
// function lockedProfile() {
//     //Add togle event listener to all profile buttons
//     //Find associated profile buttons
//     //If it is visible -> hide it and display label `Show more`
//     //Otherwise - show it and display label `Hide it`   

//     Array.from(document.querySelectorAll('div.profile button')).forEach(b => b.addEventListener('click', onToggle));

//     function onToggle(ev) {
//         const profile = ev.target.parentElement;
//         const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;

//         if (isActive) {
//             const infoDiv = profile.querySelector('div');

//             if (ev.target.textContent == 'Show more') {
//                 infoDiv.style.display = 'block';
//                 ev.target.textContent = 'Hide it';
//             } else {
//                 infoDiv.style.display = '';
//                 ev.target.textContent = 'Show more';
//             }
//         }
//     }

    // ////////////////////////////
    // const radio = Array.from(document.querySelectorAll('input[type="radio"]'));
    // for (let input of radio) {
    //     input.addEventListener('click', onLockToggle);
    // }

    // function onLockToggle(ev) {
    //     const button = ev.target.parentElement.querySelector('button');

    //     if (ev.target.value == 'lock') {
    //         button.disabled = true;
    //     } else {
    //         button.disabled = false;
    //     }
    // }
//}
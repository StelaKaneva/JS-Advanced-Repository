function focused() {
    // const fields = Array.from(document.getElementsByTagName('input'));

    // for (let field of fields) {
    //     field.addEventListener('focus', onFocus);
    //     field.addEventListener('blur', onBlur);
    // }

    Array
        .from(document.getElementsByTagName('input'))
        .forEach(f => {
            f.addEventListener('focus', onFocus);
            f.addEventListener('blur', onBlur);
        });

    function onFocus (ev) {
        ev.target.parentNode.className = 'focused';
        //ev.target.parentNode.classList.add('focused');
    }

    function onBlur (ev) {
        ev.target.parentNode.className = '';
        //ev.target.parentNode.classList.remove('focused');
    }
}
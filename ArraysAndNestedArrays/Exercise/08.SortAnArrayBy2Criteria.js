function sortingArray2Criteria(array){
    function compare(a, b) {
        if (a.length < b.length) {
          return -1;
        }
        if (a.length > b.length) {
          return 1;
        } else {
            var nameA = a.toUpperCase(); 
            var nameB = b.toUpperCase();
            if (nameA < nameB) {
            return -1;
            } else if (nameA > nameB) {
            return 1;
            } else{
                return 0;
            }
        }
      }

    array.sort(compare);
    console.log(array.join('\n'));
}

sortingArray2Criteria(['test', 
'Deny', 
'omen', 
'Default']);
function piceOfPie(pies, startingFlavor, endingFlavor){
    return pies.slice(pies.indexOf(startingFlavor), pies.indexOf(endingFlavor) + 1);
}

console.log(piceOfPie(['Apple Crisp',
 'Mississippi Mud Pie',
 'Pot Pie',
 'Steak and Cheese Pie',
 'Butter Chicken Pie',
 'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'));
//Créez une liste à puces avec plusieurs éléments de liste. Utilisez JavaScript pour compter combien d'éléments de liste il y a dans la liste, puis affichez le résultat dans la console.

const listes = document.querySelectorAll('li');

console.log(`le nombre d'element de la liste est ${listes.length}`);



let contener = document.getElementById('result');
let resultat = document.createElement('p');
resultat.textContent = `le nombre d'element de la liste est ${listes.length}`;
contener.appendChild(resultat)
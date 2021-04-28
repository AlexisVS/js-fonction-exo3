// EXO
// Créer un tableau [codingSchoolX] vide.
let codingSchoolX = [];
// Créer une fonction qui permet d'ajouter quelqu'un au tableau
let pushArr = (element) => {
    return codingSchoolX.push(element);
}
// Créer une fonction qui permet de retirer quelqu'un au tableau
let removeElementArr = (element) => {
    return codingSchoolX.splice(codingSchoolX.indexOf(codingSchoolX[element]), 1 );
}

// Exercice : C'est le bordel

//  1. Declarez un tableau du nom de classeCodingl8
let classeCoding18 = [];
//  2. Maintenant que vous ne vous etes pas fait avoir sur l'orthographe du nom du tableau il est 8h43 Cactus 
//   arrive en classe
pushArr("Cactus");
//  3. 8h44 Mihai rentre, allume son PC et commence a mettre a jour ses notes
pushArr("Mihai");
//  4. 8h45 Ilyas et Mohammed rejoignent la classe
pushArr('Ilyas');
pushArr('Mohammed');
//  5. 8h51 Yassin et Farhad voyent Nicolas passer devant la porte, et decident de le rejoindre
//  6. 8h55 Tania et Oussama rentrent en classe en faisant un maximum de bruit
pushArr('Tania');
pushArr('Oussama')
//  7. 8h56 Alexis rentre en classe puis redescend prendre sa tasse de café
pushArr('Alexis');
removeElementArr('Alexis')
//  8. 8h59 Issam et Anthony rentre en classe saluant tout le monde
pushArr('Isam');
pushArr('Anthony');
//  9. 9h00 Andy rentre tranquille et observe tout le monde
pushArr('Anthony');
//  10. 9h03 Loic et Kevin rentrent et observent Mohammed qui a l'air d'etre tranquilleeee
pushArr('Loic');
pushArr('Kevin');
//  11. 9h04 Junior rentre en classe avec sa tasse de café
pushArr('Junior');
//  12. 9h05 Charles et William rentrent en classe tous contents de n'etre que 5 minutes en retard, Cactus leur dit 
//   qu'ils sont en retard et puis it sort
pushArr('Charles');
pushArr('William');
//  13. 9h10 Gauthier rentre avec sa petite tasse de café et son pc, tout content et souriant
pushArr('Gauthier');
//  14. 9h20 Les coachs commencent a donner cours
pushArr('Nicolas');
//  15. 9h30 Beytullah rentre en faisant le minimum de bruit possible mais toute la classe la regarde par total incompréhension
pushArr('Beytullah');

console.log(codingSchoolX);
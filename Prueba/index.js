let project = "juanmi";
let arreglo = {personaje: "juanmi",edad: 302,extra:'012345'};
let pruebaProject = arreglo.personaje == project && arreglo.extra ?arreglo.extra.replace(/^0+/, '') : arreglo.serviceNumber;
console.log(pruebaProject);
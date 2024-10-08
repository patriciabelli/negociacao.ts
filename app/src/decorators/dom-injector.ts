export function domInjector(seletor: string){
    return function(target: any, propertykey: string){
        console.log(`Modificando protype ${target.constructor.name} e adicionando getter para a propriedade ${propertykey}`);
        

        let elemento:HTMLElement;
        const getter = function(){
            if (!elemento) {
                elemento = <HTMLElement> document.querySelector(seletor);
                console.log(`Buscando elemento do DOM com o seletor ${seletor} para injetar em ${propertykey}`);
            }
            
             return elemento;
        }

        Object.defineProperty(
           target,
           propertykey,
           {get: getter}
        );
    }
}
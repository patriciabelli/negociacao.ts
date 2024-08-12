export function inspect() {
    return function(
        target: any,
        propertykey: string,
        descriptor: PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]){
            console.log(`--- método: ${propertykey}`);
            console.log(`------ parâmetro: ${JSON.stringify(args)}`);
            const retorno = metodoOriginal.apply(this,args);
            console.log(`------ retorno: ${JSON.stringify(retorno)}`);
            
            
            return retorno
        }
       return descriptor;
    }
}
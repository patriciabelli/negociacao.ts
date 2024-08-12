export function logarTempoDeExecucao(emSegundos:boolean = false){
    return function(
        target: any,
        propertykey: string,
        descriptor: PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]){
            let divisor = 1;
            let unidade = 'milisegundos';
            const t1 = performance.now();
            if (emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }
            const retorno = metodoOriginal.apply(this, args );
            const t2 = performance.now();
            console.log(`${propertykey}, tempo de execução: ${(t2-t1)/divisor} ${unidade}`);
            retorno
        }

        return descriptor;
    }
}


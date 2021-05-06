const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base=5, listar=false, hasta=10 ) => {

    
    try {
        let salida = '';
        
        for(i=1; i<=hasta; i++){
            salida += `${ base } x ${ i } = ${ base*i }\n`;
        }

        if(listar === true) {
            console.log('========================='.rainbow);
            console.log('      Tabla del:', base );
            console.log('========================='.rainbow);
        
            console.log(salida);
        } 


    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt creada`.green;
        
    } catch (err) {
        throw err
    }
    
        

}

module.exports = {
    crearArchivo
}
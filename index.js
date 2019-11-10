/*
function obterUsuario(){
    return new Promise(function(resolve, reject){
       setTimeout(function(){
        return resolve(
         {
            id:1,
            nome: "Jun"
        })
    }, 1000)
    })
};
var u;
getUser();
async function getUser(){
    try{
        const usuario = await obterUsuario()
        usuario
        test(usuario)
        console.log("getUser", usuario)
    }catch(error){
        console.error('Deu Ruim', error)
    }
}

function test(usr){
    console.log("teste1", usr)
}

*/



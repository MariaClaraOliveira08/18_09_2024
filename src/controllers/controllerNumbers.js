module.exports = class controllerNumbers{
    //métodos para que rode
    static async checkPar(req, res){
        const {numero} = req.body;

        if(numero % 2 == 0){
            return res.status(200).json({message: "Número Par!"}); //não precisaria de colocar o else pois ja tem o return
            //se não for par vai ser ímpar
        }
        return res.status(200).json({message: "Número Ímpar!"});
    }
    static async checkPrimo(req, res){
        const {numero} = req.body;

        if (numero <= 1){
            return res.status(200).json({message: "Não é Primo!"});
        }

        for(let i = 2; i < numero; i++){
            if(numero % i == 0){
                return res.status(200).json({message:"Não é primo!"});
            }
        }
        return res.status(200).json({message:"É primo!!!"});
    }
}
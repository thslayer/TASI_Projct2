document.addEventListener("DOMContentLoaded", function(){

    function montarPizza(){

        let custo = 0;
        let extra = "";
        let opcionais = "";
        let descricao = "";

        // Obtendo o sabor selecionado
        let saborSelecionado = document.querySelector('input[name="sabor"]:checked');
        let sabor = saborSelecionado ? saborSelecionado.value : "";

        // Obtendo o tamanho selecionado
        let tamanhoSelecionado = document.querySelector('input[name="tamanho"]:checked')
        let tamanho = tamanhoSelecionado ? tamanhoSelecionado.value : "";

        // Calculando o custo baseado no tamanho e sabor
        if(tamanho === "Brotinho"){
            if(sabor === "Margherita"){
                custo += 18.75;
            }else if(sabor === "Calabresa"){
                custo += 21.00;
            }else if(sabor === "Frango com Catupiry"){
                custo += 22.50;
            }else if(sabor === "Portuguesa"){
                custo += 24.00;
            }else if(sabor === "Quatro Queijos"){
                custo += 26.25;
            }
        }else if(tamanho === "Padrao"){
            if(sabor === "Margherita"){
                custo += 25.00;
            }else if(sabor === "Calabresa"){
                custo += 28.00;
            }else if(sabor === "Frango com Catupiry"){
                custo += 30.00;
            }else if(sabor === "Portuguesa"){
                custo += 32.00;
            }else if(sabor === "Quatro Queijos"){
                custo += 35.00;
            }
        }else if(tamanho === "Grande"){
            if(sabor === "Margherita"){
                custo += 44.50;
            }else if(sabor === "Calabresa"){
                custo += 35.00;
            }else if(sabor === "Frango com Catupiry"){
                custo += 35.00;
            }else if(sabor === "Portuguesa"){
                custo += 45.00;
            }else if(sabor === "Quatro Queijos"){
                custo += 49.75;
            }
        }

        // Obtendo o tipo de borda selecionado
        let bordaSelecionada = document.querySelector('input[name="borda"]:checked')
        let borda = bordaSelecionada ? bordaSelecionada.value : 'Sem Borda';

        // Adicionando o custo da borda
        if(borda === "Recheada Catupiry" || borda === "Recheada Cheddar"){
            custo += 5.00;
        }

        // Verificando os extras selecionados e adicionando ao custo
        let queijoExtraCheckbox = document.querySelector('input[name="extra-queijo"]:checked');
        if(queijoExtraCheckbox){
            custo += 5.00;
            extra += "<br>   - Queijo";
        }

        let cheddarExtraCheckbox = document.querySelector('input[name="extra-cheddar"]:checked');
        if(cheddarExtraCheckbox){
            custo += 5.00;
            extra += "<br>   - Cheddar";
        }

        let baconExtraCheckbox = document.querySelector('input[name="extra-bacon"]:checked')
        if(baconExtraCheckbox){
            custo += 5.00;
            extra += "<br>   - Bacon";
        }

        let pepperoniExtraCheckbox = document.querySelector('input[name="extra-pepperoni"]:checked')
        if(pepperoniExtraCheckbox){
            custo += 5.00;
            extra += "<br>   - Pepperoni";
        }

        // Verificando os opcionais selecionados e adicionando à descrição
        let oreganoOpcionalCheckbox = document.querySelector('input[name="opcionais-oregano"]:checked')
        if(oreganoOpcionalCheckbox){
            opcionais += "<br>   - Oregano";
        }

        let azeitonaOpcionalCheckbox = document.querySelector('input[name="opcionais-azeitona"]:checked')
        if(azeitonaOpcionalCheckbox){
            opcionais += "<br>   - Azeitona";
        }

        let azeiteOpcionalCheckbox = document.querySelector('input[name="opcionais-azeite"]:checked')
        if(azeiteOpcionalCheckbox){
            opcionais += "<br>   - Azeite";
        }

        let pimentaOpcionalCheckbox = document.querySelector('input[name="opcionais-pimenta"]:checked')
        if(pimentaOpcionalCheckbox){
            opcionais += "<br>   - Pimenta";
        }

       
        descricao += "   - " + sabor + "<br>   - " + tamanho + "<br>   - " + borda + extra + opcionais;

        const pedidoJSON = {
            "descricao": descricao,
            "total": custo.toFixed(2)
        }

        // Convertendo o objeto JSON para string
        const pedidoString = JSON.stringify(pedidoJSON);

     
        window.location.href = `pedido?pedido=${pedidoString}`;
    }


    const button = document.querySelector("button");
    button.addEventListener('click', montarPizza);
});
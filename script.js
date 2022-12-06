
let dados = new XMLHttpRequest(); // API - metodos e propriedades do objeto


dados.open('get', 'nomes.json', true);
dados.send();


dados.onload = function(){
	
	if(this.readyState == 4 && this.status == 200){  //analisar e conveter dados
		
		let info = JSON.parse(this.responseText);
		let receber = ""; // receber dados

		for(let item of info){
			receber += `
				<div class="informacao">

					<img src="${item.imagem}" alt="${item.personagem}">
					<p class="nome">${item.nome}</p>
					<p class="personagem">${item.personagem}</p>
					<p class="status">${item.status}</p>
					<p class="temporada">${item.temporada}</p>

				</div>
			`;
		}
		
		document.querySelector(".nomes").innerHTML = receber;
	}
} 
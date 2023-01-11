const tbody = document.querySelector('tbody');

document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    
    const campos = [
        document.querySelector('#usuario'),
        document.querySelector('#telefone'),
    ];
    console.log(campos); 
 
    const tr = document.createElement('tr');

    campos.forEach(campo =>{

        const td = document.createElement('td');

        //colocando o conteúdo digitado no campo dentro da td
        td.textContent = campo.value;

        //vinculando a td na tr
        tr.appendChild(td);
    })

    tbody.appendChild(tr);

    this.reset();
})
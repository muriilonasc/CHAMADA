const form = {
    createdBy: 'Murilo Nasc',
    title: "Primeiro",
    inputs: [
        {
            title: 'RESPONDA AS PERGUNTAS SOBRE LINGUAGENS DE PROGRAMAÇÃO'
        },
        {
            title: 'O que é uma linguagem de programação?',
            type: 'text',
            config: {
                max: 20,
                min: 10
            }
        },
        {
            title: 'Quais são as linguagens de programação mais populares atualmente?',
            type: 'text',
            config: {
                max: 20,
                min: 10
            }
        },
        {
            title: 'Para que serve o Python?',
            type: 'text',
            config: {
                max: 20,
                min: 10
            }
        },
        {
            title: 'O que é uma variável?',
            type: 'text',
            config: {
                max: 20,
                min: 10
            }
        },
    ]
};

const formHtml = document.getElementById('form');
let inputs = '';

for (let i = 0; i < form.inputs.length; i++) {
    const element = form.inputs[i];
    inputs += `<label>${element.title}</label>`;
    inputs += `<input class="inputs" type="${element.type}">`;
    inputs += '<br>'
}

formHtml.innerHTML = inputs;

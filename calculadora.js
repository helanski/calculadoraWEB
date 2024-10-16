// função que recebe como parâmetro uma operação
function calcular(operacao) {
    // recebe os vaores inseridos
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultadoDiv = document.getElementById('resultado');
    let resultado;

    // confere que o valor1 seja válido
    // confere se operações, com exceção da radiciação que não precisa de um segundo valor, tenha o valor2 válido
    if (isNaN(num1) || (operacao !== '√' && isNaN(num2))) {
        resultadoDiv.innerHTML = 'Por favor, insira números válidos.'; // imprime os dados
        return;
    }

    switch (operacao) {
        // operação de soma
        case '+':
            resultado= num1 + num2;
            break;
        // operação de subtração
        case '-':
            resultado = num1 - num2;
            break;
        // operação de multiplicação
        case '*':
            resultado = num1 * num2;
            break;
        // operação de divisão
        // verifica se o valor2 é diferente de 0; se não for, a divisão e realizada e, se for, imprime a mensagem de erro
        case '/':
            resultado = num2 !== 0 ? num1 / num2 : 'Erro: Divisão por zero';
            break;
        // operação de potenciação
        case '^':
            resultado = Math.pow(num1, num2); // Math.pow calcula a potência (base, expoente)
            break;
        // operação de porcentagem
        case '%':
            resultado = (num1 / num2) * 100;
            break;
        // operação de radiciação
        case '√':
            resultado = Math.sqrt(num1); // calcula a raiz
            break;
        // se não...
        default:
            resultado= 'Operação inválida';
    }

    // manipula o elemento HTMl, imprimindo na tela
    resultadoDiv.innerHTML = 'Resultado: ' + resultado;
}

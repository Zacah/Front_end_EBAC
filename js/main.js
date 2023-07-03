$(document).ready(function() {
    
    $('#telefone').mask('(00)00000-0000',{
      placeholder: '(00)00000-000'
    });
    $('#cpf').mask('000.000.000-00',{
      placeholder: '000.000.000-00'
    });
    $('#cep').mask('00000-000',{
      placeholder: '00000-000'
    });
  });

  $('form').validate({
    rules: {
        nome: {
            required: true,
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        cpf:{
          required:true
        },
        endereco:{
          required:true
        },
        cep:{
          required:true
        }
    },
    messages: {
    nome: 'Por favor, insira seu nome',
      email: 'insira o email',
      telefone:'insira seu telefone',
      cpf: 'insira seu CPF',
      endereco: 'Por favor,insira seu Endereço',
      cep: 'Preencha o CEP'
    },
    
    submitHandler: function(form) {
        console.log(form);
    },
    invalidHandler: function(evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos`);
        }
    }
});

$(document).on("click","#listar",function(){
  $(location).attr("href","listar.html");
});

//ações de banco
$(document).on("click","#salvar",function(){
  var parametro = {
    "nome":$("#nome").val(),
    "senha":$("#senha").val(),
    "email":$("#email").val()
  }

  $.ajax({
    type:"post",
    url:"",
    data:parametros,

    success: function(data){
      navigator.notification.alert(data);
      $("#nome").val(""),
      $("#senha").val(""),
      $("#email").val("")
    },

    error:function(data){
       navigator.notification.alert("Erro no cadastro");
    }
  });
});

function listar(){
  $.ajax({
    type:"post",
    url: "",
    dataType:"json",

    success: function(data){
      var itemlista = "";
      $.each(data.pessoas, function(i,dados){
        itemlista += "<option value="+dados.codigo+">"+dados.nome+"</option>";
      });

      $("#listaPessoas").html(itemlista);
    },

     error:function(data){
       navigator.notification.alert("Erro no buscar registro");
    }
  });
}

$(document).on("change", "#listaPessoas", function(){
  var parametros = {
    "codigo": $("option:selected",("#listaPessoas")).val()
  }
   $.ajax({
    type:"post",
    url: "",
    data:parametro,
    dataType:"json",

    success: function(data){
      $("#codigo").val(data.pessoa.codigo);
      $("#nome").val(data.pessoa.nome);
      $("#email").val(data.pessoa.email);
      $("#senha").val(data.pessoa.senha);
    },

     error:function(data){
       navigator.notification.alert("Erro no buscar registro");
    }
  });
});
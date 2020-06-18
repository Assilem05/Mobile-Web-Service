
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

function habilitarCampos(){
  $("#nome").prop("readonly", false);
  $("#email").prop("readonly", false);
  $("#senha").prop("readonly", false);
}

function desabilitarCampos(){
  $("#nome").prop("readonly", true);
  $("#email").prop("readonly", true);
  $("#senha").prop("readonly", true);
}

$(document).on("click","#editar", function(){
  habilitarCampos();
});

$(document).on("click","#cancelar", function(){
  desabilitarCampos();
});

$(document).on("click","#salvarEdit", function(){
   var parametro = {
    "codigo":$("#codigo").val(),
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
      location.reload();
      desabilitarCampos();
    },

    error:function(data){
       navigator.notification.alert("Erro no cadastro");
    }
  });
});

$(document).on("click","#excluir", function(){
   var parametro = {
    "codigo":$("#codigo").val()
  }

  $.ajax({
    type:"post",
    url:"",
    data:parametros,

    success: function(data){
      navigator.notification.alert(data);
      location.reload();
      desabilitarCampos();
    },

    error:function(data){
       navigator.notification.alert("Erro no cadastro");
    }
  });
});
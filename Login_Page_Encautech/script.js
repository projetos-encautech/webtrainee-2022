INFOS = {

    Dados:{
        get: function (n) {

			return JSON.parse(localStorage.getItem(n));		
		},
		
		set: function (n, obj) {
			
			return localStorage.setItem(n, JSON.stringify(obj));	
		}

    },

    Functions:{

        Login:{

            load: function () {
				
				var users = INFOS.Dados.get('usuarios');
				
				if(users != null && users.length > 0){
					return true;					
                }		
				
				var usuarios = [
					 {"email": "emily", "senha": "bcf"},
					 {"email": "emmanuel", "senha": "a123b"},
					 {"email": "igor", "senha": "ig43"},
					 {"email": "luiz", "senha": "143gg"},
					 {"email": "rodolfo", "senha": "don0"},
				];
				
				Infos.Dados.set('usuarios', usuarios);	
            }, 

            testaLogin: function(){
                
				var usuarios = INFOS.Dados.get('usuarios');
				
				var usuario = document.getElementById('email').value;
				
				usuario = usuario.toLowerCase();
				
				var senha = document.getElementById('senha').value;
				
				senha = senha.toLowerCase();
			 
				if(usuarios != null && usuarios.length > 0){
					
					var u = usuarios.find(a=> a.email == usuario && a.senha == senha);
					
					if(u != null){
						
						alert("Dados corretos para o usuario: " + u.email);
						return true;                      
					}               

				}               
              
                alert("Dados incorretos, tente novamente.");
                return false;
                },
            voltaTelaLogin : function(){
                    window.location = "telaLogin.html";    
                }

        },           				
 	
		EsqueciSenha: {
			RecuperaSenha: function (){
				window.location = "telaRecuperaSenha.html";
			},

			EnviaSenhaRecuperacao: function(){
                alert('Link de recuperação enviado' );
			}	
		},
		
		CadastroUsuario: {
			
			cadastroUsuario: function () {
				// window.location("https://github.com/projetos-encautech/webtrainee-2022/blob/main/consultar-gado/index.html");				
			}
			
		}
		
    }

};
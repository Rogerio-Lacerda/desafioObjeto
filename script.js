 let perfil = {
   nome: "Rogério",
   sobrenome: "Barros",
   idade: 23
 }

 perfil.altura = 1.78;

 delete perfil.sobrenome

 console.log(perfil);

 let cadastro = [{
     nome: "Rogerio",
     idade: 19,
     telefone: "(11) 9999-9999",
     amigos: ["Edimir", "Salomão", "Mazzini", "Chiuratto"]
   },

   {
     nome: "Edimir",
     idade: 18,
     telefone: "(11) 9999-9999",
     amigos : ["Rogerio", "Salomão", "Mazzini", "Chiuratto"]
   },

   {
     nome: "Chiuratto",
     idade: 18,
     telefone: "(11) 9999-9999",
     amigos: ["Salomao", "Edimir", "Mazzini", "Rogerio"]
   },

   {
     nome: "Mazzini",
     idade: 18,
     telefone: "(11) 9999-9999",
     amigos : ["Chiuratto", "Salomão", "Rogerio", "Edimir"]
   },

    {
     nome: "Salomão",
     idade: 17,
     telefone: "(11) 9999-9999",
     amigos : ["Mazzini", "Rogério", "Edimir", "Chiuratto"]
   }
 ]

 for(let i = 0;i <= 4;i++){
   console.log( `Amigo da lista ${(i+1)} : ${cadastro[i].amigos[0]}`);
 }


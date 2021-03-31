function requisitar () {
  const url = 'https://alunos.b7web.com.br/api/ping';
  const params = {
    method:'POST',
    body:JSON.stringify({
      nome:'Cintia',
      idade:30
    })
  },
 
  fetch(url, params)
  .then((r)=>r.json())
  .then((json)=>{
    console.log(json);
  });

  console.log('alguma coisa');

}

async function requisitar2() {
  const url = 'https://alunos.b7web.com.br/api/ping';
  const params = {
    method:'POST',
    body:JSON.stringify({
      nome:'Cintia',
      idade:30
    })
  },
}
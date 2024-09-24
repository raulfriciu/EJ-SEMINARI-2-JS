//Realizamos la llamada a la API fake de https://jsonplaceholder.typicode.com
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

//URL de los posts con filtrado userId=1
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
      .then(response => response.json())
      .then(json => console.log(json))

//Utilizamos map para extraer cada titulo, filtramos los de menos de 25 caracteres y comparamos para tenerlos en orden alfabético
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
.then(response => response.json())  
.then(combined => {
      const result = combined
      .map(post => post.title)
      .filter(post => post.length <= 25)
      .sort((a, b) => a.localeCompare(b));

      console.log(result);
}
)
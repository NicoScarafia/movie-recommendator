  RECOMENDADOR DE PELÍCULAS!

🎬 El objetivo del sitio es recomendar una o más películas, de acuerdo al género que quiera ver el usuario. Una vez que el usuario seleccione el género que desea, las películas aparecerán listadas en la pantalla. 

👌 Además, el usuario puede navegar por todas las películas O visitar la sección 'Recomendación al azar' para que una película aleatoria le sea recomendada.

🎮 Finalmente, hay un pequeño Quiz o Trivia para jugar.

________________________________________________________________


  COMENTARIOS SOBRE EL PROYECTO

1. Cuando el usuario selecciona el género de películas que desea ver, las mismas aparecen listadas de acuerdo al array al que pertenecen. Soy consciente de que las películas podrían estar almacenadas en un JSON, pero como para el Quiz ya tengo un fetch con llamada a la API de OpenTrivia que trabaja con JSON, a los fines de la evaluación y para mostrar que sé utilizar las clases de JS, decidí dejar las películas creadas a partir de la class Películas.

2. Con el fin de mejorar la performance y para listar las películas por género, en lugar de utilizar innerHTML, utilicé un template creado en el HTML y un CreateDocumentFragment(). Igualmente usé innerHTML por ej. en la línea 12 del quiz-game.js.

3. Para la recomendación aleatoria, y nuevamente a los fines de la evaluación, me valí de JQuery y un .append con plantilla literal.

4. Para trabajar con los array utilicé .sort, .filter, .join, .splice y Math.random().

5. Además de los datos 'estáticos' de cada película que aparecen al elegir un género, está el botón 'Watch trailer' que muestra (o deja de ocultar) una ventana modal en la que se puede visualizar el trailer de cada película. Está hecho con JQuery, currentTarget y dataset.

6. También hay unos botones que 'ordenan' las películas haciendo uso del .sort.

7. En relación al mini Quiz que armé, no logré sacar los caracteres especiales que manda la API en sus preguntas.  

8. Finalmente el sitio tiene la opción de 'Dark mode' que hace uso del Local Storage para mantener la elección del usuario. Además hay una pequeña animación concatenada con JQuery.
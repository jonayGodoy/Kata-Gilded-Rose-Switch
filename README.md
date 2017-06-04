Gilded Rose Switch
========================================
This is kata is based on the kata of Gilded Rose
The problem of this kata is the same but it is structured
You have new limitations designed to learn how to refactor switch statement

[Link to Gilded Rose] (https://github.com/luisrovirosa/katas-java/tree/master/gilded-rose)


Kata Objective
======================================
Add the new requirement, the item "Conjured" in a difficult to maintain code.

Before to change the legacy code we need to create test to ensure we don't introduce any bug into production.

Luckily we know how to use it and the requirements.

Gilded Rose Requirements Specification
======================================

Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city ran by a friendly innkeeper named Allison. We also buy and sell only the finest goods.
Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that we can begin selling a new category of items. First an introduction to our system:

	- All items have a SellIn value which denotes the number of days we have to sell the item
	- All items have a Quality value which denotes how valuable the item is
	- At the end of each day our system lowers both values for every item

Pretty simple, right? Well this is where it gets interesting:

	- Once the sell by date has passed, Quality degrades twice as fast
	- The Quality of an item is never negative
	- "Aged Brie" actually increases in Quality the older it gets
	- The Quality of an item is never more than 50
	- "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
	- "Backstage passes", 
        - Increases in Quality as it's SellIn value approaches
	    - Quality increases by 2 when there are 10 days or less
	    - By 3 when there are 5 days or less but
	    - Quality drops to 0 after the concert

We have recently signed a supplier of conjured items. This requires an update to our system:

	- "Conjured" items degrade in Quality twice as fast as normal items


Feel free to create classes as well as modify or change any of the classes during the exercise.

Just for clarification, an item can never have its Quality increase above 50, however "Sulfuras" is a legendary item and as such its Quality is 80 and it never alters.


Gilded Rose Switch
======================================
Esta es kata esta basada en la kata de Gilded Rose
El problema de esta kata es el mismo pero esta estructurada
tienes nuevas limitaciones pensadas para aprender a refactorizar switch statement

[Enlace a Gilded Rose](https://github.com/luisrovirosa/katas-java/tree/master/gilded-rose)


Objetivo Kata
======================================

Añadir el nuevo requisito, el elemento "Conjured" en un código difícil de mantener.

Antes de cambiar el código heredado necesitamos crear prueba para asegurar que no introducimos ningún error en la producción.

Por suerte sabemos cómo usarlo y los requisitos.

Gilded Rose Requisitos Especificación
======================================

Hola y bienvenidos al equipo Gilded Rose. Como saben, somos una pequeña posada con una ubicación privilegiada en una ciudad prominente dirigida por un simpático posadero llamado Allison. También compramos y vendemos solamente las mercancías más finas. Desafortunadamente, nuestras mercancías están constantemente degradando en calidad mientras que acercan su venta por fecha. Tenemos un sistema en el lugar que actualiza nuestro inventario para nosotros. Fue desarrollado por un tipo no-absurdo llamado Leeroy, que se ha trasladado a nuevas aventuras. Su tarea es agregar la nueva característica a nuestro sistema para que podamos comenzar a vender una nueva categoría de artículos. Primero una introducción a nuestro sistema:

    - Todos los artículos tienen un valor SellIn que denota el número de días que tenemos para vender el artículo
    - Todos los artículos tienen un valor de la calidad que denota cuán valioso es el artículo
    - Al final de cada día, nuestro sistema reduce los valores para cada elemento
Bastante simple, ¿verdad? Bueno, aquí es donde se pone interesante:

    - Una vez transcurrida la fecha de caducidad, la calidad se degrada dos veces más rápido
    - La calidad de un artículo nunca es negativa
    - "Brie envejecido" en realidad aumenta en calidad más viejo consigue
    - La calidad de un artículo nunca es superior a 50
    - "Sulfuras", siendo un artículo legendario, nunca tiene que venderse o disminuir en Calidad
    - "Pase de bastidores",
        - Aumentos en la calidad como es SellIn enfoques de valor
        - La calidad aumenta en 2 cuando hay 10 días o menos
        - Por 3 cuando hay 5 días o menos pero
        - La calidad baja a 0 después del concierto
Recientemente hemos firmado un proveedor de artículos conjurados. Esto requiere una actualización de nuestro sistema:

    - Los artículos "conjurados" se degradan en calidad dos veces más rápido que los artículos normales

Siéntase libre de realizar de crear clases asi como modificar o cambiar cualquiera de las clases durante el ejercicio.

Sólo por aclaración, un artículo nunca puede tener su aumento de Calidad por encima de 50, sin embargo "Sulfuras" es un artículo legendario y como tal su Calidad es 80 y nunca se altera.
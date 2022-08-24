
# Bemmbo FrontEnd Test

![image](https://user-images.githubusercontent.com/93418612/186308969-6dc65208-f044-45ea-b235-49604f7aa916.png)

# Run App

In a Docker container

```sh
make dev
```

Locally with npm
```sh
npm install
npm start
```

### Pasos que seguí para tomar el [Desafío](https://bemmbo.notion.site/Prueba-2-28a318c2c15c47d0ae17951249a162a7)

 - Leer en detalle en que consistia el desafio. (Se menciona por parte de Cristobal, que si fallaban los endpoint, se usaran mocks de datos, por lo que a pesar de que cree el cliente HTTP con axios, realice el flujo restante igualmente con el mock creado para no perder tiempo si pasaba aquello)
 - Fork al proyecto Base
 - Revisar y conocer librerias existentes
 - Revisar docu de [HeadlessUI](https://headlessui.com/)
 - Dockerizacion de App
 - Creacion de cliente HTTP con axios para consumir datos de endpoints
 - Implementacion generica de componente (Functional Component) para el renderizado de la data obtenida en App.js
 - Filtrado de invoices segun type y reference
 - Se refactoriza componente inicialmente creado en App.js, encargandose de manejar principalemnte los estados de la data filtrada segun corresponda, dando paso a la creacion de componentes para renderizado:
	-	invoice/index.js: Contenedor encargado de mostrar labels e invoices recibidas mediante props
	-  invoice/item.js: Se encarga de mostrar los datos de la invoice iterada, contiene un poco de logica para resaltar diseño al estar selecionado
 - Se modifica componente InvoiceContainer para dar mayor flexibilidad y poder usarlo tanto para las invoice type RECEIVED y CREDIT_NOTE
 - Los estados se manejan mediante react hooks
 - Se crea archivo de utils.js para unificar funciones de currency format y validaciones generales que son utilizadas en la app
 - Se crea nuevo componente ModalResume para visualizar la data de la factura y nota de credito seleccionada. (En esta instancia, se me presento un problema con la libreria previamente agregada en el proyecto, los ejemplos de implementacion señalados en la documentacion presentan un bug que no permitia la correcta vizualizacion del componente)




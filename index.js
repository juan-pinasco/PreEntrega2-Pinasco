alert(
  "Ingrese numeros de producto que quiere comprar y para finalizar o salir presione 0"
);

let seleccionarProductos = parseInt(
  prompt(
    "1)Pan masa madre $100 2)Budin masa madre $200 3)Alfajor integral $300 4)Mermelada natural $400 0)Para finalizar "
  )
);
let seleccionarCantidad;
let total = 0;

const cantidad = (cant, precio) => {
  return cant * precio;
};

while (seleccionarProductos != 0) {
  switch (seleccionarProductos) {
    case 1:
      seleccionarCantidad = parseInt(
        prompt(
          "El producto que seleccionaste es Pan masa madre, indique cantidad"
        )
      );
      total = total + cantidad(seleccionarCantidad, 100);
      break;
    case 2:
      seleccionarCantidad = parseInt(
        prompt(
          "El producto que seleccionaste es Budin masa madre, indique cantidad"
        )
      );
      total = total + cantidad(seleccionarCantidad, 200);
      break;
    case 3:
      seleccionarCantidad = parseInt(
        prompt(
          "El producto que seleccionaste es Alfajor integral, indique cantidad"
        )
      );
      total = total + cantidad(seleccionarCantidad, 300);
      break;
    case 4:
      seleccionarCantidad = parseInt(
        prompt(
          "El producto que seleccionaste es Mermelada natural, indique cantidad"
        )
      );
      total = total + cantidad(seleccionarCantidad, 400);
      break;
    default:
      alert("La opcion ingresada no es correcta");
      break;
  }
  seleccionarProductos = parseInt(
    prompt(
      "1)Pan masa madre $100 2)Budin masa madre $200 3)Alfajor integral $300 4)Mermelada natural $400 0)Para finalizar "
    )
  );
}

alert("el total de la compra es de " + total);

const envio = () => {
  if (total >= 5000) {
    alert("Al ser una compra mayor a $5000 el envio es gratuito");
  } else {
    total = total + 500;
    alert("El costo de envio es de $500, el costo total es " + total);
  }
};

envio();

alert("Su compra ha finalizado");

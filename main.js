const gridContainer = document.getElementById("listaProductos");
let cantidadProductosMostrados = 0;
const productosPorCarga = 15;
let productosCompletados = false;

function configurarFiltros() {
  const filtroCategoria = document.getElementById("filtroCategoria");
  filtroCategoria.innerHTML = '<option value="all">Todos</option>';

  const categoriasUnicas = [
    ...new Set(productos.map((producto) => producto.categoria)),
  ];

  categoriasUnicas.forEach((categoria) => {
    const option = document.createElement("option");
    option.value = categoria;
    option.textContent = categoria;
    filtroCategoria.appendChild(option);
  });
}

function mostrarDetalleProducto(productoId) {
  const producto = productos.find((p) => p.id === productoId);
  localStorage.setItem("productoDetalle", JSON.stringify(producto));
  window.location.href = "detalle.html";
}

function cargarProductos() {
  const gridContainer = document.getElementById("vistaProductos");
  const productosFiltrados = obtenerProductosFiltrados();

  if (cantidadProductosMostrados >= productosFiltrados.length) {
    if (!productosCompletados) {
      alert("No hay más productos por mostrar.");
      productosCompletados = true;
    }
    return;
  }

  for (
    let i = 0;
    i < productosPorCarga &&
    cantidadProductosMostrados < productosFiltrados.length;
    i++
  ) {
    const producto = productosFiltrados[cantidadProductosMostrados];
    const productoDiv = document.createElement("div");
    productoDiv.className = "producto-item";
    productoDiv.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <p>${producto.nombre}</p>
    `;
    productoDiv.onclick = () => mostrarDetalleProducto(producto.id);
    gridContainer.appendChild(productoDiv);
    cantidadProductosMostrados++;
  }
}

function obtenerProductosFiltrados() {
  const filtroCategoria = document.getElementById("filtroCategoria").value;
  const filtroTipo = document.getElementById("filtroTipo").value.toLowerCase();

  return productos.filter((producto) => {
    const coincideCategoria =
      filtroCategoria === "all" || producto.categoria === filtroCategoria;
    const coincideTipo =
      filtroTipo === "" || producto.tipo.toLowerCase().includes(filtroTipo);
    return coincideCategoria && coincideTipo;
  });
}

function filtrarProductos() {
  cantidadProductosMostrados = 0;
  const gridContainer = document.getElementById("vistaProductos");
  gridContainer.innerHTML = "";
  cargarProductos();
}

function limpiarFiltros() {
  document.getElementById("filtroCategoria").value = "all";
  document.getElementById("filtroTipo").value = "";
  filtrarProductos();
}

function cargarDetalleProducto() {
  const producto = JSON.parse(localStorage.getItem("productoDetalle"));
  if (producto) {
    document.getElementById("detalleImagen").src = producto.imagen;
    document.getElementById("detalleNombre").textContent = producto.nombre;
    document.getElementById(
      "detallePrecio"
    ).textContent = `Precio: $${producto.precio}`;
    document.getElementById("detalleDescripcion").textContent =
      producto.descripcion;
  } else {
    alert("Producto no encontrado");
    window.location.href = "productos.html";
  }
}

function agregarAlCarrito() {
  const registro = JSON.parse(localStorage.getItem("registroCompra"));
  const producto = JSON.parse(localStorage.getItem("productoDetalle"));
  const cantidadInput = document.getElementById("cantidadProducto");
  const cantidad = parseInt(cantidadInput.value);

  if (!registro) {
    alert(
      "Por favor, completa el registro antes de agregar productos al carrito."
    );
    return false;
  }

  if (producto && cantidad > 0) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const index = carrito.findIndex((p) => p.id === producto.id);

    const cantidadTotalCarrito = carrito.reduce(
      (total, item) => total + item.cantidad,
      0
    );
    const totalCompraActual = carrito.reduce(
      (total, item) => total + item.precio * item.cantidad,
      0
    );

    if (cantidadTotalCarrito + cantidad > registro.cantidadMaxima) {
      alert(
        `No puedes agregar más de ${registro.cantidadMaxima} artículos al carrito.`
      );
      cantidadInput.value = registro.cantidadMaxima - cantidadTotalCarrito;
      return false;
    }

    if (totalCompraActual + producto.precio * cantidad > registro.presupuesto) {
      alert(
        `No puedes exceder el presupuesto máximo de $${registro.presupuesto}.`
      );
      const cantidadPermitida = Math.floor(
        (registro.presupuesto - totalCompraActual) / producto.precio
      );
      cantidadInput.value = cantidadPermitida;
      return false;
    }

    if (index !== -1) {
      carrito[index].cantidad += cantidad;
    } else {
      producto.cantidad = cantidad;
      carrito.push(producto);
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert("Producto agregado al carrito");
    return true;
  } else {
    alert("Por favor, ingrese una cantidad válida");
    return false;
  }
}

function comprarAhora() {
  const agregadoCorrectamente = agregarAlCarrito();
  if (agregadoCorrectamente) {
    window.location.href = "carrito.html";
  }
}

function cargarCarrito() {
  const registro = JSON.parse(localStorage.getItem("registroCompra"));
  if (!registro) {
    alert("Por favor, completa el registro antes de acceder al carrito.");
    window.location.href = "registro.html";
    return;
  }

  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const tablaCarrito = document
    .getElementById("tablaCarrito")
    .querySelector("tbody");
  tablaCarrito.innerHTML = "";

  let totalProductos = 0;
  let subtotal = 0;
  const cargoDomicilio = 15000;

  carrito.forEach((item, index) => {
    const fila = document.createElement("tr");
    const totalItem = item.precio * item.cantidad;
    fila.innerHTML = `
      <td><img src="${item.imagen}" alt="${item.nombre}" width="50"></td>
      <td>${item.nombre}</td>
      <td>$${item.precio.toFixed(2)}</td>
      <td><input type="number" value="${
        item.cantidad
      }" min="1" onchange="actualizarCantidad(${index}, this)"></td>
      <td>$${totalItem.toFixed(2)}</td>
      <td><button onclick="eliminarProducto(${index})">❌</button></td>
    `;
    tablaCarrito.appendChild(fila);

    totalProductos += item.cantidad;
    subtotal += totalItem;
  });

  const totalConEnvio =
    registro.tipoEntrega === "Domicilio" ? subtotal + cargoDomicilio : subtotal;

  document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById(
    "totalCompra"
  ).textContent = `$${totalConEnvio.toFixed(2)}`;

  if (registro.tipoEntrega === "Domicilio") {
    document.getElementById("cargoDomicilioSection").style.display = "flex";
    document.getElementById(
      "cargoDomicilio"
    ).textContent = `$${cargoDomicilio.toFixed(2)}`;
  } else {
    document.getElementById("cargoDomicilioSection").style.display = "none";
  }
}

function actualizarCantidad(index, input) {
  const nuevaCantidad = parseInt(input.value);
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  if (nuevaCantidad <= 0) {
    input.value = carrito[index].cantidad;
    alert("La cantidad debe ser mayor que 0.");
    return;
  }

  carrito[index].cantidad = nuevaCantidad;
  localStorage.setItem("carrito", JSON.stringify(carrito));
  cargarCarrito();
}

function eliminarProducto(index) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  if (carrito[index].cantidad > 1) {
    carrito[index].cantidad--;
  } else {
    carrito.splice(index, 1);
  }
  localStorage.setItem("carrito", JSON.stringify(carrito));
  cargarCarrito();
}

function confirmarCompra() {
  const numeroTarjeta = document.getElementById("numeroTarjeta").value;
  const fechaExpiracion = document.getElementById("fechaExpiracion").value;
  const codigoSeguridad = document.getElementById("codigoSeguridad").value;
  const nombreTitular = document.getElementById("nombreTitular").value;
  const paisEmision = document.getElementById("paisEmision").value;
  const tipoTarjeta = document.querySelector(
    'input[name="tipoTarjeta"]:checked'
  );

  const registroCompra = JSON.parse(localStorage.getItem("registroCompra"));
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  if (carrito.length === 0) {
    alert("No hay nada en el carrito.");
    return;
  }

  document
    .getElementById("fechaExpiracion")
    .addEventListener("input", function (e) {
      let input = e.target.value.replace(/\D/g, "");
      if (input.length >= 2) {
        input = input.slice(0, 2) + "/" + input.slice(2, 4);
      }
      e.target.value = input.slice(0, 5);
    });

  if (!/^\d{16}$/.test(numeroTarjeta)) {
    alert("Número de tarjeta inválido.");
    return;
  }
  if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(fechaExpiracion)) {
    alert("Fecha de expiración inválida.");
    return;
  }
  if (!/^\d{3}$/.test(codigoSeguridad)) {
    alert("Código de seguridad inválido.");
    return;
  }
  if (nombreTitular.trim() === "") {
    alert("Nombre del titular es obligatorio.");
    return;
  }
  if (paisEmision === "") {
    alert("Seleccione un país de emisión.");
    return;
  }
  if (!tipoTarjeta) {
    alert("Seleccione un tipo de tarjeta.");
    return;
  }
  if (carrito.length > registroCompra.cantidadArticulos) {
    alert(
      "La cantidad de productos en el carrito supera el límite establecido."
    );
    return;
  }

  const subtotalProductos = carrito.reduce(
    (total, item) => total + item.precio * item.cantidad,
    0
  );

  if (subtotalProductos > registroCompra.presupuesto) {
    alert("El total de los productos excede el presupuesto máximo.");
    return;
  }

  new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.2;
      if (success) resolve();
      else reject();
    }, Math.floor(Math.random() * 2000) + 1000);
  })
    .then(() => {
      alert("Pago realizado con éxito");
      localStorage.removeItem("carrito");
      window.location.href = "productos.html";
    })
    .catch(() => {
      alert("Hubo un error al procesar la compra. Intente nuevamente.");
    });
}

function volverAProductos() {
  window.location.href = "productos.html";
}

function cancelarCompra() {
  localStorage.removeItem("carrito");
  alert("Compra cancelada");
  window.location.href = "productos.html";
}

function verificarRegistro() {
  const registroCompleto = localStorage.getItem("registroCompleto");
  if (!registroCompleto) {
    window.location.href = "registro.html";
  }
}

function guardarRegistro() {
  const nombre = document.getElementById("nombre").value.trim();
  const presupuesto = parseFloat(document.getElementById("presupuesto").value);
  const cantidadArticulos = parseInt(
    document.getElementById("cantidadArticulos").value
  );
  const direccion = document.getElementById("direccion").value.trim();
  const tipoEntrega = document.querySelector(
    'input[name="tipoEntrega"]:checked'
  );
  const mensajeError = document.getElementById("mensajeError");
  mensajeError.textContent = "";

  if (!nombre || nombre.length > 20) {
    mensajeError.textContent =
      "El nombre es obligatorio y no debe exceder los 20 caracteres.";
    return;
  }

  if (isNaN(presupuesto) || presupuesto <= 0) {
    mensajeError.textContent =
      "El presupuesto debe ser un número positivo y estar en pesos.";
    return;
  }

  if (
    isNaN(cantidadArticulos) ||
    cantidadArticulos <= 0 ||
    cantidadArticulos > 20
  ) {
    mensajeError.textContent =
      "La cantidad de productos debe ser un número positivo y no debe exceder de 20.";
    return;
  }

  if (!direccion) {
    mensajeError.textContent = "La dirección es obligatoria.";
    return;
  }

  if (!tipoEntrega) {
    mensajeError.textContent = "Seleccione un tipo de entrega.";
    return;
  }

  const registro = {
    nombre,
    presupuesto,
    cantidadMaxima: cantidadArticulos,
    direccion,
    tipoEntrega: tipoEntrega.value,
  };

  localStorage.setItem("registroCompra", JSON.stringify(registro));
  localStorage.setItem("registroCompleto", true);

  window.location.href = "productos.html";
}

if (window.location.pathname.includes("index.html")) {
  verificarRegistro();
}

window.onload = function () {
  const pathname = window.location.pathname;

  if (pathname.includes("detalle.html")) {
    cargarDetalleProducto();
  } else if (pathname.includes("carrito.html")) {
    cargarCarrito();
  } else {
    configurarFiltros();
    cargarProductos();
    setupScrollInfinito();
  }

  const iconoCarrito = document.getElementById("iconoCarrito");
  if (iconoCarrito) {
    iconoCarrito.addEventListener("click", function () {
      window.location.href = "carrito.html";
    });
  }
};

function setupScrollInfinito() {
  const gridContainer = document.getElementById("vistaProductos");

  gridContainer.addEventListener("scroll", function () {
    if (
      gridContainer.scrollTop + gridContainer.clientHeight >=
      gridContainer.scrollHeight - 5
    ) {
      cargarProductos();
    }
  });
}

document.getElementById("logo").addEventListener("click", function () {
  window.location.href = "productos.html";
});

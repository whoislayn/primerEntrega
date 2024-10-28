const productos = [
  {
    id: 1,
    nombre: "Balón de Fútbol",
    precio: 30,
    categoria: "Deportes de Pelota",
    tipo: "Fútbol",
    imagen:
      "https://media.istockphoto.com/id/610241662/es/foto/bal%C3%B3n-de-f%C3%BAtbol-aislado-sobre-el-fondo-blanco.jpg?s=1024x1024&w=is&k=20&c=YCdDAXJav9_vfluP7MlCOHGS5-kQuUdfHeUK6j0yswA=",
  },
  {
    id: 2,
    nombre: "Raqueta de Tenis",
    precio: 70,
    categoria: "Deportes de Raqueta",
    tipo: "Tenis",
    imagen:
      "https://media.istockphoto.com/id/178479911/es/foto/raqueta-de-tenis-blanco-y-negro-estilo.jpg?s=612x612&w=is&k=20&c=k6Hzn09Qd5yIzzov3IEJUH_T8sDG1xXRsAG3vv5l4Vw=",
  },
  {
    id: 3,
    nombre: "Guantes de Boxeo",
    precio: 40,
    categoria: "Artes Marciales",
    tipo: "Boxeo",
    imagen:
      "https://media.istockphoto.com/id/1250685727/es/vector/parejas-realistas-de-guantes-de-boxeo-rojos.jpg?s=612x612&w=is&k=20&c=t4Yvsczf2P7h_Dtt9jOjznt8rVncBpNb78QY0gNCfQ0=",
  },
  {
    id: 4,
    nombre: "Mancuernas 5kg",
    precio: 50,
    categoria: "Fitness",
    tipo: "Pesas",
    imagen:
      "https://media.istockphoto.com/id/1184617521/es/foto/mancuerna-negra-sobre-fondo-blanco-vista-lateral-5kg.jpg?s=612x612&w=is&k=20&c=_aVN7B2OXkq_EUAxE3Xfrtrm4pbqMowXJh3U3Vdj1no=",
  },
  {
    id: 5,
    nombre: "Cuerda para Saltar",
    precio: 15,
    categoria: "Fitness",
    tipo: "Cardio",
    imagen:
      "https://media.istockphoto.com/id/1166994632/es/foto/cuerda-de-salto-azul-marino-aislada-sobre-fondo-blanco.jpg?s=612x612&w=is&k=20&c=R-Odt_tUsEm4hNW9Shljo4KijLqTsafc8uCGns1dz-E=",
  },
  {
    id: 6,
    nombre: "Pelota de Baloncesto",
    precio: 45,
    categoria: "Deportes de Pelota",
    tipo: "Baloncesto",
    imagen:
      "https://media.istockphoto.com/id/172147072/es/foto/de-b%C3%A1squetbol.jpg?s=612x612&w=is&k=20&c=TpReboCiPgZpjyrrMHOoMcismA6iKDnI2o00kMf8jbw=",
  },
  {
    id: 7,
    nombre: "Rueda Abdominal",
    precio: 25,
    categoria: "Fitness",
    tipo: "Entrenamiento Core",
    imagen:
      "https://media.istockphoto.com/id/1318511853/es/foto/hombre-hace-ejercicio-con-rodillo-ab.jpg?s=612x612&w=is&k=20&c=YuQ3T05iBwFzZm7F4cOPZvn7GY7jYRPIZrosm--Inb4=",
  },
  {
    id: 8,
    nombre: "Colchoneta de Yoga",
    precio: 20,
    categoria: "Yoga y Pilates",
    tipo: "Yoga",
    imagen:
      "https://media.istockphoto.com/id/1300888566/es/foto/adolescente-haciendo-ejercicio-de-fitness-practicando-yoga-en-casa-concepto-de-estilo-de-vida.jpg?s=612x612&w=is&k=20&c=VcTZRgTadi3qGYz20Dhh0bcG_aL2jLE7uMJ3eXH27rk=",
  },
  {
    id: 9,
    nombre: "Paleta de Ping Pong",
    precio: 10,
    categoria: "Deportes de Raqueta",
    tipo: "Ping Pong",
    imagen:
      "https://media.istockphoto.com/id/508046933/es/foto/ping-pong-paleta.jpg?s=612x612&w=is&k=20&c=PQaFj_EuiazvxbxuprrJe-jKEFbItB_GSYpa2rqUteU=",
  },
  {
    id: 10,
    nombre: "Bicicleta Estática",
    precio: 150,
    categoria: "Fitness",
    tipo: "Cardio",
    imagen:
      "https://media.istockphoto.com/id/186868748/es/foto/bicicleta-fija.jpg?s=612x612&w=is&k=20&c=a-2ulwb4lvEfobkkzDESBpzoU3_K29jdLJrYQQPuVcY=",
  },
  {
    id: 11,
    nombre: "Kit de Pesas Ajustables",
    precio: 80,
    categoria: "Fitness",
    tipo: "Pesas",
    imagen:
      "https://media.istockphoto.com/id/1149170006/es/foto/vista-superior-de-mancuernas-de-hierro-o-pesas-en-el-piso-negro-con-copia-de-espacio-para-el.jpg?s=612x612&w=is&k=20&c=VsUPb13PdvJjDMDO46lKECbHYpw4MoROsvgglK-3shA=",
  },
  {
    id: 12,
    nombre: "Cinta de Correr",
    precio: 300,
    categoria: "Fitness",
    tipo: "Cardio",
    imagen:
      "https://media.istockphoto.com/id/2108647596/es/foto/primer-plano-de-los-pies-corredora-de-la-mujer-del-deporte-que-corre-en-la-cinta-de-correr-en.jpg?s=612x612&w=is&k=20&c=y--Y5r7vcBGAfmhkaek1fRSrZK0N0dGHl5JjZp4Qrk0=",
  },
  {
    id: 13,
    nombre: "Set de Bandas de Resistencia",
    precio: 20,
    categoria: "Fitness",
    tipo: "Entrenamiento",
    imagen:
      "https://media.istockphoto.com/id/1331306499/es/foto/primer-plano-de-la-mujer-africana-en-ropa-deportiva-haciendo-ejercicio-con-banda-el%C3%A1stica.jpg?s=612x612&w=is&k=20&c=jSYT7H92nugVDXyr4X4CojA3lXdAHWlOId4dOYvW66I=",
  },
  {
    id: 14,
    nombre: "Bolsa de Boxeo",
    precio: 100,
    categoria: "Artes Marciales",
    tipo: "Boxeo",
    imagen:
      "https://media.istockphoto.com/id/497936468/es/foto/boxeo-pera-con-cadenas-de-cromo.jpg?s=612x612&w=is&k=20&c=IOG25e-si1mzhhCef_yA924ayEM5CVvoInvfrIa5R5s=",
  },
  {
    id: 15,
    nombre: "Tabla de Surf",
    precio: 200,
    categoria: "Deportes Acuáticos",
    tipo: "Surf",
    imagen:
      "https://media.istockphoto.com/id/479928254/es/foto/tabla-de-surf.jpg?s=612x612&w=is&k=20&c=vVd6gEiQaCSgrGxDRiS1YsNMeXfxjX73LhSlTz1Xn88=",
  },
  {
    id: 16,
    nombre: "Esquíes de Nieve",
    precio: 250,
    categoria: "Deportes de Invierno",
    tipo: "Esquí",
    imagen:
      "https://media.istockphoto.com/id/831415198/es/foto/vacaciones-de-invierno-paisaje.jpg?s=612x612&w=is&k=20&c=Ke1MfofNPzNro0u997Go9ihftAkr7tnCY9F8Mmx6IFQ=",
  },
  {
    id: 17,
    nombre: "Gafas de Natación",
    precio: 15,
    categoria: "Deportes Acuáticos",
    tipo: "Natación",
    imagen:
      "https://media.istockphoto.com/id/157605739/es/foto/gafas.jpg?s=612x612&w=is&k=20&c=Uo-0O4wGAEdyD1urly4Wgy0c74R5l7XPQDVU_8BZPH4=",
  },
  {
    id: 18,
    nombre: "Aletas de Buceo",
    precio: 40,
    categoria: "Deportes Acuáticos",
    tipo: "Buceo",
    imagen:
      "https://media.istockphoto.com/id/171358712/es/foto/buceo-flippers-aletas.jpg?s=612x612&w=is&k=20&c=3WBoKhQZGa0kfxls6a7WDZXiCqHARVyCKDqjS0Kr4ZM=",
  },
  {
    id: 19,
    nombre: "Casco de Ciclismo",
    precio: 35,
    categoria: "Ciclismo",
    tipo: "Protección",
    imagen:
      "https://media.istockphoto.com/id/157475434/es/foto/casco-de-ciclista-en-bicicleta-amarillo-blanco.jpg?s=612x612&w=is&k=20&c=SGF0RuPGuejeTTl0Q1C9vOC8yphbtbsmSDEn4I3VAVc=",
  },
  {
    id: 20,
    nombre: "Mochila de Hidratación",
    precio: 25,
    categoria: "Ciclismo",
    tipo: "Accesorios",
    imagen:
      "https://media.istockphoto.com/id/1209664302/es/foto/mochila-de-vejiga-gris-y-negra-disparada-directamente-aislada-sobre-blanco-con-una-sombra.jpg?s=612x612&w=is&k=20&c=CRu6n4BTuf9S3PWOlkp24iKNfgF9WvFivWO6qeMbLWo=",
  },
  {
    id: 21,
    nombre: "Camiseta de Running",
    precio: 20,
    categoria: "Ropa Deportiva",
    tipo: "Running",
    imagen:
      "https://media.istockphoto.com/id/1078156694/es/foto/hombre-maduro-para-correr-en-el-bosque-con-auriculares.jpg?s=612x612&w=is&k=20&c=wyvgd63ZLNHRrLXaXbox9BrZYON9ZnPiDZge9kMfo48=",
  },
  {
    id: 22,
    nombre: "Pantalones de Yoga",
    precio: 25,
    categoria: "Ropa Deportiva",
    tipo: "Yoga",
    imagen:
      "https://media.istockphoto.com/id/1498868174/es/foto/pantalones-de-yoga-maqueta-de-leggings-plantilla-de-leggins-para-mujer-pantal%C3%B3n-black-sport.jpg?s=612x612&w=is&k=20&c=9TtyTQYG9LLTGZjMuYKni4vZWQ2snaQ7o85zkpokVdw=",
  },
  {
    id: 23,
    nombre: "Botas de Senderismo",
    precio: 60,
    categoria: "Outdoor",
    tipo: "Senderismo",
    imagen:
      "https://media.istockphoto.com/id/134406993/es/foto/botas-de-excursionismo.jpg?s=612x612&w=is&k=20&c=jFR7bocWxVGPD2DHND-nyAL4OQfF6pCxyXhqNEePMfA=",
  },
  {
    id: 24,
    nombre: "Guantes de Ciclismo",
    precio: 18,
    categoria: "Ciclismo",
    tipo: "Accesorios",
    imagen:
      "https://media.istockphoto.com/id/801569016/es/foto/hombre-en-una-bicicleta.jpg?s=612x612&w=is&k=20&c=UJFCATMiQ3fGbO8QyhYvCEY6HqrdYLGuR5PVSecb-gg=",
  },
  {
    id: 25,
    nombre: "Patineta",
    precio: 50,
    categoria: "Deportes Extremos",
    tipo: "Patinaje",
    imagen:
      "https://media.istockphoto.com/id/1202959751/es/foto/maqueta-de-plantilla-de-tabla-de-skate-en-blanco-aislada-en-blanco.jpg?s=612x612&w=is&k=20&c=D0KJTdLH4M5F7pa4AJ9Z9J7WPTmcjSrkt4q4GL0PCeM=",
  },
  {
    id: 26,
    nombre: "Casco de Escalada",
    precio: 45,
    categoria: "Deportes Extremos",
    tipo: "Escalada",
    imagen:
      "https://media.istockphoto.com/id/539468800/es/foto/alpinismo-casco-en-blanco.jpg?s=612x612&w=is&k=20&c=DwYeOxE5CBpSCBfWyXCRb4w1xfyiul2844uJsQmtA90=",
  },
  {
    id: 27,
    nombre: "Soga de Escalada",
    precio: 75,
    categoria: "Deportes Extremos",
    tipo: "Escalada",
    imagen:
      "https://media.istockphoto.com/id/812500830/es/foto/art%C3%ADculo-de-monta%C3%B1ismo.jpg?s=612x612&w=is&k=20&c=6xNvd0XBxSCgn1a79BoHQdjKx3w7cmTpma9iENEqAcI=",
  },
  {
    id: 28,
    nombre: "Pesas Rusas 10kg",
    precio: 40,
    categoria: "Fitness",
    tipo: "Pesas",
    imagen:
      "https://media.istockphoto.com/id/904602698/es/foto/blanco-10-kg-kettlebell-de-competici%C3%B3n-sobre-un-suelo-de-gimnasio-de-entrenamiento-de-peso.jpg?s=612x612&w=is&k=20&c=YGrGg0m3KRm3ahRrS7HGoWBxn21kEDkYIN-8fWiWwu0=",
  },
  {
    id: 29,
    nombre: "Banda de Resistencia",
    precio: 12,
    categoria: "Fitness",
    tipo: "Entrenamiento",
    imagen:
      "https://media.istockphoto.com/id/1370325093/es/foto/mujer-en-forma-en-ropa-deportiva-haciendo-ejercicio-con-banda-de-lazo-de-resistencia-haciendo.jpg?s=612x612&w=is&k=20&c=9bhpD0vZQ6bYV8sMv99IHfhMmdqrhH8ByDf4DJv7uYc=",
  },
  {
    id: 30,
    nombre: "Gorra Deportiva",
    precio: 10,
    categoria: "Accesorios",
    tipo: "Outdoor",
    imagen:
      "https://media.istockphoto.com/id/118348709/es/foto/negro-gorra-de-b%C3%A9isbol.jpg?s=612x612&w=is&k=20&c=AgAAXxdYBqZW5aROGaLkp6cwXV05otG_i8SOfuEqQaU=",
  },
  {
    id: 31,
    nombre: "Raqueta de Squash",
    precio: 65,
    categoria: "Deportes de Raqueta",
    tipo: "Squash",
    imagen:
      "https://media.istockphoto.com/id/508075913/es/foto/raquetas-y-pelotas-de-squash.jpg?s=612x612&w=is&k=20&c=ZiB2euMeqaUErinpQYwH7sibXIAnZF_Ss_W_2WUsnmo=",
  },
  {
    id: 32,
    nombre: "Tabla de Snowboard",
    precio: 270,
    categoria: "Deportes de Invierno",
    tipo: "Snowboard",
    imagen:
      "https://media.istockphoto.com/id/1058889910/es/foto/snowboard-con-fijaciones-de-correa-en-3d-rendering-aislado-sobre-fondo-blanco.jpg?s=612x612&w=is&k=20&c=fwSkrTNj0Aokm21FHifYS8HmOzdHlWcXsah5Tv2s6Yg=",
  },
  {
    id: 33,
    nombre: "Pesa de Tobillo",
    precio: 15,
    categoria: "Fitness",
    tipo: "Pesas",
    imagen:
      "https://media.istockphoto.com/id/521420123/es/foto/peso-los-sacos-de-arena.jpg?s=612x612&w=is&k=20&c=tJHcscKbpZ3klzLNHdeHrg2_ngU51kV8FVfcWt8svuo=",
  },
  {
    id: 34,
    nombre: "Pesa de Mano 2kg",
    precio: 10,
    categoria: "Fitness",
    tipo: "Pesas",
    imagen:
      "https://media.istockphoto.com/id/183475084/es/foto/mano-agarrando-una-pesa-aislado-en-blanco.jpg?s=612x612&w=is&k=20&c=N11K_ECDJddTX5sDWetELLCxNRj1QWmOeTdCVq43tWM=",
  },
  {
    id: 35,
    nombre: "Botella de Agua Reutilizable",
    precio: 8,
    categoria: "Accesorios",
    tipo: "Hidratación",
    imagen:
      "https://media.istockphoto.com/id/1387067219/es/foto/botellas-de-agua-modernas-sobre-fondo-blanco.jpg?s=612x612&w=is&k=20&c=gyMXlXwXeBl3igxxA224Dwhmor6160Ft4IcjJ4X5dAs=",
  },
  {
    id: 36,
    nombre: "Cinturon de entrenamiento",
    precio: 12,
    categoria: "Fitness",
    tipo: "Accesorios",
    imagen:
      "https://media.istockphoto.com/id/924194310/es/foto/listo-para-el-levantamiento-de-pesas.jpg?s=612x612&w=is&k=20&c=eWO7TmnD-eNth_PDU7uG7Qn6KscdrmpXbsmLN-RyOAc=",
  },
  {
    id: 37,
    nombre: "Gorro de Natación",
    precio: 8,
    categoria: "Deportes Acuáticos",
    tipo: "Natación",
    imagen:
      "https://media.istockphoto.com/id/1486007486/es/foto/retrato-hombre-y-relax-en-piscina-con-gorra-en-bienestar-deportivo-entrenamiento-o-ejercicio.jpg?s=612x612&w=is&k=20&c=i-x-5TBHsraj1R1j0CkeO9ClAbY7Bo7dFjvmbLVnmds=",
  },
  {
    id: 38,
    nombre: "Chaleco de Pesas",
    precio: 100,
    categoria: "Fitness",
    tipo: "Entrenamiento",
    imagen:
      "https://media.istockphoto.com/id/1221472675/es/foto/joven-apto-hombre-haciendo-ejercicio-de-tracci%C3%B3n-con-un-chaleco-lleno-de-peso-al-aire-libre.jpg?s=612x612&w=is&k=20&c=YTsaxnOpotEKZjG9U5aUGU7SC06p-zffo9hpT378t0E=",
  },
  {
    id: 39,
    nombre: "Calcetines de Compresión",
    precio: 15,
    categoria: "Ropa Deportiva",
    tipo: "Running",
    imagen:
      "https://media.istockphoto.com/id/1443971694/es/foto/mujer-sentada-encima-de-la-cama-poni%C3%A9ndose-calcetines-de-compresi%C3%B3n-en-las-piernas.jpg?s=612x612&w=is&k=20&c=Xr9z7NxpD-XPyf_i1LflEk3FTQVsyiRuamSGnijqcCk=",
  },
  {
    id: 40,
    nombre: "Balón de Voleibol",
    precio: 25,
    categoria: "Deportes de Pelota",
    tipo: "Voleibol",
    imagen:
      "https://media.istockphoto.com/id/618341990/es/foto/pelota-de-voleibol-aislada-sobre-fondo-blanco.jpg?s=612x612&w=is&k=20&c=1KgZ4TXJMR6P9KK6yURQIRVQgV_24RugGnYGogfh7Ps=",
  },
];

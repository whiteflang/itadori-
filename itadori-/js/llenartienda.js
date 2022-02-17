let productos=[ 
           
    {nombre:" mangas jujitsu no kaisen ",precio: 120000 ,foto:"img/tienda1.jpg",descripcion:"pack de  5 magas jujitsu no kaisen."},
    {nombre:"figura nobara kugisaki",precio:80000,foto:"img/tienda2.jpg",descripcion:"figura de colecion."},
    {nombre:"camisa gojo satori",precio: 40000 ,foto:"img/tienda3.jpg",descripcion:"playera talla m,l,s unisex"},
    {nombre:"figura panda ",precio: 80000 ,foto:"img/tienda4.jpg",descripcion:"figura de colecion."},
    {nombre:"poster de sukuna ",precio: 50000 ,foto:"img/tienda5.jpg",descripcion:"poster para tu cuarto"},
    {nombre:"poster de satoru",precio: 50000 ,foto:"img/tienda6.jpg",descripcion:"poster para tu cuarto"},
    {nombre:"poster de nobara ",precio: 100000 ,foto:"img/tienda7.jpg",descripcion:"poster para tu cuarto"},
    {nombre:"camisa itadori",precio:40000,foto:"img/tienda8.jpg",descripcion:"playera talla m,l,s unisex"},
    {nombre:"buzo sukuna blanco",precio: 5000,foto:"img/tienda9.jpg",descripcion:"buzo talla m,l,s uisex"},
    {nombre:"buzo itadori blanco",precio: 5000,foto:"img/tienda10.jpg",descripcion:"buzo talla m,l,s uisex"},
    {nombre:"buzo itadori negro",precio: 100000 ,foto:"img/tienda11.jpg",descripcion:"buzo talla m,l,s uisex"},
    {nombre:"bolso itadori ",precio: 100000 ,foto:"img/tienda12.jpg",descripcion:"bolsos multiusus con estanpados"},
    {nombre:"bolso Mahito",precio: 100000 ,foto:"img/tienda 13.jpg",descripcion:"bolsos multiusus con estanpados"},
    {nombre:"camisa negra Megumi ",precio: 100000 ,foto:"img/tienda14.jpg",descripcion:"playera talla m,l,s unisex"},
    {nombre:"bolso itadory ",precio: 100000 ,foto:"img/tienda15.jpg",descripcion:"bolsos multiusus con estanpados"}


]

export function llenarTienda(){

    
    let row =document.getElementById("row")

productos.forEach(producto=> {
  let col =document.createElement("div")
  col.classList.add("col")
  let card=document.createElement("div")
  card.classList.add("card")
  let  img =document.createElement("img")
  img.src=producto.foto
  let cardbody=document.createElement("div")
  cardbody.classList.add("card-body","border-top","bg-dark")
  let nombre=document.createElement("h4")
  nombre.classList.add("card-title","text-light")
  nombre.textContent=producto.nombre
  let precio=document.createElement("h5")
  precio.classList.add("card-text","text-light")
  precio.textContent=producto.precio
  let descripcion=document.createElement("p")
  descripcion.classList.add("card-text","text-danger")
  descripcion.textContent=producto.descripcion
 
  cardbody.appendChild(nombre)
  cardbody.appendChild(precio)
  cardbody.appendChild(descripcion)
  card.appendChild(img)
  card.appendChild(cardbody)
  col.appendChild(card)
  row.appendChild(col)

 });

}

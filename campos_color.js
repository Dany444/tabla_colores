function execute(){
    color_fondo= document.f_colores.color_fondo.value;
    color_texto= document.f_colores.color_texto.value;
    document.f_colores.resultado.style.background=color_fondo;
    document.f_colores.resultado.style.color=color_texto;
}
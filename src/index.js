import { holaMundo } from "./holaService";
import logoImg from "./content/MalagaCf.png";

const _hola = holaMundo();
//document.write(_hola);

document.getElementById("dvTitle").innerHTML = _hola;

const _img = document.createElement("img");
_img.src = logoImg;

document.getElementById("imgContainer").appendChild(_img);

import * as exp from "constants";
import * as THREE from "three";

export class Light1 {
  main: THREE.PointLight;

  constructor() {
    this.main = new THREE.PointLight(0xffffff, 1);
    this.main.position.set(8.5, 7, 2.5);
  }
}

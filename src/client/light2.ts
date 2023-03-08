import * as THREE from "three";

export class Light2 {
  main: THREE.PointLight;

  constructor() {
    this.main = new THREE.PointLight(0xffffff, 1);
    this.main.position.set(-9.5, 10, 2.5);
  }
}
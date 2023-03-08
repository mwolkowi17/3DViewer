import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {scene} from './client'

export class Loader1 {
    main: GLTFLoader;
    constructor(){
        this.main = new GLTFLoader();

        this.main.load("./turbo1.glb", (gltf) => {
            gltf.scene.position.set(0, 0, 0);
            gltf.scene.rotation.set(0, 0, 0);
      
            gltf.scene.traverse(function (child) {
              if ((child as THREE.Mesh).isMesh) {
                const m = child as THREE.Mesh;
                m.castShadow = true;
             }
            });
      
            scene.add(gltf.scene);
            //console.log(pickableObjects);
          });

    }
}
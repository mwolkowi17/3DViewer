import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {scene} from './client'

export class Loader1 {
    main: GLTFLoader;

    constructor(){
        this.main = new GLTFLoader();
        this.main.load("./models/wysysacz_popr1.glb", (gltf) => {
            gltf.scene.position.set(0, 0, 0);
            gltf.scene.rotation.set(0, 0, 0);
          
            const objects: any = [];
            gltf.scene.traverse(function (child) {
    
              console.log(child);
              objects.push(child);
              
              
            });

            console.log(objects)
      
            scene.add(gltf.scene);
           
          });

    }
}
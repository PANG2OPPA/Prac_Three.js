import * as THREE from "../3DR/libs/build/three.module.js";
import { OrbitControls } from "../3DR/libs/three/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "../3DR/libs/three/jsm/loaders/GLTFLoader.js";
import { OBJLoader } from "../3DR/libs/three/jsm/loaders/OBJLoader.js";

let camera, scene, renderer, controls;

scene = new THREE.Scene();
scene.background = new THREE.Color(0xf0f0f0);
scene.fog = new THREE.Fog( 0xd3d3d3, 1, 15 );

renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// 그리드
const gridHelper = new THREE.GridHelper(50, 50, 0x000000, 0x000000);
scene.add(gridHelper);

camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 10000);
camera.position.set(0, 5, 6);
camera.lookAt(0, 0, 0);

// 첫번째 Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const box = new THREE.Mesh(geometry, material);

// Cube 위치 조정
box.position.set(0, 0.5, 0);
// 그림자 조정
box.castShadow = true;
box.receiveShadow = true;
scene.add(box);


// 바닥
const floorGeometry = new THREE.PlaneGeometry(50, 50);
const floorMaterial = new THREE.MeshPhongMaterial({ color: 0x6c6c6c });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floorMaterial.shininess = 70;

floor.rotation.x = Math.PI / -2;
floor.receiveShadow = true;
scene.add(floor);


// 빛
const light = new THREE.DirectionalLight( 0xFFFFFF, 1 );
light.position.set(-5, 10, 8);
light.castShadow = true;
scene.add( light );

const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

// 화면
controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 2;
controls.maxDistance = 12;

// 두번째 Cube (GLTF)
const gltfLoader = new GLTFLoader();
gltfLoader.load(
  '/model/gltf/box.gltf',
  function (gltf) {
      const model1 = gltf.scene;
      const newColor = new THREE.Color(0xff0000);

      // 자식 순회 후 Color 항목 추가
      model1.traverse((child) => {
          if (child.isMesh) {
              child.material.color = newColor;
              child.castShadow = true;
              child.receiveShadow = true;
          }
      });

      // Cube 위치 조정
      model1.position.set(2, 1, -2);
      scene.add(model1);
  },
  function (xhr) {
      console.log('model1 '+(xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (err) {
      console.error('An error happened', err);
  }
);

// 세번째 Cube (OBJ)
const objLoader = new OBJLoader();
const textureLoader = new THREE.TextureLoader();
textureLoader.load('/model/obj/box.jpg', function (texture) {
    objLoader.load(
        'model/obj/box.obj',
        function (obj) {
            const model2 = obj;
            const newMaterial = new THREE.MeshStandardMaterial({ map: texture });

            // 자식 순회 후 material 항목 추가
            model2.traverse((child) => {
                if (child.isMesh) {
                    child.material = newMaterial;
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });

            // Cube 위치 조정
            model2.position.set(-2, 1, -2);
            scene.add(model2);
        },
        function (xhr) {
            console.log('model2 '+(xhr.loaded / xhr.total * 100) + '% loaded');
        },
        function (err) {
            console.error('An error happened', err);
        }
    );
}, undefined, function (err) {
    console.error('An error happened', err);
});

// 네번째 Cube (GLB)
gltfLoader.load(
  '/model/glb/box.glb',
  function (gltf) {
      const model3 = gltf.scene;
      const newColor = new THREE.Color(0x0000ff);

      // 자식 순회 후  Color 항목 추가
      model3.traverse((child) => {
          if (child.isMesh) {
              child.material.color = newColor;
              child.castShadow = true;
              child.receiveShadow = true;
          }
      });

      // Cube 위치 조정
      model3.position.set(2, 0.5, 2);
      // Cube 크기 조정
      model3.scale.set(0.5, 0.5, 0.5);
      scene.add(model3);
  },
  function (xhr) {
      console.log('model3 '+(xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (err) {
      console.error('An error happened', err);
  }
);

const animate = () => {
  renderer.render(scene, camera);
  // 첫번째 Cube 회전
  box.rotation.y += 0.01;
  controls.update();
  requestAnimationFrame(animate);
};

// 이벤트리스너를 통한 브라우저 사이즈 감지 및 랜더링 사이즈, 카메라 재설정
window.addEventListener('resize', function(){
  console.log(`너비 ${this.innerWidth}`);
  console.log(`높이 ${this.innerHeight}`);

  const width = this.innerWidth;
  const height = this.innerHeight;

  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

});
animate();

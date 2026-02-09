import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export class ProductViewer {
  constructor(container) {
    this.container = container;
    
    // Scene setup
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    container.appendChild(this.renderer.domElement);
    
    // Set renderer size
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 10, 10);
    this.scene.add(ambientLight, directionalLight);
    
    // Camera positioning
    this.camera.position.z = 5;
    
    // Controls setup
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    
    // Bind methods
    this.onWindowResize = this.onWindowResize.bind(this);
    
    // Responsive handling
    window.addEventListener('resize', this.onWindowResize);
    
    // Start animation
    this.animate();
  }

  onWindowResize() {
    if (!this.container) return;
    
    this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  async loadModel(modelPath) {
    const loader = new GLTFLoader();
    try {
      const gltf = await loader.loadAsync(modelPath);
      this.scene.add(gltf.scene);
      this.fitCameraToModel(gltf.scene);
    } catch (error) {
      console.error('Error loading model:', error);
    }
  }

  fitCameraToModel(model) {
    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    
    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = this.camera.fov * (Math.PI / 180);
    const cameraZ = Math.abs(maxDim / Math.tan(fov / 2));
    
    this.camera.position.z = cameraZ * 1.5;
    this.controls.target.copy(center);
  }

  dispose() {
    window.removeEventListener('resize', this.onWindowResize);
    this.renderer.dispose();
    this.controls.dispose();
  }
} 
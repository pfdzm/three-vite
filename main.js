import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

let camera, scene, renderer
let geometry, material, mesh
let controls
let pointLight

init()

function init() {
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    10
  )
  camera.position.z = 1

  scene = new THREE.Scene()

  geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
  material = new THREE.MeshStandardMaterial()

  mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  pointLight = new THREE.PointLight(0xf0aa00)
  pointLight.position.set(0, 0, 1)
  scene.add(pointLight)

  const pointLight2 = new THREE.PointLight(0xffff00)
  pointLight2.position.set(0.8, 0.8, 0.8)
  scene.add(pointLight2)

  const pl3 = new THREE.PointLight(0xfcccaa)
  pl3.position.set(0, 2, 0)
  scene.add(pl3)

  
  const sphereSize = 1
  const pointLightHelper = new THREE.PointLightHelper(pointLight, sphereSize)
  const pointLightHelper2 = new THREE.PointLightHelper(pointLight2, sphereSize)
  const pointLightHelper3 = new THREE.PointLightHelper(pl3, sphereSize)
  
  scene.add(pointLightHelper)
  scene.add(pointLightHelper2)
  scene.add(pointLightHelper3)

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setAnimationLoop(animation)
  document.body.appendChild(renderer.domElement)
  controls = new OrbitControls(camera, renderer.domElement)
}

function animation(time) {
  mesh.rotation.x = time / 3000
  mesh.rotation.y = time / 5000

  controls.update()

  renderer.render(scene, camera)
}

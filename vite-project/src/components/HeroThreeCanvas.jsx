import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function HeroThreeCanvas() {
  const mountRef = useRef(null)

  useEffect(() => {
    // Skip under reduced motion or on small screens
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.innerWidth < 768
    if (prefersReducedMotion || isMobile) return

    const container = mountRef.current
    if (!container) return

    // Scene, Camera, Renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 7

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // Geometry: Icosahedron Wireframe
    const geometry = new THREE.IcosahedronGeometry(2.4, 2)
    const wireframeGeometry = new THREE.WireframeGeometry(geometry)

    // Material with Ember & Gold gradient tint
    const material = new THREE.LineBasicMaterial({
      color: 0xE85C1F,
      transparent: true,
      opacity: 0.22,
      linewidth: 1,
    })

    const mesh = new THREE.LineSegments(wireframeGeometry, material)
    scene.add(mesh)

    // Secondary inner wireframe node for depth
    const innerGeometry = new THREE.IcosahedronGeometry(1.5, 1)
    const innerWireframe = new THREE.WireframeGeometry(innerGeometry)
    const innerMaterial = new THREE.LineBasicMaterial({
      color: 0xD9A441,
      transparent: true,
      opacity: 0.16,
    })
    const innerMesh = new THREE.LineSegments(innerWireframe, innerMaterial)
    scene.add(innerMesh)

    // Mouse drift tracking
    let targetX = 0
    let targetY = 0

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      targetX = (clientX / window.innerWidth - 0.5) * 0.8
      targetY = (clientY / window.innerHeight - 0.5) * 0.8
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation Loop
    let reqId
    const animate = () => {
      mesh.rotation.x += 0.0015
      mesh.rotation.y += 0.0025

      innerMesh.rotation.x -= 0.002
      innerMesh.rotation.y -= 0.001

      // Subtle mouse drift interpolation
      mesh.position.x += (targetX - mesh.position.x) * 0.05
      mesh.position.y += (-targetY - mesh.position.y) * 0.05

      renderer.render(scene, camera)
      reqId = requestAnimationFrame(animate)
    }

    animate()

    // Handle Resize
    const handleResize = () => {
      if (!container) return
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(reqId)
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      geometry.dispose()
      wireframeGeometry.dispose()
      material.dispose()
      innerGeometry.dispose()
      innerWireframe.dispose()
      innerMaterial.dispose()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    />
  )
}

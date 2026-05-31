"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function SpaceCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const W = mount.clientWidth;
    const H = mount.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000005, 1);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000008, 0.004);

    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 2000);
    camera.position.set(0, 8, 55);

    // ── LUZES ──
    scene.add(new THREE.AmbientLight(0x111133, 1.5));
    const sunLight = new THREE.PointLight(0xfff5cc, 4, 300);
    sunLight.position.set(-60, 20, -40);
    scene.add(sunLight);
    const rimLight = new THREE.DirectionalLight(0x4488ff, 0.5);
    rimLight.position.set(1, -1, 0.5);
    scene.add(rimLight);

    // ── SOL ──
    const sunGeo = new THREE.SphereGeometry(8, 64, 64);
    const sunMat = new THREE.MeshBasicMaterial({ color: 0xffdd55 });
    const sun = new THREE.Mesh(sunGeo, sunMat);
    sun.position.set(-60, 20, -80);
    scene.add(sun);
    // Halo do sol
    const haloGeo = new THREE.SphereGeometry(11, 32, 32);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0xff9900,
      transparent: true,
      opacity: 0.08,
      side: THREE.FrontSide,
    });
    sun.add(new THREE.Mesh(haloGeo, haloMat));

    // ── FUNÇÃO PLANETA ──
    function makePlanet(
      radius: number,
      color: number,
      roughness: number,
      emissive: number = 0x000000,
      emissiveIntensity: number = 0
    ) {
      const geo = new THREE.SphereGeometry(radius, 64, 64);
      const mat = new THREE.MeshStandardMaterial({
        color,
        roughness,
        metalness: 0.05,
        emissive,
        emissiveIntensity,
      });
      return new THREE.Mesh(geo, mat);
    }

    // ── ATMOSFERA ──
    function makeAtmosphere(planet: THREE.Mesh, radius: number, color: number, opacity: number) {
      const geo = new THREE.SphereGeometry(radius, 64, 64);
      const mat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity,
        side: THREE.BackSide,
      });
      planet.add(new THREE.Mesh(geo, mat));
    }

    // ── ANÉIS ──
    function makeRings(planet: THREE.Mesh, inner: number, outer: number, color: number) {
      const geo = new THREE.RingGeometry(inner, outer, 128);
      const mat = new THREE.MeshBasicMaterial({
        color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.6,
      });
      const ring = new THREE.Mesh(geo, mat);
      ring.rotation.x = Math.PI / 2.3;
      planet.add(ring);
    }

    // ── TERRA ──
    const earth = makePlanet(3.5, 0x1a4a8a, 0.85);
    scene.add(earth);
    // Continentes simulados
    const landGeo = new THREE.SphereGeometry(3.52, 64, 64);
    const landMat = new THREE.MeshStandardMaterial({
      color: 0x2d6a2d,
      roughness: 1,
      transparent: true,
      opacity: 0.55,
    });
    earth.add(new THREE.Mesh(landGeo, landMat));
    // Nuvens
    const cloudGeo = new THREE.SphereGeometry(3.65, 64, 64);
    const cloudMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.18,
    });
    const clouds = new THREE.Mesh(cloudGeo, cloudMat);
    earth.add(clouds);
    makeAtmosphere(earth, 3.9, 0x4488ff, 0.12);

    // ── LUA ──
    const moon = makePlanet(0.95, 0x888888, 0.95);
    scene.add(moon);

    // ── MARTE ──
    const mars = makePlanet(2.0, 0xaa3311, 0.92);
    scene.add(mars);
    makeAtmosphere(mars, 2.15, 0xff6622, 0.06);
    // Calotas polares
    const polarGeo = new THREE.SphereGeometry(2.01, 32, 32);
    const polarMat = new THREE.MeshBasicMaterial({
      color: 0xffeedd,
      transparent: true,
      opacity: 0.4,
    });
    mars.add(new THREE.Mesh(polarGeo, polarMat));

    // ── SATURNO ──
    const saturn = makePlanet(5.5, 0xc8964a, 0.88);
    scene.add(saturn);
    makeRings(saturn, 7, 12, 0xd4a855);
    makeAtmosphere(saturn, 6.0, 0xffcc66, 0.07);

    // ── PLANETA GELO ──
    const icy = makePlanet(2.8, 0x88ccee, 0.7, 0x224466, 0.05);
    scene.add(icy);
    makeRings(icy, 3.5, 5.2, 0xaaddff);
    makeAtmosphere(icy, 3.1, 0x88ccff, 0.1);

    // ── GIGANTE GASOSO ──
    const giant = makePlanet(6.5, 0xaa6633, 0.75, 0x331100, 0.03);
    scene.add(giant);
    makeAtmosphere(giant, 7.0, 0xff8833, 0.06);

    // ── ESTRELAS ──
    const starGeo = new THREE.BufferGeometry();
    const starCount = 8000;
    const sPos = new Float32Array(starCount * 3);
    const sCol = new Float32Array(starCount * 3);
    const sSiz = new Float32Array(starCount);
    for (let i = 0; i < starCount; i++) {
      sPos[i * 3] = (Math.random() - 0.5) * 1800;
      sPos[i * 3 + 1] = (Math.random() - 0.5) * 1800;
      sPos[i * 3 + 2] = (Math.random() - 0.5) * 1800;
      sSiz[i] = Math.random() * 0.8 + 0.1;
      const t = Math.random();
      if (t < 0.2) { sCol[i*3]=0.5; sCol[i*3+1]=0.7; sCol[i*3+2]=1.0; }
      else if (t < 0.5) { sCol[i*3]=1.0; sCol[i*3+1]=1.0; sCol[i*3+2]=1.0; }
      else if (t < 0.7) { sCol[i*3]=1.0; sCol[i*3+1]=0.95; sCol[i*3+2]=0.7; }
      else { sCol[i*3]=1.0; sCol[i*3+1]=0.6; sCol[i*3+2]=0.4; }
    }
    starGeo.setAttribute("position", new THREE.BufferAttribute(sPos, 3));
    starGeo.setAttribute("color", new THREE.BufferAttribute(sCol, 3));
    starGeo.setAttribute("size", new THREE.BufferAttribute(sSiz, 1));
    const starMat = new THREE.PointsMaterial({
      size: 0.25,
      vertexColors: true,
      transparent: true,
      opacity: 1.0,
      sizeAttenuation: true,
    });
    scene.add(new THREE.Points(starGeo, starMat));

    // ── NEBULOSA ──
    function makeNebula(
      count: number,
      cx: number, cy: number, cz: number,
      spread: number,
      r: number, g: number, b: number,
      opacity: number
    ) {
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(count * 3);
      const col = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        pos[i*3] = cx + (Math.random()-0.5)*spread;
        pos[i*3+1] = cy + (Math.random()-0.5)*spread*0.5;
        pos[i*3+2] = cz + (Math.random()-0.5)*spread;
        col[i*3] = r * (0.6 + Math.random()*0.4);
        col[i*3+1] = g * (0.6 + Math.random()*0.4);
        col[i*3+2] = b * (0.6 + Math.random()*0.4);
      }
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
      const mat = new THREE.PointsMaterial({
        size: 0.6,
        vertexColors: true,
        transparent: true,
        opacity,
      });
      scene.add(new THREE.Points(geo, mat));
    }

    makeNebula(2000, 80, 20, -200, 120, 0.4, 0.1, 1.0, 0.25);
    makeNebula(1500, -100, -30, -180, 100, 0.9, 0.3, 0.1, 0.2);
    makeNebula(1200, 40, -50, -220, 90, 0.1, 0.8, 0.6, 0.18);

    // ── ÓRBITAS (dados) ──
    const orbits = [
      { obj: earth, rx: 38, rz: 12, speed: 0.0025, angle: 0.0 },
      { obj: mars,  rx: 58, rz: 18, speed: 0.0015, angle: 2.0 },
      { obj: saturn,rx: 95, rz: 28, speed: 0.0007, angle: 4.2 },
      { obj: icy,   rx: 130,rz: 36, speed: 0.0004, angle: 1.5 },
      { obj: giant, rx: 160,rz: 44, speed: 0.0002, angle: 3.1 },
    ];

    // Mouse
    let mx = 0, my = 0;
    const onMouseMove = (e: MouseEvent) => {
      const r = mount.getBoundingClientRect();
      mx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      my = -((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    // Touch
    const onTouch = (e: TouchEvent) => {
      const r = mount.getBoundingClientRect();
      mx = ((e.touches[0].clientX - r.left) / r.width - 0.5) * 2;
      my = -((e.touches[0].clientY - r.top) / r.height - 0.5) * 2;
    };
    window.addEventListener("touchmove", onTouch);

    let t = 0;
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      t += 0.005;

      // Câmera cinematográfica
      camera.position.x += (mx * 12 - camera.position.x) * 0.015;
      camera.position.y += (my * 6 + 8 - camera.position.y) * 0.015;
      camera.lookAt(0, 0, 0);

      // Planetas em órbita
      orbits.forEach(o => {
        o.angle += o.speed;
        o.obj.position.x = Math.cos(o.angle) * o.rx;
        o.obj.position.z = Math.sin(o.angle) * o.rz - 20;
        o.obj.position.y = Math.sin(o.angle * 0.7) * 3;
        o.obj.rotation.y += 0.004;
      });

      // Lua orbita a Terra
      moon.position.x = earth.position.x + Math.cos(t * 3) * 6;
      moon.position.z = earth.position.z + Math.sin(t * 3) * 6;
      moon.position.y = earth.position.y + Math.sin(t * 3) * 0.8;

      // Nuvens giram
      clouds.rotation.y += 0.0008;

      // Sol pulsa levemente
      const pulse = 1 + Math.sin(t * 0.8) * 0.012;
      sun.scale.setScalar(pulse);

      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full" />;
}

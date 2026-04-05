import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { skills } from "../lib/db/skills";
import avatar from "../assets/avatar.png";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const DEFAULT_ICON_BASE_SIZE = 4.2;

const universeSkills = skills.filter((skill) => skill.isUniverse);
const assert = (condition: boolean, message: string) => {
  if (!condition) {
    throw new Error(message);
  }
};
const runConfigChecks = () => {
  assert(
    typeof avatar === "string" && avatar.trim().length > 0,
    "Avatar es requerido",
  );
  assert(
    Array.isArray(universeSkills) && universeSkills.length > 0,
    "datos vacios",
  );
};

type DisposableMaterial = THREE.Material & {
  map?: THREE.Texture | null;
};

const roundReact = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
) => {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
};

const createTextSprite = (text: string) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas context not found");

  canvas.width = 512;
  canvas.height = 128;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.font = "bold 48px Arial";
  ctx.fillStyle = "rgba(15, 23, 42, 0.75)";
  roundReact(ctx, 12, 24, 488, 80, 18);
  ctx.fill();

  ctx.strokeStyle = "rgba(148, 163, 184, 0.55)";
  ctx.lineWidth = 3;
  roundReact(ctx, 12, 24, 488, 80, 18);
  ctx.stroke();

  ctx.fillStyle = "#e2e8f0";
  ctx.font = "bold 36px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, canvas.width / 2, canvas.height / 2 + 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;

  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthWrite: false,
  });

  const sprite = new THREE.Sprite(material);
  sprite.scale.set(9, 2.25, 1);
  return sprite;
};

const createFallbackBody = (data: {
  radius: number;
  color: number;
  type: string;
}) => {
  const group = new THREE.Group();

  const sphereGeometry = new THREE.SphereGeometry(
    Math.max(data.radius * 0.55, 0.8),
    28,
    28,
  );
  const sphereMaterial = new THREE.MeshStandardMaterial({
    color: data.color,
    roughness: 0.68,
    metalness: data.type === "database" ? 0.28 : 0.12,
    emissive: data.color,
    emissiveIntensity: 0.14,
  });

  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  group.add(sphere);

  return group;
};

const createIconPlate = (
  data: { radius: number; color: number },
  texture: any,
) => {
  const group = new THREE.Group();
  const size = data.radius || DEFAULT_ICON_BASE_SIZE;

  const plateGeometry = new THREE.CircleGeometry(size, 64);
  const plateMaterial = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    alphaTest: 0.08,
    side: THREE.DoubleSide,
    depthWrite: false,
  });

  const plate = new THREE.Mesh(plateGeometry, plateMaterial);
  group.add(plate);

  const haloGeometry = new THREE.RingGeometry(size * 1.03, size * 1.22, 64);
  const haloMaterial = new THREE.MeshBasicMaterial({
    color: data.color,
    transparent: true,
    opacity: 0.28,
    side: THREE.DoubleSide,
    depthWrite: false,
  });
  const halo = new THREE.Mesh(haloGeometry, haloMaterial);
  halo.position.z = -0.01;
  group.add(halo);

  return group;
};

const loadTexture = (url: string) => {
  return new Promise((resolve, reject) => {
    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin("anonymous");
    loader.load(
      url,
      (texture: THREE.Texture) => {
        if ("colorSpace" in texture) {
          texture.colorSpace = THREE.SRGBColorSpace;
        }
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        resolve(texture);
      },
      undefined,
      (error) => reject(error),
    );
  });
};
const createVisualBody = async (data: {
  visualType: string;
  logo: string;
  name: string;
  radius: number;
  color: number;
  type: string;
}) => {
  if (data.visualType !== "image" || !data.logo) {
    return createFallbackBody(data);
  }

  try {
    const texture = await loadTexture(data.logo);
    return createIconPlate(data, texture);
  } catch (error) {
    console.warn(
      `No se pudo cargar la imagen para ${data.name}. Se usará fallback.`,
      error,
    );
    return createFallbackBody(data);
  }
};

const initUniverse = async (container: HTMLDivElement) => {
  runConfigChecks();

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x020617);
  scene.fog = new THREE.Fog(0x020617, 120, 240);

  const width = container.clientWidth || window.innerWidth;
  const height = container.clientHeight || window.innerHeight;

  const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 2000);
  camera.position.set(0, 24, 74);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  container.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.minDistance = 24;
  controls.maxDistance = 220;
  controls.maxPolarAngle = Math.PI / 1.85;

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.24);
  scene.add(ambientLight);

  const centerLight = new THREE.PointLight(0xfff4c2, 160, 2000);
  centerLight.position.set(0, 0, 0);
  scene.add(centerLight);

  const starGeometry = new THREE.BufferGeometry();
  const starVertices = [];
  for (let i = 0; i < 5000; i += 1) {
    const x = (Math.random() - 0.5) * 1800;
    const y = (Math.random() - 0.5) * 1200;
    const z = (Math.random() - 0.5) * 1800;
    starVertices.push(x, y, z);
  }
  starGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(starVertices, 3),
  );
  const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.9,
    sizeAttenuation: true,
  });
  const stars = new THREE.Points(starGeometry, starMaterial);
  scene.add(stars);

  const avatarData = {
    name: "Mi Avatar",
    radius: 8.5,
    color: 0xffffff,
    type: "avatar",
    visualType: "image",
    logo: avatar,
  };

  const avatarCore = await createVisualBody(avatarData);
  avatarCore.position.set(0, 0, 0);
  scene.add(avatarCore);

  const avatarHaloGeometry = new THREE.RingGeometry(9.3, 10.8, 96);
  const avatarHaloMaterial = new THREE.MeshBasicMaterial({
    color: 0x60a5fa,
    transparent: true,
    opacity: 0.16,
    side: THREE.DoubleSide,
    depthWrite: false,
  });
  const avatarHalo = new THREE.Mesh(avatarHaloGeometry, avatarHaloMaterial);
  avatarHalo.rotation.x = Math.PI / 2;
  scene.add(avatarHalo);

  const coreLabel = createTextSprite("GIAN PIERRE CASTILLO");
  coreLabel.position.set(0, -12.5, 0);
  scene.add(coreLabel);

  const planetVisuals: THREE.Group<THREE.Object3DEventMap>[] = [];
  const planetPivots: {
    pivot: THREE.Object3D<THREE.Object3DEventMap>;
    speed: number;
  }[] = [];
  const billboardBodies = [avatarCore];

  for (const data of universeSkills) {
    const orbitPoints = [];
    const segments = 128;
    for (let i = 0; i <= segments; i += 1) {
      const theta = (i / segments) * Math.PI * 2;
      orbitPoints.push(
        new THREE.Vector3(
          Math.cos(theta) * data.orbitRadius,
          0,
          Math.sin(theta) * data.orbitRadius,
        ),
      );
    }

    const orbitGeometry = new THREE.BufferGeometry().setFromPoints(orbitPoints);
    const orbitLine = new THREE.Line(
      orbitGeometry,
      new THREE.LineBasicMaterial({
        color: 0x334155,
        transparent: true,
        opacity: 0.8,
      }),
    );
    scene.add(orbitLine);

    const visualBody = await createVisualBody(data);
    visualBody.position.x = data.orbitRadius;

    if (data.hasRing) {
      const ringGeometry = new THREE.RingGeometry(
        data.radius * 1.35,
        data.radius * 2.1,
        64,
      );
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0xcbd5e1,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.55,
      });
      const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
      ringMesh.rotation.x = Math.PI / 2;
      visualBody.add(ringMesh);
    }

    const label = createTextSprite(data.name);
    label.position.set(0, data.radius + 2.2, 0);
    visualBody.add(label);

    const pivot = new THREE.Object3D();
    pivot.add(visualBody);
    scene.add(pivot);

    planetVisuals.push(visualBody);
    planetPivots.push({ pivot, speed: data.speed });

    if (data.visualType === "image") {
      billboardBodies.push(visualBody);
    }
  }

  const clock = new THREE.Clock();
  let animationId = 0;

  function onResize() {
    const nextWidth = container.clientWidth || window.innerWidth;
    const nextHeight = container.clientHeight || window.innerHeight;
    camera.aspect = nextWidth / nextHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(nextWidth, nextHeight);
  }

  window.addEventListener("resize", onResize);

  function animate() {
    animationId = window.requestAnimationFrame(animate);
    const delta = clock.getDelta();

    avatarHalo.rotation.z += delta * 0.22;
    stars.rotation.y += delta * 0.01;

    planetPivots.forEach((item) => {
      item.pivot.rotation.y += item.speed * delta * 10;
    });

    planetVisuals.forEach((visual) => {
      visual.rotation.y += delta * 0.6 * 10;
    });

    billboardBodies.forEach((body) => {
      body.lookAt(camera.position);
    });

    controls.update();
    renderer.render(scene, camera);
  }

  animate();

  return () => {
    window.cancelAnimationFrame(animationId);
    window.removeEventListener("resize", onResize);
    controls.dispose();

    scene.traverse((object) => {
      const geometryCarrier = object as THREE.Object3D & {
        geometry?: THREE.BufferGeometry;
      };
      geometryCarrier.geometry?.dispose();

      const materialCarrier = object as THREE.Object3D & {
        material?: THREE.Material | THREE.Material[];
      };
      const { material } = materialCarrier;

      const disposeMaterial = (entry: THREE.Material) => {
        const textureMaterial = entry as DisposableMaterial;
        textureMaterial.map?.dispose?.();
        textureMaterial.dispose();
      };

      if (Array.isArray(material)) {
        material.forEach(disposeMaterial);
      } else if (material) {
        disposeMaterial(material);
      }
    });

    renderer.dispose();
    if (renderer.domElement.parentNode === container) {
      container.removeChild(renderer.domElement);
    }
  };
};

const UniversoHabilidades = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [showIntro, setShowIntro] = useState(true);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) return undefined;

    let cleanup: (() => void) | null = null;
    let cancelled = false;

    const introTimer = window.setTimeout(() => {
      setShowIntro(false);
    }, 2200);

    (async () => {
      try {
        cleanup = await initUniverse(mountNode);
        if (!cancelled) {
          setStatus("ready");
        }
      } catch (err) {
        console.error(err);
        if (!cancelled) {
          setError(
            err instanceof Error
              ? err.message
              : "No se pudo inicializar la escena 3D.",
          );
          setStatus("error");
        }
      }
    })();

    return () => {
      cancelled = true;
      window.clearTimeout(introTimer);
      cleanup?.();
    };
  }, []);

  return (
    <div className="w-full h-[600px] rounded-4xl overflow-hidden !bg-[#ffffffe6] backdrop-saturate-[200%] backdrop-blur-[12px] dark:!bg-[#233831b3] dark:backdrop-blur-[12px] shadow-2xl">
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background: "#020617",
          position: "relative",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            background:
              "radial-gradient(circle at center, rgba(15,23,42,0.72) 0%, rgba(2,6,23,0.94) 62%, rgba(2,6,23,1) 100%)",
            color: "#e2e8f0",
            zIndex: 10,
            opacity: showIntro ? 1 : 0,
            pointerEvents: showIntro ? "auto" : "none",
            transition: "opacity 1s ease",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "clamp(3rem, 9vw, 7rem)",
              fontWeight: 800,
              letterSpacing: "0.08em",
              textShadow: "0 0 24px rgba(96,165,250,0.45)",
            }}
          >
            {"</>"}
          </div>
          <div
            style={{
              marginTop: 12,
              fontSize: "clamp(0.95rem, 2vw, 1.3rem)",
              color: "#94a3b8",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Developer full stack & GIS
          </div>
        </div>

        {status === "loading" && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#cbd5e1",
              zIndex: 2,
              fontSize: 16,
            }}
          >
            Cargando tecnologías...
          </div>
        )}

        {status === "error" && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
              color: "#fecaca",
              zIndex: 20,
              textAlign: "center",
              background: "rgba(2, 6, 23, 0.9)",
            }}
          >
            <div>
              <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>
                No se pudo iniciar la escena
              </div>
              <div style={{ fontSize: 14, color: "#fca5a5" }}>{error}</div>
            </div>
          </div>
        )}

        <div ref={mountRef} style={{ width: "100%", height: "100%" }} />
      </div>
    </div>
  );
};

export default UniversoHabilidades;

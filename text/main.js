
// Main Function
const init = () =>
{
    // import typefaceFont from './fonts/Truculenta_Regular.json'
    
    // const gltfLoader = new gltfLoader();

    // Debugger
    const gui = new dat.GUI({ width: 300 }); //controllare come si creano dei Folders

    // Scene erstellen
    const scene = new THREE.Scene();

    /**
     * Textures
     */
    // const textureLoader = new THREE.TextureLoader()
    // const particleTexture = textureLoader.load('../textures/particles/1.png')

    /**
     * font
     */

     const fontLoader = new THREE.FontLoader();
     fontLoader.load(
        './fonts/Truculenta_Regular.json',
        (font) =>
        {
        }
     )
     fontLoader.load(
        './fonts/Truculenta_Regular.json',
        (font) =>
        {
            const textGeometry = new THREE.TextGeometry(
                'Alessandro Moretti',
                {
                    font: font,
                    size: 0.75,
                    height: 0.02,
                    curveSegments: 2,
                    bevelEnabled: true,
                    bevelThickness: 0.2,
                    bevelSize: 0.02,
                    bevelOffset: 0,
                    bevelSegments: 5
                }
            )
            textGeometry.center();
            const textMaterial = new THREE.MeshStandardMaterial({ color: '#fcba03'}) //wireframe: true
            textMaterial.emissive.color = '#fcba03'
            textMaterial.emissiveIntensity = 12;
            console.log(textMaterial.emissive)
            const text = new THREE.Mesh(textGeometry, textMaterial)
            scene.add(text)
        }
    )

    // // 2 Schrift
    // fontLoader.load(
    //     './fonts/Truculenta_Regular.json',
    //     (font) =>
    //     {
    //     }
    //  )
    //  fontLoader.load(
    //     './fonts/Truculenta_Regular.json',
    //     (font) =>
    //     {
    //         const textGeometry1 = new THREE.TextGeometry(
    //             'Anwendungsentwickler moretti@gianmarialessandro.com',
    //             {
    //                 font: font,
    //                 size: 0.15,
    //                 height: 0.02,
    //                 curveSegments: 2,
    //                 bevelEnabled: true,
    //                 bevelThickness: 0.04,
    //                 bevelSize: 0.02,
    //                 bevelOffset: 0,
    //                 bevelSegments: 5
    //             }
    //         )
    //         textGeometry1.computeBoundingBox()
    //         console.log(textGeometry1.boundingBox)
    //         textGeometry1.translate(
    //             - textGeometry1.boundingBox.max.x * 0.5,
    //             - textGeometry1.boundingBox.max.y - 0.9,
    //             - textGeometry1.boundingBox.max.z * 0.5
    //         )
    //         const textMaterial1 = new THREE.MeshNormalMaterial({ color: '#fcba03'}) //wireframe: true
    //         textMaterial1.emissive.color = '#fcba03'
    //         textMaterial1.emissiveIntensity = 12;
    //         const text1 = new THREE.Mesh(textGeometry1, textMaterial1)
    //         scene.add(text1)
    //     }
    // )
    /**
     * Particles
     */
    // Geometry



    // const particlesGeometry = new THREE.SphereGeometry( 0.8, 64, 32 );
    // console.log(particlesGeometry)
    // const particlesMaterial = new THREE.PointsMaterial()

    // particlesMaterial.size = 0.0064
    // particlesMaterial.sizeAttenuation = true

    // particlesMaterial.color = new THREE.Color('#ffffff')
    // // Points
    // const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    // scene.add(particles)


    // particles.name = 'particles1';
    

    /**
     * Lights
     */
    const ambientlight = new THREE.AmbientLight('#ffffff', 0.5)

    const directionalLight = new THREE.DirectionalLight('#ffffff',  0.5);
    directionalLight.position.set(10, 3, 10);
    scene.add(directionalLight);

    

    /**
     * Sizes
     */
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    window.addEventListener('resize', () =>
    {
        // Update sizes
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight

        // Update camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()

        // Update renderer
        renderer.setSize(sizes.width , sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    /**
     * Camera
     */
    // Base camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
    camera.position.z = 3
    scene.add(camera)
        


    
    // Renderer erstellen 
    const renderer = new THREE.WebGLRenderer({ antialias : true }); // Antialias Objekt verbessert die Linienqualität im Bild
    renderer.setSize(window.innerWidth, window.innerHeight );
    renderer.setClearColor('#f5f5f5');      
    renderer.shadowMap.enabled = true;

    document.getElementById('webgl').appendChild(renderer.domElement); // html wird aufgerufen

    // Controls
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    
    
    // Animate
    const tick = () => 
    { 
        // Update Controls
        controls.update();

        // Update particles
        
        // Update sphere
        // var particles = scene.getObjectByName('particles1'); // ruft die plane auf und dannach verarbeitet sie
        // particles.rotation.y += 0.002;
        // particles.rotation.z += 0.002;
        // particles.rotation.x += 0.002;

   
        // Update Renderer
        renderer.render(scene, camera);
   
        // Update Tick auf jeder Frame
        window.requestAnimationFrame(tick); 
   
    }
    tick();
}

init();
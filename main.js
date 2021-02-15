// Main Function
const init = () =>
{
    
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
     * Particles
     */
    // Geometry
    const particlesGeometry = new THREE.SphereGeometry( 0.8, 64, 32 );
    console.log(particlesGeometry)
    const particlesMaterial = new THREE.PointsMaterial()

    particlesMaterial.size = 0.0064
    particlesMaterial.sizeAttenuation = true

    particlesMaterial.color = new THREE.Color('#ffffff')
    // Points
    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)


    particles.name = 'particles1';
    
    


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
    // var scrennHeight = window.innerHeight
    // var scrennWidth = window.innerWidth
    // scrennHeight = scrennHeight;
    const renderer = new THREE.WebGLRenderer({ antialias : true }); // Antialias Objekt verbessert die Linienqualität im Bild
    renderer.setSize( window.innerWidth -(window.innerWidth * 0.2), window.innerHeight - (window.innerHeight * 0.3));
    renderer.setClearColor('#000000');      
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
        // const particles = scene.getObjectByName('particles1');
        // particles.rotation.y += 0.001;
        // particles.rotation.z += 0.001;        
        var particles = scene.getObjectByName('particles1'); // ruft die plane auf und dannach verarbeitet sie
        particles.rotation.y += 0.002;
        particles.rotation.z += 0.002;
        particles.rotation.x += 0.002;

   
        // Update Renderer
        renderer.render(scene, camera);
   
        // Update Tick auf jeder Frame
        window.requestAnimationFrame(tick); 
   
    }
    tick();
}

init();
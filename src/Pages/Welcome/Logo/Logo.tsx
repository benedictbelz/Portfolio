import * as React from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { gsap } from 'gsap';
import './Logo.scss';

interface Props {
    loading: boolean;
    handleRender: Function;
}
export class Logo extends React.Component<Props, {}> {
    componentDidMount() {
        /******************************/
        /*          GENERAL           */
        /******************************/

        // CREATE SCENE
        const scene = new THREE.Scene();
        // CREATE CAMERA
        const aspect = 500 / 500;
        const d = 1.75;
        const camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, 1, 1000);
        camera.position.set(20, 20, 20);
        camera.lookAt(scene.position);
        // CREATE LIGHT
        const light = new THREE.AmbientLight(0xffffff, 1);
        scene.add(light);

        /******************************/
        /*          OBJECTS           */
        /******************************/

        // CREATE OBJECTS
        const logoFront = new THREE.Object3D();
        const logoBack = new THREE.Object3D();
        const group = new THREE.Object3D();
        group.add(logoFront);
        group.add(logoBack);
        scene.add(group);
        // CREATE OBJECT LOADER
        const objLoader = new OBJLoader();
        objLoader.setPath('/assets/logo/');
        // CREATE MTL LOADER
        const mtlLoader = new MTLLoader();
        mtlLoader.setPath('/assets/logo/');
        // LOAD OBJECT
        mtlLoader.load('logoFront.mtl', material => {
            material.preload();
            objLoader.setMaterials(material);
            objLoader.load('logoFront.obj', object => logoFront.add(object));
        });
        // LOAD OBJECT
        mtlLoader.load('logoBack.mtl', material => {
            material.preload();
            objLoader.setMaterials(material);
            objLoader.load('logoBack.obj', object => logoBack.add(object));
        });

        /******************************/
        /*           RENDER           */
        /******************************/

        // CREATE RENDERER
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        // SET COLOR
        renderer.setClearColor('#FFFFFF');
        // CREATE CANVAS
        document.getElementById('logo').appendChild(renderer.domElement);
        // RENDER
        const render = function () {
            // RENDER AT 60FPS
            requestAnimationFrame(render);
            // RENDER
            renderer.render(scene, camera);
        };
        render();
        this.props.handleRender();

        /******************************/
        /*         ANIMATION          */
        /******************************/

        const interval = setInterval(() => {
            if (this.props.loading) {
                clearInterval(interval);
                setTimeout(() => startAnimation(), 500);
            }
        }, 50);

        function startAnimation() {
            // ANIMATE TIMELINE
            const timeline = gsap.timeline();
            timeline.to(group.rotation, { duration: 0, y: THREE.MathUtils.degToRad(30), ease: 'power2.easeOut' });
            timeline.to(logoFront.position, { duration: 0, y: -0.25, ease: 'power2.easeOut' });
            timeline.to(logoBack.position, { duration: 0, y: 0.25, ease: 'power2.easeOut' });
            timeline.to(group.rotation, { duration: 1.5, y: THREE.MathUtils.degToRad(0), ease: 'power2.easeOut' });
            timeline.to(logoFront.position, { duration: 1.5, y: 0, ease: 'power2.easeOut' }, '-=1.5');
            timeline.to(logoBack.position, { duration: 1.5, y: 0, ease: 'power2.easeOut' }, '-=1.5');
            // CREATE MOUSE
            const mouse = new THREE.Vector2();
            // ANIMATE MOUSE
            setTimeout(
                () =>
                    window.addEventListener('mousemove', function (event) {
                        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
                        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
                        gsap.to(group.rotation, { duration: 2, y: mouse.x / 5, ease: 'power2.easeOut' });
                        gsap.to(logoFront.position, { duration: 2, y: -mouse.y / 20, ease: 'power2.easeOut' });
                        gsap.to(logoBack.position, { duration: 2, y: mouse.y / 20, ease: 'power2.easeOut' });
                    }),
                1250
            );
        }
    }

    render() {
        return <></>;
    }
}

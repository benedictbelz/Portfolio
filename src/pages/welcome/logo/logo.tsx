import * as React from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { Browser } from '../../../stores/browser';
import './logo.scss';

export class Logo extends React.Component {
    private id: number;
    private renderer: THREE.WebGLRenderer;
    private mouse: (event: MouseEvent) => void;

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
        const light = new THREE.AmbientLight(0xffffff, Math.PI);
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
        let count = 0;
        mtlLoader.load('logoFront.mtl', material => {
            material.preload();
            objLoader.setMaterials(material);
            objLoader.load('logoFront.obj', object => {
                logoFront.add(object);
                if (++count === 2) {
                    Browser.setState({ logo: true });
                    setTimeout(() => startAnimation(), 500);
                }
            });
        });
        // LOAD OBJECT
        mtlLoader.load('logoBack.mtl', material => {
            material.preload();
            objLoader.setMaterials(material);
            objLoader.load('logoBack.obj', object => {
                logoBack.add(object);
                if (++count === 2) {
                    Browser.setState({ logo: true });
                    setTimeout(() => startAnimation(), 500);
                }
            });
        });

        /******************************/
        /*           RENDER           */
        /******************************/

        // CREATE RENDERER
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        // SET COLOR
        this.renderer.setClearColor('#FFFFFF');
        // CREATE CANVAS
        document.getElementById('logo').appendChild(this.renderer.domElement);
        // RENDER
        const render = () => {
            this.id = requestAnimationFrame(render);
            this.renderer.render(scene, camera);
        };
        render();

        /******************************/
        /*         ANIMATION          */
        /******************************/

        const startAnimation = () => {
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
            setTimeout(() => {
                this.mouse = (event: MouseEvent) => {
                    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
                    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
                    gsap.to(group.rotation, { duration: 1, y: mouse.x / 5, ease: 'power2.easeOut' });
                    gsap.to(logoFront.position, { duration: 1, y: -mouse.y / 20, ease: 'power2.easeOut' });
                    gsap.to(logoBack.position, { duration: 1, y: mouse.y / 20, ease: 'power2.easeOut' });
                };
                window.addEventListener('mousemove', this.mouse);
            }, 1250);
        };
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.id);
        window.removeEventListener('mousemove', this.mouse);
        this.renderer.dispose();
        this.renderer.domElement.remove();
    }

    render() {
        return <></>;
    }
}

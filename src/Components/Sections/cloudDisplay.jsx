import * as THREE from "three";
import { Euler} from "three";
import { curvePoints } from "../../Experience";



export const cloudDisplay = () => {
    return ([
        {
            segments:20,
            position: new THREE.Vector3(
                curvePoints[0].x - 20,
                curvePoints[0].y + 4,
                curvePoints[0].z - 80
            ),
            rotation: new Euler(0, Math.PI / 3, 0),
        },
        {
            color: '#f1801e',
            width: 10,
            opacity: 0.2,
            position: new THREE.Vector3(
                curvePoints[0].x - 2,
                curvePoints[0].y - 4,
                curvePoints[0].z - 15
            ),
        },
        {
            color: '#f1801e',
            width: 20,
            opacity: 0.5,
            position: new THREE.Vector3(
                curvePoints[1].x + 10,
                curvePoints[1].y - 4,
                curvePoints[1].z + 64
            ),
        },
        {

            position: new THREE.Vector3(
                curvePoints[1].x - 20,
                curvePoints[1].y + 4,
                curvePoints[1].z - 28
            ),
            rotation: new Euler(0, Math.PI / 7, 0),
        },
        {

            position: new THREE.Vector3(
                curvePoints[1].x - 20,
                curvePoints[1].y + 4,
                curvePoints[1].z - 28
            ),
            rotation: new Euler(0, Math.PI / 7, 0),
        },
        {
            width: 40,
            depth: 2,
            rotation: new Euler(0, Math.PI / 7, 0),
            position: new THREE.Vector3(
                curvePoints[2].x + 20,
                curvePoints[2].y + 4,
                curvePoints[2].z - 58
            ),
        },
        {
            width: 20,
            position: new THREE.Vector3(
                curvePoints[3].x + 20,
                curvePoints[3].y + 4,
                curvePoints[3].z - 28
            ),
        },
        {
            width: 10,
            depth: 1.5,
            position: new THREE.Vector3(
                curvePoints[3].x - 10,
                curvePoints[3].y + 2,
                curvePoints[3].z - 60
            ),
        },
        {
            depth: 2,
            position: new THREE.Vector3(
                curvePoints[3].x + 10,
                curvePoints[3].y - 3,
                curvePoints[3].z - 40
            ),
        },
        {
            width: 20,
            position: new THREE.Vector3(
                curvePoints[4].x,
                curvePoints[4].y - 2,
                curvePoints[4].z + 60
            ),
        },
        {
            width: 10,
            depth: 2,
            position: new THREE.Vector3(
                curvePoints[4].x - 10,
                curvePoints[4].y + 2,
                curvePoints[4].z
            ),
        },
        {
            width: 30,
            depth: 2,
            position: new THREE.Vector3(
                curvePoints[4].x - 20,
                curvePoints[4].y + 2,
                curvePoints[4].z - 50
            ),
        },
        {
            width: 10,
            opacity: 0.7,
            position: new THREE.Vector3(
                curvePoints[5].x - 10,
                curvePoints[5].y + 2,
                curvePoints[5].z
            ),
        },
        {
            width: 10,
            opacity: 0.7,
            position: new THREE.Vector3(
                curvePoints[5].x + 20,
                curvePoints[5].y + 2,
                curvePoints[5].z - 30
            ),
        },
        {
            width: 20,
            opacity: 0.7,
            position: new THREE.Vector3(
                curvePoints[6].x - 10,
                curvePoints[6].y + 2,
                curvePoints[6].z - 10
            ),
        },
        {
            width: 20,
            opacity: 0.7,
            position: new THREE.Vector3(
                curvePoints[6].x - 20,
                curvePoints[6].y - 2,
                curvePoints[6].z + 50
            ),
        },]
    )
}
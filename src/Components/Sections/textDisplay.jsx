import * as THREE from "three";
import { curvePoints } from "../../Experience";


export const textDisplay = () => {
  return (
    [{
      cameraRailDistance: 1.5,
      position: new THREE.Vector3(
        curvePoints[0].x + 0.5,
        curvePoints[0].y + 0.2,
        curvePoints[0].z - 1
      ),
      title: "Welcome to Mei's sky!",
      subtitle: "\nHave a seat and enjoy the journey"
    }, {
      cameraRailDistance: -1,
      position: new THREE.Vector3(
        curvePoints[1].x - 5,
        curvePoints[1].y + 3,
        curvePoints[1].z
      ),
      title: "About me",
      body: "\nI bring a vibrant energy to my work, spreading positivity and joy among colleagues. As a developer, I believe that a happy heart leads to brilliant ideas and extraordinary creations, making every project a delightful adventure."
    },
    {
      cameraRailDistance: 1.5,
      position: new THREE.Vector3(
        curvePoints[2].x + 2,
        curvePoints[2].y + 2,
        curvePoints[2].z
      ),
      title: "Achievements",
      subtitle: "\nGraduate Jun 2023 Haaga-Helia ammattikorkeakoulu Finland ",
      body: "\nAWS Certified Solutions Architect- Associate "
    },
    {
      cameraRailDistance: - 1.5,
      position: new THREE.Vector3(
        curvePoints[3].x + 6,
        curvePoints[3].y + 3,
        curvePoints[3].z - 45
      ),
      title: "Work Experences 2023",
      subtitle: "Junior Software Developer 2022-2023 NordCloud Oy",
      body: `\nKey responsibilities:
    \n1)Developing and maintaining software applications that meet the needs of clients, using both front-end and back-end technologies.
    \n2)Conducting code reviews and providing feedback to ensure best practices and high-quality code.
    \n3)Collaborating with cross-functional teams to gather requirements, design solutions, and deliver high-quality products.
    \n4)Troubleshooting and resolving technical issues as they arise. Participating in project planning, estimation, and delivery processes.
    `
    },
    {
      cameraRailDistance: 1,
      position: new THREE.Vector3(
        curvePoints[3].x - 2,
        curvePoints[3].y + 3,
        curvePoints[3].z - 30
      ),
      title: "Work Experences",
      subtitle: `Fullstack developer trainee FEB 2022- MAY 2023 Intergrify Oy`,
      body: `\nKey responsibilities:
    \n1)Learning and practicing software development using front-end and back-end technologies.
    \n2)Providing support to team members as needed`

    },
    {
      cameraRailDistance: 1,
      position: new THREE.Vector3(
        curvePoints[3].x + 2,
        curvePoints[3].y + 3,
        curvePoints[3].z
      ),
      title: "Work Experences",
      subtitle: "Sales AUG 2021- JAN 2022 Aseanic Trading Oy",
      body: `\nKey responsibilities:
    \n1)Processing sales transactions accurately and efficiently.
    \n2)Providing information and advice to customers on products, prices, and availability.
    \n3)Providing excellent customer service to ensure customer satisfaction and loyalty.`
    },
    {
      cameraRailDistance: -1.5,
      position: new THREE.Vector3(
        curvePoints[4].x - 8,
        curvePoints[4].y + 2,
        curvePoints[4].z
      ),
      title: "My Project",
      subtitle: `Mini-musuem App`,
      body: `In this project, Expo, React Native, and React Native Elements were used to create a seamless user experience. User authentication was handled through Firebase email authentication, and user information was stored in Cloud Firestore. React Navigation was implemented for smooth screen navigation, and The Metropolitan Museum of Art Collection API provided enriched content. React's useState and useEffect hooks managed gallery lists and API data fetching.
    \nGithub:https://github.com/MeiSun227/mini-museum-app`
    },
    {
      cameraRailDistance: 1,
      position: new THREE.Vector3(
        curvePoints[4].x,
        curvePoints[4].y + 3,
        curvePoints[4].z - 60
      ),
      subtitle: `HSl Bike Journy Backend`,
      body: `This Express application serves as a foundation for developing Bike data web applications. It offers a setup for efficiently managing routes, middleware, and server configuration. The application utilizes data sourced from HSL (Helsinki Regional Transport Authority) and stores them in a relational database. Testing API endpoints has been done using Jest and Supertest
    \nGithub:https://github.com/MeiSun227/bikeJourney-api`
    },
    {
      cameraRailDistance: 1.5,
      position: new THREE.Vector3(
        curvePoints[4].x + 4,
        curvePoints[4].y + 3,
        curvePoints[4].z - 30
      ),
      subtitle: `HSl Bike Journy Frontend`,
      body: `This project is a collaborative effort with the backend, which can be accessed through the Bike Journey API. It retrieves data from the a backends REST API and presents it using Material UI components. The project includes unit tests for the components and has the potential for future enhancements, such as incorporating end-to-end testing using tools like Cypress. Lottie React is employed to introduce captivating animation effects on the landing page.
    \nKey features of the project encompass a dedicated single station page that showcases comprehensive station information alongside an interactive map. Additionally, there is a station table equipped with a search bar for convenient exploration, and a journey table featuring search functionality, pagination, and column sorting to facilitate efficient data navigation
    \nGithub:https://github.com/MeiSun227/bikeJourneyFrontend`
    },
    {
      cameraRailDistance: -2.5,
      position: new THREE.Vector3(
        curvePoints[5].x,
        curvePoints[5].y + 3,
        curvePoints[5].z
      ),
      title: "Tech Stacks:",
      subtitle: `React\nNode.js\nExpress.js\nCI/CD\nDocker\nAWS Cloud\nUX design\nTypescript\nSQL&NoSQL\nUnit testing\nRedux\nGrapQL\nReact Native`
    },
    {
      cameraRailDistance: 2,
      position: new THREE.Vector3(
        curvePoints[6].x + 2,
        curvePoints[6].y,
        curvePoints[6].z - 5
      ),
      title: "How is the journey? Interesting? Want to know more?"
    }])
}

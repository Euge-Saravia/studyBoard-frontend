
# StudyBoard ✏️ 📚

## Índice

- [Proyecto 📝](#proyecto-)
    - [Diseño](#diseño-)
- [Diagramas](#diagrama-)
    - [Diagrama de flujo](#diagrama-de-flujo-)
    - [Diagrama de datos](#diagrama-de-datos-)
- [Instalación 🛠️](#installation-)
    - [Requerimientos](#requerimientos-)
- [Estructura del proyecto](#estructura-del-proyecto-)
- [Tecnologías](#tecnologias-)
- [Uso](#uso-)
- [Contribución 🤝](#contribution-)
- [Coders👩‍💻](#coders-)
- [Demo](#demo-)


## Proyecto 

Study Board permite a los usuarios crear grupos de estudio donde pueden compartir y organizar sus ideas utilizando post-its. Cada post-it puede contener texto, fragmentos de código o puntos clave para la discusión del grupo. Además, la aplicación está integrada con un calendario, lo que ayuda a los usuarios a fijar fechas importantes y mantenerse organizados con sus tareas. Esto convierte a Study Board en una herramienta invaluable tanto para estudiantes como para profesionales que buscan una forma eficiente de colaborar y gestionar sus tiempos de estudio.

Nació de la visión de nuestro cliente, Alejandro Arends, quien identificó la necesidad de una plataforma interactiva que haga del estudio una experiencia más colaborativa y organizada.

Este proyecto refleja nuestro compromiso con el uso de la tecnología para resolver problemas reales. Creemos que Study Board fomentará mejores experiencias de aprendizaje, apoyará la colaboración entre usuarios, ayudándoles en sus estudios a través de la organización conjunta.

Es un proyecto full-stack, [aquí está el repositorio del back](https://github.com/flaviferri/studyBoard-BackEnd), desarrollado en un período de 3 semanas como proyecto final pedagógico del bootcamp FemCoders (P5). 


### Diseño

El diseño de la interfaz fue generado en un primer momento en Figma, donde se delimitaron en primera instancia los elementos más atómicos, para ir construyendo componente a componente el diseño completo de la aplicación.

Se ha diseñado mobile-first, con diseño responsive en dos puntos de quiebre: tablet y desktop.

![Captura de pantalla 2024-10-08 165606](https://github.com/user-attachments/assets/5e836870-880b-4f8c-98fa-6015ed39ce85)

[Figma: diseño completo](https://www.figma.com/design/oNZF199M4XEQXb1X6M3142/StudyBoard?node-id=57-239&node-type=canvas&t=XIAw5AUvCqypxScB-0)

## Diagramas


Se han trabajado diferentes diagramas, tanto de usuario como de flujo, para poder comprender y acotar la experiencia de usuario y la funcionalidad de la página. Así, se ha facilitado el desarrollo y diseño de lógica e interfaz.

### Diagrama de flujo

[Ver diagrama de flujo](---)

### Diagrama de flujo usuario

[Ver diagrama de flujo de usuario](https://www.figma.com/board/0QeyPkuYDwmtZII23A7JVr/StudyBoard?node-id=0-1&t=DuS9l8A4MwcQ2sI0-1)

### Diagrama de datos

El proyecto de StudyBoard tiene cierta complejidad en las relaciones entre entidades, roles y permisos. Para poder visualizarlas y comprenderlas, también hemos trabajado un diagrama de datos que pude verse a continuación. 

[Ver diagrama de datos](https://dbdiagram.io/d/StudyBoard-66fd5e31fb079c7ebd1bc8f1)



## Instalación 🛠️

### Requerimientos

- [Node.js](https://nodejs.org/en)
- [VSC](https://www.w3schools.com/java/java_intro.asp) con [extensión Java Pack VSC](vscjava.vscode-java-pack), [IntelliJ](https://www.jetbrains.com/es-es/idea/)  or tu IDE de preferencia
- Base de datos


1. Clona los repositorios:
```bash
Front:
 git clone https://github.com/Euge-Saravia/studyBoard-frontend

Back:
 git clone https://github.com/flaviferri/studyBoard-BackEnd

```

2. Haz npm install en el repo del front

3. Crea tu base de datos (en este caso se ha usado PostgreSQL) y conectála al repo del back:
```
pon el link de acceso, tu usuario y contraseña de pgAdmin en el archivo application.resources
```
```
en el caso de que estes usando otra BBDD, instala las dependencias respectivas en el documento pom.xml y actualiza el archivo application.resources

```



## Estructura del proyecto

Como proyecto de desarrollo Full-Stack, el proyecto se divide en Front y en Back, resultando en dos estrcuturas distintivas que pueden verse en los respectivos README. 

El front del proyecto se ha desarrollado en React Vite con SASS, centrándose en una estructura de componentes. 

La estructura actual del front es la siguiente:


```plaintext
/
├── STUDYBOARD-FRONTEND
│   ├── src/
│   │    ├── components
│   │    │     ├── board
│   │    │     ├── buttons
│   │    │     ├── calendar
│   │    │     ├── choosePostIt
│   │    │     ├── group
│   │    │     ├── inputs
│   │    │     ├── labels
│   │    │     ├── modals
│   │    │     ├── navBar
│   │    │     ├── profileImg
│   │    │     ├── sidebar
│   │    │     └── userHomeProfile
│   │    ├──hooks
│   │    │     ├── useAuth.jsx
│   │    │     ├── useCopyToClipboard.jsx
│   │    │     ├── useDelete.jsx
│   │    │     ├── useFetch.jsx
│   │    │     ├── useGet.jsx
│   │    │     ├── useGithubLogin.jsx
│   │    │     ├── usePost.jsx
│   │    │     ├── usePut.jsx
│   │    │     └── validationSchemas.jsx
│   │    ├──layout
│   │    │     ├── layout.scss
│   │    │     └── Layout.jsx
│   │    ├──pages
│   │    │      ├── aboutUs
│   │    │      ├── frontPage
│   │    │      ├── group
│   │    │      ├── home
│   │    │      ├── login
│   │    │      ├── signUp
│   │    │      └── userProfile
│   │    ├──router
│   │    │    ├── PrivateRoute.jsx
│   │    │    └── index.jsx
│   │    ├── styles
│   │    │   └── variables.scss
│   │    ├── config.js
│   │    ├── index.scss
│   │    ├── main.jsx
│   │    └── setupTests.js
│   ├── .env
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
└── └── vite.config.js


```

El proyecto se ha distribuido en carpetas que contienen el componente y su correspondiente documento de estilos. También se han realizado tests, tanto unitarios como de integración, que se encuentran en las mismas carpetas.

Por ejemplo: 
```plaintext
/
├── STUDYBOARD-FRONTEND
│   ├── src/
│   │    ├── components
│   │    │     ├── buttons
│   │    │     │      ├── copyButton
│   │    │     │      │      ├── CopyButton.jsx
│   │    │     │      │      ├── copyButton.scss
│   │    │     │      │      └── CopyButton.test.jsx

```

De esta manera se ha mantenido una estructura limpia y ordenada, donde cada componente tiene un nombre descriptivo junto a sus estilos y tests, en el caso de que los haya. 

## Tecnologías


- [React.js](https://react.dev/)
- [JavaScript](https://www.w3schools.com/js/js_intro.asp)
- [SASS](https://sass-lang.com/)
- [Java](https://www.java.com)
- [PgAdmin](https://www.pgadmin.org/)+ [SQL](https://www.w3schools.com/sql/default.asp)
- [SpringBoot](https://spring.io/projects/spring-boot)



## Uso
El programa debe iniciarse primero en el back.

Para compilar:

```
Compila la aplicación.
```

Una vez iniciado el back, en el front:

```
npm run dev
```

Abre el enlace que aparece con tu puerto local. 


## Contribución 🤝

1. Haz un fork al repositorio.
2. Crea una nueva rama: `git checkout -b feature/name`.
3. Haz tus cambios.
4. Haz push de tu rama: `git push origin feature/name`.
5. Crea un pull request.


 ## Coders👩‍💻
Este proyecto ha sido desarrollado por una única coder: 

- [Isabel Afonso](https://github.com/IsaLagu)
- [Flavia Ferrigno](https://github.com/flaviferri/)
- [Rebeca García](https://github.com/rebkg87)
- [Laura Gil](https://github.com/LauraGDev)
- [Betty Lopez](https://github.com/BettyLopo)
- [Eugenia Saravia](https://github.com/Euge-Saravia/)

## Demo


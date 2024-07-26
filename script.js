function showSkill(skill) {
    const body = document.body
    const parameter = skill
    const boxContent = document.querySelector('.skill-modal')

    let divContent
    let content

    
    if (boxContent.classList.contains('skill-modal-hidden')) {
        body.classList.add("dark-background")
        boxContent.classList.remove('skill-modal-hidden')
    }

    validateParameter()
    showContent()

    function validateParameter() {
        if (parameter == 'Java') {
            content = 'Java is a high-level, object-oriented and platform-independent programming language, very famous for its speed, security and scalability'
        }
        else if (parameter == 'Spring') {
            content = 'Spring Boot is a Java-based framework that makes it easy to create standalone and production Spring applications. It is part of the Spring ecosystem and aims to simplify the development, configuration and deployment of Spring-based applications.'
        }
        else if (parameter == 'PHP') {
            content = 'PHP (Hypertext Preprocessor) is an open source scripting language widely used for web development. As a server-side scripting language, PHP runs on the server, meaning that PHP code is processed before being sent to the users browser.'
        }
        else if (parameter == 'Laravel') {
            content = 'Laravel is an open source PHP framework that stands out for its elegance and simplicity, designed to facilitate the development of robust and well-structured web applications. Created by Taylor Otwell, Laravel follows the MVC (Model-View-Controller) architectural pattern, which helps organize and structure code efficiently.'
        }
        else if (parameter == 'Node') {
            content = 'Sass is a styling language (CSS preprocessor) that extends the CSS syntax, allowing the use of functions and nesting to make it easier to write and organize CSS code.'
        }
        else if (parameter == 'express') {
            content = 'Express.js is a minimalist and flexible web framework for Node.js, widely used for building web applications and APIs. It provides a robust set of functionality for web development without imposing many restrictions on the application structure, allowing developers to create applications quickly and efficiently.'
        }
        else if (parameter == 'docker') {
            content = 'Docker is an open source platform that automates the deployment of applications within software containers. Containers are lightweight and portable environments that include everything an application needs to run: code, runtime, libraries and dependencies, ensuring that the application works consistently across different development and production environments.'
        }
        else if (parameter == 'vue') {
            content = 'Vue.js is a JavaScript framework for building user interfaces. It is known for its simplicity and flexibility, allowing the creation of reactive components and being easy to integrate into existing projects.'
        }
        else if (parameter == 'git') {
            content = 'Git is a version control system that records changes to files, making it easier to manage the history of a software project.'
        }
        else if (parameter == 'api_rest') {
            content = 'A REST (Representational State Transfer) API is an architectural style for creating web services that enable communication between systems. RESTful APIs are widely used on the web due to their simplicity and scalability.'
        }
        else if (parameter == 'api_graphql') {
            content = 'GraphQL is a data query language for APIs and a runtime for running those queries against your existing data. Developed internally by Facebook in 2012 and publicly released in 2015, GraphQL offers a more flexible and efficient alternative to traditional REST APIs.'
        }
        else if (parameter == 'Sql') {
            content = 'MySQL is an open source relational database management system (RDBMS) that uses SQL (Structured Query Language) to manage and manipulate data. It is one of the most popular and widely used databases in the world, especially in web applications.'
        }
        else if (parameter == 'Postgress') {
            content = 'PostgreSQL, is an open-source, object-relational database management system (ORDBMS) that emphasizes extensibility and standards compliance. It is known for its robustness, high performance, and advanced features, making it a popular choice for a wide range of applications from small-scale projects to large enterprise systems.'
        }
        else if (parameter == 'Sql') {
            content = 'Vue.js is a JavaScript framework for building user interfaces. It is known for its simplicity and flexibility, allowing the creation of reactive components and being easy to integrate into existing projects.'
        }
        else if (parameter == 'Agile_Framework') {
            content = 'Agile Framework is a methodology used in software development and project management that promotes flexible, iterative, and incremental progress throughout the project lifecycle. Agile frameworks prioritize customer satisfaction through early and continuous delivery of valuable software.'
        }
        else if (parameter == 'CI/CD') {
            content = 'CI/CD, which stands for Continuous Integration/Continuous Delivery (or Continuous Deployment), is a software development practice that automates the code integration and delivery process. This approach aims to improve the efficiency and quality of software development by ensuring that code changes are integrated and delivered continuously and securely.'
        }
      
    }

    function showContent() {
        divContent = `
            <img class="skill-modal-close" src="img/skills/fechar.svg" alt="Btn close modal">
            <p class="skill-modal-text">${content}</p>
        `

        boxContent.innerHTML = divContent

        closeSkill()
    }

    function closeSkill() {
        const btnClose = document.querySelector('.skill-modal-close')

        btnClose.addEventListener('click', hidden)

        function hidden() {
            boxContent.classList.add('skill-modal-hidden')
            body.classList.remove('dark-background')
        }
    }
}
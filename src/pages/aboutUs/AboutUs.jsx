import "./aboutUs.scss";

const AboutUs = () => {
  return (
    <section className="about-us">
      <img src="../../../public/logo/Icon-Default.svg" alt="Icono" />
      <img
        src="../../../public/logo/Logo-Default.svg"
        alt="Logotipo de la página"
      />
      <p>
        Somos un equipo de seis desarrolladoras web apasionadas por crear
        soluciones digitales. Nuestra aplicación, Study
        Board, nació de la visión de nuestro cliente, Alejandro, quien
        identificó la necesidad de una plataforma interactiva que haga del
        estudio una experiencia más colaborativa y organizada.
        <br />
        <br />
        Study Board permite a los usuarios crear grupos de estudio donde pueden
        compartir y organizar sus ideas utilizando post-its. Cada post-it puede
        contener texto, fragmentos de código o puntos clave para la discusión
        del grupo. Además, la aplicación está integrada con un calendario, lo
        que ayuda a los usuarios a fijar fechas importantes y mantenerse
        organizados con sus tareas. Esto convierte a Study Board en una
        herramienta invaluable tanto para estudiantes como para profesionales
        que buscan una forma eficiente de colaborar y gestionar sus tiempos de
        estudio.
        <br />
        <br />
        Este proyecto refleja nuestro compromiso con el uso de la tecnología
        para resolver problemas reales. Creemos que Study Board fomentará
        mejores experiencias de aprendizaje, apoyará la colaboración entre
        usuarios y les ayudará a estar más organizados.
      </p>
      <h5 className="ourTeam">Conoce al Equipo</h5>
      <ul className="ourTeamLinkedin">
        <li><a href="https://www.linkedin.com/in/flavia-ferrigno/" target="_blank" rel="noopener noreferrer">Flavia Ferrigno</a></li>
        <li><a href="https://www.linkedin.com/in/isabel-afonso-guizado/" target="_blank" rel="noopener noreferrer">Isabel Afonso</a></li>
        <li><a href="https://www.linkedin.com/in/elisabet-lopez-pons/" target="_blank" rel="noopener noreferrer">Elisabet López</a></li>
        <li><a href="https://www.linkedin.com/in/laura-gil-cara/" target="_blank" rel="noopener noreferrer">Laura Gil</a></li>
        <li><a href="https://www.linkedin.com/in/rebeca-garcia-58149061/" target="_blank" rel="noopener noreferrer">Rebeca García</a></li>
        <li><a href="https://www.linkedin.com/in/eugenia-saravia-22303453/" target="_blank" rel="noopener noreferrer">Eugenia Saravia</a></li>
        <li><a href="https://www.linkedin.com/in/alejandro-arends/" target="_blank" rel="noopener noreferrer">Alejandro Arends Morales</a></li>
      </ul>
    </section>
  );
};

export default AboutUs;

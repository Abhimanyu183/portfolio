import ProjectCard from "./ProjectCard";

const Projects = () => (
  <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
    <h2 className="text-3xl font-bold text-primary col-span-full mb-4">My Projects</h2>
    <ProjectCard
      title="Gourmet Catering Website"
      description="Positive relationships with event organizers."
      imageUrl="https://img.freepik.com/premium-vector/lettering-text-catering-with-love-typography_496281-1200.jpg?w=740"
      projectLink="https://github.com/Abhimanyu183/Gourmet-Catering.git"
    />
    <ProjectCard
      title="Millionaire Game"
      description="A quiz game with virtual money rewards."
      imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSepBimaJwTLhlIhm1z0XJ9UiCGTmYgnxT7Cg&s"
      projectLink="https://github.com/Abhimanyu183/millionaire.git"
    />
    <ProjectCard
      title="Chess Game"
      description="Showcases strategic planning and analytical skills."
      imageUrl= "	https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/ChessSet.jpg/640px-ChessSet.jpg"
      projectLink="https://github.com/Abhimanyu183/Raj.git"
    />
    <ProjectCard
      title="Hotel Management System"
      description="Promotes hotel services and customer relationships."
      imageUrl="	https://imgcdn.stablediffusionweb.com/2024/12/6/792a8514-c5d5-46c8-afa8-617477bd60ce.jpg"
      projectLink="#"
    />
  </div>
);

export default Projects;

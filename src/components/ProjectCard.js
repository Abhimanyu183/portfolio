const ProjectCard = ({ title, description, imageUrl, projectLink }) => (
  <div className="bg-white dark:bg-gray-800 shadow-md p-4 rounded-lg">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-48 object-cover rounded-md mb-4"
    />
    <h3 className="text-xl font-bold text-secondary mb-2">{title}</h3>
    <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
    <a
      href={projectLink}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      View Project
    </a>
  </div>
);

export default ProjectCard;

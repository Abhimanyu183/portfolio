const Home = () => (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-primary to-secondary text-white p-6 sm:p-8 md:p-12">
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-center leading-tight">
        <span className="bg-gradient-to-r from-yellow-400 to-pink-600 text-transparent bg-clip-text">
          Welcome to
        </span>
        <span className="bg-gradient-to-r from-green-400 to-blue-600 text-transparent bg-clip-text">
          My Portfolio
        </span>
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl max-w-3xl text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 opacity-90">
        I am an aspiring computer engineer with expertise in React, Node.js, and modern web technologies. Let me take you through my journey and skills.
      </p>
      <button className="mt-4 sm:mt-6 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 transform transition duration-300 ease-in-out hover:scale-105">
        Explore My Work
      </button>
    </div>
  );
  
  export default Home;
  
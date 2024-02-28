<script>
  import Project from "../components/Project.svelte";

  const favouriteProjects = [
    {
      name: "Blueberry Proxy",
      description: "Bypasses restrictions on school Chromebooks, extending beyond blockers' limits.",
      github: "https://github.com/remdergoated/.blueberry",
      language: "HTML",
      live: null, // Add live link if applicable
      stats: null, // Add project statistics if needed
    },
    // Add more favorite projects as needed
  ];

  const otherProjects = [
    {
      name: "My Portfolio",
      link: "https://github.com/TysonXIT/Portfolio",
      preview: "path/to/portfolio-preview-image.jpg", // Add project preview image path
    },
    // Add more other projects as needed
  ];
</script>

<section class="projects" id="projects">
  <header>
    <h1>My Favorite Projects</h1>
  </header>
  <div class="favouriteProjects">
    {#each favouriteProjects as { name, description, github, language, live, stats }, i}
      <Project
        name={name}
        description={description}
        github={github}
        language={language}
        live={live}
        stats={stats}
      />
    {/each}
  </div>

  <header>
    <h1 class="otherProjectsHeader">
      <a href="https://github.com/TysonXIT?tab=repositories" target="_blank">All projects</a>
    </h1>
  </header>
  <div class="otherProjects">
    {#each otherProjects as { name, link, preview }, i}
      <a href={link} target="_blank" class="otherProject">
        <img src={preview} alt="Project Preview" />
        <span>{name}</span>
      </a>
    {/each}
  </div>
</section>

<style>
  .projects {
    background-color: #000; /* Black background color */
    color: white;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
  }

  .projects header h1 {
    font-size: 3rem;
    z-index: 1000;
    position: sticky;
    top: 20px;
  }

  .otherProject {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
  }

  .otherProject:hover {
    transform: scale(1.05);
  }

  .otherProject img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
  }

  .otherProject span {
    display: block;
    padding: 1rem;
    background-color: #fff;
    text-align: center;
    font-weight: bold;
  }
</style>

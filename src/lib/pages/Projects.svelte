<script lang="ts">
  import Project from "../components/Project.svelte";

  const favouriteProjects = [
    {
      name: "Blueberry Proxy",
      description:
        "Bypasses everything on a school chromebook and lets you go beyond your blockers limits",
      github: "https://github.com/remdergoated/.blueberry",
      language: "html",
      ],
    },
    {
  

  const otherProjects = [
    {
      link: "https://github.com/TysonXIT/Portfolio",        
  ];
</script>

<section class="projects" id="projects" data-page="projects">
  <header>
    <h1>My Favourite Projects</h1>
  </header>
  <div class="favouriteProjects">
    {#each favouriteProjects as project, i}
      <Project
        name={project.name}
        description={project.description}
        github={project.github}
        live={project.live}
        language={project.language}
        stats={project.stats}
      />
    {/each}
  </div>

  <header>
    <h1 class="otherProjectsHeader">
      <a href="https://github.com/Tyson3101?tab=repositories" target="_blank"
        >All projects</a
      >
    </h1>
  </header>
  <div class="otherProjects">
    {#each otherProjects as project, i}
      <a href={project.link} target="_blank" class="otherProject">
        <img src={project.preview} alt="Project" />
      </a>
    {/each}
  </div>
</section>

<style>
  .favouriteProjects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    z-index: 1000;
    background: transparent;
  }

  .otherProjects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    margin: 0 auto;
    width: 90%;
    z-index: 1000;
  }

  .otherProject img {
    width: 100%;
    height: 100%;
  }

  header {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    margin-top: 4rem;
    font-size: 3rem;
    font-weight: 600;
    z-index: 1000;
    text-decoration: underline;
    user-select: none;
  }

  .otherProjectsHeader {
    margin-bottom: 2rem;
  }

  .otherProjectsHeader a {
    color: whitesmoke;
    transition: color 0.3s ease-in-out;
  }

  .otherProjectsHeader a:hover {
    color: rgb(124, 196, 244);
    transition: color 0.3s ease-in-out;
  }

  @media (max-width: 1200px) {
    .otherProjects {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 700px) {
    header h1 {
      font-size: 2rem;
    }
    .otherProjects {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media (max-width: 500px) {
    header h1 {
      font-size: 1.5rem;
    }
  }
</style>

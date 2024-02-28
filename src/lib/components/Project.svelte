<script lang="ts">
  export let name: string;
  export let description: string;
  export let github: string;
  export let live: string;
  export let language: string;
  export let stats: string[];
</script>

<div class="project">
  <div class="header">
    <span class="title">{name}</span>
    <span class="stats">
      {#each stats as stat}
        <img src={stat} alt="project stats" />
      {/each}
    </span>
  </div>
  <div class="content">
    <div class="description">
      <p>
        {description}
      </p>
      <img
        width="100"
        height="100"
        src={`https://img.icons8.com/color/240/${language}.png`}
        alt={language}
      />
    </div>
    <div class="links">
      <a href={github} target="_blank"><button>Github</button></a>
      <a href={live} target="_blank"><button>View Live</button></a>
    </div>
  </div>
</div>

<style>
  .project {
    background-color: #282a36;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    width: 40%;
    margin: 1rem;
  }

  .project .header {
    background-color: #44475a;
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .project .header span.title {
    font-size: 1.7vw;
  }

  .project .header span.stats {
    display: flex;
    gap: 0.5rem;
  }

  .project .content {
    font-size: 1.1vw;
    padding: 0.6rem;
  }

  .project .description {
    display: flex;
    text-align: left;
  }

  .project .description p {
    width: 69%;
  }

  .project .description img {
    margin: auto;
  }

  .project .links {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .project .links button {
    cursor: pointer;
    padding: 0.4rem 0.4rem;
    border: none;
    outline: none;
    background-color: #f7f8ff;
    border-radius: 0.2rem;
    transition: background-color 0.5s ease-in-out;
  }

  .project .links button:hover {
    background-color: #c7c9d4;
    transition: background-color 0.5s ease-in-out;
  }

  @media only screen and (max-width: 1100px) {
    .project .content {
      font-size: 1.8vw;
    }
  }

  @media only screen and (max-width: 850px) {
    .project {
      width: 80%;
    }

    .project .header span.title {
      font-size: 3.5vw;
    }

    .project .content {
      font-size: 2.5vw;
    }
  }

  @media only screen and (max-width: 500px) {
    .project .header span.title {
      font-size: 4.5vw;
    }

    .project .content {
      font-size: 3.5vw;
    }
  }
</style>

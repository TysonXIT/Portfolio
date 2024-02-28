<script lang="ts">
  const links = [
    {
      name: "Github",
      link: "https://github.com/TysonXIT",
      icon: "https://img.icons8.com/color/48/github--v1.png",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/ElonMusk",
      icon: "https://img.icons8.com/color/48/twitter--v1.png",
    },
    {
      name: "Youtube",
      link: "https://www.youtube.com/@Google",
      icon: "https://img.icons8.com/color/48/youtube-play.png",
    },
    {
      name: "Discord",
      link: "https://discord.com/users/1196325181896007790",
      icon: "https://img.icons8.com/color/48/discord-logo.png",
    },
  ];
</script>

<section class="home" id="home" data-page="home">
  <div class="wrapper">
    <header>
      <h1 class="text-colour-effect">Tyson XIT</h1>
      <h2>Rocket League GC, Typescript & Javascript Main.</h2>
    </header>
    <div class="links">
      {#each links as link}
        <button>
          <a href={link.link} target="_blank">
            <img src={link.icon} alt={link.name} width={48} />
            {link.name}
          </a>
        </button>
      {/each}
    </div>
  </div>
</section>

<style>
  .wrapper {
    z-index: 1000;
  }

  header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .text-colour-effect {
    background: linear-gradient(-45deg, #2c36f1, #e73c7e, #af2cf1);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient 7s ease infinite;
    background-size: 400% 400%;
    font-size: 10vw;
  }
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  h2 {
    color: #8e91f6;
    font-size: 2rem;
  }

  .links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    margin-top: 1em;
    flex-wrap: wrap;
  }

  .links button {
    background-color: transparent;
    border: 2px solid rgb(245, 235, 235);
    border-radius: 5px;
    padding: 0.5em 1em;
    transition: background-color 0.5s ease-in-out;
  }

  .links button:last-child {
    margin-top: auto;
  }

  .links button:hover {
    background-color: rgb(255, 255, 255);
    transition: background-color 0.5s ease-in-out;
  }

  .links button a {
    color: whitesmoke;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 600;
    transition: color 0.5s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .links button a:hover {
    color: black;
    transition: color 0.5s ease-in-out;
  }

  .links button a img {
    margin-right: 0.2em;
  }

  @media screen and (max-width: 1300px) {
    .text-colour-effect {
      font-size: 13vw;
    }

    h2 {
      font-size: 1.4rem;
    }

    .links button a {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 900px) {
    .text-colour-effect {
      font-size: 18vw;
    }

    h2 {
      font-size: 1.3rem;
    }

    .links button a {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 700px) {
    .links button {
      flex-basis: calc(90%); /* Adjust the width based on your preference */
    }

    .links button {
      font-size: 0.33em;
    }

    .links button img {
      width: 38px;
    }
  }

  @media screen and (max-width: 550px) {
    .text-colour-effect {
      font-size: 20vw;
    }
  }

  @media screen and (max-width: 400px) {
    .text-colour-effect {
      font-size: 20vw;
    }

    h2 {
      font-size: 1rem;
    }

    .links button {
      flex-basis: calc(90%); /* Adjust the width based on your preference */
    }

    .links button {
      font-size: 0.23em;
    }

    .links button img {
      width: 28px;
    }
  }
</style>

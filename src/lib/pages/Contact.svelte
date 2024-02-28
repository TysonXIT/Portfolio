<script lang="ts">
  const links = [
    {
      name: "Discord",
      link: "https://discord.com/users/1196325181896007790",
      icon: "https://img.icons8.com/color/48/discord-logo.png",
    },
    // Add more links as needed
  ];
</script>

<section class="contact" id="contact">
  <header>
    <h1>Contact Me</h1>
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
  <div class="wrapper">
    <form action="https://formspree.io/f/mpzvrjjn" method="POST">
      <label for="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="JimmyJohn"
        required
      />
      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="jimmy@gmail.com"
        required
      />
      <label for="message">Message</label>
      <textarea name="message" id="message" placeholder="Hello" required></textarea>
      <button type="submit">Send</button>
    </form>
  </div>
</section>

<style>
  .contact {
    background-color: #000;
    color: white;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
  }

  .contact header {
    font-size: 3rem;
    z-index: 1000;
    position: sticky;
    top: 20px;
  }

  .links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    margin-bottom: 2rem;
    position: sticky;
    top: 90px;
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
    font-size: 1.3rem;
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

  .contact .wrapper {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .contact form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .contact form label {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .contact form input,
  .contact form textarea {
    padding: 0.2rem;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #111; /* Dark background color */
    color: white;
  }

  .contact form textarea {
    height: 60px;
  }

  .contact form button {
    padding: 0.5rem;
    font-size: 1.5rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #0026e4;
    color: white;
    cursor: pointer;
  }

  .contact form button:hover {
    background-color: #2f36ee;
  }

  @media (max-height: 650px) {
    header {
      margin-top: 3rem;
    }
  }

  @media (max-width: 1024px) {
    .contact .wrapper {
      width: 70%;
    }
    .links {
      scale: 0.9;
      margin-bottom: 0;
    }
  }

  @media (max-width: 768px) {
    .contact .wrapper {
      width: 80%;
    }
    .links {
      scale: 0.8;
      margin-bottom: 0;
    }
  }

  @media (max-width: 600px) {
    header h1 {
      font-size: 14vw;
    }
    .contact .wrapper {
      width: 90%;
    }
    .links {
      scale: 0.7;
      margin-bottom: 0;
    }
  }

  @media (max-width: 385px) {
    header h1 {
      font-size: 18vw;
    }
    .contact .wrapper {
      width: 95%;
    }
    .links {
      scale: 0.6;
      margin-bottom: 0;
    }
  }

  @media (max-width: 320px) {
    .links {
      scale: 0.4;
      margin-bottom: 0;
    }
  }

  @media (max-width: 210px) {
    .links {
      gap: 1rem;
      margin-bottom: 0;
    }
    .links button a {
      font-size: 1.1rem;
    }
  }
</style>

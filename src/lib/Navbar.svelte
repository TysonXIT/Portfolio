<script lang="ts">
  export let activePage: string;
  export let pages: any;
  export let handlePages: (pages: any) => any;

  function captalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
</script>

<nav>
  <div class="links">
    {#each Object.keys(pages).filter((key) => key !== activePage) as page}
      <a
        href={`#${page}`}
        on:click={() => handlePages(page)}
        on:keydown={() => handlePages(page)}>{captalizeFirstLetter(page)}</a
      >
    {/each}
  </div>
</nav>

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 5000;
  }
  .links {
    display: flex;
    flex-wrap: 1;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;
    background-color: transparent;
  }

  .links a {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 600;
    transition: color 0.5s ease-in-out;
  }

  .links a:hover {
    color: var(--primary);
    transition: color 0.5s ease-in-out;
  }

  @media (max-width: 768px) {
    .links a {
      font-size: 1rem;
    }
  }
</style>

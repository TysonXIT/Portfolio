<script lang="ts">
  import { onMount, afterUpdate } from "svelte";

  import Navbar from "./lib/Navbar.svelte";
  import Projects from "./lib/pages/Projects.svelte";
  import Home from "./lib/pages/Home.svelte";
  import Contact from "./lib/pages/Contact.svelte";

  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const pages = {
    home: {
      background: "#110a15",
      primary: "#8e91f6",
      accent: "#2f36ee",
      secondary: "#03052a",
    },
    projects: {
      background: "#5A0418",
      primary: "#22374f",
      accent: "#0a0508",
      secondary: "#bdefda",
    },
    contact: {
      background: "#5A3504",
      primary: "#9fcee9",
      secondary: "#1a191a",
      accent: "#9fa9e9",
    },
  };

  function setPageFromHash() {
    const hash = window.location.hash.toLowerCase().slice(1);
    return hash && Object.keys(pages).includes(hash) ? hash : "home";
  }

  function handleHashChange() {
    const newPage = setPageFromHash();
    if (newPage !== activePage) handlePages(newPage);
  }

  function changeCSSVariable(name: string, value: string) {
    document.documentElement.style.setProperty(name, value);
  }

  let changingPage = false;
  let activePage = setPageFromHash();

  let squares: number[] = [];

  function createGridBackground() {
    squares = Array(100).fill(0);
  }

  async function handlePages(page: any) {
    if (changingPage) return;
    changingPage = true;

    const oldDOMEle = document.getElementById(activePage);
    if (oldDOMEle) {
      oldDOMEle.style.display = "none";
    }

    const nextPage =
      Object.keys(pages)[Object.keys(pages).indexOf(activePage) + 1] || "home";
    const newActivePage = typeof page === "string" ? page : nextPage;

    document.body.style.background = pages[newActivePage].background;

    const newBackground = pages[newActivePage].background;
    const allSquares = Array.from(document.querySelectorAll(".square")).sort(
      () => Math.random() - 0.5
    ) as HTMLDivElement[];

    for (const square of allSquares) {
      square.style.backgroundColor = newBackground;
      await wait(Math.random() * 20);
    }

    Object.keys(pages[activePage]).forEach((key) => {
      changeCSSVariable(`--${key}`, pages[activePage][key]);
    });

    document.body.style.background = pages[newActivePage].background;

    await wait(400);
    window.location.hash = newActivePage;
    activePage = newActivePage;
    changingPage = false;
  }

  onMount(() => {
    createGridBackground();
    changeCSSVariable("--square-bg", pages[activePage].background);
    Object.keys(pages[activePage]).forEach((key: string) => {
      changeCSSVariable(`--${key}`, pages[activePage][key]);
    });
    document.body.style.background = pages[activePage].background;
  });

  afterUpdate(() => {
    createGridBackground();
  });
</script>

<svelte:window on:hashchange={handleHashChange} />

<Navbar {activePage} {pages} {handlePages} />
<div class="grid">
  {#each squares as _, index}
    <div class="square" on:click={handlePages} on:keydown={handlePages} />
  {/each}
</div>

<main>
  {#if activePage === "home"}
    <Home />
  {/if}
  {#if activePage === "projects"}
    <Projects />
  {/if}
  {#if activePage === "contact"}
    <Contact />
  {/if}
</main>

<style>
  :root {
    --square-bg: #110a15;
    --primary: #8e91f6;
    --secondary: #03052a;
    --accent: #2f36ee;
  }

  .grid {
    position: fixed;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
  }
  .square {
    background-color: var(--square-bg);
    transition: background-color 0.5s ease-in-out;
  }
</style>

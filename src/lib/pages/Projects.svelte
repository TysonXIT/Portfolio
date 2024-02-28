<script lang="ts">
  import Project from "../components/Project.svelte";

  const favouriteProjects = [
    {
      name: "Medal Bypass",
      description:
        "Bypasses the requirement of Medal Premium in order to download clips without watermarks!",
      github: "https://github.com/Tyson3101/Medal-Bypass",
      live: "https://medalbypass.web.app/",
      language: "typescript",
      stats: [
        "https://badgen.net/github/stars/Tyson3101/Medal-Bypass?color=blue&label=Stars&logo=github&logoColor=white&style=for-the-badge",
      ],
    },
    {
      name: "Auto Shorts Scroller",
      description:
        "A Chrome Extension and Bookmarklet that adds an auto-scroll feature on Youtube.",
      github: "https://github.com/Tyson3101/Auto-Youtube-Shorts-Scroller",
      live: "https://chrome.google.com/webstore/detail/elggcfikfbaijgcofcapgeahjaclpfnf",
      language: "typescript",
      stats: [
        "https://badgen.net/github/stars/Tyson3101/Auto-Youtube-Shorts-Scroller?color=blue&label=Stars&logo=github&logoColor=white&style=for-the-badge",
        "https://badgen.net/chrome-web-store/users/elggcfikfbaijgcofcapgeahjaclpfnf?color=blue&label=Users&logo=google-chrome&logoColor=white&style=for-the-badge",
      ],
    },
    {
      name: "Bookmarks",
      description:
        "All your bookmarks kept safe in one place, stops the need of having a clogged up bookmark bar.",
      github: "https://github.com/Tyson3101/Bookmarks",
      live: "https://bookmarkssafe.vercel.app/",
      language: "typescript",
      stats: [
        "https://badgen.net/github/stars/Tyson3101/Bookmarks?color=blue&label=Stars&logo=github&logoColor=white&style=for-the-badge",
      ],
    },
    {
      name: "Tic-Tac-Toe",
      description:
        "A fun and simple online game of Tic Tac Toe to play against friends.",
      github: "https://github.com/Tyson3101/Tic-Tac-Toe",
      live: "https://game-tictactoe.fly.dev/",
      language: "javascript",
      stats: [
        "https://badgen.net/github/stars/Tyson3101/Tic-Tac-Toe?color=blue&label=Stars&logo=github&logoColor=white&style=for-the-badge",
      ],
    },
    {
      name: "RLEsports Guesser Unlimited",
      description:
        "An unlimited version of https://rleguessr.app | https://twitter.com/RL_Cal.",
      github: "https://github.com/Tyson3101/RLEsports-Guesser-Unlimited",
      live: "https://rlesports-guesser-unlimited.vercel.app/",
      language: "typescript",
      stats: [
        "https://badgen.net/github/stars/Tyson3101/RLEsports-Guesser-Unlimited?color=blue&label=Stars&logo=github&logoColor=white&style=for-the-badge",
      ],
    },
    {
      name: "Redirect Blocker",
      description:
        "A Chrome Extension that blocks redirects on sketchy sites that have constant redirects to viruses, etc.",
      github: "https://github.com/Tyson3101/Redirect-Blocker",
      live: "https://chrome.google.com/webstore/detail/redirect-blocker/egmgebeelgaakhaoodlmnimbfemfgdah",
      language: "typescript",
      stats: [
        "https://badgen.net/github/stars/Tyson3101/Redirect-Blocker?color=blue&label=Stars&logo=github&logoColor=white&style=for-the-badge",
        "https://badgen.net/chrome-web-store/users/egmgebeelgaakhaoodlmnimbfemfgdah?color=blue&label=Users&logo=google-chrome&logoColor=white&style=for-the-badge",
      ],
    },
  ];

  const otherProjects = [
    {
      link: "https://github.com/Tyson3101/Tyson3101",
      preview:
        "https://ondemand.bannerbear.com/signedurl/D0nJ4XLedwbENRZa1x/image.jpg?modifications=W3sibmFtZSI6InJlcG8iLCJ0ZXh0IjoiVHlzb24zMTAxIC8gKlR5c29uMzEwMSoifSx7Im5hbWUiOiJkZXNjIiwidGV4dCI6Ik15IG1haW4gR2l0SHViIHBhZ2UifSx7Im5hbWUiOiJhdmF0YXI1IiwiaGlkZSI6dHJ1ZX0seyJuYW1lIjoiYXZhdGFyNCIsImhpZGUiOnRydWV9LHsibmFtZSI6ImF2YXRhcjMiLCJoaWRlIjp0cnVlfSx7Im5hbWUiOiJhdmF0YXIyIiwiaGlkZSI6dHJ1ZX0seyJuYW1lIjoiYXZhdGFyMSIsImltYWdlX3VybCI6Imh0dHBzOi8vYXZhdGFycy5naXRodWJ1c2VyY29udGVudC5jb20vdS82NzA0NTEzOD92PTQifSx7Im5hbWUiOiJjb250cmlidXRvcnMiLCJ0ZXh0IjoiVHlzb24zMTAxIn0seyJuYW1lIjoic3RhcnMiLCJ0ZXh0IjoiMCJ9XQ&s=26a2d8950a538c47b5df6b415ae5c6074ab8538e3f3701766ce61ca41ef74e15",
    },
    {
      link: "https://github.com/Tyson3101/Auto-Reels-Scroller",
      preview:
        "https://ondemand.bannerbear.com/signedurl/D0nJ4XLedwbENRZa1x/image.jpg?modifications=W3sibmFtZSI6InJlcG8iLCJ0ZXh0IjoiVHlzb24zMTAxIC8gKkF1dG8tUmVlbHMtU2Nyb2xsZXIqIn0seyJuYW1lIjoiZGVzYyIsInRleHQiOiJBIENocm9tZSBFeHRlbnNpb24gdGhhdCBhZGRzIGFuIGF1dG8tc2Nyb2xsIGZlYXR1cmUgb24gSW5zdGFncmFtIFJlZWxzIHNvIHlvdSBjYW4gd2F0Y2ggUmVlbHMgd2l0aG91dCB0aGUgbmVlZCB0byB0b3VjaCB5b3VyIG1vdXNlLiJ9LHsibmFtZSI6ImF2YXRhcjUiLCJoaWRlIjp0cnVlfSx7Im5hbWUiOiJhdmF0YXI0IiwiaGlkZSI6dHJ1ZX0seyJuYW1lIjoiYXZhdGFyMyIsImhpZGUiOnRydWV9LHsibmFtZSI6ImF2YXRhcjIiLCJoaWRlIjp0cnVlfSx7Im5hbWUiOiJhdmF0YXIxIiwiaW1hZ2VfdXJsIjoiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzY3MDQ1MTM4P3Y9NCJ9LHsibmFtZSI6ImNvbnRyaWJ1dG9ycyIsInRleHQiOiJUeXNvbjMxMDEifSx7Im5hbWUiOiJzdGFycyIsInRleHQiOiIwIn1d&s=7be015287da437dfde301356c2e011ee182100750e3866afe0726e1637c6257c",
    },
    {
      link: "https://github.com/Tyson3101/ImageToBase64",
      preview:
        "https://ondemand.bannerbear.com/signedurl/D0nJ4XLedwbENRZa1x/image.jpg?modifications=W3sibmFtZSI6InJlcG8iLCJ0ZXh0IjoiVHlzb24zMTAxIC8gKkltYWdlVG9CYXNlNjQqIn0seyJuYW1lIjoiZGVzYyIsInRleHQiOiJTaW1wbGUgU2l0ZSB0byBDb252ZXJ0IEltYWdlcyB0byBCYXNlNjQhIn0seyJuYW1lIjoiYXZhdGFyNSIsImhpZGUiOnRydWV9LHsibmFtZSI6ImF2YXRhcjQiLCJoaWRlIjp0cnVlfSx7Im5hbWUiOiJhdmF0YXIzIiwiaGlkZSI6dHJ1ZX0seyJuYW1lIjoiYXZhdGFyMiIsImhpZGUiOnRydWV9LHsibmFtZSI6ImF2YXRhcjEiLCJpbWFnZV91cmwiOiJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvNjcwNDUxMzg_dj00In0seyJuYW1lIjoiY29udHJpYnV0b3JzIiwidGV4dCI6IlR5c29uMzEwMSJ9LHsibmFtZSI6InN0YXJzIiwidGV4dCI6IjAifV0&s=97bad7c7dd8d6468ba641271c6d89a4d6868b603c682b23b77e76074fe9d50ac",
    },
    {
      link: "https://github.com/Tyson3101/ImageResizer",
      preview:
        "https://ondemand.bannerbear.com/signedurl/D0nJ4XLedwbENRZa1x/image.jpg?modifications=W3sibmFtZSI6InJlcG8iLCJ0ZXh0IjoiVHlzb24zMTAxIC8gKkltYWdlUmVzaXplcioifSx7Im5hbWUiOiJkZXNjIiwidGV4dCI6IkEgaGVscGZ1bCB0b29sIHRvIHJlc2l6ZSBpbWFnZXMifSx7Im5hbWUiOiJhdmF0YXI1IiwiaGlkZSI6dHJ1ZX0seyJuYW1lIjoiYXZhdGFyNCIsImhpZGUiOnRydWV9LHsibmFtZSI6ImF2YXRhcjMiLCJoaWRlIjp0cnVlfSx7Im5hbWUiOiJhdmF0YXIyIiwiaGlkZSI6dHJ1ZX0seyJuYW1lIjoiYXZhdGFyMSIsImltYWdlX3VybCI6Imh0dHBzOi8vYXZhdGFycy5naXRodWJ1c2VyY29udGVudC5jb20vdS82NzA0NTEzOD92PTQifSx7Im5hbWUiOiJjb250cmlidXRvcnMiLCJ0ZXh0IjoiVHlzb24zMTAxIn0seyJuYW1lIjoic3RhcnMiLCJ0ZXh0IjoiMCJ9XQ&s=3f5ffaab3c18911e9a5d86ec11429a3702494b09bb8f45478b75ed0369628dee",
    },
    {
      link: "https://github.com/Tyson3101/NextAuth-SignUp-And-SignIn",
      preview:
        "https://ondemand.bannerbear.com/signedurl/D0nJ4XLedwbENRZa1x/image.jpg?modifications=W3sibmFtZSI6InJlcG8iLCJ0ZXh0IjoiVHlzb24zMTAxIC8gKk5leHRBdXRoLVNpZ25VcC1BbmQtU2lnbkluKiJ9LHsibmFtZSI6ImRlc2MiLCJ0ZXh0IjoiVGhpcyByZXBvc2l0b3J5IGlzIGEgc2ltcGxlIGV4YW1wbGUgb2YgaG93IHRvIHVzZSBOZXh0QXV0aCB0byBpbXBsZW1lbnQgdXNlciBzaWdudXAgYW5kIHNpZ25pbi4ifSx7Im5hbWUiOiJhdmF0YXI1IiwiaGlkZSI6dHJ1ZX0seyJuYW1lIjoiYXZhdGFyNCIsImhpZGUiOnRydWV9LHsibmFtZSI6ImF2YXRhcjMiLCJoaWRlIjp0cnVlfSx7Im5hbWUiOiJhdmF0YXIyIiwiaGlkZSI6dHJ1ZX0seyJuYW1lIjoiYXZhdGFyMSIsImltYWdlX3VybCI6Imh0dHBzOi8vYXZhdGFycy5naXRodWJ1c2VyY29udGVudC5jb20vdS82NzA0NTEzOD92PTQifSx7Im5hbWUiOiJjb250cmlidXRvcnMiLCJ0ZXh0IjoiVHlzb24zMTAxIn0seyJuYW1lIjoic3RhcnMiLCJ0ZXh0IjoiMSJ9XQ&s=d69a4259bf4aa69a450cd032dc68afb8168379edf17a22c83d0a79abb5d3d5bf",
    },
    {
      link: "https://github.com/Tyson3101/Firebase-Auth-with-NextJS-SSR",
      preview:
        "https://ondemand.bannerbear.com/signedurl/D0nJ4XLedwbENRZa1x/image.jpg?modifications=W3sibmFtZSI6InJlcG8iLCJ0ZXh0IjoiVHlzb24zMTAxIC8gKkZpcmViYXNlLUF1dGgtd2l0aC1OZXh0SlMtU1NSKiJ9LHsibmFtZSI6ImRlc2MiLCJ0ZXh0IjoiQW4gZXhhbXBsZSBvZiBGaXJlYmFzZSBBdXRoIHdpdGggTmV4dC5qcyJ9LHsibmFtZSI6ImF2YXRhcjUiLCJoaWRlIjp0cnVlfSx7Im5hbWUiOiJhdmF0YXI0IiwiaGlkZSI6dHJ1ZX0seyJuYW1lIjoiYXZhdGFyMyIsImhpZGUiOnRydWV9LHsibmFtZSI6ImF2YXRhcjIiLCJoaWRlIjp0cnVlfSx7Im5hbWUiOiJhdmF0YXIxIiwiaW1hZ2VfdXJsIjoiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzY3MDQ1MTM4P3Y9NCJ9LHsibmFtZSI6ImNvbnRyaWJ1dG9ycyIsInRleHQiOiJUeXNvbjMxMDEifSx7Im5hbWUiOiJzdGFycyIsInRleHQiOiIwIn1d&s=9f1e827cb0f30b02677009ab23e81953b647fc52bd9e21e5afa364d6bdfb7131",
    },
    {
      link: "https://github.com/Tyson3101/SidePlus",
      preview:
        "https://ondemand.bannerbear.com/signedurl/D0nJ4XLedwbENRZa1x/image.jpg?modifications=W3sibmFtZSI6InJlcG8iLCJ0ZXh0IjoiVHlzb24zMTAxIC8gKlNpZGVQbHVzKiJ9LHsibmFtZSI6ImRlc2MiLCJ0ZXh0IjoiQSBubyBsb25nZXIgbWFpbnRhaW5lZCB3ZWJzaXRlIG9mIFNpZGUgUGx1cy4gIn0seyJuYW1lIjoiYXZhdGFyNSIsImhpZGUiOnRydWV9LHsibmFtZSI6ImF2YXRhcjQiLCJoaWRlIjp0cnVlfSx7Im5hbWUiOiJhdmF0YXIzIiwiaGlkZSI6dHJ1ZX0seyJuYW1lIjoiYXZhdGFyMiIsImhpZGUiOnRydWV9LHsibmFtZSI6ImF2YXRhcjEiLCJpbWFnZV91cmwiOiJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvNjcwNDUxMzg_dj00In0seyJuYW1lIjoiY29udHJpYnV0b3JzIiwidGV4dCI6IlR5c29uMzEwMSJ9LHsibmFtZSI6InN0YXJzIiwidGV4dCI6IjAifV0&s=395e5b1d5c6837ca99c083bbd78755634a7605979df06debb8fa231e86453a16",
    },
    {
      link: "https://github.com/Tyson3101/rocket-league-garage-scraper",
      preview:
        "https://ondemand.bannerbear.com/signedurl/D0nJ4XLedwbENRZa1x/image.jpg?modifications=W3sibmFtZSI6InJlcG8iLCJ0ZXh0IjoiVHlzb24zMTAxIC8gKnJvY2tldC1sZWFndWUtZ2FyYWdlLXNjcmFwZXIqIn0seyJuYW1lIjoiZGVzYyIsInRleHQiOiJHZXQgaW5mb3JtYXRpb24gZnJvbSB0aGUgUkwgR2FyYWdlIHdlYnNpdGUuIn0seyJuYW1lIjoiYXZhdGFyNSIsImhpZGUiOnRydWV9LHsibmFtZSI6ImF2YXRhcjQiLCJoaWRlIjp0cnVlfSx7Im5hbWUiOiJhdmF0YXIzIiwiaGlkZSI6dHJ1ZX0seyJuYW1lIjoiYXZhdGFyMiIsImhpZGUiOnRydWV9LHsibmFtZSI6ImF2YXRhcjEiLCJpbWFnZV91cmwiOiJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvNjcwNDUxMzg_dj00In0seyJuYW1lIjoiY29udHJpYnV0b3JzIiwidGV4dCI6IlR5c29uMzEwMSJ9LHsibmFtZSI6InN0YXJzIiwidGV4dCI6IjAifV0&s=94e2e865588203d21ce29726167a882d0f86d59fe0119b2c8f4eaaa3b2127b04",
    },
    {
      link: "https://github.com/Tyson3101/Live-Poll",
      preview:
        "https://ondemand.bannerbear.com/signedurl/D0nJ4XLedwbENRZa1x/image.jpg?modifications=W3sibmFtZSI6InJlcG8iLCJ0ZXh0IjoiVHlzb24zMTAxIC8gKkxpdmUtUG9sbCoifSx7Im5hbWUiOiJkZXNjIiwidGV4dCI6IkFuIGVwaWMgbGl2ZSBwb2xsIHdlYnNpdGUifSx7Im5hbWUiOiJhdmF0YXI1IiwiaGlkZSI6dHJ1ZX0seyJuYW1lIjoiYXZhdGFyNCIsImhpZGUiOnRydWV9LHsibmFtZSI6ImF2YXRhcjMiLCJoaWRlIjp0cnVlfSx7Im5hbWUiOiJhdmF0YXIyIiwiaGlkZSI6dHJ1ZX0seyJuYW1lIjoiYXZhdGFyMSIsImltYWdlX3VybCI6Imh0dHBzOi8vYXZhdGFycy5naXRodWJ1c2VyY29udGVudC5jb20vdS82NzA0NTEzOD92PTQifSx7Im5hbWUiOiJjb250cmlidXRvcnMiLCJ0ZXh0IjoiVHlzb24zMTAxIn0seyJuYW1lIjoic3RhcnMiLCJ0ZXh0IjoiMCJ9XQ&s=2f28a403b072650ec1f3592256c398413a33274e94195819d9dde7969db5593d",
    },
    {
      link: "https://github.com/Tyson3101/PasteBin",
      preview:
        "https://ondemand.bannerbear.com/signedurl/D0nJ4XLedwbENRZa1x/image.jpg?modifications=W3sibmFtZSI6InJlcG8iLCJ0ZXh0IjoiVHlzb24zMTAxIC8gKlBhc3RlQmluKiJ9LHsibmFtZSI6ImRlc2MiLCJ0ZXh0IjoiQSBoZWxwZnVsIFBhc3RlQmluIHRvIHNhdmUgbGFyZ2UgYW1vdW50IG9mIHRleHQuIn0seyJuYW1lIjoiYXZhdGFyNSIsImhpZGUiOnRydWV9LHsibmFtZSI6ImF2YXRhcjQiLCJoaWRlIjp0cnVlfSx7Im5hbWUiOiJhdmF0YXIzIiwiaGlkZSI6dHJ1ZX0seyJuYW1lIjoiYXZhdGFyMiIsImhpZGUiOnRydWV9LHsibmFtZSI6ImF2YXRhcjEiLCJpbWFnZV91cmwiOiJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvNjcwNDUxMzg_dj00In0seyJuYW1lIjoiY29udHJpYnV0b3JzIiwidGV4dCI6IlR5c29uMzEwMSJ9LHsibmFtZSI6InN0YXJzIiwidGV4dCI6IjAifV0&s=ed1bf34a4cd3863e6b6726c1d3b583e09481b0bc7a3c5739f1727c091a4cdd92",
    },
    {
      link: "https://github.com/Tyson3101/Arcade-Games",
      preview:
        "https://ondemand.bannerbear.com/signedurl/D0nJ4XLedwbENRZa1x/image.jpg?modifications=W3sibmFtZSI6InJlcG8iLCJ0ZXh0IjoiVHlzb24zMTAxIC8gKkFyY2FkZS1HYW1lcyoifSx7Im5hbWUiOiJkZXNjIiwidGV4dCI6IkFyY2FkZSBHYW1lcyBtYWRlIHdpdGggcDUuanMgIn0seyJuYW1lIjoiYXZhdGFyNSIsImhpZGUiOnRydWV9LHsibmFtZSI6ImF2YXRhcjQiLCJoaWRlIjp0cnVlfSx7Im5hbWUiOiJhdmF0YXIzIiwiaGlkZSI6dHJ1ZX0seyJuYW1lIjoiYXZhdGFyMiIsImhpZGUiOnRydWV9LHsibmFtZSI6ImF2YXRhcjEiLCJpbWFnZV91cmwiOiJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvNjcwNDUxMzg_dj00In0seyJuYW1lIjoiY29udHJpYnV0b3JzIiwidGV4dCI6IlR5c29uMzEwMSJ9LHsibmFtZSI6InN0YXJzIiwidGV4dCI6IjAifV0&s=c8eea48624a70398d5454bda1c5764d5cdd4e8f8ee71d53e3c31ab805cbdc54c",
    },
    {
      link: "https://github.com/Tyson3101/Guess-The-Item",
      preview:
        "https://ondemand.bannerbear.com/signedurl/D0nJ4XLedwbENRZa1x/image.jpg?modifications=W3sibmFtZSI6InJlcG8iLCJ0ZXh0IjoiVHlzb24zMTAxIC8gKkd1ZXNzLXRoZS1JdGVtKiJ9LHsibmFtZSI6ImRlc2MiLCJ0ZXh0IjoiQSBmdW4gUm9ja2V0IExlYWd1ZSBJdGVtIEd1ZXNzZXIgR2FtZSEgIn0seyJuYW1lIjoiYXZhdGFyNSIsImhpZGUiOnRydWV9LHsibmFtZSI6ImF2YXRhcjQiLCJoaWRlIjp0cnVlfSx7Im5hbWUiOiJhdmF0YXIzIiwiaGlkZSI6dHJ1ZX0seyJuYW1lIjoiYXZhdGFyMiIsImhpZGUiOnRydWV9LHsibmFtZSI6ImF2YXRhcjEiLCJpbWFnZV91cmwiOiJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvNjcwNDUxMzg_dj00In0seyJuYW1lIjoiY29udHJpYnV0b3JzIiwidGV4dCI6IlR5c29uMzEwMSJ9LHsibmFtZSI6InN0YXJzIiwidGV4dCI6IjAifV0&s=fd178d82f750800b15ae4716b45e4924a8296ea08e7dea09835457f9e3c437d2",
    },
    {
      link: "https://github.com/Tyson3101/MinecraftBuildldeaGenerator",
      preview:
        "https://ondemand.bannerbear.com/signedurl/D0nJ4XLedwbENRZa1x/image.jpg?modifications=W3sibmFtZSI6InJlcG8iLCJ0ZXh0IjoiVHlzb24zMTAxIC8gKk1pbmVjcmFmdEJ1aWxkSWRlYUdlbmVyYXRvcioifSx7Im5hbWUiOiJkZXNjIiwidGV4dCI6IkdpdmVzIGlkZWFzIGZvciBtaW5lY3JhZnQgYnVpbGRzIHRvIGF0dGVtcHQgaW4geW91ciB3b3JsZCJ9LHsibmFtZSI6ImF2YXRhcjUiLCJoaWRlIjp0cnVlfSx7Im5hbWUiOiJhdmF0YXI0IiwiaGlkZSI6dHJ1ZX0seyJuYW1lIjoiYXZhdGFyMyIsImhpZGUiOnRydWV9LHsibmFtZSI6ImF2YXRhcjIiLCJoaWRlIjp0cnVlfSx7Im5hbWUiOiJhdmF0YXIxIiwiaW1hZ2VfdXJsIjoiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzY3MDQ1MTM4P3Y9NCJ9LHsibmFtZSI6ImNvbnRyaWJ1dG9ycyIsInRleHQiOiJUeXNvbjMxMDEifSx7Im5hbWUiOiJzdGFycyIsInRleHQiOiIwIn1d&s=c7466630dd2395c78effd2edc834b4fd198e949562e0edc11f6917f65a052eb8",
    },
    {
      link: "https://github.com/Tyson3101/MemeMaker",
      preview:
        "https://ondemand.bannerbear.com/signedurl/D0nJ4XLedwbENRZa1x/image.jpg?modifications=W3sibmFtZSI6InJlcG8iLCJ0ZXh0IjoiVHlzb24zMTAxIC8gKk1lbWVNYWtlcioifSx7Im5hbWUiOiJkZXNjIiwidGV4dCI6IkEgTWVtZU1ha2VyIHdpdGggcDUuanMhIn0seyJuYW1lIjoiYXZhdGFyNSIsImhpZGUiOnRydWV9LHsibmFtZSI6ImF2YXRhcjQiLCJoaWRlIjp0cnVlfSx7Im5hbWUiOiJhdmF0YXIzIiwiaGlkZSI6dHJ1ZX0seyJuYW1lIjoiYXZhdGFyMiIsImhpZGUiOnRydWV9LHsibmFtZSI6ImF2YXRhcjEiLCJpbWFnZV91cmwiOiJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvNjcwNDUxMzg_dj00In0seyJuYW1lIjoiY29udHJpYnV0b3JzIiwidGV4dCI6IlR5c29uMzEwMSJ9LHsibmFtZSI6InN0YXJzIiwidGV4dCI6IjAifV0&s=828713c4f3f758de50c9e238605ef68fca84bef016e58aeb5babaf5601b0f09b",
    },
    {
      link: "https://github.com/Tyson3101/Auto-Refresher",
      preview:
        "https://ondemand.bannerbear.com/signedurl/D0nJ4XLedwbENRZa1x/image.jpg?modifications=W3sibmFtZSI6InJlcG8iLCJ0ZXh0IjoiVHlzb24zMTAxIC8gKkF1dG8tUmVmcmVzaGVyKiJ9LHsibmFtZSI6ImRlc2MiLCJ0ZXh0IjoiR29vZ2xlIGNocm9tZSBleHRlbnNpb24gdG8gc2V0IGEgaW50ZXJ2YWwgZm9yIHJlZnJlc2hpbmcgdGhlIHBhZ2UifSx7Im5hbWUiOiJhdmF0YXI1IiwiaGlkZSI6dHJ1ZX0seyJuYW1lIjoiYXZhdGFyNCIsImhpZGUiOnRydWV9LHsibmFtZSI6ImF2YXRhcjMiLCJoaWRlIjp0cnVlfSx7Im5hbWUiOiJhdmF0YXIyIiwiaGlkZSI6dHJ1ZX0seyJuYW1lIjoiYXZhdGFyMSIsImltYWdlX3VybCI6Imh0dHBzOi8vYXZhdGFycy5naXRodWJ1c2VyY29udGVudC5jb20vdS82NzA0NTEzOD92PTQifSx7Im5hbWUiOiJjb250cmlidXRvcnMiLCJ0ZXh0IjoiVHlzb24zMTAxIn0seyJuYW1lIjoic3RhcnMiLCJ0ZXh0IjoiMSJ9XQ&s=f6066966ebe3ae99697f11442eb02ead5d7c11f3407bb37cb2f8239a02f9312e",
    },
    {
      link: "https://github.com/Tyson3101/Xmas",
      preview:
        "https://ondemand.bannerbear.com/signedurl/D0nJ4XLedwbENRZa1x/image.jpg?modifications=W3sibmFtZSI6InJlcG8iLCJ0ZXh0IjoiVHlzb24zMTAxIC8gKlhtYXMqIn0seyJuYW1lIjoiZGVzYyIsInRleHQiOiJTaG93cyBob3cgbG9uZyB0aGUgd2FpdCBmb3IgQ2hyaXN0bWFzIGlzISDwn46FIn0seyJuYW1lIjoiYXZhdGFyNSIsImhpZGUiOnRydWV9LHsibmFtZSI6ImF2YXRhcjQiLCJoaWRlIjp0cnVlfSx7Im5hbWUiOiJhdmF0YXIzIiwiaGlkZSI6dHJ1ZX0seyJuYW1lIjoiYXZhdGFyMiIsImhpZGUiOnRydWV9LHsibmFtZSI6ImF2YXRhcjEiLCJpbWFnZV91cmwiOiJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvNjcwNDUxMzg_dj00In0seyJuYW1lIjoiY29udHJpYnV0b3JzIiwidGV4dCI6IlR5c29uMzEwMSJ9LHsibmFtZSI6InN0YXJzIiwidGV4dCI6IjAifV0&s=4ac8e32216773d5a174595f905d22bbde7938fe5b9374911c3767bdf6c72f71b",
    },
    {
      link: "https://github.com/Tyson3101/Rock-Paper-Scissors",
      preview:
        "https://ondemand.bannerbear.com/signedurl/D0nJ4XLedwbENRZa1x/image.jpg?modifications=W3sibmFtZSI6InJlcG8iLCJ0ZXh0IjoiVHlzb24zMTAxIC8gKlJvY2stUGFwZXItU2Npc3NvcnMqIn0seyJuYW1lIjoiZGVzYyIsInRleHQiOiJBIGZ1biBnYW1lIG9mIFJvY2sgUGFwZXIgU2Npc3NvcnMuIn0seyJuYW1lIjoiYXZhdGFyNSIsImhpZGUiOnRydWV9LHsibmFtZSI6ImF2YXRhcjQiLCJoaWRlIjp0cnVlfSx7Im5hbWUiOiJhdmF0YXIzIiwiaGlkZSI6dHJ1ZX0seyJuYW1lIjoiYXZhdGFyMiIsImhpZGUiOnRydWV9LHsibmFtZSI6ImF2YXRhcjEiLCJpbWFnZV91cmwiOiJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvNjcwNDUxMzg_dj00In0seyJuYW1lIjoiY29udHJpYnV0b3JzIiwidGV4dCI6IlR5c29uMzEwMSJ9LHsibmFtZSI6InN0YXJzIiwidGV4dCI6IjAifV0&s=14ea02fa8c311f0cc1198cb727bc743d1abdaaa66af64a056a23f613cf5d8a7a",
    },
    {
      link: "https://github.com/Tyson3101/easycommands.json",
      preview:
        "https://ondemand.bannerbear.com/signedurl/D0nJ4XLedwbENRZa1x/image.jpg?modifications=W3sibmFtZSI6InJlcG8iLCJ0ZXh0IjoiVHlzb24zMTAxIC8gKmVhc3ljb21tYW5kcy5qc29uKiJ9LHsibmFtZSI6ImRlc2MiLCJ0ZXh0IjoiQSBucG0gbW9kdWxlIHRvIGhlbHAgd2l0aCBEaXNjb3JkLmpzIGNvbW1hbmRzLiAoT3V0ZGF0ZWQpIn0seyJuYW1lIjoiYXZhdGFyNSIsImhpZGUiOnRydWV9LHsibmFtZSI6ImF2YXRhcjQiLCJoaWRlIjp0cnVlfSx7Im5hbWUiOiJhdmF0YXIzIiwiaGlkZSI6dHJ1ZX0seyJuYW1lIjoiYXZhdGFyMiIsImhpZGUiOnRydWV9LHsibmFtZSI6ImF2YXRhcjEiLCJpbWFnZV91cmwiOiJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvNjcwNDUxMzg_dj00In0seyJuYW1lIjoiY29udHJpYnV0b3JzIiwidGV4dCI6IlR5c29uMzEwMSJ9LHsibmFtZSI6InN0YXJzIiwidGV4dCI6IjAifV0&s=fe503d862dd6721588e0051aab0bad54e7cdd31a030df57d5a7efdacd8dbb6f3",
    },
    {
      link: "https://github.com/Tyson3101/Word-Counter",
      preview:
        "https://ondemand.bannerbear.com/signedurl/D0nJ4XLedwbENRZa1x/image.jpg?modifications=W3sibmFtZSI6InJlcG8iLCJ0ZXh0IjoiVHlzb24zMTAxIC8gKldvcmQtQ291bnRlcioifSx7Im5hbWUiOiJkZXNjIiwidGV4dCI6IkNvdW50cyBob3cgbWFueSB3b3JkcyB5b3UgdHlwZS4ifSx7Im5hbWUiOiJhdmF0YXI1IiwiaGlkZSI6dHJ1ZX0seyJuYW1lIjoiYXZhdGFyNCIsImhpZGUiOnRydWV9LHsibmFtZSI6ImF2YXRhcjMiLCJoaWRlIjp0cnVlfSx7Im5hbWUiOiJhdmF0YXIyIiwiaGlkZSI6dHJ1ZX0seyJuYW1lIjoiYXZhdGFyMSIsImltYWdlX3VybCI6Imh0dHBzOi8vYXZhdGFycy5naXRodWJ1c2VyY29udGVudC5jb20vdS82NzA0NTEzOD92PTQifSx7Im5hbWUiOiJjb250cmlidXRvcnMiLCJ0ZXh0IjoiVHlzb24zMTAxIn0seyJuYW1lIjoic3RhcnMiLCJ0ZXh0IjoiMCJ9XQ&s=fa9bcfd0df14aaa789be8d7d8bbfaaabae7915006af538ba8dedaeb3b7dc18fe",
    },
    {
      link: "https://github.com/Tyson3101/Click-Game-p5.js",
      preview:
        "https://ondemand.bannerbear.com/signedurl/D0nJ4XLedwbENRZa1x/image.jpg?modifications=W3sibmFtZSI6InJlcG8iLCJ0ZXh0IjoiVHlzb24zMTAxIC8gKkNsaWNrLUdhbWUtcDUuanMqIn0seyJuYW1lIjoiZGVzYyIsInRleHQiOiJBIENsaWNrLUdhbWUgbWFkZSB3aXRoIHA1LmpzIn0seyJuYW1lIjoiYXZhdGFyNSIsImhpZGUiOnRydWV9LHsibmFtZSI6ImF2YXRhcjQiLCJoaWRlIjp0cnVlfSx7Im5hbWUiOiJhdmF0YXIzIiwiaGlkZSI6dHJ1ZX0seyJuYW1lIjoiYXZhdGFyMiIsImhpZGUiOnRydWV9LHsibmFtZSI6ImF2YXRhcjEiLCJpbWFnZV91cmwiOiJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvNjcwNDUxMzg_dj00In0seyJuYW1lIjoiY29udHJpYnV0b3JzIiwidGV4dCI6IlR5c29uMzEwMSJ9LHsibmFtZSI6InN0YXJzIiwidGV4dCI6IjAifV0&s=753de6c310469859ad2423fe4b458101ffe3f1a098d2c7945f09a0be98efa88f",
    },
    {
      link: "https://github.com/Tyson3101/BookReadPlanner",
      preview:
        "https://ondemand.bannerbear.com/signedurl/D0nJ4XLedwbENRZa1x/image.jpg?modifications=W3sibmFtZSI6InJlcG8iLCJ0ZXh0IjoiVHlzb24zMTAxIC8gKkJvb2tSZWFkUGxhbm5lcioifSx7Im5hbWUiOiJkZXNjIiwidGV4dCI6IkEgaGVscGZ1bCB0b29sIHRvIGNhbGN1bGF0ZSBob3cgbWFueSBwYWdlcyB0byByZWFkIGEgZGF5LiBHb29kIGZvciBTY2hvb2wsIEhvbWV3b3JrIG9yIGV2ZXJ5ZGF5IHJlYWRpbmcuIn0seyJuYW1lIjoiYXZhdGFyNSIsImhpZGUiOnRydWV9LHsibmFtZSI6ImF2YXRhcjQiLCJoaWRlIjp0cnVlfSx7Im5hbWUiOiJhdmF0YXIzIiwiaGlkZSI6dHJ1ZX0seyJuYW1lIjoiYXZhdGFyMiIsImhpZGUiOnRydWV9LHsibmFtZSI6ImF2YXRhcjEiLCJpbWFnZV91cmwiOiJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvNjcwNDUxMzg_dj00In0seyJuYW1lIjoiY29udHJpYnV0b3JzIiwidGV4dCI6IlR5c29uMzEwMSJ9LHsibmFtZSI6InN0YXJzIiwidGV4dCI6IjAifV0&s=2bdecafa49dd8e617ac55d7dfe502be89085806dc1d45b0f6cfe52989fe6f8e6",
    },
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

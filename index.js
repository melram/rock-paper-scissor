Vue.config.devtools = true;
var AppSPR = new Vue({
  el: "#app",
  data: {
    winner: "",
    results: [],
    player: "",
    name: "",
    disabled: 0,
    cpuoption: "",
    options: ["rock", "paper", "scissors"],
  },
  methods: {
    playgame(player) {
      computer = this.options[Math.floor(Math.random() * 3)];
      this.cpuoption = computer;
      this.player = player;
      switch (player + computer) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
          this.winner = this.name;
          this.results.push({
            player: player,
            computer: computer,
            winner: this.name,
          });
          break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
          this.winner = "computer";
          this.player = player;
          this.cpuoption = computer;
          this.results.push({
            player: player,
            computer: computer,
            winner: "Computadora",
          });
          break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
          this.winner = "empate";
          this.player = player;
          this.cpuoption = computer;
          this.results.push({
            player: player,
            computer: computer,
            winner: "Empate",
          });
          break;
      }
    },
    saveplayer() {
      this.disabled = 1;
    },
  },
  computed: {
    totalempates() {
      const resitem = this.results
        .filter((x) => x.winner === "Empate")
        .reduce((sum, item) => (sum += 1), 0);
      //console.log(resitem);
      return resitem;
    },
    totalplayer() {
      const resitem = this.results
        .filter((x) => x.winner === this.name)
        .reduce((sum, item) => (sum += 1), 0);
      //console.log(resitem);
      return resitem;
    },
    totalcomputer() {
      const resitem = this.results
        .filter((x) => x.winner === "Computadora")
        .reduce((sum, item) => (sum += 1), 0);
      //console.log(resitem);
      return resitem;
    },
    totalpartidas() {
      const resitem = this.results.reduce((sum, item) => (sum += 1), 0);
      //console.log(resitem);
      return resitem;
    },
  },
});

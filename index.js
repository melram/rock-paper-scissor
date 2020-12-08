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
      switch (player + computer) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
          this.winner = "El Ganador es:" + this.name;
          this.results.push({
            player: player,
            computer: computer,
            winner: this.name,
          });
          break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
          this.winner = "El Ganador es: La computadora";
          this.results.push({
            player: player,
            computer: computer,
            winner: "Computer",
          });
          break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
          this.winner = "Empate sigamos jugando...";
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
});

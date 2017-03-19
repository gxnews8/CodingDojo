
var Tmpls = {
  boardTmpl: function(playerName) {
    return `
    <div id="game">
      <h4>Dealer ( AlphaGo )</h4>
      <div class="dealer">
      </div>

      <h4>Player ( ${playerName} )</h4>
      <div class="player">
      </div>

      <div class="actions">
        <div class="after-game-btns"><button class="deal">Deal</button></div>
        <div class="during-game-btns"><button class="hit">Hit</button><button class="stay">Stay</button></div>
      </div>

      <div class="card-totals">
        <div>Player card total: <span class="player-card-total"></span></div>
        <div>Dealer card total: <span class="dealer-card-total"></span></div>
      </div>

      <div class="status">
        Player score: <span class="player-score">0</span> <br>
        dealer score: <span class="dealer-score">0</span>
      </div>
    </div>
    `
  }
}

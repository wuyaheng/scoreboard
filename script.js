var newPlayer = document.getElementById("newPlayer");
var row = document.getElementById("row")


newPlayer.addEventListener("click", function() {
    const $newCard = $(`<div class="card" style="width: 18rem;">
    <div class="card-body text-center">
    <input type="text" class="form-control" aria-label="Small" placeholder="player name" aria-describedby="inputGroup-sizing-sm"> 
    <h4 class="card-text">0</h4>
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
    <button type="button" class="btn btn-danger"><i class="fas fa-minus"></i></button>
    <button type="button" class="btn btn-success"><i class="fas fa-plus"></i></button>
    </div>
</div>
</div>`)

    const $playerScore = $newCard.find("h4")
    const $minus = $newCard.find(".btn-danger")
    const $plus = $newCard.find(".btn-success")

    $plus.on("click", function() {
        let text = $playerScore.text()
        let score = Number(text)
        $playerScore.html(score + 1) 
    })

    $minus.on("click", function() {
        let text = $playerScore.text()
        let score = Number(text)
        $playerScore.html(score - 1) 
    })

    $(row).prepend($newCard)
})

function findWinner() {
    const cards = $(".card")
    let winner = null;
    let winningScore = 0;

}


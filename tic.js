let flag = 1;

function makeMove(cell) {
    if (cell.value === "") {
        cell.value = flag === 1 ? "X" : "O";
        cell.disabled = true;
        flag = flag === 1 ? 0 : 1;
        checkWinner();
    }
}

function checkWinner() {
    const cells = [
        document.getElementById("b1").value,
        document.getElementById("b2").value,
        document.getElementById("b3").value,
        document.getElementById("b4").value,
        document.getElementById("b5").value,
        document.getElementById("b6").value,
        document.getElementById("b7").value,
        document.getElementById("b8").value,
        document.getElementById("b9").value,
    ];

    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            document.getElementById('print').innerHTML = `Player ${cells[a]} won`;
            disableAllCells();
            highlightWinningCells(pattern);
            return;
        }
    }

    if (cells.every(cell => cell !== "")) {
        document.getElementById('print').innerHTML = "Match Tie";
    } else {
        document.getElementById('print').innerHTML = `Player ${flag === 1 ? "X" : "O"} Turn`;
    }
}

function disableAllCells() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(`b${i}`).disabled = true;
    }
}

function highlightWinningCells(pattern) {
    for (const index of pattern) {
        document.getElementById(`b${index + 1}`).style.color = "red";
    }
}

function resetGame() {
    for (let i = 1; i <= 9; i++) {
        const cell = document.getElementById(`b${i}`);
        cell.value = "";
        cell.disabled = false;
        cell.style.color = "black";
    }
    document.getElementById('print').innerHTML = "";
    flag = 1;
}

var name1, name2, c_player, player;
document.getElementById("fname").focus();
function startgame() {
  names();
  document.getElementById("container").style.display = "flex";
  document.getElementById("start").style.display = "none";
  return false;
}
function names() {
  if (document.getElementById("fname").value.length != 0) {
    name1 = document.getElementById("fname").value;
  } else {
    name1 = "Player[1]";
  }
  if (document.getElementById("lname").value.length != 0) {
    name2 = document.getElementById("lname").value;
  } else {
    name2 = "Player[2]";
  }
  document.getElementById("p1").innerHTML = name1;
  document.getElementById("p2").innerHTML = name2;
  document.getElementById("turn").innerHTML = name1;
}

let buttons = document.querySelectorAll(".box");
board = ["", "", "", "", "", "", "", "", ""];
let current_player = "X",
  last_player = "O";
for (let i = 0; i < buttons.length; i++) {
  let btn = buttons[i];
  btn.addEventListener("click", function () {
    main(btn);
  });
}
function main(btn) {
  sign(btn);
  board[btn.id - 1] = current_player;
  check();
  change_player();
}
function check() {
  check_x();
  check_y();
  check_45();
  check_draw();
}
function check_draw() {
  for (let i = 0; i < board.length; i++) {
    if (board[i] == "") {
      return false;
    }
  }
  document.getElementById("winner").innerHTML = `Draw!`;
  document.getElementById("popup").classList.remove("hide");
  clear_all(buttons);
}
function change_player() {
  if (current_player == "X") {
    current_player = "O";
  } else {
    current_player = "X";
  }
}
function sign(btn) {
  if (btn.innerHTML == "") {
    if (document.getElementById("turn").innerHTML == name2) {
      document.getElementById("turn").innerHTML = name1;
      c_player = name1;
      player = name2;
    } else {
      document.getElementById("turn").innerHTML = name2;
      c_player = name2;
      player = name1;
    }
    if (current_player == "X" && btn.innerHTML == "") {
      btn.innerHTML = current_player;
    } else if (current_player == "O" && btn.innerHTML == "") {
      btn.innerHTML = current_player;
    }
  }
}
function check_x() {
  if (allEqual(board[0], board[1], board[2], current_player)) {
    document.getElementById("winner").innerHTML = `${player} Wins!`;
    document.getElementById("popup").classList.remove("hide");
    if (c_player == name1) {
      s2.innerHTML++;
    } else {
      s1.innerHTML++;
    }
    clear_all(buttons);
  } else if (allEqual(board[3], board[4], board[5], current_player)) {
    document.getElementById("winner").innerHTML = `${player} Wins!`;
    document.getElementById("popup").classList.remove("hide");
    if (c_player == name1) {
      s2.innerHTML++;
    } else {
      s1.innerHTML++;
    }
    clear_all(buttons);
  } else if (allEqual(board[6], board[7], board[8], current_player)) {
    document.getElementById("winner").innerHTML = `${player} Wins!`;
    document.getElementById("popup").classList.remove("hide");
    if (c_player == name1) {
      s2.innerHTML++;
    } else {
      s1.innerHTML++;
    }
    clear_all(buttons);
  }
}
function check_y() {
  if (allEqual(board[0], board[3], board[6], current_player)) {
    document.getElementById("winner").innerHTML = `${player} Wins!`;
    document.getElementById("popup").classList.remove("hide");
    if (c_player == name1) {
      s2.innerHTML++;
    } else {
      s1.innerHTML++;
    }
    clear_all(buttons);
  } else if (allEqual(board[1], board[4], board[7], current_player)) {
    document.getElementById("winner").innerHTML = `${player} Wins!`;
    document.getElementById("popup").classList.remove("hide");
    if (c_player == name1) {
      s2.innerHTML++;
    } else {
      s1.innerHTML++;
    }
    clear_all(buttons);
  } else if (allEqual(board[2], board[5], board[8], current_player)) {
    document.getElementById("winner").innerHTML = `${player} Wins!`;
    document.getElementById("popup").classList.remove("hide");
    if (c_player == name1) {
      s2.innerHTML++;
    } else {
      s1.innerHTML++;
    }
    clear_all(buttons);
  }
}
function check_45() {
  if (allEqual(board[0], board[4], board[8], current_player)) {
    document.getElementById("winner").innerHTML = `${player} Wins!`;
    document.getElementById("popup").classList.remove("hide");
    if (c_player == name1) {
      s2.innerHTML++;
    } else {
      s1.innerHTML++;
    }
    clear_all(buttons);
  } else if (allEqual(board[2], board[4], board[6], current_player)) {
    document.getElementById("winner").innerHTML = `${player} Wins!`;
    document.getElementById("popup").classList.remove("hide");
    if (c_player == name1) {
      s2.innerHTML++;
    } else {
      s1.innerHTML++;
    }
    clear_all(buttons);
  }
}
function allEqual(arg1, arg2, arg3, arg4) {
  var arg1, arg2, arg3, arg4;
  if (arg1 === arg2 && arg1 === arg3 && arg1 === arg4) {
    return true;
  } else {
    return false;
  }
}

let clear_btn = document.querySelector(".clear");
clear_btn.addEventListener("click", function () {
  clear_all(buttons);
});

function clear_all(buttons) {
  for (let i = 0; i < buttons.length; i++) {
    let btn = buttons[i];
    btn.innerHTML = "";
  }
  board = ["", "", "", "", "", "", "", "", ""];
  if (document.getElementById("turn").innerHTML == name1) {
    document.getElementById("turn").innerHTML == name2;
  } else {
    document.getElementById("turn").innerHTML == name2;
  }
}

document.getElementById("popup").addEventListener("click", function () {
  hide();
});
function hide() {
  document.getElementById("popup").classList.add("hide");
}

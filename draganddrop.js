var correctCards = 0;
$( init );

function init() {

  // Hide the reset button
  $('.eraser').hide();

  // Reset the letters when button is clicked
  $('#letterBank').html( '' );
  $('#whiteboard').html( '' );

  // removes the active class from each board navigation link
  $(".boardnav > a.active").removeClass("active");

}

function handleCardDrop(event, ui) {
  $('.eraser').show();

  var letterValue = ui.draggable.data( 'letter' );
  createNewLetter(letterValue);

  ui.draggable.addClass( 'correct' );
  //ui.draggable.draggable( 'disable' );
  //$(this).droppable( 'disable' );
  ui.draggable.draggable( 'option', 'revert', false );
  //ui.draggable.draggable( 'option', 'containment', '#whiteboard' );
  ui.draggable.attr('id', 'letter'+letterValue+'correct');

}

function deleteCard(event, ui) {
  var letterValue = ui.draggable.data( 'letter' );
  createNewLetter(letterValue);
  ui.draggable.remove();
}

function createNewLetter(letterValue) {
  var spaceID = '#space'+letterValue;
  $(spaceID).append(
    $('<div>' + letterValue + '</div>').data( 'letter', letterValue ).addClass('letterBlocks').attr( 'id', 'letter'+letterValue ).appendTo( '#letterBank' ).draggable( {
    containment: '#content',
    stack: '#content',
    snap: true,
    cursor: 'move',
    revert: true
  }) );
}

function initBoard(level) {

  $('.eraser').hide();

  // resets the whiteboard anytime user wants to change board type
  $('#letterBank').html( '' );
  $('#whiteboard').html( '' );

  // Reset the letters when button is clicked
  $(".boardnav > a.active").removeClass("active");

  // useful variables to make the current board type "active"
  var id = 'board' + level;
  var element = document.getElementById(id);
  $(element).addClass('active');

  if (level == 0) {   // user wants level 0, basic alphabet
    // create 3 rows for the letters
    for ( var i=0; i<3; i++ ) {
      $('<div class="row"></div>').attr( 'id', 'row'+(i+1) ).appendTo('#letterBank');
    }

    var letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
    // create spaces and actual letter blocks within space div
    for ( var i=0; i<letters.length; i++ ) {
      if (i < 13) {    // first 8 letters: A, B, C, D, E, F, G, H
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row1').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row1' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else {
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row2').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row2' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
    }
  }

  else if (level == 1) {    // user wants level 1, consonant combos
    // create 3 rows for the letters
    for ( var i=0; i<5; i++ ) {
      $('<div class="row"></div>').attr( 'id', 'row'+(i+1) ).appendTo('#letterBank');
    }

    var letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'sh', 'th' ];
    // create spaces and actual letter blocks within space div
    for ( var i=0; i<letters.length; i++ ) {
      if (i < 13) {    // first 13 letters: A, B, C, D, E, F, G, H, I, J, K, L, M
        //document.getElementById("row1").style.width = "1040px";
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row1').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row1' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if ((i >= 13) && (i < 26)) {    // last 13 letters: N, O, P, Q, R, S, T, U, V, W, X, Y, Z
        //document.getElementById("row2").style.width = "1040px";
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row2').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row2' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else {    // 2 consonant combos: sh, th
        document.getElementById("row5").style.width = "160px";
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row5').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row5' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
    }
  }

  else if (level == 2) {
    // create 4 rows for letters
    for ( var i=0; i<5; i++ ) {
      $('<div class="row"></div>').attr( 'id', 'row'+(i+1) ).appendTo('#letterBank');
    }

    var letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ee', 'sh', 'th', 'ch', 'ck' ];
    // create spaces and actual letter blocks within space div
    for ( var i=0; i<letters.length; i++ ) {
      if (i < 13) {    // first 13 letters: A, B, C, D, E, F, G, H, I, J, K, L, M
        //document.getElementById("row1").style.width = "1040px";
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row1').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row1' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if ((i >= 13) && (i < 26)) {    // last 13 letters: N, O, P, Q, R, S, T, U, V, W, X, Y, Z
        //document.getElementById("row2").style.width = "1040px";
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row2').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row2' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if (i == 26) {     // ee
        // document.getElementById("row3").style.width = "320px";
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row3').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row3' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else {    // 4 consonant combos: sh, th, ch, ck
        document.getElementById("row5").style.width = "320px";
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row5').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row5' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
    }
  }

  else if (level == 3) {
    // create 5 rows for letters
    for ( var i=0; i<5; i++ ) {
      $('<div class="row"></div>').attr( 'id', 'row'+(i+1) ).appendTo('#letterBank');
    }

    var letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ee', 'er', 'sh', 'th', 'ch', 'ck', 'wh' ];
    // create spaces and actual letter blocks within space div
    for ( var i=0; i<letters.length; i++ ) {
      if (i < 13) {    // first 13 letters: A, B, C, D, E, F, G, H, I, J, K, L, M
        //document.getElementById("row1").style.width = "1040px";
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row1').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row1' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if ((i >= 13) && (i < 26)) {    // last 13 letters: N, O, P, Q, R, S, T, U, V, W, X, Y, Z
        //document.getElementById("row2").style.width = "1040px";
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row2').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row2' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if (i == 26) {     // ee
        document.getElementById("row3").style.width = "400px";
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row3').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row3' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if (i == 27) {    // er
        //document.getElementById("row4").style.width = "360px";
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row4').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row4' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else {    // 5 consonant combos: sh, th, ch, ck, wh
        document.getElementById("row5").style.width = "400px";
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row5').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row5' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
    }
  }

  else if (level == 4) {
    // create 5 rows for letters
    for ( var i=0; i<5; i++ ) {
      $('<div class="row"></div>').attr( 'id', 'row'+(i+1) ).appendTo('#letterBank');
    }

    var letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ee', 'oi', 'oy', 'ai', 'ay', 'er', 'sh', 'th', 'ch', 'ck', 'wh' ];
    // create spaces and actual letter blocks within space div
    for ( var i=0; i<letters.length; i++ ) {
      if (i < 13) {    // first 13 letters: A, B, C, D, E, F, G, H, I, J, K, L, M
        document.getElementById("row1").style.width = "1040px";
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row1').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row1' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if ((i >= 13) && (i < 26)) {    // last 13 letters: N, O, P, Q, R, S, T, U, V, W, X, Y, Z
        document.getElementById("row2").style.width = "1040px";
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row2').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row2' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if ((i >= 26) && (i < 31)) {     // 5 vowel combos: ee, oi, oy, ai, ay
        document.getElementById("row3").style.height = "400px";
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row3').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row3' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if (i == 31) {    // er
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row4').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row4' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else {    // 5 consonant combos: sh, th, ch, ck, wh
        document.getElementById("row5").style.width = "400px";
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row5').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row5' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
    }
  }

  else if (level == 5) {
    // create 5 rows for letters
    for ( var i=0; i<5; i++ ) {
      $('<div class="row"></div>').attr( 'id', 'row'+(i+1) ).appendTo('#letterBank');
    }

    var letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ee', 'oi', 'oy', 'ai', 'ay', 'er', 'ar', 'or', 'ng', 'sh', 'th', 'ch', 'ck', 'wh' ];
    // create spaces and actual letter blocks within space div
    for ( var i=0; i<letters.length; i++ ) {
      if (i < 13) {    // first 13 letters: A, B, C, D, E, F, G, H, I, J, K, L, M
        document.getElementById("row1").style.width = "1040px";
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row1').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row1' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if ((i >= 13) && (i < 26)) {    // last 13 letters: N, O, P, Q, R, S, T, U, V, W, X, Y, Z
        document.getElementById("row2").style.width = "1040px";
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row2').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row2' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if ((i >= 26) && (i < 31)) {     // 5 vowel combos: ee, oi, oy, ai, ay
        document.getElementById("row3").style.height = "400px";    // 80px * numOfBlocksInRow
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row3').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row3' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if ((i >= 31) && (i < 34)) {    // 3 suffixes: er, ar, or
        document.getElementById("row4").style.height = "240px";   // 80px * numOfBlocksInRow
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row4').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row4' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else {    // 6 consonant combos: ng, sh, th, ch, ck, wh
        document.getElementById("row5").style.width = "480px";   // 80px * numOfBlocksInRow
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row5').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row5' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
    }
  }

  else if (level == 6) {
    // create 5 rows for letters
    for ( var i=0; i<7; i++ ) {
      $('<div class="row"></div>').attr( 'id', 'row'+(i+1) ).appendTo('#letterBank');
    }

    var letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ee', 'oi', 'oy', 'ai', 'ay', 'er', 'ar', 'or', 'ng', 'sh', 'th', 'ch', 'ck', 'wh', 'tch' ];
    // create spaces and actual letter blocks within space div
    for ( var i=0; i<letters.length; i++ ) {
      if (i < 13) {    // first 13 letters: A, B, C, D, E, F, G, H, I, J, K, L, M
        document.getElementById("row1").style.width = "1040px";
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row1').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row1' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if ((i >= 13) && (i < 26)) {    // last 13 letters: N, O, P, Q, R, S, T, U, V, W, X, Y, Z
        document.getElementById("row2").style.width = "1040px";
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row2').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row2' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if ((i >= 26) && (i < 31)) {     // 5 vowel combos: ee, oi, oy, ai, ay
        document.getElementById("row3").style.height = "400px";    // 80px * numOfBlocksInRow
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row3').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row3' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if ((i >= 31) && (i < 34)) {    // 3 suffixes: er, ar, or
        document.getElementById("row4").style.height = "240px";   // 80px * numOfBlocksInRow
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row4').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row4' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if ((i >= 34) && (i < 40)) {    // 6 consonant combos: ng, sh, th, ch, ck, wh
        document.getElementById("row5").style.width = "480px";   // 80px * numOfBlocksInRow
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row5').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row5' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else {    // tch
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row7').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row7' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
    }
  }

  else if (level == 7) {
    // create 5 rows for letters
    for ( var i=0; i<7; i++ ) {
      $('<div class="row"></div>').attr( 'id', 'row'+(i+1) ).appendTo('#letterBank');
    }

    var letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ee', 'oi', 'oy', 'ai', 'ay', 'er', 'ar', 'or', 'ng', 'sh', 'th', 'ch', 'ck', 'wh', 'ow', 'ou', 'ough', 'tch' ];
    // create spaces and actual letter blocks within space div
    for ( var i=0; i<letters.length; i++ ) {
      if (i < 13) {    // first 13 letters: A, B, C, D, E, F, G, H, I, J, K, L, M
        document.getElementById("row1").style.width = "1040px";
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row1').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row1' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if ((i >= 13) && (i < 26)) {    // last 13 letters: N, O, P, Q, R, S, T, U, V, W, X, Y, Z
        document.getElementById("row2").style.width = "1040px";
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row2').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row2' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if ((i >= 26) && (i < 31)) {     // 5 vowel combos: ee, oi, oy, ai, ay
        document.getElementById("row3").style.height = "400px";    // 80px * numOfBlocksInRow
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row3').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row3' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if ((i >= 31) && (i < 34)) {   // 3 suffixes: er, ar, or
        document.getElementById("row4").style.height = "240px";   // 80px * numOfBlocksInRow
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row4').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row4' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if ((i >= 34) && (i < 40)) {     // 6 consonant combos: ng, sh, th, ch, ck, wh
        document.getElementById("row5").style.width = "480px";   // 80px * numOfBlocksInRow
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row5').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row5' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if ((i >= 40) && (i < 43)) {   // ow, ou, ough
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row6').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row6' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else {    // tch
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row7').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row7' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
    }
  }

  else if (level == 8) {
    // create 5 rows for letters
    for ( var i=0; i<7; i++ ) {
      $('<div class="row"></div>').attr( 'id', 'row'+(i+1) ).appendTo('#letterBank');
    }

    var letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ee', 'ow', 'oi', 'ou', 'oy', 'ough', 'ai', 'ea', 'ay', 'oa', 'er', 'ar', 'or', 'ng', 'sh', 'th', 'ch', 'ck', 'wh', 'tch' ];
    // create spaces and actual letter blocks within space div
    for ( var i=0; i<letters.length; i++ ) {
      if (i < 13) {    // first 13 letters: A, B, C, D, E, F, G, H, I, J, K, L, M
        document.getElementById("row1").style.width = "1040px";
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row1').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row1' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if ((i >= 13) && (i < 26)) {    // last 13 letters: N, O, P, Q, R, S, T, U, V, W, X, Y, Z
        document.getElementById("row2").style.width = "1040px";
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row2').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row2' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if ((i >= 26) && (i < 36)) {     // 10 vowel combos: ee, oi, oy, ai, ay, ow, ou, ough, ea, oa
        document.getElementById("row3").style.height = "400px";   // 80px * numOfBlocksInRow
        document.getElementById("row3").style.width = "160px";   // 80px * numOfBlocksInRow
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row3').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row3' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if ((i >= 36) && (i < 39)) {   // 3 suffixes: er, ar, or
        document.getElementById("row4").style.height = "240px";   // 80px * numOfBlocksInRow
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row4').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row4' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if ((i >= 39) && (i < 45)) {   // 6 consonant combos: ng, sh, th, ch, ck, wh
        document.getElementById("row5").style.width = "480px";   // 80px * numOfBlocksInRow
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row5').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row5' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else  {   // tch
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row7').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row7' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
    }
  }

  else if (level == 9) {
    // create 5 rows for letters
    for ( var i=0; i<7; i++ ) {
      $('<div class="row"></div>').attr( 'id', 'row'+(i+1) ).appendTo('#letterBank');
    }

    var letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ee', 'ow', 'oi', 'ou', 'oy', 'ough', 'ai', 'ea', 'ay', 'oa', 'ur', 'ir', 'er', 'ar', 'or', 'ng', 'sh', 'th', 'ch', 'ck', 'wh', 'tch' ];
    // create spaces and actual letter blocks within space div
    for ( var i=0; i<letters.length; i++ ) {
      if (i < 13) {    // first 13 letters: A, B, C, D, E, F, G, H, I, J, K, L, M
        document.getElementById("row1").style.width = "1040px";
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row1').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row1' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if ((i >= 13) && (i < 26)) {    // last 13 letters: N, O, P, Q, R, S, T, U, V, W, X, Y, Z
        document.getElementById("row2").style.width = "1040px";
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row2').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row2' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if ((i >= 26) && (i < 36)) {     // 10 vowel combos: ee, oi, oy, ai, ay, ow, ou, ough, ea, oa
        document.getElementById("row3").style.height = "400px";   // 80px * numOfBlocksInRow
        document.getElementById("row3").style.width = "160px";   // 80px * numOfBlocksInRow
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row3').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row3' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if ((i >= 36) && (i < 41)) {   // 5 suffixes: ur, ir, er, ar, or
        document.getElementById("row4").style.height = "400px";   // 80px * numOfBlocksInRow
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row4').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row4' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if ((i >= 41) && (i < 47)) {   // 6 consonant combos: ng, sh, th, ch, ck, wh
        document.getElementById("row5").style.width = "480px";   // 80px * numOfBlocksInRow
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row5').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row5' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else  {   // tch
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row7').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row7' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
    }
  }

  else if (level == 10) {
    // create 5 rows for letters
    for ( var i=0; i<7; i++ ) {
      $('<div class="row"></div>').attr( 'id', 'row'+(i+1) ).appendTo('#letterBank');
    }

    var letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ee', 'ow', 'oi', 'ou', 'oy', 'ough', 'ai', 'ea', 'ay', 'oa', 'ear', 'ur', 'ir', 'er', 'ar', 'or', 'ng', 'sh', 'th', 'ch', 'ck', 'wh', 'tch' ];
    // create spaces and actual letter blocks within space div
    for ( var i=0; i<letters.length; i++ ) {
      if (i < 13) {    // first 13 letters: A, B, C, D, E, F, G, H, I, J, K, L, M
        document.getElementById("row1").style.width = "1040px";
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row1').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row1' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if ((i >= 13) && (i < 26)) {    // last 13 letters: N, O, P, Q, R, S, T, U, V, W, X, Y, Z
        document.getElementById("row2").style.width = "1040px";
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row2').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row2' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if ((i >= 26) && (i < 36)) {     // 10 vowel combos: ee, oi, oy, ai, ay, ow, ou, ough, ea, oa
        document.getElementById("row3").style.height = "400px";   // 80px * numOfBlocksInRow
        document.getElementById("row3").style.width = "160px";   // 80px * numOfBlocksInRow
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row3').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row3' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if ((i >= 36) && (i < 42)) {   // 6 suffixes: ear, ur, ir, er, ar, or
        document.getElementById("row4").style.height = "400px";   // 80px * numOfBlocksInRow
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row4').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row4' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if ((i >= 42) && (i < 48)) {   // 6 consonant combos: ng, sh, th, ch, ck, wh
        document.getElementById("row5").style.width = "480px";   // 80px * numOfBlocksInRow
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row5').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row5' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else  {   // tch
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row7').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row7' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
    }
  }

  else if (level == 11) {
    // create 5 rows for letters
    for ( var i=0; i<7; i++ ) {
      $('<div class="row"></div>').attr( 'id', 'row'+(i+1) ).appendTo('#letterBank');
    }

    var letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ee', 'ow', 'oi', 'ou', 'oy', 'ough', 'ai', 'ea', 'ay', 'oa', 'ear', 'ur', 'ir', 'er', 'ar', 'or', 'ng', 'sh', 'th', 'ch', 'ck', 'wh', 'wr', 'tch' ];
    // create spaces and actual letter blocks within space div
    for ( var i=0; i<letters.length; i++ ) {
      if (i < 13) {    // first 13 letters: A, B, C, D, E, F, G, H, I, J, K, L, M
        document.getElementById("row1").style.width = "1040px";
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row1').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row1' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if ((i >= 13) && (i < 26)) {    // last 13 letters: N, O, P, Q, R, S, T, U, V, W, X, Y, Z
        document.getElementById("row2").style.width = "1040px";
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row2').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row2' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if ((i >= 26) && (i < 36)) {     // 10 vowel combos: ee, oi, oy, ai, ay, ow, ou, ough, ea, oa
        document.getElementById("row3").style.height = "400px";   // 80px * numOfBlocksInRow
        document.getElementById("row3").style.width = "160px";   // 80px * numOfBlocksInRow
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row3').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row3' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if ((i >= 36) && (i < 42)) {   // 6 suffixes: ear, ur, ir, er, ar, or
        document.getElementById("row4").style.height = "400px";   // 80px * numOfBlocksInRow
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row4').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row4' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if ((i >= 42) && (i < 49)) {   // 7 consonant combos: ng, sh, th, ch, ck, wh, wr
        document.getElementById("row5").style.width = "560px";   // 80px * numOfBlocksInRow
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row5').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row5' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else  {   // tch
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row7').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row7' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
    }
  }

  else if (level == 12) {
    // create 5 rows for letters
    for ( var i=0; i<7; i++ ) {
      $('<div class="row"></div>').attr( 'id', 'row'+(i+1) ).appendTo('#letterBank');
    }

    var letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ee', 'ow', 'oi', 'ou', 'oy', 'ough', 'ai', 'ea', 'ay', 'oa', 'ear', 'ur', 'ir', 'er', 'ar', 'or', 'ng', 'sh', 'th', 'ch', 'ck', 'wh', 'wr', 'oo', 'tch' ];
    // create spaces and actual letter blocks within space div
    for ( var i=0; i<letters.length; i++ ) {
      if (i < 13) {    // first 13 letters: A, B, C, D, E, F, G, H, I, J, K, L, M
        document.getElementById("row1").style.width = "1040px";
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row1').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row1' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if ((i >= 13) && (i < 26)) {    // last 13 letters: N, O, P, Q, R, S, T, U, V, W, X, Y, Z
        document.getElementById("row2").style.width = "1040px";
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row2').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row2' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if ((i >= 26) && (i < 36)) {     // 10 vowel combos: ee, oi, oy, ai, ay, ow, ou, ough, ea, oa
        document.getElementById("row3").style.height = "400px";   // 80px * numOfBlocksInRow
        document.getElementById("row3").style.width = "160px";   // 80px * numOfBlocksInRow
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row3').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row3' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if ((i >= 36) && (i < 42)) {   // 6 suffixes: ear, ur, ir, er, ar, or
        document.getElementById("row4").style.height = "400px";   // 80px * numOfBlocksInRow
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row4').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row4' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if ((i >= 42) && (i < 49)) {   // 7 consonant combos: ng, sh, th, ch, ck, wh, wr
        document.getElementById("row5").style.width = "560px";   // 80px * numOfBlocksInRow
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row5').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row5' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else if (i == 49) {     // oo
        document.getElementById("row6").style.height = "80px";   // 80px * numOfBlocksInRow
        document.getElementById("row6").style.margin = "240px 0 0";   // 80px * numOfBlocksInRow
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row6').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row6' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
      else  {   // tch
        $('<div class="spaces">' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'space'+letters[i] ).appendTo('#row7').append(
            $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).addClass('letterBlocks').attr( 'id', 'letter'+letters[i] ).appendTo( '#row7' ).draggable( {
              containment: '#content',
              stack: '#content',
              snap: true,
              cursor: 'move',
              revert: true
            } ));
      }
    }
  }


  $('#whiteboard').droppable( {
    accept: '#letterBank div',
    hoverClass: 'hovered',
    drop: handleCardDrop
  });

  $('#letterBank').droppable( {
    accept: '#letterBank div',
    drop: deleteCard
  });
}

// animation code for eraser if needed
// var id = null;
// function myMove() {
//   var elem = document.getElementById("animate");
//   var pos = 0;
//   var deg = 45;
//   elem.style.webkitTransform = 'rotate('+deg+'deg)';
//   elem.style.mozTransform    = 'rotate('+deg+'deg)';
//   elem.style.msTransform     = 'rotate('+deg+'deg)';
//   elem.style.oTransform      = 'rotate('+deg+'deg)';
//   elem.style.transform       = 'rotate('+deg+'deg)';
//   clearInterval(id);
//   id = setInterval(frame, 5);
//   function frame() {
//     if (pos == 100) {
//       clearInterval(id);
//       init();
//     }
//     else {
//       pos++;
//       elem.style.bottom = pos + 'px';
//       elem.style.left = pos + 'px';
//     }
//   }
// }

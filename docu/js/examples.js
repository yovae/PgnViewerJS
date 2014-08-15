var examples = {};

examples["1000"] = {
    desc: "Use PgnViewerJS for only displaying a board. See the section \"Boards\" for details on that.",
    html: "<div id=\"board\" style=\"width: 400px\"><\/div>",
    name: "Board with defaults",
    jsStr: "var board = pgnBoard('board', {});",
    jsFn: function() {
        var board = pgnBoard('board', {});
    }
};

examples["1001"] = {
    desc: "Use PgnViewerJS for showing a (short) game. The buttons, the board and the display of the " +
        "moves are all default values, that may be changed by configuration parameters. Parameter pgn is " +
        "mandatory when using \"pgnView\".",
    html: "<div id=\"board\" style=\"width: 400px\"><\/div>",
    name: "Shortest game possible",
    jsStr: "var pgn = \"1. f4 e6 2. g4 Qh4#\";\nvar board = pgnView('board', {pgn: pgn});",
    jsFn: function() {
        var pgn = "1. f4 e6 2. g4 Qh4#";
        var board = pgnView('board', {pgn: pgn});
    }
};

examples["1002"] = {
    desc: "Use PgnViewerJS for displaying a game in typical notation, with diagrams and different styles " +
        "for the moves, the boards, ... Looks similar to the style of some magazines or books. " +
        "For the diagram, I have taken the NAG 'D' (or $220), see <a href=\"http://en.wikipedia.org/wiki/Numeric_Annotation_Glyphs\">NAGs at Wikipedia</a> for details",
    html: "<div id=\"board\" style=\"width: 250px\"><\/div>",
    name: "Printing a game",
    jsStr: "var pgn = \"1. f4 e6 2. g4D Qh4#$220\";\nvar board = pgnPrint('board', {pgn: pgn});",
    jsFn: function() {
        var pgn = "1. f4 e6 2. g4D { what a horrible move (but the shortest mate " +
            "you can get ...) } Qh4#$220";
        var board = pgnPrint('board', {pgn: pgn});
    }
};

examples["1003"] = {
    desc: "Use PgnViewerJS for viewing a game with the option to edit it by adding variations, comments, ..." +
        "So start playing on the board, take moves back, and test variations. Not all " +
        "buttons are implemented, but the PGN button works and displays the current " +
        "game in the pgn notation (including comments).",
    html: "<div id=\"board\" style=\"width: 300px\"><\/div>",
    name: "Editing a game",
    jsStr: "var board = pgnEdit('board', {});",
    jsFn: function() {
        var board = pgnEdit('board', {});
    }
};

examples["1020"] = {
    desc: "ChessBoard initializes to the starting position on board with an empty configuration.",
    html: "<div id=\"board\" style=\"width: 400px\"><\/div>",
    name: "Starting Board",
    jsStr: "var board = pgnBoard('board', {});",
    jsFn: function() {
        var board = pgnBoard('board', {});
    }
};
examples["1021"] = {
    desc: "ChessBoard with theme 'zeit' / 'green' and pieceStyle 'merida' / 'case'.",
    html: "<div id=\"board\" style=\"width: 300px; margin: 20px\"><\/div>\n<div id=\"board2\" style=\"width: 300px;margin: 20px\"><\/div>",
    name: "Theme: Zeit and Style: Merida",
    jsStr: "var board = pgnBoard('board', {" +
        "\n     pieceStyle: 'merida', " +
        "\n     theme: 'zeit'});" +
"\nvar board2 = pgnBoard('board2', {" +
        "\n     pieceStyle: 'case', " +
        "\n     theme: 'green'});",
    jsFn: function() {
        var board = pgnBoard('board', {pieceStyle: 'merida', theme: 'zeit'});
        var board2 = pgnBoard('board2', {pieceStyle: 'case', theme: 'green'});
    }
};

examples["1022"] = {
    desc: "ChessBoard with different positions. See the start position, a short finished game " +
        "and the Ruy Lopez after the first three moves. The positions are given as " +
        "FEN strings (see <a href=\"http://en.wikipedia.org/wiki/Forsyth–Edwards_Notation\">Forsyth–Edwards Notation</a> for details to that)." +
        "FEN strings are normally generated by software like ChessBase or Scid.",
    html: "<div id=\"b1\" style=\"width: 300px; margin: 20px\"><\/div>\n<div id=\"b2\" style=\"width: 300px; margin: 20px\"><\/div>" +
        "\n<div id=\"b3\" style=\"width: 300px; margin: 20px\"><\/div>",
    name: "Different positions",
    jsStr: "var fen1 = 'start';" +
        "\nvar fen2 = 'rnb1kbnr/pppp1ppp/4p3/8/5PPq/8/' +" +
        "\n     'PPPPP2P/RNBQKBNR w KQkq - 0 3';" +
        "\nvar fen3 = 'r1bqkbnr/1ppp1ppp/p1n5/1B2p3/4P3/5N2/' +" +
        "\n     'PPPP1PPP/RNBQK2R w KQkq - 0 4';" +
        "\npgnBoard('b1', {fen: fen1});" +
        "\npgnBoard('b2', {position: fen2});" +
        "\npgnBoard('b3', {position: fen3});",
    jsFn: function() {
        var fen1 = 'start';
        var fen2 = 'rnb1kbnr/pppp1ppp/4p3/8/5PPq/8/PPPPP2P/RNBQKBNR w KQkq - 0 3';
        var fen3 = 'r1bqkbnr/1ppp1ppp/p1n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4';
        pgnBoard('b1', {position: fen1});
        pgnBoard('b2', {position: fen2});
        pgnBoard('b3', {position: fen3});
    }
};

examples["1023"] = {
    desc: "ChessBoard with different additional configuration parameters. Used are here orientation and showNotation.",
    html: "<div id=\"b1\" style=\"width: 300px; margin: 20px\"><\/div>" +
        "\n<div id=\"b2\" style=\"width: 300px; margin: 20px\"><\/div>",
    name: "Additional parameters",
    jsStr: "pgnBoard('b1', {orientation: 'black'});" +
        "\npgnBoard('b2', {showNotation: false});",
    jsFn: function() {
        pgnBoard('b1', {orientation: 'black'});
        pgnBoard('b2', {showNotation: false});
    }
};

examples["1050"] = {
    desc: "This is the same theme again, with a typical example to show how the game is displayed. Have a look at the headers, board and the moves.",
    html: "<div id=\"b1\" style=\"width: 390px\"><\/div>",
    name: "Complete game in Chess.com style",
    jsStr: "pgn = '1. e4 e5 2. Nf3 Nc6  ...'" +
        "\npgnView('b1', {pgn: pgn, theme: 'chesscom', boardSize: '150px', scrollable: true};",
    jsFn: function() {
        pgn = '[White "Anderssen, Adolf"][Black "Dufresne, Jean"]' +
            ' 1. e4 e5 2. Nf3 Nc6  3.Bc4 Bc5 4.b4 Bxb4 5.c3 Ba5 6.d4 exd4 7.O-O d3 8.Qb3 Qf6 9.e5 Qg6 10.Re1 Nge7 11.Ba3 b5 12.Qxb5 Rb8 13.Qa4 Bb6 14.Nbd2 Bb7 15.Ne4 Qf5 16.Bxd3 Qh5 17.Nf6+ gxf6 18.exf6 Rg8 19.Rad1 Qxf3 20.Rxe7+ Nxe7 21.Qxd7+ Kxd7 22.Bf5+ Ke8 23.Bd7+ Kf8 24. Bxe7# 1:0';
        pgnView('b1', {pgn: pgn, theme: 'chesscom', boardSize: '200px', movesWidth: '180px', scrollable: true, movesHeight: "220px"});
    }
};
examples["1051"] = {
    desc: "An example for a normal game, with the standard style. Try to use the buttons, and play the game forth and back. You may set any position in the game by just clicking on the move.",
    html: "<div id=\"b1\" style=\"width: 360px\"><\/div>",
    name: "Normal Games",
    jsStr: "",
    jsFn: function() {
        var pgn = ['[White "Anderssen, Adolf"][Black "Dufresne, Jean"]',
            '[Result "1-0"][ECO "C52"]',
            '[Site "Berlin"][Date "1852"]',
            '1. e4 e5 2. Nf3 Nc6  3.Bc4 Bc5 4.b4 Bxb4 5.c3 Ba5 6.d4 exd4 7.O-O d3 8.Qb3 Qf6 9.e5 Qg6 10.Re1 Nge7 11.Ba3 b5 12.Qxb5 Rb8 13.Qa4 Bb6 14.Nbd2 Bb7 15.Ne4 Qf5 16.Bxd3 Qh5 { now the whole idea unfolds } 17.Nf6+ gxf6 18.exf6 Rg8 19.Rad1!  Qxf3? 20.Rxe7+! Nxe7 21.Qxd7+ Kxd7 22.Bf5+ Ke8 23.Bd7+ Kf8 24. Bxe7# 1:0'].join(" ");
        pgnv = pgnView("b1", {pgn: pgn});
    }
};
examples["1052"] = {
    desc: "The same game in a more traditional style",
    html: "<div id=\"b1\" style=\"width: 360px\"><\/div>",
    name: "Falken Style",
    jsStr: "",
    jsFn: function() {
        var pgn = ['[White "Anderssen, Adolf"][Black "Dufresne, Jean"]',
            '[Result "1-0"][ECO "C52"]',
            '[Site "Berlin"][Date "1852"]',
            '1. e4 e5 2. Nf3 Nc6  3.Bc4 Bc5 4.b4 Bxb4 5.c3 Ba5 6.d4 exd4 7.O-O d3 8.Qb3 Qf6 9.e5 Qg6 10.Re1 Nge7 11.Ba3 b5 12.Qxb5 Rb8 13.Qa4 Bb6 14.Nbd2 Bb7 15.Ne4 Qf5 16.Bxd3 Qh5 { now the whole idea unfolds } 17.Nf6+ gxf6 18.exf6 Rg8 19.Rad1!  Qxf3? 20.Rxe7+! Nxe7 21.Qxd7+ Kxd7 22.Bf5+ Ke8 23.Bd7+ Kf8 24. Bxe7# 1:0'].join(" ");
        pgnv = pgnView("b1", {pgn: pgn, theme: 'falken'});
    }
};
examples["1100"] = {
    desc: "This is an example of a chess game, where the moves are not only shown, but can be " +
        "changed. Try to play on the board, use the move, before and after comments, switch " +
        "between them. Insert new moves, and see the display changing. " +
        "Try to find the PGN button, and refresh the display when you have changed " +
        "a comment.",
    html: "<div id=\"b1\" style=\"width: 360px\"><\/div>",
    name: "Edit game",
    jsStr: "...",
    jsFn: function() {
        var pgn = ['[White "Anderssen, Adolf"][Black "Dufresne, Jean"]',
            '[Result "1-0"][ECO "C52"]',
            '[Site "Berlin"][Date "1852"]',
            '1. e4 e5 2. Nf3 Nc6  3.Bc4 Bc5 4.b4 Bxb4 5.c3 Ba5 6.d4 exd4 7.O-O d3 8.Qb3 Qf6 9.e5 Qg6 10.Re1 Nge7 11.Ba3 b5 12.Qxb5 Rb8 13.Qa4 Bb6 14.Nbd2 Bb7 15.Ne4 Qf5 16.Bxd3 Qh5 { now the whole idea unfolds } 17.Nf6+ gxf6 18.exf6 Rg8 19.Rad1!  Qxf3? 20.Rxe7+! Nxe7 21.Qxd7+ Kxd7 22.Bf5+ Ke8 23.Bd7+ Kf8 24. Bxe7# 1:0'].join(" ");
        pgnv = pgnEdit("b1", {pgn: pgn});
    }
};
examples["1101"] = {
    desc: "Here the normal layout of the moves, with some special characters, the so called NAGs. PNGViewerJS knows the NAGs, and " +
        "translates them in the correct notation. The following game " +
        "is not really correct commented, but it shows the different options.\nNot all characters are available in all fonts, so we should " +
        "check that ....",
    html: "<div id=\"b1\" style=\"width: 360px\"><\/div>",
    name: "Annotated moves",
    jsStr: "...",
    jsFn: function() {
        var pgn = '1. e4$1 e5$2 2. Nf3$3 Nc6$4 3. Bb5$5 a6$6 4. Ba4$7 Nf6$10 5. O-O$13 Be7$14 6. Re1$15 b5$16 7. Bb3$17 O-O$18 8. c3$19 d5$3';
        var pgnv = pgnView('b1', {pgn: pgn});
    }
};
examples["1102"] = {
    desc: "Here a game with a lot of variations, sometimes two or more levels deep. This is part of my opening repertoire as white.",
    html: "<div id=\"b1\" style=\"width: 360px\"><\/div>",
    name: "Variations in Moves",
    jsStr: "...",
    jsFn: function() {
        var pgn = '1. e4 e5 ( 1... c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 ( 5... e5 6. Ndb5 a6 7. Na3 b5 8. Nd5 Nxe4 { This is a wild variation } ) 6. Be3 e6 ) 2. Nf3 ( 2. f4 exf4 3. Nf3 g5 ( 3... Nf6 4. e5 Nh5 ) ( 3... Be7 4. Bc4 Bh4+ 5. Kf1 ) 4. h4 ) Nc6 3. Bb5 a6 4. Ba4'
        var pgnv = pgnView('b1', {pgn: pgn});
    }
};
examples["1150"] = {
    desc: "",
    html: "",
    name: "Themes: Chess.com",
    jsStr: "",
    jsFn: function() {

    }
};
examples["1151"] = {
    desc: "",
    html: "",
    name: "Themes: Green",
    jsStr: "",
    jsFn: function() {

    }
};
examples["1152"] = {
    desc: "",
    html: "",
    name: "Themes: Zeit",
    jsStr: "",
    jsFn: function() {

    }
};
examples["1153"] = {
    desc: "",
    html: "",
    name: "Themes: Informator",
    jsStr: "",
    jsFn: function() {

    }
};

var htmlEscape = function(str) {
    return (str + '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/\//g, '&#x2F;')
        .replace(/`/g, '&#x60;');
};

var highlightGroupHeader = function(groupIndex) {
    $('div#examples_list_container h4').removeClass('active');
    $('h4#group_header_' + groupIndex).addClass('active');
};

var highlightExample = function(id) {
    $('div#examples_list_container li').removeClass('active');
    $('li#example_' + id).addClass('active');
};

var showExample = function(number) {
    var groupIndex = parseInt($('li#example_' + number)
        .parent('ul').attr('id').replace('group_container_', ''), 10);

    $('ul#group_container_' + groupIndex).css('display', '');
    highlightGroupHeader(groupIndex);
    highlightExample(number);

    $('#example_name').html(examples[number].name);
    $('#example_single_page_link').attr('href', 'examples/' + number);
    $('#example_desc_container').html(examples[number].desc);
    $('#example_html_container').html(examples[number].html);
    $('#example_js_container').html('<pre class="prettyprint">' + examples[number].jsStr + '</pre>');
    $('#example_show_html_container').html('<pre class="prettyprint">' + htmlEscape(examples[number].html) + '</pre>');
    examples[number].jsFn();
    prettyPrint();
};

var clickExample = function() {
    var number = parseInt($(this).attr('id').replace('example_', ''), 10);
    if (examples.hasOwnProperty(number) !== true) return;

    window.location.hash = number;
    loadExampleFromHash();
};

var loadExampleFromHash = function() {
    var number = parseInt(window.location.hash.replace('#', ''), 10);
    if (examples.hasOwnProperty(number) !== true) {
        number = 1000;
        window.location.hash = number;
    }
    showExample(number);
};

var clickGroupHeader = function() {
    var groupIndex = parseInt($(this).attr('id').replace('group_header_', ''), 10);
    var examplesEl = $('ul#group_container_' + groupIndex);
    if (examplesEl.css('display') === 'none') {
        examplesEl.slideDown('fast');
    }
    else {
        examplesEl.slideUp('fast');
    }
};

var init = function() {
    $('#examples_list_container').on('click', 'li', clickExample);
    $('#examples_list_container').on('click', 'h4', clickGroupHeader);
    loadExampleFromHash();
};
$(document).ready(init);
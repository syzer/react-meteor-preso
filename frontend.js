if (Meteor.isClient) {
  renderBoard = function(board) {
    var rows = [];

    for (var rowIndex = 0; rowIndex < 3; rowIndex++) {
      var row = [];

      for (var colIndex = 0; colIndex < 3; colIndex++) {
        var value = board.get(rowIndex, colIndex);
        var className = 'cellEmpty';
        if (value === 'x') {
          className = 'cellX';
        } else if (value === 'y') {
          className = 'cellY';
        }
        row.push(
          React.DOM.div({
            className: className
          })
        );
      }

      rows.push(
        React.DOM.div({className: 'row'}, row)
      );
    }

    return (
      React.DOM.div(
        null,
        rows
      )
    );
  };
}
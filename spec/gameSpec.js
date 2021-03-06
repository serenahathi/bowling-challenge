describe("game", function() {

  beforeEach(function() {
    game = new Game();
  });  

  describe("before a new game", function() {
    it("creates an empty array to hold scores", function() {
      expect(game.scoreCard).toEqual([]);
    });

   it("has a current score of 0", function(){
    expect(game.result).toEqual(0);
   });
  });

  describe("calculates score for", function(){
    it( "a gutter game", function() {
        rollMany(0, 20);
      expect(game.score()).toEqual(0); 
    });
  
    it("a game of all ones", function(){
        rollMany(1, 20);
      expect(game.score()).toEqual(20); 
    });

    it("a spare", function(){
      game.roll(5);
      game.roll(5);
      game.roll(3);
      rollMany(0, 17);
      expect(game.score()).toEqual(16);
    });

    it("a strike", function(){
      game.roll(10);
      game.roll(1);
      game.roll(2);
      rollMany(0, 16);
      expect(game.score()).toEqual(16);
    });

    it("a perfect game", function(){
      rollMany(10,12);
      expect(game.score()).toEqual(300); 
    });

  });



// helper 
  var rollMany = function(pins, rolls) {
    for (var i = 0; i < 20; i++) {
      game.roll(pins);
    }
  }
  
  
  ;
});
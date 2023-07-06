//code is here
overwolf.games.getRunningGameInfo(function(gameInfo) {
    var gameId = gameInfo.gameId;
    console.log("Current game ID:", gameId);
  });

  overwolf.windows.obtainDeclaredWindow("MyOverlay", function(result) {
    if (result.status === "success") {
      overwolf.windows.restore(result.window.id, function(result) {
        console.log("Overlay restored:", result.window.id);
      });
    }
  });

  var dataObj = { key1: "value1", key2: "value2" };
overwolf.profile.getCurrentUser(function(userInfo) {
  overwolf.profile.setUserData(userInfo.username, "myData", dataObj, function(result) {
    console.log("Data saved:", result);
  });
});

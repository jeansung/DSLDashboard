      // $scope.getFilesForPullRequest = function() {

      // }
      // $scope.getGitInfo = function () {
      //    $scope.userNotFound = false;
      //    $scope.loaded = false;
      //    // User
      //    $http.get("https://api.github.com/users/" + $scope.username)
      //    .success(function (data) {
      //       if (data.name == "") data.name = data.login;
      //       $scope.user = data;
      //       $scope.loaded = true;
      //    })
      //    .error(function () {
      //       $scope.userNotFound = true;
      //    });
      //    // Repo + Timestamp
      //    $http.get("https://api.github.com/repos/" + $scope.username + "/" +  $scope.reponame)
      //    .success(function (data) {
      //       if (data.name == "") data.name = data.name;
      //       $scope.reponame = data.name;
      //       $scope.timestamp = data.pushed_at
      //       $scope.loaded = true;
      //    })
      //    .error(function () {
      //       $scope.repoNotFound = true;
      //    });
      //    // Files in Repo
      //    $http.get("https://api.github.com/repos/" + $scope.username + "/" + $scope.reponame + "/contents").success(function (data) {
      //       $scope.files = data;
      //       $scope.reposFound = data.length > 0;
      //    });
      // }

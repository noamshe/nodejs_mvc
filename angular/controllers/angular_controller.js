/**
 *
 * Created by noam on 7/6/14.
 */
/**
 *
 * Created by noam on 7/2/14.
 */
app.controller("angularController", function($scope){
  $scope.understand = "I now understand how the scope works!";
  $scope.inputValue = "";

  $scope.selectedPerson = 0;
  $scope.selectedGenre = null;
  $scope.people = [
    {
      id: 0,
      name: 'Leon',
      music: [
        'Rock',
        'Metal',
        'Dubstep',
        'Electro'
      ]
    },
    {
      id: 1,
      name: 'Chris',
      music: [
        'Indie',
        'Drumstep',
        'Dubstep',
        'Electro'
      ]
    },
    {
      id: 2,
      name: 'Harry',
      music: [
        'Rock',
        'Metal',
        'Thrash Metal',
        'Heavy Metal'
      ]
    },
    {
      id: 3,
      name: 'Allyce',
      music: [
        'Pop',
        'RnB',
        'Hip Hop'
      ]
    }
  ];
});

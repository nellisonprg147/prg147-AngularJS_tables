app.controller("myCtrl", function($scope) {
        $scope.sport = [
            {sport:'Down Hill Skiing',snow:'Groomed', food:'Chili',gear:'Downhill Skis',family:'Wife'},
            {sport:'Ice Hockey',snow:'Fluffy', food:'Beef Stew',gear:'Heavy Jacket',family:'Daughter'},
            {sport:'Sledding',snow:'Hard Pack', food:'Pot Pies',gear:'Snow Pants',family:'Father'},
            {sport:'Snowball Fights',snow:'White Ice', food:'Chicken Soup',gear:'Gloves',family:'Mother'},
            {sport:'Building Snowmen',snow:'Slush', food:'Beef Stroganoff',gear:'Hats',family:'Sister'},
            {sport:'Cross Country Skiing',snow:'Blue Ice', food:'Chicken Dumplings',gear:'Boots',family:'Brother'},
            {sport:'Snowshoeing',snow:'Powder', food:'Clam Chowder',gear:'Big Socks',family:'Niece'},
            {sport:'Dogsled Racing',snow:'Tracked', food:'Monkey Bread',gear:'Snow Brush',family:'Nephew'},
            {sport:'Riding Snowmobiles',snow:'Heavy', food:'Warm Pies',gear:'Snow Shovel',family:'Grandfather'},
            {sport:'Winter Camping',snow:'Light', food:'Meatballs',gear:'Scarf',family:'Grandmother'}
        ];
         $scope.orderByMe = function(x) {
             $scope.myOrderBy = x;
         }
});


imageApp.controller('imageController', function($scope, imageService) {
    $scope.testHeader = 'The gallery of Hard Rock photos';
    
    function getImages()
    {
        imageService.get_images({}, function(response) {
            $scope.images = response.images;
        });
    }
        
    getImages();
});

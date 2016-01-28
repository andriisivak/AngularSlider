imageApp.factory('imageService', function($resource) {
    return $resource(null, {}, {
        get_images: {
            method: 'GET',
            url: 'source/source.json'
        }
    });
});

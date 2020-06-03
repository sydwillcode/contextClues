$(document).ready(function () {

    var friend = ['Sydni', 'BC', 'Tasha', 'Nikki', 'Autumn'];

    var location = [
        'bathroom',
        'kitchen',
        'garden',
        'bedroom',
        'pool',
        'garage',
        'basement',
        'closet',
        'living room',
        'wine cellar'
    ];

    var tool = [
        'cupcake',
        'water bottle',
        'high heel',
        'soy sauce',
        'fingernail clipper',
        'lysol wipe',
        'hair dryer',
        'jewelry box',
        'frying pan',
        'remote control',
        'throw pillow',
        'table lamp',
        'faux fur rug',
        'phone charger',
        'suscreen',
        'notebook paper',
        'wedding ring',
        'wax strips',
        'silk pilllowcase',
        'pool noodle'
    ]
    for (var i = 1; i <= 100; i++) {
        var cardFront = ('Accusation ' + i);
        var $card = $('<h3>' + cardFront + '</h3>')
        $($card).appendTo('body');
        $($card).click(showCard(i))
    }


    function showCard(i) {
        var friendName = friend[i % friend.length];
        var locationName = location[i % location.length];
        var toolName = tool[i % tool.length];

        function makeAccusation() {
            alert(`I accuse ${friendName}, with the ${toolName} in the ${locationName}`)
        }
        return makeAccusation;
    }

})

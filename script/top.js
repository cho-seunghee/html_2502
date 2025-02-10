jQuery(document).ready(function() {
    function showAllSubMenu(menuId) {
        var topMenuItems = document.querySelectorAll('.highDepth');
        var items = document.querySelectorAll('[id^="lowMenu"]');
    
        topMenuItems.forEach(function (item) {
            var link = item.querySelectorAll('a');
    
            link.forEach(function (item) {
                if (item.id === menuId) {
                    item
                        .classList
                        .add('on');
                } else {
                    item
                        .classList
                        .remove('on');
                }
            });
        });
    
        menuId = 'lowMenu' + menuId;
    
        items.forEach(function (item) {
            if (item.id === menuId) {
                item.style.display = 'flex';
                item.style.flexWrap = 'wrap';
            } else {
                item.style.display = 'none';
            }
        });
    }

    
});

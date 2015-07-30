(function($) {
    
    function init($target) {
        // Guard against re-initialisation
        if ( !$target.hasClass("highlighted") ) {
            // Add the class and attach event handlers
            $target.addClass("highlighted").click(onclick);
        }
    }
    // Event handler
    function onclick(event) {
        // Cache the target elements
        var $target = $(this);
        
        // Check foor active class
        if ($target.hasClass("active")) {
            // if it exists remove it
            $target.removeClass("active");
            } else {
                // if not, add it
                $target.addClass("active");
    }
        
    }
    
    // Regsiter plugin with jquery
    $.fn.highlight = function() {
        // Cache targets
        var $targets = $(this);
        
        for (var i = 0; i < $targets.length; i++) {
            init( $targets.eq(i) );
        }
        
        // Maintain chain-abiility
        return $targets;
    };
    
    
})(jQuery);
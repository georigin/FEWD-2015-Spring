(function($) {
    
    function init($target) {
        // Gaurd against re-initialisaation
        if (!$target.hasClass("mytabs")) {
            $target.addClass("mytabs").on("click", ".tab-nav .tab", onClick);
        
        }
    }
    
    // Event handler
    
    function onClick(event) {
        event.preventDefault();
        
        var $parent = $(event.delegateTarget),
            $target = $(this),
            $tabHandles = $parent.find(".tab-nav .tab"),
            $tabContent = $parent.find(".tab-content .tab"),
            index = $tabHandles.index( $target);
        
        $tabHandles.removeClass("active").eq(index).addClass("active");
        $tabContent.removeClass("active").eq(index).addClass("active");
    }
    
    // Register plugin with jquery
    $.fn.myTabs = function() {
        // Cache targets
        var $targets = $(this);
        
        /// Loop through all targets
        for (var i = 0; i < $targets.length; i++) {
            init ($targets.eq(i) );
        }
        
        // MAntian Chain ability
        return $targets;
    };

})(jQuery);
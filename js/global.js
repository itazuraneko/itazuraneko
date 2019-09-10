(function bookmarks() {
    bkmk = {
        pos: 0,
        div: undefined,
        set: function() {
            if ('scrollRestoration' in history) {
              // Jump to bookmark on refresh/reload.
              history.scrollRestoration = 'manual';
            }
            localStorage.setItem('bm_' + location.pathname, window.scrollY);
            this.get();
        },
        get: function() {
            this.pos = localStorage.getItem('bm_' + location.pathname);
            if(!this.pos) return;
            
            if(!this.div) {
                this.div = document.createElement('div');
                this.div.id = 'bookmark';
                this.div.addEventListener('click', function() { bkmk.rm(); });
                this.div.style.display = 'block';
                document.body.appendChild(this.div);
            }
            this.div.style.top = this.pos + 'px';
            this.div.scrollIntoView(true);
        },
        rm: function() {
            var div = document.getElementById('bookmark');
            div.style.display = 'none'
            localStorage.removeItem('bm_' + location.pathname);
        }
    };
    
    window.addEventListener('load', function() { console.log("load event"); bkmk.get(); });
    
    document.addEventListener('keypress', function(e) {
        if(e.which == 98) { // b key
            bkmk.set();
        }
    });
    
    document.addEventListener('touchstart', function(e) {
        if (e.touches.length === 2) {
            bkmk.set();
      }
    });
}())
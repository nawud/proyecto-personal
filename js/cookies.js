window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "#212529",
        "text": "#fff",
        "position": "bottom"
      },
      "button": {
        "background": "#959595",
        "text": "#fff"
      }
    },
    "type": "opt-in",
    "theme": "classic",
    "elements": { 
      "deny": '<a aria-label="deny cookies" tabindex="0" class="cc-btn cc-deny" id="deny">Rebutja</a>',

    },

    "content": {
      "message": "THEWAN utiliza cookies analíticas de terceros. Necesitamos su consentimiento explícito para poder utilizarlas.",
      "allow": "Permet cookies",
      "link": "Política de cookies",
      "href": "cookies.html",
      "policy": "Política de cookies",
    },
    onInitialise: function(status) {
      if(status == cookieconsent.status.allow) myScripts();
    },
    onStatusChange: function(status) {
      if (this.hasConsented()) myScripts();
      else {
          deleteCookies(this.options.cookie.name);
          location.reload();
      }
    }
  });

function deleteCookies(cookieconsent_name) {
        var keep = [cookieconsent_name, "DYNSRV"];

        document.cookie.split(';').forEach(function(c) {
            c = c.split('=')[0].trim();
            if (!~keep.indexOf(c))
                document.cookie = c + '=;' + 'expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/';
        });
};
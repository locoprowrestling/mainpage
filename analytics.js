(function () {
  "use strict";

  const measurementId = "G-ZEH93T91K1";
  const consentCookie = "locopro_analytics_consent";
  const privacyUrl = "https://mainpage.locopro.pw/privacy.html";

  function readConsent() {
    const match = document.cookie.match(new RegExp("(?:^|; )" + consentCookie + "=([^;]*)"));
    return match ? decodeURIComponent(match[1]) : null;
  }

  function writeConsent(value) {
    document.cookie = `${consentCookie}=${encodeURIComponent(value)}; Max-Age=31536000; Path=/; Domain=.locopro.pw; SameSite=Lax; Secure`;
  }

  function gtag() {
    window.dataLayer.push(arguments);
  }

  function clearAnalyticsCookies() {
    document.cookie.split(";").forEach(function (cookie) {
      const name = cookie.split("=")[0].trim();
      if (name === "_ga" || name.startsWith("_ga_")) {
        document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax; Secure`;
        document.cookie = `${name}=; Max-Age=0; Path=/; Domain=.locopro.pw; SameSite=Lax; Secure`;
      }
    });
  }

  function loadAnalytics() {
    if (document.querySelector(`script[data-locopro-ga="${measurementId}"]`)) return;

    window.dataLayer = window.dataLayer || [];
    gtag("consent", "default", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "granted"
    });
    gtag("set", "ads_data_redaction", true);
    gtag("js", new Date());
    gtag("config", measurementId, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.dataset.locoproGa = measurementId;
    document.head.appendChild(script);
  }

  function removeChoiceUi() {
    document.getElementById("locopro-analytics-banner")?.remove();
    document.getElementById("locopro-analytics-settings")?.remove();
  }

  function showSettingsButton() {
    if (document.getElementById("locopro-analytics-settings")) return;
    const button = document.createElement("button");
    button.id = "locopro-analytics-settings";
    button.type = "button";
    button.textContent = "Privacy choices";
    button.setAttribute("aria-label", "Change analytics privacy choice");
    button.addEventListener("click", showBanner);
    document.body.appendChild(button);
  }

  function choose(value) {
    writeConsent(value);
    removeChoiceUi();
    if (value === "granted") {
      loadAnalytics();
    } else {
      if (window.dataLayer) {
        gtag("consent", "update", {
          ad_storage: "denied",
          ad_user_data: "denied",
          ad_personalization: "denied",
          analytics_storage: "denied"
        });
      }
      clearAnalyticsCookies();
    }
    showSettingsButton();
  }

  function showBanner() {
    removeChoiceUi();
    const banner = document.createElement("section");
    banner.id = "locopro-analytics-banner";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-label", "Analytics privacy choice");
    banner.innerHTML = `
      <div class="locopro-analytics-copy">
        <strong>Help LoCo improve the site?</strong>
        <span>Optional Google Analytics measures page visits and ticket-button clicks. Advertising storage and personalization stay off. <a href="${privacyUrl}">Privacy policy</a></span>
      </div>
      <div class="locopro-analytics-actions">
        <button type="button" data-choice="denied">No thanks</button>
        <button type="button" data-choice="granted">Allow analytics</button>
      </div>`;
    banner.querySelectorAll("[data-choice]").forEach(function (button) {
      button.addEventListener("click", function () {
        choose(button.dataset.choice);
      });
    });
    document.body.appendChild(banner);
  }

  function addStyles() {
    const style = document.createElement("style");
    style.textContent = `
      #locopro-analytics-banner { position: fixed; z-index: 2147483647; left: 1rem; right: 1rem; bottom: 1rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem; max-width: 68rem; margin: auto; padding: 1rem 1.15rem; color: #fff; background: #151515; border: 1px solid rgba(255,255,255,.28); border-radius: .75rem; box-shadow: 0 12px 38px rgba(0,0,0,.45); font: 500 15px/1.45 system-ui, sans-serif; }
      #locopro-analytics-banner strong { display: block; margin-bottom: .15rem; color: #fff; }
      #locopro-analytics-banner span { color: #e8e8e8; }
      #locopro-analytics-banner a { color: #fff; text-decoration: underline; }
      .locopro-analytics-actions { display: flex; flex: 0 0 auto; gap: .6rem; }
      .locopro-analytics-actions button, #locopro-analytics-settings { min-height: 2.75rem; padding: .65rem .9rem; color: #fff; background: #343434; border: 1px solid rgba(255,255,255,.35); border-radius: .45rem; cursor: pointer; font: 700 14px/1 system-ui, sans-serif; }
      .locopro-analytics-actions button[data-choice="granted"] { color: #111; background: #ffd21f; border-color: #ffd21f; }
      #locopro-analytics-settings { position: fixed; z-index: 2147483646; left: .6rem; bottom: .6rem; min-height: 2.25rem; padding: .5rem .7rem; opacity: .82; font-size: 12px; }
      @media (max-width: 680px) { #locopro-analytics-banner { align-items: stretch; flex-direction: column; } .locopro-analytics-actions { justify-content: flex-end; } }
    `;
    document.head.appendChild(style);
  }

  document.addEventListener("click", function (event) {
    const link = event.target.closest("a[href]");
    if (!link || readConsent() !== "granted" || !link.href.startsWith("https://tickets.locopro.pw")) return;
    gtag("event", "ticket_click", {
      link_text: link.textContent.trim(),
      link_url: link.href
    });
  });

  function init() {
    addStyles();
    const consent = readConsent();
    if (consent === "granted") loadAnalytics();
    if (consent) showSettingsButton();
    else showBanner();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();

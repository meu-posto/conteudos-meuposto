Index = {
  init: function () {
    // Mobile menu

    $(".menu-trigger").click(function (e) {
      $("header nav").toggle();
      e.stopPropagation();
    });

    // ScrollReveal

    ScrollReveal().reveal(".resources li", {
      distance: "-100px",
      duration: 2000,
    });
    ScrollReveal().reveal(".cta-btn", { distance: "100px", duration: 1600 });

    // Scroll links

    $('a[href^="#"]').on("click", function (e) {
      e.preventDefault();
      var self = $(this);
      var target = this.hash;
      $target = $(target);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $target.offset().top - 70,
          },
          1000,
          function () {
            window.location.hash = target;
            $('a[href^="#"]').removeClass("on-section");
            self.addClass("on-section");
          }
        );
    });

    // Scroll header

    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 53) {
        $("header").addClass("purple-header");
        $("#ctabottompage").removeClass("w-0");
      }
      if (scroll <= 53) {
        $("header").removeClass("purple-header");
        $("#ctabottompage").addClass("w-0");
      }
    });

    $(".question").on("click", function () {
      $(this).find(".resposta").toggleClass("d-none");
      $(this).find(".icon").toggleClass("d-none");
      $(this).find(".pergunta > span").toggleClass("purple");
    });
    setTimeout(function () {
      $(".grecaptcha-badge").css("display", "none");
    }, 1000);
  },

  popup: function () {
    var width = screen.width > 768 ? "90%" : "100%";

    // var formrenderizado = `<div class="pipedriveWebFormsModal" data-pd-webforms="https://pipedrivewebforms.com/form/9975a20391ccfbccc199a3f63aaa00623920886" id="idh2ma07" style="width: 100%; height: 100%;max-height: 768px; overflow: hidden; position: relative;"><script src="https://cdn.pipedriveassets.com/web-form-assets/webforms.min.js"></script><iframe src="https://pipedrivewebforms.com/form/9975a20391ccfbccc199a3f63aaa00623920886?embeded=1&amp;uuid=idh2ma07" scrolling="no" name="https://www.meuposto.app/-idh2ma07" style="border: none; overflow: hidden; width: 100%; max-width: 768px; height: 591px; position: relative;"></iframe></div>`; //tive que colocar assim pois o outro link nao estava renderizando pelo sweet alert

    var formrenderizado = `<div role="main" id="form-pop-up-site-920d5642fbbe61d8ddc2"><section id="form-form-pop-up-site-920d5642fbbe61d8ddc2"> <div id="rdstation-bricks-embeddable-form-bricks-component-PHTqdxKBDXDvRq1kRz4KLg"> <div id="bricks-component-PHTqdxKBDXDvRq1kRz4KLg" class="bricks--component bricks--component-embeddable-form"> <style type="text/css" rel="stylesheet"> #rd-section-joq3m2m5c { background-color: transparent; border-bottom-style: none; border-color: #000000; border-left-style: none; border-radius: 0px; border-right-style: none; border-top-style: none; border-width: 1px; } .bricks--component{ border-color: transparent !important } #rd-section-joq3m2m5c > div:not(.bricks--row) { min-height: 0px; } </style> <section id="rd-section-joq3m2m5c" class="bricks--section rd-section"> <style type="text/css" rel="stylesheet"> #rd-row-joq3m2m5d { min-height: 236px; } #rd-row-joq3m2m5d .bricks--column > div { min-height: 236px; } </style> <div id="rd-row-joq3m2m5d" class="bricks--row rd-row"> <style type="text/css" rel="stylesheet"> #rd-column-joq3m2m5e { flex: 12 0 0; } #rd-column-joq3m2m5e > div { background-color: transparent; justify-content: center; padding-top: 7px; padding-right: 0px; padding-bottom: 7px; padding-left: 20px; } </style> <div id="rd-column-joq3m2m5e" class="bricks--column rd-column"> <div> <style type="text/css" rel="stylesheet"> #rd-text-joq3m2m5g { border-bottom-style: none; border-color: transparent; border-left-style: none; border-radius: 0px; border-right-style: none; border-top-style: none; border-width: 0px; min-height: -1px; max-width: 330px; margin-top: 0px; margin-bottom: 10px; align-self: center; width: 100%; word-break: break-word; } </style> <div id="rd-text-joq3m2m5g" class="bricks--component bricks--component-text rd-text"> <h4 style="text-align: center;"><span style="font-family: Helvetica, Arial, sans-serif; font-size: 24px;">Quer saber mais sobre o Meu Posto?</span></h4> </div> <style type="text/css" rel="stylesheet"> #rd-text-kdhqcqgp { border-bottom-style: none; border-color: transparent; border-left-style: none; border-radius: 0px; border-right-style: none; border-top-style: none; border-width: 1px; min-height: auto-44px; max-width: 404px; margin-top: 10px; margin-bottom: 10px; align-self: center; width: 100%; word-break: break-word; } </style> <div id="rd-text-kdhqcqgp" class="bricks--component bricks--component-text rd-text"> <p style="text-align: center;">Preencha os campos abaixo. Entraremos em contato para te contar mais sobre a nossa ferramenta!</p> </div> <style type="text/css" rel="stylesheet"> #rd-form-joq3m2m5i { display: flex; flex-direction: column; align-self: center; max-width: 548px; width: 100%; margin-top: 0px; margin-bottom: 30px; } #rd-form-joq3m2m5i .bricks-form { display: flex; flex-direction: column; width: 100%; } #rd-form-joq3m2m5i .bricks-form__fieldset { align-items: flex-start; } #rd-form-joq3m2m5i .bricks-form__label.always-visible, #rd-form-joq3m2m5i .bricks-form__field__option .bricks-form__label { display: inline-block; } #rd-form-joq3m2m5i .bricks-form__input.select2-container { padding: 0 !important; } #rd-form-joq3m2m5i .select2-container .select2-choice .select2-arrow b { background-position: 0 7px !important; } #rd-form-joq3m2m5i .bricks-form__submit { display: flex; flex-direction: column; } </style> <style type="text/css" rel="stylesheet"> #rd-form-joq3m2m5i { align-self: center; max-width: 330px; margin-top: 10px; margin-bottom: 0px; } #rd-form-joq3m2m5i .bricks-form__fieldset { flex-flow: column nowrap; } #rd-form-joq3m2m5i .bricks-form__field { margin-bottom: 8px; padding: 0; width: 100.0%; } #rd-form-joq3m2m5i .bricks-form__static { color: #4a4a4a; font-family: Helvetica, Arial, sans-serif; font-size: 14px; font-style: normal; font-weight: normal; } #rd-form-joq3m2m5i .bricks-form__static a { color: #4a4a4a; text-decoration: underline; } #rd-form-joq3m2m5i .bricks-form__label { color: #4a4a4a; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 14px; font-style: normal; font-weight: normal; } #rd-form-joq3m2m5i .bricks-form__input { color: #000000; font-family: Open Sans, sans-serif; font-size: 16px; background-color: #f4f4f4; border-bottom-style: solid; border-left-style: solid; border-right-style: solid; border-top-style: solid; border-color: #d6d6d6; border-radius: 3px; border-width: 1px; box-shadow: inset 0px 2px 3px #ddd; -webkit-box-shadow: inset 0px 2px 3px #ddd; -moz-box-shadow: inset 0px 2px 3px #ddd; } #rd-form-joq3m2m5i .bricks-form__input::placeholder { color: transparent; } #rd-form-joq3m2m5i .select2-container .select2-choice { height: 32px !important; line-height: 32px !important; color: #000000 !important; font-family: Open Sans, sans-serif !important; font-size: 16px !important; } #rd-form-joq3m2m5i .bricks-form__input:not(textarea) { height: 32px; } #rd-form-joq3m2m5i .bricks-form__input.select2-container { padding: 0 !important; } #rd-form-joq3m2m5i .select2-container .select2-choice { height: 32px !important; line-height: 32px !important; color: #000000 !important; font-family: Open Sans, sans-serif !important; font-size: 16px !important; background: #f4f4f4; } #rd-form-joq3m2m5i .select2-container .select2-choice .select2-arrow b { background-position: 0 5px !important; } #rd-form-joq3m2m5i .select2-container .select2-choice .select2-arrow { background: none; border: none; } #rd-form-joq3m2m5i .with-select-flags > .phone-input-group > .select2-container > .select2-choice { border-top-right-radius: 0 !important; border-bottom-right-radius: 0 !important; border-style: none; } #rd-form-joq3m2m5i .with-select-flags > .phone-input-group > .select2-container > .select2-choice > .select2-chosen { margin-right: 0px; } #rd-form-joq3m2m5i .with-select-flags > .phone-input-group > .select2-container > .select2-choice > .select2-chosen > .flag { vertical-align: middle; margin-left: 13px; } #rd-form-joq3m2m5i .with-select-flags > .phone-input-group > .phone { width: calc(100% - 55px); display: inline-block; border-top-left-radius: 0px !important; border-bottom-left-radius: 0px !important; } #rd-form-joq3m2m5i .with-select-flags > label { display: block !important; } #rd-form-joq3m2m5i .with-select-flags > .phone-country { display: inline-block; } #rd-form-joq3m2m5i .with-select-flags > .phone-input-group { display: flex; } #rd-form-joq3m2m5i .with-select-flags > .phone-input-group > .phone-country { width: 55px; display: inline-block; } #rd-form-joq3m2m5i .with-select-flags label.error { display: block !important; color: #DC3543; } </style> <div id="rd-form-joq3m2m5i" class="bricks--component bricks-form rd-form"> <form id="conversion-form-form-pop-up-site" action="https://event-api.rdstation.com.br/v2/conversions" data-typed-fields="1" data-lang="pt-BR" data-form-autofill=""> <input type="hidden" name="token_rdstation" value="84e7e899ad655f6919647bab271436fe"> <input type="hidden" name="conversion_identifier" value="form-pop-up-site"> <input type="hidden" name="internal_source" value="6"> <input type="hidden" name="c_utmz" value=""> <input type="hidden" name="traffic_source" value=""> <input type="hidden" name="client_id" value=""> <input type="hidden" name="redirect_to" value="http://meuposto.app"> <input type="hidden" name="_doe" value=""> <input type="hidden" name="privacy_data[browser]" id="privacy_data_browser"> <input type="hidden" name="thankyou_message" value="Obrigado! Logo entraremos em contato." disabled=""> <div class="bricks-form__fieldset" data-progressive-profiling=""> <div class="bricks-form__field"> <label for="rd-text_field-kfhcds5s" class="bricks-form__label"> Nome* </label> <input id="rd-text_field-kfhcds5s" class="bricks-form__input required js-text js-field-name" name="name" type="text" data-use-type="STRING" placeholder="Nome *" required="required"> </div> <div class="bricks-form__field with-select-flags"> <label for="rd-phone_field-kfhcds5t" class="bricks-form__label"> Celular* </label> <div class="phone-input-group"> <div class="select2-container form-control phone-country" id="s2id_autogen1"><a href="javascript:void(0)" class="select2-choice" tabindex="-1">   <span class="select2-chosen" id="select2-chosen-2" aria-label="Escolha seu país"><img class="flag" width="26" src="https://dk9suync0k2va.cloudfront.net/js/rd/stable/flags/4x3/br.svg?t=1560538149"></span><abbr class="select2-search-choice-close"></abbr>   <span class="select2-arrow" role="presentation"><b role="presentation"></b></span></a><label for="s2id_autogen2" class="select2-offscreen"></label><input class="select2-focusser select2-offscreen" type="text" aria-haspopup="true" role="button" aria-labelledby="select2-chosen-2" id="s2id_autogen2"><div class="select2-drop select2-display-none phone-select2-dropdown select2-with-searchbox">   <div class="select2-search">       <label for="s2id_autogen2_search" class="select2-offscreen"></label>       <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="select2-input" role="combobox" aria-expanded="true" aria-autocomplete="list" aria-owns="select2-results-2" id="s2id_autogen2_search" placeholder="">   </div>   <ul class="select2-results" role="listbox" id="select2-results-2">   </ul></div></div><div class="form-control phone-country" data-type="countries" tabindex="-1" title="" style="display: none;"></div> <div class="country-field" value="BR"></div> <input id="rd-phone_field-kfhcds5t" class="bricks-form__input required phone js-phone js-field-mobile_phone" name="mobile_phone" data-input-mask="INTERNATIONAL_MASK" data-use-type="STRING" type="tel" placeholder="Celular *" required="required" data-country="BR" data-last-country-code="55"> </div> </div> <div class="bricks-form__field"> <label for="rd-email_field-kfhcds5u" class="bricks-form__label"> Email* </label> <input id="rd-email_field-kfhcds5u" class="bricks-form__input required js-email js-field-email" name="email" type="email" data-use-type="STRING" placeholder="Email *" required="required"> </div> <div class="bricks-form__field"> <label for="rd-text_field-kfhcds5v" class="bricks-form__label"> Qual o nome do seu posto?* </label> <input id="rd-text_field-kfhcds5v" class="bricks-form__input required js-text js-field-cf_qual_o_nome_do_seu_posto" name="cf_qual_o_nome_do_seu_posto" type="text" data-use-type="STRING" placeholder="Qual o nome do seu posto? *" required="required"> </div> <div class="bricks-form__field"> <label for="rd-select_field-kfhcds5w" class="bricks-form__label"> Qual o seu Principal Problema?* </label> <select id="rd-select_field-kfhcds5w" class="bricks-form__input required js-field-cf_qual_o_seu_principal_problema" data-use-type="STRING" name="cf_qual_o_seu_principal_problema" required="required"> <option value=""> Selecione </option> <option value="Queda de volume">Queda de volume</option> <option value="Guerra de Placa e Oscilação de Preços">Guerra de Placa e Oscilação de Preços</option> <option value="Atrair novos clientes">Atrair novos clientes</option> <option value="Retenção, Recuperação e Fidelização de Clientes">Retenção, Recuperação e Fidelização de Clientes</option> <option value="Margens Baixas">Margens Baixas</option> </select> </div> </div> <style type="text/css" rel="stylesheet"> #rd-button-joq3m2m5a { -ms-flex-align: center; -ms-flex-direction: column; -ms-flex-pack: center; align-items: center; align-self: center; background-color: rgba(0,204,153,1); border-bottom-style: none; border-color: #000000; border-left-style: none; border-radius: 16px; border-right-style: none; border-top-style: none; border-width: 0px; color: #ffffff; cursor: pointer; display: -ms-flexbox; display: flex; flex-direction: column; font-family: Tahoma, Geneva, sans-serif; font-size: 22px; font-style: normal; font-weight: normal; height: 50px; justify-content: center; line-height: 1.42857; margin-bottom: 0px; margin-top: 15px; max-width: 330px; text-align: center; text-decoration: none; width: 100%; } </style> <div class="bricks-form__submit"> <button class="bricks--component bricks--component-button rd-button" id="rd-button-joq3m2m5a"> Enviar </button> </div> <div style="position: fixed; left: -5000px"> <input type="text" name="emP7yF13ld" readonly="" autocomplete="false" tabindex="-1" value=""> <input type="text" name="sh0uldN07ch4ng3" readonly="" autocomplete="false" tabindex="-1" value="should_not_change"> </div> </form> </div> <script> document.querySelectorAll('input[name=emP7yF13ld],input[name=sh0uldN07ch4ng3]').forEach(function(element) { element.addEventListener('focus', function(e) { e.target.removeAttribute('readonly'); }); }); </script> </div> </div> </div> </section> </div> </div> </section></div>`;

    var video = `<iframe src="https://player.vimeo.com/video/384766329" width="${
      screen.width > 768 ? "90%" : "100%"
    }" height="${
      screen.width > 768 ? "100%" : "200px"
    }" frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe>
   `;

    var ctaText = `<h3 class="ctatext">Fidelize seus clientes,</h3><h3 class="ctatext"> aumente suas vendas.</h3>`;

    var ctaWhats = `
    <div class="invertColorbutton" style="margin:20px 0 25px 0;">
      <a
        href="https://api.whatsapp.com/send?phone=554330030578"
        class="headbutton"
      >
        <span class="phrase"
          >Fale agora com&nbsp<b>um consultor</b>
          <i class="fab fa-whatsapp"></i>
        </span>
      </a>
    </div>
   `;

    var html = `
      <div class="modal">
        ${formrenderizado}
        <div class="video">
          ${ctaText}
          ${video}
          ${ctaWhats}
        </div>
      </div>
    `;

    Swal.fire({
      title: "",
      icon: "",
      html: html,
      width: width,
      showCloseButton: true,
      showCancelButton: false,
      showConfirmButton: false,
      focusConfirm: false,
      customClass: {
        content: "custom-content",
      },
      onClose: () => {
        sessionStorage.setItem("meuPostoModal", true); // bloqueia a exibição de outro modal na sessão caso o usuario feche
      },
    });
  },
};

$(document).ready(function () {
  Index.init();
  // setTimeout(() => {
  //  !sessionStorage.getItem("meuPostoModal") && Index.popup(); //só abre o popup(modal) só abre um modal por sessao
  //}, 5000);
});

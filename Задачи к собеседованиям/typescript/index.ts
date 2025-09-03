declare global {
  var RendererFunc: RendererFunc;
}

interface RendererFunc {
  new (): RendererFunc;
  init: Function;
}

export interface ConfInterface {
  lang: string;
  target: HTMLElement;
  themeName: string;
  onLogin: Function;
  onRegister: Function;
}

/*
 * Скрипт содержит экземпляр RendererFunc
 */
export function loadScript(callback) {
  if (!document.getElementById("FOO_SCRIPT_ID")) {
    const script = document.createElement("script");

    script.id = "FOO_SCRIPT_ID";
    script.src = "https://foo.com/foo.script.js";

    document.head.appendChild(script);

    script.onload = callback;

    return;
  }

  callback();
}

export function initScript(
  lang: string,
  frameKey: string,
  onLogin: Function,
  onRegister: Function,
  stickyTop: number,
  themeName: string,
  optionsList: unknown,
  onNavigation
): any {
  let target = document.getElementById("#wrapper");
  let options = [];

  optionsList.forEach((i) => {
    if (options.find(({ code }) => code === i.id)) {
      return;
    }

    const op = {
      code: i.id,
      label: i.cardType,
      value: i.title,
      dataTest: i.id,
    };

    options.push(op);
  });

  const conf: ConfInterface = {
    lang: lang,
    onLogin: onLogin,
    stickyTop: stickyTop ?? 70,
    target,
    themeName: themeName || "defaultTheme",
    options,
  };

  function onNavigation(e?: any): void {
    let url = "";

    const name = e.pageName.toLowerCase();

    if (name == "detasils") {
      url = "#events";
    } else if (name === "coming") {
      url = "#calendar";
    } else if (name == "results") {
      url = "#results";
    } else if (name === "live") {
      url = "#live";
    }

    // Установка человекочитаемой ссылки
    window.history.replaceState(null, "", url);
  }

  conf.onNavigation = onNavigation;

  if (onRegister) {
    conf.onRegestir = onRegister;
  }

  if (window.RendererFunc && target) {
    return new RendererFunc().init(conf);
  }
}

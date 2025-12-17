export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

export async function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = "afterbegin",
  clear = true
) {
  if (clear) {
    parentElement.innerHTML = "";
  }
  const htmlString = list.map(templateFn);
  parentElement.insertAdjacentHTML(position, htmlString.join(""));
}

export async function renderHTMLWithTemplate(
  templateFn,
  parentElement,
  data,
  callback,
  position = "afterbegin",
  clear = "true"
) {
  // get template using function...no need to loop this time.
  if (clear) {
    parentElement.innerHTML = "";
  }
  const htmlString = await templateFn(data);
  parentElement.insertAdjacentHTML(position, htmlString);
  if (callback) {
    callback(data);
  }
}

function loadTemplate(path) {
  return async function () {
    const res = await fetch(path);
    if (res.ok) {
      const html = await res.text();
      return html;
    }
  };
}

export async function loadHeaderFooter() {
  const headerTemplateFn = loadTemplate("/src/public/partials/header.html");
  const footerTemplateFn = loadTemplate("/src/public/partials/footer.html");
  const header = qs("header");
  const footer = qs("footer");

  await renderHTMLWithTemplate(headerTemplateFn, header);
  await renderHTMLWithTemplate(footerTemplateFn, footer);
}

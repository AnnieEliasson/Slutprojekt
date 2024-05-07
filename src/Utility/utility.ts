export const RemoveClass = (classname: string, removeClass: string) => {
  const element = document.querySelector(`.${classname}`) as HTMLElement;
  element.classList.remove(`${removeClass}`);
};

export const Toggle = (elementClass: string, toggleClass: string) => {
  const element = document.querySelector(`.${elementClass}`) as HTMLElement;
  element.classList.toggle(`${toggleClass}`);
};

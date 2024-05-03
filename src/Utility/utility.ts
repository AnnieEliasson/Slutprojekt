export const RemoveClass = (classname: string, removeClass: string) => {
  const element = document.querySelector(`.${classname}`) as HTMLElement;
  element.classList.remove(`${removeClass}`);
};

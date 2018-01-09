export const setMargin = (props) => {
  if (!props.margin) {
    return '';
  }

  const base = {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    ...props.margin,
  };

  return `
    margin: ${base.top}px ${base.right}px ${base.bottom}px ${base.left}px;
  `;
};

export const setPadding = (props) => {
  if (!props.padding) {
    return '';
  }

  const base = {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    ...props.padding,
  };

  return `
    padding: ${base.top}px ${base.right}px ${base.bottom}px ${base.left}px;
  `;
};

export const noMargin = (props) => {
  if (props.noMargin) {
    return 'margin: 0;';
  }

  return '';
};

export const setVerticalAlign = (props) => {
  if (!props.verticalAlign) {
    return '';
  }

  return `
  height: 100vh;
  text-align: center;

  display: flex;
  justify-content: center;
  flex-direction: column;
  `;
};

export const setTextAlign = (props) => {
  if (!props.textAlign) {
    return '';
  }

  return `text-align: ${props.textAlign};`;
};

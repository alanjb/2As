export const findByTestAttr = (component, attr) => {
    const attribute = `[data-test='${attr}']`;
    return component.find(attribute);
};

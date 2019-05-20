import React from 'react';
import get from 'utils/get';

const BrandStyle = ({ brandContext }) => {
  const colors = get(brandContext, 'colors', {});

  return (
    <style>
      {Object.entries(colors).reduce((classString, color) => {
        const [colorName, value] = color;

        return classString.concat(
          `.color-${colorName} { color: ${value} }`,
          `.bg-color-${colorName} { background-color: ${value} }`,
          `.border-color-${colorName} { border-color: ${value} }`,
          `.bg-hover-color-${colorName}:hover { background-color: ${value}}`
        );
      }, '')}
    </style>
  );
};

export default BrandStyle;

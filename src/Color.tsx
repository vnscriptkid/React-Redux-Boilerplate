import React, { Fragment } from 'react';

interface ColorProps {
  color?: string;
}

export const Color = (props: ColorProps): JSX.Element => {
  return <div style={{ color: props.color }}>I have some colors</div>;
};

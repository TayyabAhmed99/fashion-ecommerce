import { Card, CSS } from '@nextui-org/react';
import * as React from 'react';

export interface CustomCardProps {
  children?: React.ReactNode;
  css?: CSS;
}

export default function CustomCard(props: CustomCardProps) {
  return (
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
    <Card shadow={false} css={{ borderRadius: 0, p: 0, ...props.css }}>
      {props.children}
    </Card>
  );
}

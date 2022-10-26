import React from 'react';

export interface TestComponentProps {
    text: string,
    height: number
}

export const TestComponent = ({ text, height }: TestComponentProps) => {

    return <div style={{ height }}>{text}</div>

}
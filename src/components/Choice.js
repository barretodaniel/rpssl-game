// @flow
import React from 'react';
import { Image, Transition, Card } from 'semantic-ui-react';

import type { GameChoice } from '../utils/choices';

type ChoiceProps = {
    value: GameChoice,
    selected: boolean,
    onClick: (value: GameChoice) => void
};

export default function Choice(props: ChoiceProps) {
    return (
        <Transition animation="scale" duration="500" transitionOnMount>
            <Card
                className="choice"
                raised={props.selected}
                onClick={() => props.onClick(props.value)}
            >
                <Image src={`assets/img/${props.value}.png`} fluid />
                <Card.Content>
                    <Card.Header>{props.value}</Card.Header>
                </Card.Content>
            </Card>
        </Transition>
    );
}

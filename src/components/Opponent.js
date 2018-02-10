// @flow
import React from 'react';
import { Image, Transition, Card } from 'semantic-ui-react';

import type { GameChoice } from '../utils/choices';
import Loading from './Loading';

type OpponentProps = {
    value: GameChoice | '',
    showValue: boolean,
    animate: boolean
};

export default function Opponent(props: OpponentProps) {
    return (
        <Transition animation="scale" duration="500" transitionOnMount>
            <Transition animation="pulse" duration="500" visible={props.animate}>
                <Card className="choice opponent" centered>
                    {props.showValue ? (
                        <Image src={`assets/img/${props.value}.png`} fluid />
                    ) : (
                        <Loading />
                    )}
                    {props.showValue && (
                        <Card.Content>
                            <Card.Header>{props.value}</Card.Header>
                        </Card.Content>
                    )}
                </Card>
            </Transition>
        </Transition>
    );
}

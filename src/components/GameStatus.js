// @flow
import React from 'react';
import { Divider, Icon } from 'semantic-ui-react';

import * as Decisions from '../utils/decisions';

type GameStatusProps = {
    decision: string
};

export default function GameStatus(props: GameStatusProps) {
    return (
        <Divider horizontal section>
            <Icon color={Decisions.colors[props.decision]} name={Decisions.icons[props.decision]} />
            {props.decision}
        </Divider>
    );
}

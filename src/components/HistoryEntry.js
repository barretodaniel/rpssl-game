// @flow
import React from 'react';
import { List, Icon } from 'semantic-ui-react';

import * as Decisions from '../utils/decisions';
import type { GameChoice } from '../utils/choices';

export type HistoryEntry = {
    playerChoice: GameChoice,
    opponentChoice: GameChoice,
    decision: string
};

type HistoryEntryItemProps = {
    item: HistoryEntry
};

export default function HistoryEntryItem(props: HistoryEntryItemProps) {
    return (
        <List.Item>
            <List.Icon
                color={Decisions.colors[props.item.decision]}
                name={Decisions.icons[props.item.decision]}
            />
            <List.Content className="entry-content">
                {props.item.playerChoice}
                <Icon name="long arrow right" />
                {props.item.opponentChoice}
            </List.Content>
        </List.Item>
    );
}

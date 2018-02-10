// @flow
import React from 'react';
import { List } from 'semantic-ui-react';

import HistoryEntryItem from './HistoryEntry';
import type { HistoryEntry } from './HistoryEntry';

type GameHistoryProps = {
    entries: Array<HistoryEntry>
};

export default function GameHistory(props: GameHistoryProps) {
    return (
        <List className="history-container" animated>
            {props.entries.map((entry, i) => <HistoryEntryItem key={i} item={entry} />)}
        </List>
    );
}

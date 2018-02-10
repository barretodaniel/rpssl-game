// @flow
import React from 'react';
import { Container } from 'semantic-ui-react';

import Choices from './Choices';
import Opponent from './Opponent';
import GameHistory from './GameHistory';
import GameStatus from './GameStatus';
import AppMenu from './AppMenu';
import * as GameChoices from '../utils/choices';
import type { HistoryEntry } from './HistoryEntry';
import type { GameChoice } from '../utils/choices';
import * as Decider from '../utils/decider';

type AppState = {
    choices: Array<GameChoice>,
    opponentChoice: GameChoice | '',
    showOpponentValue: boolean,
    playerChoice: GameChoice | null,
    decision: string,
    gameHistory: Array<HistoryEntry>,
    opponentAnimation: boolean
};

export default class App extends React.Component<void, AppState> {
    constructor() {
        const choices: Array<GameChoice> = [
            GameChoices.ROCK,
            GameChoices.PAPER,
            GameChoices.SCISSORS,
            GameChoices.SPOCK,
            GameChoices.LIZARD
        ];
        super();
        this.state = {
            choices,
            opponentChoice: '',
            showOpponentValue: false,
            playerChoice: null,
            decision: 'Please Make A Selection',
            gameHistory: [],
            opponentAnimation: true
        };
    }
    render() {
        return (
            <Container>
                <AppMenu />
                <Opponent
                    value={this.state.opponentChoice}
                    showValue={this.state.showOpponentValue}
                    animate={this.state.opponentAnimation}
                />
                <GameStatus decision={this.state.decision} />
                <Choices
                    choices={this.state.choices}
                    onConfirmation={this.handleConfirmation.bind(this)}
                />
                <GameHistory entries={this.state.gameHistory} />
            </Container>
        );
    }

    handleConfirmation(playerChoice: GameChoice) {
        const opponentChoice = this.state.choices[this.getRandomIndex()];
        const decision = Decider.getDecision(playerChoice, opponentChoice);

        this.setState(state => {
            return {
                ...state,
                playerChoice,
                opponentChoice,
                decision,
                showOpponentValue: true,
                opponentAnimation: !state.opponentAnimation,
                gameHistory: state.gameHistory.concat([{ playerChoice, opponentChoice, decision }])
            };
        });
    }

    getRandomIndex() {
        return Math.floor(Math.random() * 5);
    }
}

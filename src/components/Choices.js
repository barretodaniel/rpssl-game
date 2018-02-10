// @flow
import React from 'react';
import { Button, CardGroup, Divider } from 'semantic-ui-react';

import Choice from './Choice';
import type { GameChoice } from '../utils/choices';

type ChoicesState = {
    selectedChoice: GameChoice
};

type ChoicesProps = {
    choices: Array<GameChoice>,
    onConfirmation: (choice: GameChoice) => void
};

export default class Choices extends React.Component<ChoicesProps, ChoicesState> {
    constructor(props: ChoicesProps) {
        super(props);
        this.state = {
            selectedChoice: props.choices[0]
        };
    }

    render() {
        return (
            <div>
                <CardGroup centered>
                    {this.props.choices.map((choice, i) => (
                        <Choice
                            key={i}
                            value={choice}
                            selected={choice === this.state.selectedChoice}
                            onClick={this.handleSelection.bind(this)}
                        />
                    ))}
                </CardGroup>
                <Divider hidden />
                {this.state.selectedChoice && (
                    <Button primary onClick={() => this.handleConfirmation()}>
                        Confirm
                    </Button>
                )}
            </div>
        );
    }

    handleSelection(selectedChoice: GameChoice) {
        this.setState(() => {
            return {
                ...this.state,
                selectedChoice
            };
        });
    }

    handleConfirmation() {
        this.props.onConfirmation(this.state.selectedChoice);
    }
}

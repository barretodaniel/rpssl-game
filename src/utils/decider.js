// @flow
import * as Decisions from './decisions';
import * as Choices from './choices';

type WinningScenarioMap = {
    [choice: Choices.GameChoice]: Array<Choices.GameChoice>
};

const winningScenarios: WinningScenarioMap = {
    [Choices.ROCK]: [Choices.SCISSORS, Choices.LIZARD],
    [Choices.PAPER]: [Choices.ROCK, Choices.SPOCK],
    [Choices.SCISSORS]: [Choices.PAPER, Choices.LIZARD],
    [Choices.SPOCK]: [Choices.ROCK, Choices.SCISSORS],
    [Choices.LIZARD]: [Choices.SPOCK, Choices.PAPER]
};

export function getDecision(
    playerDecision: Choices.GameChoice,
    opponentDecision: Choices.GameChoice
): Decisions.Decision {
    if (winningScenarios[playerDecision].includes(opponentDecision)) {
        return Decisions.WIN;
    } else if (winningScenarios[opponentDecision].includes(playerDecision)) {
        return Decisions.LOSE;
    }
    return Decisions.DRAW;
}

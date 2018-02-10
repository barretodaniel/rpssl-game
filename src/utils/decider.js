// @flow
import * as Decisions from './decisions';

import type { GameChoice } from './choices';

type WinningScenarioMap = {
    [choice: GameChoice]: Array<number>
};

type ChoiceValues = {
    [choice: GameChoice]: number
};

const Values: ChoiceValues = {
    rock: 0,
    paper: 1,
    scissors: 2,
    spock: 3,
    lizard: 4
};

const winningScenarios: WinningScenarioMap = {
    rock: [Values.scissor, Values.lizard],
    paper: [Values.rock, Values.spock],
    scissors: [Values.paper, Values.lizard],
    spock: [Values.rock, Values.scissors],
    lizard: [Values.spock, Values.paper]
};

export function getDecision(
    playerDecision: GameChoice,
    opponentDecision: GameChoice
): Decisions.Decision {
    if (winningScenarios[playerDecision].includes(Values[opponentDecision])) {
        return Decisions.WIN;
    } else if (winningScenarios[opponentDecision].includes(Values[playerDecision])) {
        return Decisions.LOSE;
    }
    return Decisions.DRAW;
}

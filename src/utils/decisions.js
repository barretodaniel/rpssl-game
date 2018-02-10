// @flow
export type Decision = 'win' | 'lose' | 'draw';
export const WIN = 'win';
export const LOSE = 'lose';
export const DRAW = 'draw';

export const icons = {
    [WIN]: 'winner',
    [LOSE]: 'close',
    [DRAW]: 'grab'
};

export const colors = {
    [WIN]: 'yellow',
    [LOSE]: 'red',
    [DRAW]: 'grey'
};

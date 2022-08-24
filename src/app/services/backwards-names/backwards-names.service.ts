import { Injectable } from '@angular/core';
import { Chance } from 'chance';

@Injectable()
export class BackwardsNamesService {
  getNames(length: number): string[] {
    const chance = new Chance();
    
    return Array(length).fill("").map(() => chance.name().split('').reverse().join(''));
  }
}

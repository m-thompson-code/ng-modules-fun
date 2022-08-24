import { Injectable } from '@angular/core';
import { uniqueNamesGenerator, names } from 'unique-names-generator';

@Injectable()
export class NamesService {
  getNames(length: number): string[] {
    return Array(length).fill("").map(() => uniqueNamesGenerator({
      dictionaries: [names],
    }));
  }
}

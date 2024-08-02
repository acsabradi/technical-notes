import { TestBed } from '@angular/core/testing';

import { FactorialService } from './factorial.service';


// describe: új tesztblokk létrehozása, amely egy adott funkció, modul vagy komponens tesztjeit csoportosítja
describe('FactorialService', () => {
  let service: FactorialService;

  // teszblokkon belüli trigger, amely minden it előtt lefut, azaz "frissen" létrehozunk egy service példányt,
  // hogy az ne befolyásolja a tesztet, hogy milyen a szolgáltatás belső állapota
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactorialService);
  });

  // it: egy konkrét teszteset a csoproton belül

  it('Negatív paraméter', () => {
    expect(() => service.getFactorial(-10)).toThrowError();
  });

  it('0! értéke 1', () => {
    expect(service.getFactorial(0)).toBe(1);
  })

  it('1! értéke 1', () => {
    expect(service.getFactorial(1)).toBe(1);
  })

  it('5! értéke 120', () => {
    expect(service.getFactorial(5)).toBe(120);
  })
});

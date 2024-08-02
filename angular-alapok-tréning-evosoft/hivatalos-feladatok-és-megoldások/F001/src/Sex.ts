// enum: felsorolás típus, kézzel sorolom fel a felvehető értékéket (a háttérben alapértelmezés szerint 
// 0-tól sorszámozzuk az elemeket -> később összehasonlítható)
// a háttértípus lehet numerikus vagy szöveg, ehhez a definíció során a képviselt értéket be kell állítani
export enum Sex{ // export -> másik állomány tudja importálni, ha szüksége van a típusra 
    MALE = 1, // a férfi érték a háttérben 1-et képvise
    FEMALE, // nő -> ha nem állítom be a konkrét értéket, akkor az előző érték + 1
    // további értékek felsorolása
}

// hivatkozások 
// 1) képesek vagyunk az enumot típusként használni, és az értékekre tudunk hivatkozni TÍPUS.érték formában 
let sex : Sex = Sex.FEMALE;


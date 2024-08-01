"use strict";
// egy másik fájl akkor tud hivatkozni a fájlban definiált elemekre, ha azt exportáljuk
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sex = void 0;
// enum: felsorolás típus (a háttérben integer vagy string elemekre épít)
var Sex;
(function (Sex) {
    Sex[Sex["MALE"] = 0] = "MALE";
    Sex[Sex["FEMALE"] = 1] = "FEMALE";
})(Sex || (exports.Sex = Sex = {}));

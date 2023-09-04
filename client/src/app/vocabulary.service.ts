import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


export interface VocabularyItem {
  korean: string;
  fr: string;
  sound: string;
}

const vocabulary: VocabularyItem[] = [
  { korean: '게임해', fr: 'Joue à des jeux', sound:'게임해.mp3' },
  { korean: '공부해', fr: 'Étudie', sound:'공부해.mp3' },
  { korean: '뭐해', fr: 'Que fais-tu?', sound:'뭐해.mp3' },
  { korean: '쉬고있어', fr: 'Je me repose', sound:'쉬고있어.mp3' },
  { korean: '안녕', fr: 'Salut', sound:'안녕.mp3' },
  { korean: '코딩해', fr: 'Je code', sound:'코딩해.mp3' },
  { korean: '고마워', fr: 'Merci', sound:'고마워.mp3' },
  { korean: '네', fr: 'Oui', sound:'네.mp3' },
  { korean: '밥 먹어', fr: 'Mange', sound:'밥 먹어.mp3' },
  { korean: '아니', fr: 'Non', sound:'아니.mp3' },
  { korean: '잘가', fr: 'Au revoir', sound:'잘가.mp3' }
];

@Injectable({
  providedIn: 'root'
})
export class VocabularyService {
  constructor() { }

  getVocabulary(): Observable<any[]> {
    // Simuler une requête HTTP en utilisant 'of' pour retourner les données de vocabulaire
    return of(vocabulary);
  }
}

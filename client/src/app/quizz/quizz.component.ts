import { Component, OnInit } from '@angular/core';
import { VocabularyItem, VocabularyService } from '../vocabulary.service'
import { PointsService } from '../Points.service';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  vocabularyData: VocabularyItem[] = [];
  correctAnswer!: VocabularyItem;
  options: any = [];
  question: string = '';

  constructor(private vocabularyService: VocabularyService, private pointsService: PointsService) { }

  ngOnInit(): void {
    this.vocabularyService.getVocabulary().subscribe(data => {
      this.vocabularyData = data;
      this.setQuizz();
    });
  }

  setQuizz() {
    this.setOptions(Math.floor(Math.random() * this.vocabularyData.length));
  }

  playSound(soundFile: string) {
    const audio = new Audio("assets/audio/" + soundFile);
    audio.play();
  };

  setOptions(questionIndex: number) {
    const tmpOptionsI: Array<number> = []
    while (tmpOptionsI.length < 3) {
      const optionI = Math.floor(Math.random() * this.vocabularyData.length);
      if (!tmpOptionsI.includes(optionI) && optionI !== questionIndex)
        tmpOptionsI.push(optionI)
    }
    tmpOptionsI.push(questionIndex)
    for (let i = tmpOptionsI.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tmpOptionsI[i], tmpOptionsI[j]] = [tmpOptionsI[j], tmpOptionsI[i]];
    }

    this.options = tmpOptionsI.map(i => this.vocabularyData[i])
    this.correctAnswer = this.vocabularyData[questionIndex]
    this.question = this.vocabularyData[questionIndex].fr
  }


  onOptionSelected(option: VocabularyItem): void {
    this.playSound(option.sound)
    if (option === this.correctAnswer) {
      this.pointsService.increasePoints(1)
      this.setQuizz()
    } else {
      console.log('nop')
    }
    this.pointsService.increaseTry(1)
  }

}

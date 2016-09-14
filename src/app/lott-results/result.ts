export class Result {
  CurrentDrawDate: Date;
  CurrentDrawNumber: number;
  Id: number;
  LottResultDesc: ResultDesc;
  LottResultDescId: number;
  LottResultDetails: ResultDetail[];
  Memo: string;
  Name: string;
  NextDrawDate: Date;
  NextDrawNumber: number;
  Supplementaries: string;
  SupplementariesName: string;
  WinningNumbers: string;
  WinningNumbersName: string;
  ColNames: string[];
  ColValues: string[][];
}

export class ResultDesc {
  AvailableCol: number;
  ColName0: string;
  ColName1: string;
  ColName2: string;
  ColName3: string;
  ColName4: string;
  ColName5: string;
  ColName6: string;
  ColName7: string;
  ColName8: string;
  ColName9: string;
  Id: number;
  IsCombinations: boolean;
  ShowType: string;
}

export class ResultDetail {
  ColValue0: string;
  ColValue1: string;
  ColValue2: string;
  ColValue3: string;
  ColValue4: string;
  ColValue5: string;
  ColValue6: string;
  ColValue7: string;
  ColValue8: string;
  ColValue9: string;
  Id: number;
  LottResultId: number;
}

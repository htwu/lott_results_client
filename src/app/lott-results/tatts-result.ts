export class TattsResult {
  ProductId: string;
  DrawNumber: number;
  DrawDate: Date;
  DrawDisplayName: string;
  DrawLogoUrl: string;
  PrimaryNumbers: number[];
  SecondaryNumbers: number[];
  TicketNumbers: string;
  Dividends: Dividend[];
}

export class Dividend {
  Division: number;
  BlocNumberOfWinners: number;
  BlocDividend: number;
  CompanyId: string;
  CompanyNumberOfWinners: number;
  CompanyDividend: number;
  PoolTransferType: string;
  PoolTransferredTo: number;
}
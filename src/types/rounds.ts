export interface Round {
  draw: Draw;
  error: null;
  requestId: string;
  sessionId: null;
  deviceId: string;
  session: null;
  sessionUser: null;
  clientInfo: null;
  requestInfo: RequestInfo;
}

export interface Draw {
  productName: string;
  seasonLastDraw: boolean;
  productId: number;
  currentNetSale: string;
  regCloseDescription: string;
  extraInfo: null;
  drawNumber: number;
  betIndex: number;
  drawState: string;
  drawStateId: number;
  regBetDisabled: string;
  regOpenTime: Date;
  regCloseTime: Date;
  cancelCloseTime: Date;
  sport: Sport;
  drawComment: string;
  bombenDrawNum: number;
  relatedDraws: RelatedDraw[];
  rowPrice: string;
  fund: null;
  drawEvents: DrawEvent[];
  retailerOpenTime: Date;
  retailerCloseTime: Date;
  retailerCancelCloseTime: Date;
  lastDateWithoutTimeOfDay: Date;
}

export interface DrawEvent {
  cancelled: boolean;
  eventComment: EventComment;
  eventDescription: string;
  extraInfo: null;
  eventNumber: number;
  eventTypeId: number;
  participantType: ParticipantTypeEnum;
  match: Match;
  odds: null;
  favouriteOdds: null;
  startOdds: StartOdds;
  betMetrics: BetMetrics;
  complementaryBetMetrics: unknown[];
  outcomes: null;
  svenskaFolket: SvenskaFolket;
  tioTidningarsTips: TioTidningarsTips;
  providerIds: ProviderID[];
}

export interface BetMetrics {
  eventTypeId: number;
  eventType: EventType;
  eventSubTypeId: number;
  eventSubType: EventSubType;
  distributionDate: Date;
  distributionRefDate: Date;
  values: Value[];
}

export enum EventSubType {
  Fulltid = "Fulltid",
}

export enum EventType {
  The1X2 = "1X2",
}

export interface Value {
  outcome: string;
  odds: Odds;
  distribution: Distribution;
}

export interface Distribution {
  distribution: string;
  refDistribution: string;
}

export interface Odds {
  odds: null;
  favouriteOdds: null;
  startOdds: string;
}

export enum EventComment {
  Empty = "",
  UppskjutenProcentfördelningVidEvLottning432829 = "Uppskjuten. Procentfördelning vid ev. lottning: 43-28-29",
}

export interface Match {
  matchId: number;
  matchStart: Date;
  status: Status;
  statusId: number;
  sportEventStatus: SportEventStatus;
  statusTime: Date;
  coverage: number;
  participants: Participant[];
  league: League;
  leagueTable: null;
  result: Result[];
  media: null;
  mutuals: null;
}

export interface League {
  id: number;
  uniqueLeagueId: number;
  name: LeagueName;
  shortName: null;
  country: Country;
  code: null;
  printAbbreviation: null;
  season: null;
  doShow: boolean;
  isHome: boolean;
  legacyKey: number;
  numTeams: number;
  popular: boolean;
  rank: number;
}

export interface Country {
  id: number;
  name: CountryNameEnum;
  isoCode: ISOCode;
  population: number;
}

export enum ISOCode {
  Eng = "ENG",
}

export enum CountryNameEnum {
  England = "England",
}

export enum LeagueName {
  Championship = "Championship",
  LeagueOne = "League One",
  PremierLeague = "Premier League",
}

export interface Participant {
  id: number;
  type: ParticipantType;
  name: string;
  trend: number;
  goalAvg: null;
  result?: string;
  shortName: string;
  mediumName: string;
  countryId: number;
  countryName: CountryNameEnum;
  isoCode: ISOCode;
  managerId: number;
  arenaId: number;
}

export enum ParticipantType {
  Away = "away",
  Home = "home",
}

export interface Result {
  type: number;
  sportEventResultType: SportEventResultType;
  description: Description;
  home: string;
  away: string;
  homePeriod: null;
  awayPeriod: null;
}

export enum Description {
  Current = "Current",
  FullTime = "Full time",
  MidTime = "Mid time",
  Period2 = "Period 2",
}

export enum SportEventResultType {
  Current = "Current",
  Fulltime = "Fulltime",
  Halftime = "Halftime",
  Period2 = "Period2",
}

export enum SportEventStatus {
  Ended = "Ended",
  Postponed = "Postponed",
}

export enum Status {
  Slut = "Slut",
  Uppskjuten = "Uppskjuten",
}

export enum ParticipantTypeEnum {
  Team = "Team",
}

export interface ProviderID {
  provider: Provider;
  type: ProviderIDType;
  id: string;
}

export enum Provider {
  BetRadar = "BetRadar",
}

export enum ProviderIDType {
  Normal = "Normal",
}

export interface StartOdds {
  one: string;
  x: string;
  two: string;
}

export interface SvenskaFolket {
  one: string;
  x: string;
  two: string;
  date: Date;
  refOne: string;
  refX: string;
  refTwo: string;
  refDate: Date;
}

export interface TioTidningarsTips {
  one: number;
  x: number;
  two: number;
}

export interface RelatedDraw {
  productId: number;
  drawNumber: number;
  regCloseTime: Date;
}

export interface Sport {
  id: number;
  type: number;
  name: string;
  numCountries: number;
}

export interface RequestInfo {
  transportProcessTime: number;
  backendProcessTime: number;
  fgwRTT: number;
  backendModuleProcessTime: number;
  channel: string;
  elapsedTime: number;
  apiVersion: number;
}

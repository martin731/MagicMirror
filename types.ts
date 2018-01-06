export declare const Module: {
  register(moduleName: string, moduleProperties: object): void;
};

export declare const Log: {
  info(message?: any, ...optionalParams: any[]): void,
  log(message?: any, ...optionalParams: any[]): void,
  error(message?: any, ...optionalParams: any[]): void,
  warn(message?: any, ...optionalParams: any[]): void,
  group(groupTitle?: string, ...optionalParams: any[]): void,
  groupCollapsed(groupTitle?: string, ...optionalParams: any[]): void,
  groupEnd(): void,
  time(timerName?: string): void,
  timeEnd(timerName?: string): void,
  timeStamp(timerName?: string): void,
};